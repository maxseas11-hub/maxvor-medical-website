const fs = require('fs');
const path = require('path');

const siteDataJsonPath = path.join(__dirname, 'public', 'api', 'site-data.json');
if (fs.existsSync(siteDataJsonPath)) {
  let content = fs.readFileSync(siteDataJsonPath, 'utf8');
  content = content.replace(/\bB2B\b/g, 'Direct');
  content = content.replace(/2026-b2b-handheld-ultrasound-procurement-and-tender-guide/g, '2026-handheld-ultrasound-procurement-guide');
  fs.writeFileSync(siteDataJsonPath, content, 'utf8');
  console.log('Cleaned public/api/site-data.json');
}
