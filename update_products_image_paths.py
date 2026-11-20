# -*- coding: utf-8 -*-
import json, os, re

products_js_path = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\src\data\products.js"
public_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public"

with open(products_js_path, "r", encoding="utf-8") as f:
    text = f.read()

m1 = re.search(r"export const FEATURED_PRODUCTS = (\[.*?\]);", text, re.DOTALL)
prods = json.loads(m1.group(1))

certs = [
  {
    "code": "CE MDR 2017/745",
    "title": "European Union Medical Device Regulation (CE MDR)",
    "badgeColor": "bg-blue-50 text-blue-700 border-blue-200",
    "status": "Valid & Verified",
    "scope": "Class I (Sterile/Measuring), Class IIa, and Class IIb Medical Devices and Hospital Consumables",
    "authority": "TÜV SÜD / BSI Notified Bodies",
    "dossier": "Technical Documentation & EU Declaration of Conformity Available"
  },
  {
    "code": "FDA 510(k) / Device Listing",
    "title": "United States Food and Drug Administration (US FDA)",
    "badgeColor": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "status": "Establishment Registered",
    "scope": "Premarket Notification 510(k) & Owner/Operator Device Listing for Export",
    "authority": "US FDA Center for Devices and Radiological Health (CDRH)",
    "dossier": "FDA Registration & Device Listing Dossiers"
  },
  {
    "code": "ISO 13485:2016",
    "title": "Medical Devices Quality Management Systems (QMS)",
    "badgeColor": "bg-purple-50 text-purple-700 border-purple-200",
    "status": "Full System Certified",
    "scope": "Design, Manufacturing, Cleanroom Packaging, and Sterilization of Medical Consumables",
    "authority": "SGS / TÜV Rheinland Audited QMS",
    "dossier": "Annual Third-Party Audit Reports & ISO Certificates"
  },
  {
    "code": "ISO 11135 / EN 556-1",
    "title": "Ethylene Oxide (EO) Sterilization Validation",
    "badgeColor": "bg-amber-50 text-amber-700 border-amber-200",
    "status": "SAL 10⁻⁶ Validated",
    "scope": "Industrial EO Gas Sterilization Cycles with Biological Indicator Release Protocol",
    "authority": "Accredited Sterilization Testing Labs",
    "dossier": "Sterilization Residual (EO/ECH) & Bioburden Release Certificates"
  }
]

# Map specific product IDs to their dedicated image files
product_images = {
    # 1. Endoscopy
    "prod-endo-001": "/assets/images/endo-laser-fiber.png",
    "prod-endo-002": "/assets/images/endo-stone-basket.png",
    "prod-endo-003": "/assets/images/endo-zebra-guidewire.png",
    "prod-endo-004": "/assets/images/endo-access-sheath.png",
    "prod-endo-005": "/assets/images/endo-stone-basket.png",
    "prod-endo-006": "/assets/images/endo-balloon-dilator.png",
    "prod-endo-007": "/assets/images/endo-dj-stent.png",
    "prod-endo-008": "/assets/images/endo-pcnl-kit.png",
    "prod-endo-009": "/assets/images/endo-biopsy-forceps.png",
    
    # 2. OR & ICU Equipment
    "prod-equip-001": "/assets/images/portable-ultrasound-scanner.png",
    "prod-equip-002": "/assets/images/portable-ultrasound-scanner.png",
    "prod-equip-003": "/assets/images/portable-ultrasound-scanner.png",
    "prod-equip-004": "/assets/images/patient-monitor.png",
    "prod-equip-005": "/assets/images/electrosurgical-unit.png",
    "prod-equip-006": "/assets/images/electric-operating-table.png",
    "prod-equip-007": "/assets/images/surgical-shadowless-light.png",
    "prod-equip-008": "/assets/images/hematology-analyzer.png",
    "prod-equip-009": "/assets/images/biochemistry-analyzer.png",
    "prod-equip-010": "/assets/images/infusion-pump.png",
    "prod-equip-011": "/assets/images/ecg-machine.png",
    "prod-equip-012": "/assets/images/jaundice-meter.png",
    "prod-equip-013": "/assets/images/video-colposcope.png",
    "prod-equip-014": "/assets/images/ent-diagnostic-set.png",
    "prod-equip-015": "/assets/images/infrared-vein-finder.png",
    "prod-equip-016": "/assets/images/x-ray-film-viewer.png",
    "prod-equip-017": "/assets/images/cat-diagnostic.png",
    "prod-equip-018": "/assets/images/patient-monitor.png",
    "prod-equip-019": "/assets/images/surgical-fenestrated-drape.png",
    "prod-equip-020": "/assets/images/biochemistry-analyzer.png",
    
    # 3. Wound Care
    "prod-wound-001": "/assets/images/silicone-foam-dressing.png",
    "prod-wound-002": "/assets/images/hydrocolloid-dressing.png",
    "prod-wound-003": "/assets/images/transparent-pu-film-dressing.png",
    "prod-wound-004": "/assets/images/gauze-swabs-lap-sponge.png",
    "prod-wound-005": "/assets/images/zinc-oxide-adhesive-tape.png",
    "prod-wound-006": "/assets/images/hydrocolloid-dressing.png",
    "prod-wound-007": "/assets/images/non-woven-island-dressing.png",
    "prod-wound-008": "/assets/images/paraffin-gauze-dressing.png",
    "prod-wound-009": "/assets/images/elastic-compression-bandage.png",
    
    # 4. PPE & Infection Control
    "prod-ppe-001": "/assets/images/surgical-fenestrated-drape.png",
    "prod-ppe-002": "/assets/images/sterile-surgical-gown.png",
    "prod-ppe-003": "/assets/images/disposable-isolation-gown.png",
    "prod-ppe-004": "/assets/images/surgical-face-mask.png",
    "prod-ppe-005": "/assets/images/n95-ffp2-respirator.png",
    "prod-ppe-006": "/assets/images/bouffant-cap-shoe-cover.png",
    "prod-ppe-007": "/assets/images/medical-face-shield-goggles.png",
    
    # 5. Gloves
    "prod-glove-001": "/assets/images/nitrile-examination-gloves.png",
    "prod-glove-002": "/assets/images/sterile-latex-surgical-gloves.png",
    "prod-glove-003": "/assets/images/cat-ppe-gloves.png",
    "prod-glove-004": "/assets/images/gynecology-long-gloves.png",
    
    # 6. Injection & Infusion
    "prod-inj-001": "/assets/images/disposable-sterile-syringes.png",
    "prod-inj-002": "/assets/images/safety-ad-syringe.png",
    "prod-inj-003": "/assets/images/hypodermic-needles.png",
    "prod-inj-004": "/assets/images/iv-infusion-set.png",
    "prod-inj-005": "/assets/images/iv-cannula-catheter.png",
    "prod-inj-006": "/assets/images/scalp-vein-butterfly-set.png",
    
    # 7. Respiratory & Anesthesia
    "prod-resp-001": "/assets/images/silicone-foley-catheter.png",
    "prod-resp-002": "/assets/images/anti-reflux-drainage-bag.png",
    "prod-resp-003": "/assets/images/high-concentration-oxygen-mask.png",
    "prod-resp-004": "/assets/images/medical-nebulizer-kit.png",
    "prod-resp-005": "/assets/images/endotracheal-cuffed-tube.png",
    "prod-resp-006": "/assets/images/cat-respiratory.png",
    "prod-resp-007": "/assets/images/cat-respiratory.png",
    
    # 8. Diagnostic & Lab
    "prod-diag-001": "/assets/images/ultrasound-gel.png",
    "prod-diag-002": "/assets/images/vacuum-blood-tubes.png",
    "prod-diag-003": "/assets/images/specimen-collection-cup.png",
    "prod-diag-004": "/assets/images/flocked-sampling-swabs.png",
    "prod-diag-005": "/assets/images/safety-blood-lancets.png",
    "prod-diag-006": "/assets/images/microcentrifuge-tubes.png",
    "prod-diag-007": "/assets/images/pipette-filter-tips.png",
}

for p in prods:
    pid = p["id"]
    if pid in product_images:
        p["image"] = product_images[pid]

# Validate all files exist
missing_count = 0
for p in prods:
    img_rel = p["image"].lstrip("/\\")
    full_path = os.path.join(public_dir, img_rel)
    if not os.path.exists(full_path):
        print(f"ERROR: Missing file for {p['id']}: {full_path}")
        missing_count += 1

print(f"Validation complete: {len(prods)} products checked, {missing_count} missing files.")

new_js = "export const FEATURED_PRODUCTS = " + json.dumps(prods, ensure_ascii=False, indent=2) + ";\n\n"
new_js += "export const CERTIFICATIONS = " + json.dumps(certs, ensure_ascii=False, indent=2) + ";\n"

with open(products_js_path, "w", encoding="utf-8") as f:
    f.write(new_js)

print(f"Updated {products_js_path} successfully!")
