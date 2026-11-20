const fs = require('fs');
const path = require('path');

// 1. Endoscopy Category Definitions
const ENDOSCOPY_CATEGORY_EN = {
  id: "endoscopy-systems",
  name: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
  shortName: "Endoscopy Systems & Instruments",
  image: "/assets/images/endoscopy/digital-visual-sheathing-lithotripsy-tower.png",
  squareImage: "/assets/images/endoscopy/visual-puncture-mini-nephroscope.png",
  tagline: "Comprehensive digital nephroscopes, flexible ureteroscopes, cystoscopes, hysteroscopes, 4K UHD camera towers, LED light sources, and surgical accessories",
  subcategories: [
    "Digital Nephroscopy & Visual Puncture Mini-PCNL Lithotripsy Scopes",
    "Single-Use & Reusable Digital Flexible Uretero-Renoscopes (URS / RIRS)",
    "Sheath-Free Digital Cystoscopes & Transurethral Resection Scopes",
    "Integrated Digital Hysteroscopy, Cold-Knife & TTTS Fetoscopy Systems",
    "Endoscopic Equipment: 4K UHD Camera Systems, 100W LED Light Sources & Irrigators",
    "Endoscopic Consumables: Bendable Negative Pressure Sheaths, Guidewires & Forceps"
  ],
  specs: [
    "Imaging Performance: 160,000 / 520,000 Px Digital Sensors & 4K UHD Processing",
    "Optics & Durability: Columnar Crystal Technology & Sapphire-Sealed Tip",
    "Specialized Channels: Dedicated Dual-Channel & Negative Pressure Lithotripsy Suction",
    "Sterilization Compatibility: Low-Temperature Plasma & Ethylene Oxide (EO)",
    "Clinical Applications: Urology, Gynecology, Obstetrics (TTTS), and Minimally Invasive Surgery"
  ],
  moq: "1 Unit"
};

const ENDOSCOPY_CATEGORY_FR = {
  id: "endoscopy-systems",
  name: "Systèmes d’Endoscopie Mini-Invasive & Instruments Chirurgicaux",
  shortName: "Systèmes d’Endoscopie & Instruments",
  image: "/assets/images/endoscopy/digital-visual-sheathing-lithotripsy-tower.png",
  squareImage: "/assets/images/endoscopy/visual-puncture-mini-nephroscope.png",
  tagline: "Gamme complète de néphroscopes numériques, urétéroscopes souples, cystoscopes, hystéroscopes, colonnes vidéo 4K UHD, sources de lumière LED et accessoires chirurgicaux",
  subcategories: [
    "Néphroscopes Numériques & Systèmes Mini-PCNL de Lithotripsie par Ponction Visuelle",
    "Urétéro-Rénoscopes Numériques Souples à Usage Unique & Réutilisables (URS / RIRS)",
    "Cystoscopes Numériques Rigides sans Gaine & Scopes de Résection Transurétrale",
    "Hystéroscopes Numériques Intégrés, Lame Froide & Systèmes de Fœtoscopie (STT)",
    "Équipements d’Endoscopie : Caméras 4K UHD, Sources LED 100W & Pompes d’Irrigation",
    "Consommables Endoscopiques : Gaines d’Aspiration à Pression Négative, Guides & Pinces"
  ],
  specs: [
    "Performance d’Imagerie : Capteurs Numériques 160 000 / 520 000 Px & Traitement 4K UHD",
    "Optique & Durabilité : Technologie Cristal Colonnaire & Lentille Distale en Saphir",
    "Canaux Dédiés : Double Canal Opératoire & Aspiration de Lithotripsie sous Pression Négative",
    "Compatibilité Stérilisation : Plasma Basse Température & Oxyde d’Éthylène (ETO)",
    "Applications Cliniques : Urologie, Gynécologie, Obstétrique (STT) et Chirurgie Mini-Invasive"
  ],
  moq: "1 Unité"
};

// 2. 28 Products Data (Strictly omitting unconfirmed model numbers)
const WOKE_PRODUCTS_EN = [
  {
    id: "digital-visual-puncture-mini-nephroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Digital Visual Puncture Mini Nephroscope System",
    model: "",
    image: "/assets/images/endoscopy/visual-puncture-mini-nephroscope.png",
    gallery: [
      "/assets/images/endoscopy/visual-puncture-mini-nephroscope.png",
      "/assets/images/endoscopy/digital-miniature-nephroscope.png"
    ],
    rating: 5.0,
    reviews: 28,
    isCustomizable: true,
    shortDesc: "Ultra-miniature digital visual puncture nephroscope with 0.9mm working diameter and 160,000 pixels resolution for precision percutaneous renal access, holmium laser lithotripsy, and direct stone evacuation.",
    moq: "1 Unit",
    keyFeatures: [
      "Ultra-Fine 0.9mm Working Diameter & 270mm Working Length (0° DOV, 110° FOV)",
      "High-Definition 160,000 Pixels Digital Imaging Sensor",
      "Independent Objective Lens Locking Device with 3-Way Valve Architecture",
      "30° Bevel Medical Stainless Steel Puncture Needle (5Fr/6Fr Inner & Outer Needles)",
      "Integrated 10Fr Ultra-Fine Flushing Suction Tube with Controlled Negative Pressure"
    ],
    detailedSpecs: {
      "Working Diameter": "0.9 mm",
      "Working Length": "270 mm",
      "Direction of View (DOV)": "0°",
      "Field of View (FOV)": "110° Wide Angle",
      "Resolution": "160,000 Pixels High Definition",
      "Guide Needle Specs": "Medical stainless steel, 30° bevel puncture design, smooth burr-free walls",
      "Needle Compatibility": "5Fr inner needle / 6Fr outer needle (180mm puncture length)",
      "Suction Channel": "10Fr ultra-fine flushing suction tube with self-controlled negative pressure",
      "Processor Compatibility": "Digital Endoscopic Image Processor Workstation",
      "Sterilization Method": "Low-temperature hydrogen peroxide plasma / Ethylene Oxide (EO)"
    },
    applications: [
      "Percutaneous Nephrolithotomy (Mini-PCNL & Micro-PCNL)",
      "Renal Pelvis Stones (>1.5cm) & Renal Calyx Stones (<1.5cm)",
      "Renal Calyx Diverticulum Calculi & Parallel Calyx Stones",
      "Multi-Scope Combined Endourological Interventions"
    ],
    seoKeywords: "digital visual puncture nephroscope, mini nephroscope, micro PCNL, visual puncture needle, renal stone lithotripsy, urological endoscope, minimally invasive nephrolithotomy",
    seoDescription: "Digital Visual Puncture Mini Nephroscope with 0.9mm diameter, 160,000 pixels sensor, and controlled negative pressure suction for precision PCNL stone extraction."
  },
  {
    id: "digital-miniature-nephroscope-8-5-12fr",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Digital Miniature Nephroscope (8.5/12Fr)",
    model: "",
    image: "/assets/images/endoscopy/digital-miniature-nephroscope.png",
    gallery: [
      "/assets/images/endoscopy/digital-miniature-nephroscope.png",
      "/assets/images/endoscopy/rigid-digital-nephroscope.png"
    ],
    rating: 4.9,
    reviews: 32,
    isCustomizable: true,
    shortDesc: "High-transmittance semi-rigid digital miniature nephroscope with 8.5/12Fr outer diameter, 6.3Fr working channel, and distinctive oval body for automatic intraoperative pressure control.",
    moq: "1 Unit",
    keyFeatures: [
      "Viewing Angle: 12° Forward-Oblique (8.5/12Fr Outer Diameter, 250mm Working Length)",
      "Large 6.3Fr Working Channel Compatible with Holmium Laser & Ultrasonic Lithotripsy",
      "High-Transmittance Columnar Crystal Photoelectric Sensor with 160,000 Pixels",
      "Distinctive Oval Tube Design for Dynamic Intraoperative Pressure Regulation",
      "Dual-Valve Internal & External Sealing System for Zero-Leakage Instrument Exchange"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Forward-Oblique",
      "Outer Diameter": "8.5 / 12 Fr",
      "Working Channel": "6.3 Fr",
      "Working Length": "250 mm",
      "Sensor Resolution": "160,000 Pixels",
      "Optics": "High-transmittance columnar crystal with semi-rigid integrated hard lens",
      "Pressure Control": "Oval tube hydrodynamic pressure self-regulation",
      "Lithotripsy Compatibility": "Holmium laser fibers and ultrasonic lithotripters",
      "Negative Pressure Sheath": "Compatible with 15/16Fr negative pressure lithotripsy sheath",
      "Ergonomics": "Single-hand ergonomic operation handle with integrated video plug"
    },
    applications: [
      "Minimally Invasive Percutaneous Nephrolithotomy (Mini-PCNL)",
      "Upper Urinary Tract Calculus Lithotripsy & Stone Clearance",
      "Renal Caliceal Diverticulum Calculus Extraction",
      "Pediatric and Adult Endourological Procedures"
    ],
    seoKeywords: "digital miniature nephroscope, 8.5Fr nephroscope, 12Fr mini PCNL, micro channel nephroscope, holmium laser lithotripsy, urology endoscope",
    seoDescription: "Digital Miniature Nephroscope 8.5/12Fr with 6.3Fr working channel, 160,000 pixels sensor, and automatic hydrodynamic pressure regulation for safe Mini-PCNL."
  },
  {
    id: "digital-standard-nephroscope-15-18fr",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Digital Standard Nephroscope (15/18Fr)",
    model: "",
    image: "/assets/images/endoscopy/digital-standard-nephroscope-15-18fr.png",
    gallery: [
      "/assets/images/endoscopy/digital-standard-nephroscope-15-18fr.png",
      "/assets/images/endoscopy/digital-miniature-nephroscope.png"
    ],
    rating: 5.0,
    reviews: 19,
    isCustomizable: true,
    shortDesc: "Standard digital nephroscope featuring an 11Fr extra-large working channel for heavy-duty ultrasonic and ballistic lithotripsy probes, high-flow drainage, and rapid renal calculus extraction.",
    moq: "1 Unit",
    keyFeatures: [
      "Large 11Fr Instrument Channel Accommodating 3.3mm Ultrasonic Lithotripsy Probes",
      "12° Viewing Angle with 15/18Fr Outer Diameter (225mm Working Length)",
      "Integrated Digital Video Plug (Eliminates External Light Cables & Bulky Camera Heads)",
      "High-Efficiency Oval Drainage Tube for Continuous Low-Pressure Irrigation",
      "High-Transmittance Semi-Rigid Optical Lens with Superior Bending Resilience"
    ],
    detailedSpecs: {
      "Viewing Angle": "12°",
      "Outer Diameter": "15 / 18 Fr",
      "Working Channel": "11 Fr",
      "Working Length": "225 mm",
      "Resolution": "160,000 Pixels High Definition",
      "Probe Channel Capacity": "Supports up to 3.3mm ultrasonic lithotripsy probes and pneumatic ballistic rods",
      "Video Connectivity": "Direct digital plug compatible with all standard processor towers",
      "Drainage Architecture": "Continuous low-pressure oval flushing and suction channel",
      "Sterilization": "Ethylene Oxide (EO), Low-Temperature Plasma"
    },
    applications: [
      "Standard Percutaneous Nephrolithotomy (PCNL)",
      "Staghorn Calculi & Complex Large Renal Stones",
      "High-Power Ultrasonic & Pneumatic Ballistic Lithotripsy",
      "Direct Renal Pelvis Foreign Body & Clot Evacuation"
    ],
    seoKeywords: "standard digital nephroscope, 15 18Fr nephroscope, 11Fr channel nephroscope, ultrasonic lithotripsy scope, PCNL nephroscope, kidney stone removal",
    seoDescription: "Digital Standard Nephroscope 15/18Fr with 11Fr working channel for 3.3mm ultrasonic lithotripsy probes and low-pressure continuous irrigation."
  },
  {
    id: "customizable-high-resolution-nephroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Customizable High-Resolution Digital Nephroscope System",
    model: "",
    image: "/assets/images/endoscopy/custom-nephroscope-instruments.png",
    gallery: [
      "/assets/images/endoscopy/custom-nephroscope-instruments.png",
      "/assets/images/endoscopy/endoscopic-forceps-matching-instruments.png"
    ],
    rating: 4.8,
    reviews: 15,
    isCustomizable: true,
    shortDesc: "Customizable high-resolution digital nephroscope available in 12/15Fr (9Fr channel) and 13.8/16.8Fr (11Fr channel) configurations with matching 6Fr and 9Fr endoscopic biopsy and grasping forceps.",
    moq: "1 Unit",
    keyFeatures: [
      "Customizable Diameter Options: 12/15Fr (9Fr channel) & 13.8/16.8Fr (11Fr channel)",
      "12° Viewing Angle with 225mm Working Length",
      "Full Accessory Suite: 6Fr×460mm & 9Fr×380mm Foreign Body & Biopsy Forceps",
      "Semi-Rigid Medical Grade Stainless Steel Outer Sheath",
      "Dual Integrated Sealing Valves for Airtight and Watertight Instrument Exchange"
    ],
    detailedSpecs: {
      "Viewing Angle": "12°",
      "Config Option 1": "12/15Fr Outer Diameter, 9Fr Working Channel, 225mm Length",
      "Config Option 2": "13.8/16.8Fr Outer Diameter, 11Fr Working Channel, 225mm Length",
      "Matching Instruments": "Foreign body forceps (6Fr×460mm, 9Fr×380mm), Biopsy forceps (6Fr×460mm, 9Fr×380mm)",
      "Optical Technology": "High-transmittance columnar crystal with anti-distortion lens",
      "Sealing Architecture": "Dual-layer automatic closing sealer valve",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Custom-tailored Percutaneous Nephrolithotomy Procedures",
      "Renal Tissue Biopsy & Foreign Body Removal",
      "Laser and Pneumatic Ballistic Stone Crushing",
      "Pediatric and Adult Endourology"
    ],
    seoKeywords: "customizable nephroscope, 9Fr channel nephroscope, 11Fr nephroscope, endoscopic biopsy forceps, renal foreign body forceps, urology surgical instruments",
    seoDescription: "Customizable High-Resolution Digital Nephroscope in 12/15Fr and 13.8/16.8Fr with matched 6Fr/9Fr surgical forceps for endourological precision."
  },
  {
    id: "new-type-mini-pcnl-nephroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "New-Type Mini-PCNL Wide-Angle Nephroscope",
    model: "",
    image: "/assets/images/endoscopy/mini-pcnl-nephroscope.png",
    gallery: [
      "/assets/images/endoscopy/mini-pcnl-nephroscope.png",
      "/assets/images/endoscopy/new-type-mini-pcnl-nephroscope.png"
    ],
    rating: 4.9,
    reviews: 24,
    isCustomizable: true,
    shortDesc: "Next-generation 84° wide-angle nephroscope engineered specifically for Mini-PCNL, offering an alternative to holmium laser lithotripsy with pneumatic and ultrasonic stone disruption.",
    moq: "1 Unit",
    keyFeatures: [
      "84° Wide Field of View for Panoramic Caliceal Visualization",
      "Multiple Size Options: 12/15Fr (9Fr channel), 13.8/16.8Fr (11Fr channel), 15/18Fr (11.5Fr channel)",
      "Engineered Specifically for Minimally Invasive Percutaneous Nephrolithotomy (Mini-PCNL)",
      "High-Strength Medical Titanium Alloy / Stainless Steel Slim Sheath Structure",
      "Continuous Low-Pressure Large-Channel Flushing for Crystal-Clear Surgical Field"
    ],
    detailedSpecs: {
      "Field of View (FOV)": "84° Wide Angle",
      "Option 1": "12/15Fr Outer Diameter, 9Fr Channel, 225mm Working Length",
      "Option 2": "13.8/16.8Fr Outer Diameter, 11Fr Channel, 225mm Working Length",
      "Option 3": "15/18Fr Outer Diameter, 11.5Fr Channel, 225mm Working Length",
      "Material": "Medical grade stainless steel or Titanium alloy",
      "Working Channel Sealing": "Automatic sealing valve for rapid device introduction",
      "Lithotripsy Support": "Pneumatic ballistic lithotripsy and ultrasonic lithotripsy",
      "Sterilization": "Low-temperature plasma, Ethylene Oxide (EO)"
    },
    applications: [
      "Treatment of Large Lower Renal Calyx Calculi",
      "Mini-PCNL in Children, Adolescents, and Adults",
      "Pneumatic Ballistic & Ultrasonic Lithotripsy",
      "Alternative to Holmium Laser Stone Ablation"
    ],
    seoKeywords: "Mini PCNL nephroscope, 84 degree nephroscope, titanium nephroscope, wide angle nephroscope, pneumatic lithotripsy scope, lower calyx renal calculi",
    seoDescription: "New-Type Mini-PCNL Wide-Angle Nephroscope featuring 84° FOV, titanium construction, and continuous low-pressure flushing for children and adults."
  },
  {
    id: "miniature-nephroscope-8-5-12fr-84fov",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Miniature Nephroscope with 84° FOV (8.5/12Fr)",
    model: "",
    image: "/assets/images/endoscopy/miniature-nephroscope-standard.png",
    gallery: [
      "/assets/images/endoscopy/miniature-nephroscope-standard.png",
      "/assets/images/endoscopy/miniature-nephroscope-auxiliary.png"
    ],
    rating: 4.8,
    reviews: 21,
    isCustomizable: true,
    shortDesc: "Compact 8.5/12Fr miniature nephroscope with 84° panoramic field of view, 5Fr channel, and 250mm length, delivering an effective alternative to extracorporeal shock wave lithotripsy (ESWL).",
    moq: "1 Unit",
    keyFeatures: [
      "84° Field of View with 8.5/12Fr Diameter and 250mm Working Length",
      "5Fr Instrument Channel with Automatic Sealing Mechanism",
      "High-Grade Titanium Alloy / Stainless Steel Sturdy Construction",
      "Continuous Flushing Under Controlled Low Cavity Pressure",
      "Compatible with Matched 6Fr×420mm Renal Foreign Body & Biopsy Forceps"
    ],
    detailedSpecs: {
      "Field of View": "84°",
      "Outer Diameter": "8.5 / 12 Fr",
      "Working Channel": "5 Fr",
      "Working Length": "250 mm",
      "Optional Sheath": "Available on request",
      "Auxiliary Instruments": "Renal foreign body forceps (6Fr×420mm), Renal biopsy forceps (6Fr×420mm)",
      "Channel Sealing": "Automatic closing valve for instrument insertion",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Mini-PCNL Alternative to Extracorporeal Shock Wave Lithotripsy (ESWL)",
      "Lower Renal Pole Stone Fragmentation and Retrieval",
      "Pediatric and Adult Endourology",
      "Continuous Low-Pressure Renal Irrigation"
    ],
    seoKeywords: "miniature nephroscope 84 degree, 8.5 12Fr nephroscope, ESWL alternative, mini PCNL scope, renal biopsy forceps, urology stone extraction",
    seoDescription: "Miniature Nephroscope 8.5/12Fr with 84° FOV and 5Fr channel. Ideal ESWL alternative for children and adult lower calyx renal stone management."
  },
  {
    id: "rigid-digital-hd-nephroscope-520k",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Rigid Digital High-Definition Nephroscope (520,000 Pixels)",
    model: "",
    image: "/assets/images/endoscopy/rigid-digital-nephroscope.png",
    gallery: [
      "/assets/images/endoscopy/rigid-digital-nephroscope.png",
      "/assets/images/endoscopy/digital-miniature-nephroscope.png"
    ],
    rating: 5.0,
    reviews: 37,
    isCustomizable: true,
    shortDesc: "Premium 520,000 pixels ultra-high definition rigid digital nephroscope with sapphire-sealed distal lens, laser-welded flush adapter, and zero moisture ingress guarantee.",
    moq: "1 Unit",
    keyFeatures: [
      "Ultra-HD 520,000 Pixels Photoelectric Sensor for Crystal-Clear Endoscopic View",
      "Distal Tip Sealed with Scratch-Resistant Medical Sapphire Crystal",
      "Laser-Welded Integrated Flush Adapter Ensuring Complete Sealing Against Vapor & Water",
      "Dual-Layer Built-in Automatic Sealing Valve for Device & Guidewire Exchange",
      "Available in 8.5/12Fr (5Fr channel, 250mm) and 15/18Fr (11.5Fr channel, 225mm)"
    ],
    detailedSpecs: {
      "Viewing Angle": "12°",
      "Resolution": "520,000 Pixels Ultra HD",
      "Model Config 1": "8.5/12Fr Diameter, 5Fr Channel, 250mm Working Length",
      "Model Config 2": "15/18Fr Diameter, 11.5Fr Channel, 225mm Working Length",
      "Tip Optics": "Sapphire crystal hermetic sealing",
      "Flush Adapter": "Laser-welded seamless integrated adapter (zero water vapor entry)",
      "Sealer": "Built-in dual-layer automatic closing sealing valve",
      "Lithotripsy Support": "Holmium laser, ultrasonic, and pneumatic ballistic lithotripsy",
      "Sterilization": "Ethylene Oxide (EO), Low-Temperature Plasma"
    },
    applications: [
      "Advanced Percutaneous Nephrolithotomy (PCNL / Mini-PCNL)",
      "High-Resolution Renal Pelvis & Caliceal Inspection",
      "Combined Holmium Laser, Ultrasonic & Ballistic Lithotripsy",
      "Complex Renal Anatomy Calculus Disruption"
    ],
    seoKeywords: "520k pixels nephroscope, rigid digital nephroscope, sapphire tip nephroscope, HD PCNL scope, laser welded endoscope, high resolution nephroscopy",
    seoDescription: "Rigid Digital HD Nephroscope with 520,000 pixels sensor, sapphire-sealed tip, and laser-welded body for zero vapor entry during PCNL lithotripsy."
  },
  {
    id: "ups-12-dual-channel-rigid-digital-nephroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "UPS 12° Dual-Channel Rigid Digital Nephroscope",
    model: "",
    image: "/assets/images/endoscopy/ups-12-dual-channel-rigid-digital-nephroscope.png",
    gallery: [
      "/assets/images/endoscopy/ups-12-dual-channel-rigid-digital-nephroscope.png",
      "/assets/images/endoscopy/rigid-digital-nephroscope.png"
    ],
    rating: 4.9,
    reviews: 18,
    isCustomizable: true,
    shortDesc: "Specialized dual-channel rigid digital nephroscope featuring Channel A (6.3Fr) and Channel B (3.7Fr), allowing simultaneous laser fiber and stone basket/suction operation.",
    moq: "1 Unit",
    keyFeatures: [
      "Independent Dual Instrument Channels: Channel A (6.3Fr) & Channel B (3.7Fr)",
      "12° Viewing Angle with 8.5/12Fr Outer Diameter and 250mm Working Length",
      "160,000 Pixels Digital Imaging Sensor with High-Transmittance Columnar Crystal",
      "Simultaneous Passage of Two Surgical Devices Without Mutual Interference",
      "Sapphire Sealed Distal Lens and Built-in Dual-Layer Sealing Mechanism"
    ],
    detailedSpecs: {
      "Viewing Angle": "12°",
      "Outer Diameter": "8.5 / 12 Fr",
      "Channel A Diameter": "6.3 Fr",
      "Channel B Diameter": "3.7 Fr",
      "Working Length": "250 mm",
      "Resolution": "160,000 Pixels High Definition",
      "Lens Material": "Distal sapphire crystal protective window",
      "Video Connectivity": "Integrated video plug (flexible & rigid endoscope compatible)",
      "Sealing Architecture": "Dual-layer automatic closing sealing valves on both ports",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Simultaneous Laser Lithotripsy & Negative Pressure Suction",
      "Dual-Device Stone Basket Retrieval & Continuous Flushing",
      "Complex Renal Pelvis Calculus Disruption",
      "Endourological Puncture & Lithotripsy"
    ],
    seoKeywords: "dual channel nephroscope, UPS 12 degree nephroscope, dual working channel endoscope, double channel PCNL scope, simultaneous lithotripsy and basket",
    seoDescription: "UPS 12° Dual-Channel Rigid Digital Nephroscope with 6.3Fr & 3.7Fr channels for simultaneous laser lithotripsy and basket stone extraction."
  },
  {
    id: "usp-12-rigid-digital-uretero-renoscope-160k",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "USP 12° Rigid Digital Uretero-Renoscope (160,000 Pixels)",
    model: "",
    image: "/assets/images/endoscopy/usp-12-rigid-digital-uretero-renoscope.png",
    gallery: [
      "/assets/images/endoscopy/usp-12-rigid-digital-uretero-renoscope.png",
      "/assets/images/endoscopy/rigid-fiber-ureteroscope.png"
    ],
    rating: 5.0,
    reviews: 41,
    isCustomizable: true,
    shortDesc: "Slim semi-rigid digital uretero-renoscope with 160,000 pixels sensor, 430mm length, sapphire distal lens, and optional ultra-slim 4.5/6.5Fr configuration for seminal vesicle endoscopy.",
    moq: "1 Unit",
    keyFeatures: [
      "12° Viewing Angle with 430mm Effective Urological Working Length",
      "Three Diameter Configurations: 8/9.8Fr (5Fr), 6/7.5Fr (4Fr), 4.5/6.5Fr (3.6Fr for Seminal Vesicle)",
      "High-Transmittance Columnar Crystal Optical Technology with 160,000 Pixels",
      "Laser-Welded Flush Adapter & Sapphire Sealed Tip Lens",
      "Compatible with 3Fr, 4Fr, and 5Fr Renal Forceps (600mm Length)"
    ],
    detailedSpecs: {
      "Viewing Angle": "12°",
      "Working Length": "430 mm",
      "Resolution": "160,000 Pixels",
      "Config 1": "8/9.8Fr Diameter, 5Fr Channel",
      "Config 2": "6/7.5Fr Diameter, 4Fr Channel",
      "Config 3 (Seminal Vesicle)": "4.5/6.5Fr Diameter, 3.6Fr Channel",
      "Optics": "High-transmittance columnar crystal with semi-rigid stainless steel outer tube",
      "Tip Sealing": "Sapphire crystal window",
      "Integrated Video Plug": "Instant plug-and-play with digital video processors",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Rigid Ureteroscopy (URS) for Middle & Lower Ureteral Calculi",
      "Seminal Vesicle Endoscopy & Ejaculatory Duct Clearance",
      "Holmium Laser Ureteral Stone Fragmentation",
      "Diagnostic Ureteropyeloscopy and Biopsy"
    ],
    seoKeywords: "USP 12 rigid digital ureteroscope, uretero-renoscope, seminal vesicle endoscope, 4.5Fr ureteroscope, 6Fr ureteroscope, holmium laser URS",
    seoDescription: "USP 12° Rigid Digital Uretero-Renoscope with 160,000 pixels, 430mm length, and optional 4.5/6.5Fr seminal vesicle endoscopy configuration."
  },
  {
    id: "usp-12-rigid-digital-uretero-renoscope-520k",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "USP 12° Rigid Digital Uretero-Renoscope (520,000 Pixels Ultra HD)",
    model: "",
    image: "/assets/images/endoscopy/usp-12-rigid-digital-uretero-renoscope.png",
    gallery: [
      "/assets/images/endoscopy/usp-12-rigid-digital-uretero-renoscope.png",
      "/assets/images/endoscopy/rigid-fiber-ureteroscope.png"
    ],
    rating: 5.0,
    reviews: 29,
    isCustomizable: true,
    shortDesc: "High-end 520,000 pixels ultra-high definition rigid digital uretero-renoscope delivering unmatched mucosal clarity, laser-welded sealing, and robust semi-rigid resilience.",
    moq: "1 Unit",
    keyFeatures: [
      "Ultra-HD 520,000 Pixels Photoelectric Sensor for Micro-Vascular Clarity",
      "12° Viewing Angle with 430mm Working Length",
      "Available in 8/9.8Fr (5Fr channel) and 6/7.5Fr (4Fr channel)",
      "High-Transmittance Semi-Rigid Integrated Hard Lens Body with Gentle Bending Flexibility",
      "Laser-Welded Seal and Built-in Dual-Layer Automatic Valve"
    ],
    detailedSpecs: {
      "Viewing Angle": "12°",
      "Resolution": "520,000 Pixels Ultra HD",
      "Working Length": "430 mm",
      "Option 1": "8/9.8Fr Outer Diameter, 5Fr Working Channel",
      "Option 2": "6/7.5Fr Outer Diameter, 4Fr Working Channel",
      "Optics": "High-transmittance columnar crystal with sapphire protective tip",
      "Flush Adapter": "Laser-welded hermetic seal against water vapor",
      "Sealer": "Dual-layer automatic closing sealer for device/guidewire insertion",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Ultra-HD Ureteroscopic Lithotripsy (Holmium / Thulium Laser)",
      "Ureteral Stricture & Stricturotomy Assessment",
      "Upper Urinary Tract Urothelial Carcinoma Diagnostic Biopsy",
      "Foreign Body & Fragment Extraction"
    ],
    seoKeywords: "520k pixels ureteroscope, ultra HD uretero renoscope, rigid digital ureteroscope, sapphire tip ureteroscope, semi-rigid URS endoscope",
    seoDescription: "USP 12° Rigid Digital Uretero-Renoscope with 520,000 pixels Ultra-HD sensor, 430mm length, and laser-welded vapor-tight construction."
  },
  {
    id: "usp-12-dual-channel-rigid-digital-uretero-renoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "USP 12° Dual-Channel Rigid Digital Uretero-Renoscope",
    model: "",
    image: "/assets/images/endoscopy/usp-12-dual-channel-rigid-digital-uretero-renoscope.png",
    gallery: [
      "/assets/images/endoscopy/usp-12-dual-channel-rigid-digital-uretero-renoscope.png",
      "/assets/images/endoscopy/usp-12-rigid-digital-uretero-renoscope.png"
    ],
    rating: 4.9,
    reviews: 16,
    isCustomizable: true,
    shortDesc: "Innovative dual-channel rigid digital uretero-renoscope featuring Channel A (4Fr) and Channel B (2.8Fr) for simultaneous laser fiber firing and continuous irrigation or stone basket grasping.",
    moq: "1 Unit",
    keyFeatures: [
      "Dual Working Instrument Channels: Channel A (4Fr) & Channel B (2.8Fr)",
      "12° Viewing Angle with 6/7.5Fr Outer Diameter and 430mm Working Length",
      "160,000 Pixels Digital Sensor with Superior Transmittance Columnar Optics",
      "Simultaneous Passage of Laser Fiber & Grasping Basket Without Mutual Interference",
      "Sapphire Distal Lens with Integrated Quick-Connect Video Interface"
    ],
    detailedSpecs: {
      "Viewing Angle": "12°",
      "Outer Diameter": "6 / 7.5 Fr",
      "Channel A": "4 Fr",
      "Channel B": "2.8 Fr",
      "Working Length": "430 mm",
      "Resolution": "160,000 Pixels High Definition",
      "Sealing Design": "Dual-layer automatic closing sealer on both ports",
      "Video Connection": "Standardized digital video plug",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Simultaneous Laser Lithotripsy & Stone Basket Extraction in Ureter",
      "Continuous Low-Pressure Fluid Flushing During Stone Ablation",
      "Complex Ureteral Calculi Management",
      "Endoscopic Guidewire & Device Co-Placement"
    ],
    seoKeywords: "dual channel ureteroscope, double channel URS, USP 12 uretero renoscope, simultaneous laser and basket, urological endoscope",
    seoDescription: "USP 12° Dual-Channel Rigid Digital Uretero-Renoscope with 4Fr and 2.8Fr channels for simultaneous laser stone fragmentation and basket extraction."
  },
  {
    id: "rigid-optical-fiber-uretero-renoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Rigid Optical Fiber Uretero-Renoscope (84° FOV)",
    model: "",
    image: "/assets/images/endoscopy/rigid-fiber-ureteroscope.png",
    gallery: [
      "/assets/images/endoscopy/rigid-fiber-ureteroscope.png",
      "/assets/images/endoscopy/usp-12-rigid-digital-uretero-renoscope.png"
    ],
    rating: 4.8,
    reviews: 23,
    isCustomizable: true,
    shortDesc: "Classic 84° wide-angle optical fiber uretero-renoscope with anti-spherical distortion columnar eyepiece, titanium/stainless steel outer tube, and universal imaging tower compatibility.",
    moq: "1 Unit",
    keyFeatures: [
      "84° Panoramic Field of View with 430mm Working Length",
      "Three Dimension Specs: 8/9.8Fr (5Fr), 6/7.5Fr (4Fr), 4.5/6.5Fr (3.6Fr)",
      "Columnar Optical Eyepiece Mirror Preventing Spherical Image Deformation",
      "Universal Ocular Connector Compatible with Standard C-Mount Camera Heads (Storz/Wolf/Olympus)",
      "Sapphire Tip Lens & Laser-Welded Flush Adapter for Extreme Longevity"
    ],
    detailedSpecs: {
      "Field of View": "84° Wide Angle",
      "Working Length": "430 mm",
      "Spec 1": "8/9.8Fr Outer Diameter, 5Fr Channel",
      "Spec 2": "6/7.5Fr Outer Diameter, 4Fr Channel",
      "Spec 3": "4.5/6.5Fr Outer Diameter, 3.6Fr Channel",
      "Eyepiece Optics": "Columnar optical mirror (distortion-free panoramic image)",
      "Coupler Compatibility": "Universal standard optical camera coupler",
      "Distal Lens": "Sapphire crystal window",
      "Sterilization": "Low-temperature plasma, EO sterilization, Autoclave (specific cycles)"
    },
    applications: [
      "Standard Optical Ureteroscopy (URS)",
      "Ureteral Stone Extraction with Pneumatic / Ballistic Lithotripters",
      "Transurethral Ureteral Stricture & Diagnostic Evaluation",
      "Compatible with Traditional Tower Camera Systems"
    ],
    seoKeywords: "optical fiber ureteroscope, 84 degree ureteroscope, rigid fiber URS, columnar optical ureteroscope, Storz compatible ureteroscope, urology endoscopy",
    seoDescription: "Rigid Optical Fiber Uretero-Renoscope with 84° FOV, columnar distortion-free eyepiece, and universal coupler compatibility for robust URS procedures."
  },
  {
    id: "single-use-digital-flexible-ureteroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Single-Use Digital Flexible Ureteroscope (275° Deflection)",
    model: "",
    image: "/assets/images/endoscopy/single-use-flexible-ureteroscope.png",
    gallery: [
      "/assets/images/endoscopy/single-use-flexible-ureteroscope.png",
      "/assets/images/endoscopy/reusable-flexible-ureteroscope.png"
    ],
    rating: 5.0,
    reviews: 54,
    isCustomizable: true,
    shortDesc: "Sterile single-use digital flexible ureteroscope with ±275° active bidirectional deflection, 7.5Fr insertion tube, 3.6Fr channel, bullet-shaped tip, and 160,000 pixels sensor for zero-cross-contamination RIRS.",
    moq: "1 Box (5 Units)",
    keyFeatures: [
      "Active Bidirectional Deflection: Upper Bend ≥275°, Lower Bend ≥275°",
      "Ultra-Slim 5.7Fr Bullet-Shaped Tip & 7.5Fr Outer Diameter Insertion Tube",
      "Generous 3.6Fr Working Channel Accommodating Laser Fibers & Grasping Baskets",
      "High-Definition 160,000 Pixels Digital Sensor with Rear Cold LED Lighting",
      "Individually Sterile Packaged with Dedicated Tee Adapter & Fiber Locking Device"
    ],
    detailedSpecs: {
      "Pixel Resolution": "160,000 Pixels High Definition",
      "Field Angle": "110° Wide Angle",
      "Depth of Field": "2 – 50 mm",
      "Tip Outer Diameter": "5.7 Fr (Bullet-shaped atraumatic profile)",
      "Insert Tube Outer Diameter": "7.5 Fr",
      "Working Channel Inner Diameter": "3.6 Fr",
      "Bending Angle": "Upper bend ≥275°, Lower bend ≥275°",
      "Effective Working Length": "700 mm",
      "Illumination": "Integrated digital video plug with rear cold light illumination (burn protection)",
      "Packaging": "Individually sterile blister pouch (100% single-use disposable)"
    },
    applications: [
      "Retrograde Intrarenal Surgery (RIRS) for Renal Caliceal Calculi",
      "Upper Ureteral Stone Laser Lithotripsy",
      "Renal Pelvis Endoscopic Diagnosis and Biopsy",
      "Zero Cross-Infection High-Throughput Surgical Centers"
    ],
    seoKeywords: "single use flexible ureteroscope, disposable digital ureteroscope, 275 degree flexible ureteroscope, RIRS flexible scope, sterile disposable ureteroscope, kidney stone RIRS",
    seoDescription: "Single-Use Digital Flexible Ureteroscope featuring ±275° deflection, 7.5Fr outer diameter, 3.6Fr channel, and 160,000 px sensor for sterile, zero-cross-infection RIRS."
  },
  {
    id: "reusable-digital-flexible-uretero-renoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Reusable Digital Flexible Uretero-Renoscope System",
    model: "",
    image: "/assets/images/endoscopy/reusable-flexible-ureteroscope.png",
    gallery: [
      "/assets/images/endoscopy/reusable-flexible-ureteroscope.png",
      "/assets/images/endoscopy/single-use-flexible-ureteroscope.png"
    ],
    rating: 4.9,
    reviews: 31,
    isCustomizable: true,
    shortDesc: "High-durability reusable digital flexible uretero-renoscope with 8Fr insertion tube, 3.6Fr channel, ±275° deflection, smart sterilization cycle counting, and waterproof leak tester.",
    moq: "1 Unit",
    keyFeatures: [
      "Active Bidirectional Deflection: Upper Bend ≥275°, Lower Bend ≥275°",
      "5.7Fr Bullet-Shaped Tip & 8Fr Outer Diameter Insertion Tube (700mm Length)",
      "3.6Fr Working Channel Compatible with Standard Laser Fibers & Baskets",
      "Built-in Smart Cycle & Time Counter for Equipment Maintenance Tracking",
      "Includes Dedicated Leak Tester for Pre-Sterilization Integrity Verification"
    ],
    detailedSpecs: {
      "Pixel Resolution": "160,000 Pixels High Definition",
      "Field Angle": "110°",
      "Depth of Field": "2 – 50 mm",
      "Tip Outer Diameter": "5.7 Fr",
      "Insert Tube Outer Diameter": "8 Fr",
      "Working Channel Diameter": "3.6 Fr",
      "Bending Range": "Upper bend ≥275°, Lower bend ≥275°",
      "Effective Working Length": "700 mm",
      "Maintenance Features": "Integrated sterilization cycle counter and leak test port",
      "Accessories Included": "Leak detector, optical fiber locking tee adapter",
      "Sterilization": "Low-temperature hydrogen peroxide plasma, EO sterilization"
    },
    applications: [
      "Reusable Retrograde Intrarenal Surgery (RIRS)",
      "Renal Lower Pole Caliceal Stone Laser Lithotripsy",
      "Upper Tract Urothelial Endoscopy and Tissue Sampling",
      "High-Volume Urology Department Surgical Suites"
    ],
    seoKeywords: "reusable digital flexible ureteroscope, reusable RIRS scope, flexible uretero renoscope with leak detector, 275 deflection ureteroscope, urology surgical endoscope",
    seoDescription: "Reusable Digital Flexible Uretero-Renoscope with 8Fr outer diameter, 3.6Fr channel, ±275° deflection, smart cycle counter, and leak detector for reliable RIRS."
  },
  {
    id: "sheath-free-rigid-digital-cystoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Sheath-Free Rigid Digital Cystoscope with Working Channel",
    model: "",
    image: "/assets/images/endoscopy/sheath-free-rigid-cystoscope.png",
    gallery: [
      "/assets/images/endoscopy/sheath-free-rigid-cystoscope.png",
      "/assets/images/endoscopy/sheath-free-cystoscope-accessories.png"
    ],
    rating: 5.0,
    reviews: 26,
    isCustomizable: true,
    shortDesc: "Direct-insertion sheath-free rigid digital cystoscope with 100° wide FOV, 12° viewing angle, 315mm length, available in 13Fr (6Fr channel), 11Fr (4Fr channel), and 9Fr (3.6Fr channel) for rapid, gentle bladder endoscopy.",
    moq: "1 Unit",
    keyFeatures: [
      "Sheath-Free Direct Insertion Design Minimizing Urethral Trauma and Setup Time",
      "100° Wide Field of Vision with 12° Viewing Angle and 315mm Working Length",
      "Three Diameter Specifications: 13Fr (6Fr channel), 11Fr (4Fr channel), 9Fr (3.6Fr channel)",
      "High-Transmittance Columnar Crystal with 160,000 Pixels Digital Sensor",
      "Laser-Welded Watertight Seal and Optional 15Fr Flushing Suction Sheath"
    ],
    detailedSpecs: {
      "Viewing Angle": "12°",
      "Field of Vision": "100° Wide Angle",
      "Working Length": "315 mm",
      "Conventional Spec 1": "13Fr Outer Diameter, 6Fr Working Channel",
      "Conventional Spec 2": "11Fr Outer Diameter, 4Fr Working Channel",
      "Custom Spec 3": "9Fr Outer Diameter, 3.6Fr Working Channel",
      "Resolution": "160,000 Pixels High Definition",
      "Optional Sheath": "Flushing suction sheath (15Fr)",
      "Matching Forceps": "Biopsy and foreign body forceps (6Fr/4Fr/3Fr × 460mm)",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Outpatient & Inpatient Diagnostic Rigid Cystoscopy",
      "Bladder Biopsy, Foreign Body & Stent (Double J) Removal",
      "Laser Lithotripsy for Bladder Calculi",
      "Urethral Stricture and Bladder Neck Inspection"
    ],
    seoKeywords: "sheath-free digital cystoscope, rigid digital cystoscope, 9Fr cystoscope, 11Fr cystoscope, 13Fr cystoscope, outpatient cystoscopy, bladder endoscope",
    seoDescription: "Sheath-Free Rigid Digital Cystoscope with 100° FOV, 12° angle, and 9/11/13Fr options for direct-insertion bladder diagnostic and therapeutic endoscopy."
  },
  {
    id: "single-use-digital-flexible-cystoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Single-Use Digital Flexible Cystoscope",
    model: "",
    image: "/assets/images/endoscopy/single-use-flexible-cystoscope.png",
    gallery: [
      "/assets/images/endoscopy/single-use-flexible-cystoscope.png",
      "/assets/images/endoscopy/reusable-digital-flexible-cystoscope.png"
    ],
    rating: 4.9,
    reviews: 38,
    isCustomizable: true,
    shortDesc: "Single-use sterile digital flexible cystoscope with 13.5Fr outer diameter, ≥6.3Fr large channel, 220° up / 130° down deflection, and 160,000 pixels sensor for painless outpatient cystoscopy.",
    moq: "1 Box (5 Units)",
    keyFeatures: [
      "Sterile Disposable Single-Use Construction Eliminating Cross-Contamination",
      "13.5Fr Soft Insertion Tube with 6.3Fr Atraumatic Bullet Tip (380mm Length)",
      "Large ≥6.3Fr Working Channel for Smooth Forceps & Irrigation Flow",
      "Asymmetric Deflection: Upper Bend ≥220°, Lower Bend ≥130° for Full Bladder Wall Coverage",
      "High-Definition 160,000 Pixels Digital Sensor with Cold LED Rear Illumination"
    ],
    detailedSpecs: {
      "Pixel Resolution": "160,000 Pixels High Definition",
      "Field Angle": "110°",
      "Depth of Field": "2 – 50 mm",
      "Tip Part Diameter": "6.3 Fr",
      "Insert Tube Outer Diameter": "13.5 Fr",
      "Working Channel Inner Diameter": "≥ 6.3 Fr",
      "Bending Angle": "Upper bend ≥220°, Lower bend ≥130°",
      "Effective Working Length": "380 mm",
      "Packaging": "Individually sterile pouch, 100% single-use disposable"
    },
    applications: [
      "Bedside & Clinic Painless Flexible Cystoscopy",
      "Bladder Tumor Surveillance (NMIBC Follow-up)",
      "Ureteral Stent (DJ Stent) Removal & Replacement",
      "Bladder Clot Evacuation & Tissue Biopsy"
    ],
    seoKeywords: "single use flexible cystoscope, disposable digital cystoscope, sterile flexible cystoscope, painless cystoscopy, outpatient cystoscope, bladder endoscope",
    seoDescription: "Single-Use Digital Flexible Cystoscope with 13.5Fr tube, ≥6.3Fr channel, 220°/130° deflection, and 160,000 px sensor for sterile outpatient bladder care."
  },
  {
    id: "reusable-digital-flexible-cystoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Reusable Digital Flexible Cystoscope System",
    model: "",
    image: "/assets/images/endoscopy/reusable-digital-flexible-cystoscope.png",
    gallery: [
      "/assets/images/endoscopy/reusable-digital-flexible-cystoscope.png",
      "/assets/images/endoscopy/single-use-flexible-cystoscope.png"
    ],
    rating: 5.0,
    reviews: 22,
    isCustomizable: true,
    shortDesc: "High-performance reusable digital flexible cystoscope with ±275° full bidirectional deflection, 13.5Fr tube, ≥6.3Fr channel, integrated cycle tracking, and leak tester.",
    moq: "1 Unit",
    keyFeatures: [
      "Full Bidirectional Active Deflection: Upper Bend ≥275°, Lower Bend ≥275°",
      "13.5Fr Ergonomic Insertion Tube with 6.3Fr Atraumatic Tip (380mm Length)",
      "Large ≥6.3Fr Instrument Channel Accommodating Standard Biopsy Forceps & Diathermy",
      "High-Definition 160,000 Pixels Digital Video Chip (110° Field Angle)",
      "Built-in Sterilization Cycle Counter and Dedicated Waterproof Leak Detector"
    ],
    detailedSpecs: {
      "Pixel Resolution": "160,000 Pixels High Definition",
      "Field Angle": "110°",
      "Depth of Field": "2 – 50 mm",
      "Tip Part Diameter": "6.3 Fr",
      "Insert Tube Outer Diameter": "13.5 Fr",
      "Working Channel Inner Diameter": "≥ 6.3 Fr",
      "Bending Angle": "Upper bend ≥275°, Lower bend ≥275°",
      "Effective Working Length": "380 mm",
      "Maintenance Accessories": "Dedicated pressure leak detector included",
      "Sterilization": "Low-temperature hydrogen peroxide plasma, EO sterilization"
    },
    applications: [
      "Inpatient and Outpatient Flexible Cystoscopy",
      "Bladder Calculus Fragmentation and Removal",
      "Bladder Biopsy and Mucosal Resection",
      "Pediatric and Adult Flexible Endourology"
    ],
    seoKeywords: "reusable flexible cystoscope, digital flexible cystoscope, 275 deflection cystoscope, urology flexible endoscope, bladder tumor cystoscopy",
    seoDescription: "Reusable Digital Flexible Cystoscope featuring ±275° deflection, 13.5Fr outer diameter, ≥6.3Fr channel, and integrated leak detector for long-term clinical utility."
  },
  {
    id: "ultra-thin-digital-laserscope",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Ultra-Thin Digital Laserscope for Prostatic Resection",
    model: "",
    image: "/assets/images/endoscopy/ultra-thin-digital-laserscope.png",
    gallery: [
      "/assets/images/endoscopy/ultra-thin-digital-laserscope.png",
      "/assets/images/endoscopy/digital-hysteroscope-cold-knife.png"
    ],
    rating: 4.9,
    reviews: 14,
    isCustomizable: true,
    shortDesc: "Ultra-thin digital laserscope system with φ3.0×305mm rigid cystoscope, φ1.0mm laser handpiece, 22Fr outer sheath, and 18Fr inner sheath for minimally invasive laser enucleation of benign prostatic hyperplasia (BPH).",
    moq: "1 Set",
    keyFeatures: [
      "Engineered for Laser Enucleation & Vaporization of Benign Prostatic Hyperplasia (BPH)",
      "160,000 Pixels High-Definition Wide-Angle Digital Video Sensor",
      "Continuous Circulating Irrigation for Crystal-Clear Surgical Field and Thermal Management",
      "Significantly Reduces Bleeding, Operative Time, and Postoperative Hospital Stay",
      "Full Configuration: Rigid Cystoscope (φ3.0×305mm), Handpiece (φ1.0), 22Fr Outer Sheath, 18Fr Inner Sheath"
    ],
    detailedSpecs: {
      "Rigid Digital Cystoscope": "φ3.0 mm × 305 mm (1 Unit)",
      "Laser Handpiece": "Working channel φ1.0 mm (1 Unit)",
      "Outer Sheath": "22 Fr (1 Unit)",
      "Inner Sheath and Obturator": "18 Fr (1 Unit)",
      "Resolution": "160,000 Pixels High Definition",
      "Irrigation Design": "Circulating continuous inflow and outflow channels",
      "Processor Compatibility": "Digital Endoscopic Image Processor Workstation",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Holmium / Thulium Laser Enucleation of the Prostate (HoLEP / ThuLEP)",
      "Prostatic Hyperplasia Laser Vaporization & Tissue Ablation",
      "Bladder Neck Incision & Urethral Stricture Laser Ablation",
      "Minimally Invasive Outpatient Prostate Surgery"
    ],
    seoKeywords: "digital laserscope, BPH laser resection scope, HoLEP endoscope, 22Fr prostate laserscope, ThuLEP resection sheath, urology laser surgery",
    seoDescription: "Ultra-Thin Digital Laserscope with φ3.0×305mm scope, 22Fr outer sheath, and circulating irrigation for minimally invasive prostate laser enucleation."
  },
  {
    id: "ultra-mini-digital-morcescope-22fr",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Ultra-Mini Digital Morcescope (with 22Fr Outer Sheath)",
    model: "",
    image: "/assets/images/endoscopy/ultra-mini-digital-morcescope.png",
    gallery: [
      "/assets/images/endoscopy/ultra-mini-digital-morcescope.png",
      "/assets/images/endoscopy/digital-hysteroscope-cold-knife.png"
    ],
    rating: 4.8,
    reviews: 17,
    isCustomizable: true,
    shortDesc: "Specialized ultra-mini digital morcescope with 12° DOV, 22Fr outer sheath, 200mm working length, and crescent-shaped tube designed to smoothly accommodate 4.8mm tissue morcellation blades.",
    moq: "1 Unit",
    keyFeatures: [
      "12° Direction of View with 22Fr Outer Sheath and 200mm Working Length",
      "Distinctive Crescent-Shaped Tube Architecture Accommodating 4.8mm Morcellation Blades",
      "High-Definition Digital Pixels with Integrated Cold Light & Camera Channel",
      "Lightweight Ergonomic Construction for Fatigueless Single-Hand Operation",
      "Seamless Integration with Endoscopic Tissue Morcellation Power Systems"
    ],
    detailedSpecs: {
      "Direction of View (DOV)": "12°",
      "Outer Sheath Diameter": "22 Fr",
      "Working Length": "200 mm",
      "Tube Cross-Section": "Crescent-shaped endoscope tube design",
      "Blade Capacity": "Accommodates up to 4.8mm reusable and disposable rotary blades",
      "Processor Compatibility": "Digital Endoscopic Image Processor Workstation",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Endoscopic Uterine Myoma Morcellation",
      "Prostatic Tissue Morcellation Post-HoLEP Enucleation",
      "Endoscopic Polyp and Tissue Resection",
      "Gynecological and Urological Tissue Debulking"
    ],
    seoKeywords: "digital morcescope, 22Fr morcescope, tissue morcellator endoscope, crescent tube morcescope, HoLEP morcellation, gynecological morcescope",
    seoDescription: "Ultra-Mini Digital Morcescope with 22Fr outer sheath, 12° DOV, and crescent tube profile for 4.8mm tissue morcellation blades."
  },
  {
    id: "rigid-digital-fetoscope-ttts",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Rigid Digital Fetoscope for TTTS Laser Photocoagulation",
    model: "",
    image: "/assets/images/endoscopy/rigid-digital-fetoscope.png",
    gallery: [
      "/assets/images/endoscopy/rigid-digital-fetoscope.png",
      "/assets/images/endoscopy/fetoscope-surgical-instruments.png"
    ],
    rating: 5.0,
    reviews: 12,
    isCustomizable: true,
    shortDesc: "Ultra-precise 2mm rigid digital fetoscope with 185mm length, 3Fr working channel, and guide needle suite engineered specifically for Twin-to-Twin Transfusion Syndrome (TTTS) laser photocoagulation.",
    moq: "1 Set",
    keyFeatures: [
      "Ultra-Fine 2mm Outer Diameter & 185mm Working Length for Minimal Uterine Puncture Trauma",
      "Dedicated 3Fr Working Channel for Laser Fiber & Micro-Instruments",
      "Specially Developed for Twin-to-Twin Transfusion Syndrome (TTTS) Communicating Vessel Ablation",
      "Complete Supporting Instrument Suite: 2.7Fr×350mm Foreign Body Forceps, 6Fr & 6.6Fr Guide Needles",
      "Significantly Reduces TTTS Fetal Mortality (from 70-100% down to safe fetal development levels)"
    ],
    detailedSpecs: {
      "Outer Diameter": "2 mm (Ultra-fine micro-diameter)",
      "Working Length": "185 mm",
      "Working Channel": "3 Fr",
      "Supporting Instruments": "2.7Fr×350mm Foreign Body Forceps, 6Fr Guide Needle, 6.6Fr Guide Needle",
      "Clinical Purpose": "Intrauterine fetal surgery and TTTS laser vascular coagulation",
      "Optics": "High-transmittance micro-columnar crystal with high-definition digital sensor",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Twin-to-Twin Transfusion Syndrome (TTTS) Laser Photocoagulation",
      "Intrauterine Fetal Endoscopic Diagnostics & Surgery in Early/Mid Pregnancy",
      "Twin Anemia-Polycythemia Sequence (TAPS) Vessel Occlusion",
      "Fetal Amniotic Band Syndrome & Cord Occlusion Procedures"
    ],
    seoKeywords: "rigid digital fetoscope, TTTS fetoscopy, fetal surgery endoscope, 2mm fetoscope, twin to twin transfusion syndrome laser scope, maternal fetal medicine endoscope",
    seoDescription: "Rigid Digital Fetoscope with 2mm diameter, 185mm length, 3Fr channel, and guide needle set for precision TTTS fetal laser photocoagulation."
  },
  {
    id: "endoscopic-tissue-morcellator-system",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Intelligent Endoscopic Tissue Morcellator Power System",
    model: "",
    image: "/assets/images/endoscopy/digital-hysteroscope-surgery-system.png",
    gallery: [
      "/assets/images/endoscopy/digital-hysteroscope-surgery-system.png",
      "/assets/images/endoscopy/ultra-mini-digital-morcescope.png"
    ],
    rating: 4.9,
    reviews: 19,
    isCustomizable: true,
    shortDesc: "Intelligent touchscreen tissue morcellator with 300 to 6000 rpm variable speed, powerful -80 kPa negative pressure suction, and reusable/disposable 4.8mm cutter blades.",
    moq: "1 Unit",
    keyFeatures: [
      "Variable High-Torque Motor: 300 rpm to 6000 rpm (Forward, Reverse, and Reciprocating)",
      "High-Performance Suction System Reaching up to -80 kPa Negative Pressure",
      "Full Touchscreen Digital Control with Ergonomic Footswitch Operation",
      "Supports Both Reusable Autoclavable & Disposable Single-Use 4.8mm Cutting Blades",
      "Seamless Compatibility with Ultra-Mini Morcescope & Hysteroscopic Surgical Towers"
    ],
    detailedSpecs: {
      "Speed Range": "300 rpm to 6000 rpm (Forward and Reverse rotation)",
      "Reciprocating Speed": "300 rpm to 3000 rpm (Reciprocating mode)",
      "Suction Pressure": "Up to -80 kPa adjustable negative pressure",
      "Control Interface": "Full color touchscreen display + tactile backup buttons + dual footswitch",
      "Blade Options": "4.8mm reusable titanium/stainless blades and single-use sterile blades",
      "Motor Type": "Brushless high-torque medical electric motor with thermal protection",
      "Power Supply": "100-240V AC, 50/60Hz"
    },
    applications: [
      "Gynecological Intrauterine Myoma & Polyp Morcellation",
      "Post-HoLEP Prostatic Adenoma Tissue Extraction in Urology",
      "Minimally Invasive Soft Tissue Resection & Rapid Evacuation",
      "Endoscopic Day-Surgery Procedures"
    ],
    seoKeywords: "endoscopic morcellator, tissue morcellator system, uterine morcellator, HoLEP morcellator, 6000 rpm morcellator, surgical morcellation pump",
    seoDescription: "Intelligent Endoscopic Tissue Morcellator with 300-6000 rpm variable speed, -80 kPa suction, and 4.8mm blades for uterine and prostate tissue removal."
  },
  {
    id: "digital-endoscope-image-processor-1080p",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Full HD 1080P Digital Endoscope Image Processor Workstation",
    model: "",
    image: "/assets/images/endoscopy/digital-endoscope-image-processor-workstation.png",
    gallery: [
      "/assets/images/endoscopy/digital-endoscope-image-processor-workstation.png",
      "/assets/images/endoscopy/digital-visual-sheathing-lithotripsy-tower.png"
    ],
    rating: 5.0,
    reviews: 45,
    isCustomizable: true,
    shortDesc: "All-in-one Full HD 1080P digital endoscope image processor with integrated 5-level LED cold light source, 3-level digital zoom, square/circular display modes, and AWC one-touch white balance.",
    moq: "1 Unit",
    keyFeatures: [
      "Full HD 1080P Digital Video Output with HDMI × 1 and DVI × 1 Interfaces",
      "Integrated 5-Level Adjustable LED Cold Light Source System",
      "Multi-Level Zoom Function (Level 0, 1, 2) for Detailed Mucosal Inspection",
      "Switchable Display Mask: Square Full Screen or Classic Circular View",
      "Advanced High-Frequency Electrosurgical Anti-Interference Technology & Low Noise (≤55dB)"
    ],
    detailedSpecs: {
      "Video Output Resolution": "Full HD 1080P (1920×1080)",
      "Output Interfaces": "HDMI × 1, DVI × 1",
      "Light Source": "Built-in medical LED cold light source with 5 brightness levels",
      "White Balance": "Automatic (AWC) / Manual One-Touch White Balance",
      "Zoom Settings": "Level 0 (No zoom), Level 1, Level 2 (Digital magnification)",
      "Image Processing": "Image freeze, photo snapshot, video recording, square/circular mask",
      "Anti-Interference": "Active high-frequency electrosurgical noise suppression",
      "Operating Noise": "≤ 55 dB under full operating conditions",
      "Optional Accessories": "24-inch HD medical grade display, specialized endoscopic cart",
      "Scope Compatibility": "All digital flexible and rigid nephroscopes, ureteroscopes, cystoscopes, hysteroscopes"
    },
    applications: [
      "Complete Endourology Endoscopy Video Processing",
      "Gynecological Hysteroscopy & Laparoscopy",
      "High-Frequency Electrosurgical Resection Imaging",
      "Operating Room & Outpatient Endoscopy Suites"
    ],
    seoKeywords: "digital endoscope image processor, 1080P endoscope camera console, endoscopy video workstation, integrated LED light source processor, medical image processor",
    seoDescription: "Full HD 1080P Digital Endoscope Image Processor with integrated 5-level LED cold light, 3-level zoom, and electrosurgical anti-interference for multi-specialty endoscopy."
  },
  {
    id: "4k-ultra-hd-medical-endoscopic-camera-system",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "4K Ultra HD Medical Endoscopic Camera System",
    model: "",
    image: "/assets/images/endoscopy/4k-uhd-camera-system.png",
    gallery: [
      "/assets/images/endoscopy/4k-uhd-camera-system.png",
      "/assets/images/endoscopy/hd-led-cold-light-source.png"
    ],
    rating: 5.0,
    reviews: 36,
    isCustomizable: true,
    shortDesc: "State-of-the-art 4K UHD medical endoscopic camera system featuring 3840×2160 resolution, ≥2000 TV lines, extinction & anti-moiré processing, standard C-mount, and HDMI/DVI/SDI outputs.",
    moq: "1 Unit",
    keyFeatures: [
      "Native 4K UHD Sensor: 3840×2160 HDMI Output & ≥2000 Horizontal TV Lines",
      "Extinction Technology: Zero In-Cavity Light Reflection in Fluid Environments",
      "Anti-Moiré Technology Specially Optimized for Fiber-Optic Endoscopes",
      "Fully Waterproof Camera Head with Custom Programmable Multi-Function Buttons",
      "Comprehensive Broadcast Outputs: HDMI, DVI, and 3G-SDI for Zero-Latency Live Display"
    ],
    detailedSpecs: {
      "Pixel Resolution": "Native 4K chip: 3840×2160 (HDMI), 1920×1080 (DVI/SDI)",
      "Horizontal Resolution": "≥ 2000 TV Lines",
      "Optical Mount": "Standard universal C-mount",
      "Camera Head Buttons": "Customizable multi-function control buttons (White Balance, Freeze, Record)",
      "Video Outputs": "HDMI × 1, DVI × 1, 3G-SDI × 1",
      "Operating Noise": "≤ 55 dB under operating conditions",
      "Special Filters": "Active optical extinction filter, fiber anti-moiré algorithm, electrosurgical noise filter",
      "Waterproof Rating": "IPX8 waterproof camera head and cable",
      "Scope Compatibility": "Optical & fiber thoracoscopes, laparoscopes, hysteroscopes, uroscopes, arthroscopes"
    },
    applications: [
      "Laparoscopic & Thoracoscopic Minimally Invasive Surgery",
      "4K Urology (Nephroscopy, Resection, Ureteroscopy)",
      "4K Gynecological Hysteroscopy & Laparoscopy",
      "Orthopedic Arthroscopy & ENT Endoscopic Procedures"
    ],
    seoKeywords: "4K UHD endoscopic camera, 4K medical camera system, 3840x2160 endoscope camera, anti-moire fiber camera, C-mount surgical camera, laparoscopy 4K tower",
    seoDescription: "4K UHD Medical Endoscopic Camera System with 3840×2160 resolution, ≥2000 lines, extinction & anti-moiré technology, and SDI/HDMI/DVI outputs for surgical precision."
  },
  {
    id: "medical-high-power-led-cold-light-source",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Medical-Grade High-Power 100W LED Cold Light Source",
    model: "",
    image: "/assets/images/endoscopy/hd-led-cold-light-source.png",
    gallery: [
      "/assets/images/endoscopy/hd-led-cold-light-source.png",
      "/assets/images/endoscopy/4k-uhd-camera-system.png"
    ],
    rating: 4.9,
    reviews: 27,
    isCustomizable: true,
    shortDesc: "High-power 100W medical LED cold light source delivering >200,000 lux illumination, CRI ≥90, 40,000-hour emitter life, Storz/Wolf universal adapter, and 1-100 digital dimming with memory.",
    moq: "1 Unit",
    keyFeatures: [
      "100W High-Efficiency Medical LED Emitter with >200,000 Lux Output",
      "Exceptional Color Rendering Index (CRI ≥90) for True-to-Life Tissue Color Reproduction",
      "Extended Lamp Working Life >40,000 Hours (Eliminates Costly Xenon Bulb Replacements)",
      "Digital Dimming from 1 to 100 with Automatic Power-On Brightness Memory",
      "Universal International Light Guide Coupler (Storz, Wolf, Olympus Compatible)"
    ],
    detailedSpecs: {
      "Rated Output Power": "100 W High-Power LED",
      "Color Temperature": "3000 K – 7000 K (Pure daylight white)",
      "Color Rendering Index (CRI)": "≥ 90",
      "Light Output Illuminance": "> 200,000 Lux at cable exit",
      "Emitter Working Lifespan": "> 40,000 Hours continuous operation",
      "Operating Noise": "≤ 60 dB with smart temperature-controlled silent cooling",
      "Brightness Control": "1 – 100 digital continuous adjustment with power-off memory",
      "Usage Timer": "Integrated digital LCD working hour counter",
      "Optical Coupler": "Multi-brand universal light cable connector (Storz/Wolf/Olympus)",
      "Safety": "Low thermal radiation at fiber distal tip to prevent in-vivo tissue burns"
    },
    applications: [
      "High-Intensity Illumination for Endoscopy & Laparoscopy",
      "Urological Rigid & Flexible Endoscope Illumination",
      "Gynecological, ENT, and Orthopedic Surgical Procedures",
      "Compatible with All Fiber-Optic Light Guide Cables"
    ],
    seoKeywords: "100W LED cold light source, medical LED light source, 200000 lux light source, 40000h endoscopy light, Storz compatible light source, surgical illumination",
    seoDescription: "Medical-Grade 100W LED Cold Light Source with >200,000 lux, CRI ≥90, 40,000h lifespan, and 1-100 digital dimming for bright, cool surgical illumination."
  },
  {
    id: "intelligent-endoscopic-perfusion-suction-irrigator",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Intelligent Endoscopic Perfusion & Suction Irrigator Workstation",
    model: "",
    image: "/assets/images/endoscopy/endoscope-irrigator-suction-pump.png",
    gallery: [
      "/assets/images/endoscopy/endoscope-irrigator-suction-pump.png",
      "/assets/images/endoscopy/endoscope-irrigator-perfusion-pump.png",
      "/assets/images/endoscopy/irrigator-collecting-bottle.png"
    ],
    rating: 5.0,
    reviews: 33,
    isCustomizable: true,
    shortDesc: "Intelligent dual-function perfusion and suction unit with 50-700 mmHg irrigation pressure, 50-400 mmHg suction pressure, 5-inch touchscreen, and auto-memory for urology and gynecology fluid management.",
    moq: "1 Unit",
    keyFeatures: [
      "Dual Perfusion & Suction Control: Irrigation (50-700 mmHg) & Suction (50-400 mmHg)",
      "Precise Flow Rate Regulation: Irrigation (0.1–1.5 L/min) & Suction (≥1.5 L/min)",
      "Intuitive 5-Inch Color Touchscreen Interface with Real-Time Pressure & Flow Readout",
      "Automatic Power-On Memory Retaining Last Clinical Pressure Settings",
      "Complete Tubing Suite Included: Autoclavable Collection Bottle, Infusion Tube & Suction Tube"
    ],
    detailedSpecs: {
      "Rated Output Power": "400 VA",
      "Irrigation Pressure Range": "50 – 700 mmHg (6.7 – 93.3 kPa) continuously adjustable",
      "Suction Pressure Range": "50 – 400 mmHg (6.7 – 53.3 kPa) continuously adjustable",
      "Irrigation Flow Rate": "0.1 – 1.5 L/min",
      "Suction Flow Rate": "≥ 1.5 L/min",
      "Control Screen": "5-inch responsive color touchscreen with real-time numeric readouts",
      "Memory Function": "Automatic recall of previous operating parameters on startup",
      "Auxiliary Accessories Included": "High-capacity collection bottle, peristaltic infusion tubing, suction tubing",
      "Safety Mechanisms": "Cavity overpressure automatic relief and low-fluid alarm"
    },
    applications: [
      "Urological Fluid Management (PCNL, URS, Cystoscopy)",
      "Gynecological Hysteroscopy Distension & Continuous Fluid Circulation",
      "Laparoscopic In-Cavity Lavage and Suction",
      "Maintains Crystal-Clear Visibility and Stable Intraoperative Cavity Pressure"
    ],
    seoKeywords: "endoscope irrigator, endoscopic perfusion pump, urology suction irrigator, hysteroscopy distension pump, medical irrigation pump, 50-700 mmHg irrigator",
    seoDescription: "Intelligent Endoscopic Perfusion & Suction Irrigator with 50-700 mmHg pressure, 5-inch touchscreen, and collection bottle set for urology and gynecology."
  },
  {
    id: "digital-visual-sheathing-lithotripsy-workstation",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Digital Visual Sheathing and Negative Pressure Lithotripsy Workstation",
    model: "",
    image: "/assets/images/endoscopy/digital-visual-sheathing-lithotripsy-tower.png",
    gallery: [
      "/assets/images/endoscopy/digital-visual-sheathing-lithotripsy-tower.png",
      "/assets/images/endoscopy/digital-visual-sheathing-endoscope.png",
      "/assets/images/endoscopy/digital-negative-pressure-lithotripscope.png"
    ],
    rating: 5.0,
    reviews: 15,
    isCustomizable: true,
    shortDesc: "Complete mobile endourology workstation integrating visual sheathing scope, negative pressure lithotriptoscope, cold light processor, irrigation pump, and negative pressure stone collector.",
    moq: "1 Set",
    keyFeatures: [
      "All-in-One Endourology Lithotripsy Tower with Integrated Mobile Instrument Trolley",
      "Digital Visual Sheathing Endoscope Enabling Direct Observation During Sheath Passage",
      "Negative Pressure Lithotriptoscope for Zero-Residue Calculus Disruption & Evacuation",
      "High-Precision Negative Pressure Collector for Regulated Stone Dust Extraction",
      "Compatible with Reusable (11/12Fr) & Disposable Bendable Calculus-Removing Sheaths"
    ],
    detailedSpecs: {
      "System Architecture": "Digital tower trolley, 1080P image processor, 100W LED light, perfusion pump, suction collector",
      "Visual Sheathing Scope": "Digital high-definition visual entry endoscope",
      "Negative Pressure Lithotriptoscope": "Integrated suction lithotriptoscope",
      "Stone Collector": "Vacuum-regulated negative pressure filtration canister",
      "Irrigation Tubing": "Self-controlled adjustable ultra-thin 11/12Fr irrigation/suction tube",
      "Flexible Scope Compatibility": "Compatible with flexible digital ureteroscopes for combined joint lithotripsy",
      "Sterilization": "Low-temperature plasma, EO sterilization"
    },
    applications: [
      "Upper and Middle Ureteral Calculus Lithotripsy",
      "Complex Renal Pelvis Stone Clearance with Zero Stone Powder Residue",
      "Direct Natural Orifice Visual Sheath Placement (Minimizes Ureteral Injury)",
      "Combined Flexible and Rigid Endourological Procedures"
    ],
    seoKeywords: "digital visual sheathing lithotriptoscope, negative pressure lithotripsy system, vontoscope, urology endoscopy tower, stone extraction collector, endourology workstation",
    seoDescription: "Digital Visual Sheathing and Negative Pressure Lithotripsy Workstation with integrated tower, visual sheathing scope, and vacuum stone dust evacuation."
  },
  {
    id: "single-use-bendable-negative-pressure-sheath",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Single-Use Flexible Universal Bendable Negative Pressure Calculus-Removing Sheath",
    model: "",
    image: "/assets/images/endoscopy/flexible-bendable-negative-pressure-sheath.png",
    gallery: [
      "/assets/images/endoscopy/flexible-bendable-negative-pressure-sheath.png",
      "/assets/images/endoscopy/ureteral-guide-sheath-full-set.png"
    ],
    rating: 5.0,
    reviews: 48,
    isCustomizable: true,
    shortDesc: "Sterile single-use universal bendable negative pressure access sheath available in 11-13Fr and 12-14Fr (35cm/45cm) with rotating pressure control ring for continuous stone powder suction during RIRS.",
    moq: "1 Box (10 Sets)",
    keyFeatures: [
      "Universal Bendable Construction Moving Smoothly in Coordination with Flexible Ureteroscopes",
      "Continuous Negative Pressure Suction Evacuating Blood, Pus, and Laser Stone Powder",
      "Solves Stone Powder Sedimentation Issue (Eliminates Stone Basket Failures)",
      "Rotating Pressure Control Ring for Real-Time Intrarenal Pressure Regulation",
      "Sterile Disposable Packaging (1 Set/Box, 10 Boxes/Carton) in 11-13Fr & 12-14Fr (35cm/45cm)"
    ],
    detailedSpecs: {
      "Size Config 1": "11-13 Fr Diameter, 35 cm Length (1 Set/box, 10 Boxes/carton)",
      "Size Config 2": "11-13 Fr Diameter, 45 cm Length (1 Set/box, 10 Boxes/carton)",
      "Size Config 3": "12-14 Fr Diameter, 35 cm Length (1 Set/box, 10 Boxes/carton)",
      "Size Config 4": "12-14 Fr Diameter, 45 cm Length (1 Set/box, 10 Boxes/carton)",
      "Conventional Options": "10/12Fr, 11/12Fr, and 12/14Fr for male and female anatomy",
      "Material": "Medical grade reinforced polymer with hydrophilic lubricious coating",
      "Pressure Regulation": "Rotating manual pressure control valve",
      "Packaging": "Individual sterile blister pack, ethylene oxide sterilized"
    },
    applications: [
      "Retrograde Intrarenal Surgery (RIRS) with Flexible Ureteroscopes",
      "Holmium & Thulium Laser Lithotripsy Stone Dust Removal",
      "Intraoperative Renal Pelvis Pressure Reduction",
      "Prevention of Urosepsis and Renal Fornix Rupture"
    ],
    seoKeywords: "negative pressure ureteral access sheath, bendable calculus removing sheath, RIRS suction sheath, 11 13Fr ureteral sheath, laser stone suction sheath, sterile ureteral access sheath",
    seoDescription: "Single-Use Flexible Bendable Negative Pressure Calculus-Removing Sheath in 11-13Fr & 12-14Fr with rotating pressure control for zero stone powder residue in RIRS."
  },
  {
    id: "medical-hydrophilic-zebra-guidewire",
    categoryId: "endoscopy-systems",
    categoryName: "Minimally Invasive Endoscopy Systems & Surgical Instruments",
    brand: "",
    name: "Medical Hydrophilic-Coated Zebra Urological Guide Wire",
    model: "",
    image: "/assets/images/endoscopy/zebra-guide-wire.png",
    gallery: [
      "/assets/images/endoscopy/zebra-guide-wire.png"
    ],
    rating: 4.9,
    reviews: 62,
    isCustomizable: true,
    shortDesc: "Hospital-grade hydrophilic-coated zebra guide wire with kink-resistant Nitinol core, 5cm atraumatic soft tip, high-visibility blue/white helical stripes, available in 0.028\", 0.032\", 0.035\", and 0.038\" (150cm length).",
    moq: "1 Box (5 Pcs)",
    keyFeatures: [
      "Kink-Resistant Superelastic Nitinol Inner Core Delivering 1:1 Torque & Superior Pushability",
      "High-Visibility Blue and White Helical Stripes for Clear Motion Tracking Under Fluoroscopy & Scope",
      "Medical Hydrophilic Coating Providing Ultra-Low Friction Sliding Performance",
      "5cm Flexible Atraumatic Soft Tip Minimizing Urethral and Ureteral Mucosal Trauma",
      "Available in 0.028\", 0.032\", 0.035\", and 0.038\" Diameters (150cm Effective Length)"
    ],
    detailedSpecs: {
      "Length": "150 cm",
      "Tip Characteristic": "5 cm atraumatic soft flexible tip",
      "Diameter Spec 1": "0.028 inch (0.71 mm) × 150 cm",
      "Diameter Spec 2": "0.032 inch (0.81 mm) × 150 cm",
      "Diameter Spec 3": "0.035 inch (0.89 mm) × 150 cm",
      "Diameter Spec 4": "0.038 inch (0.97 mm) × 150 cm",
      "Core Material": "High-elasticity Nitinol nickel-titanium core",
      "Surface Coating": "Durable hydrophilic polymer coating",
      "Packaging": "1 Pcs/sterile pouch, 5 Pouches/box",
      "Sterilization": "Ethylene Oxide (EO) sterile"
    },
    applications: [
      "Urological Endoscopic Access and Instrument Guidance (URS, PCNL, Cystoscopy)",
      "Ureteral Stricture Navigation and Tortuous Pathway Dilation",
      "Ureteral Stent (Double J) and Access Sheath Placement",
      "General Minimally Invasive Endourological Interventions"
    ],
    seoKeywords: "zebra guide wire, hydrophilic urological guidewire, nitinol zebra guidewire, 0.035 guidewire, 0.038 guidewire, ureteral access guidewire, endourology guide wire",
    seoDescription: "Medical Hydrophilic Zebra Guide Wire with Nitinol core, 5cm soft tip, blue/white stripes, and 0.028-0.038\" diameters for smooth urological access."
  }
];

// Generate French Counterparts
const WOKE_PRODUCTS_FR = WOKE_PRODUCTS_EN.map(p => {
  return {
    ...p,
    categoryId: "endoscopy-systems",
    categoryName: "Systèmes d’Endoscopie Mini-Invasive & Instruments Chirurgicaux",
    name: p.name
      .replace("Digital Visual Puncture Mini Nephroscope System", "Système de Mini-Néphroscope Numérique de Ponction Visuelle")
      .replace("Digital Miniature Nephroscope (8.5/12Fr)", "Mini-Néphroscope Numérique (8.5/12Fr)")
      .replace("Digital Standard Nephroscope (15/18Fr)", "Néphroscope Numérique Standard (15/18Fr)")
      .replace("Customizable High-Resolution Digital Nephroscope System", "Système de Néphroscope Numérique Haute Résolution Personnalisable")
      .replace("New-Type Mini-PCNL Wide-Angle Nephroscope", "Néphroscope Grand Angle Nouvelle Génération pour Mini-PCNL")
      .replace("Miniature Nephroscope with 84° FOV (8.5/12Fr)", "Néphroscope Miniature Champ 84° (8.5/12Fr)")
      .replace("Rigid Digital High-Definition Nephroscope (520,000 Pixels)", "Néphroscope Numérique Rigide Haute Définition (520 000 Pixels)")
      .replace("UPS 12° Dual-Channel Rigid Digital Nephroscope", "Néphroscope Numérique Rigide à Double Canal UPS 12°")
      .replace("USP 12° Rigid Digital Uretero-Renoscope (160,000 Pixels)", "Urétéro-Rénoscope Numérique Rigide USP 12° (160 000 Pixels)")
      .replace("USP 12° Rigid Digital Uretero-Renoscope (520,000 Pixels Ultra HD)", "Urétéro-Rénoscope Numérique Rigide USP 12° (520 000 Pixels Ultra HD)")
      .replace("USP 12° Dual-Channel Rigid Digital Uretero-Renoscope", "Urétéro-Rénoscope Numérique Rigide à Double Canal USP 12°")
      .replace("Rigid Optical Fiber Uretero-Renoscope (84° FOV)", "Urétéro-Rénoscope à Fibre Optique Rigide (Champ 84°)")
      .replace("Single-Use Digital Flexible Ureteroscope (275° Deflection)", "Urétéroscope Numérique Souple à Usage Unique (Déflexion 275°)")
      .replace("Reusable Digital Flexible Uretero-Renoscope System", "Système d'Urétéro-Rénoscope Numérique Souple Réutilisable")
      .replace("Sheath-Free Rigid Digital Cystoscope with Working Channel", "Cystoscope Numérique Rigide sans Gaine avec Canal Opératoire")
      .replace("Single-Use Digital Flexible Cystoscope", "Cystoscope Numérique Souple à Usage Unique")
      .replace("Reusable Digital Flexible Cystoscope System", "Système de Cystoscope Numérique Souple Réutilisable")
      .replace("Ultra-Thin Digital Laserscope for Prostatic Resection", "Laserscope Numérique Ultra-Fin pour Résection Prostatique")
      .replace("Ultra-Mini Digital Morcescope (with 22Fr Outer Sheath)", "Morcescope Numérique Ultra-Mini (avec Gaine Externe 22Fr)")
      .replace("Rigid Digital Fetoscope for TTTS Laser Photocoagulation", "Fœtoscope Numérique Rigide pour Photocoagulation Laser STT")
      .replace("Intelligent Endoscopic Tissue Morcellator Power System", "Système d'Alimentation et Morcellateur Tissulaire Endoscopique Intelligent")
      .replace("Full HD 1080P Digital Endoscope Image Processor Workstation", "Processeur d'Image pour Endoscope Numérique Full HD 1080P")
      .replace("4K Ultra HD Medical Endoscopic Camera System", "Système de Caméra Endoscopique Médicale 4K Ultra HD")
      .replace("Medical-Grade High-Power 100W LED Cold Light Source", "Source de Lumière Froide LED Haute Puissance 100W Médicale")
      .replace("Intelligent Endoscopic Perfusion & Suction Irrigator Workstation", "Pompe d'Irrigation et d'Aspiration Endoscopique Intelligente")
      .replace("Digital Visual Sheathing and Negative Pressure Lithotripsy Workstation", "Station de Lithotripsie sous Pression Négative avec Gaine Visuelle")
      .replace("Single-Use Flexible Universal Bendable Negative Pressure Calculus-Removing Sheath", "Gaine d'Aspiration sous Pression Négative Orientable à Usage Unique")
      .replace("Medical Hydrophilic-Coated Zebra Urological Guide Wire", "Guide Urologique Zébré à Revêtement Hydrophile"),
    shortDesc: p.shortDesc
      .replace("Digital", "Numérique")
      .replace("ultra-miniature", "ultra-miniature")
      .replace("working diameter", "diamètre de travail")
      .replace("pixels resolution", "pixels de résolution")
      .replace("for precision percutaneous renal access", "pour accès rénal percutané de haute précision"),
    moq: p.moq.replace("Unit", "Unité").replace("Box", "Boîte").replace("Set", "Ensemble"),
    seoDescription: p.seoDescription
  };
});

console.log(`Prepared ${WOKE_PRODUCTS_EN.length} English and French Endoscopy products.`);

// 3. Update categories.js and categoriesFr.js
const catJsPath = path.join(__dirname, 'src', 'data', 'categories.js');
let catJsContent = fs.readFileSync(catJsPath, 'utf8');
if (!catJsContent.includes('endoscopy-systems')) {
  catJsContent = catJsContent.replace('export const CATEGORIES = [', `export const CATEGORIES = [\n  ${JSON.stringify(ENDOSCOPY_CATEGORY_EN, null, 2)},`);
  fs.writeFileSync(catJsPath, catJsContent, 'utf8');
  console.log('Updated categories.js with endoscopy-systems');
}

const catFrJsPath = path.join(__dirname, 'src', 'data', 'categoriesFr.js');
let catFrJsContent = fs.readFileSync(catFrJsPath, 'utf8');
if (!catFrJsContent.includes('endoscopy-systems')) {
  catFrJsContent = catFrJsContent.replace('export const CATEGORIES_FR = [', `export const CATEGORIES_FR = [\n  ${JSON.stringify(ENDOSCOPY_CATEGORY_FR, null, 2)},`);
  fs.writeFileSync(catFrJsPath, catFrJsContent, 'utf8');
  console.log('Updated categoriesFr.js with endoscopy-systems');
}

// 4. Update products.js and productsFr.js
const productsJsPath = path.join(__dirname, 'src', 'data', 'products.js');
let productsJsContent = fs.readFileSync(productsJsPath, 'utf8');

// Filter out existing products in products.js that match new IDs to prevent duplicate IDs
WOKE_PRODUCTS_EN.forEach(newP => {
  if (!productsJsContent.includes(`"id": "${newP.id}"`)) {
    const insertPoint = productsJsContent.indexOf('export const FEATURED_PRODUCTS = [') + 'export const FEATURED_PRODUCTS = ['.length;
    const formatted = '\n  ' + JSON.stringify(newP, null, 2) + ',';
    productsJsContent = productsJsContent.slice(0, insertPoint) + formatted + productsJsContent.slice(insertPoint);
  }
});
fs.writeFileSync(productsJsPath, productsJsContent, 'utf8');
console.log('Updated products.js with Woke endoscopy products.');

const productsFrJsPath = path.join(__dirname, 'src', 'data', 'productsFr.js');
let productsFrJsContent = fs.readFileSync(productsFrJsPath, 'utf8');
WOKE_PRODUCTS_FR.forEach(newP => {
  if (!productsFrJsContent.includes(`"id": "${newP.id}"`)) {
    const insertPoint = productsFrJsContent.indexOf('export const FEATURED_PRODUCTS_FR = [') + 'export const FEATURED_PRODUCTS_FR = ['.length;
    const formatted = '\n  ' + JSON.stringify(newP, null, 2) + ',';
    productsFrJsContent = productsFrJsContent.slice(0, insertPoint) + formatted + productsFrJsContent.slice(insertPoint);
  }
});
fs.writeFileSync(productsFrJsPath, productsFrJsContent, 'utf8');
console.log('Updated productsFr.js with Woke endoscopy products.');

// 5. Update siteStore.js to increment STORAGE_KEY to v8 to auto-refresh stored snapshots cleanly
const siteStorePath = path.join(__dirname, 'src', 'data', 'siteStore.js');
let siteStoreContent = fs.readFileSync(siteStorePath, 'utf8');
siteStoreContent = siteStoreContent.replace(/maxvor_cms_site_data_v\d+/g, 'maxvor_cms_site_data_v8');
fs.writeFileSync(siteStorePath, siteStoreContent, 'utf8');
console.log('Updated siteStore.js with STORAGE_KEY v8.');

// 6. Update sitemap.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const newUrls = [];
WOKE_PRODUCTS_EN.forEach(p => {
  const urlEn = `  <url>\n    <loc>https://maxvor.com/products/${p.id}</loc>\n    <lastmod>2026-11-20</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`;
  const urlFr = `  <url>\n    <loc>https://maxvor.com/fr/products/${p.id}</loc>\n    <lastmod>2026-11-20</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`;
  if (!sitemapContent.includes(`https://maxvor.com/products/${p.id}`)) {
    newUrls.push(urlEn);
  }
  if (!sitemapContent.includes(`https://maxvor.com/fr/products/${p.id}`)) {
    newUrls.push(urlFr);
  }
});

if (newUrls.length > 0) {
  sitemapContent = sitemapContent.replace('</urlset>', newUrls.join('\n') + '\n</urlset>');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`Added ${newUrls.length} new endoscopy URLs to sitemap.xml`);
}

console.log('All endoscopy catalog data, categories, site store, and sitemaps updated successfully.');
