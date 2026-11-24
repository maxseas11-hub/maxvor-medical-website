const fs = require('fs');
const path = require('path');

const rawDir1 = path.join(__dirname, 'public', 'assets', 'images', 'endoscopy_raw');
if (fs.existsSync(rawDir1)) {
  fs.rmSync(rawDir1, { recursive: true, force: true });
}

const rawDir2 = path.join(__dirname, 'dist', 'assets', 'images', 'endoscopy_raw');
if (fs.existsSync(rawDir2)) {
  fs.rmSync(rawDir2, { recursive: true, force: true });
}

console.log('Cleaned endoscopy_raw directories.');
