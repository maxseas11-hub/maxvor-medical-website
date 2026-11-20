# -*- coding: utf-8 -*-
import json, os

workspace = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub"

# 1. Update products.js
with open('formatted_authorized_8_prods.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

certs = [
  {
    "code": "CE Medical Directives",
    "title": "European Union CE Certification",
    "badgeColor": "bg-blue-50 text-blue-700 border-blue-200",
    "status": "Authorized & Certified",
    "scope": "Diagnostic Ultrasound Equipment & Handheld Transducers",
    "authority": "EU Notified Body Certified",
    "dossier": "Technical Dossier & Declaration of Conformity Available"
  },
  {
    "code": "ISO 13485:2016",
    "title": "Medical Devices Quality Management Systems (QMS)",
    "badgeColor": "bg-purple-50 text-purple-700 border-purple-200",
    "status": "Certified Facility",
    "scope": "Design, Manufacturing, and Testing of Medical Ultrasound Diagnostic Probes",
    "authority": "Accredited Certification Body",
    "dossier": "Annual Audit Records & ISO QMS Certificates"
  },
  {
    "code": "IEC 60601-1 / IEC 60601-2-37",
    "title": "Medical Electrical Safety & Ultrasound Performance",
    "badgeColor": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "status": "Safety Compliant",
    "scope": "Medical Electrical Equipment General Safety and Acoustic Output Requirements",
    "authority": "Accredited Testing Laboratories",
    "dossier": "Full Safety & Acoustic Measurement Reports"
  },
  {
    "code": "Multi-OS & Language Ready",
    "title": "Global Clinical Compatibility",
    "badgeColor": "bg-amber-50 text-amber-700 border-amber-200",
    "status": "5 Languages Supported",
    "scope": "English, French, Arabic, Spanish, Chinese for African & Global Markets",
    "authority": "Built-in Clinical Software Protocol",
    "dossier": "Windows & Android Application Packages"
  }
]

products_js_content = "export const FEATURED_PRODUCTS = " + json.dumps(products, ensure_ascii=False, indent=2) + ";\n\n"
products_js_content += "export const CERTIFICATIONS = " + json.dumps(certs, ensure_ascii=False, indent=2) + ";\n"

with open(os.path.join(workspace, "src", "data", "products.js"), "w", encoding="utf-8") as f:
    f.write(products_js_content)

print("Updated src/data/products.js successfully with 8 authorized products.")

# 2. Update categories.js
categories = [
  {
    "id": "ultrasound-convex-color",
    "name": "Convex Array Color Doppler Ultrasound",
    "shortName": "Convex Color Doppler",
    "image": "/assets/images/healson-c30c-convex-color.png",
    "tagline": "Advanced handheld color Doppler convex transducers for Abdomen, OB/GYN, Urology, and Pulmonary diagnostics",
    "subcategories": [
      "C30C Uprobe 3 Convex Color Doppler Probe (3.5MHz R60)",
      "M40C Micro Convex Color Doppler Probe (32 Channels / 128 Elements)",
      "Color Flow CFM / Power Doppler PDI / Pulsed Wave PW Imaging",
      "Multi-Terminal Direct USB & Type-C Connection"
    ],
    "features": ["Handheld ≤ 200g", "Windows & Android Compatible", "Type-A & Type-C Ports", "Multi-Language Software"],
    "moq": "1 Unit",
    "certifications": ["CE Certified", "ISO 13485", "IEC 60601-2-37"]
  },
  {
    "id": "ultrasound-linear-color",
    "name": "Linear Array Color Doppler Ultrasound",
    "shortName": "Linear Color Doppler",
    "image": "/assets/images/healson-c30l-linear-color.png",
    "tagline": "High-frequency color Doppler linear probes for Vascular, Musculoskeletal, Thyroid, Breast, and Nerve imaging",
    "subcategories": [
      "HS-C30L Uprobe 3 Linear Color Doppler Probe (7.5MHz L40)",
      "M40L Micro Linear Color Doppler Probe (32 Channels / 128 Elements)",
      "Vascular Flow Velocity & Resistive Index (RI) Measurement",
      "Superficial Ultrasound-Guided Puncture Enhancement"
    ],
    "features": ["7.5MHz - 10MHz High Frequency", "Compact Portable Design", "USB Direct Interface", "Multi-Parameter Presets"],
    "moq": "1 Unit",
    "certifications": ["CE Certified", "ISO 13485", "IEC 60601-2-37"]
  },
  {
    "id": "ultrasound-convex-bw",
    "name": "Convex Array B/W & HD Ultrasound",
    "shortName": "Convex B/W & HD",
    "image": "/assets/images/healson-hs-up20-convex-bw.png",
    "tagline": "High-durability B/W convex ultrasound probes delivering essential clinical diagnostic imaging for primary healthcare",
    "subcategories": [
      "HS-UP20 Uprobe 2 Convex Black and White Basic (3.5MHz R60)",
      "HS-U20C Uprobe 2 Convex Black and White HD Probe",
      "8-Segment Adjustable TGC Gain Control",
      "Dynamic Depth Adjustment up to 240mm"
    ],
    "features": ["Ultra-Lightweight ≤ 200g", "256 Gray Scale", "Plug-and-Play USB", "Zero Latency B/W Imaging"],
    "moq": "1 Unit",
    "certifications": ["CE Certified", "ISO 13485", "IEC 60601-1"]
  },
  {
    "id": "ultrasound-linear-bw",
    "name": "Linear Array B/W & HD Ultrasound",
    "shortName": "Linear B/W & HD",
    "image": "/assets/images/healson-hs-up20l-linear-bw.png",
    "tagline": "High-precision B/W linear ultrasound transducers optimized for superficial anatomy, MSK, and vascular access",
    "subcategories": [
      "HS-UP20L Uprobe 2 Linear Black and White Basic (7.5MHz L40)",
      "HS-U20L Uprobe 2 Linear Black and White HD Probe",
      "High-Clarity 256 Gray Scale Superficial Resolution",
      "Real-Time Image and Cine Loop Recording"
    ],
    "features": ["118mm Compact Length", "High-Resolution Linear Array", "PICC / Puncture Guide", "Low Power Consumption"],
    "moq": "1 Unit",
    "certifications": ["CE Certified", "ISO 13485", "IEC 60601-1"]
  }
]

categories_js_content = "export const CATEGORIES = " + json.dumps(categories, ensure_ascii=False, indent=2) + ";\n"

with open(os.path.join(workspace, "src", "data", "categories.js"), "w", encoding="utf-8") as f:
    f.write(categories_js_content)

print("Updated src/data/categories.js successfully with 4 ultrasound series.")
