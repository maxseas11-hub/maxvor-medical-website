const fs = require('fs');
const path = require('path');

const endoDir = path.join(__dirname, 'public', 'assets', 'images', 'endoscopy');
const files = fs.readdirSync(endoDir);

console.log('All files in endoscopy directory:');
files.forEach(f => console.log(' -', f));
