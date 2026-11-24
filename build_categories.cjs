const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// 1. Categories (EN)
const categoriesEn = [
  {
    id: "ultrasound-systems",
    name: "Point-of-Care Ultrasound Diagnostic Systems",
    shortName: "Ultrasound Diagnostic Systems",
    image: "/assets/images/cat-ultrasound-matrix.png",
    squareImage: "/assets/images/cat-ultrasound-square.png",
    tagline: "Handheld USB Type-C & wireless diagnostic ultrasound probes for abdominal, vascular, cardiac, and obstetric point-of-care imaging",
    subcategories: [
      "Convex Color Doppler & B/W Ultrasound Probes (3.5MHz R60)",
      "Linear Vascular & MSK Ultrasound Probes (7.5MHz L40)",
      "Micro-Convex 32-Channel Pediatric & Cardiac Probes (3.5MHz R20)",
      "Micro-Linear 32-Channel Small Organs & Vascular Probes (7.5MHz L25)"
    ],
    specs: [
      "Transducer Elements: 128 Elements Synthetic Aperture",
      "Beamforming Architecture: 16-Channel / 32-Channel High Speed",
      "Display Modes: B, B/M, CFM, PDI, PW Spectral Doppler",
      "Multi-OS Compatibility: Android Smartphone, Tablet, Windows 10/11 PC",
      "Gain & Imaging: 8-Segment TGC, 0-100dB Dynamic Range, Cine Loop Replay"
    ],
    moq: "1 Unit"
  },
  {
    id: "endoscopy-systems",
    name: "Rigid & Flexible Endoscopy Systems & Accessories",
    shortName: "Endoscopy Systems & Instruments",
    image: "/assets/images/cat-endoscopy-matrix.png",
    squareImage: "/assets/images/cat-endoscopy-square.png",
    tagline: "High-definition digital nephroscopes, ureteroscopes, cystoscopes, hysteroscopes, 4K camera processors, and negative pressure lithotripsy instruments",
    subcategories: [
      "Digital Visual Puncture & Miniature Nephroscopes (0.9mm / 8.5/12Fr / 15/18Fr)",
      "Rigid & Single-Use/Reusable Digital Flexible Uretero-renoscopes (275° Deflection)",
      "Sheath-Free Rigid & Digital Flexible Cystoscopes & Resection Laserscopes",
      "4K UHD Camera Systems, 100W Cold Light Sources & Negative Pressure Sheaths"
    ],
    specs: [
      "Imaging Resolution: 160,000 / 520,000 Pixels CMOS & 4K UHD 3840×2160 Output",
      "Optics & Durability: High-Transmittance Columnar Crystal & Sapphire Window Seal",
      "Channel Geometries: Dual-Channel & Oval Auto-Pressure Regulating Tube Designs",
      "Surgical Versatility: Mini-PCNL, Ureteroscopy, Laser Enucleation & TTTS Fetoscopy",
      "Integrated Connectors: Direct Video Plug with Zero Fragile Fiber-Optic Bundles"
    ],
    moq: "1 Unit"
  },
  {
    id: "bandages-and-wound-care",
    name: "Medical Bandages, Tapes & Cold Therapy Consumables",
    shortName: "Bandages & Wound Care Consumables",
    image: "/assets/images/cat-bandages-matrix.png",
    squareImage: "/assets/images/cat-bandages-square.png",
    tagline: "Hospital-grade cohesive bandages, elastic strapping tapes, instant cryotherapy compression wraps, and emergency wound care consumables",
    subcategories: [
      "Self-Adherent Cohesive Elastic Bandages & Transfusion Tapes",
      "Kinesiology Muscle Tapes & Rigid Breathable Cotton Strapping",
      "Instant Cold Compression Bandages & Cryotherapy Sprays",
      "Disposable Instant Cold Packs, Liquid Bandages & Reusable Therapy Bags"
    ],
    specs: [
      "Materials: 100% Cotton, Breathable PU Foam, Spandex, Hypoallergenic Adhesive",
      "Key Features: Self-Adherent (Non-sticking to skin/hair), Hand Tearable, Waterproof",
      "Cryotherapy Performance: Up to 2h continuous cooling, 5°C temp reduction in 20min",
      "Packaging: Medical box & export carton packaging",
      "Clinical Applications: Emergency first aid, sports trauma R.I.C.E., orthopedic dressing"
    ],
    moq: "1 Carton"
  }
];

// 2. Categories (FR)
const categoriesFr = [
  {
    id: "ultrasound-systems",
    name: "Systèmes d'Échographie POCUS Portables",
    shortName: "Échographie Portable & Sondes",
    image: "/assets/images/cat-ultrasound-matrix.png",
    squareImage: "/assets/images/cat-ultrasound-square.png",
    tagline: "Sondes d'échographie médicales portables USB Type-C et sans fil pour le diagnostic abdominal, vasculaire, cardiaque et obstétrique",
    subcategories: [
      "Sondes Convexes Doppler Couleur & N&B (3.5MHz R60)",
      "Sondes Linéaires Vasculaires & Musculosquelettiques (7.5MHz L40)",
      "Sondes Micro-Convexes 32 Canaux Pédiatriques & Cardiaques (3.5MHz R20)",
      "Sondes Micro-Linéaires 32 Canaux Petites Structures (7.5MHz L25)"
    ],
    specs: [
      "Éléments Acoustiques : 128 Éléments à Ouverture Synthétique",
      "Architecture de Numérisation : 16 Canaux / 32 Canaux Haute Vitesse",
      "Modes d'Affichage : B, B/M, CFM, PDI, Doppler Spectral Pulsé (PW)",
      "Compatibilité Multi-OS : Smartphone/Tablette Android, PC Windows 10/11",
      "Gain & Optimisation : 8 Segments TGC, Plage Dynamique 0-100dB, Boucle Cinéma"
    ],
    moq: "1 Unité"
  },
  {
    id: "endoscopy-systems",
    name: "Systèmes d'Endoscopie Rigide & Souple et Accessoires",
    shortName: "Endoscopie & Instruments Chirurgicaux",
    image: "/assets/images/cat-endoscopy-matrix.png",
    squareImage: "/assets/images/cat-endoscopy-square.png",
    tagline: "Néphroscopes numériques haute définition, urétéroscopes, cystoscopes, hystéroscopes, processeurs de caméra 4K et instruments de lithotripsie à pression négative",
    subcategories: [
      "Mini-Néphroscopes Numériques de Ponction Visuelle (0.9mm / 8.5/12Fr / 15/18Fr)",
      "Urétéro-Rénoscopes Numériques Rigides et Souples à Usage Unique / Réutilisables (Béquillage 275°)",
      "Cystoscopes Numériques Rigides Sans Gaine et Laséroscopes d'Énucléation Prostatique",
      "Systèmes de Caméra 4K UHD, Sources de Lumière Froide 100W & Gaines à Pression Négative"
    ],
    specs: [
      "Résolution d'Imagerie : CMOS 160 000 / 520 000 Pixels & Sortie Vidéo 4K UHD 3840×2160",
      "Optique & Durabilité : Cristal Colonnaire Haute Transmittance & Verre Saphir Inrayable",
      "Géométrie des Canaux : Canaux Doubles & Profil Ovale d'Autorégulation de Pression",
      "Polyvalence Chirurgicale : Mini-PCNL, Urétéroscopie, Énucléation Laser & Fœtoscopie TTTS",
      "Connectique Intégrée : Prise Vidéo Directe Sans Faisceau de Fibres Optiques Fragile"
    ],
    moq: "1 Unité"
  },
  {
    id: "bandages-and-wound-care",
    name: "Bandages Médicaux, Rubans Adhésifs & Cryothérapie",
    shortName: "Pansements & Soins des Plaies",
    image: "/assets/images/cat-bandages-matrix.png",
    squareImage: "/assets/images/cat-bandages-square.png",
    tagline: "Bandages cohésifs de qualité hospitalière, rubans de kinésiologie, bandes de compression froide instantanée et consommables d'urgence",
    subcategories: [
      "Bandages Élastiques Cohésifs Auto-Adhérents & Pansements de Perfusion",
      "Bandes de Kinésiologie Musculaire & Rubans Adhésifs Rigides en Coton",
      "Bandages de Cryothérapie Compressifs & Sprays Réfrigérants Instantanés",
      "Poches de Froid Instantané, Pansements Liquides & Poches Chaud/Froid"
    ],
    specs: [
      "Matériaux : 100% Coton, Mousse PU Respirante, Élasthanne, Adhésif Hypoallergénique",
      "Caractéristiques Clés : Auto-Adhérent (Sans colle sur peau/poils), Déchirable à la main",
      "Performance Cryothérapie : Refroidissement continu jusqu'à 2h, baisse de 5°C en 20min",
      "Conditionnement : Boîte médicale unitaire & carton d'exportation standard",
      "Applications Cliniques : Premiers secours d'urgence, traumatologie sportive R.I.C.E., pansement"
    ],
    moq: "1 Carton"
  }
];

fs.writeFileSync(path.join(rootDir, 'src', 'data', 'categories.js'), `export const CATEGORIES = ${JSON.stringify(categoriesEn, null, 2)};\n`, 'utf8');
fs.writeFileSync(path.join(rootDir, 'src', 'data', 'categoriesFr.js'), `export const CATEGORIES_FR = ${JSON.stringify(categoriesFr, null, 2)};\n`, 'utf8');

console.log('Categories updated successfully!');
