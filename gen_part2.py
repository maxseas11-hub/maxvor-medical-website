# -*- coding: utf-8 -*-
import json, re

# Load part 1 (endoscopy)
with open('catalog_part1.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# ==========================================
# 2. OR & ICU CLINICAL MEDICAL EQUIPMENT (20 Products)
# ==========================================
equip = [
  {
    "id": "prod-equip-001",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Portable Color Doppler Ultrasound Diagnostic Scanner",
    "model": "US-CD500P",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/portable-ultrasound-scanner.png",
    "rating": 4.9,
    "reviews": 84,
    "isCustomizable": True,
    "shortDesc": "Full-digital portable color Doppler ultrasound imaging system featuring high-definition 15-inch LED display, dual active probe ports, and multi-specialty cardiac/vascular measurement packages.",
    "specs": [
      { "label": "Display Screen", "value": "15-Inch High-Resolution Anti-Glare Medical LED Monitor (Tiltable 0-30°)" },
      { "label": "Transducer Ports", "value": "Dual Active Probe Connectors with Automatic Transducer Identification" },
      { "label": "Imaging Modes", "value": "B, 2B, 4B, M, Color Doppler (CFM), Power Doppler (PDI), Pulsed Wave (PW)" },
      { "label": "Supported Probes", "value": "3.5MHz Electronic Convex, 7.5MHz High-Frequency Linear, 6.5MHz Transvaginal, 3.0MHz Phased Array" },
      { "label": "Cine Loop & Storage", "value": "≥ 1000 Frames Cine Loop, 128GB High-Speed Solid-State Medical Storage" },
      { "label": "Connectivity & DICOM", "value": "DICOM 3.0 Full Network Protocol, Dual USB 3.0, HDMI, VGA, LAN Ports" },
      { "label": "Power & Battery", "value": "AC 100-240V 50/60Hz, Built-in Rechargeable Lithium Battery (≥ 4.5 Hours Continuous Operation)" }
    ],
    "applications": [
      "Abdominal, OB/GYN, and small parts (thyroid, breast, testicular) clinical examination",
      "Vascular Doppler flow assessment and musculoskeletal (MSK) guided puncture",
      "Emergency room (ER), bedside ICU point-of-care ultrasound (POCUS), and mobile clinics"
    ],
    "features": [
      "Advanced speckle reduction imaging (SRI) and spatial compound imaging (SCI)",
      "One-key automatic image optimization (Auto B/Color/PW Gain Optimization)",
      "Ultra-compact lightweight alloy chassis (< 6.2 kg) with rugged anti-shock carrying case"
    ],
    "seoKeywords": ["Portable Ultrasound Scanner", "Color Doppler Ultrasound", "Handheld B Ultrasound Machine", "Digital Ultrasound Diagnostic", "POCUS Ultrasound"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485", "IEC 60601-1"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 2 & 4: 跨境专供手提式多普勒超声扫描机彩超机)"
  },
  {
    "id": "prod-equip-002",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Wireless 3-in-1 Handheld Ultrasound Array Probe Scanner",
    "model": "US-W300",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/portable-ultrasound-scanner.png",
    "rating": 4.9,
    "reviews": 46,
    "isCustomizable": True,
    "shortDesc": "Pocket-sized wireless ultrasound probe integrating Convex, Linear, and Phased Array transducer heads with iOS/Android/Windows high-speed Wi-Fi connection.",
    "specs": [
      { "label": "Transducer Configuration", "value": "3-in-1 Triple Probe Head (Convex 3.5/5.0MHz, Linear 7.5/10.0MHz, Cardiac Phased Array 2.5/5.0MHz)" },
      { "label": "Wireless Connectivity", "value": "Dual-Band 2.4G/5G 802.11n Wi-Fi + USB Type-C High-Speed Wired Interface" },
      { "label": "Scanning Depth", "value": "Convex: 90-305mm; Linear: 20-100mm; Cardiac: 90-160mm" },
      { "label": "Channel Count", "value": "128 Elements, 32 Beamforming Channels" },
      { "label": "Battery Life", "value": "Built-in 2800mAh Lithium Battery (≥ 3.5 Hours Continuous Scan, Qi Wireless Charging)" },
      { "label": "Waterproof Rating", "value": "IPX7 Full Submersion Sterilization Compatible" }
    ],
    "applications": [
      "Rapid bedside triage, FAST emergency ultrasound, and ambulance critical care",
      "Peripheral vascular access, nerve block anesthesia, and superficial biopsy guidance",
      "Point-of-care ward rounds and tele-medicine clinical consultations"
    ],
    "features": [
      "Zero-cable ultra-lightweight design (only 220g) fits directly into doctor coat pocket",
      "Seamless real-time DICOM and HD video cloud export to hospital PACS",
      "Comprehensive onboard measurement software for cardiac, vascular, and OB/GYN calculations"
    ],
    "seoKeywords": ["Wireless Ultrasound Probe", "Handheld Ultrasound", "Pocket Ultrasound Scanner", "3-in-1 Ultrasound Probe", "Wireless Doppler Probe"],
    "certifications": ["CE MDR", "FDA Listed", "ISO 13485", "FCC / CE RED"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 10: 三合一超声机彩色无线超声仪手持式便携超声多普勒阵列探头扫描仪)"
  },
  {
    "id": "prod-equip-003",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "4D Wireless Bladder Ultrasound Volume Scanner",
    "model": "BVS-400W",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/portable-ultrasound-scanner.png",
    "rating": 4.8,
    "reviews": 32,
    "isCustomizable": True,
    "shortDesc": "Non-invasive real-time 3D/4D ultrasound scanner designed for rapid, automatic calculation of urinary bladder volume and post-void residual (PVR) urine.",
    "specs": [
      { "label": "Scanning Method", "value": "3D Sector Mechanical Rotation Matrix Ultrasound Transducer" },
      { "label": "Measurement Range", "value": "0 ml - 1000 ml" },
      { "label": "Measurement Accuracy", "value": "± 10% or ± 10 ml (on Standard Calibration Phantom)" },
      { "label": "Scan Time", "value": "< 3 Seconds Automatic Multi-Plane Volume Calculation" },
      { "label": "Display & Interface", "value": "Integrated Color Touchscreen with Real-Time Bladder Center Location Guide" },
      { "label": "Data Export", "value": "Bluetooth Thermal Printer, USB-C Data Sync, Internal Storage for 1000 Patient Records" }
    ],
    "applications": [
      "Urology clinics for urinary retention, incontinence, and neurogenic bladder diagnosis",
      "Post-operative catheter management and reduction of Catheter-Associated Urinary Tract Infections (CAUTI)",
      "Geriatric and rehabilitation ward nursing bladder monitoring"
    ],
    "features": [
      "Automatic real-time edge detection AI algorithm eliminates manual tracing errors",
      "Dual gender and pediatric scanning calibration modes",
      "Ergonomic one-touch trigger button on probe head for effortless single-handed operation"
    ],
    "seoKeywords": ["Bladder Scanner", "Urinary Volume Scanner", "4D Bladder Ultrasound", "PVR Urine Scanner", "Non-Invasive Bladder Volume"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 12 & 20: 无线探头膀胱超声扫描仪/WiFi无线4D超声膀胱扫描仪)"
  },
  {
    "id": "prod-equip-004",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "12-Inch Multi-Parameter Vital Signs Patient Monitor",
    "model": "PM-1200HD",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/patient-monitor.png",
    "rating": 5.0,
    "reviews": 112,
    "isCustomizable": True,
    "shortDesc": "Hospital-grade multi-parameter bedside patient monitor featuring 12.1-inch color TFT display, comprehensive 7-lead ECG, NIBP, SpO2, Respiration, dual Temperature, and optional IBP/EtCO2.",
    "specs": [
      { "label": "Display", "value": "12.1-Inch High-Resolution Color TFT-LCD (Optional Full Touchscreen)" },
      { "label": "Standard Monitoring Parameters", "value": "3/5-Lead ECG, HR, NIBP, SpO2 (Nellcor/Masimo Compatible), PR, RESP, Dual Channel TEMP" },
      { "label": "Optional Upgrade Modules", "value": "Dual Invasive Blood Pressure (IBP), Mainstream/Sidestream EtCO2, 12-Lead ECG, Central Monitoring Wi-Fi" },
      { "label": "NIBP Technology", "value": "Oscillometric Step-Deflation with Over-Pressure Dual Hardware Protection" },
      { "label": "Trend Memory & Alarms", "value": "160-Hour Graphic & Tabular Trend Storage, 1000 NIBP Sets, 3-Level Audio-Visual Smart Alarms" },
      { "label": "Battery & Portability", "value": "Built-in Rechargeable 4400mAh Li-ion Battery (≥ 4 Hours Operating Time), Integrated Carry Handle" }
    ],
    "applications": [
      "Operating rooms (OR), intensive care units (ICU), and post-anesthesia care units (PACU)",
      "Emergency trauma departments, general medical wards, and coronary care units (CCU)",
      "Inter-hospital patient transfer and ambulatory continuous monitoring"
    ],
    "features": [
      "Anti-electrosurgical and defibrillation-proof circuit protection for high-frequency ESU compatibility",
      "OxyCRG dynamic view for neonatal respiratory and heart rate coordination assessment",
      "Fanless silent design prevents cross-contamination and dust circulation in sterile cleanrooms"
    ],
    "seoKeywords": ["Patient Monitor", "12 Inch Vital Signs Monitor", "ICU Bedside Monitor", "Multiparameter Patient Monitor", "Hospital ECG Monitor"],
    "certifications": ["CE MDR 2017/745", "FDA Listed", "ISO 13485", "IEC 60601-1 / IEC 60601-2-49"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 112 & 114: 病人监护仪 12英寸多参数心电心率监护仪)"
  },
  {
    "id": "prod-equip-005",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "High-Frequency Electrosurgical Unit (ESU Diathermy 300W)",
    "model": "ESU-300W",
    "medicalClass": "Class II / Class IIb",
    "image": "/assets/images/electrosurgical-unit.png",
    "rating": 4.9,
    "reviews": 72,
    "isCustomizable": True,
    "shortDesc": "Universal 300W microprocessor-controlled high-frequency electrosurgical generator offering monopolar cutting, coagulation, and bipolar microsurgical sealing modes.",
    "specs": [
      { "label": "Maximum Power Output", "value": "300W at 500Ω (Monopolar Pure Cut), 120W (Bipolar Coagulation)" },
      { "label": "Working Frequency", "value": "400 kHz ± 10% High-Frequency Radiofrequency Output" },
      { "label": "Operating Modes", "value": "Pure Cut, Blend 1, Blend 2, Contact Coagulation, Spray/Forced Coagulation, Bipolar Standard Coagulation" },
      { "label": "Patient Safety System", "value": "REM / CQM Contact Quality Monitoring with Dual-Pad Split Neutral Electrode Detection" },
      { "label": "Control & Presets", "value": "Digital LED Display with 10 User-Programmable Surgical Memory Profiles" },
      { "label": "Activation Interface", "value": "Handswitch Pencil Buttons and Dual-Pedal Waterproof Foot Switch" }
    ],
    "applications": [
      "General surgery, orthopedic trauma, thoracic, and abdominal open procedures",
      "Gynecology LEEP / conization, urology TURP/TURBT, and ENT endoscopic surgery",
      "Plastic, cosmetic, and dermatological precise tissue ablation and hemostasis"
    ],
    "features": [
      "Automatic tissue impedance sensing dynamically regulates power output to minimize tissue charring",
      "Continuous neutral plate contact safety circuit triggers instant power shutoff upon pad detachment",
      "Compatible with standard smoke evacuation systems and endoscopic suction-cautery instruments"
    ],
    "seoKeywords": ["Electrosurgical Unit", "High Frequency ESU", "Surgical Diathermy", "300W Electrocautery", "Monopolar Bipolar ESU"],
    "certifications": ["CE MDR Class IIb", "FDA Listed", "ISO 13485", "IEC 60601-2-2"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Row 292 & 294: 高频电刀单双极多功能医用外科手术电刀 300W)"
  },
  {
    "id": "prod-equip-006",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Multi-Functional Electric Operating Table for General Surgery",
    "model": "EOT-900M",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/electric-operating-table.png",
    "rating": 5.0,
    "reviews": 48,
    "isCustomizable": True,
    "shortDesc": "Electro-hydraulic multi-positional surgical operating table with radiolucent carbon fiber table top, 350mm longitudinal sliding for C-arm imaging, and 300kg weight capacity.",
    "specs": [
      { "label": "Drive Mechanism", "value": "Precision High-Power Linear Actuator with Electro-Hydraulic Dual Backup" },
      { "label": "Table Dimensions", "value": "2050mm (L) x 520mm (W), Height Adjustment: 680mm - 980mm (300mm Stroke)" },
      { "label": "Positional Articulations", "value": "Trendelenburg / Rev Trendelenburg: ≥ 25°; Lateral Tilt (L/R): ≥ 20°; Backrest: +75° / -20°; Leg Section: -90° / +15°" },
      { "label": "C-Arm Imaging Sliding", "value": "350mm Longitudinal Horizontal Sliding for Full-Body X-Ray / C-Arm Fluoroscopy" },
      { "label": "Maximum Load Capacity", "value": "300 kg (660 lbs) High-Tonnage Safe Surgical Load" },
      { "label": "Material & Mattress", "value": "Premium 304 Stainless Steel Base & Column, High-Density Memory Foam Seamless Anti-Static Mattress" },
      { "label": "Dual Control System", "value": "Ergonomic Handheld Remote Controller + Override Base Auxiliary Control Panel" }
    ],
    "applications": [
      "General open abdominal, thoracic, cardiac, and vascular surgeries",
      "Orthopedic spinal surgery, joint replacement, and trauma fracture reduction",
      "Urology, gynecology lithotomy procedures, neurosurgery, and laparoscopy"
    ],
    "features": [
      "Ultra-low base profile with four-point electric central brake locking system for unmatched stability",
      "Modular quick-detach head and split leg plates compatible with specialized traction accessories",
      "Integrated emergency reserve battery guarantees full table articulation during power outages"
    ],
    "seoKeywords": ["Electric Operating Table", "Surgical OT Table", "Hydraulic Operating Bed", "C-Arm Compatible Surgical Table", "Hospital Operating Table"],
    "certifications": ["CE MDR Class I/II", "FDA Listed", "ISO 13485", "IEC 60601-1"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Row 261 & 263: 医院电动手术床 医用多功能骨科妇科手术台)"
  },
  {
    "id": "prod-equip-007",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Dual-Dome LED Shadowless Ceiling Surgical Light",
    "model": "SSL-LED700/500",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/surgical-shadowless-light.png",
    "rating": 4.9,
    "reviews": 57,
    "isCustomizable": True,
    "shortDesc": "Ceiling-mounted dual-head petal-type LED surgical shadowless illumination lamp providing up to 160,000 Lux cold light, adjustable color temperature (3800K-5000K), and high Ra 97 color rendering.",
    "specs": [
      { "label": "Illuminance Intensity", "value": "LED 700 Head: 160,000 Lux; LED 500 Head: 120,000 Lux (10-Stage Dimming)" },
      { "label": "Color Temperature", "value": "3800K - 5000K Adjustable (4 Preset Steps for Optimal Tissue Differentiation)" },
      { "label": "Color Rendering Index (Ra/R9)", "value": "CRI Ra ≥ 97, R9 (Red Color Rendering) ≥ 95" },
      { "label": "Light Field Diameter (d10)", "value": "150mm - 300mm Uniform Focusing Spot" },
      { "label": "Depth of Illumination (L1+L2)", "value": "≥ 1200 mm Deep Cavity Penetration" },
      { "label": "LED Bulb Lifespan", "value": "≥ 60,000 Hours German Osram Medical Grade LEDs" },
      { "label": "Suspension Arm", "value": "360° Continuous Universal Balance Arm with Autoclavable Central Handle" }
    ],
    "applications": [
      "Operating room deep surgical cavity illumination (abdominal, neurosurgery, open heart)",
      "Trauma surgery, orthopedic procedures, and plastic reconstructive surgery",
      "Day-surgery centers, ambulatory operating suites, and hybrid operating rooms"
    ],
    "features": [
      "Laminar flow aero-dynamic petal shell design minimizes turbulence in ultra-clean sterile operating theaters",
      "Cold LED technology emits negligible temperature rise at surgeon head (< 1°C) and patient wound (< 2°C)",
      "Endo mode one-touch low-intensity illumination dedicated for laparoscopic and endoscopic procedures"
    ],
    "seoKeywords": ["Surgical Shadowless Light", "LED Operating Lamp", "Ceiling OT Light", "Double Head Surgical Lamp", "Shadowless OT Light"],
    "certifications": ["CE MDR", "FDA Listed", "ISO 13485", "IEC 60601-2-41"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Row 279 & 281: 手术无影灯 LED单头双头子母吊式无影灯)"
  },
  {
    "id": "prod-equip-008",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Automated 5-Part Hematology Analyzer (CBC Blood Cell Counter)",
    "model": "HA-5800",
    "medicalClass": "Class II / Class IIa (IVD)",
    "image": "/assets/images/hematology-analyzer.png",
    "rating": 5.0,
    "reviews": 69,
    "isCustomizable": True,
    "shortDesc": "Clinical automated 5-part differential hematology analyzer utilizing semiconductor laser flow cytometry and chemical dye method to deliver 60 tests/hour across 29 parameters.",
    "specs": [
      { "label": "Throughput Capacity", "value": "60 Tests / Hour Continuous Automated Analysis" },
      { "label": "Measurement Parameters", "value": "25 Reportable Parameters + 4 Research Parameters, 3 Histograms (WBC, RBC, PLT), 1 3D Scattergram" },
      { "label": "Measurement Principles", "value": "Semiconductor Laser Flow Cytometry + Nucleic Acid Fluorescent Dye + Impedance & Colorimetry" },
      { "label": "Aspiration Sample Volume", "value": "Whole Blood Mode: ≤ 15μL; Pre-Diluted Capillary Mode: ≤ 20μL" },
      { "label": "Display & Operating System", "value": "10.4-Inch Color Touchscreen with Integrated Linux Diagnostic Software" },
      { "label": "Data Memory & LIS", "value": "Internal Storage for ≥ 100,000 Patient Results with Graphic Scattergrams, Bi-Directional LIS Protocol" }
    ],
    "applications": [
      "Hospital central clinical laboratory complete blood count (CBC) routine testing",
      "Emergency department urgent blood cell differential screening",
      "Private medical clinics, pediatric centers, and diagnostic pathology laboratories"
    ],
    "features": [
      "Precise 5-part WBC differentiation (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)",
      "Dual aspiration mode supports micro-volume capillary blood ideal for pediatric and oncology patients",
      "Automatic clot detection and high-pressure liquid clearing system prevents tubing blockage"
    ],
    "seoKeywords": ["5 Part Hematology Analyzer", "Auto CBC Machine", "Blood Cell Counter", "Clinical Blood Analyzer", "IVD Hematology Equipment"],
    "certifications": ["CE IVDR / CE MDR", "FDA Listed", "ISO 13485", "ISO 15189 Compliant"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 45 & 47: 全自动五分类血液细胞分析仪 血常规分析仪)"
  },
  {
    "id": "prod-equip-009",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Automated Clinical Chemistry Biochemistry Analyzer",
    "model": "BA-300Auto",
    "medicalClass": "Class II / Class IIa (IVD)",
    "image": "/assets/images/biochemistry-analyzer.png",
    "rating": 4.9,
    "reviews": 53,
    "isCustomizable": True,
    "shortDesc": "Benchtop random-access automated clinical biochemistry analyzer delivering constant 200-300 tests/hour for comprehensive liver, renal, lipid, and electrolyte panels.",
    "specs": [
      { "label": "Analytical Speed", "value": "Constant 200 Photometric Tests / Hour (Up to 300 Tests/Hour with optional ISE module)" },
      { "label": "Sample & Reagent Carousel", "value": "40 Sample Positions (Micro-Cup/Primary Tube) + 40 Onboard Refrigerated Reagent Positions (2-8°C)" },
      { "label": "Optical System", "value": "Static State Matrix Optical System, 8 Wavelengths (340nm - 670nm), Inverted Photometry" },
      { "label": "Reaction System", "value": "80 Reusable Quartz/Plastic Cuvettes with Automatic 8-Step Washing Station" },
      { "label": "Sample Volume", "value": "2μl - 45μl (Step-by-Step 0.1μl Precision Micro-Syringe)" },
      { "label": "Water Consumption", "value": "< 5 Liters / Hour Deionized Purified Water" }
    ],
    "applications": [
      "Clinical biochemistry testing: Liver function (ALT, AST), Renal function (BUN, Cr), Glucose, Lipids",
      "Electrolyte, cardiac enzyme, and specific protein quantitative determination",
      "Hospital clinical chemistry laboratories, health screening centers, and research institutes"
    ],
    "features": [
      "Liquid level detection, collision protection, and reagent volume auto-inventory tracking",
      "Independent teflon-coated mixing stirrer ensures thorough homogenization without cross-contamination",
      "Real-time reaction curve display and dynamic substrate depletion monitoring"
    ],
    "seoKeywords": ["Biochemistry Analyzer", "Clinical Chemistry Analyzer", "Auto Blood Chemistry Machine", "Random Access Biochemistry", "IVD Lab Equipment"],
    "certifications": ["CE IVDR / CE MDR", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 29 & 35: 全自动临床生化分析仪 湿式生化检测系统)"
  },
  {
    "id": "prod-equip-010",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Micro Volumetric Infusion Pump (Touchscreen Peristaltic)",
    "model": "IP-800T",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/infusion-pump.png",
    "rating": 4.9,
    "reviews": 140,
    "isCustomizable": True,
    "shortDesc": "High-precision volumetric intravenous infusion pump featuring 4.3-inch color touchscreen, anti-free-flow clamp safety mechanism, and broad 0.1 - 2000 ml/h delivery rates.",
    "specs": [
      { "label": "Flow Rate Range", "value": "0.1 - 2000.0 ml/h (Increment: 0.01 ml/h at low rates; 0.1 ml/h standard)" },
      { "label": "Infusion Accuracy", "value": "± 5% (Calibrated for Standard Medical PVC / Non-PVC Infusion Sets)" },
      { "label": "Infusion Modes", "value": "Rate Mode, Time Mode, Body Weight Mode, Drip Rate Mode, Micro Mode, Sequential Mode" },
      { "label": "Bolus / Purge Rate", "value": "0.1 - 2000.0 ml/h (Programmable Automatic / Manual Bolus Delivery)" },
      { "label": "Occlusion Pressure Levels", "value": "12 Adjustable Levels (20 - 140 kPa / 2.9 - 20.3 psi) with Dynamic Real-Time Bar Graph" },
      { "label": "Air-in-Line Detection", "value": "High-Sensitivity Ultrasonic Sensor (Single Bubble Detection: 25 - 800 μL Adjustable)" },
      { "label": "Battery Operating Time", "value": "Built-in Rechargeable Lithium Battery (≥ 6 Hours at 25 ml/h Delivery)" }
    ],
    "applications": [
      "Continuous precise intravenous drug administration in ICU, CCU, and pediatric wards",
      "Chemotherapy infusions, vasoactive drug titration, and total parenteral nutrition (TPN)",
      "Anesthesia induction and intra-operative precise fluid maintenance"
    ],
    "features": [
      "Automatic door mechanism and motorized anti-free-flow clip prevent inadvertent gravity drug bolus",
      "Comprehensive drug library storing up to 2,000 customizable clinical medications with dose error reduction system (DERS)",
      "Stackable interlocking design allows up to 4 pumps on a single IV pole workstation"
    ],
    "seoKeywords": ["Infusion Pump", "Volumetric Infusion Pump", "Medical IV Pump", "Touchscreen Infusion Pump", "Peristaltic IV Pump"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485", "IEC 60601-2-24"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 122: 微型微量输液器 全自动静脉输液泵)"
  },
  {
    "id": "prod-equip-011",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "12-Lead Digital Electrocardiograph Machine (ECG/EKG)",
    "model": "ECG-1200HD",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/ecg-machine.png",
    "rating": 5.0,
    "reviews": 88,
    "isCustomizable": True,
    "shortDesc": "Simultaneous 12-lead digital electrocardiograph with 10.1-inch color touchscreen, Glasgow automated diagnostic interpretation algorithm, and 216mm wide thermal array recorder.",
    "specs": [
      { "label": "Lead Acquisition", "value": "Simultaneous 12-Lead Standard Acquisition (A/D Resolution: 24-Bit, Sampling Rate: 32,000 Hz)" },
      { "label": "Display Screen", "value": "10.1-Inch High-Resolution Color LCD Touchscreen with Grid Display" },
      { "label": "Recording Paper Spec", "value": "210mm / 216mm Z-Fold or Roll High-Speed Thermal Paper (Speeds: 5, 10, 12.5, 25, 50 mm/s)" },
      { "label": "Frequency Response", "value": "0.01 Hz - 350 Hz (-3dB) Meeting Pediatric & High-Frequency Diagnostic Demands" },
      { "label": "Data Memory & Connectivity", "value": "Internal Storage for ≥ 10,000 ECG Reports, Dual USB, LAN, SD Card, PDF/XML/DICOM Export" },
      { "label": "Battery Life", "value": "Built-in Rechargeable High-Capacity Li-ion Battery (≥ 500 ECG Printouts per Charge)" }
    ],
    "applications": [
      "Hospital cardiology departments, emergency rooms, and outpatient cardiology clinics",
      "Routine pre-operative cardiac evaluation and institutional physical examination centers",
      "Bedside emergency arrhythmia, myocardial infarction, and conduction abnormality detection"
    ],
    "features": [
      "Gold-standard Glasgow University automatic interpretation algorithm for age/gender-specific pediatric and adult diagnoses",
      "Advanced baseline wander drift filter and AC/EMG anti-interference suppression",
      "Real-time visual lead disconnection indicator and heart rate alert"
    ],
    "seoKeywords": ["12 Lead ECG Machine", "Digital EKG Machine", "Electrocardiograph", "Hospital ECG Recorder", "Resting ECG System"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485", "IEC 60601-2-25"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 118: 心电图机 自动测量12通道医用心电图仪)"
  },
  {
    "id": "prod-equip-012",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Transcutaneous Neonatal Jaundice Meter (Bilirubinometer)",
    "model": "JM-200N",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/jaundice-meter.png",
    "rating": 4.9,
    "reviews": 42,
    "isCustomizable": True,
    "shortDesc": "Handheld non-invasive transcutaneous bilirubin meter for instantaneous, painless screening of neonatal hyperbilirubinemia and jaundice management.",
    "specs": [
      { "label": "Measurement Method", "value": "Dual-Wavelength Optical Reflection Light Density Difference (450nm & 550nm)" },
      { "label": "Measurement Range", "value": "0.0 mg/dL - 30.0 mg/dL (0.0 μmol/L - 513.0 μmol/L)" },
      { "label": "Measurement Accuracy", "value": "± 1.0 mg/dL (± 17.1 μmol/L) Clinical Precision" },
      { "label": "Measurement Sites", "value": "Forehead and Sternum Transcutaneous Surface Contact" },
      { "label": "Display & Storage", "value": "High-Brightness Color LCD with 1-5 Measurement Automatic Averaging Mode & 100 Data Memory" },
      { "label": "Power Supply", "value": "Rechargeable Lithium Battery with Desktop Charging Dock (≥ 800 Measurements per Charge)" }
    ],
    "applications": [
      "Neonatal intensive care units (NICU), maternity wards, and pediatric outpatient clinics",
      "Post-natal home visits and community maternal-child health screening",
      "Monitoring response to blue-light phototherapy in newborn infants"
    ],
    "features": [
      "Completely painless and non-invasive, eliminating unnecessary painful heel-stick blood draws for newborns",
      "Instantaneous measurement result delivered in less than 1.5 seconds",
      "Supplied with standard optical calibration check test plate ensuring continuous clinical accuracy"
    ],
    "seoKeywords": ["Jaundice Meter", "Transcutaneous Bilirubinometer", "Neonatal Jaundice Tester", "Bilirubin Detector", "NICU Equipment"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 173 & 175: 经皮黄疸检测仪 儿科手持胆红素检测仪)"
  },
  {
    "id": "prod-equip-013",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Digital Optical & Video Colposcopy Diagnostic System",
    "model": "VCS-900HD",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/video-colposcope.png",
    "rating": 4.8,
    "reviews": 36,
    "isCustomizable": True,
    "shortDesc": "High-definition digital video colposcope equipped with Sony 1/2.8-inch CMOS camera, 1-128x optical/digital zoom, circular shadowless LED cold light, and green electronic optical filter.",
    "specs": [
      { "label": "Camera Sensor", "value": "Full HD 1080P Sony Exmor Progressive Scan CMOS Sensor (≥ 2.13 Megapixels)" },
      { "label": "Optical & Digital Zoom", "value": "1 - 30x Optical Zoom + 1 - 4x Digital Zoom (Total 128x Continuous Magnification)" },
      { "label": "Focusing Distance", "value": "150mm - 400mm Wide Working Distance (Automatic High-Speed Focus + Manual Adjustment)" },
      { "label": "Illumination Source", "value": "Integrated Multipoint Ring LED Cold Light Array (≥ 30,000 Lux at 250mm, 50,000 Hours Lifespan)" },
      { "label": "Diagnostic Filter", "value": "Electronic Multi-Grade Green Filter for Enhanced Vascular Epithelium Contrast" },
      { "label": "Software & Hardware Workstation", "value": "Medical Grade All-in-One PC, Foot Pedal Image Capture, RCI Reid Acetic Acid Evaluation System" }
    ],
    "applications": [
      "Gynecological cervical pathology screening, early cervical cancer, and CIN lesion diagnosis",
      "Directed biopsy localization and post-conization / LEEP surgical follow-up",
      "Vulvar and vaginal mucosal disease digital documentation and tele-consultation"
    ],
    "features": [
      "High-precision acetic acid reaction timer and iodine test reaction recording",
      "Standard international colposcopy terminology (IFCPC) clinical reporting template",
      "Flexible pneumatic vertical lift trolley with 360° omni-directional articulating balance arm"
    ],
    "seoKeywords": ["Digital Video Colposcope", "Gynecology Colposcopy", "Cervical Cancer Screening", "HD Colposcope Camera", "Medical Colposcope Workstation"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 196: 数码电子阴道镜 医用妇科宫颈阴道检查镜)"
  },
  {
    "id": "prod-equip-014",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Fiber Optic Wall-Mounted / Handheld ENT Diagnostic Set",
    "model": "ENT-DS800",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/ent-diagnostic-set.png",
    "rating": 4.9,
    "reviews": 64,
    "isCustomizable": True,
    "shortDesc": "Modular clinical ENT diagnostic suite containing 3.5V LED fiber optic otoscope, direct ophthalmoscope, expandable nasal speculum, and throat illuminator with rechargeable handle.",
    "specs": [
      { "label": "Illumination Technology", "value": "3.5V TrueTone LED / Xenon Halogen Fiber Optic Cold Light Source" },
      { "label": "Otoscope Optical System", "value": "Distal Fiber Optic Ring Illumination with 3x Scratch-Resistant Swivel Viewing Lens & Insufflation Port" },
      { "label": "Ophthalmoscope Apertures", "value": "6 Apertures (Large/Small Spot, Hemispot, Red-Free Green Filter, Slit, Fixation Star) + 28 Diopter Lenses (-25D to +40D)" },
      { "label": "Ear Specula Sizes", "value": "Includes 2.5mm, 3.0mm, 4.0mm, 5.0mm Autoclavable Reusable Specula Sets" },
      { "label": "Power & Mounting", "value": "Dual Reusable Rechargeable Lithium Battery Handles + Desktop Fast Charging Dock / Wall Unit" },
      { "label": "Carrying Case", "value": "Durable High-Impact Protective Hard Case with Precision Molded Foam Insert" }
    ],
    "applications": [
      "Ear canal, tympanic membrane, and middle ear infection (otitis media) clinical examination",
      "Fundoscopic retinal, optic disc, and diabetic retinopathy ophthalmic examination",
      "Nasal cavity, pharynx, and oral mucosal diagnostic inspection"
    ],
    "features": [
      "Fiber optic ring light provides completely unobstructed view of the ear canal without bulb glare",
      "Insufflation bulb port allows pneumatic otoscopy to test tympanic membrane mobility",
      "Anti-glare multi-coated optical glass elements for true-to-life tissue color rendition"
    ],
    "seoKeywords": ["ENT Diagnostic Set", "Fiber Optic Otoscope", "Direct Ophthalmoscope", "ENT Examination Kit", "Diagnostic Otoscope Ophthalmoscope"],
    "certifications": ["CE MDR Class I/II", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 252 & 258: 光纤检耳镜 五官检查器套装 壁挂式耳鼻喉科诊断仪)"
  },
  {
    "id": "prod-equip-015",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Infrared Projection Vascular Vein Finder & Imaging Device",
    "model": "VF-IR600",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/infrared-vein-finder.png",
    "rating": 4.9,
    "reviews": 78,
    "isCustomizable": True,
    "shortDesc": "Handheld non-invasive near-infrared (NIR) vein transilluminator projecting accurate vascular maps in real-time directly onto patient skin surface for first-stick venipuncture success.",
    "specs": [
      { "label": "Imaging Principle", "value": "Near-Infrared (NIR 850nm) Hemoglobin Absorption Reflection + DLP Micro-Projection" },
      { "label": "Projection Colors", "value": "5 Selectable Projection Color Modes (Green, Blue, Red, White, Purple) for Diverse Skin Tones" },
      { "label": "Optimal Projection Distance", "value": "20cm - 25cm (± 2cm) Fixed Focal Length with Depth Indicator" },
      { "label": "Detectable Vein Depth", "value": "Subcutaneous Venous Vessels up to 8mm - 10mm Depth" },
      { "label": "Battery Life", "value": "Built-in 3400mAh Rechargeable Lithium Battery (≥ 3.5 Hours Continuous Operation)" },
      { "label": "Stand Options", "value": "Includes Mobile Floor Rolling Stand with Gooseneck Arm and Desktop Clamp Stand" }
    ],
    "applications": [
      "Difficult peripheral venous access (pediatric, obese, elderly, dark-skin, and edema patients)",
      "Emergency IV cannulation, oncology chemotherapy vein assessment, and blood donation draws",
      "Vascular surgery sclerotherapy and cosmetic spider vein localization"
    ],
    "features": [
      "100% Radiation-free harmless cold infrared light safe for eyes, infants, and repeated usage",
      "Inversion mode and fine mode enhance tiny capillary vessel resolution (< 0.2mm accuracy)",
      "Significantly reduces multiple puncture attempts, patient pain, and healthcare staff workload"
    ],
    "seoKeywords": ["Vein Finder", "Infrared Vein Locator", "Vascular Imaging Device", "Vein Illuminator", "Venipuncture Aid"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 233 & 237: 红外线显像仪 静脉显示仪 投影式血管查找仪)"
  },
  {
    "id": "prod-equip-016",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Ultra-Thin LED Medical X-Ray Film Viewer Box",
    "model": "XFV-LED200",
    "medicalClass": "Class I",
    "image": "/assets/images/x-ray-film-viewer.png",
    "rating": 4.8,
    "reviews": 60,
    "isCustomizable": True,
    "shortDesc": "Ultra-slim 24mm LED medical X-ray and CT film illuminator featuring automatic film activation sensor, stepless digital brightness dimming up to 4500 cd/m², and high uniformity.",
    "specs": [
      { "label": "Illumination Panel", "value": "Dual Bank (2 Panels) Standard (Single, Triple, and Quad Banks Available)" },
      { "label": "Screen Dimensions", "value": "Double Panel Viewing Area: 720mm (W) x 430mm (H); Frame Thickness: 24mm" },
      { "label": "Maximum Luminance", "value": "≥ 4,500 cd/m² (Lux: ≥ 14,000 Lux), Stepless PWM Digital Dimming (300 - 4500 cd/m²)" },
      { "label": "Color Temperature", "value": "8500K - 9500K Cool White Light Optimized for Radiographic Contrast" },
      { "label": "Film Clamping System", "value": "Silicone Roller Elastic Clamping Mechanism (Easy Single-Hand Film Insertion & Ejection)" },
      { "label": "Smart Activation", "value": "Infrared Film Insertion Auto-Sensor (Lights on when film inserted, auto-off when removed)" }
    ],
    "applications": [
      "Radiology departments, orthopedic clinics, and surgery viewing suites",
      "Analysis of conventional X-ray radiographs, CT slices, MRI scans, and mammograms",
      "Operating room wall-mounted sterile diagnostic review"
    ],
    "features": [
      "Edge-lit LED light guide plate provides > 90% uniform luminance across the entire viewing area without dark spots",
      "High-frequency flicker-free drive circuit protects radiologist eyes during extended reading sessions",
      "Anodized aluminum alloy frame with anti-corrosion matte finish"
    ],
    "seoKeywords": ["X Ray Film Viewer", "LED Radiograph Illuminator", "Medical Negatoscope", "Double Panel X Ray Viewer", "CT Film Light Box"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 156 & 158: 观片灯超薄LED可调光读片灯箱 双联X光胶片看片灯)"
  },
  {
    "id": "prod-equip-017",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Single/Dual-Arm ICU & OR Medical Ceiling Pendant",
    "model": "MCP-800E",
    "medicalClass": "Class II / Class IIa",
    "image": "/assets/images/cat-diagnostic.png",
    "rating": 4.9,
    "reviews": 29,
    "isCustomizable": True,
    "shortDesc": "Heavy-duty motorized surgical and ICU ceiling pendant workstation offering dry/wet separated columns, medical gas terminal sockets, high-voltage/data ports, and multi-tier adjustable equipment shelves.",
    "specs": [
      { "label": "Pendant Configuration", "value": "Single-Arm / Dual-Arm Motorized Vertical Lift & Horizontal Rotation Workstation" },
      { "label": "Arm Rotation Range", "value": "340° Continuous Horizontal Swivel with Pneumatic / Electromagnetic Friction Brakes" },
      { "label": "Maximum Load Capacity", "value": "220 kg - 300 kg (Heavy Duty Anesthesia / Laparoscopy Tower Capacity)" },
      { "label": "Medical Gas Outlets", "value": "Customizable German/British/DIN Standards: 2x O2, 2x Vac, 1x Air, 1x N2O, 1x AGSS" },
      { "label": "Electrical & Data Ports", "value": "8x Grounded Power Sockets, 2x RJ45 Network, 2x Equipotential Ground Pins, Video/HDMI" },
      { "label": "Equipment Shelves", "value": "3x Height-Adjustable Aluminum Alloy Shelves with Stainless Steel Side Rails & Self-Closing Drawer" }
    ],
    "applications": [
      "Operating rooms (OR) for surgical and anesthesia machine workstation suspension",
      "Intensive care units (ICU) and coronary care units (CCU) for dry/wet separated nursing",
      "Emergency resuscitation bays and endoscopy procedure suites"
    ],
    "features": [
      "Completely clears floor cables and gas hoses to create a clean, safe sterile surgical environment",
      "High-strength aluminum alloy extrusion profile with antimicrobial electrostatic powder coating",
      "Integrated LED ambient night light and ceiling decorative cover plate"
    ],
    "seoKeywords": ["Medical Ceiling Pendant", "ICU Ceiling Bridge", "Surgical Pendant", "OR Gas Pendant", "Anesthesia Ceiling Column"],
    "certifications": ["CE MDR Class IIa", "FDA Listed", "ISO 13485", "ISO 9170-1 Gas Standard"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Row 271 & 273: 医用吊塔手术室ICU干湿分离吊塔 电动外科塔)"
  },
  {
    "id": "prod-equip-018",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Biphasic Defibrillator Monitor with AED Mode",
    "model": "DM-AED900",
    "medicalClass": "Class II / Class IIb",
    "image": "/assets/images/patient-monitor.png",
    "rating": 5.0,
    "reviews": 41,
    "isCustomizable": True,
    "shortDesc": "Emergency biphasic defibrillator integrating manual defibrillation (1 - 360 Joules), AED automated external defibrillation, non-invasive transcutaneous pacing, and 3/5-lead ECG monitoring.",
    "specs": [
      { "label": "Defibrillation Waveform", "value": "Biphasic Truncated Exponential (BTE) with Impedance Compensation" },
      { "label": "Energy Output Selection", "value": "Manual: 1, 2, 3, 5, 7, 10, 15, 20, 30, 50, 70, 100, 150, 200, 300, 360 Joules" },
      { "label": "AED Energy Protocol", "value": "Adult: 150J-200J-200J; Pediatric: 50J-50J-70J (Automatic Voice & Text Guidance)" },
      { "label": "Charging Time", "value": "< 5 Seconds to 200 Joules; < 7 Seconds to 360 Joules" },
      { "label": "Paddles & Electrodes", "value": "External Reusable Adult/Pediatric Convertible Paddles + Multifunction AED Defibrillation Pads" },
      { "label": "Built-in Recorder", "value": "50mm High-Resolution 3-Channel Thermal Array Chart Recorder" }
    ],
    "applications": [
      "Emergency medical resuscitation in ER, ICU, CCU, and cardiac catheterization labs",
      "In-hospital crash carts and critical care patient transport ambulances",
      "Cardioversion of atrial fibrillation and ventricular tachycardia"
    ],
    "features": [
      "Synchronized cardioversion mode with automatic R-wave marker detection",
      "Demand and fixed transcutaneous external cardiac pacing (40 - 180 ppm, 0 - 200 mA)",
      "Rugged IP44 waterproof and 0.75m drop-resistant emergency enclosure"
    ],
    "seoKeywords": ["Defibrillator Monitor", "Biphasic Defibrillator", "AED Defibrillator", "Emergency Crash Cart Defibrillator", "Manual Defibrillator Pacer"],
    "certifications": ["CE MDR Class IIb", "FDA Listed", "ISO 13485", "IEC 60601-2-4"],
    "moq": "500 Units",
    "isBestSeller": True,
    "tabCategory": "surgical-emergency",
    "excelSource": "1688找的医疗耗材.xlsx (Row 135: 双相波除颤监护仪 心电监护除颤一体机)"
  },
  {
    "id": "prod-equip-019",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "X-Ray Radiation Protection Lead Apparel & Apron Set",
    "model": "LPA-500R",
    "medicalClass": "Class I / Class II",
    "image": "/assets/images/surgical-fenestrated-drape.png",
    "rating": 4.9,
    "reviews": 85,
    "isCustomizable": True,
    "shortDesc": "Ultra-lightweight multi-layer lead rubber radiation shielding apron set including wrap-around apron, thyroid protection collar, lead cap, lead glasses, and protective gonadal shields.",
    "specs": [
      { "label": "Lead Equivalence", "value": "Front: 0.35 mmPb / 0.50 mmPb; Back: 0.25 mmPb (Multi-Layer Nano-Polymer Lead Composite)" },
      { "label": "Included Protection Set", "value": "1x Vest & Skirt / Front Apron, 1x Thyroid Shield, 1x Lead Cap, 1x 0.75mmPb Lead Glasses, 1x Lead Gloves" },
      { "label": "Outer Fabric Material", "value": "Waterproof, Anti-Bacterial, Stain-Resistant Oxford Fabric with Hook-and-Loop Fasteners" },
      { "label": "Weight Reduction", "value": "30% Lighter than Traditional Heavy Lead Rubber without Compromising Attenuation" },
      { "label": "Available Sizes", "value": "Small (S), Medium (M), Large (L), Extra Large (XL) Ergonomic Tailoring" }
    ],
    "applications": [
      "Interventional cardiology, radiology catheterization laboratories (Cath Labs)",
      "Orthopedic C-Arm intra-operative fluoroscopy and trauma surgery",
      "CT scanning rooms, dental panoramic X-ray, and radiotherapy facilities"
    ],
    "features": [
      "Evenly distributed weight across shoulders and lumbar spine minimizes orthopedic back fatigue",
      "100% Micro-porous lead rubber prevents lead powder cracking and radiation leakage",
      "Available in multiple clinical colors with custom hospital department logo embroidery"
    ],
    "seoKeywords": ["Radiation Lead Apron", "X Ray Protection Apparel", "Lead Shielding Apron", "Thyroid Collar Lead", "Interventional Lead Vest"],
    "certifications": ["CE MDR Class I", "FDA Listed", "ISO 13485", "IEC 61331-3"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "hospital-essentials",
    "excelSource": "1688找的医疗耗材.xlsx (Row 140 & 142: 全身连体防辐射铅衣防护服 CT室射线防护服)"
  },
  {
    "id": "prod-equip-020",
    "categoryId": "or-icu-equipment",
    "categoryName": "OR & ICU Clinical Medical Equipment",
    "name": "Automated Sperm Quality Analyzer (CASA System)",
    "model": "SQA-CASA600",
    "medicalClass": "Class II / Class IIa (IVD)",
    "image": "/assets/images/biochemistry-analyzer.png",
    "rating": 4.8,
    "reviews": 23,
    "isCustomizable": True,
    "shortDesc": "Computer-assisted semen analysis (CASA) system based on WHO 5th/6th guidelines for automated evaluation of sperm concentration, motility classification, and morphology.",
    "specs": [
      { "label": "Analytical Parameters", "value": "Total Sperm Count, Concentration, Progressive Motility (PR), Non-Progressive (NP), Immotility (IM), VCL, VSL, VAP, ALH, BCF" },
      { "label": "Optical System", "value": "High-Resolution Phase Contrast Microscope + Industrial High-Speed Digital CCD Camera" },
      { "label": "Field of View Analysis", "value": "Captures ≥ 1000 Sperm / Test across 30 Consecutive Video Frames (Speed: 60 fps)" },
      { "label": "Semen Counting Chamber", "value": "Standard 10μm Depth Disposable Micro-Cell Chamber / Reusable Counting Grid" },
      { "label": "Software Standards", "value": "WHO 5th / 6th Edition Standardized Semen Analysis Diagnostic Software & Database" }
    ],
    "applications": [
      "Hospital andrology outpatient clinics and reproductive medicine centers (IVF / ART)",
      "Male fertility evaluation, pre-marital screening, and post-vasectomy verification",
      "Urology research institutes and biological cryobanks"
    ],
    "features": [
      "Automatic dynamic tracking algorithm identifies and measures curvilinear, straight-line, and average path velocities",
      "Integrated thermostatic heating stage maintains sample at 37°C during live sperm motility tracking",
      "Generates standardized color clinical analysis reports with multi-parameter diagnostic graphs"
    ],
    "seoKeywords": ["Sperm Quality Analyzer", "CASA Semen Analyzer", "Sperm Motility Analyzer", "Andrology Lab Equipment", "Male Fertility Analyzer"],
    "certifications": ["CE IVDR / CE MDR", "FDA Listed", "ISO 13485"],
    "moq": "500 Units",
    "isBestSeller": False,
    "tabCategory": "diagnostic-lab",
    "excelSource": "1688找的医疗耗材.xlsx (Row 192 & 194: 医用精子质量分析仪 CASA精液活力检测仪)"
  }
]
products.extend(equip)
print(f"Equipment added: {len(equip)}, total so far: {len(products)}")

with open('catalog_part2.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)
