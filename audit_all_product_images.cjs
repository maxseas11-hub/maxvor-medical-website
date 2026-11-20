const fs = require('fs');
const path = require('path');

const productsJsPath = path.join(__dirname, 'src', 'data', 'products.js');
const content = fs.readFileSync(productsJsPath, 'utf8');

// Parse products using dynamic import or regex
const lines = content.split('\n');
const publicDir = path.join(__dirname, 'public');

console.log('Auditing all product image paths in products.js...');

const imgRegex = /"(image|squareImage)":\s*"([^"]+)"/g;
let match;
const missingImages = new Set();
const foundImages = new Set();

while ((match = imgRegex.exec(content)) !== null) {
  const imgUrl = match[2];
  if (!imgUrl.startsWith('http') && !imgUrl.startsWith('data:')) {
    // Relative to public
    const localPath = path.join(publicDir, imgUrl.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      missingImages.add(imgUrl);
    } else {
      foundImages.add(imgUrl);
    }
  }
}

// Also check gallery images
const galleryRegex = /"gallery":\s*\[([^\]]+)\]/g;
while ((match = galleryRegex.exec(content)) !== null) {
  const items = match[1].split(',');
  items.forEach(item => {
    const clean = item.replace(/[\s"']/g, '');
    if (clean && !clean.startsWith('http') && !clean.startsWith('data:')) {
      const localPath = path.join(publicDir, clean.replace(/^\//, ''));
      if (!fs.existsSync(localPath)) {
        missingImages.add(clean);
      } else {
        foundImages.add(clean);
      }
    }
  });
}

console.log(`Found ${foundImages.size} valid images.`);
console.log(`Missing ${missingImages.size} images:`);
missingImages.forEach(img => console.log(' MISSING:', img));
