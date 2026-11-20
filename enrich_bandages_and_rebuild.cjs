const fs = require('fs');
const path = require('path');

console.log('--- Enriching Bandages & Wound Care galleries ---');

// Define rich image gallery mappings for the 13 Bandages & Wound Care products
const bandageGalleries = {
  'kinesiology-muscle-tape-waterproof-elastic': [
    '/assets/images/gspmed/image7.png',
    '/assets/images/cat-bandages-matrix.png',
    '/assets/images/cat-bandages-square.png'
  ],
  'medical-cohesive-elastic-bandage-self-adherent': [
    '/assets/images/gspmed/image1.png',
    '/assets/images/gspmed/image2.png',
    '/assets/images/gspmed/image3.png',
    '/assets/images/gspmed/image6.png'
  ],
  'elastic-medical-transfusion-bandage-infusion-tape': [
    '/assets/images/gspmed/image4.png',
    '/assets/images/gspmed/image5.png',
    '/assets/images/gspmed/image1.png'
  ],
  'rigid-breathable-medical-strapping-tape': [
    '/assets/images/gspmed/image8.png',
    '/assets/images/gspmed/image7.png',
    '/assets/images/cat-bandages-matrix.png'
  ],
  'medical-pu-foam-underwrap-sports-pre-wrap': [
    '/assets/images/gspmed/image9.png',
    '/assets/images/gspmed/image8.png',
    '/assets/images/gspmed/image7.png'
  ],
  'light-elastic-adhesive-cotton-bandage': [
    '/assets/images/gspmed/image10.png',
    '/assets/images/gspmed/image11.png',
    '/assets/images/gspmed/image1.png'
  ],
  'heavy-duty-elastic-cotton-compression-bandage': [
    '/assets/images/gspmed/image11.png',
    '/assets/images/gspmed/image10.png',
    '/assets/images/cat-bandages-square.png'
  ],
  'instant-cold-compression-therapy-bandage': [
    '/assets/images/gspmed/image12.png',
    '/assets/images/gspmed/image13.png',
    '/assets/images/gspmed/image14.png'
  ],
  'self-adherent-cohesive-cold-compression-bandage': [
    '/assets/images/gspmed/image13.png',
    '/assets/images/gspmed/image12.png',
    '/assets/images/gspmed/image15.png'
  ],
  'instant-ice-cold-spray-for-sports-injury': [
    '/assets/images/gspmed/image14.png',
    '/assets/images/gspmed/image15.png',
    '/assets/images/gspmed/image12.png'
  ],
  'disposable-instant-cold-ice-pack': [
    '/assets/images/gspmed/image15.png',
    '/assets/images/gspmed/image16.png',
    '/assets/images/gspmed/image14.png'
  ],
  'medical-liquid-wound-dressing-bandage': [
    '/assets/images/gspmed/image17.png',
    '/assets/images/gspmed/image1.png',
    '/assets/images/cat-bandages-matrix.png'
  ],
  'reusable-hot-and-cold-therapy-ice-bag': [
    '/assets/images/gspmed/image16.png',
    '/assets/images/gspmed/image15.png',
    '/assets/images/gspmed/image12.png'
  ]
};

function updateFileGalleries(filePath, exportName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = new RegExp(`export const ${exportName} = \\[([\\s\\S]*?)\\];\\s*\\n\\s*export const CERTIFICATIONS`, 'm');
  const match = content.match(regex);
  if (!match) return;

  const rawArrayStr = `[${match[1]}]`;
  const parsedArray = (new Function(`return ${rawArrayStr}`))();

  parsedArray.forEach(p => {
    if (bandageGalleries[p.id]) {
      p.gallery = bandageGalleries[p.id];
    }
  });

  const newArrayStr = `export const ${exportName} = ` + JSON.stringify(parsedArray, null, 2) + ';\n\nexport const CERTIFICATIONS';
  const newContent = content.replace(regex, newArrayStr);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated galleries in ${filePath}`);
}

updateFileGalleries(path.join(__dirname, 'src', 'data', 'products.js'), 'FEATURED_PRODUCTS');
updateFileGalleries(path.join(__dirname, 'src', 'data', 'productsFr.js'), 'FEATURED_PRODUCTS_FR');

console.log('Galleries enrichment complete.');
