const fs = require('fs');
const path = require('path');

// Read existing products
const productsJsPath = path.join(__dirname, 'src', 'data', 'products.js');
const productsJsContent = fs.readFileSync(productsJsPath, 'utf8');

const productsFrJsPath = path.join(__dirname, 'src', 'data', 'productsFr.js');
const productsFrJsContent = fs.readFileSync(productsFrJsPath, 'utf8');

// Parse existing 40 core products
const enMatch = productsJsContent.match(/export const FEATURED_PRODUCTS = (\[[\s\S]*?\]);\s*export const CERTIFICA
<omitted chars="47870" />