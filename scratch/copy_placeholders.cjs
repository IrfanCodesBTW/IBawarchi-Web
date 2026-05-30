const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'src', 'data.ts');
const fileContent = fs.readFileSync(dataFilePath, 'utf8');

const dishesDir = path.join(__dirname, '..', 'public', 'images', 'dishes');

// Category to image mapping
const categoryImages = {
  'veg-soups': 'veg_soup.png',
  'non-veg-soups': 'chicken_soup.png',
  'salads': 'green_salad.png',
  'chicken-starters': 'chicken_starter.png',
  'chicken-biryani': 'chicken_biryani.png',
  'veg-biryani': 'veg_biryani.png',
  'noodles': 'chicken_noodles.png',
  'mutton-biryani': 'mutton_biryani.png',
  'chicken-kababs': 'chicken_kabab.png',
  'veg-starters': 'veg_starter.png',
  'indian-chicken-curries': 'butter_chicken.png',
  'veg-curries': 'veg_curry.png',
  'fried-rice': 'fried_rice.png',
  'indian-rotis': 'butter_naan.png',
};

// Function to sanitize name for filename
function sanitizeName(name) {
  return name.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/[\s-]+/g, '_') // replace spaces and hyphens with underscores
    .trim();
}

// Regex to extract menu items
const menuItemRegex = /\{\s*id:\s*'([^']*)',\s*name:\s*'([^']*)',\s*category:\s*'([^']*)',\s*categoryLabel:\s*'([^']*)',[\s\S]*?image:\s*'([^']*)'/g;

let match;
let copyCount = 0;

while ((match = menuItemRegex.exec(fileContent)) !== null) {
  const name = match[2];
  const category = match[3];
  const imageField = match[5];
  
  const targetFilename = path.basename(imageField);
  const sourceFilename = categoryImages[category];
  
  if (!sourceFilename) {
    console.warn(`No source image mapped for category: ${category}`);
    continue;
  }
  
  const sourcePath = path.join(dishesDir, sourceFilename);
  const targetPath = path.join(dishesDir, targetFilename);
  
  if (fs.existsSync(sourcePath)) {
    // If the target file already exists and is not the source file, don't copy (keep existing)
    if (sourcePath !== targetPath) {
      fs.copyFileSync(sourcePath, targetPath);
      copyCount++;
    }
  } else {
    console.error(`Source image does not exist: ${sourcePath}`);
  }
}

console.log(`Successfully created ${copyCount} individual image placeholder files!`);
