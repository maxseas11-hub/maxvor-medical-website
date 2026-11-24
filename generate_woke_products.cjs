const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// Read existing products
const productsJsPath = path.join(rootDir, 'src', 'data', 'products.js');
const productsJsContent = fs.readFileSync(productsJsPath, 'utf8');

const productsFrJsPath = path.join(rootDir, 'src', 'data', 'productsFr.js');
const productsFrJsContent = fs.readFileSync(productsFrJsPath, 'utf8');

// Extract first 40 core products from products.js
const enMatch = productsJsContent.match(/export const FEATURED_PRODUCTS = (\[[\s\S]*?\]);\s*export const CERTIFICATIONS/);
if (!enMatch) {
  throw new Error("Could not match FEATURED_PRODUCTS in products.js");
}
let baseProductsEn = eval(enMatch[1]);
// Keep only non-endoscopy products (the 40 core ultrasound + wound care products)
baseProductsEn = baseProductsEn.filter(p => p.categoryId !== 'endoscopy-systems');

const frMatch = productsFrJsContent.match(/export const FEATURED_PRODUCTS_FR = (\[[\s\S]*?\]);\s*export const CERTIFICATIONS_FR/);
if (!frMatch) {
  throw new Error("Could not match FEATURED_PRODUCTS_FR in productsFr.js");
}
let baseProductsFr = eval(frMatch[1]);
baseProductsFr = baseProductsFr.filter(p => p.categoryId !== 'endoscopy-systems');

console.log(`Retained ${baseProductsEn.length} core EN products and ${baseProductsFr.length} core FR products.`);

// 33 Endoscopy Products Definition (Zero model codes in titles, specs, slugs or descriptions)
const endoscopyProductsEn = [
  {
    id: "digital-visual-puncture-mini-nephroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Visual Puncture Mini Nephroscope",
    model: "",
    image: "/assets/images/endoscopy/digital-visual-puncture-mini-nephroscope.png",
    rating: 5,
    reviews: 38,
    isCustomizable: true,
    shortDesc: "Ultra-miniature visual puncture nephroscope featuring high-definition 160,000 pixels CMOS imaging, 0.9mm working diameter, 30° bevel guide needle, and self-controlled negative pressure suction for complex renal calculi.",
    moq: "1 Unit",
    keyFeatures: [
      "160,000 Pixels CMOS High-Definition Imaging with 110° Ultra-Wide Field of View (FOV)",
      "Ultra-Fine 0.9mm Working Diameter with 270mm Working Length (0° Direction of View)",
      "Independent Objective Lens Locking Mechanism & Integrated Three-Way Rinse Valve",
      "Medical Stainless Steel Puncture Guide Needle with 30° Bevel Tip for Precise Renal Access",
      "Equipped with 10Fr Ultra-Fine Flushing Suction Tube with Self-Controlled Negative Pressure",
      "Optimal for Renal Pelvis Stones (>1.5cm), Diverticulum Stones & Multi-Scope Combined Lithotripsy"
    ],
    detailedSpecs: {
      "Optical System": "High-Definition CMOS Sensor, 160,000 Pixels",
      "Direction of View (DOV)": "0° Forward Viewing",
      "Field of View (FOV)": "110° Ultra-Wide Angle",
      "Working Diameter": "0.9 mm",
      "Working Length": "270 mm",
      "Puncture Needle Construction": "Medical Stainless Steel with 30° Bevel Tip",
      "Needle Specifications": "5Fr Inner Needle / 6Fr Outer Needle (180mm Length)",
      "Flushing & Suction Tube": "10Fr Ultra-Fine Tube with Self-Controlled Negative Pressure Function",
      "Laser Fiber Compatibility": "Integrated Locking Device for Holmium Laser Lithotripsy Fibers",
      "Video Processor Integration": "Compatible with Standard Digital Endoscope Image Processors",
      "Sterilization Compatibility": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide (EtO)"
    },
    applications: [
      "Percutaneous Renal Visual Puncture & Direct Lithotripsy Access",
      "Renal Pelvis Calculi (>1.5 cm) & Caliceal Stones (<1.5 cm)",
      "Renal Calyx Diverticulum Calculi & Parallel Calyx Stone Extraction",
      "Multi-Scope Combined Minimally Invasive Urological Procedures"
    ],
    seoKeywords: "digital visual puncture mini nephroscope, visual puncture nephroscope, mini nephroscope, PCNL nephroscope, ultra-mini nephroscope, urology endoscopy, renal stone lithotripsy",
    seoDescription: "Digital Visual Puncture Mini Nephroscope with 160,000 pixels HD imaging, 0.9mm diameter, and self-controlled suction for minimally invasive percutaneous nephrolithotomy."
  },
  {
    id: "digital-miniature-nephroscope-8-5-12fr",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Miniature Nephroscope (8.5/12Fr)",
    model: "",
    image: "/assets/images/endoscopy/digital-miniature-nephroscope-8-5-12fr.png",
    rating: 5,
    reviews: 29,
    isCustomizable: true,
    shortDesc: "Micro-channel digital nephroscope featuring 8.5/12Fr oval shaft, 12° viewing angle, 6.3Fr working channel, automatic intraoperative pressure control, and dual-valve sealing for efficient lithotripsy.",
    moq: "1 Unit",
    keyFeatures: [
      "12° Viewing Angle with 160,000 Pixels High-Definition Wide-Angle Image Range",
      "8.5/12Fr Oval-Shaped Body for Automatic Intraoperative Pressure Control & Low Complication Rates",
      "6.3Fr Large Device Working Channel with 250mm Effective Working Length",
      "Semi-Rigid High-Transmittance Columnar Crystal Hard Lens Delivering Resilience & Sturdiness",
      "Dual-Valve Internal & External Automatic Sealing System for Zero Leakage",
      "Integrated Direct Video Plug & Compatibility with 15/16Fr Negative Pressure Suction Sheaths"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Direction of View",
      "Outer Diameter": "8.5 / 12Fr (Oval Pressure-Balancing Geometry)",
      "Working Channel Inner Diameter": "6.3Fr",
      "Working Length": "250 mm",
      "Image Resolution": "160,000 Pixels High-Definition",
      "Optical Material": "High-Transmittance Columnar Crystal with Semi-Rigid Integrated Lens",
      "Sealing Architecture": "Dual Internal & External Automatic Valve Sealing System",
      "Lithotripsy Compatibility": "Holmium Laser & Ultrasonic Lithotripsy Probes",
      "Clearance Sheath Support": "Compatible with 15/16Fr Negative Pressure Calculus Sheaths",
      "Ergonomics": "Single-Hand Lightweight Operating Balance",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Micro-Percutaneous Nephrolithotomy (Micro-PCNL)",
      "Holmium Laser & Ultrasonic Renal Calculus Fragmentation",
      "Continuous Low-Pressure Negative Pressure Stone Extraction",
      "Upper Urinary Tract Diagnostic Endoscopy"
    ],
    seoKeywords: "digital miniature nephroscope, 8.5/12Fr nephroscope, micro-channel nephroscope, mini PCNL scope, urology lithotripsy endoscope, renal calculus removal",
    seoDescription: "Digital Miniature Nephroscope 8.5/12Fr with 12° viewing angle, 6.3Fr channel, automatic pressure control, and dual-valve sealing for minimally invasive urological surgery."
  },
  {
    id: "digital-standard-nephroscope-15-18fr",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Standard Nephroscope (15/18Fr)",
    model: "",
    image: "/assets/images/endoscopy/digital-standard-nephroscope-15-18fr.png",
    rating: 5,
    reviews: 34,
    isCustomizable: true,
    shortDesc: "High-capacity standard digital nephroscope with 15/18Fr outer diameter, 11Fr working channel accommodating 3.3mm ultrasonic lithotripsy probes, 160,000 pixels HD resolution, and matching grasping forceps.",
    moq: "1 Unit",
    keyFeatures: [
      "12° Viewing Angle with 160,000 Pixels Wide-Angle High-Definition Imaging",
      "15/18Fr Outer Diameter with Customizable 12/15Fr (9Fr Channel) & 13.8/16.8Fr (11Fr Channel) Options",
      "11Fr High-Flow Working Channel Accommodating Heavy 3.3mm Ultrasonic Lithotripsy Probes",
      "Oval Tube Structure for High-Efficiency Continuous Intraoperative Low-Pressure Drainage",
      "Direct Video Plug Requiring No Separate Fragile Optical Camera Heads or Light Bundles",
      "Compatible with Matching Foreign Body & Biopsy Forceps (6Fr×460mm, 9Fr×380mm)"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Direction of View",
      "Outer Diameter": "15 / 18Fr (Customizable Options: 12/15Fr, 13.8/16.8Fr)",
      "Working Channel": "11Fr (Accommodates 3.3mm Ultrasonic Lithotripsy Probes)",
      "Working Length": "225 mm",
      "Image Sensor": "160,000 Pixels CMOS High-Definition",
      "Optical Construction": "High-Transmittance Columnar Crystal Semi-Rigid Lens",
      "Drainage Architecture": "Oval Drainage Channel with Automatic Pressure Control",
      "Instrument Compatibility": "Ballistic Lithotripsy Probes, Ultrasonic Probes & 6Fr/9Fr Forceps",
      "Cable Connection": "Integrated Direct Video Plug",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / EtO"
    },
    applications: [
      "Standard Percutaneous Nephrolithotomy (PCNL)",
      "High-Volume Staghorn & Large Renal Pelvis Lithotripsy",
      "Ultrasonic & Pneumatic Ballistic Combined Stone Clearance",
      "Tissue Biopsy and Foreign Body Grasping Extraction"
    ],
    seoKeywords: "digital standard nephroscope, 15/18Fr nephroscope, PCNL nephroscope, ultrasonic lithotripsy scope, large channel nephroscope, hospital urology equipment",
    seoDescription: "Digital Standard Nephroscope 15/18Fr with 11Fr working channel for 3.3mm ultrasonic lithotripsy probes, 160,000 pixels HD imaging, and oval continuous drainage."
  },
  {
    id: "new-type-mini-pcnl-nephroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "New-type Nephroscope",
    model: "",
    image: "/assets/images/endoscopy/new-type-mini-pcnl-nephroscope.png",
    rating: 5,
    reviews: 26,
    isCustomizable: true,
    shortDesc: "Specialized Mini-PCNL nephroscope with 84° wide field of view, available in 12/15Fr, 13.8/16.8Fr, and 15/18Fr diameters, medical stainless steel/titanium alloy shaft, and automatic working channel sealing.",
    moq: "1 Unit",
    keyFeatures: [
      "84° Wide Field of View (FOV) Specially Engineered for Minimally Invasive PCNL (Mini-PCNL)",
      "Available in 12/15Fr (9Fr Channel), 13.8/16.8Fr (11Fr Channel), and 15/18Fr (11.5Fr Channel) Configurations",
      "Effective Clinical Treatment of Large Calculi in Lower Renal Calyx as Holmium Laser Alternative",
      "Suitable Across Pediatric, Adolescent, and Adult Patient Demographics",
      "Medical Stainless Steel or Titanium Alloy Outer Sheath for Maximum Structural Sturdiness",
      "Large Channel Design Ensuring Continuous Low-Pressure Fluid Flushing"
    ],
    detailedSpecs: {
      "Field of View (FOV)": "84° Wide Angle",
      "Available Sizes": "12/15Fr (9Fr Channel), 13.8/16.8Fr (11Fr Channel), 15/18Fr (11.5Fr Channel)",
      "Working Length": "225 mm",
      "Shaft Material": "Medical Stainless Steel / Titanium Alloy",
      "Sealing System": "Automatic Working Channel Sealing Valve",
      "Lithotripsy Modalities": "Pneumatic Ballistic Lithotripsy & Ultrasonic Lithotripsy Probes",
      "Irrigation": "Continuous Low-Pressure High-Flow Flushing",
      "Sterilization Compatibility": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Minimally Invasive Percutaneous Nephrolithotomy (Mini-PCNL)",
      "Lower Renal Calyx Large Stone Fragmentation",
      "Pediatric, Adolescent & Adult Renal Stone Removal",
      "Pneumatic Ballistic & Ultrasonic Combined Lithotripsy"
    ],
    seoKeywords: "new-type nephroscope, mini-PCNL nephroscope, 84 degree nephroscope, titanium nephroscope, lower calyx calculus removal, urological endoscopy",
    seoDescription: "New-type Nephroscope with 84° FOV, 12/15Fr to 15/18Fr diameters, titanium/stainless steel construction, and automatic channel sealing for Mini-PCNL procedures."
  },
  {
    id: "miniature-nephroscope-8-5-12fr-84fov",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Miniature Nephroscope",
    model: "",
    image: "/assets/images/endoscopy/miniature-nephroscope-8-5-12fr-84fov.png",
    rating: 5,
    reviews: 22,
    isCustomizable: true,
    shortDesc: "Compact 8.5/12Fr optical miniature nephroscope with 84° FOV, 5Fr working channel, 250mm length, and matching renal biopsy and foreign body forceps for targeted lower renal calyx stone extraction.",
    moq: "1 Unit",
    keyFeatures: [
      "84° Wide Field of View Specially Optimized for Mini-PCNL Clinical Lithotripsy",
      "8.5/12Fr Slim Outer Diameter with 5Fr Working Instrument Channel and 250mm Working Length",
      "High-Efficiency Treatment for Lower Calyx Calculi as Alternative to Extracorporeal Shock Wave Lithotripsy (ESWL)",
      "Automatic Channel Sealing Mechanism for Fast and Leak-Free Auxiliary Device Introduction",
      "Includes Auxiliary Matching Renal Foreign Body Forceps (6Fr×420mm) and Biopsy Forceps (6Fr×420mm)",
      "Constructed from Medical Stainless Steel / Titanium Alloy for Slim Profile and High Rigidity"
    ],
    detailedSpecs: {
      "Field of View (FOV)": "84°",
      "Outer Diameter": "8.5 / 12Fr",
      "Working Channel": "5Fr",
      "Working Length": "250 mm",
      "Auxiliary Instruments": "Renal Foreign Body Forceps (6Fr×420mm), Renal Biopsy Forceps (6Fr×420mm)",
      "Shaft Construction": "Medical Stainless Steel / Titanium Alloy",
      "Channel Sealing": "Automatic Rapid Sealing Valve",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Mini-PCNL Renal Stone Removal",
      "Lower Renal Calyx Large Calculi Clearance",
      "Targeted Biopsy of Renal Pelvis Lesions",
      "Pediatric and Adult Micro-Invasive Nephrolithotomy"
    ],
    seoKeywords: "miniature nephroscope, 8.5/12Fr mini nephroscope, 84 FOV nephroscope, mini-PCNL endoscope, renal biopsy forceps, urology hospital supply",
    seoDescription: "Miniature Nephroscope 8.5/12Fr with 84° FOV, 5Fr channel, titanium shaft, and matching forceps for minimally invasive percutaneous renal stone treatment."
  },
  {
    id: "rigid-digital-nephroscope-520k-hd",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Rigid Digital Nephroscope",
    model: "",
    image: "/assets/images/endoscopy/rigid-digital-nephroscope.png",
    rating: 5,
    reviews: 31,
    isCustomizable: true,
    shortDesc: "Ultra-high definition 520,000 pixels rigid digital nephroscope featuring sapphire distal window sealing, laser-welded hermetic flush adapter, dual-layer valve sealing, and 8.5/12Fr or 15/18Fr specifications.",
    moq: "1 Unit",
    keyFeatures: [
      "520,000 Pixels Ultra-High Definition Wide-Angle Field of View CMOS Imaging Sensor",
      "Available in 8.5/12Fr (5Fr Channel, 250mm Length) and 15/18Fr (11.5Fr Channel, 225mm Length) Options",
      "Sapphire Crystal Sealed Distal Tip Window for Maximum Scratch and Abrasion Resistance",
      "Hermetic Laser-Welded Sealing of Scope Body and Flush Adapter Preventing Vapor Ingress",
      "Built-in Dual-Layer Sealer Device with Automatic Valve Closure During Instrument Exchange",
      "Fully Supports Holmium Laser, Ultrasonic, and Pneumatic Ballistic Lithotripsy"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Direction of View",
      "Pixel Resolution": "520,000 Pixels Ultra-High Definition",
      "Available Models": "8.5/12Fr (5Fr Channel, 250mm) / 15/18Fr (11.5Fr Channel, 225mm)",
      "Distal Lens Sealing": "Wear-Resistant Sapphire Crystal Window",
      "Joint Sealing": "Full Laser Welding on Flush Adapter Body",
      "Valve Mechanism": "Dual-Layer Sealer with Automatic Closure",
      "Optical Technology": "High-Transmittance Columnar Crystal Semi-Rigid Lens",
      "Lithotripsy Compatibility": "Holmium Laser, Ultrasonic & Ballistic Probes",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Ultra-HD Percutaneous Nephrolithotomy (PCNL & Mini-PCNL)",
      "High-Precision Renal Mucosa and Calyx Diagnostic Inspection",
      "Holmium Laser & Ultrasonic Lithotripsy Calculus Clearance",
      "Complex Staghorn Stone Extraction"
    ],
    seoKeywords: "rigid digital nephroscope, 520000 pixel nephroscope, ultra HD nephroscope, sapphire tip nephroscope, PCNL rigid scope, digital urology endoscope",
    seoDescription: "Rigid Digital Nephroscope with 520,000 pixels Ultra-HD resolution, sapphire crystal window seal, laser-welded body, and dual-layer automatic sealing valve."
  },
  {
    id: "ups-12-dual-channel-rigid-digital-nephroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "UPS 12° Dual Channel Rigid Digital Nephroscope",
    model: "",
    image: "/assets/images/endoscopy/rigid-digital-nephroscope.png",
    rating: 5,
    reviews: 24,
    isCustomizable: true,
    shortDesc: "Dual-channel 12° rigid digital nephroscope featuring simultaneous independent instrument channels (Channel A 6.3Fr, Channel B 3.7Fr), 8.5/12Fr diameter, 160,000 pixels HD resolution, and sapphire window.",
    moq: "1 Unit",
    keyFeatures: [
      "12° Viewing Angle with 160,000 Pixels High-Definition Wide-Angle Digital Video",
      "8.5/12Fr Outer Diameter with 250mm Working Length and Sapphire Distal Window Seal",
      "Built-in Dual Instrument Channels: Channel A (6.3Fr) & Channel B (3.7Fr) for Simultaneous Pass-Through",
      "Enables Concurrent Laser Fiber and Grasping Basket Deployment Without Instrument Interference",
      "Dual-Layer Internal Sealer and Automatic Valve Preventing Water Leakage During Guide Wire Extraction",
      "Direct Video Plug Compatible with Universal Digital Endoscope Image Processors"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Direction of View",
      "Outer Diameter": "8.5 / 12Fr",
      "Working Channel A": "6.3Fr (Primary Instrument / Lithotripsy Channel)",
      "Working Channel B": "3.7Fr (Secondary Auxiliary / Guide Wire / Basket Channel)",
      "Working Length": "250 mm",
      "Resolution": "160,000 Pixels High-Definition",
      "Optical Window": "Wear-Resistant Sapphire Crystal Seal",
      "Sealing Technology": "Dual-Layer Sealer with Automatic Valve Closure",
      "Video Connection": "Integrated Direct Video Plug",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Simultaneous Dual-Instrument Percutaneous Lithotripsy",
      "Concurrent Laser Fragmentation & Real-Time Basket Stone Grasping",
      "Guide Wire Retaining with Continuous Instrument Access",
      "Complex Pelvicalyceal Stone Management"
    ],
    seoKeywords: "dual channel nephroscope, UPS 12 degree nephroscope, dual channel rigid digital nephroscope, simultaneous PCNL scope, dual instrument urology scope",
    seoDescription: "UPS 12° Dual Channel Rigid Digital Nephroscope with 8.5/12Fr diameter, independent 6.3Fr and 3.7Fr channels, 160,000 pixels HD, and sapphire crystal tip."
  },
  {
    id: "usp-12-rigid-digital-uretero-renoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "USP 12° Rigid Digital Uretero-renoscope",
    model: "",
    image: "/assets/images/endoscopy/rigid-optical-fiber-uretero-renoscope.png",
    rating: 5,
    reviews: 35,
    isCustomizable: true,
    shortDesc: "High-definition 160,000 pixels rigid digital ureteroscope with 12° viewing angle, available in 8/9.8Fr (5Fr channel), 6/7.5Fr (4Fr channel), and 4.5/6.5Fr (3.6Fr channel seminal vesicle option), with 430mm length.",
    moq: "1 Unit",
    keyFeatures: [
      "12° Viewing Angle with 160,000 Pixels CMOS High-Definition Imaging and Wide Visual Field",
      "Available in 8/9.8Fr (5Fr Channel), 6/7.5Fr (4Fr Channel), and 4.5/6.5Fr (3.6Fr Channel) Configurations",
      "Dedicated 4.5/6.5Fr Specification Optimized for Seminal Vesiculoscopy and Pediatric Ureteroscopy",
      "430mm Effective Working Length with Semi-Rigid High-Resilience Columnar Crystal Construction",
      "Laser-Welded Hermetic Flush Joint and Sapphire Tip Seal for Zero Vapor Leakage",
      "Compatible with Optional 3Fr, 4Fr, and 5Fr × 600mm Renal Biopsy and Foreign Body Forceps"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Direction of View",
      "Resolution": "160,000 Pixels High-Definition",
      "Available Sizes": "8/9.8Fr (5Fr Channel), 6/7.5Fr (4Fr Channel), 4.5/6.5Fr (3.6Fr Channel)",
      "Working Length": "430 mm",
      "Specialty Option": "4.5/6.5Fr Dedicated Endoscope for Seminal Vesicle",
      "Tip Window": "Scratch-Resistant Sapphire Crystal Seal",
      "Sealing Architecture": "Dual-Layer Sealer with Automatic Valve Closure",
      "Cable Connection": "Integrated Direct Video Plug",
      "Optional Forceps": "Renal Biopsy & Foreign Body Forceps (3Fr / 4Fr / 5Fr × 600mm)",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Rigid Ureteroscopic Calculus Laser Lithotripsy",
      "Seminal Vesiculoscopy & Diagnostic Endoscopy (4.5/6.5Fr)",
      "Middle and Lower Ureteral Stricture & Stone Management",
      "Ureteral Mucosa Biopsy and Foreign Body Extraction"
    ],
    seoKeywords: "USP 12 rigid digital uretero-renoscope, rigid ureteroscope, digital ureterorenoscope, seminal vesiculoscope, urology laser lithotripsy scope",
    seoDescription: "USP 12° Rigid Digital Uretero-renoscope with 160,000 pixels HD, 430mm length, 4.5/6.5Fr to 8/9.8Fr sizes, and sapphire crystal tip seal."
  },
  {
    id: "usp-12-rigid-digital-uretero-renoscope-520k-hd",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "USP 12° Rigid Digital Uretero-renoscope (Ultra HD)",
    model: "",
    image: "/assets/images/endoscopy/rigid-optical-fiber-uretero-renoscope.png",
    rating: 5,
    reviews: 28,
    isCustomizable: true,
    shortDesc: "Ultra-high definition 520,000 pixels rigid digital ureteroscope with 12° viewing angle, 8/9.8Fr (5Fr channel) and 6/7.5Fr (4Fr channel) options, 430mm length, and sapphire distal lens seal.",
    moq: "1 Unit",
    keyFeatures: [
      "520,000 Pixels Ultra-High Definition Video Imaging with Exceptional Tissue Contrast",
      "12° Viewing Angle with High-Transmittance Columnar Crystal Semi-Rigid Optical Lens",
      "Available in 8/9.8Fr (5Fr Channel, 430mm) and 6/7.5Fr (4Fr Channel, 430mm) Sizes",
      "Distal Tip Window Sealed with Wear-Resistant Sapphire Crystal",
      "Hermetic Laser-Welded Sealing on Flush Adapter Preventing Moisture Ingress",
      "Built-in Automatic Dual Sealing Valve for Leak-Free Lithotripsy Guide Wire Exchange"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Direction of View",
      "Pixel Resolution": "520,000 Pixels Ultra-High Definition",
      "Available Sizes": "8/9.8Fr (5Fr Channel, 430mm) / 6/7.5Fr (4Fr Channel, 430mm)",
      "Working Length": "430 mm",
      "Optical Material": "High-Transmittance Columnar Crystal Hard Lens",
      "Tip Sealing": "Sapphire Crystal Lens Seal",
      "Flushing Joint": "Full Laser-Welded Hermetic Sealing",
      "Optional Accessories": "Renal Biopsy & Foreign Body Forceps (3Fr / 4Fr / 5Fr × 600mm)",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Ultra-HD Diagnostic Ureteroscopy & Laser Lithotripsy",
      "High-Resolution Ureteral Carcinoma Screening & Biopsy",
      "Precision Ureteral Calculus Fragmentation & Basket Removal",
      "Ureteral Stent Insertion and Retrieval"
    ],
    seoKeywords: "ultra HD rigid ureteroscope, 520000 pixel ureterorenoscope, USP 12 ureteroscope HD, sapphire tip ureteroscope, digital urology scope",
    seoDescription: "USP 12° Rigid Digital Uretero-renoscope with 520,000 pixels Ultra-HD resolution, 8/9.8Fr & 6/7.5Fr diameters, 430mm length, and sapphire crystal tip."
  },
  {
    id: "usp-12-dual-channel-rigid-digital-uretero-renoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "USP 12° Dual-channel Rigid Digital Uretero-renoscope",
    model: "",
    image: "/assets/images/endoscopy/rigid-optical-fiber-uretero-renoscope.png",
    rating: 5,
    reviews: 21,
    isCustomizable: true,
    shortDesc: "Dual-channel 12° rigid digital ureteroscope with 6/7.5Fr outer diameter, Channel A (4Fr) and Channel B (2.8Fr) for simultaneous laser fiber and stone basket delivery, and 160,000 pixels HD.",
    moq: "1 Unit",
    keyFeatures: [
      "12° Viewing Angle with 160,000 Pixels High-Definition Wide-Angle Digital Imaging",
      "Slim 6/7.5Fr Outer Diameter with 430mm Effective Surgical Working Length",
      "Built-in Dual Working Channels: Channel A (4Fr) & Channel B (2.8Fr) for Non-Interfering Instrument Access",
      "Enables Concurrent Laser Fiber Lithotripsy and Basket Stone Stabilization",
      "Built-in Dual-Layer Sealer Device with Automatic Valve Closure Against Water Leakage",
      "Sapphire Sealed Tip Lens and Laser-Welded Hermetic Joint Construction"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Direction of View",
      "Outer Diameter": "6 / 7.5Fr",
      "Working Channel A": "4Fr (Primary Laser Lithotripsy Channel)",
      "Working Channel B": "2.8Fr (Secondary Basket / Guide Wire Channel)",
      "Working Length": "430 mm",
      "Resolution": "160,000 Pixels High-Definition",
      "Distal Tip Window": "Sapphire Optical Lens Seal",
      "Sealing System": "Dual-Layer Sealer with Automatic Valve Closure",
      "Video Connection": "Integrated Direct Video Plug",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Simultaneous Dual-Instrument Ureteral Lithotripsy",
      "Concurrent Laser Dusting & Basket Stone Retainment",
      "Continuous Guide Wire Safety Maintenance During Lithotripsy",
      "Middle and Upper Ureteral Calculus Management"
    ],
    seoKeywords: "dual channel ureteroscope, USP 12 dual channel ureterorenoscope, simultaneous laser basket ureteroscope, digital rigid ureteroscope, urology endoscope",
    seoDescription: "USP 12° Dual-channel Rigid Digital Uretero-renoscope with 6/7.5Fr diameter, independent 4Fr and 2.8Fr channels, 160,000 pixels HD, and 430mm length."
  },
  {
    id: "rigid-fiber-uretero-renoscope-84fov",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Rigid Fiber Uretero-renoscope",
    model: "",
    image: "/assets/images/endoscopy/rigid-fiber-ureteroscope.png",
    rating: 5,
    reviews: 19,
    isCustomizable: true,
    shortDesc: "High-precision optical rigid fiber ureteroscope with 84° FOV, columnar optical ocular lens preventing distortion, medical stainless steel/titanium outer tube, and sizes from 4.5/6.5Fr to 8/9.8Fr.",
    moq: "1 Unit",
    keyFeatures: [
      "84° Wide Field of View (FOV) Delivering Vivid Image Transmission Without Spherical Distortion",
      "Available in 8/9.8Fr (5Fr Channel), 6/7.5Fr (4Fr Channel), and 4.5/6.5Fr (3.6Fr Channel) Diameters",
      "430mm Working Length with Semi-Rigid Stainless Steel / Titanium Alloy Outer Tube Construction",
      "Columnar Optical Mirror Ocular Lens with Multi-Brand Standard Eyepiece Interface Connector",
      "Distal Lens Sealed with Sapphire Window Seal for Long-Term Durability",
      "Compatible with Optional 3Fr / 4Fr / 5Fr × 600mm Renal Biopsy and Foreign Body Forceps"
    ],
    detailedSpecs: {
      "Field of View (FOV)": "84°",
      "Available Sizes": "8/9.8Fr (5Fr Channel), 6/7.5Fr (4Fr Channel), 4.5/6.5Fr (3.6Fr Channel)",
      "Working Length": "430 mm",
      "Ocular Lens Construction": "Columnar Optical Mirror (Zero Spherical Distortion)",
      "Eyepiece Interface": "Universal Multi-Brand Optical Coupling Interface",
      "Shaft Material": "Medical Stainless Steel / High-Strength Titanium Alloy",
      "Distal Window": "Sapphire Crystal Lens Seal",
      "Sealing Architecture": "Laser-Welded Joint & Dual-Layer Sealer Valve",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Optical Diagnostic Ureteroscopy & Surveillance",
      "Laser and Pneumatic Ureteral Lithotripsy",
      "Narrow Ureteral Lumen Inspection & Dilatation",
      "Ureteral Stricture Assessment and Stenting"
    ],
    seoKeywords: "rigid fiber ureteroscope, optical uretero-renoscope, 84 FOV ureteroscope, columnar lens ureteroscope, titanium ureteroscope, urology instruments",
    seoDescription: "Rigid Fiber Uretero-renoscope with 84° FOV, columnar optical lens, 4.5/6.5Fr to 8/9.8Fr diameters, 430mm length, and universal eyepiece compatibility."
  },
  {
    id: "single-use-digital-flexible-ureteroscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Single-use Digital Flexible Ureteroscope",
    model: "",
    image: "/assets/images/endoscopy/single-use-digital-flexible-ureteroscope.png",
    rating: 5,
    reviews: 42,
    isCustomizable: true,
    shortDesc: "Single-use digital flexible ureteroscope with 160,000 pixels HD, 110° FOV, 5.7Fr bullet tip, 7.5Fr insertion tube, 3.6Fr channel, ±275° dual active deflection, and sterile packaging.",
    moq: "1 Box",
    keyFeatures: [
      "160,000 Pixels High-Definition CMOS Tip Sensor with 110° Ultra-Wide Field Angle",
      "5.7Fr Atraumatic Bullet-Shaped Distal Tip & 7.5Fr Slim Insertion Tube with 3.6Fr Working Channel",
      "Four-Way Active Deflection: Upper Bend ≥ 275°, Lower Bend ≥ 275° for Full Pelvicalyceal Navigation",
      "700mm Effective Working Length Supporting Complete Renal Calyx Access",
      "Integrated Cold Light Illumination (Rear LED Architecture Preventing Tissue Thermal Burn)",
      "Individually Sterile Packaged for Single-Use (Zero Hospital Reprocessing Cost & Zero Cross-Infection)"
    ],
    detailedSpecs: {
      "Pixel Resolution": "160,000 Pixels High-Definition CMOS",
      "Field Angle": "110° Ultra-Wide",
      "Depth of Field (DOF)": "2 – 50 mm",
      "Distal Tip Outer Diameter": "5.7Fr (Atraumatic Bullet Profile)",
      "Insert Tube Outer Diameter": "7.5Fr",
      "Working Channel Inner Diameter": "3.6Fr",
      "Bending Deflection Range": "Upper Bend ≥ 275°, Lower Bend ≥ 275°",
      "Effective Working Length": "700 mm",
      "Lighting Technology": "Integrated Direct Video Plug with Rear Cold Light Source",
      "Adapter Accessories": "Independently Packaged Tee Adapter with Optical Fiber Locking Device",
      "Perfusion System Compatibility": "Universal Domestic and International Perfusion Pump Standards",
      "Packaging": "Individually Packaged Sterile Single-Use"
    },
    applications: [
      "Retrograde Intrarenal Surgery (RIRS)",
      "Upper Ureter, Renal Pelvis & Lower Calyx Laser Lithotripsy",
      "Renal Pelvis Urothelial Carcinoma Diagnostic Inspection",
      "Complex Calyceal Diverticulum Calculus Fragmentation"
    ],
    seoKeywords: "single-use digital flexible ureteroscope, disposable flexible ureteroscope, single use ureteroscope, RIRS flexible scope, 275 degree deflection ureteroscope",
    seoDescription: "Single-use Digital Flexible Ureteroscope with 160,000 pixels HD, 110° FOV, 7.5Fr tube, 3.6Fr channel, ±275° active bending, and sterile packaging."
  },
  {
    id: "reusable-digital-flexible-uretero-renoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Flexible Uretero-renoscope",
    model: "",
    image: "/assets/images/endoscopy/reusable-digital-flexible-uretero-renoscope.png",
    rating: 5,
    reviews: 30,
    isCustomizable: true,
    shortDesc: "Reusable digital flexible ureterorenoscope featuring 160,000 pixels HD, 110° FOV, 5.7Fr bullet tip, 8Fr tube, 3.6Fr channel, ±275° dual active deflection, usage counter, and leak detector.",
    moq: "1 Unit",
    keyFeatures: [
      "160,000 Pixels High-Definition Video Tip Sensor with 110° Ultra-Wide Field Angle",
      "5.7Fr Bullet-Shaped Atraumatic Tip, 8Fr Insertion Tube & 3.6Fr Working Channel",
      "Dual Active Deflection: Upper Bend ≥ 275°, Lower Bend ≥ 275° for Deep Inferior Calyx Access",
      "700mm Effective Working Length with Lightweight Ergonomic Control Handle",
      "Built-in Smart Usage Counter & Timer for Hospital Quality Assurance and Maintenance",
      "Supplied with Dedicated Medical Leak Detector Gauge for Pre/Post-Sterilization Verification"
    ],
    detailedSpecs: {
      "Pixel Resolution": "160,000 Pixels High-Definition",
      "Field Angle": "110°",
      "Depth of Field (DOF)": "2 – 50 mm",
      "Distal Tip Outer Diameter": "5.7Fr",
      "Insert Tube Outer Diameter": "8Fr",
      "Working Channel Inner Diameter": "3.6Fr",
      "Bending Angle": "Upper Bend ≥ 275°, Lower Bend ≥ 275°",
      "Effective Working Length": "700 mm",
      "Smart Tracking": "Integrated Usage Cycle Counter & Timer",
      "Testing Accessory": "Dedicated Pressure Bulb Leak Detector Included",
      "Tee Adapter": "Included with Integrated Optical Laser Fiber Locking Device",
      "Sterilization Compatibility": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Reusable Retrograde Intrarenal Surgery (RIRS)",
      "Upper Ureteral & Renal Pelvicalyceal Holmium/Thulium Laser Lithotripsy",
      "Flexible Ureteral Biopsy and Stone Retrieval Basket Extraction",
      "Lower Pole Calyceal Anatomy Navigation"
    ],
    seoKeywords: "digital flexible uretero-renoscope, reusable flexible ureteroscope, digital ureterorenoscope, RIRS flexible scope, leak detector ureteroscope",
    seoDescription: "Digital Flexible Uretero-renoscope with 160,000 pixels HD, 8Fr tube, 3.6Fr channel, ±275° bending, usage counter, and included leak detector."
  },
  {
    id: "sheath-free-rigid-digital-cystoscope-with-channel",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Sheath-free Rigid Digital Cystoscope with Channel",
    model: "",
    image: "/assets/images/endoscopy/sheath-free-rigid-digital-cystoscope-with-channel.png",
    rating: 5,
    reviews: 27,
    isCustomizable: true,
    shortDesc: "Sheath-free rigid digital cystoscope with 12° viewing angle, 100° FOV, 160,000 pixels HD, available in 13Fr (6Fr channel), 11Fr (4Fr channel), and 9Fr (3.6Fr channel), eliminating traditional outer sheaths.",
    moq: "1 Unit",
    keyFeatures: [
      "Sheath-Free Integrated Design Eliminating Traditional Outer Sheath for Atraumatic Urethral Insertion",
      "12° Viewing Angle with 100° Wide Field of View & 160,000 Pixels High-Definition Imaging",
      "Available in 13Fr (6Fr Channel), 11Fr (4Fr Channel), and 9Fr (3.6Fr Custom Channel) with 315mm Length",
      "Laser-Welded Joint Sealing with Wear-Resistant Sapphire Distal Tip Seal",
      "Dual-Layer Internal Sealer and Automatic Valve Preventing Irrigation Fluid Leakage",
      "Optional 15Fr Flushing Suction Sheath & Matching Foreign Body / Biopsy Forceps (6Fr×460mm)"
    ],
    detailedSpecs: {
      "Viewing Angle": "12° Direction of View",
      "Field of View (FOV)": "100° Wide Angle",
      "Resolution": "160,000 Pixels High-Definition",
      "Available Sizes": "13Fr (6Fr Channel), 11Fr (4Fr Channel), 9Fr (3.6Fr Custom Channel)",
      "Working Length": "315 mm",
      "Sheath Architecture": "Integrated Sheath-Free Body (Atraumatic Smooth Insertion)",
      "Distal Lens Sealing": "Sapphire Crystal Window Seal",
      "Sealing System": "Dual-Layer Sealer with Automatic Closure Valve",
      "Optional Accessories": "15Fr Flushing Suction Sheath, Biopsy Forceps & Foreign Body Forceps (6Fr×460mm)",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Atraumatic Diagnostic Cystoscopy & Bladder Inspection",
      "Double-J (DJ) Ureteral Stent Insertion and Removal",
      "Bladder Mucosal Biopsy and Calculus Grasping",
      "Foreign Body Extraction & Clot Evacuation"
    ],
    seoKeywords: "sheath-free rigid digital cystoscope, cystoscope with channel, sheath-free cystoscope, 13Fr cystoscope, 11Fr cystoscope, urology endoscopy",
    seoDescription: "Sheath-free Rigid Digital Cystoscope with Channel featuring 12° angle, 100° FOV, 160,000 pixels HD, 9Fr/11Fr/13Fr options, and optional 15Fr suction sheath."
  },
  {
    id: "single-use-digital-flexible-cystoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Single-use Digital Flexible Cystoscope",
    model: "",
    image: "/assets/images/endoscopy/single-use-digital-flexible-cystoscope.png",
    rating: 5,
    reviews: 36,
    isCustomizable: true,
    shortDesc: "Single-use digital flexible cystoscope with 160,000 pixels HD, 110° FOV, 6.3Fr tip, 13.5Fr tube, large ≥6.3Fr channel, upper bend ≥220°, lower bend ≥130°, and 380mm length in sterile packaging.",
    moq: "1 Box",
    keyFeatures: [
      "160,000 Pixels High-Definition CMOS Video Tip Sensor with 110° Ultra-Wide Field Angle",
      "6.3Fr Atraumatic Tip, 13.5Fr Insertion Tube & Large ≥6.3Fr Working Instrument Channel",
      "Active Deflection Range: Upper Bend ≥ 220°, Lower Bend ≥ 130° for Complete Bladder Dome & Neck Inspection",
      "380mm Effective Working Length with Ergonomic Lightweight Control Handle",
      "Integrated Video Plug & Rear Cold Light Illumination Preventing Tissue Thermal Damage",
      "Individually Sterile Packaged for Single-Use (Eliminates Sterilization Downtime and Contamination)"
    ],
    detailedSpecs: {
      "Pixel Resolution": "160,000 Pixels High-Definition",
      "Field Angle": "110°",
      "Depth of Field (DOF)": "2 – 50 mm",
      "Distal Tip Outer Diameter": "6.3Fr",
      "Insert Tube Outer Diameter": "13.5Fr",
      "Working Channel Inner Diameter": "≥ 6.3Fr (Large Flow & Instrument Channel)",
      "Bending Angle": "Upper Bend ≥ 220°, Lower Bend ≥ 130°",
      "Effective Working Length": "380 mm",
      "Lighting & Connection": "Integrated Direct Video Plug with Rear Cold Light Source",
      "Adapter Accessories": "Independently Packaged Tee Adapter with Optical Fiber Locking Device",
      "Packaging": "Individually Packaged Sterile Single-Use"
    },
    applications: [
      "Outpatient & Bedside Single-Use Flexible Cystoscopy",
      "Hematuria Diagnostic Examination & Bladder Tumor Surveillance",
      "DJ Ureteral Stent Extraction Under Local Anesthesia",
      "Foreign Body Removal and Guided Catheterization"
    ],
    seoKeywords: "single-use digital flexible cystoscope, disposable flexible cystoscope, single use cystoscope, outpatient flexible cystoscopy, sterile cystoscope",
    seoDescription: "Single-use Digital Flexible Cystoscope with 160,000 pixels HD, 110° FOV, 13.5Fr tube, ≥6.3Fr channel, active deflection, and sterile packaging."
  },
  {
    id: "reusable-digital-flexible-cystoscope",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Flexible Cystoscope",
    model: "",
    image: "/assets/images/endoscopy/reusable-digital-flexible-cystoscope.png",
    rating: 5,
    reviews: 25,
    isCustomizable: true,
    shortDesc: "Reusable digital flexible cystoscope featuring 160,000 pixels HD, 110° FOV, 6.3Fr tip, 13.5Fr tube, ≥6.3Fr channel, ±275° dual active deflection, usage counter, and included leak detector.",
    moq: "1 Unit",
    keyFeatures: [
      "160,000 Pixels High-Definition CMOS Video Sensor with 110° Wide Angle View",
      "6.3Fr Distal Tip, 13.5Fr Insertion Tube & Large ≥6.3Fr Working Instrument Channel",
      "Dual Active Deflection: Upper Bend ≥ 275°, Lower Bend ≥ 275° for 360° Bladder Cavity Surveillance",
      "380mm Working Length with Ergonomic Handle and Smooth Deflection Lever Control",
      "Integrated Usage Counter & Timer for Hospital Equipment Traceability and Maintenance Tracking",
      "Supplied with Dedicated Medical Pressure Leak Detector for Pre/Post-Sterilization Testing"
    ],
    detailedSpecs: {
      "Pixel Resolution": "160,000 Pixels High-Definition",
      "Field Angle": "110°",
      "Depth of Field (DOF)": "2 – 50 mm",
      "Distal Tip Outer Diameter": "6.3Fr",
      "Insert Tube Outer Diameter": "13.5Fr",
      "Working Channel Inner Diameter": "≥ 6.3Fr",
      "Bending Angle": "Upper Bend ≥ 275°, Lower Bend ≥ 275°",
      "Effective Working Length": "380 mm",
      "Quality Assurance": "Integrated Usage Cycle Counter & Timer",
      "Leak Testing": "Dedicated Medical Leak Detector Included",
      "Tee Adapter": "Included with Optical Fiber Locking Device",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Hospital Operating Room & Diagnostic Cystoscopy Suite",
      "Bladder Mucosa Pathology Biopsy & Lesion Resection",
      "Laser Lithotripsy of Bladder Calculi",
      "Ureteral Stent Insertion, Verification & Retrieval"
    ],
    seoKeywords: "digital flexible cystoscope, reusable flexible cystoscope, 275 deflection cystoscope, leak detector cystoscope, urology diagnostic scope",
    seoDescription: "Digital Flexible Cystoscope with 160,000 pixels HD, 13.5Fr tube, ≥6.3Fr channel, ±275° deflection, usage counter, and included leak detector."
  },
  {
    id: "ultra-thin-digital-laserscope-for-bph",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Ultra-thin Digital Laserscope",
    model: "",
    image: "/assets/images/endoscopy/digital-hysteroscope-cold-knife.png",
    rating: 5,
    reviews: 23,
    isCustomizable: true,
    shortDesc: "Specialized ultra-thin digital laserscope system for benign prostatic hyperplasia (BPH) laser enucleation, including Φ3.0×305mm rigid cystoscope, Φ1.0mm handpiece channel, 22Fr outer sheath, and 18Fr inner sheath.",
    moq: "1 Unit",
    keyFeatures: [
      "160,000 Pixels High-Definition Wide-Angle Digital Scope for Prostate Laser Resection",
      "Complete Configuration: Rigid Digital Cystoscope Φ3.0×305mm, Handpiece (Working Channel Φ1.0mm)",
      "22Fr Outer Sheath & 18Fr Inner Sheath with Obturator for Continuous Low-Pressure Irrigation",
      "Engineered for Laser Enucleation of Benign Prostatic Hyperplasia (BPH) Tissue",
      "Reduces Complications Compared to Conventional Electrosurgical Resection (TURP)",
      "Continuous Circulating Flow Ensures Crystal-Clear Surgical Vision with Minimal Blood Loss"
    ],
    detailedSpecs: {
      "Optical Component": "Rigid Digital Cystoscope Φ3.0 × 305mm (160,000 Pixels HD)",
      "Handpiece Channel": "Working Channel Φ1.0mm for Laser Fiber Delivery",
      "Outer Sheath": "22Fr Continuous Flow Outer Sheath",
      "Inner Sheath & Obturator": "18Fr Inner Sheath with Matching Obturator",
      "Clinical Procedure": "Laser Enucleation / Vaporization of Benign Prostatic Hyperplasia (HoLEP / ThuLEP)",
      "Surgical Benefits": "Circulating Continuous Irrigation, Minimal Bleeding, Shorter Hospital Stay",
      "Video Compatibility": "Standard Digital Endoscope Image Processor Workstation"
    },
    applications: [
      "Holmium / Thulium Laser Enucleation of the Prostate (HoLEP / ThuLEP)",
      "Prostatic Hyperplasia Laser Vaporization & Tissue Resection",
      "Bladder Neck Sclerosis Laser Incision",
      "Urethral Stricture Internal Laser Urethrotomy"
    ],
    seoKeywords: "ultra-thin digital laserscope, BPH laserscope, HoLEP laserscope, prostate laser enucleation scope, 22Fr outer sheath laserscope, urology surgical scope",
    seoDescription: "Ultra-thin Digital Laserscope with Φ3.0×305mm scope, 22Fr outer sheath, 18Fr inner sheath, and Φ1.0mm handpiece channel for BPH laser enucleation."
  },
  {
    id: "ultra-mini-digital-morcescope-with-22fr-outer-sheath",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Ultra-mini Digital Morcescope (with 22Fr Outer Sheath)",
    model: "",
    image: "/assets/images/endoscopy/digital-hysteroscope-cold-knife.png",
    rating: 5,
    reviews: 18,
    isCustomizable: true,
    shortDesc: "Ultra-miniature digital morcescope with 12° direction of view, 22Fr outer sheath, 200mm working length, and crescent-shaped endoscope tube accommodating 4.8mm high-speed tissue morcellator blades.",
    moq: "1 Unit",
    keyFeatures: [
      "12° Direction of View (DOV) with High-Definition Wide-Angle Digital Video Imaging",
      "22Fr Slim Outer Sheath Diameter with 200mm Effective Surgical Working Length",
      "Crescent-Shaped Endoscope Tube Geometry Maximizing Working Lumen Area",
      "Outer Sheath Easily Accommodates Standard 4.8mm High-Speed Tissue Morcellation Blades",
      "Integrated Lightweight Design Combining Cold Light Illumination and Digital Video Transmission",
      "Compatible with High-Definition Digital Endoscope Image Processors"
    ],
    detailedSpecs: {
      "Direction of View (DOV)": "12°",
      "Outer Sheath Diameter": "22Fr",
      "Working Length": "200 mm",
      "Shaft Profile": "Crescent-Shaped Endoscope Tube Cross-Section",
      "Blade Pass-Through": "Accommodates 4.8 mm Rotating & Reciprocating Morcellator Blades",
      "Optics & Illumination": "Integrated Cold Light Source and Video Signal Interface",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Endoscopic Tissue Morcellation Following Prostatic Enucleation",
      "Endoscopic Intracavitary Soft Tissue Debulking & Extraction",
      "Urological & Gynecological Minimally Invasive Tissue Removal",
      "Continuous Suction Tissue Specimen Collection"
    ],
    seoKeywords: "ultra-mini digital morcescope, 22Fr morcescope, tissue morcellator scope, morcescope with crescent tube, 4.8mm blade morcescope, urology morcellation",
    seoDescription: "Ultra-mini Digital Morcescope with 12° DOV, 22Fr outer sheath, 200mm length, and crescent tube accommodating 4.8mm morcellator blades."
  },
  {
    id: "rigid-digital-hysteroscope-fetoscope-ttts",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Rigid Digital Hysteroscope (Fetoscope)",
    model: "",
    image: "/assets/images/endoscopy/rigid-digital-fetoscope-ttts.png",
    rating: 5,
    reviews: 29,
    isCustomizable: true,
    shortDesc: "Specialized 2.0mm ultra-fine rigid digital fetoscope with 185mm length, 3Fr channel, 2.7Fr×350mm foreign body forceps, and 6Fr/6.6Fr guide needles for Twin-to-Twin Transfusion Syndrome (TTTS) laser photocoagulation.",
    moq: "1 Unit",
    keyFeatures: [
      "Ultra-Fine 2.0mm Outer Diameter Rigid Shaft with 185mm Working Length & 3Fr Working Channel",
      "Engineered for Twin-to-Twin Transfusion Syndrome (TTTS) Fetoscopic Laser Coagulation",
      "Significantly Reduces TTTS Fetal Mortality Rate (70%–100% Without Treatment) Promoting Healthy Development",
      "Equipped with Supporting Surgical Instruments: 2.7Fr×350mm Foreign Body Forceps, 6Fr & 6.6Fr Guide Needles",
      "Applicable for Routine Fetal Endoscopy Examinations & Early/Mid-Pregnancy Intrauterine Fetal Interventions",
      "Integrated Digital Video Output Compatible with High-Definition Endoscopic Workstations"
    ],
    detailedSpecs: {
      "Outer Diameter": "2.0 mm Ultra-Fine Rigid Shaft",
      "Working Length": "185 mm",
      "Working Channel": "3Fr",
      "Supporting Instruments": "2.7Fr × 350mm Foreign Body Forceps, 6Fr Guide Needle, 6.6Fr Guide Needle",
      "Clinical Indication": "Twin-to-Twin Transfusion Syndrome (TTTS) Laser Coagulation of Anastomotic Vessels",
      "Pregnancy Stages": "Early and Mid-Stage Pregnancy Intrauterine Interventions",
      "Video Connection": "Integrated Direct Video Plug",
      "Sterilization": "Low-Temperature Hydrogen Peroxide Plasma / Ethylene Oxide"
    },
    applications: [
      "Fetoscopic Laser Photocoagulation of Placental Anastomoses in TTTS",
      "Intrauterine Fetal Diagnostic Endoscopy & Anomaly Assessment",
      "Fetal Endoscopic Tracheal Occlusion (FETO)",
      "Amniotic Band Resection & Prenatal Therapeutic Interventions"
    ],
    seoKeywords: "rigid digital fetoscope, TTTS fetoscope, twin-to-twin transfusion syndrome fetoscope, 2mm fetoscope, fetal endoscopy, obstetric endoscopic surgery",
    seoDescription: "Rigid Digital Hysteroscope (Fetoscope) with 2.0mm diameter, 185mm length, 3Fr channel, and matching guide needles for TTTS intrauterine laser surgery."
  },
  {
    id: "endoscopic-tissue-morcellator-system",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Morcelator",
    model: "",
    image: "/assets/images/endoscopy/Morcelator.png",
    rating: 5,
    reviews: 20,
    isCustomizable: true,
    shortDesc: "High-power medical endoscopic tissue morcellator with 300 to 6000 rpm forward/reverse speed, -80 kPa suction pressure, full touchscreen control, and 4.8mm reusable/disposable cutting blades.",
    moq: "1 Unit",
    keyFeatures: [
      "Wide Speed Adjustment Range: 300 rpm to 6,000 rpm Continuous (Forward and Reverse Rotation)",
      "High-Power Suction Negative Pressure Reaching up to -80 kPa for Rapid Tissue Evacuation",
      "Full Color Touchscreen Control Interface with Intuitive Real-Time Parameter Display & Foot Switch",
      "Compatible with Reusable and Disposable 4.8mm High-Precision Surgical Cutting Blades",
      "Engineered for Rapid Intracavitary Tissue Debulking in Urology and Gynecology Surgeries",
      "Robust Medical Grade Casing with Built-In Pressure Gauge and Safety Pinch Valve"
    ],
    detailedSpecs: {
      "Speed Range": "300 rpm to 6,000 rpm (Forward and Reverse Rotation)",
      "Suction Pressure": "Negative Pressure up to -80 kPa",
      "Control System": "Full Color Touchscreen Display with Auxiliary Button & Foot Switch Controls",
      "Cutting Blades": "4.8 mm Reusable & Disposable Surgical Cutting Blades",
      "Clinical Applications": "Urological Post-Enucleation Morcellation & Gynecological Intrauterine Myoma Morcellation",
      "Power Supply": "AC 100-240V, 50/60Hz Medical Grade Isolated Power"
    },
    applications: [
      "Prostatic Tissue Morcellation After Holmium/Thulium Laser Enucleation (HoLEP)",
      "Gynecological Hysteroscopic Intrauterine Myomectomy & Polypectomy",
      "Soft Tissue Debulking in Minimally Invasive Cavitary Procedures",
      "Rapid Specimen Extraction and Histological Recovery"
    ],
    seoKeywords: "endoscopic morcellator, medical tissue morcellator, HoLEP morcellator, uterine morcellator system, 6000 rpm morcellator, urology surgical equipment",
    seoDescription: "Morcelator with 300 to 6000 rpm speed, -80 kPa negative pressure suction, color touchscreen, and 4.8mm cutting blades for urology and gynecology."
  },
  {
    id: "digital-endoscope-image-processor-1080p",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Endoscope Image Processor",
    model: "",
    image: "/assets/images/endoscopy/digital-endoscope-image-processor-workstation.png",
    rating: 5,
    reviews: 33,
    isCustomizable: true,
    shortDesc: "Full HD 1080P digital endoscope image processor with built-in 5-level LED cold light source, AWC automatic white balance, HDMI/DVI outputs, optical zoom, and electrosurgical anti-interference circuitry.",
    moq: "1 Unit",
    keyFeatures: [
      "High-Definition 1080P Video Output Engine Delivering Crisp, Color-Accurate Endoscopic Visuals",
      "Built-in Medical LED Cold Light Source System with 5-Level Digital Brightness Adjustment",
      "Electronic Zoom Function (Levels 0, 1, 2) Allowing Dynamic Field Magnification",
      "Customizable Mask Display Format (Square or Circular) to Suit Surgeon Operating Habits",
      "AWC One-Touch Automatic / Manual White Balance, Image Freeze, Capture & Video Recording",
      "Advanced High-Frequency Anti-Interference Circuitry Eliminating Electrosurgical Moire Patterns"
    ],
    detailedSpecs: {
      "Video Resolution": "High-Definition 1080P Digital Video Engine",
      "White Balance": "Automatic (AWC) / Manual White Balance",
      "Output Interfaces": "HDMI × 1, DVI × 1",
      "Operating Noise": "≤ 55 dB Under Working Conditions",
      "Integrated Illumination": "Built-In LED Cold Light Source (5-Level Brightness Control)",
      "Zoom Levels": "Level 0 (Normal), Level 1, Level 2 Electronic Magnification",
      "Display Shape": "Selectable Square or Circular Endoscopic Mask",
      "Anti-Interference": "Dedicated High-Frequency Electrosurgical Signal Suppression",
      "Endoscope Compatibility": "Universal for Single-Use & Reusable Digital Scopes (Nephroscope, Ureteroscope, Cystoscope, Hysteroscope)",
      "Optional Add-ons": "24-Inch Medical HD Display Monitor & Dedicated Mobile Endoscopy Cart"
    },
    applications: [
      "Operating Room Digital Endoscopy Video Processing",
      "Urology, Gynecology & General Surgical Endoscopy Suites",
      "Single-Use & Reusable Digital Endoscope Central Processing",
      "HD Video Capture, Surgical Archiving & Teleconsultation"
    ],
    seoKeywords: "digital endoscope image processor, 1080P endoscopy processor, endoscope camera unit, LED cold light processor, medical video processor, hospital endoscopy tower",
    seoDescription: "Digital Endoscope Image Processor with 1080P Full HD output, built-in 5-level LED cold light source, AWC white balance, HDMI/DVI, and anti-interference."
  },
  {
    id: "digital-endoscope-image-processor-portable-monitor",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Endoscope Image Processor",
    model: "",
    image: "/assets/images/endoscopy/digital-endoscope-image-processor-workstation.png",
    rating: 5,
    reviews: 21,
    isCustomizable: true,
    shortDesc: "Portable all-in-one digital endoscope image processor featuring an integrated industrial-grade medical monitor display, 1080P output, built-in LED cold light source, and compact mobile design.",
    moq: "1 Unit",
    keyFeatures: [
      "Integrated Industrial-Grade Medical Monitor Display for All-in-One Portable Deployment",
      "High-Definition 1080P Output Engine with Crisp Image Contrast and Color Reproduction",
      "Built-in Medical LED Cold Light Source with 5-Level Digital Brightness Regulation",
      "AWC One-Touch Automatic / Manual White Balance, Image Freeze, and Photo/Video Recording",
      "Low Operating Noise (≤ 55 dB) Suitable for Outpatient Clinics and Bedside Endoscopy",
      "Equipped with External HDMI & DVI Output Interfaces for Dual-Screen Operating Room Display"
    ],
    detailedSpecs: {
      "Video Resolution": "High-Definition 1080P Video Engine",
      "Integrated Display": "Built-in Foldable Industrial Performance Medical Display Monitor",
      "White Balance": "Automatic (AWC) / Manual",
      "Output Interfaces": "HDMI × 1, DVI × 1",
      "Operating Noise": "≤ 55 dB Under Clinical Working Load",
      "Built-In Light Source": "5-Level Adjustable LED Cold Light Source",
      "Form Factor": "Compact All-In-One Mobile Tabletop Workstation",
      "Endoscope Compatibility": "Single-Use & Reusable Digital Endoscopes Across All Clinical Disciplines"
    },
    applications: [
      "Outpatient Clinic Bedside Diagnostic Endoscopy",
      "Emergency Room & Intensive Care Unit (ICU) Mobile Endoscopy",
      "Day-Surgery Endoscopic Interventions",
      "Ambulatory Urology and Gynecology Consultations"
    ],
    seoKeywords: "portable digital endoscope processor, endoscope image processor with monitor, all in one endoscopy system, mobile endoscopy processor, 1080P portable endoscope",
    seoDescription: "Digital Endoscope Image Processor with integrated industrial medical display, 1080P HD output, built-in LED cold light, and HDMI/DVI ports."
  },
  {
    id: "4k-uhd-medical-endoscopic-camera-system",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "4K UHD Medical Endoscopic Camera System",
    model: "",
    image: "/assets/images/endoscopy/4k-ultra-hd-medical-endoscopic-camera-system.png",
    rating: 5,
    reviews: 39,
    isCustomizable: true,
    shortDesc: "Ultra-high definition 4K medical endoscopic camera system with 3840×2160 resolution, ≥2000 TV lines, C-mount camera head, HDMI/DVI/SDI outputs, optical extinction, and anti-moiré filter for fiber scopes.",
    moq: "1 Unit",
    keyFeatures: [
      "Imported 4K Medical Sensor Chip Delivering 3840 × 2160 UHD (HDMI) and 1920 × 1080 (DVI) Video Outputs",
      "Horizontal Resolution ≥ 2,000 TV Lines with Unmatched Microvascular and Anatomical Layer Detail",
      "Optical Extinction Technology: Eliminates Light Reflection When Entering Fluid-Filled Cavities",
      "Anti-Moiré Engineering: Dedicated Filter for Fiber Endoscopes Eliminating Honeycomb Grid Artifacts",
      "High-Frequency Anti-Interference Circuitry Suppressing Electrosurgical Generator Noise",
      "Waterproof Camera Head with Customizable Function Buttons, AWC One-Key White Balance & Freeze"
    ],
    detailedSpecs: {
      "Pixel & Resolution": "4K Sensor, 3840 × 2160 (HDMI Output) / 1920 × 1080 (DVI Output)",
      "Horizontal Resolution": "≥ 2,000 TV Lines",
      "Optical Mount": "Standard C-Mount Optical Coupler",
      "Camera Buttons": "Fully Programmable Camera Head Control Buttons",
      "Output Interfaces": "HDMI, DVI, 3G-SDI Broadcast Quality Ports",
      "Operating Noise": "≤ 55 dB Under Clinical Working Conditions",
      "Extinction Function": "Anti-Reflection Cavity Light Extinction for Optical & Fiber Endoscopes",
      "Anti-Moiré Filter": "Hardware Anti-Moiré Processor for Fiber Endoscopes",
      "Multi-Specialty Support": "Thoracoscopy, Laparoscopy, Hysteroscopy, Urology, ENT, Arthroscopy"
    },
    applications: [
      "4K Ultra-HD Laparoscopic & Thoracoscopic Surgery",
      "4K Optical & Fiber Hysteroscopy and Urological Endoscopy",
      "ENT & Arthroscopic Orthopedic Micro-Surgery",
      "Multi-Disciplinary High-End Hospital Operating Theatres"
    ],
    seoKeywords: "4K UHD medical endoscopic camera system, 4K endoscopy camera, 3840x2160 surgical camera, anti-moire fiber camera, C-mount medical camera, hospital 4K tower",
    seoDescription: "4K UHD Medical Endoscopic Camera System with 3840×2160 resolution, ≥2000 TV lines, C-mount head, HDMI/DVI/SDI, optical extinction, and anti-moiré filter."
  },
  {
    id: "hd-led-medical-cold-light-source-100w",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "HD LED Medical Cold Light Source",
    model: "",
    image: "/assets/images/endoscopy/medical-grade-high-power-led-cold-light-source.png",
    rating: 5,
    reviews: 32,
    isCustomizable: true,
    shortDesc: "High-power 100W medical LED cold light source with 3000K-7000K daylight spectrum, CRI ≥90, >200,000 lux illumination, >40,000 hours lamp lifespan, Wolf/Storz fiber compatibility, and 1-100 brightness memory.",
    moq: "1 Unit",
    keyFeatures: [
      "100W High-Power Medical-Grade LED Module with Superior Shock Resistance & >40,000 Hours Lifespan",
      "Pure Luminous Color (3000K–7000K) with Zero Stray Light and Color Rendering Index (CRI) ≥ 90",
      "High Luminous Output Exceeding 200,000 Lux Delivering Strong Tissue Penetration and 3D Cavity Depth",
      "Low Thermal Radiation Architecture Minimizing Temperature at Illumination Point to Avoid Tissue Burns",
      "Universal International Light Guide Interface Compatible with WOLF, STORZ, and Major Optical Cables",
      "1–100 Digital Step Illuminance Control with Automatic Brightness Memory & Accumulated Hour Timer"
    ],
    detailedSpecs: {
      "Rated Output Power": "100W Medical Grade LED",
      "Color Temperature": "3,000K – 7,000K Daylight Spectrum",
      "Color Rendering Index (CRI)": "≥ 90 for Realistic Tissue Discrimination",
      "Luminous Output": "> 200,000 Lux Maximum Illumination",
      "Lamp Working Life": "> 40,000 Hours Continuous Lifespan",
      "Operating Noise": "≤ 60 dB Under Full Output Working Conditions",
      "Optical Cable Interface": "Universal International Standard (Compatible with WOLF / STORZ)",
      "Illuminance Regulation": "1 – 100 Digital Steps with Memory Function & Bulb Lifetime Timer"
    },
    applications: [
      "High-Intensity Illumination for Rigid & Flexible Endoscopic Procedures",
      "Laparoscopy, Thoracoscopy, Hysteroscopy & Arthroscopy",
      "Urological Resection & ENT Surgical Illumination",
      "Universal Light Source for Multi-Brand Fiber-Optic Cables"
    ],
    seoKeywords: "HD LED medical cold light source, 100W LED endoscope light source, 200000 lux cold light source, Storz Wolf compatible light source, surgical LED light",
    seoDescription: "HD LED Medical Cold Light Source with 100W power, >200,000 lux, CRI ≥90, >40,000h lifespan, Storz/Wolf compatibility, and 1-100 digital memory."
  },
  {
    id: "endoscope-intelligent-irrigation-suction-pump",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Endoscope Irrigator",
    model: "",
    image: "/assets/images/endoscopy/endoscope-intelligent-perfusion-suction-irrigator.png",
    rating: 5,
    reviews: 26,
    isCustomizable: true,
    shortDesc: "Dual-pump intelligent endoscope irrigator and suction system with 400VA power, 50-700 mmHg irrigation pressure, 50-400 mmHg suction, 5-inch touchscreen, and auxiliary collecting bottle and tubing sets.",
    moq: "1 Unit",
    keyFeatures: [
      "400VA Dual-Function System for Controlled Fluid Infusion and High-Volume Negative Pressure Suction",
      "Continuously Adjustable Irrigation Pressure (50–700 mmHg / 6.7–93.3 kPa) & Flow Rate (0.1–1.5 L/min)",
      "Continuously Adjustable Suction Pressure (50–400 mmHg / 6.7–53.3 kPa) & Suction Flow (≥ 1.5 L/min)",
      "5-Inch Color Touchscreen Interface Displaying Real-Time Pressures and Operating Modes",
      "Integrated Memory Function Automatically Restoring Last Operating Parameters on Power-Up",
      "Complete Auxiliary Package: Medical Collecting Bottle, Perfusion Infusion Tube & Suction Tubing Set"
    ],
    detailedSpecs: {
      "Rated Output Power": "400 VA",
      "Irrigation Pressure Range": "50 – 700 mmHg (6.7 – 93.3 kPa)",
      "Suction Pressure Range": "50 – 400 mmHg (6.7 – 53.3 kPa)",
      "Irrigation Flow Rate Range": "0.1 – 1.5 L/min Continuously Adjustable",
      "Suction Flow Rate": "≥ 1.5 L/min",
      "Display & Control": "5-Inch Color Touchscreen with Intuitive Real-Time Monitoring",
      "Memory Function": "Automatic Power-On Parameter Recall",
      "Auxiliary Consumables": "Collecting Bottle, Infusion Tube Set, Suction Tube Set"
    },
    applications: [
      "Urological Endoscopic Cavity Irrigation & Stone Fragment Suction",
      "Gynecological Hysteroscopy Fluid Distension and Evacuation",
      "Percutaneous Nephrolithotomy (PCNL) Continuous Fluid Management",
      "Arthroscopic & Laparoscopic Cavity Washing"
    ],
    seoKeywords: "endoscope irrigator, endoscopic perfusion suction pump, urology irrigation pump, hysteroscopy fluid management, 5-inch touch irrigator, hospital suction unit",
    seoDescription: "Endoscope Irrigator with dual perfusion and suction pumps, 50-700 mmHg irrigation, 50-400 mmHg suction, 5-inch touchscreen, and collecting bottle."
  },
  {
    id: "endoscope-perfusion-irrigator-single-pump",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Endoscope Irrigator",
    model: "",
    image: "/assets/images/endoscopy/endoscope-irrigator-perfusion-pump.png",
    rating: 5,
    reviews: 17,
    isCustomizable: true,
    shortDesc: "Single-pump precision endoscope perfusion irrigator with 400VA power, 50-700 mmHg pressure range, 0.1-1.5 L/min flow rate, 5-inch touchscreen display, memory recall, and perfusion tubing set.",
    moq: "1 Unit",
    keyFeatures: [
      "400VA Dedicated Perfusion Pump for Stable, Continuous Fluid Infusion During Endoscopic Surgery",
      "Continuously Adjustable Pressure Setting Range: 50–700 mmHg (6.7–93.3 kPa)",
      "Perfusion Flow Rate Setting Range: 0.1–1.5 L/min for Stable Cavity Distension",
      "Controlled via a 5-Inch Touchscreen for Intuitive Real-Time Parameter Monitoring",
      "Built-in Memory Capability Automatically Recalling Last Configured Pressure Setting on Startup",
      "Supplied with Dedicated Medical Grade Perfusion Tube Set"
    ],
    detailedSpecs: {
      "Rated Output Power": "400 VA",
      "Pressure Setting Range": "50 – 700 mmHg (6.7 – 93.3 kPa Continuously Adjustable)",
      "Perfusion Flow Setting Range": "0.1 – 1.5 L/min",
      "User Interface": "5-Inch Interactive Touchscreen",
      "Memory System": "Automatic Startup Parameter Memory Recall",
      "Auxiliary Product": "Medical Grade Dedicated Perfusion Tube Set",
      "Clinical Applications": "Fluid Infusion for Urological and Gynecological Cavity Distension"
    },
    applications: [
      "Diagnostic and Operative Hysteroscopy Cavity Distension",
      "Ureteroscopy & Cystoscopy Continuous Fluid Perfusion",
      "Controlled Pressure Bladder and Ureteral Irrigation",
      "Outpatient Endoscopic Cavity Flushing"
    ],
    seoKeywords: "endoscope perfusion irrigator, single pump endoscope irrigator, hysteroscopy perfusion pump, urology perfusion unit, medical fluid pump",
    seoDescription: "Endoscope Irrigator with 400VA perfusion pump, 50-700 mmHg pressure, 0.1-1.5 L/min flow, 5-inch touchscreen, and dedicated perfusion tube set."
  },
  {
    id: "digital-visual-sheathing-negative-pressure-lithotriptoscope-system",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Visual Sheathing and Negative Pressure Lithotriptoscope System",
    model: "",
    image: "/assets/images/endoscopy/digital-visual-sheathing-negative-pressure-lithotriptoscope-system.png",
    rating: 5,
    reviews: 37,
    isCustomizable: true,
    shortDesc: "Complete lithotripsy workstation tower integrating Digital Visual Sheathing Endoscope, Digital Negative Pressure Lithotripscope, Negative Pressure Collector, Irrigator, and universal bendable/reusable sheaths.",
    moq: "1 Unit",
    keyFeatures: [
      "Comprehensive Workstation Integrating Visual Sheathing Scope, Negative Pressure Scope, Collector & Irrigator",
      "Wide-Angle Field of Vision with 160,000 Pixels High-Definition CMOS Video Imaging",
      "Eliminates Separate Fragile Optical Cables and Camera Heads for Streamlined Operating Room Setup",
      "Sheath Placed Concurrently with Endoscope via Natural Cavities to Minimize Urethral Trauma",
      "Combined Negative Pressure Suction Evacuates Laser Stone Dust, Blood and Pus in Real Time",
      "Supports Reusable 11/12Fr Suction Sheath & Single-Use Universal Bendable Sheaths, plus 4Fr×700mm Forceps"
    ],
    detailedSpecs: {
      "System Workstation Tower": "Digital Visual Sheathing Endoscope, Digital Negative Pressure Lithotripscope, Negative Pressure Collector, Endoscope Irrigator",
      "Optical Resolution": "160,000 Pixels CMOS High-Definition",
      "Compatible Sheaths": "Reusable Irrigation & Suction Sheath (11/12Fr) & Single-Use Universal Bendable Negative Pressure Sheath",
      "Aspiration Control": "Precision Negative Pressure Collector Regulating Suction Force",
      "Combined Modalities": "Joint Lithotripsy with Flexible Digital Ureteroscopes",
      "Optional Forceps": "Tooth Grasping Forceps (4Fr×700mm), Flat Grasping Forceps (4Fr×700mm)",
      "Clinical Advantages": "Rapid Stone Clearance Especially for Upper Ureteral and Renal Calculi"
    },
    applications: [
      "Negative Pressure Lithotripsy for Upper Ureteral & Renal Calculi",
      "Continuous Stone Dust and Fragment Evacuation During Laser Fragmentation",
      "Joint Dual-Scope Retrograde & Antegrade Lithotripsy Procedures",
      "Low-Pressure High-Clarity Endoscopic Stone Clearance Workstations"
    ],
    seoKeywords: "digital visual sheathing lithotriptoscope system, negative pressure lithotripsy tower, visual calculus removing sheath system, urology lithotripsy workstation",
    seoDescription: "Digital Visual Sheathing and Negative Pressure Lithotriptoscope System integrating visual scope, negative pressure scope, collector, and universal bendable sheath."
  },
  {
    id: "digital-hysteroscope-surgery-system-complete-tower",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Digital Hysteroscope Surgery System",
    model: "",
    image: "/assets/images/endoscopy/digital-hysteroscope-surgery-system.png",
    rating: 5,
    reviews: 31,
    isCustomizable: true,
    shortDesc: "Complete gynecological hysteroscopy surgery tower integrating Integrated Digital Hysteroscope (12/15Fr), Mini Hysteroscope (9/12Fr), Cold Knife Hysteroscope (18Fr sheath, 3.6mm channel), Irrigator, and Morcellator.",
    moq: "1 Unit",
    keyFeatures: [
      "Complete Hysteroscopy Surgical Tower for Diagnostic, Operative, Cold Knife & Morcellation Procedures",
      "Integrated Digital Hysteroscope: 12/15Fr Outer Diameter, 220mm Length, ≥6Fr Channel, 12° DOV, 110° FOV",
      "Integrated Mini Hysteroscope: 9/12Fr Outer Diameter, 220mm Length, ≥5Fr Channel, 12° DOV, 110° FOV",
      "Digital Cold Knife Hysteroscope: 210mm Length, 3.6mm Channel, 18Fr Sheath (Easy Entry Without Dilation)",
      "High-Performance Endoscopic Morcellation Engine: 300–5000 rpm Continuous & 300–3000 rpm Reciprocating",
      "Integrated Perfusion System with Endoscope Irrigator (400VA, 50–700 mmHg Pressure)"
    ],
    detailedSpecs: {
      "Integrated Standard Hysteroscope": "12/15Fr Outer Diameter, 220mm Working Length, ≥6Fr Channel, 12° DOV, 110° FOV",
      "Integrated Mini Hysteroscope": "9/12Fr Outer Diameter, 220mm Working Length, ≥5Fr Channel, 12° DOV, 110° FOV",
      "Cold Knife Digital Hysteroscope": "210mm Working Length, 3.6mm Channel, 12° DOV, 110° FOV, Crescent Tube (18Fr Sheath)",
      "Morcellation Engine": "300 to 5,000 rpm (Forward/Reverse), 300 to 3,000 rpm (Reciprocating), Touchscreen Control",
      "Perfusion System": "Endoscope Irrigator (400VA, 50-700 mmHg, 0.1-1.5 L/min Flow)",
      "Clinical Advantages": "No Dilation Required, Reduced Patient Discomfort, Complete See-and-Treat Suite"
    },
    applications: [
      "Diagnostic and Operative Outpatient & Inpatient Hysteroscopy",
      "Intrauterine Myomectomy, Polypectomy & Septum Resection",
      "Cold Knife Intrauterine Adhesion (IUA) Adhesiolysis",
      "Endometrial Biopsy and Targeted Lesion Removal"
    ],
    seoKeywords: "digital hysteroscope surgery system, hysteroscopy surgical tower, cold knife hysteroscope, integrated digital hysteroscope, intrauterine morcellation system",
    seoDescription: "Digital Hysteroscope Surgery System complete tower with integrated standard & mini hysteroscopes, cold knife scope, morcellator, and perfusion irrigator."
  },
  {
    id: "single-use-flexible-universal-bendable-negative-pressure-sheath",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Flexible Universal Bendable Negative Pressure Calculus-Removing Sheath",
    model: "",
    image: "/assets/images/endoscopy/flexible-bendable-negative-pressure-sheath.png",
    rating: 5,
    reviews: 44,
    isCustomizable: true,
    shortDesc: "Universal bendable single-use ureteral guide sheath with negative pressure suction for flexible ureteroscopy, available in 11-13Fr and 12-14Fr (35cm/45cm), featuring rotating pressure control ring.",
    moq: "1 Box",
    keyFeatures: [
      "Universal Bendable Sheath Moves Freely in Harmony with All Commercial Flexible Ureteroscopes",
      "Continuous Negative Pressure Suction Evacuates Laser Stone Powder, Blood, and Pus from Renal Pelvis & Calyces",
      "Solves Powder Sinking Problem that Causes Conventional Stone Retrieval Baskets to Fail",
      "Rotating Pressure Control Ring Performs Flexible Intraoperative Pressure Equilibrium to Prevent Extravasation",
      "Available in 11-13Fr (35cm / 45cm) and 12-14Fr (35cm / 45cm), plus Conventional 10/12Fr, 11/12Fr, 12/14Fr Options",
      "Individually Sterile Packaged: 1 Set/Box, 10 Boxes/Carton"
    ],
    detailedSpecs: {
      "Available Sizes": "11-13Fr (35cm / 45cm) & 12-14Fr (35cm / 45cm)",
      "Conventional Sheath Sizes": "10/12Fr, 11/12Fr, 12/14Fr for Male and Female Anatomical Compatibility",
      "Bending Movement": "Omni-Directional Universal Bending Following Flexible Ureteroscope Deflection",
      "Suction Mechanism": "Continuous Dynamic Negative Pressure Evacuation",
      "Pressure Regulation": "Integrated Rotating Pressure Balancing Control Ring",
      "Sterile Packaging": "1 Set/Box, 10 Boxes/Carton (Disposable Sterile Design)"
    },
    applications: [
      "Flexible Ureteroscopic Laser Lithotripsy (RIRS)",
      "Renal Pelvis & Calyx Stone Dust and Sludge Continuous Aspiration",
      "Intrarenal Pressure Regulation During High-Flow Irrigation",
      "Prevention of Postoperative Urosepsis and Fever"
    ],
    seoKeywords: "flexible universal bendable negative pressure sheath, ureteral access sheath suction, negative pressure calculus removing sheath, RIRS suction sheath, disposable ureteral sheath",
    seoDescription: "Flexible Universal Bendable Negative Pressure Calculus-Removing Sheath with rotating pressure ring, 11-13Fr/12-14Fr sizes, 35/45cm lengths, and sterile packaging."
  },
  {
    id: "medical-hydrophilic-coated-zebra-guidewire",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Zebra Guide Wire",
    model: "",
    image: "/assets/images/endoscopy/medical-hydrophilic-coated-zebra-guidewire.png",
    rating: 5,
    reviews: 48,
    isCustomizable: true,
    shortDesc: "Medical urology zebra guide wire with ultra-low friction hydrophilic polymer coating, 1:1 torque transmission core, 5cm atraumatic soft tip, high-contrast blue/white helical stripes, and 150cm length.",
    moq: "1 Box",
    keyFeatures: [
      "Ultra-Low Friction Hydrophilic Polymer Coating Providing Effortless Smooth Sliding Through Tortuous Tracts",
      "High-Grade Inner Core Wire Delivering 1:1 Reliable Torsion Control and Superior Pushability",
      "High-Contrast Blue and White Helical Striped Pattern for Clear Real-Time Motion Tracking Under Endoscopy & Fluoroscopy",
      "5 cm Atraumatic Ultra-Flexible Soft Tip Minimizing Ureteral and Renal Mucosal Perforation Risk",
      "Available in 0.028 in, 0.032 in, 0.035 in, and 0.038 in Outer Diameters with 150 cm Standard Length",
      "Individually Sterile Pouched: 1 Pcs/Pouch, 5 Pouches/Box"
    ],
    detailedSpecs: {
      "Outer Diameters": "0.028 in (0.71mm), 0.032 in (0.81mm), 0.035 in (0.89mm), 0.038 in (0.97mm)",
      "Total Working Length": "150 cm",
      "Distal Tip Structure": "5 cm Atraumatic Soft Flexible Tip",
      "Surface Coating": "Hydrophilic Polymer Lubricious Coating",
      "Visual Identifier": "Blue and White Striped Helical Pattern",
      "Core Material": "Super-Elastic Kink-Resistant Medical Core Alloy",
      "Packaging Specification": "1 Pcs/Pouch, 5 Pouches/Box (Disposable Sterile Packaging)"
    },
    applications: [
      "Ureteral Access and Stricture Navigation Under Endoscopy / Fluoroscopy",
      "Endoscopic Instrument, Dilator & Ureteral Sheath Exchange",
      "Percutaneous Nephrostomy Tract Establishment",
      "Double-J Ureteral Stent Placement and Positioning"
    ],
    seoKeywords: "zebra guide wire, medical hydrophilic guide wire, urology zebra guidewire, 0.035 inch guidewire, 150cm ureteral guide wire, sterile urology consumables",
    seoDescription: "Zebra Guide Wire with hydrophilic coating, 1:1 torque core, 5cm soft tip, blue/white stripes, 0.028-0.038 inch sizes, 150cm length, and sterile packaging."
  },
  {
    id: "endoscopic-urology-foreign-body-forceps",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Foreign Body Forceps",
    model: "",
    image: "/assets/images/endoscopy/endoscopic-biopsy-foreign-body-grasping-forceps.png",
    rating: 5,
    reviews: 28,
    isCustomizable: true,
    shortDesc: "Endoscopic urology foreign body grasping forceps featuring high-tensile stainless steel, serrated alligator/rat-tooth jaws, 3-ring ergonomic handle, available in 3Fr, 4Fr, 5Fr (600mm), 6Fr (460mm), and 9Fr (380mm).",
    moq: "1 Box",
    keyFeatures: [
      "Precision Serrated Alligator & Rat-Tooth Jaws Providing Firm, Slip-Free Calculus and Stent Grasping",
      "Available in 3Fr×600mm, 4Fr×600mm, 5Fr×600mm, 6Fr×460mm, and 9Fr×380mm Specifications",
      "Smooth Flexible Medical Stainless Steel Tube for Easy Scope Channel Insertion with Zero Channel Wear",
      "Ergonomic 3-Ring Scissor Grip Handle Delivering Precise Tactile Feedback and Jaws Opening Control",
      "Fully Compatible with Standard Rigid and Semi-Rigid Nephroscopes, Ureteroscopes & Cystoscopes",
      "Corrosion-Resistant Surgical Grade Stainless Steel Suitable for Repeated Sterilization"
    ],
    detailedSpecs: {
      "Available Sizes": "3Fr × 600mm, 4Fr × 600mm, 5Fr × 600mm, 6Fr × 460mm, 9Fr × 380mm",
      "Jaw Geometry": "Serrated Alligator & Rat-Tooth Grasping Jaws",
      "Handle Mechanism": "Ergonomic 3-Ring Control Handle",
      "Shaft Construction": "High-Flexibility Surgical Grade Stainless Steel",
      "Endoscope Channel Match": "Compatible with 3.6Fr to 11Fr Working Channels Across Rigid & Flexible Scopes",
      "Sterilization": "Autoclave, Low-Temperature Plasma & Ethylene Oxide"
    },
    applications: [
      "Ureteral and Renal Calculus Fragment Grasping & Extraction",
      "Double-J Stent and Migration Fragment Retrieval",
      "Foreign Body Removal from Bladder and Upper Urinary Tract",
      "Intracavitary Clot and Debris Extraction"
    ],
    seoKeywords: "endoscopic foreign body forceps, urology grasping forceps, renal calculus forceps, 3Fr 4Fr 5Fr 6Fr 9Fr foreign body forceps, cystoscopy grasper",
    seoDescription: "Foreign Body Forceps for urological endoscopy with serrated alligator jaws, 3-ring handle, and sizes from 3Fr×600mm to 9Fr×380mm in surgical stainless steel."
  },
  {
    id: "endoscopic-urology-biopsy-forceps",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "Biopsy Forceps",
    model: "",
    image: "/assets/images/endoscopy/endoscopic-biopsy-foreign-body-grasping-forceps.png",
    rating: 5,
    reviews: 25,
    isCustomizable: true,
    shortDesc: "Precision endoscopic urology biopsy forceps with razor-sharp cup-shaped cutting jaws, 3-ring handle, available in 3Fr, 4Fr, 5Fr (600mm), 6Fr (460mm), and 9Fr (380mm) for clean histological tissue sampling.",
    moq: "1 Box",
    keyFeatures: [
      "Sharp Precision Cup-Shaped Jaws Delivering Clean, Crush-Free Mucosal Tissue Biopsy Samples",
      "Available in 3Fr×600mm, 4Fr×600mm, 5Fr×600mm, 6Fr×460mm, and 9Fr×380mm Configurations",
      "Smooth Flexible Surgical Stainless Steel Shaft Passing Effortlessly Through Deflected Scope Channels",
      "Tactile 3-Ring Scissor Handle Providing Sensitive Jaw Articulation and Cutting Control",
      "Compatible with Rigid & Semi-Rigid Nephroscopes, Ureteroscopes, Cystoscopes & Hysteroscopes",
      "Premium Medical Grade Stainless Steel Ensuring Long-Lasting Edge Sharpness and Corrosion Resistance"
    ],
    detailedSpecs: {
      "Available Sizes": "3Fr × 600mm, 4Fr × 600mm, 5Fr × 600mm, 6Fr × 460mm, 9Fr × 380mm",
      "Jaw Configuration": "Precision Cup-Shaped Sharp Cutting Edge (Fenestrated / Non-Fenestrated)",
      "Handle Type": "Ergonomic 3-Ring Scissor Grip",
      "Material": "High-Corrosion-Resistant Surgical Grade Stainless Steel",
      "Channel Fit": "Passes Channels from 3.6Fr to 11.5Fr Across Urological & Gynecological Scopes",
      "Sterilization": "Autoclave, Low-Temperature Plasma & Ethylene Oxide"
    },
    applications: [
      "Ureteral Mucosa Diagnostic Biopsy for Urothelial Carcinoma",
      "Bladder Wall Suspicious Lesion Histopathology Sampling",
      "Renal Pelvicalyceal Papillary Lesion Biopsy",
      "Intrauterine Endometrial Targeted Sampling"
    ],
    seoKeywords: "endoscopic biopsy forceps, urology biopsy forceps, cup biopsy forceps, 3Fr 4Fr 5Fr 6Fr 9Fr biopsy forceps, cystoscopy biopsy punch",
    seoDescription: "Biopsy Forceps for urology endoscopy with sharp cup-shaped cutting jaws, 3-ring handle, and sizes from 3Fr×600mm to 9Fr×380mm for clean tissue sampling."
  },
  {
    id: "intrauterine-device-iud-endoscopic-suture-fixation-kit",
    categoryId: "endoscopy-systems",
    categoryName: "Rigid & Flexible Endoscopy Systems & Accessories",
    brand: "",
    name: "IUD Suture Kit",
    model: "",
    image: "/assets/images/endoscopy/intrauterine-device-iud-endoscopic-suture-fixation-kit.png",
    rating: 5,
    reviews: 30,
    isCustomizable: true,
    shortDesc: "Endoscopic intrauterine device (IUD) suture fixation kit including knotter, three-way flusher, needle holder, biopsy forceps (9Fr×350mm), foreign body forceps (9Fr×350mm), and scissors (9Fr×350mm) for stable uterine fixation.",
    moq: "1 Set",
    keyFeatures: [
      "Complete Specialized Endoscopic Kit for Intrauterine Suture Fixation of Progesterone-Releasing IUDs",
      "Ensures Stable Ring Position in Patients with Relaxed Cervix or Excessively Large Uterine Cavities",
      "Prevents IUD Downward Displacement and Spontaneous Expulsion, Guaranteeing Therapeutic Efficacy",
      "Kit Instruments: Knotter, Three-Way Flusher, Needle Holder, Biopsy Forceps, Foreign Body Forceps, Scissors (9Fr×350mm)",
      "Seamlessly Compatible with Digital Cold Knife Hysteroscope (210mm Working Length, Φ3.6mm Channel)",
      "Saves Substantial Financial and Medical Costs by Eliminating Need for Repeated IUD Repositioning Procedures"
    ],
    detailedSpecs: {
      "Included Instruments": "Endoscopic Knotter, Three-Way Flusher, Needle Holder, Biopsy Forceps (9Fr×350mm), Foreign Body Forceps (9Fr×350mm), Endoscopic Scissors (9Fr×350mm)",
      "Compatible Endoscope": "Digital Hysteroscope Cold Knife System (210mm Working Length, Φ3.6mm Channel, 18Fr Sheath)",
      "Clinical Indication": "Suture Fixation of Intrauterine Devices in Patients Prone to IUD Expulsion",
      "Clinical Benefits": "Secures Medication Release Stability on Endometrium, Alleviating Recurrent Treatment Costs",
      "Material": "Surgical Grade High-Precision Stainless Steel",
      "Sterilization": "Autoclave, Low-Temperature Plasma & Ethylene Oxide"
    },
    applications: [
      "Hysteroscopic Suture Fixation of Levonorgestrel / Progesterone-Releasing IUDs",
      "Management of Cervical Incompetence & Enlarged Uterine Cavity IUD Placement",
      "Prevention of Recurrent IUD Expulsion and Malposition",
      "Endoscopic Intrauterine Suture and Ligation Procedures"
    ],
    seoKeywords: "IUD suture kit, intrauterine device fixation kit, hysteroscopic IUD suture instruments, knotter needle holder, gynecological IUD fixation, hysteroscopy instruments",
    seoDescription: "IUD Suture Kit with knotter, flusher, needle holder, biopsy forceps, foreign body forceps, and scissors (9Fr×350mm) for stable hysteroscopic IUD fixation."
  }
];

// French versions of the 33 endoscopy products
const endoscopyProductsFr = endoscopyProductsEn.map(p => {
  let nameFr = p.name;
  let shortDescFr = p.shortDesc;
  let categoryNameFr = "Systèmes d'Endoscopie Rigide & Souple et Accessoires";
  
  if (p.id === "digital-visual-puncture-mini-nephroscope") {
    nameFr = "Mini-Néphroscope de Ponction Visuelle Numérique";
    shortDescFr = "Mini-néphroscope de ponction visuelle haute définition 160 000 pixels CMOS, diamètre 0.9 mm, aiguille de ponction biseautée 30° et aspiration à pression négative autorégulée pour calculs rénaux complexes.";
  } else if (p.id === "digital-miniature-nephroscope-8-5-12fr") {
    nameFr = "Néphroscope Miniature Numérique (8.5/12Fr)";
    shortDescFr = "Néphroscope numérique à micro-canal 8.5/12Fr à section ovale pour contrôle automatique de pression, angle de vision 12°, canal opérateur 6.3Fr et système d'étanchéité à double valve pour lithotripsie efficace.";
  } else if (p.id === "digital-standard-nephroscope-15-18fr") {
    nameFr = "Néphroscope Standard Numérique (15/18Fr)";
    shortDescFr = "Néphroscope numérique standard 15/18Fr avec canal opérateur 11Fr pour sondes ultrasoniques 3.3mm, résolution HD 160 000 pixels, drainage basse pression continu et pinces chirurgicales adaptées.";
  } else if (p.id === "new-type-mini-pcnl-nephroscope") {
    nameFr = "Néphroscope Nouvelle Génération Mini-PCNL";
    shortDescFr = "Néphroscope spécialisé Mini-PCNL avec champ de vision large 84°, diamètres 12/15Fr à 15/18Fr, corps en acier inoxydable médical ou titane et étanchéité automatique du canal opérateur.";
  } else if (p.id === "miniature-nephroscope-8-5-12fr-84fov") {
    nameFr = "Néphroscope Miniature Optique (8.5/12Fr)";
    shortDescFr = "Néphroscope miniature optique compact 8.5/12Fr avec champ 84°, canal 5Fr, longueur 250mm et pinces à biopsie et corps étrangers pour calculs des calices rénaux inférieurs.";
  } else if (p.id === "rigid-digital-nephroscope-520k-hd") {
    nameFr = "Néphroscope Numérique Rigide Ultra-HD (520k Pixels)";
    shortDescFr = "Néphroscope numérique rigide ultra-haute définition 520 000 pixels avec hublot distal en saphir inrayable, raccord soudé laser hermétique, double valve automatique et diamètres 8.5/12Fr ou 15/18Fr.";
  } else if (p.id === "ups-12-dual-channel-rigid-digital-nephroscope") {
    nameFr = "Néphroscope Numérique Rigide à Double Canal 12°";
    shortDescFr = "Néphroscope numérique rigide 12° à double canal indépendant (Canal A 6.3Fr, Canal B 3.7Fr), diamètre 8.5/12Fr, résolution HD 160 000 pixels et hublot saphir pour passage simultané de laser et panier.";
  } else if (p.id === "usp-12-rigid-digital-uretero-renoscope") {
    nameFr = "Urétéro-Rénoscope Numérique Rigide 12°";
    shortDescFr = "Urétéroscope numérique rigide HD 160 000 pixels, angle 12°, livrable en 8/9.8Fr (canal 5Fr), 6/7.5Fr (canal 4Fr) et 4.5/6.5Fr (option vésicule séminale), longueur 430mm avec embout saphir.";
  } else if (p.id === "usp-12-rigid-digital-uretero-renoscope-520k-hd") {
    nameFr = "Urétéro-Rénoscope Numérique Rigide Ultra-HD (520k Pixels)";
    shortDescFr = "Urétéroscope numérique rigide ultra-HD 520 000 pixels avec angle 12°, diamètres 8/9.8Fr et 6/7.5Fr, longueur 430mm, étanchéité soudée laser et hublot saphir.";
  } else if (p.id === "usp-12-dual-channel-rigid-digital-uretero-renoscope") {
    nameFr = "Urétéro-Rénoscope Numérique Rigide à Double Canal 12°";
    shortDescFr = "Urétéroscope numérique rigide 12° à double canal avec diamètre 6/7.5Fr, Canal A (4Fr) et Canal B (2.8Fr) pour lithotripsie laser et capture au panier simultanées, HD 160 000 pixels.";
  } else if (p.id === "rigid-fiber-uretero-renoscope-84fov") {
    nameFr = "Urétéro-Rénoscope à Fibres Optiques Rigides (84° FOV)";
    shortDescFr = "Urétéroscope optique à fibres rigides haute précision avec champ 84°, oculaire colonnaire évitant toute distorsion sphérique, tube en titane/inox et diamètres 4.5/6.5Fr à 8/9.8Fr.";
  } else if (p.id === "single-use-digital-flexible-ureteroscope") {
    nameFr = "Urétéroscope Souple Numérique à Usage Unique";
    shortDescFr = "Urétéroscope souple numérique à usage unique avec capteur HD 160 000 pixels, champ 110°, embout ogival 5.7Fr, tube 7.5Fr, canal 3.6Fr, double béquillage actif ±275° et emballage stérile individuel.";
  } else if (p.id === "reusable-digital-flexible-uretero-renoscope") {
    nameFr = "Urétéro-Rénoscope Souple Numérique Réutilisable";
    shortDescFr = "Urétéro-rénoscope souple numérique réutilisable HD 160 000 pixels, champ 110°, tube 8Fr, canal 3.6Fr, béquillage ±275°, compteur d'utilisation intégré et détecteur de fuites fourni.";
  } else if (p.id === "sheath-free-rigid-digital-cystoscope-with-channel") {
    nameFr = "Cystoscope Numérique Rigide Sans Gaine avec Canal";
    shortDescFr = "Cystoscope numérique rigide sans gaine avec angle 12°, champ 100°, HD 160 000 pixels, livrable en 13Fr (canal 6Fr), 11Fr (canal 4Fr) et 9Fr (canal 3.6Fr), éliminant la gaine externe traumatique.";
  } else if (p.id === "single-use-digital-flexible-cystoscope") {
    nameFr = "Cystoscope Souple Numérique à Usage Unique";
    shortDescFr = "Cystoscope souple numérique à usage unique HD 160 000 pixels, champ 110°, embout 6.3Fr, tube 13.5Fr, large canal ≥6.3Fr, béquillage haut ≥220° / bas ≥130°, emballage stérile individuel.";
  } else if (p.id === "reusable-digital-flexible-cystoscope") {
    nameFr = "Cystoscope Souple Numérique Réutilisable";
    shortDescFr = "Cystoscope souple numérique réutilisable HD 160 000 pixels, champ 110°, tube 13.5Fr, canal ≥6.3Fr, double béquillage ±275°, compteur de cycles et manomètre de fuites inclus.";
  } else if (p.id === "ultra-thin-digital-laserscope-for-bph") {
    nameFr = "Laséroscope Numérique Ultra-Fin pour Énucléation (HBP)";
    shortDescFr = "Système de laséroscope numérique ultra-fin pour l'énucléation prostatique (HBP), comprenant cystoscope Φ3.0×305mm, canal pièce à main Φ1.0mm, gaine externe 22Fr et gaine interne 18Fr.";
  } else if (p.id === "ultra-mini-digital-morcescope-with-22fr-outer-sheath") {
    nameFr = "Morcéscope Numérique Ultra-Mini (Gaine Externe 22Fr)";
    shortDescFr = "Morcéscope numérique ultra-miniature avec direction de vue 12°, gaine externe 22Fr, longueur 200mm et profil en croissant permettant le passage de lames de morcellation 4.8mm.";
  } else if (p.id === "rigid-digital-hysteroscope-fetoscope-ttts") {
    nameFr = "Hystéroscope Numérique Rigide (Fœtoscope pour Syndrome TTTS)";
    shortDescFr = "Fœtoscope numérique rigide ultra-fin 2.0mm, longueur 185mm, canal 3Fr, pince à corps étrangers 2.7Fr×350mm et aiguilles 6Fr/6.6Fr pour photocoagulation laser du syndrome transfuseur-transfusé (TTTS).";
  } else if (p.id === "endoscopic-tissue-morcellator-system") {
    nameFr = "Morcellateur Électrique de Tissus Endoscopique";
    shortDescFr = "Morcellateur de tissus endoscopique haute performance avec vitesse 300 à 6000 tr/min, aspiration à pression négative -80 kPa, écran tactile couleur et lames réutilisables/jetables 4.8mm.";
  } else if (p.id === "digital-endoscope-image-processor-1080p") {
    nameFr = "Processeur d'Image pour Endoscope Numérique 1080P";
    shortDescFr = "Processeur d'image pour endoscopes numériques Full HD 1080P avec source de lumière froide LED intégrée 5 niveaux, balance des blancs automatique AWC, sorties HDMI/DVI et zoom optique/numérique.";
  } else if (p.id === "digital-endoscope-image-processor-portable-monitor") {
    nameFr = "Processeur d'Image Endoscopique avec Écran Industriel Intégré";
    shortDescFr = "Processeur d'image endoscopique tout-en-un portable avec écran médical industriel intégré, sortie 1080P, source LED froide intégrée et sorties HDMI/DVI pour clinique ambulatoire et chevet.";
  } else if (p.id === "4k-uhd-medical-endoscopic-camera-system") {
    nameFr = "Système de Caméra Endoscopique Médicale 4K UHD";
    shortDescFr = "Système de caméra endoscopique médicale 4K Ultra-HD 3840×2160, ≥2000 lignes TV, tête de caméra étanche monture C, sorties HDMI/DVI/SDI, extinction optique et filtre anti-moiré pour fibroscopes.";
  } else if (p.id === "hd-led-medical-cold-light-source-100w") {
    nameFr = "Source de Lumière Froide Médicale LED HD 100W";
    shortDescFr = "Source de lumière froide médicale LED 100W haute puissance, spectre 3000K-7000K, IRC ≥90, flux >200 000 lux, durée de vie >40 000h, connectique universelle Wolf/Storz et mémoire d'intensité 1-100.";
  } else if (p.id === "endoscope-intelligent-irrigation-suction-pump") {
    nameFr = "Irrigateur Endoscopique Intelligent (Perfusion et Aspiration)";
    shortDescFr = "Irrigateur endoscopique double pompe 400VA avec pression d'irrigation 50-700 mmHg, aspiration 50-400 mmHg, écran tactile 5 pouces et flacon collecteur avec tubulures stériles.";
  } else if (p.id === "endoscope-perfusion-irrigator-single-pump") {
    nameFr = "Pompe d'Irrigation et de Perfusion Endoscopique";
    shortDescFr = "Pompe d'irrigation et de perfusion endoscopique de précision 400VA, plage de pression 50-700 mmHg, débit 0.1-1.5 L/min, écran tactile 5 pouces et tubulure de perfusion dédiée.";
  } else if (p.id === "digital-visual-sheathing-negative-pressure-lithotriptoscope-system") {
    nameFr = "Système de Lithotripsie Endoscopique Visuelle et Gaine à Pression Négative";
    shortDescFr = "Poste de travail complet de lithotripsie intégrant endoscope visuel de gainage, endoscope de lithotripsie à pression négative, collecteur d'aspiration, irrigateur et gaines orientables.";
  } else if (p.id === "digital-hysteroscope-surgery-system-complete-tower") {
    nameFr = "Système Chirurgical d'Hystéroscopie Numérique Complète";
    shortDescFr = "Tour chirurgicale d'hystéroscopie complète comprenant hystéroscopes numériques standard (12/15Fr) et mini (9/12Fr), hystéroscope couteau froid (gaine 18Fr, canal 3.6mm), irrigateur et morcellateur.";
  } else if (p.id === "single-use-flexible-universal-bendable-negative-pressure-sheath") {
    nameFr = "Gaine d'Extraction de Calculs Souple Orientable à Pression Négative";
    shortDescFr = "Gaine d'accès urétérale à usage unique orientable avec aspiration à pression négative pour urétéroscopie souple, diamètres 11-13Fr et 12-14Fr (35cm/45cm) avec bague de régulation de pression.";
  } else if (p.id === "medical-hydrophilic-coated-zebra-guidewire") {
    nameFr = "Guide Médical Zebra à Revêtement Hydrophile";
    shortDescFr = "Guide urologique médical Zebra à revêtement polymère hydrophile ultra-glissant, âme à transmission de couple 1:1, embout souple 5cm, spirales bleue/blanche contrastées, 0.028-0.038 pouces, 150cm.";
  } else if (p.id === "endoscopic-urology-foreign-body-forceps") {
    nameFr = "Pinces à Corps Étrangers pour Endoscopie Urologique";
    shortDescFr = "Pinces de préhension endoscopiques urologiques en acier inoxydable avec mors dentelés alligator/dents de rat, poignée 3 anneaux, diamètres 3Fr, 4Fr, 5Fr (600mm), 6Fr (460mm) et 9Fr (380mm).";
  } else if (p.id === "endoscopic-urology-biopsy-forceps") {
    nameFr = "Pinces à Biopsie pour Endoscopie Urologique";
    shortDescFr = "Pinces à biopsie endoscopiques de haute précision avec mors coupants en cuillère tranchante, poignée ergonomique 3 anneaux, livrables en 3Fr, 4Fr, 5Fr (600mm), 6Fr (460mm) et 9Fr (380mm).";
  } else if (p.id === "intrauterine-device-iud-endoscopic-suture-fixation-kit") {
    nameFr = "Kit de Fixation et Suture de DIU sous Hystéroscopie";
    shortDescFr = "Kit d'instruments de fixation et suture de stérilet (DIU) comprenant noueur, rinceur 3 voies, porte-aiguille, pinces à biopsie, pinces de préhension et ciseaux (9Fr×350mm) pour hystéroscopie.";
  }

  return {
    ...p,
    name: nameFr,
    categoryName: categoryNameFr,
    shortDesc: shortDescFr,
    seoDescription: shortDescFr
  };
});

// Combine products
const allProductsEn = [...baseProductsEn, ...endoscopyProductsEn];
const allProductsFr = [...baseProductsFr, ...endoscopyProductsFr];

console.log(`Total EN Products: ${allProductsEn.length}`);
console.log(`Total FR Products: ${allProductsFr.length}`);

// Extract certifications from original files
const certsEnMatch = productsJsContent.match(/export const CERTIFICATIONS = (\[[\s\S]*?\]);/);
const certsEn = certsEnMatch ? certsEnMatch[1] : '[]';

const certsFrMatch = productsFrJsContent.match(/export const CERTIFICATIONS_FR = (\[[\s\S]*?\]);/);
const certsFr = certsFrMatch ? certsFrMatch[1] : '[]';

// Write products.js
const newProductsJs = `export const FEATURED_PRODUCTS = ${JSON.stringify(allProductsEn, null, 2)};\n\nexport const CERTIFICATIONS = ${certsEn};\n`;
fs.writeFileSync(productsJsPath, newProductsJs, 'utf8');

// Write productsFr.js
const newProductsFrJs = `export const FEATURED_PRODUCTS_FR = ${JSON.stringify(allProductsFr, null, 2)};\n\nexport const CERTIFICATIONS_FR = ${certsFr};\n`;
fs.writeFileSync(productsFrJsPath, newProductsFrJs, 'utf8');

console.log('Successfully updated products.js and productsFr.js!');

// Update sitemap.xml
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Core Static Pages -->
  <url>
    <loc>https://maxvor.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://maxvor.com/products</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://maxvor.com/certifications</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://maxvor.com/faq</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://maxvor.com/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://maxvor.com/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://maxvor.com/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Categories -->
  <url>
    <loc>https://maxvor.com/products?category=ultrasound-systems</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://maxvor.com/products?category=endoscopy-systems</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://maxvor.com/products?category=bandages-and-wound-care</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Products -->
`;

allProductsEn.forEach(prod => {
  sitemapXml += `  <url>
    <loc>https://maxvor.com/products/${prod.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

// Articles
const articlesJsPath = path.join(rootDir, 'src', 'data', 'articles.js');
const articlesJsContent = fs.readFileSync(articlesJsPath, 'utf8');
const articlesMatch = articlesJsContent.match(/export const BLOG_ARTICLES = (\[[\s\S]*?\]);\s*export const CLINICAL_WHITEPAPERS/);
if (articlesMatch) {
  const articles = eval(articlesMatch[1]);
  sitemapXml += `\n  <!-- Blog Articles & SOPs -->\n`;
  articles.forEach(art => {
    sitemapXml += `  <url>
    <loc>https://maxvor.com/blog/${art.id}</loc>
    <lastmod>${art.date || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  });
}

sitemapXml += `</urlset>\n`;
fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');

console.log('Successfully updated sitemap.xml with all canonical URLs!');
