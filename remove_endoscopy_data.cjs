const fs = require('fs');
const path = require('path');

// 1. Categories clean data
const cleanCategoriesEn = [
  {
    "id": "ultrasound-systems",
    "name": "Point-of-Care Ultrasound Diagnostic Systems",
    "shortName": "Ultrasound Diagnostic Systems",
    "image": "/assets/images/cat-ultrasound-matrix.png",
    "squareImage": "/assets/images/cat-ultrasound-square.png",
    "tagline": "Handheld USB Type-C & wireless diagnostic ultrasound probes for abdominal, vascular, cardiac, and obstetric point-of-care imaging",
    "subcategories": [
      "Convex Color Doppler & B/W Ultrasound Probes (3.5MHz R60)",
      "Linear Vascular & MSK Ultrasound Probes (7.5MHz L40)",
      "Micro-Convex 32-Channel Pediatric & Cardiac Probes (3.5MHz R20)",
      "Micro-Linear 32-Channel Small Organs & Vascular Probes (7.5MHz L25)"
    ],
    "specs": [
      "Transducer Elements: 128 Elements Synthetic Aperture",
      "Beamforming Architecture: 16-Channel / 32-Channel High Speed",
      "Display Modes: B, B/M, CFM, PDI, PW Spectral Doppler",
      "Multi-OS Compatibility: Android Smartphone, Tablet, Windows 10/11 PC",
      "Gain & Imaging: 8-Segment TGC, 0-100dB Dynamic Range, Cine Loop Replay"
    ],
    "moq": "1 Unit"
  },
  {
    "id": "bandages-and-wound-care",
    "name": "Medical Bandages, Tapes & Cold Therapy Consumables",
    "shortName": "Bandages & Wound Care Consumables",
    "image": "/assets/images/cat-bandages-matrix.png",
    "squareImage": "/assets/images/cat-bandages-square.png",
    "tagline": "Hospital-grade cohesive bandages, elastic strapping tapes, instant cryotherapy compression wraps, and emergency wound care consumables",
    "subcategories": [
      "Self-Adherent Cohesive Elastic Bandages & Transfusion Tapes",
      "Kinesiology Muscle Tapes & Rigid Breathable Cotton Strapping",
      "Instant Cold Compression Bandages & Cryotherapy Sprays",
      "Disposable Instant Cold Packs, Liquid Bandages & Reusable Therapy Bags"
    ],
    "specs": [
      "Materials: 100% Cotton, Breathable PU Foam, Spandex, Hypoallergenic Adhesive",
      "Key Features: Self-Adherent (Non-sticking to skin/hair), Hand Tearable, Waterproof",
      "Cryotherapy Performance: Up to 2h continuous cooling, 5°C temp reduction in 20min",
      "Packaging: Medical box & export carton packaging",
      "Clinical Applications: Emergency first aid, sports trauma R.I.C.E., orthopedic dressing"
    ],
    "moq": "1 Carton"
  }
];

const cleanCategoriesFr = [
  {
    "id": "ultrasound-systems",
    "name": "Systèmes d'Échographie POCUS Portables",
    "shortName": "Échographie Portable & Sondes",
    "image": "/assets/images/cat-ultrasound-matrix.png",
    "squareImage": "/assets/images/cat-ultrasound-square.png",
    "tagline": "Sondes d'échographie médicales portables USB Type-C et sans fil pour le diagnostic abdominal, vasculaire, cardiaque et obstétrique",
    "subcategories": [
      "Sondes Convexes Doppler Couleur & N&B (3.5MHz R60)",
      "Sondes Linéaires Vasculaires & Musculosquelettiques (7.5MHz L40)",
      "Sondes Micro-Convexes 32 Canaux Pédiatriques & Cardiaques (3.5MHz R20)",
      "Sondes Micro-Linéaires 32 Canaux Petites Structures (7.5MHz L25)"
    ],
    "specs": [
      "Éléments Acoustiques : 128 Éléments à Ouverture Synthétique",
      "Architecture de Numérisation : 16 Canaux / 32 Canaux Haute Vitesse",
      "Modes d'Affichage : B, B/M, CFM, PDI, Doppler Spectral Pulsé (PW)",
      "Compatibilité Multi-OS : Smartphone/Tablette Android, PC Windows 10/11",
      "Gain & Optimisation : 8 Segments TGC, Plage Dynamique 0-100dB, Boucle Cinéma"
    ],
    "moq": "1 Unité"
  },
  {
    "id": "bandages-and-wound-care",
    "name": "Bandages Médicaux, Rubans Adhésifs & Cryothérapie",
    "shortName": "Pansements & Soins des Plaies",
    "image": "/assets/images/cat-bandages-matrix.png",
    "squareImage": "/assets/images/cat-bandages-square.png",
    "tagline": "Bandages cohésifs de qualité hospitalière, rubans de kinésiologie, bandes de compression froide instantanée et consommables d'urgence",
    "subcategories": [
      "Bandages Élastiques Cohésifs Auto-Adhérents & Pansements de Perfusion",
      "Bandes de Kinésiologie Musculaire & Rubans Adhésifs Rigides en Coton",
      "Bandages de Cryothérapie Compressifs & Sprays Réfrigérants Instantanés",
      "Poches de Froid Instantané, Pansements Liquides & Poches Chaud/Froid"
    ],
    "specs": [
      "Matériaux : 100% Coton, Mousse PU Respirante, Élasthanne, Adhésif Hypoallergénique",
      "Caractéristiques Clés : Auto-Adhérent (Sans colle sur peau/poils), Déchirable à la main",
      "Performance Cryothérapie : Refroidissement continu jusqu'à 2h, baisse de 5°C en 20min",
      "Conditionnement : Boîte médicale unitaire & carton d'exportation standard",
      "Applications Cliniques : Premiers secours d'urgence, traumatologie sportive R.I.C.E., pansement"
    ],
    "moq": "1 Carton"
  }
];

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'categories.js'), `export const CATEGORIES = ${JSON.stringify(cleanCategoriesEn, null, 2)};\n`, 'utf8');
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'categoriesFr.js'), `export const CATEGORIES_FR = ${JSON.stringify(cleanCategoriesFr, null, 2)};\n`, 'utf8');
console.log('Cleaned categories.js and categoriesFr.js to 2 core categories.');

// 2. Filter products.js
const productsJsPath = path.join(__dirname, 'src', 'data', 'products.js');
let prodContent = fs.readFileSync(productsJsPath, 'utf8');
const certMatch = prodContent.match(/export const CERTIFICATIONS[\s\S]*$/);
const certCode = certMatch ? certMatch[0] : '';

const prodArrayMatch = prodContent.match(/export const FEATURED_PRODUCTS = (\[[\s\S]*?\]);\s*export const CERTIFICATIONS/);
if (prodArrayMatch) {
  const allProds = (new Function(`return ${prodArrayMatch[1]}`))();
  const cleanProds = allProds.filter(p => p.categoryId !== 'endoscopy-systems' && p.category !== 'endoscopy-systems');
  console.log(`Filtered products.js from ${allProds.length} down to ${cleanProds.length} products.`);
  const newProdJs = `export const FEATURED_PRODUCTS = ${JSON.stringify(cleanProds, null, 2)};\n\n${certCode}\n`;
  fs.writeFileSync(productsJsPath, newProdJs, 'utf8');
}

// 3. Filter productsFr.js
const productsFrJsPath = path.join(__dirname, 'src', 'data', 'productsFr.js');
let prodFrContent = fs.readFileSync(productsFrJsPath, 'utf8');
const certFrMatch = prodFrContent.match(/export const CERTIFICATIONS_FR[\s\S]*$/);
const certFrCode = certFrMatch ? certFrMatch[0] : '';

const prodFrArrayMatch = prodFrContent.match(/export const FEATURED_PRODUCTS_FR = (\[[\s\S]*?\]);\s*export const CERTIFICATIONS_FR/);
if (prodFrArrayMatch) {
  const allFrProds = (new Function(`return ${prodFrArrayMatch[1]}`))();
  const cleanFrProds = allFrProds.filter(p => p.categoryId !== 'endoscopy-systems' && p.category !== 'endoscopy-systems');
  console.log(`Filtered productsFr.js from ${allFrProds.length} down to ${cleanFrProds.length} products.`);
  const newProdFrJs = `export const FEATURED_PRODUCTS_FR = ${JSON.stringify(cleanFrProds, null, 2)};\n\n${certFrCode}\n`;
  fs.writeFileSync(productsFrJsPath, newProdFrJs, 'utf8');
}
