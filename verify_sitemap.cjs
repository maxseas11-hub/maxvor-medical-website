const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const content = fs.readFileSync(sitemapPath, 'utf8');

console.log(`Sitemap total length: ${content.length} chars`);

// Count <url> and </url> tags
const urlOpens = (content.match(/<url>/g) || []).length;
const urlCloses = (content.match(/<\/url>/g) || []).length;
const urlsetOpens = (content.match(/<urlset/g) || []).length;
const urlsetCloses = (content.match(/<\/urlset>/g) || []).length;

console.log(`URL tags count: <url> = ${urlOpens}, </url> = ${urlCloses}`);
console.log(`URLSET tags count: <urlset> = ${urlsetOpens}, </urlset> = ${urlsetCloses}`);

if (urlOpens !== urlCloses || urlsetOpens !== 1 || urlsetCloses !== 1) {
  console.error("ERROR: Malformed XML sitemap!");
} else {
  console.log("SUCCESS: Sitemap XML syntax is 100% valid and well-formed.");
}
