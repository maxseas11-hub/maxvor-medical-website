const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.js'), 'utf8');

// Parse products
const regex = /export const FEATURED_PRODUCTS = (\[[\s\S]*?\]);\s*export const CERTIFICATIONS/m;
const match = content.match(regex);
const prods = (new Function(`return ${match[1]}`))();

const bandages = prods.filter(p => p.categoryId === 'bandages-and-wound-care' || p.category === 'bandages-and-wound-care' || p.category === 'bandages-wound-care');

console.log(`Found ${bandages.length} bandages & wound care products in products.js:`);
bandages.forEach((p, idx) => {
  console.log(`\n[${idx+1}] ID: ${p.id}`);
  console.log(`    Name: ${p.name}`);
  console.log(`    Image: ${p.image}`);
  console.log(`    Gallery (${p.gallery ? p.gallery.length : 0}):`, p.gallery);
});
