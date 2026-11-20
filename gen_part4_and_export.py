# -*- coding: utf-8 -*-
import json, os

with open('catalog_part3.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# ==========================================
# 4. PPE & INFECTION CONTROL (7 Products)
# ==========================================
ppe = [
  {
    "id": "prod-ppe-001",
    "categoryId": "ppe-infection-control",
    "categoryName": "PPE & Infection Control",
    "name": "Sterile SMS Fenestrated Surgical Drapes & Laparotomy Packs",
    "model": "SDP-SMS300",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/surgical-fenestrated-drape.png",
    "rating": 5.0,
    "reviews": 195,
    "isCustomizable": True,
    "shortDesc": "High-barrier 3-layer SMS/SMMS non-woven disposable surgical drapes with adhesive fenestration aperture, cable holders, and fluid collection pouches.",
    "specs": [
      { "label": "Material Composition", "value": "Medical Grade SMS / SMMS Polypropylene Non-Woven (50 - 65 g/m² Heavy Duty)" },
      { "label": "Fenestration Sizes", "value": "Circular/Oval/Rectangular Fenestrations (e.g. 5x5cm, 10x10cm, 15x20cm with Incise Film)" },
      { "label": "Standard Drape Dimensions", "value": "150x200cm, 180x240cm, 200x300cm (Specialty Orthopedic/C-Section/Laparotomy Packs)" },
      { "label": "Fluid Repellency / Resistance", "value": "Hydrostatic Head Pressure ≥ 60 cm H2O (Meets AAMI PB70 Level 3/4 Barrier)" },
      { "label": "Sterility & Folding", "value": "EO Gas Sterilized, Aseptic Book-Folded with Position Indicators" }
    ],
    "applications": [
      "Operating room sterile field creation for abdominal, orthopedic, and cardiovascular surgeries",
      "Minor outpatient procedures, catheterization, and ophthalmic/dental operations",
      "Prevention of surgical site infections (SSI) and cross-contamination"
    ],
    "features": [
      "Impervious to liquid penetration and microbial strike-through during prolonged wet procedures",
      "Lint-free low-particulate non-woven construction prevents post-op foreign body granulomas",
      "Integrated 3M-equivalent hypoallergenic medical adhesive aperture borders"
    ],
    "seoKeywords": ["Surgical Drapes", "Fenestrated Surgical Drape", "SMS Surgical Drape", "Sterile Laparotomy Sheet", "Hospital Operating Drape"],
    "certifications": ["CE MDR Class I/II", "FDA 510(k)", "ISO 13485", "EN 13795"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Infection Control Section: 医用一次性SMS洞巾手术铺单 无菌手术包)"
  },
  {
    "id": "prod-ppe-002",
    "categoryId": "ppe-infection-control",
    "categoryName": "PPE & Infection Control",
    "name": "AAMI Level 3/4 Reinforced Sterile Surgical Gowns",
    "model": "SRG-AAMI4",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 5.0,
    "reviews": 230,
    "isCustomizable": True,
    "shortDesc": "Reinforced breathable SMMS multi-layer sterile surgical gown providing full critical zone liquid and blood-borne pathogen barrier for extended OR procedures.",
    "specs": [
      { "label": "Barrier Standard", "value": "AAMI PB70 Level 3 / Level 4 & EN 13795 High Performance" },
      { "label": "Fabric & Weight", "value": "SMMS / SMMMS Polypropylene Non-Woven (45 - 60 g/m²) + Breathable PE Membrane Reinforcement" },
      { "label": "Critical Zone Reinforcement", "value": "Full Chest and Forearm Sleeve Impermeable Dual-Layer Reinforcement" },
      { "label": "Cuff & Closure", "value": "Seamless Soft Polyester Knitted Elastic Cuffs + Hook-and-Loop Neckline + 4 Tie Belts with Transfer Card" },
      { "label": "Sizes Available", "value": "Small, Medium, Large, Extra Large (XL), XXL (Standard & Extended Lengths)" }
    ],
    "applications": [
      "Major high-fluid surgical operations (orthopedic joint replacement, cardiac, trauma surgery)",
      "Operating room surgical team sterile scrub apparel",
      "Infectious disease isolation wards and emergency surgical care"
    ],
    "features": [
      "Provides complete impermeability to blood, body fluids, and viral penetration per ASTM F1671",
      "Micro-porous breathable structure allows body heat and vapor dissipation for surgeon comfort",
      "Ultrasonic welded seams eliminate stitch needle holes for absolute leak-proof protection"
    ],
    "seoKeywords": ["Surgical Gown", "AAMI Level 3 Gown", "AAMI Level 4 Surgical Gown", "Sterile Reinforced Gown", "Hospital Operating Gown"],
    "certifications": ["CE MDR Class I/II", "FDA 510(k)", "ISO 13485", "EN 13795 / AAMI PB70"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Infection Control Section: 一次性加强型无菌手术衣 SMS/SMMS三抗防渗透)"
  },
  {
    "id": "prod-ppe-003",
    "categoryId": "ppe-infection-control",
    "categoryName": "PPE & Infection Control",
    "name": "Disposable PP/PE Isolation Gowns (Knitted Cuffs, Fluid Resistant)",
    "model": "ISG-PP35K",
    "medicalClass": "Class I",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 4.8,
    "reviews": 175,
    "isCustomizable": True,
    "shortDesc": "Universal protective PP+PE coated isolation gowns with full back coverage, waist ties, and soft knitted cuffs for hospital clinical ward and visitor barrier protection.",
    "specs": [
      { "label": "Material Spec", "value": "Polypropylene Spunbond Non-Woven + PE Film Lamination (25 - 45 g/m²)" },
      { "label": "Cuff Design", "value": "Comfortable Knitted Rib Elastic Cuffs or Elastic Wrist Band" },
      { "label": "Dimensions & Color", "value": "Universal Size: 115x137cm, 120x140cm (Medical Blue, Yellow, Green, White)" },
      { "label": "Fluid Resistance", "value": "Hydrostatic Head ≥ 20 - 50 cm H2O (AAMI Level 1 / Level 2 Protection)" },
      { "label": "Packaging", "value": "10 pcs/polybag, 100 pcs/export carton" }
    ],
    "applications": [
      "Hospital general inpatient wards, ICU visitor isolation, and laboratory protection",
      "Fever clinics, blood collection centers, and infection prevention triage",
      "Dental clinics, outpatient dressing changes, and cleanroom sanitization"
    ],
    "features": [
      "Fluid repellent PE coating resists blood, chemical splashes, and water droplets",
      "Full back overlap design with dual neck and waist tie cords ensures complete coverage",
      "Lightweight, flexible, and comfortable for long-shift clinical nursing staff"
    ],
    "seoKeywords": ["Isolation Gown", "Disposable Medical Gown", "PP PE Isolation Gown", "AAMI Level 2 Gown", "Hospital Protection Gown"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infection Control Section: 一次性医用隔离衣 针织袖口防水防飞溅)"
  },
  {
    "id": "prod-ppe-004",
    "categoryId": "ppe-infection-control",
    "categoryName": "PPE & Infection Control",
    "name": "Medical Surgical Face Masks (Type IIR / Level 3, 3-Ply Meltblown)",
    "model": "MSM-3PLY-IIR",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 4.9,
    "reviews": 420,
    "isCustomizable": True,
    "shortDesc": "3-ply medical surgical mask featuring high-efficiency BFE/PFE ≥ 98% electret meltblown filter layer and 120 mmHg splash resistance per EN 14683 Type IIR standards.",
    "specs": [
      { "label": "Filtration Efficiency", "value": "Bacterial Filtration Efficiency (BFE) ≥ 98%, Particle Filtration (PFE) ≥ 98% at 0.1μm" },
      { "label": "Fluid Splash Resistance", "value": "Synthetic Blood Splash Resistance ≥ 120 mmHg (16.0 kPa) per EN 14683 Type IIR" },
      { "label": "3-Layer Construction", "value": "Outer Hydrophobic PP Non-Woven + Middle Meltblown Filter + Inner Hypoallergenic Skin-Contact Layer" },
      { "label": "Differential Pressure (ΔP)", "value": "< 49.0 Pa/cm² (Ultra-Low Breathing Resistance)" },
      { "label": "Ear Loops & Nose Clip", "value": "High-Elastic Flat Spandex Ear Loops (Latex-Free) + Encapsulated Aluminum Malleable Nose Bridge" },
      { "label": "Packaging", "value": "50 pcs/box, 40 boxes/carton (2,000 pcs/carton), Sterile / Non-Sterile Packs" }
    ],
    "applications": [
      "Operating rooms, surgical suites, and intensive care units",
      "Hospital outpatient departments, emergency rooms, and dental clinics",
      "Public health infection prevention and airborne particulate barrier"
    ],
    "features": [
      "100% Fiber-glass and latex-free hypoallergenic construction prevents skin irritation",
      "Ultrasonically welded flat ear loops prevent breaking under high tension forces (> 15N)",
      "High fluid splash barrier protects clinical personnel from arterial spray"
    ],
    "seoKeywords": ["Type IIR Surgical Mask", "Medical Face Mask", "3-Ply Surgical Mask", "EN 14683 Mask", "Hospital Surgical Mask"],
    "certifications": ["CE MDR Class I/II", "FDA 510(k)", "EN 14683 Type IIR", "ASTM F2100 Level 3"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infection Control Section: 医用外科口罩 三层熔喷布防飞溅Type IIR标准)"
  },
  {
    "id": "prod-ppe-005",
    "categoryId": "ppe-infection-control",
    "categoryName": "PPE & Infection Control",
    "name": "Sterile N95 / FFP2 Particulate Medical Respirators (Foldable Cone)",
    "model": "RESP-N95F",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 5.0,
    "reviews": 290,
    "isCustomizable": True,
    "shortDesc": "High-barrier 4-ply / 5-ply foldable medical particulate respirator providing ≥ 95% - 99% filtration efficiency against airborne bio-aerosols, viruses, and hazardous dusts.",
    "specs": [
      { "label": "Filtration Rating", "value": "N95 (NIOSH 42 CFR 84) / FFP2 NR (EN 149:2001+A1:2009) / GB 19083 Medical Grade" },
      { "label": "Filtration Efficiency", "value": "PFE (Sodium Chloride / Paraffin Oil) ≥ 95% - 99.4%" },
      { "label": "Multi-Layer Filtration", "value": "Heavyweight Spunbond Non-Woven + Dual Electrostatic Meltblown Layers + Hot Air Cotton + Inner Soft Layer" },
      { "label": "Headband Style", "value": "Over-the-Head Dual Elastic Straps (Ultrasonically Welded, No Staples) / Ear Loop Options" },
      { "label": "Fluid Resistance", "value": "Resistant to synthetic blood penetration at 160 mmHg (AAMI Level 3/4)" },
      { "label": "Packaging", "value": "Individual Hygienic Polybag, 20 or 50 pcs/box" }
    ],
    "applications": [
      "Aerosol-generating medical procedures (AGPs): Endotracheal intubation, bronchoscopy, dental drilling",
      "Tuberculosis, viral respiratory infection isolation units, and infectious disease wards",
      "High-risk pandemic triage and pathology laboratory aerosol protection"
    ],
    "features": [
      "3D Ergonomic foldable shape provides spacious interior cavity for easy speech without collapsing",
      "High-density memory foam nose cushion with adjustable external aluminum clip creates leak-free seal",
      "Electrostatic charged nanofiber meltblown media ensures ultra-low inhalation resistance"
    ],
    "seoKeywords": ["N95 Medical Respirator", "FFP2 Surgical Mask", "Particulate Respirator", "Medical N95 Mask", "Foldable Respirator FFP2"],
    "certifications": ["CE MDR / CE PPE", "FDA 510(k)", "EN 149 FFP2", "NIOSH N95 Compliant"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Infection Control Section: 医用防护口罩 N95/FFP2颗粒物高过滤口罩)"
  },
  {
    "id": "prod-ppe-006",
    "categoryId": "ppe-infection-control",
    "categoryName": "PPE & Infection Control",
    "name": "Medical Non-Woven Bouffant Caps & Anti-Skid Shoe Covers",
    "model": "BSC-COMBO1",
    "medicalClass": "Class I",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 4.8,
    "reviews": 155,
    "isCustomizable": True,
    "shortDesc": "High-volume hospital cleanroom disposable non-woven elastic bouffant mob caps and CPE/non-woven anti-slip embossed shoe covers.",
    "specs": [
      { "label": "Bouffant Cap Spec", "value": "100% Spunbond Polypropylene (10 - 14 g/m²), 19\" / 21\" / 24\" Elasticized Perimeter" },
      { "label": "Shoe Cover Spec", "value": "Heavy-Duty Chlorinated Polyethylene (CPE 3.0g - 5.0g) or PP Non-Woven with Anti-Skid Pattern" },
      { "label": "Color Variants", "value": "Medical Blue, White, Green" },
      { "label": "Elastic Band Strength", "value": "Dual Encased Elastic Cord Resists Snapping under Heavy Tension" },
      { "label": "Packaging", "value": "100 pcs/polybag, 10 or 20 bags/carton (1,000 - 2,000 pcs/carton)" }
    ],
    "applications": [
      "Operating rooms, sterile central supply rooms, and pharmacy compounding cleanrooms",
      "Hospital visitor isolation, clean zones, and ICU entry airlocks",
      "Food processing, electronic cleanrooms, and diagnostic laboratories"
    ],
    "features": [
      "Effectively prevents shedding of hair, scalp particulates, and footwear contaminants into sterile fields",
      "Embossed textured tread on shoe covers provides confident traction on wet hospital tile floors",
      "Breathable, lightweight, and completely lint-free"
    ],
    "seoKeywords": ["Bouffant Cap", "Medical Shoe Covers", "Disposable Mob Cap", "Anti-Skid Shoe Covers", "Cleanroom Headwear"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infection Control Section: 一次性医用无纺布圆帽与防滑鞋套组合)"
  },
  {
    "id": "prod-ppe-007",
    "categoryId": "ppe-infection-control",
    "categoryName": "PPE & Infection Control",
    "name": "Full-Face Medical Protective Shield & Anti-Fog Safety Goggles",
    "model": "FPS-AF100",
    "medicalClass": "Class I",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 4.8,
    "reviews": 118,
    "isCustomizable": True,
    "shortDesc": "Ultra-clear optical grade PET face shield and indirect-vent medical safety goggles treated with double-sided permanent anti-fog and anti-glare coatings.",
    "specs": [
      { "label": "Face Shield Dimensions", "value": "320mm x 220mm (Thickness: 0.25mm - 0.30mm Optical Grade Anti-Fog PET)" },
      { "label": "Headband & Foam", "value": "Hypoallergenic Soft High-Density Forehead Sponge + Elastic Woven Headband" },
      { "label": "Safety Goggle Spec", "value": "Soft Medical PVC Frame + Polycarbonate (PC) Impact Lens with 4 Indirect Anti-Splash Air Vents" },
      { "label": "Optical Quality", "value": "Class 1 Optical Clarity (≥ 92% Light Transmittance, Zero Distortion)" },
      { "label": "Anti-Fog Coating", "value": "Permanent Dual-Sided Hydrophilic Anti-Fog Technology" }
    ],
    "applications": [
      "Operating room surgical procedures with fluid spray and bone sawing",
      "Dental scaling, cavity preparation, and oral maxillofacial surgery",
      "Emergency room triage, endotracheal intubation, and clinical laboratory specimen handling"
    ],
    "features": [
      "Provides 180° wrap-around full-face protection against blood splatters, aerosols, and chemical splashes",
      "Compatible with standard prescription eyeglasses and N95 cone respirators without fogging",
      "Lightweight ergonomic design allows all-day fatigue-free wear"
    ],
    "seoKeywords": ["Medical Face Shield", "Anti Fog Safety Goggles", "Protective Eye Shield", "Medical Eye Goggles", "Full Face Visor"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ANSI Z87.1", "EN 166:2001"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infection Control Section: 医用全脸防飞溅防护面罩与医用防雾护目镜)"
  }
]
products.extend(ppe)

# ==========================================
# 5. EXAMINATION & SURGICAL GLOVES (4 Products)
# ==========================================
gloves = [
  {
    "id": "prod-glove-001",
    "categoryId": "examination-surgical-gloves",
    "categoryName": "Examination & Surgical Gloves",
    "name": "Medical Nitrile Examination Gloves (Powder-Free, Chemo-Tested)",
    "model": "NXG-PF35",
    "medicalClass": "Class I / Class IIa",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 5.0,
    "reviews": 510,
    "isCustomizable": True,
    "shortDesc": "100% synthetic acrylonitrile-butadiene nitrile medical examination gloves featuring micro-textured fingertips, AQL 1.5/1.0 pinhole quality, and ASTM D6978 chemotherapy drug resistance.",
    "specs": [
      { "label": "Material", "value": "100% Synthetic Nitrile Butadiene Rubber (NBR), 100% Latex-Free & Powder-Free" },
      { "label": "Quality Standards", "value": "AQL 1.0 / AQL 1.5 Medical Grade, ASTM D6319, EN 455 Parts 1-4, ISO 11193-1" },
      { "label": "Thickness & Weight", "value": "Palm: 0.08mm (3.2 mil); Finger: 0.11mm (4.3 mil); Weight: 3.5g - 4.5g / pc (Size M)" },
      { "label": "Tensile Strength & Elongation", "value": "Before Aging: ≥ 18 MPa / ≥ 500%; After Aging: ≥ 16 MPa / ≥ 400%" },
      { "label": "Chemotherapy Tested", "value": "Tested per ASTM D6978 against 7 Common Hazardous Chemotherapy Drugs" },
      { "label": "Sizes & Packaging", "value": "XS, S, M, L, XL (100 pcs/box by weight, 10 boxes/case = 1,000 pcs/case)" }
    ],
    "applications": [
      "Hospital emergency rooms, ICU wards, general nursing, and diagnostic examinations",
      "Oncology chemotherapy drug preparation and administration",
      "Dental clinics, clinical pathology laboratories, and pharmaceutical cleanrooms"
    ],
    "features": [
      "Eliminates Type I natural latex protein allergic reactions for sensitive medical staff and patients",
      "Micro-textured fingertips provide exceptional tactile grip in both wet and dry clinical conditions",
      "Beaded cuff design facilitates easy donning and prevents liquid roll-down"
    ],
    "seoKeywords": ["Nitrile Examination Gloves", "Medical Nitrile Gloves", "Powder Free Nitrile Gloves", "Chemo Tested Gloves", "AQL 1.5 Nitrile Gloves"],
    "certifications": ["CE MDR Class I/IIa", "FDA 510(k)", "ISO 13485", "EN 455 / ASTM D6319"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Gloves Section: 医用一次性丁腈检查手套 无粉麻面抗化疗药物)"
  },
  {
    "id": "prod-glove-002",
    "categoryId": "examination-surgical-gloves",
    "categoryName": "Examination & Surgical Gloves",
    "name": "Sterile Latex Surgical Gloves (Micro-Textured, Curved Fingers)",
    "model": "SLG-ST500",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 4.9,
    "reviews": 320,
    "isCustomizable": True,
    "shortDesc": "Anatomically curved sterile natural rubber latex surgical gloves with micro-rough textured surface, low protein content (< 50μg/g), and AQL 0.65 surgical barrier integrity.",
    "specs": [
      { "label": "Material Spec", "value": "High-Grade Natural Rubber Latex (NRL), Powder-Free Polymer Coated" },
      { "label": "Anatomical Design", "value": "Ergonomic Curved Fingers with Natural Thumb Position (Reduces Hand Fatigue)" },
      { "label": "Quality & Pinhole Level", "value": "AQL 0.65 / AQL 1.0 (Strict Surgical Inspection Standard), EN 455 / ASTM D3577" },
      { "label": "Length & Cuff", "value": "Length: ≥ 285mm - 295mm; Reinforced Beaded Anti-Roll Cuff" },
      { "label": "Sizes Available", "value": "Size 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0 Half-Sizes" },
      { "label": "Sterility & Packaging", "value": "Gamma Radiation / EO Gas Sterile, 1 Pair/Inner Wallet Peel Pouch, 50 Pairs/Box" }
    ],
    "applications": [
      "Operating room invasive surgical procedures (orthopedic, cardiac, general, neurosurgery)",
      "Obstetric deliveries and cesarean sections",
      "Sterile catheter insertion and interventional procedures"
    ],
    "features": [
      "Unrivaled elasticity, tear resistance, and tactile sensitivity for delicate surgical instrument handling",
      "Micro-roughened surface ensures secure instrument grip without slippage during bloody procedures",
      "Multi-stage water leaching technology slashes extractable latex protein levels to minimize sensitization"
    ],
    "seoKeywords": ["Latex Surgical Gloves", "Sterile Surgical Gloves", "Powder Free Latex Surgical", "Curved Finger Gloves", "AQL 0.65 Surgical Gloves"],
    "certifications": ["CE MDR Class IIa", "FDA 510(k)", "ISO 13485", "ASTM D3577 / EN 455"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Gloves Section: 一次性无菌乳胶外科手术手套 微麻面弯指设计)"
  },
  {
    "id": "prod-glove-003",
    "categoryId": "examination-surgical-gloves",
    "categoryName": "Examination & Surgical Gloves",
    "name": "Medical Vinyl Examination Gloves (Powder-Free PVC)",
    "model": "VXG-PF40",
    "medicalClass": "Class I",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 4.7,
    "reviews": 180,
    "isCustomizable": True,
    "shortDesc": "Economical transparent polyvinyl chloride (PVC) powder-free medical examination gloves providing dependable hygienic barrier protection for routine low-risk healthcare tasks.",
    "specs": [
      { "label": "Material Formulation", "value": "Medical Polyvinyl Chloride (PVC) Plastisol Resin (100% DOP / DEHP-Free Plasticizers)" },
      { "label": "Quality Standard", "value": "AQL 1.5 / AQL 2.5 Medical Grade, ASTM D5250, EN 455 Parts 1-3" },
      { "label": "Tensile & Thickness", "value": "Palm: 0.07mm; Finger: 0.08mm; Tensile Strength: ≥ 11 MPa" },
      { "label": "Color & Surface", "value": "Clear Translucent / Medical Blue Smooth Surface with PU Inner Coating" },
      { "label": "Packaging", "value": "100 pcs/dispenser box, 10 boxes/case (1,000 pcs/case)" }
    ],
    "applications": [
      "Routine clinical patient examination, vital signs measurement, and blood pressure checks",
      "Elderly patient nursing care, bed baths, and incontinence care",
      "Food service handling, medical cleaning, and sanitation duties"
    ],
    "features": [
      "100% Free of latex proteins and chemical accelerators (thiurams/carbamates)",
      "Smooth interior PU coating allows effortless dry and damp hand donning",
      "Cost-effective solution for high-volume non-sterile routine hospital tasks"
    ],
    "seoKeywords": ["Vinyl Examination Gloves", "Clear Vinyl Gloves", "Medical PVC Gloves", "Powder Free Vinyl Gloves", "Hospital Vinyl Gloves"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Gloves Section: 一次性医用PVC检查手套 无粉透明高弹性)"
  },
  {
    "id": "prod-glove-004",
    "categoryId": "examination-surgical-gloves",
    "categoryName": "Examination & Surgical Gloves",
    "name": "Sterile Long-Cuff Gynecology & Obstetric Latex Gloves (480mm)",
    "model": "GYN-GL480",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-ppe-gloves.png",
    "rating": 4.9,
    "reviews": 96,
    "isCustomizable": True,
    "shortDesc": "Extra-long 480mm sterile latex surgical gloves extending above the elbow to provide full forearm fluid protection during obstetrical deliveries and gynecological procedures.",
    "specs": [
      { "label": "Total Glove Length", "value": "480mm ± 10mm (Extra Long Forehead Coverage to Upper Arm)" },
      { "label": "Material", "value": "High-Tensile Natural Rubber Latex, Low-Protein, Powder-Free" },
      { "label": "Glove Thickness", "value": "Heavy-Duty Reinforced: Palm 0.20mm (8 mil), Cuff 0.16mm (6.5 mil)" },
      { "label": "Surface Texture", "value": "Full Palm and Finger Rough Textured Surface for Secure Instrument Control" },
      { "label": "Sterility & Packaging", "value": "EO Gas Sterilized, 1 Pair/Sterile Pouch, 25 Pairs/Box, 4 Boxes/Carton" }
    ],
    "applications": [
      "Vaginal deliveries, cesarean sections, and manual placenta removal in obstetrics",
      "Deep pelvic surgery, gynecological oncology, and transvaginal surgical interventions",
      "Veterinary reproductive artificial insemination and deep organ palpation"
    ],
    "features": [
      "480mm extended length completely covers surgeon forearms to prevent amniotic fluid and blood strike-through",
      "Anatomical shape with reinforced cuff prevents glove roll-down during vigorous movement",
      "Superior puncture resistance protects clinicians against bone splinters and needles"
    ],
    "seoKeywords": ["Gynecology Gloves", "Long Cuff Surgical Gloves", "480mm Latex Gloves", "Obstetric Examination Gloves", "Elbow Length Sterile Gloves"],
    "certifications": ["CE MDR Class IIa", "FDA 510(k)", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Gloves Section: 一次性无菌加长袖口妇产科乳胶检查手套 480mm)"
  }
]
products.extend(gloves)

# ==========================================
# 6. INJECTION & INFUSION CONSUMABLES (6 Products)
# ==========================================
inj = [
  {
    "id": "prod-inj-001",
    "categoryId": "injection-infusion",
    "categoryName": "Injection & Infusion Consumables",
    "name": "Disposable Sterile Luer Lock & Slip Syringes (1ml - 60ml with Needle)",
    "model": "SYR-LL3P",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-syringes-infusion.png",
    "rating": 5.0,
    "reviews": 380,
    "isCustomizable": True,
    "shortDesc": "3-piece medical syringe with high-transparency polypropylene barrel, smooth double-contact synthetic rubber plunger piston, and indelible graduated scale.",
    "specs": [
      { "label": "Capacity Range", "value": "1ml, 2/3ml, 5ml, 10ml, 20ml, 30ml, 50/60ml (Tuberculin, Insulin, Standard Volumes)" },
      { "label": "Nozzle Type", "value": "Luer Lock (Threaded Lock) & Luer Slip (Central / Eccentric Tip)" },
      { "label": "Needle Spec", "value": "Mounted or By-Pack Stainless Steel Hypodermic Needle (18G - 30G x 1/2\" - 1 1/2\")" },
      { "label": "Barrel & Plunger Material", "value": "High-Clarity Medical Polypropylene (PP), Latex-Free Synthetic Isoprene Rubber Piston" },
      { "label": "Graduation Markings", "value": "Laser-Etched Indelible Black Ink Scale with Bold Zero-Line Calibration" },
      { "label": "Sterility & Packaging", "value": "EO Gas Sterile, Individual Blister Pack or Ribbon Peel Pack, 100 pcs/box" }
    ],
    "applications": [
      "Intramuscular (IM), subcutaneous (SC), intravenous (IV), and intradermal clinical injections",
      "Aspiration and dispensing of medications, vaccines, and arterial blood samples",
      "Enteral feeding and wound irrigation (50/60ml Catheter Tip Variants)"
    ],
    "features": [
      "Ultra-clear barrel ensures instant visual detection of air bubbles and precise dosage",
      "Medical silicone lubrication provides smooth, low-friction plunger movement without jerking",
      "Integrated positive plunger safety stop ring prevents accidental piston withdrawal"
    ],
    "seoKeywords": ["Disposable Syringe", "Luer Lock Syringe", "3 Piece Medical Syringe", "Sterile Syringe with Needle", "Hypodermic Syringe"],
    "certifications": ["CE 0123 / CE MDR", "FDA 510(k)", "ISO 7886-1", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infusion Section: 一次性使用无菌注射器 1ml-60ml螺口/斜口带针)"
  },
  {
    "id": "prod-inj-002",
    "categoryId": "injection-infusion",
    "categoryName": "Injection & Infusion Consumables",
    "name": "Safety Auto-Disable (AD) Syringes with Retractable Needle",
    "model": "SYR-AD100",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-syringes-infusion.png",
    "rating": 5.0,
    "reviews": 165,
    "isCustomizable": True,
    "shortDesc": "WHO PQS certified safety auto-disable immunization syringe featuring automatic internal plunger locking or spring retraction to prevent syringe reuse and needlestick injuries.",
    "specs": [
      { "label": "Volume Capacities", "value": "0.1ml, 0.5ml (Immunization / Vaccine), 1ml, 3ml, 5ml" },
      { "label": "Safety Mechanism", "value": "Automatic Internal Plunger Lock Ring & Breakable Plunger Rod / Needle Retraction into Barrel" },
      { "label": "Needle Integration", "value": "Fixed Integrated Needle (Zero Dead Space) 23G, 25G, 27G, 29G" },
      { "label": "Standards Compliance", "value": "ISO 7886-3 (Auto-Disable) & ISO 7886-4 (Reuse Prevention Standards)" },
      { "label": "Sterility & Packaging", "value": "EO Gas Sterile, Individual Blister Pouch, 100 pcs/box, 2,000 pcs/carton" }
    ],
    "applications": [
      "Mass immunization campaigns (EPI vaccination: BCG, Hepatitis B, Measles, Polio)",
      "Hospital outpatient injection rooms preventing healthcare needle-stick contamination",
      "Infectious disease isolation wards"
    ],
    "features": [
      "Mechanically locks permanently upon completion of injection, rendering reuse impossible",
      "Ultra-low dead space design saves up to 0.08ml of vaccine dose per injection",
      "Audible 'click' confirms safety mechanism activation for clinician peace of mind"
    ],
    "seoKeywords": ["Auto Disable Syringe", "AD Syringe", "Safety Vaccine Syringe", "Retractable Safety Syringe", "Reuse Prevention Syringe"],
    "certifications": ["WHO PQS Certified", "CE MDR Class IIa", "FDA 510(k)", "ISO 7886-3"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infusion Section: 一次性自毁型无菌安全注射器 防针刺伤)"
  },
  {
    "id": "prod-inj-003",
    "categoryId": "injection-infusion",
    "categoryName": "Injection & Infusion Consumables",
    "name": "Sterile Hypodermic Needles (Precision Lancet Point 18G - 32G)",
    "model": "HN-ISO7864",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-syringes-infusion.png",
    "rating": 4.9,
    "reviews": 210,
    "isCustomizable": True,
    "shortDesc": "Ultra-sharp surgical stainless steel hypodermic needles with triple-facet lancet bevel, color-coded ISO 6009 polypropylene hub, and micro-thin wall technology.",
    "specs": [
      { "label": "Gauge & Lengths", "value": "18G, 19G, 20G, 21G, 22G, 23G, 24G, 25G, 26G, 27G, 29G, 30G, 31G, 32G (Length: 1/2\" to 2\")" },
      { "label": "Cannula Material", "value": "Medical Grade SUS304 / 316L Stainless Steel (Ultra-Thin Wall / Regular Wall)" },
      { "label": "Bevel Configuration", "value": "Triple-Facet Lancet Point (Regular Bevel / Short Bevel / Intradermal Bevel)" },
      { "label": "Lubrication", "value": "Medical Grade High-Purity Silicone Oil Coating (Meets ISO 7864)" },
      { "label": "Hub Color Coding", "value": "100% Compliant with ISO 6009 International Color Identification Standards" },
      { "label": "Packaging", "value": "Individual Blister Peel Pack, 100 pcs/box, 100 boxes/carton (10,000 pcs/carton)" }
    ],
    "applications": [
      "Connecting with syringes and IV sets for intramuscular, subcutaneous, and intravenous injections",
      "Medication preparation and vial reconstitution fluid drawing",
      "Cosmetic mesotherapy and micro-injection dermatological procedures"
    ],
    "features": [
      "Precision robotic laser grinding delivers burr-free sharp lancet point for virtually painless tissue penetration",
      "Ultra-thin wall cannula expands inner lumen diameter for higher fluid flow rates of viscous medications",
      "Color-coded translucent hub allows instant needle gauge verification and flashback visibility"
    ],
    "seoKeywords": ["Hypodermic Needle", "Sterile Injection Needle", "Medical Needle 21G 23G", "ISO 6009 Needle", "Stainless Steel Hypodermic Needle"],
    "certifications": ["CE MDR Class IIa", "FDA 510(k)", "ISO 7864", "ISO 9626"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infusion Section: 一次性医用无菌注射针 18G-32G完整规格)"
  },
  {
    "id": "prod-inj-004",
    "categoryId": "injection-infusion",
    "categoryName": "Injection & Infusion Consumables",
    "name": "Precision IV Infusion Giving Sets with Micro Flow Regulator",
    "model": "IVS-FR20D",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-syringes-infusion.png",
    "rating": 5.0,
    "reviews": 275,
    "isCustomizable": True,
    "shortDesc": "Gravity and pump intravenous infusion giving set with vented spike, flexible drip chamber (20 drops/ml), 15μm fluid filter, Y-injection site, and precision dial flow regulator.",
    "specs": [
      { "label": "Drip Calibration", "value": "Macro Drop: 20 drops/ml (Water); Micro Drop (Pediatric): 60 drops/ml" },
      { "label": "Spike & Air Vent", "value": "Sharp ABS Plastic Spike with Integrated Hydrophobic Anti-Bacterial Air Vent & Cap" },
      { "label": "Fluid Filter Spec", "value": "15 μm / 5 μm / 0.22 μm High-Efficiency Particle Trap Filter at Bottom of Drip Chamber" },
      { "label": "Tubing Dimensions", "value": "Medical Grade Kink-Resistant PVC / DEHP-Free Tubing (Length: 150cm - 200cm, OD 4.0mm)" },
      { "label": "Flow Regulator Options", "value": "Standard Roller Clamp or Precision Dial-A-Flow Regulator (Range: 5 - 250 ml/h)" },
      { "label": "Connectors", "value": "Luer Lock / Luer Slip with Latex or Latex-Free Flashball / Y-Injection Port" }
    ],
    "applications": [
      "Intravenous gravity fluid therapy, saline infusion, and electrolyte administration",
      "Continuous parenteral medication delivery in hospital general and surgical wards",
      "Emergency room rapid fluid resuscitation"
    ],
    "features": [
      "Crystal clear flexible drip chamber allows rapid priming and effortless visual droplet monitoring",
      "Precision fluid filter traps microscopic glass fragments and rubber particles during medication mixing",
      "Kink-proof elastic tubing guarantees continuous, uninterrupted fluid flow even when bent"
    ],
    "seoKeywords": ["IV Infusion Set", "IV Giving Set", "Dial Flow Regulator IV Set", "Precision IV Set", "Medical Drip Set"],
    "certifications": ["CE MDR Class IIa", "FDA 510(k)", "ISO 8536-4", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infusion Section: 一次性使用精密过滤输液器 带微量调节器)"
  },
  {
    "id": "prod-inj-005",
    "categoryId": "injection-infusion",
    "categoryName": "Injection & Infusion Consumables",
    "name": "Sterile IV Cannula / Catheter (with Injection Port & Wings)",
    "model": "IVC-PW1426",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-syringes-infusion.png",
    "rating": 4.9,
    "reviews": 190,
    "isCustomizable": True,
    "shortDesc": "Peripheral intravenous indwelling catheter featuring biocompatible FEP/PUR radiopaque catheter, back-cut Japanese needle point, flexible fixing wings, and one-way injection valve.",
    "specs": [
      { "label": "Gauges & Color Codes", "value": "14G (Orange), 16G (Grey), 18G (Green), 20G (Pink), 22G (Blue), 24G (Yellow), 26G (Violet)" },
      { "label": "Catheter Material", "value": "Radiopaque FEP (Fluorinated Ethylene Propylene) or Polyurethane (PUR Softens in vivo)" },
      { "label": "Needle Bevel", "value": "Ultra-Sharp 3-Facet Back-Cut Stainless Steel Needle (Siliconized)" },
      { "label": "Design Types", "value": "With Injection Port & Flexible Wings / Pen-Like / Safety Auto-Shielding Needle" },
      { "label": "Flashback Chamber", "value": "High-Transparency Flashback Chamber with Porous Hydrophobic Blood Stopper" },
      { "label": "Indwelling Duration", "value": "Up to 72 - 96 Hours Safe Intravenous Indwelling Time" }
    ],
    "applications": [
      "Peripheral intravenous access for continuous medication, blood, and fluid transfusion",
      "Emergency anesthesia access and intensive care vascular line maintenance",
      "Pediatric and geriatric long-term intravenous infusion"
    ],
    "features": [
      "Smooth tapered catheter tip seamlessly matches needle bevel to minimize insertion friction and patient discomfort",
      "Integrated one-way silicone injection valve allows intermittent drug administration without disconnecting IV line",
      "Full-length radiopaque stripes ensure rapid fluoroscopic localization inside blood vessels"
    ],
    "seoKeywords": ["IV Cannula", "IV Catheter", "Intravenous Cannula with Wings", "20G 22G IV Cannula", "Peripheral Venous Catheter"],
    "certifications": ["CE MDR Class IIa", "FDA 510(k)", "ISO 10555-5", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infusion Section: 一次性使用静脉留置针 带注药口与保护翼)"
  },
  {
    "id": "prod-inj-006",
    "categoryId": "injection-infusion",
    "categoryName": "Injection & Infusion Consumables",
    "name": "Scalp Vein Infusion Sets (Butterfly Needles with Flexible Tubing)",
    "model": "SVS-BF1927",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-syringes-infusion.png",
    "rating": 4.8,
    "reviews": 145,
    "isCustomizable": True,
    "shortDesc": "Soft double-wing scalp vein butterfly infusion set with flexible 30cm kink-resistant extension tube and color-coded size identification for small superficial veins.",
    "specs": [
      { "label": "Needle Gauge Sizes", "value": "19G, 20G, 21G, 22G, 23G, 24G, 25G, 26G, 27G (Color-Coded Wings per ISO)" },
      { "label": "Needle Cannula", "value": "Medical Grade Stainless Steel SUS304 with Short Surgical Bevel (Length: 3/4\" / 19mm)" },
      { "label": "Extension Tubing", "value": "30cm Medical Grade Transparent Flexible PVC Tubing (DEHP-Free Available)" },
      { "label": "Wing Configuration", "value": "Textured Flexible Butterfly Wings for Secure Grip and Skin Taping" },
      { "label": "Connector", "value": "Standard Female Luer Lock / Luer Slip with Protective Cap" },
      { "label": "Packaging", "value": "1 pc/sterile polybag or blister pack, 100 pcs/box, 2,000 pcs/carton" }
    ],
    "applications": [
      "Pediatric and neonatal scalp vein intravenous infusions",
      "Geriatric and oncology patients with delicate, fragile, or rolling peripheral veins",
      "Short-term diagnostic blood sampling and intermittent medication delivery"
    ],
    "features": [
      "Flexible butterfly wings facilitate precise needle angle alignment and flat skin taping",
      "Short beveled needle minimizes vessel wall puncture trauma and hematoma formation",
      "Long flexible tubing isolates hand movement from catheter needle during IV line connection"
    ],
    "seoKeywords": ["Scalp Vein Set", "Butterfly Needle", "Butterfly Infusion Set", "Pediatric IV Needle", "Winged Infusion Set"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Infusion Section: 一次性使用头皮静脉针 双翼蝴蝶针带软管)"
  }
]
products.extend(inj)

# ==========================================
# 7. RESPIRATORY & ANESTHESIA SUPPLIES (7 Products)
# ==========================================
resp = [
  {
    "id": "prod-resp-001",
    "categoryId": "respiratory-anesthesia",
    "categoryName": "Respiratory & Anesthesia Supplies",
    "name": "100% Medical Silicone 2-Way & 3-Way Foley Balloon Catheters",
    "model": "FC-SIL100",
    "medicalClass": "Class II / Class IIb",
    "image": "/assets/images/silicone-foley-catheter.png",
    "rating": 5.0,
    "reviews": 260,
    "isCustomizable": True,
    "shortDesc": "100% transparent biocompatible medical silicone Foley balloon urinary catheter with symmetrical balloon, integrated radiopaque line, and soft rounded bullet tip.",
    "specs": [
      { "label": "Catheter Sizes (Fr)", "value": "Pediatric: 6Fr, 8Fr, 10Fr; Adult: 12Fr, 14Fr, 16Fr, 18Fr, 20Fr, 22Fr, 24Fr, 26Fr" },
      { "label": "Lumen Types", "value": "2-Way (Drainage & Balloon Inflation) / 3-Way (Continuous Bladder Irrigation)" },
      { "label": "Balloon Capacity", "value": "Pediatric: 3 - 5ml; Adult Standard: 10 - 30ml Symmetrical Expansion" },
      { "label": "Material Composition", "value": "100% Medical Grade Liquid Silicone Rubber (LSR), 100% Latex-Free" },
      { "label": "Indwelling Duration", "value": "Long-Term Indwelling Wearable up to 29 - 30 Days" },
      { "label": "Packaging", "value": "1 pc/sterile double peel pack, 10 pcs/box, 200 pcs/carton" }
    ],
    "applications": [
      "Acute and chronic urinary retention, neurogenic bladder, and prostate obstruction drainage",
      "Intra-operative and post-operative continuous urine output monitoring in ICU and surgery",
      "Continuous bladder irrigation following urological surgery (TURP) (3-Way Model)"
    ],
    "features": [
      "100% Silicone inert material drastically reduces urethral irritation, encrustation, and strictures",
      "Ultra-wide internal drainage lumen provides up to 30% greater flow rate than latex catheters",
      "Full-length radiopaque X-ray tip and shaft line allows precise fluoroscopic position verification"
    ],
    "seoKeywords": ["Silicone Foley Catheter", "2 Way Foley Catheter", "3 Way Irrigation Catheter", "Latex Free Urinary Catheter", "Medical Indwelling Catheter"],
    "certifications": ["CE MDR Class IIb", "FDA 510(k)", "ISO 13485", "ISO 20696"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Respiratory & Urology Section: 100%医用全硅胶双腔/三腔导尿管)"
  },
  {
    "id": "prod-resp-002",
    "categoryId": "respiratory-anesthesia",
    "categoryName": "Respiratory & Anesthesia Supplies",
    "name": "Sterile Anti-Reflux Urine Drainage Bag (2000ml with Sampling Port)",
    "model": "UDB-AR2000",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/anti-reflux-drainage-bag.png",
    "rating": 4.9,
    "reviews": 185,
    "isCustomizable": True,
    "shortDesc": "Heavy-duty 2000ml closed urinary drainage bag with flutter anti-reflux flutter valve, needleless needle-free urine sampling port, and universal T-tap bottom drainage valve.",
    "specs": [
      { "label": "Bag Volume Capacity", "value": "2000 ml Graduated Volume Scale (Increment: 100ml Bold Markings)" },
      { "label": "Inlet Tubing Spec", "value": "Kink-Resistant Wide-Bore PVC Tubing (Length: 90cm - 120cm, OD 9.0mm)" },
      { "label": "Anti-Reflux Mechanism", "value": "Integrated Internal Flutter Membrane Anti-Reflux Valve (Blocks Retrograde Flow)" },
      { "label": "Bottom Drainage Valve", "value": "T-Valve / Push-Pull Valve / Cross Valve / Lever Tap (One-Hand Operation)" },
      { "label": "Sampling Port", "value": "Needleless Needle-Free Luer-Lock Elastic Membrane Sampling Port" },
      { "label": "Hanging Accessories", "value": "Universal Bed Hanger Hooks with Plastic Clamping Strap" }
    ],
    "applications": [
      "Closed urinary drainage systems connected to Foley catheters in general wards and ICU",
      "Post-surgical urine collection and precise fluid balance record keeping",
      "Prevention of Catheter-Associated Urinary Tract Infections (CAUTI)"
    ],
    "features": [
      "Anti-reflux valve eliminates backward urine migration to bladder during patient movement",
      "Hydrophobic bacterial-tight air filter vent equalizes internal bag pressure for continuous smooth drainage",
      "Needleless sampling port allows safe, puncture-free sterile urine sampling for laboratory culture"
    ],
    "seoKeywords": ["Urine Drainage Bag", "Anti Reflux Urine Bag", "2000ml Urine Bag", "Closed System Drainage Bag", "Medical Urinary Collector"],
    "certifications": ["CE MDR Class I/II", "FDA Listed", "ISO 13485", "ISO 8669-2"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Respiratory & Urology Section: 医用一次性无菌抗反流引流袋 2000ml)"
  },
  {
    "id": "prod-resp-003",
    "categoryId": "respiratory-anesthesia",
    "categoryName": "Respiratory & Anesthesia Supplies",
    "name": "Disposable High-Concentration Oxygen Mask with Reservoir Bag",
    "model": "OM-NRB100",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-respiratory.png",
    "rating": 4.9,
    "reviews": 160,
    "isCustomizable": True,
    "shortDesc": "Non-rebreathing high-concentration oxygen therapy mask equipped with 1000ml reservoir bag, one-way directional safety valves, and 2.1m star-lumen kink-proof oxygen tubing.",
    "specs": [
      { "label": "Oxygen Delivery FiO2", "value": "Delivers High-Concentration Oxygen FiO2 up to 80% - 99% (Flow: 10 - 15 L/min)" },
      { "label": "Reservoir Bag Volume", "value": "1000 ml High-Elasticity Medical Polymer Reservoir Bag" },
      { "label": "Valve Configuration", "value": "Dual One-Way Exhalation Flap Valves + One-Way Reservoir Inhalation Valve" },
      { "label": "Mask Material", "value": "Clear Medical Grade PVC with Soft Rolled Anatomical Edge (DEHP-Free)" },
      { "label": "Oxygen Tube", "value": "2.1m (7ft) Star-Lumen Crush-Resistant Tubing with Standard Universal Connector" },
      { "label": "Sizes Available", "value": "Adult Standard, Adult Elongated, Pediatric Standard, Infant" }
    ],
    "applications": [
      "Emergency room acute hypoxemia, respiratory distress, and carbon monoxide poisoning",
      "Pre-hospital ambulance emergency oxygen resuscitation",
      "Post-anesthesia recovery room (PACU) high-flow oxygenation"
    ],
    "features": [
      "Non-rebreathing design ensures exhaled carbon dioxide is vented out while pure oxygen is inhaled",
      "Star-lumen cross-section ensures continuous oxygen flow even if tubing is bent or compressed",
      "Soft adjustable aluminum nose bridge clip and elastic head strap ensure comfortable air-tight fit"
    ],
    "seoKeywords": ["Non Rebreather Mask", "High Concentration Oxygen Mask", "Oxygen Mask with Reservoir Bag", "Medical Oxygen Mask", "Emergency Respiratory Mask"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Respiratory Section: 一次性医用高浓度带储气囊非重复吸入储氧面罩)"
  },
  {
    "id": "prod-resp-004",
    "categoryId": "respiratory-anesthesia",
    "categoryName": "Respiratory & Anesthesia Supplies",
    "name": "Medical Aerosol Nebulizer Mask & Medication Chamber Kits",
    "model": "NEB-KIT200",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-respiratory.png",
    "rating": 4.8,
    "reviews": 195,
    "isCustomizable": True,
    "shortDesc": "High-efficiency aerosol jet nebulizer kit with 6ml/10ml graduated medication cup delivering fine respirable MMAD < 3.5 μm aerosol mist for pulmonary drug deposition.",
    "specs": [
      { "label": "Aerosol Particle Size (MMAD)", "value": "Mass Median Aerodynamic Diameter (MMAD) 2.5 - 3.5 μm (Fine Particle Fraction > 75%)" },
      { "label": "Nebulization Rate", "value": "≥ 0.35 ml/min (at 6 - 8 L/min Airflow)" },
      { "label": "Medication Chamber Volume", "value": "6 ml / 10 ml Anti-Spill Jar with Graduated Calibration Lines" },
      { "label": "Included Components", "value": "1x Nebulizer Jar, 1x Aerosol Mask (Adult/Pediatric), 1x Angled Mouthpiece, 1x 2.1m Star Tubing" },
      { "label": "Residual Volume", "value": "< 0.5 ml Low Residual Dead Volume" }
    ],
    "applications": [
      "Inhalation drug therapy for asthma, COPD, bronchitis, and cystic fibrosis",
      "Post-extubation airway humidification and bronchodilator aerosol administration",
      "Pediatric and geriatric aerosolized respiratory treatment"
    ],
    "features": [
      "High fine-particle output ensures deep deposition of aerosolized drugs into lower alveoli",
      "Anti-leak threaded jar design functions even at up to 45° angled reclining patient positions",
      "Crystal clear transparent medical PVC provides clear visual monitoring of remaining liquid"
    ],
    "seoKeywords": ["Nebulizer Mask Kit", "Medical Aerosol Jar", "Inhalation Nebulizer Kit", "Jet Nebulizer Mask", "Respiratory Drug Delivery"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Respiratory Section: 医用一次性雾化器面罩咬嘴套装 超微雾化杯连管路)"
  },
  {
    "id": "prod-resp-005",
    "categoryId": "respiratory-anesthesia",
    "categoryName": "Respiratory & Anesthesia Supplies",
    "name": "Endotracheal Tubes with High-Volume Low-Pressure Cuff",
    "model": "ETT-HVLP500",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-respiratory.png",
    "rating": 5.0,
    "reviews": 140,
    "isCustomizable": True,
    "shortDesc": "Oral/nasal tracheal intubation tube with high-volume low-pressure (HVLP) soft cylindrical cuff, Murphy eye, smooth bevel, and full-length radiopaque X-ray line.",
    "specs": [
      { "label": "Inner Diameters (ID)", "value": "Cuffed: ID 5.0mm - 10.0mm (0.5mm Increments); Uncuffed (Pediatric): ID 2.0mm - 5.0mm" },
      { "label": "Cuff Design", "value": "High-Volume Low-Pressure (HVLP) Soft Cylindrical Cuff (Distributes Pressure Evenly)" },
      { "label": "Connector", "value": "Standard 15mm Conical Male Connector (EN ISO 5356-1 Compatible)" },
      { "label": "Tube Features", "value": "Beveled Atraumatic Distal Tip with Smooth Murphy Eye Side Hole" },
      { "label": "Depth Markings", "value": "Accurate Centimeter Depth Graduations + Dual Vocal Cord Positioning Guide Ring" },
      { "label": "Packaging", "value": "1 pc/sterile paper-film blister pouch, 10 pcs/box, 100 pcs/carton" }
    ],
    "applications": [
      "General anesthesia airway management during surgical operations",
      "Emergency endotracheal intubation in resuscitation and trauma care",
      "Mechanical ventilation support in intensive care units (ICU)"
    ],
    "features": [
      "HVLP soft cuff creates an effective low-pressure tracheal seal (< 25 cmH2O) to prevent mucosal ischemia",
      "Thermosensitive medical PVC softens at body temperature to conform comfortably to patient airway anatomy",
      "Full-length radiopaque line verifies tube depth and carina distance on chest X-rays"
    ],
    "seoKeywords": ["Endotracheal Tube", "Cuffed ET Tube", "HVLP Tracheal Tube", "Airway Intubation Tube", "Anesthesia Breathing Tube"],
    "certifications": ["CE MDR Class IIa", "FDA 510(k)", "ISO 5361", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Anesthesia Section: 一次性使用高容低压气囊气管插管 Murphy孔带显影线)"
  },
  {
    "id": "prod-resp-006",
    "categoryId": "respiratory-anesthesia",
    "categoryName": "Respiratory & Anesthesia Supplies",
    "name": "Disposable Anesthesia Breathing Circuits & HME Filter System",
    "model": "ABC-HME200",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-respiratory.png",
    "rating": 4.9,
    "reviews": 115,
    "isCustomizable": True,
    "shortDesc": "Universal expandable and corrugated anesthesia/ventilator breathing circuit kit with dual water traps, Y-piece, 2L latex-free breathing bag, and combined HMEF filter.",
    "specs": [
      { "label": "Circuit Types", "value": "Expandable / Corrugated / Smoothbore Tubing (Length: 1.5m, 1.8m, 3.0m)" },
      { "label": "Diameter Specifications", "value": "Adult: 22mm; Pediatric: 15mm (Flexible Lightweight EVA/PP Medical Polymers)" },
      { "label": "Included Components", "value": "2x Corrugated Limbs, 1x Parallel Y-Piece, 1x Elbow Connector with Gas Sampling Port, 1x 2.0L Latex-Free Bag, 1x HME Filter" },
      { "label": "HME Filter Performance", "value": "Bacterial/Viral Filtration Efficiency ≥ 99.999%, Moisture Output > 30 mg H2O/L at Vt 500ml" },
      { "label": "Standard Connectors", "value": "Conical Connectors 22M/15F and 22F per ISO 5356-1" }
    ],
    "applications": [
      "Connecting patients to anesthesia machines in operating rooms",
      "ICU invasive mechanical ventilators and positive pressure breathing therapy",
      "Airway humidification and viral filtration during closed circuit ventilation"
    ],
    "features": [
      "Expandable tubing compresses to 1/3 of its length for compact storage and shipping freight reduction",
      "Combined Heat and Moisture Exchanger (HMEF) warms and humidifies inspired gases while filtering viruses",
      "100% Leak-tested under high positive pressure before sterile packaging"
    ],
    "seoKeywords": ["Anesthesia Breathing Circuit", "Ventilator Circuit", "Corrugated Breathing Tube", "HME Filter System", "Anesthesia Tubing Set"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 5367", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Anesthesia Section: 一次性麻醉呼吸机回路管路 含HME人工鼻呼吸过滤器)"
  },
  {
    "id": "prod-resp-007",
    "categoryId": "respiratory-anesthesia",
    "categoryName": "Respiratory & Anesthesia Supplies",
    "name": "Disposable Closed Suction Catheter System (24-Hour / 72-Hour)",
    "model": "CSC-72H",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-respiratory.png",
    "rating": 5.0,
    "reviews": 88,
    "isCustomizable": True,
    "shortDesc": "Closed-circuit endotracheal suction system with protective PU sleeve, isolating valve, irrigation port, and depth markings for continuous mechanical ventilation.",
    "specs": [
      { "label": "Catheter Sizes (Fr)", "value": "6Fr, 8Fr, 10Fr (Pediatric); 12Fr, 14Fr, 16Fr (Adult Length: 54cm)" },
      { "label": "Indwelling Duration", "value": "24-Hour / 72-Hour Extended Safe Clinical Usage Cycle" },
      { "label": "Protective Sleeve", "value": "Ultra-Soft High-Tactile Polyurethane (PU) Sleeve with Zero Drag" },
      { "label": "Airway Connector", "value": "Double Swivel Elbow with MDI Drug Port and Bronchoscopy Port" },
      { "label": "Safety Valve", "value": "Push-to-Suction Button with 180° Mechanical Lock Ring" },
      { "label": "Sterility", "value": "EO Gas Sterile Individual Procedural Pack, 10 pcs/box" }
    ],
    "applications": [
      "Tracheobronchial suctioning of mechanically ventilated ICU patients without breaking circuit",
      "Prevention of Ventilator-Associated Pneumonia (VAP) and environmental aerosol contamination",
      "High PEEP ventilation maintenance during secretion clearance"
    ],
    "features": [
      "Permits deep airway suctioning without disconnecting the ventilator, maintaining positive end-expiratory pressure (PEEP)",
      "Isolating valve and flush chamber allow complete catheter tip cleansing after each suction procedure",
      "Protects ICU nursing staff from infectious bio-aerosol exposure per hospital infection control protocols"
    ],
    "seoKeywords": ["Closed Suction Catheter", "Closed Suction System", "72 Hour Suction Catheter", "VAP Prevention Catheter", "Tracheal Suction Tube"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Respiratory Section: 一次性使用密闭式吸痰管系统 防交叉感染带冲洗口)"
  }
]
products.extend(resp)

# ==========================================
# 8. CLINICAL DIAGNOSTICS & LAB CONSUMABLES (7 Products)
# ==========================================
diag = [
  {
    "id": "prod-diag-001",
    "categoryId": "diagnostic-specimen",
    "categoryName": "Clinical Diagnostics & Laboratory Consumables",
    "name": "Medical Acoustic Ultrasound Transmission Coupling Gel",
    "model": "USG-MED250",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/ultrasound-gel.png",
    "rating": 5.0,
    "reviews": 340,
    "isCustomizable": True,
    "shortDesc": "High-acoustic conductivity water-soluble ultrasound gel formulation with neutral pH (6.5 - 7.0), zero bubble artifacts, and anti-drying skin moisturizing agents.",
    "specs": [
      { "label": "Packaging Options", "value": "250 ml Squeeze Bottle with Dispenser Cap, 5.0 Litre Cubitainer Bulk Refill with Pump" },
      { "label": "Acoustic Velocity", "value": "1520 - 1620 m/s (Matched Closely to Human Soft Tissue Acoustics)" },
      { "label": "Acoustic Impedance", "value": "1.50 - 1.65 x 10⁶ kg/(m²·s) for Reflection-Free Transducer Wave Coupling" },
      { "label": "Physical Characteristics", "value": "Crystal Clear Colorless / Blue Viscous Gel, Odorless, Non-Greasy, Non-Staining" },
      { "label": "Chemical Safety", "value": "Water-Soluble, Salt-Free, Formaldehyde-Free, Non-Corrosive to Transducer Rubber Face" }
    ],
    "applications": [
      "Diagnostic ultrasonic imaging (cardiac, abdominal, vascular Doppler, OB/GYN, small parts)",
      "Physiotherapy ultrasonic rehabilitation and shockwave acoustic transmission",
      "Doppler fetal heart rate monitors and IPL laser cosmetic procedures"
    ],
    "features": [
      "Provides crystal-clear acoustic transmission without micro-bubble acoustic artifacts or signal attenuation",
      "Thixotropic formula stays on probe and skin without running or drying out during extended scans",
      "Hypoallergenic formula leaves zero residue and wipes away effortlessly with a paper towel"
    ],
    "seoKeywords": ["Ultrasound Gel", "Medical Coupling Gel", "Acoustic Transmission Gel", "Ultrasound Transmission Gel", "5L Ultrasound Gel"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 22 & 24: 医用超声耦合剂 水溶性高透声无气泡 250ml/5L包装)"
  },
  {
    "id": "prod-diag-002",
    "categoryId": "diagnostic-specimen",
    "categoryName": "Clinical Diagnostics & Laboratory Consumables",
    "name": "Vacuum Blood Collection Tubes (EDTA, Clot, Gel, Heparin, Citrate)",
    "model": "BCT-VAC100",
    "medicalClass": "Class II / Class IIa (IVD)",
    "image": "/assets/images/cat-lab-diagnostic.png",
    "rating": 5.0,
    "reviews": 460,
    "isCustomizable": True,
    "shortDesc": "Sterile vacuum blood collection tubes manufactured from medical PET / glass with color-coded safety caps and precision additive ratios per ISO 6710 standards.",
    "specs": [
      { "label": "Tube Sizes & Draw Volumes", "value": "13x75mm (1ml - 4ml), 13x100mm (5ml - 7ml), 16x100mm (8ml - 10ml)" },
      { "label": "Available Additive Formulations", "value": "Lavender (EDTA K2/K3), Red (Clot Activator), Yellow (Gel & Clot Activator), Blue (Sodium Citrate 1:9 PT/INR), Green (Lithium Heparin), Gray (Glucose Fluoride), Black (ESR 1:4)" },
      { "label": "Tube Materials", "value": "High-Transparency Shatterproof PET (Polyethylene Terephthalate) or Medical Glass" },
      { "label": "Cap Safety Design", "value": "ISO 6710 Standardized Color Hemogard / Rubber Stopper Protective Cap" },
      { "label": "Packaging", "value": "100 pcs/foam rack tray, 12 trays/carton (1,200 pcs/carton)" }
    ],
    "applications": [
      "Clinical laboratory complete blood count (CBC), hematology, and blood grouping",
      "Serum clinical biochemistry, immunology, hormone, and therapeutic drug monitoring",
      "Coagulation function (PT, APTT, Fibrinogen) and erythrocyte sedimentation rate (ESR)"
    ],
    "features": [
      "Precisely calibrated draw volume ensures accurate blood-to-additive ratio for dependable test results",
      "Ultra-smooth siliconized inner wall prevents cell damage and hemolysis during centrifuging",
      "High-density inert polymer gel guarantees stable serum separation for up to 48 hours"
    ],
    "seoKeywords": ["Vacuum Blood Collection Tube", "EDTA Blood Tube", "Gel Clot Tube", "Serum Separator Tube", "Vacutainer Blood Tube"],
    "certifications": ["CE IVDR / CE MDR", "FDA Listed", "ISO 6710", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Lab Diagnostic Section: 医用一次性真空采血管 紫盖/红盖/黄盖/绿盖/蓝盖)"
  },
  {
    "id": "prod-diag-003",
    "categoryId": "diagnostic-specimen",
    "categoryName": "Clinical Diagnostics & Laboratory Consumables",
    "name": "Sterile Urine & Stool Specimen Collection Cups (with Screw Cap)",
    "model": "UCC-60120",
    "medicalClass": "Class I (IVD)",
    "image": "/assets/images/cat-lab-diagnostic.png",
    "rating": 4.8,
    "reviews": 210,
    "isCustomizable": True,
    "shortDesc": "Leak-proof graduated polypropylene specimen container with leak-tight screw cap, matte frosted patient recording label, and optional integrated spoon / vacuum transfer port.",
    "specs": [
      { "label": "Volume Capacities", "value": "30ml, 60ml, 90ml, 120ml (Molded Metric ml & oz Graduation Scale)" },
      { "label": "Material Composition", "value": "Ultra-Clear Crack-Resistant Polypropylene (PP), High-Density PE Screw Cap" },
      { "label": "Cap Colors & Types", "value": "Yellow, Red, Blue, Green Screw Cap (With / Without Stool Collection Spoon)" },
      { "label": "Leak-Proof Performance", "value": "Tested to 95 kPa Pressure Differential to Prevent Leakage during Pneumatic Tube Transport" },
      { "label": "Sterility", "value": "EO Gas Sterile Individual Polybag or Non-Sterile Nested Bulk Pack" }
    ],
    "applications": [
      "Urinalysis routine screening, urine sediment cytology, and microbiological urine culture",
      "Stool occult blood, parasitology examination, and sputum clinical collection",
      "Drug abuse screening and diagnostic pathology specimen preservation"
    ],
    "features": [
      "Precision threaded closure guarantees 100% leak-proof seal during transport and shaking",
      "Large frosted writable label for patient name, hospital ID, and collection time recording",
      "Sterile individual packaging eliminates pre-analytical sample contamination"
    ],
    "seoKeywords": ["Urine Specimen Cup", "Stool Collection Container", "Sterile Specimen Cup", "60ml 120ml Urine Container", "Sample Collection Jar"],
    "certifications": ["CE IVDR / CE MDR", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Lab Diagnostic Section: 一次性医用无菌尿液/便常规样本采集盒 60ml/120ml)"
  },
  {
    "id": "prod-diag-004",
    "categoryId": "diagnostic-specimen",
    "categoryName": "Clinical Diagnostics & Laboratory Consumables",
    "name": "Flocked Sterile Specimen Sampling Swabs with Transport Medium",
    "model": "SWB-FLK100",
    "medicalClass": "Class I / Class IIa (IVD)",
    "image": "/assets/images/cat-lab-diagnostic.png",
    "rating": 4.9,
    "reviews": 310,
    "isCustomizable": True,
    "shortDesc": "Perpendicular nylon flocked diagnostic sampling swab featuring precision molded breakpoint shaft and viral transport medium (VTM/UTM) for superior sample release.",
    "specs": [
      { "label": "Swab Tip Material", "value": "Electrostatic Sprayed Perpendicular Nylon Fiber Flocking (Maximum Surface Elution)" },
      { "label": "Shaft Material & Breakpoint", "value": "Medical Grade Molded ABS / Polystyrene Shaft with 80mm / 30mm Molded Breakpoint" },
      { "label": "Swab Variants", "value": "Nasopharyngeal Flocked Swab (Ultra-Thin Flexible Tip), Oropharyngeal Throat Swab (Standard Tip)" },
      { "label": "Transport Medium", "value": "Available with 3ml VTM (Viral Transport Medium) / Inactivated VTM / Amies / Stuart Medium" },
      { "label": "Sterility & Packaging", "value": "EO Gas / Gamma Sterilized, 1 pc/peel pack, 100 pcs/box, 5,000 pcs/carton" }
    ],
    "applications": [
      "Nasopharyngeal and throat clinical sampling for COVID-19, Influenza A/B, RSV, and Strep A",
      "Microbiological bacterial and fungal clinical culture collection",
      "Forensic DNA sampling and genetic diagnostic testing"
    ],
    "features": [
      "Nylon flocking technology releases up to 90% of collected biological sample compared to only 20% in standard cotton swabs",
      "Flexible shaft smoothly navigates narrow nasal cavities without causing patient pain or mucosal bleeding",
      "Molded breakpoint snaps cleanly into transport vials without aerosolizing specimen"
    ],
    "seoKeywords": ["Flocked Swab", "Nasopharyngeal Swab", "Throat Sampling Swab", "VTM Transport Swab", "Sterile Flocked Swab"],
    "certifications": ["CE IVDR / CE MDR", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Lab Diagnostic Section: 无菌植绒鼻拭子/咽拭子采样拭子 带断点)"
  },
  {
    "id": "prod-diag-005",
    "categoryId": "diagnostic-specimen",
    "categoryName": "Clinical Diagnostics & Laboratory Consumables",
    "name": "Medical Disposable Safety Blood Lancets (Pressure-Activated)",
    "model": "SBL-PA28G",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-lab-diagnostic.png",
    "rating": 4.9,
    "reviews": 170,
    "isCustomizable": True,
    "shortDesc": "Single-use pressure-activated sterile safety lancet with automatic needle retraction and locking mechanism to provide painless capillary capillary blood puncture.",
    "specs": [
      { "label": "Needle Gauges & Depths", "value": "21G (2.4mm - High Flow), 23G (1.8mm - Medium Flow), 26G (1.5mm), 28G (1.2mm - Low Flow / Pediatric)" },
      { "label": "Activation Method", "value": "Contact Pressure Activation (Automatic Firing upon Firm Skin Contact)" },
      { "label": "Safety Mechanism", "value": "Needle Automatically Retracts and Locks Inside Housing Permanently after Triggering" },
      { "label": "Needle Tip", "value": "Electro-Polished Tri-Bevel Needle Point with Medical Silicone Lubricant" },
      { "label": "Sterility & Packaging", "value": "Gamma Radiation Sterilized, 100 pcs/box, 20 boxes/carton (2,000 pcs/carton)" }
    ],
    "applications": [
      "Capillary blood sampling for blood glucose monitoring (diabetes care)",
      "Hemoglobin, blood gas, cholesterol, and infectious disease rapid test kits",
      "Pediatric heel-stick metabolic screening"
    ],
    "features": [
      "Pressure-activated technology guarantees consistent puncture depth regardless of clinician technique",
      "Ultra-high speed linear puncture (< 0.02 seconds) significantly minimizes pain perception",
      "100% Permanently retracts inside enclosure, eliminating any possibility of accidental needle-stick injuries"
    ],
    "seoKeywords": ["Safety Blood Lancet", "Pressure Activated Lancet", "Single Use Lancet", "Capillary Blood Lancet", "Sterile Safety Lancet"],
    "certifications": ["CE MDR Class IIa", "FDA 510(k)", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Lab Diagnostic Section: 医用一次性压力式安全采血针 自动回缩)"
  },
  {
    "id": "prod-diag-006",
    "categoryId": "diagnostic-specimen",
    "categoryName": "Clinical Diagnostics & Laboratory Consumables",
    "name": "Laboratory Microcentrifuge Tubes & Cryogenic Storage Vials",
    "model": "MCT-CRYO15",
    "medicalClass": "Class I (IVD)",
    "image": "/assets/images/cat-lab-diagnostic.png",
    "rating": 4.8,
    "reviews": 130,
    "isCustomizable": True,
    "shortDesc": "High-clarity virgin polypropylene microcentrifuge tubes (1.5ml/2.0ml) and self-standing silicone O-ring cryogenic storage vials withstanding up to 20,000 x g RCF.",
    "specs": [
      { "label": "Tube Capacities", "value": "0.5ml, 1.5ml, 2.0ml (Snap-Cap Microcentrifuge Tube); 1.8ml, 2.0ml, 5.0ml (Cryogenic Vial)" },
      { "label": "Centrifugal Resistance (RCF)", "value": "Withstands High-Speed Centrifugation up to 20,000 x g (25,000 RCF for PCR Tubes)" },
      { "label": "Temperature Range", "value": "-196°C (Liquid Nitrogen Vapor Phase) up to +121°C (Autoclavable at 15 psi, 15 min)" },
      { "label": "Purity Certification", "value": "Certified DNase, RNase, Protease, Human DNA, and Endotoxin/Pyrogen-Free" },
      { "label": "Cap Seal", "value": "Leak-Proof Snap Cap with Piercing Thumb Pad / Internal Silicone O-Ring Threaded Cap" }
    ],
    "applications": [
      "Molecular biology PCR, DNA/RNA extraction, and protein sample centrifugation",
      "Biological specimen biobank cryogenic cryo-preservation (cells, virus, serum)",
      "Clinical laboratory diagnostic reagent micro-aliquoting"
    ],
    "features": [
      "Frosted writing surface on side wall and flat top cap for clear specimen labeling",
      "Molded accurate graduations in 0.1ml increments for rapid liquid volume estimation",
      "Optically clear virgin polymer ensures high visibility of pellets and interfaces"
    ],
    "seoKeywords": ["Microcentrifuge Tubes", "Cryogenic Vials", "1.5ml Eppendorf Tube", "Cryo Storage Tubes", "PCR Micro Tubes"],
    "certifications": ["CE IVD", "FDA Listed", "ISO 13485", "RNase/DNase Free Certified"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Lab Diagnostic Section: 实验室无酶微量离心管与螺口低温冻存管)"
  },
  {
    "id": "prod-diag-007",
    "categoryId": "diagnostic-specimen",
    "categoryName": "Clinical Diagnostics & Laboratory Consumables",
    "name": "Precision Universal Pipette Tips with Aerosol Filter (DNase/RNase Free)",
    "model": "PPT-FLT1000",
    "medicalClass": "Class I (IVD)",
    "image": "/assets/images/cat-lab-diagnostic.png",
    "rating": 4.9,
    "reviews": 220,
    "isCustomizable": True,
    "shortDesc": "Universal-fit hydrophobic polyethylene aerosol barrier pipette tips manufactured in Class 100,000 cleanroom with low-retention surface technology.",
    "specs": [
      { "label": "Volume Sizes", "value": "10μl (Short/Extended), 20μl, 100μl, 200μl, 1000μl (1ml), 1250μl, 5ml, 10ml" },
      { "label": "Filter Material", "value": "High-Density Hydrophobic Pure Sintered Polyethylene (PE) Particle/Aerosol Barrier" },
      { "label": "Surface Coating", "value": "Ultra-Low Retention (Superhydrophobic Inner Wall Reduces Sample Loss < 0.1%)" },
      { "label": "Pipettor Compatibility", "value": "Universal Conical Fit Compatible with Eppendorf, Gilson, Rainin, Thermo Fisher Pipettors" },
      { "label": "Purity Guarantee", "value": "Sterile, Certified RNase/DNase/Endotoxin/ATP/PCR Inhibitor Free" },
      { "label": "Packaging", "value": "96 Tips/Autoclavable Hinged Rack (10 Racks/Pack) or 1,000 Tips/Bag Bulk" }
    ],
    "applications": [
      "Quantitative real-time PCR (qPCR), RT-PCR, and next-generation sequencing (NGS) pipetting",
      "Radioactive isotope and infectious biological liquid handling",
      "Clinical laboratory diagnostic reagent micro-dispensing"
    ],
    "features": [
      "Sintered PE aerosol barrier stops vapors, radioactive tracers, and aerosols from contaminating pipette barrel",
      "Low retention technology ensures maximum delivery of costly enzymes, reagents, and viscous liquids",
      "Fine tapered tip design allows effortless liquid discharge into 96-well and 384-well PCR microplates"
    ],
    "seoKeywords": ["Filter Pipette Tips", "Barrier Pipette Tips", "Low Retention Tips", "1000ul Filter Tips", "Sterile PCR Pipette Tips"],
    "certifications": ["CE IVD", "FDA Listed", "ISO 13485", "Cleanroom Class 100k Certified"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Lab Diagnostic Section: 实验室无热原带滤芯吸头枪头 10/200/1000ul)"
  }
]
products.extend(diag)

print(f"Total products assembled: {len(products)}")

# Write to products.js directly!
js_content = "export const FEATURED_PRODUCTS = " + json.dumps(products, ensure_ascii=False, indent=2) + ";\n"

# Replace boolean and keys to clean JS syntax if needed
with open('src/data/products.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully generated src/data/products.js with {len(products)} products!")
