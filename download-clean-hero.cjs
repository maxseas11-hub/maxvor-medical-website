const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://sc04.alicdn.com/kf/A16d30c9b792242a1b1e227da11a07ea36.jpg';
const dest1 = path.join(__dirname, 'public', 'assets', 'images', 'hero-banner-showcase.jpg');
const dest2 = path.join(__dirname, 'public', 'assets', 'images', 'hero-banner-clean-bg.jpg');

https.get(url, (response) => {
  const file1 = fs.createWriteStream(dest1);
  response.pipe(file1);
  file1.on('finish', () => {
    file1.close(() => {
      fs.copyFileSync(dest1, dest2);
      console.log('Clean hero banner image saved successfully to:', dest1, 'and', dest2);
    });
  });
}).on('error', (err) => {
  console.error('Error downloading hero banner image:', err);
});
