# -*- coding: utf-8 -*-
import json, os

with open('catalog_part2.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# ==========================================
# 3. WOUND CARE & SURGICAL DRESSINGS (9 Products)
# ==========================================
wound = [
  {
    "id": "prod-wound-001",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "Bordered Silicone Foam Dressing with Safetac Layer",
    "model": "BFD-SI100",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/silicone-foam-dressing.png",
    "rating": 5.0,
    "reviews": 184,
    "isCustomizable": True,
    "shortDesc": "Five-layer absorbent polyurethane foam dressing with gentle silicone adhesive border designed for exuding chronic wounds and pressure ulcer prevention.",
    "specs": [
      { "label": "Available Sizes", "value": "7.5x7.5cm, 10x10cm, 12.5x12.5cm, 15x15cm, 18x18cm (Sacral & Heel Anatomical Shapes)" },
      { "label": "Layer Construction", "value": "Breathable Waterproof PU Film + Superabsorbent Core + Polyurethane Foam Pad + Perforated Soft Silicone Contact Layer" },
      { "label": "Fluid Absorption Capacity", "value": "≥ 120 g / 100 cm² (High-Exudate Lock Retention)" },
      { "label": "Moisture Vapor Transmission (MVTR)", "value": "≥ 3,000 g/m²/24h" },
      { "label": "Sterilization & Indwelling", "value": "EO Gas Sterilized, Up to 7 Days Indwelling Wear Time" },
      { "label": "Packaging", "value": "1 pc/sterile peel pack, 10 packs/box, 20 boxes/carton" }
    ],
    "applications": [
      "Pressure ulcers (Stages II-IV) and sacral/heel pressure injury prevention",
      "Venous and arterial leg ulcers, diabetic foot ulcers (DFU)",
      "Post-operative surgical incisions, donor sites, and 2nd degree burns"
    ],
    "features": [
      "Soft silicone adhesive adheres gently to dry surrounding skin without sticking to moist wound beds",
      "Painless, atraumatic removal preserves newly formed granulation tissue",
      "Waterproof and bacterial barrier allows patient showering while preventing external contamination"
    ],
    "seoKeywords": ["Silicone Foam Dressing", "Bordered Foam Dressing", "Sacral Foam Dressing", "Pressure Ulcer Dressing", "Exudate Foam Dressing"],
    "certifications": ["CE MDR Class IIa", "FDA 510(k)", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "wound-patient",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 医用硅胶泡沫敷料 自粘性边框型透气减压垫)"
  },
  {
    "id": "prod-wound-002",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "Sterile Hydrocolloid Wound Dressing (Thin / Sacral Shape)",
    "model": "HCD-TH050",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/hydrocolloid-dressing.png",
    "rating": 4.9,
    "reviews": 110,
    "isCustomizable": True,
    "shortDesc": "Self-adhesive hydrocolloid dressing containing sodium carboxymethylcellulose (CMC) that forms a moist gel upon contact with exudate to accelerate autolytic debridement.",
    "specs": [
      { "label": "Sizes & Thickness", "value": "10x10cm, 15x15cm, 20x20cm (Thickness: 0.3mm Ultra-Thin, 1.5mm Standard)" },
      { "label": "Composition", "value": "Hydrophilic CMC Polymer Matrix Coated with Semi-Permeable PU Film" },
      { "label": "Gel Formation Rate", "value": "Forms cohesive protective moist gel within 15 minutes of exudate contact" },
      { "label": "Border Configuration", "value": "Bordered Beveled Edge / Non-Bordered Flat Sheet Options" },
      { "label": "Packaging", "value": "Individual Sterile Blister Pouch, 10 pcs/box" }
    ],
    "applications": [
      "Light to moderately exuding superficial wounds, abrasions, and donor sites",
      "Stage I and Stage II pressure sores, superficial burns",
      "Protection of vulnerable skin from shear and friction"
    ],
    "features": [
      "Maintains optimal moist wound healing environment to promote epithelialization",
      "Semi-translucent matrix allows visual inspection of wound bed without removing dressing",
      "Impermeable to bacteria and viruses, reducing risk of secondary clinical infection"
    ],
    "seoKeywords": ["Hydrocolloid Dressing", "Thin Hydrocolloid", "Hydrocolloid Sacral Patch", "Moist Wound Dressing", "CMC Wound Care"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "wound-patient",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 医用水胶体敷料 超薄型/骶尾型压疮水胶体贴)"
  },
  {
    "id": "prod-wound-003",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "Waterproof Transparent PU Film IV Cannula Dressing",
    "model": "TFD-IV607",
    "medicalClass": "Class I / Class IIa",
    "image": "/assets/images/transparent-pu-film-dressing.png",
    "rating": 4.9,
    "reviews": 240,
    "isCustomizable": True,
    "shortDesc": "Semi-permeable transparent polyurethane film dressing with framed delivery system, notched catheter cutout, and sterile securing adhesive tape strips.",
    "specs": [
      { "label": "Standard Dimensions", "value": "6x7cm, 7x8.5cm, 8.5x10.5cm, 10x12cm (With / Without U-Shaped Slit)" },
      { "label": "Film Material", "value": "High-MVTR Medical Polyurethane (PU) Film (Thickness: 20 - 25 μm)" },
      { "label": "Moisture Vapor Transmission (MVTR)", "value": "≥ 2,500 g/m²/24h" },
      { "label": "Adhesive Type", "value": "Hypoallergenic Medical Acrylic Pressure-Sensitive Adhesive" },
      { "label": "Accessories Included", "value": "Includes Non-Woven Reinforcement Border Tape + Date/Time Recording Label" },
      { "label": "Sterility", "value": "EO Gas Sterilized, 50 or 100 pcs/box" }
    ],
    "applications": [
      "Fixation and site protection for peripheral IV cannulas, central venous catheters (CVC), and PICC lines",
      "Superficial post-operative closed surgical incision coverage",
      "Skin tear and minor abrasion waterproof protection"
    ],
    "features": [
      "Crystal clear transparent film enables continuous visual monitoring of catheter puncture site without dressing changes",
      "Framed window design prevents film wrinkling and sticking to gloves during application",
      "High MVTR prevents moisture accumulation beneath dressing, minimizing bacterial colonization"
    ],
    "seoKeywords": ["Transparent PU Dressing", "IV Cannula Dressing", "PICC Line Dressing", "Waterproof IV Film", "Medical Adhesive Film"],
    "certifications": ["CE MDR Class I/II", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 防水透明PU医用留置针敷贴 带固定胶带与记录条)"
  },
  {
    "id": "prod-wound-004",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "100% Cotton Sterile Medical Gauze Swabs & Lap Sponges (with X-Ray)",
    "model": "MGS-XR100",
    "medicalClass": "Class I / Class IIa",
    "image": "/assets/images/cat-wound-care.png",
    "rating": 4.9,
    "reviews": 310,
    "isCustomizable": True,
    "shortDesc": "Hospital-grade pure bleached 100% cotton absorbent gauze swabs and abdominal laparotomy sponges with heat-sealed radiopaque X-ray detectable barium sulfate threads.",
    "specs": [
      { "label": "Sizes Available", "value": "5x5cm, 7.5x7.5cm, 10x10cm, 10x20cm; Lap Sponges: 30x30cm, 45x45cm" },
      { "label": "Mesh Thread Counts", "value": "13, 17, 20 Threads/cm² (40s/40s Pure Bleached 100% Cotton Yarn)" },
      { "label": "Ply Construction", "value": "8-Ply, 12-Ply, 16-Ply with Folded Edges (Zero Loose Threads / Lint)" },
      { "label": "X-Ray Detectability", "value": "Embedded ≥ 60% Barium Sulfate (BaSO4) Radiopaque Thread / Blue Loop" },
      { "label": "Absorption Rate", "value": "Sinking Time < 5 Seconds (High Liquid Absorbency > 23 g/g)" },
      { "label": "Packaging Options", "value": "Sterile Peel Pack (1 pc, 2 pcs, 5 pcs/pack) or Non-Sterile Bulk (100 pcs/pack)" }
    ],
    "applications": [
      "Operating room intra-operative surgical cavity blood and fluid absorption",
      "Wound cleansing, packing, disinfection, and post-operative sterile dressing",
      "Hospital emergency ward wound exudate management"
    ],
    "features": [
      "100% Chlorine-free bleached pure cotton conforms to European Pharmacopoeia (EP) and USP standards",
      "Precision machine folded edges prevent unravelling and loose cotton lint inside wound cavities",
      "Radiopaque marker ensures rapid detection under X-ray imaging in surgical cavities"
    ],
    "seoKeywords": ["Medical Gauze Swabs", "Sterile Laparotomy Sponges", "X-Ray Gauze Swabs", "Cotton Gauze Pads", "Surgical Sponges"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485", "EN 14079"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 100%医用脱脂棉纱布块 带X射线钡线显影线)"
  },
  {
    "id": "prod-wound-005",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "Medical Zinc Oxide Adhesive Plaster Surgical Tape",
    "model": "ZOT-500C",
    "medicalClass": "Class I",
    "image": "/assets/images/cat-wound-care.png",
    "rating": 4.8,
    "reviews": 142,
    "isCustomizable": True,
    "shortDesc": "High-tensile 100% cotton fabric adhesive tape formulated with natural zinc oxide mass for reliable surgical dressing, tubing, and splint immobilization.",
    "specs": [
      { "label": "Width & Length", "value": "1.25cm, 2.5cm, 5.0cm, 7.5cm, 10.0cm x 5m / 10m (Spool & Metal Core / Plastic Core)" },
      { "label": "Backing Material", "value": "100% High-Grade Cotton Fabric (White / Skin Flesh Color)" },
      { "label": "Adhesive Formulation", "value": "Medical Zinc Oxide Natural Rubber / Synthetic Adhesive Mass" },
      { "label": "Edge Configuration", "value": "Serrated / Zigzag Edge for Easy Transverse Hand Tearing (No Scissors Required)" },
      { "label": "Adhesive Strength", "value": "≥ 1.5 N/cm Initial Tack, Residue-Free Skin Removal" }
    ],
    "applications": [
      "Securing bulky surgical dressings, post-operative gauze pads, and wound drainage tubes",
      "Fixation of orthopedic splints, compression bandaging, and sports injury strapping",
      "Catheter and medical tubing skin anchoring"
    ],
    "features": [
      "Zinc oxide component provides soothing, skin-friendly protection with reduced allergic reaction risk",
      "Micro-porous breathable cotton weave permits skin perspiration without loosening adhesion",
      "High tensile strength resists stretching under heavy mechanical joint movement"
    ],
    "seoKeywords": ["Zinc Oxide Plaster", "Medical Adhesive Tape", "Cotton Surgical Tape", "Zinc Oxide Tape", "Hospital Strapping Tape"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 医用氧化锌纯棉布胶布 高粘性透气手术固定胶带)"
  },
  {
    "id": "prod-wound-006",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "Sterile Hydrogel Burn & Wound Healing Dressing",
    "model": "HGD-BN200",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/hydrocolloid-dressing.png",
    "rating": 4.9,
    "reviews": 74,
    "isCustomizable": True,
    "shortDesc": "High-water content (≥ 80%) amorphous and sheet hydrogel dressing providing instantaneous cooling, pain relief, and moisture donation for dry necrotic wounds and burns.",
    "specs": [
      { "label": "Dimensions", "value": "5x5cm, 10x10cm, 15x20cm, Face Mask Burn Shape, 25g/50g Tube Gel" },
      { "label": "Water Content", "value": "≥ 80% Purified Water Bound in Cross-Linked Polyacrylamide / CMC Hydrogel Matrix" },
      { "label": "Cooling Duration", "value": "Provides sustained cooling relief for up to 6 hours post-application" },
      { "label": "Sterilization", "value": "Gamma Irradiation Sterilized (Individually Foil Sealed)" }
    ],
    "applications": [
      "1st and 2nd degree thermal burns, scalds, radiation dermatitis, and sunburns",
      "Dry, sloughy necrotic wounds requiring autolytic moisture donation and gentle debridement",
      "Laser cosmetic skin post-treatment soothing"
    ],
    "features": [
      "Delivers immediate soothing cooling effect to dissipate thermal heat and alleviate acute pain",
      "Rehydrates dry necrotic tissue to facilitate painless autolytic wound debridement",
      "Non-adherent formulation ensures pain-free dressing removal without trauma to regenerating dermis"
    ],
    "seoKeywords": ["Hydrogel Burn Dressing", "Cooling Burn Pad", "Hydrogel Wound Sheet", "Amorphous Hydrogel", "Thermal Burn Care"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "wound-patient",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 医用水凝胶烧烫伤敷料 降温止痛清创敷贴)"
  },
  {
    "id": "prod-wound-007",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "Sterile Non-Woven Island Wound Dressing with Absorbent Pad",
    "model": "NWD-IS100",
    "medicalClass": "Class I / Class IIa",
    "image": "/assets/images/silicone-foam-dressing.png",
    "rating": 4.9,
    "reviews": 160,
    "isCustomizable": True,
    "shortDesc": "Soft, conformable spunlace non-woven backing adhesive dressing featuring a central absorbent non-adherent pad for post-surgical incisions and lacerations.",
    "specs": [
      { "label": "Sizes Available", "value": "6x7cm, 8x10cm, 10x15cm, 10x20cm, 10x25cm, 10x30cm (Long Incision Dressing)" },
      { "label": "Backing Material", "value": "Elastic Spunlace Polyester / Viscose Non-Woven Fabric (Hypoallergenic)" },
      { "label": "Central Pad", "value": "Highly Absorbent Viscose/Polyolefin Pad with Perforated PE Anti-Stick Wound Contact Film" },
      { "label": "Adhesive Mass", "value": "Medical Polyacrylate Adhesive (Porous Breathable Coating)" },
      { "label": "Packaging", "value": "1 pc/sterile paper pouch, 25 or 50 pcs/box" }
    ],
    "applications": [
      "Post-operative surgical incision wound protection (orthopedic, abdominal, obstetric C-section)",
      "Acute cuts, lacerations, sutured incisions, and puncture wounds",
      "Clinic and outpatient primary wound dressing"
    ],
    "features": [
      "Highly conformable to awkward body contours (knees, elbows, shoulders) without restricting movement",
      "Non-stick central pad prevents dressing adhesion to healing incisions",
      "High breathability allows skin perspiration, preventing maceration around wound margins"
    ],
    "seoKeywords": ["Non Woven Island Dressing", "Post-Op Wound Dressing", "Adhesive Island Dressing", "Sterile Surgical Incision Dressing", "Non-Stick Wound Pad"],
    "certifications": ["CE MDR Class I/II", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 一次性无纺布自粘伤口敷贴 透气护创敷料)"
  },
  {
    "id": "prod-wound-008",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "Paraffin Gauze Dressing / Tulle Gras Sterile Pad",
    "model": "PGD-TG100",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-wound-care.png",
    "rating": 4.8,
    "reviews": 92,
    "isCustomizable": True,
    "shortDesc": "Sterile open-mesh leno weave cotton gauze uniformly impregnated with white soft paraffin petroleum jelly to soothe burns and prevent secondary dressing adhesion.",
    "specs": [
      { "label": "Standard Sizes", "value": "5x5cm, 10x10cm, 10x20cm, 10x40cm, 20x40cm (Roll / Single Sheet)" },
      { "label": "Gauze Construction", "value": "100% Cotton Bleached Leno Weave Gauze (Interlocking Threads Prevent Fraying)" },
      { "label": "Impregnation Formula", "value": "Medical White Soft Paraffin / Petrolatum BP (≥ 175 g/m² Loading)" },
      { "label": "Sterility & Packaging", "value": "Gamma Sterilized, Sealed in Aluminum Foil Moisture-Proof Pouch, 10 pcs/box" }
    ],
    "applications": [
      "Superficial burns, scalds, and donor/recipient skin graft sites",
      "Traumatic abrasions, lacerations, skin loss wounds, and leg ulcers",
      "Circumcision and post-surgical reconstructive wound beds"
    ],
    "features": [
      "Non-adherent interface allows wound exudate to pass freely into a secondary absorbent dressing",
      "Paraffin coating soothes damaged nerve endings to reduce pain during dressing changes",
      "Protects fragile delicate epithelial tissue from disruption during dressing removal"
    ],
    "seoKeywords": ["Paraffin Gauze Dressing", "Tulle Gras Dressing", "Petrolatum Gauze Pad", "Non-Adherent Burn Dressing", "Vaseline Gauze"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485", "BP Standards"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "wound-patient",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 凡士林油纱布敷料 无菌防粘连凡士林纱布片)"
  },
  {
    "id": "prod-wound-009",
    "categoryId": "wound-care-dressings",
    "categoryName": "Wound Care & Surgical Dressings",
    "name": "High-Elastic Medical Compression Bandage (with Metal Clips)",
    "model": "HEB-CP100",
    "medicalClass": "Class I",
    "image": "/assets/images/cat-wound-care.png",
    "rating": 4.8,
    "reviews": 115,
    "isCustomizable": True,
    "shortDesc": "Durable cotton-polyurethane elastic compression bandage providing consistent, graduated sustained pressure for orthopedic support, edema control, and sprain immobilization.",
    "specs": [
      { "label": "Width & Stretched Length", "value": "5cm, 7.5cm, 10cm, 15cm x 4.5m / 5m (Stretched Length)" },
      { "label": "Material Composition", "value": "75% Cotton, 25% High-Elastic Polyurethane Elastane Yarn (Latex-Free Option)" },
      { "label": "Elasticity Ratio", "value": "≥ 200% High-Stretch Elongation with High Elastic Recovery" },
      { "label": "Fastener Accessories", "value": "Includes 2x Aluminum Metal Elastic Clamps or Hook-and-Loop Fastener Ends" },
      { "label": "Packaging", "value": "Individually Cellophane Wrapped, 10 rolls/pack, 120 rolls/carton" }
    ],
    "applications": [
      "Treatment and management of venous leg ulcers and chronic venous insufficiency (CVI)",
      "Post-operative compression for orthopedic surgery and plastic surgery edema reduction",
      "Immobilization and support for joint sprains, tendon strains, and sports injuries"
    ],
    "features": [
      "Woven selvage edges prevent curling, fraying, and constriction rings during wrapping",
      "Washable and reusable up to 20 times without losing elasticity or compressive strength",
      "Skin-friendly soft breathable texture prevents perspiration buildup and chafing"
    ],
    "seoKeywords": ["High Elastic Bandage", "Medical Compression Bandage", "Orthopedic Crepe Bandage", "Elastic Support Wrap", "Hospital Compression Bandage"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 300+: 医用高弹力自粘绷带/压力固定弹性绷带)"
  }
]
products.extend(wound)

print(f"Wound care added: {len(wound)}, total so far: {len(products)}")

with open('catalog_part3.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)
