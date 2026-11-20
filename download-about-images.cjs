const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://sc02.alicdn.com/kf/A0f0140e10516419ba834397e959d485eI.png',
    dest: path.join(__dirname, 'public', 'assets', 'images', 'about-warehouse-hub.jpg')
  },
  {
    url: 'https://sc02.alicdn.com/kf/A9993748afcd4459fa781d745d4122ac71.png',
    dest: path.join(__dirname, 'public', 'assets', 'images', 'about-supply-network.jpg')
  },
  {
    url: 'https://sc02.alicdn.com/kf/A9d9ff280d4564ee5ba576123d28898ect.png',
    dest: path.join(__dirname, 'public', 'assets', 'images', 'about-sourcing-capabilities.jpg')
  },
  {
    url: 'https://sc02.alicdn.com/kf/Af44a1f1f70704b98995375dd1fd15acae.png',
    dest: path.join(__dirname, 'public', 'assets', 'images', 'about-storage-racks.jpg')
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    https.get(item.url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode + ' for ' + item.url));
      }
      const file = fs.createWriteStream(item.dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log('Saved:', item.dest);
          resolve();
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const img of images) {
    try {
      await download(img);
    } catch (e) {
      console.error(e);
    }
  }
}

run();
