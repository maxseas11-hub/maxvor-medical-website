const fs = require('fs');
const path = require('path');

const productsFrJsPath = path.join(__dirname, 'src', 'data', 'productsFr.js');
const content = fs.readFileSync(productsFrJsPath, 'utf8');

const publicDir = path.join(__dirname, 'public');

const imgRegex = /"(image|squareImage)":\s*"([^"]+)"/g;
let match;
const missingImages = new Set();
const foundImages = new Set();

while ((match = imgRegex.exec(content)) !== null) {
  const imgUrl = match[2];
  if (!imgUrl.startsWith('http') && !imgUrl.startsWith('data:')) {
    const localPath = path.join(publicDir, imgUrl.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      missingImages.add(imgUrl);
    } else {
      foundImages.add(imgUrl);
    }
  }
}

console.log(`productsFr.js: Found ${foundImages.size} valid images, Missing ${missingImages.size} images.`);
if (missingImages.size > 0) {
  missingImages.forEach(img => console.log(' MISSING FR:', img));
}
