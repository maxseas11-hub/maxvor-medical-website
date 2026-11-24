const fs = require('fs');
const path = require('path');

const gspmedDir = path.join(__dirname, 'public', 'assets', 'images', 'gspmed');
const imagesDir = path.join(__dirname, 'public', 'assets', 'images');

if (fs.existsSync(gspmedDir)) {
  const files = fs.readdirSync(gspmedDir);
  for (const f of files) {
    const src = path.join(gspmedDir, f);
    const dest = path.join(imagesDir, f);
    if (!fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${f} to public/assets/images/`);
    }
  }
}
