const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'src', 'data.ts');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Function to sanitize name for filename
function sanitizeName(name) {
  return name.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/[\s-]+/g, '_') // replace spaces and hyphens with underscores
    .trim();
}

// Regex to match MenuItem objects inside MENU_ITEMS
const menuItemRegex = /\{\s*id:\s*'([^']*)',\s*name:\s*'([^']*)'([\s\S]*?)\}/g;

// Find MENU_ITEMS declaration block
const menuItemsStart = fileContent.indexOf('export const MENU_ITEMS: MenuItem[] = [');
const menuItemsEnd = fileContent.indexOf('];', menuItemsStart);

if (menuItemsStart === -1 || menuItemsEnd === -1) {
  console.error("Could not find MENU_ITEMS block");
  process.exit(1);
}

const menuItemsBlock = fileContent.substring(menuItemsStart, menuItemsEnd + 2);

// We replace the menu items with the updated version that includes the image path
let updatedBlock = menuItemsBlock.replace(menuItemRegex, (match, id, name, rest) => {
  const filename = sanitizeName(name);
  const imagePath = `/images/dishes/${filename}.png`;
  
  // Check if image property already exists
  if (rest.includes('image:')) {
    return match; // don't duplicate
  }
  
  // Insert image property
  const lines = match.split('\n');
  // Find the last line before the closing brace (which is just '  },')
  let insertIndex = lines.length - 1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '},') {
      insertIndex = i;
      break;
    }
  }
  lines.splice(insertIndex, 0, `    image: '${imagePath}',`);
  return lines.join('\n');
});

// Update the block in the file content
fileContent = fileContent.replace(menuItemsBlock, updatedBlock);

// Now update getFoodItemImage to prioritize item.image
const getFoodItemImageStart = fileContent.indexOf('export const getFoodItemImage =');
if (getFoodItemImageStart !== -1) {
  const targetSignature = `export const getFoodItemImage = (name: string, category: string): string => {`;
  const replacementSignature = `export const getFoodItemImage = (name: string, category: string): string => {
  const item = MENU_ITEMS.find(i => i.name === name);
  if (item && item.image) {
    return item.image;
  }
  
  const normalizedName = name.toLowerCase();`;

  if (!fileContent.includes('const item = MENU_ITEMS.find(')) {
    fileContent = fileContent.replace(targetSignature, replacementSignature);
  }
}

fs.writeFileSync(dataFilePath, fileContent, 'utf8');
console.log("Successfully updated src/data.ts with individual image paths!");
