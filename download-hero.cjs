const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://sc04.alicdn.com/kf/A8e6fc76363404698b5fe2af1be42802fy.jpg';
const dest = path.join(__dirname, 'public', 'assets', 'images', 'hero-banner-showcase.jpg');

const file = fs.createWriteStream(dest);
https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close(() => {
      console.log('Hero banner image downloaded successfully to:', dest);
    });
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading hero banner image:', err);
});
