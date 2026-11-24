const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distDir = path.join(__dirname, 'dist');
const zipFile = path.join(__dirname, '..', 'maxvor-medical-website-dist.zip');

if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

const psScript = `Compress-Archive -Path '${distDir}\\*' -DestinationPath '${zipFile}' -Force`;
execSync(`powershell -NoProfile -Command "${psScript}"`, { stdio: 'inherit' });

console.log('Zip package generated at:', zipFile);
