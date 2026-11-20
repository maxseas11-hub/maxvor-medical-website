const fs = require('fs');
const path = require('path');

console.log('--- Step 1: Creating all image alias files in public/assets/images/endoscopy/ ---');
const endoDir = path.join(__dirname, 'public', 'assets', 'images', 'endoscopy');

const aliasMap = {
  'digital-visual-sheathing-lithotripsy-tower.png': [
    'Digital Vontoscope  Digital Visual Sheathing and Negative Pressure Lithotriptoscope System.png',
    'digital-visual-sheathing-negative-pressure-lithotriptoscope-system.png'
  ],
  '4k-uhd-camera-system.png': [
    '4K UHD Medical Endoscopic Camera System.png',
    '4k-ultra-hd-medical-endoscopic-camera-system.png'
  ],
  'digital-hysteroscope-surgery-system.png': [
    'Digital Hysteroscope Surgery System.png'
  ],
  'single-use-flexible-cystoscope.png': [
    'Single-use Digital Flexible Cystoscope.png',
    'single-use-digital-flexible-cystoscope.png'
  ],
  'custom-nephroscope-instruments.png': [
    '1 Matching Surgical Instrument and Accessories.png',
    'Matching Surgical Instrument and Accessories.png'
  ],
  'ureteral-guide-sheath-full-set.png': [
    'Single-use Ureteral Guide Sheath Flexible Universal Bendable Negative Pressure Calculus-Removing Sheath.png'
  ],
  'digital-visual-sheathing-endoscope.png': [
    'Digital Visual Sheathing Endoscope ú¿9802.8681ú⌐.png'
  ],
  'endoscope-irrigator-perfusion-pump.png': [
    'Endoscope Irrigator 2.png'
  ],
  'sheath-free-cystoscope-accessories.png': [
    'Sheath-free Rigid Digital Cystoscope with Channel Matching Surgical Instrument and Accessories.png'
  ],
  'miniature-nephroscope-auxiliary.png': [
    'Miniature Nephroscope Auxiliary Products.png'
  ]
};

// Check if any files with mangled encoding or raw names exist and copy to target
const allEndoFiles = fs.readdirSync(endoDir);

for (const [targetName, sourceNames] of Object.entries(aliasMap)) {
  const targetPath = path.join(endoDir, targetName);
  if (!fs.existsSync(targetPath)) {
    let copied = false;
    for (const src of sourceNames) {
      const srcPath = path.join(endoDir, src);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, targetPath);
        console.log(`Copied: ${src} -> ${targetName}`);
        copied = true;
        break;
      }
    }
    if (!copied) {
      // Find fuzzy match in allEndoFiles
      const match = allEndoFiles.find(f => f.toLowerCase().includes(targetName.split('-')[0]) || f.toLowerCase().includes(targetName.split('-')[1]));
      if (match) {
        fs.copyFileSync(path.join(endoDir, match), targetPath);
        console.log(`Fuzzy copied: ${match} -> ${targetName}`);
      }
    }
  }
}

// 2. Fix categories.js and categoriesFr.js
console.log('--- Step 2: Updating categories.js and categoriesFr.js with dedicated matrix images ---');
const catJsPath = path.join(__dirname, 'src', 'data', 'categories.js');
let catJs = fs.readFileSync(catJsPath, 'utf8');
catJs = catJs.replace(
  /"image":\s*"\/assets\/images\/endoscopy\/[^"]+"/,
  '"image": "/assets/images/cat-endoscopy-matrix.png"'
).replace(
  /"squareImage":\s*"\/assets\/images\/endoscopy\/[^"]+"/,
  '"squareImage": "/assets/images/cat-endoscopy-square.png"'
);
fs.writeFileSync(catJsPath, catJs, 'utf8');

const catFrJsPath = path.join(__dirname, 'src', 'data', 'categoriesFr.js');
let catFrJs = fs.readFileSync(catFrFrJsPath = catFrJsPath, 'utf8');
catFrJs = catFrJs.replace(
  /"image":\s*"\/assets\/images\/endoscopy\/[^"]+"/,
  '"image": "/assets/images/cat-endoscopy-matrix.png"'
).replace(
  /"squareImage":\s*"\/assets\/images\/endoscopy\/[^"]+"/,
  '"squareImage": "/assets/images/cat-endoscopy-square.png"'
);
fs.writeFileSync(catFrJsPath, catFrJs, 'utf8');

// 3. Reorder products: Ultrasound + Consumables first, Endoscopy LAST
console.log('--- Step 3: Reordering products so Endoscopy products are placed at the end ---');

function reorderProductsFile(filePath, exportName) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Extract FEATURED_PRODUCTS array
  const regex = new RegExp(`export const ${exportName} = \\[([\\s\\S]*?)\\];\\s*\\n\\s*export const CERTIFICATIONS`, 'm');
  const match = content.match(regex);
  if (!match) {
    console.error(`Could not match ${exportName} in ${filePath}`);
    return;
  }

  // Parse items safely with Function or JSON
  const rawArrayStr = `[${match[1]}]`;
  let parsedArray;
  try {
    parsedArray = (new Function(`return ${rawArrayStr}`))();
  } catch (e) {
    console.error('Failed to parse array in', filePath, e);
    return;
  }

  // Separate endoscopy products and non-endoscopy products
  const nonEndo = parsedArray.filter(p => p.categoryId !== 'endoscopy-systems' && p.category !== 'endoscopy-systems');
  const endo = parsedArray.filter(p => p.categoryId === 'endoscopy-systems' || p.category === 'endoscopy-systems');

  console.log(`${exportName}: ${nonEndo.length} non-endoscopy + ${endo.length} endoscopy products.`);

  // Place non-endoscopy products first, endoscopy products at the end
  const reordered = [...nonEndo, ...endo];

  const newArrayStr = `export const ${exportName} = ` + JSON.stringify(reordered, null, 2) + ';\n\nexport const CERTIFICATIONS';
  const newContent = content.replace(regex, newArrayStr);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Successfully reordered ${filePath} (${reordered.length} total products).`);
}

reorderProductsFile(path.join(__dirname, 'src', 'data', 'products.js'), 'FEATURED_PRODUCTS');
reorderProductsFile(path.join(__dirname, 'src', 'data', 'productsFr.js'), 'FEATURED_PRODUCTS_FR');

console.log('--- Step 4: Updating Categories.jsx grid layout ---');
const catComponentPath = path.join(__dirname, 'src', 'components', 'categories', 'Categories.jsx');
let catComponent = fs.readFileSync(catComponentPath, 'utf8');
catComponent = catComponent.replace(
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">',
  '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1720px] mx-auto">'
);
fs.writeFileSync(catComponentPath, catComponent, 'utf8');
console.log('Categories.jsx updated with responsive 3-column desktop grid.');

console.log('--- Step 5: Updating siteStore.js with deep migration and image preservation ---');
// Write enhanced siteStore.js
