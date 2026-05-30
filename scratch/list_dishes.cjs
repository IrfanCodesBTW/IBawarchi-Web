const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'src', 'data.ts');
const fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Function to sanitize name for filename
function sanitizeName(name) {
  return name.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/[\s-]+/g, '_') // replace spaces and hyphens with underscores
    .trim();
}

// Regex to extract menu items
const menuItemRegex = /\{\s*id:\s*'([^']*)',\s*name:\s*'([^']*)',\s*category:\s*'([^']*)',\s*categoryLabel:\s*'([^']*)',\s*price:\s*(\d+),[\s\S]*?description:\s*'([^']*)',[\s\S]*?image:\s*'([^']*)'/g;

let match;
const dishes = [];
while ((match = menuItemRegex.exec(fileContent)) !== null) {
  dishes.push({
    id: match[1],
    name: match[2],
    category: match[3],
    categoryLabel: match[4],
    price: parseInt(match[5]),
    description: match[6],
    image: match[7],
    filename: sanitizeName(match[2])
  });
}

console.log(JSON.stringify(dishes, null, 2));
console.log(`\nTotal dishes found: ${dishes.length}`);
