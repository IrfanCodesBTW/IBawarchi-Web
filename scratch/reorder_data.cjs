const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'data.ts');
let content = fs.readFileSync(dataPath, 'utf8');

// Category priority mapping
const categoryOrder = [
  'chicken-starters',
  'chicken-biryani',
  'mutton-biryani',
  'veg-soups',
  'non-veg-soups',
  'salads',
  'veg-biryani',
  'noodles',
  'chicken-kababs',
  'veg-starters',
  'indian-chicken-curries',
  'veg-curries',
  'fried-rice',
  'indian-rotis'
];

function getCategoryPriority(catId) {
  const idx = categoryOrder.indexOf(catId);
  return idx === -1 ? 999 : idx;
}

// 1. Reorder CATEGORIES
const categoriesStartIdx = content.indexOf('export const CATEGORIES = [');
const categoriesEndIdx = content.indexOf('];', categoriesStartIdx);
if (categoriesStartIdx === -1 || categoriesEndIdx === -1) {
  console.error("Could not find CATEGORIES block!");
  process.exit(1);
}

const categoriesBlock = content.substring(categoriesStartIdx, categoriesEndIdx + 2);

// Extract the category items: { id: '...', label: '...' }
const categoryRegex = /\{\s*id:\s*'([^']*)',\s*label:\s*'([^']*)'\s*\}/g;
const categoryItems = [];
let catMatch;
while ((catMatch = categoryRegex.exec(categoriesBlock)) !== null) {
  categoryItems.push({
    id: catMatch[1],
    label: catMatch[2],
    raw: catMatch[0]
  });
}

// Sort category items, keeping 'all' first, then sort by categoryOrder
categoryItems.sort((a, b) => {
  if (a.id === 'all') return -1;
  if (b.id === 'all') return 1;
  return getCategoryPriority(a.id) - getCategoryPriority(b.id);
});

const newCategoriesBlock = 'export const CATEGORIES = [\n' +
  categoryItems.map(item => `  { id: '${item.id}', label: '${item.label}' }`).join(',\n') +
  '\n];';

content = content.replace(categoriesBlock, newCategoriesBlock);


// 2. Reorder MENU_ITEMS
const menuItemsStartIdx = content.indexOf('export const MENU_ITEMS: MenuItem[] = [');
const menuItemsEndIdx = content.indexOf('];', menuItemsStartIdx);
if (menuItemsStartIdx === -1 || menuItemsEndIdx === -1) {
  console.error("Could not find MENU_ITEMS block!");
  process.exit(1);
}

const menuItemsBlock = content.substring(menuItemsStartIdx, menuItemsEndIdx + 2);

// Parse all MenuItem blocks
// MenuItems are separated by braces, e.g. { id: '...', ... },
const itemBlockRegex = /\{\s*id:\s*'([^']*)',[\s\S]*?category:\s*'([^']*)',[\s\S]*?\},\n?/g;
const menuItems = [];
let itemMatch;
while ((itemMatch = itemBlockRegex.exec(menuItemsBlock)) !== null) {
  menuItems.push({
    id: itemMatch[1],
    category: itemMatch[2],
    raw: itemMatch[0].trim()
  });
}

console.log(`Parsed ${menuItems.length} menu items.`);

// Group items by category
const groupedItems = {};
for (const item of menuItems) {
  if (!groupedItems[item.category]) {
    groupedItems[item.category] = [];
  }
  groupedItems[item.category].push(item);
}

// Rebuild MENU_ITEMS block in sorted category order
let newMenuItemsContent = 'export const MENU_ITEMS: MenuItem[] = [\n';

// Labels mapping for headers
const headerLabels = {
  'chicken-starters': 'CHICKEN STARTERS',
  'chicken-biryani': 'CHICKEN BIRYANI',
  'mutton-biryani': 'MUTTON BIRYANI',
  'veg-soups': 'VEG SOUPS',
  'non-veg-soups': 'NON VEG SOUPS',
  'salads': 'SALADS',
  'veg-biryani': 'VEG BIRYANI',
  'noodles': 'NOODLES',
  'chicken-kababs': 'CHICKEN KABABS',
  'veg-starters': 'VEG STARTERS',
  'indian-chicken-curries': 'INDIAN CHICKEN CURRIES',
  'veg-curries': 'VEG CURRIES',
  'fried-rice': 'FRIED RICE',
  'indian-rotis': 'INDIAN ROTIS'
};

for (const catId of categoryOrder) {
  const items = groupedItems[catId];
  if (items && items.length > 0) {
    const label = headerLabels[catId] || catId.toUpperCase().replace(/-/g, ' ');
    newMenuItemsContent += `  // === ${label} ===\n`;
    for (const item of items) {
      newMenuItemsContent += `  ${item.raw}\n`;
    }
    newMenuItemsContent += '\n';
  }
}

// Remove trailing newlines and add closing bracket
newMenuItemsContent = newMenuItemsContent.trim() + '\n];';

content = content.replace(menuItemsBlock, newMenuItemsContent);

fs.writeFileSync(dataPath, content, 'utf8');
console.log("Successfully reordered CATEGORIES and MENU_ITEMS in src/data.ts!");
