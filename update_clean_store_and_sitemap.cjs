const fs = require('fs');
const path = require('path');

// 1. Rebuild clean sitemap.xml with 40 products + static pages + 21 blog articles
const productsJs = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.js'), 'utf8');
const prodArrayMatch = productsJs.match(/export const FEATURED_PRODUCTS = (\[[\s\S]*?\]);\s*export const CERTIFICATIONS/);
const prods = (new Function(`return ${prodArrayMatch[1]}`))();

const articlesJs = fs.readFileSync(path.join(__dirname, 'src', 'data', 'articles.js'), 'utf8');
const articleArrayMatch = articlesJs.match(/export const BLOG_ARTICLES = (\[[\s\S]*?\]);/);
const articles = (new Function(`return ${articleArrayMatch[1]}`))();

const baseUrl = 'https://maxvor.com';
const today = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/products</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/certifications</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

// Add 40 clean products
prods.forEach(p => {
  const slug = p.slug || p.id;
  sitemapXml += `  <url>
    <loc>${baseUrl}/products/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

// Add 21 articles
articles.forEach(a => {
  const slug = a.slug || a.id;
  sitemapXml += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

sitemapXml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Rebuilt sitemap.xml with ${7 + prods.length + articles.length} URLs.`);

// 2. Also write clean initial site-data.json
const siteData = {
  productsEn: prods,
  categoriesEn: [
    {
      "id": "ultrasound-systems",
      "name": "Point-of-Care Ultrasound Diagnostic Systems",
      "shortName": "Ultrasound Diagnostic Systems",
      "image": "/assets/images/cat-ultrasound-matrix.png",
      "squareImage": "/assets/images/cat-ultrasound-square.png",
      "tagline": "Handheld USB Type-C & wireless diagnostic ultrasound probes for abdominal, vascular, cardiac, and obstetric point-of-care imaging",
      "moq": "1 Unit"
    },
    {
      "id": "bandages-and-wound-care",
      "name": "Medical Bandages, Tapes & Cold Therapy Consumables",
      "shortName": "Bandages & Wound Care Consumables",
      "image": "/assets/images/cat-bandages-matrix.png",
      "squareImage": "/assets/images/cat-bandages-square.png",
      "tagline": "Hospital-grade cohesive bandages, elastic strapping tapes, instant cryotherapy compression wraps, and emergency wound care consumables",
      "moq": "1 Carton"
    }
  ],
  articlesEn: articles,
  lastUpdated: new Date().toISOString()
};

fs.writeFileSync(path.join(__dirname, 'public', 'api', 'site-data.json'), JSON.stringify(siteData, null, 2), 'utf8');
console.log('Written clean public/api/site-data.json');
