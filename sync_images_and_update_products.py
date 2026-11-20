# -*- coding: utf-8 -*-
import os, shutil, json, re

workspace = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861"
media_dir = os.path.join(workspace, "media-output")
target_img_dir = os.path.join(workspace, "medisupply-hub", "public", "assets", "images")

os.makedirs(target_img_dir, exist_ok=True)

# Mapping generated files to target filenames
image_mapping = {
    # Diagnostic / Lab
    "img-mvrqzfg7-0298ac95.png": ["vacuum-blood-tubes.png", "cat-lab-diagnostic.png"],
    "img-mvrr01rw-e0cd23d7.png": ["specimen-collection-cup.png"],
    "img-mvrr07gq-33fc7293.png": ["flocked-sampling-swabs.png"],
    "img-mvrr08cx-6eb67b6f.png": ["safety-blood-lancets.png"],
    "img-mvrr05h4-61bff6aa.png": ["microcentrifuge-tubes.png"],
    "img-mvrr1pui-3e08e345.png": ["pipette-filter-tips.png"],
    
    # Respiratory / Anesthesia
    "img-mvrr1nj4-dc252f91.png": ["high-concentration-oxygen-mask.png"],
    "img-mvrr14ov-794fbae8.png": ["medical-nebulizer-kit.png"],
    "img-mvrr1u31-69f7704a.png": ["endotracheal-cuffed-tube.png"],
    
    # Injection / Infusion
    "img-mvrr2xki-5c577d9a.png": ["disposable-sterile-syringes.png"],
    "img-mvrr2qvd-6a4fc211.png": ["safety-ad-syringe.png"],
    "img-mvrr34jt-21cc9e7c.png": ["hypodermic-needles.png"],
    "img-mvrr2noz-5694604d.png": ["iv-infusion-set.png"],
    "img-mvrr4fao-87c26e3e.png": ["iv-cannula-catheter.png"],
    "img-mvrr3v9c-f8aa3406.png": ["scalp-vein-butterfly-set.png"],
    
    # PPE & Infection Control
    "img-mvrr4d5c-9c053504.png": ["sterile-surgical-gown.png"],
    "img-mvrr48nw-28a447ff.png": ["surgical-face-mask.png"],
    "img-mvrr6h2h-6ebdcf08.png": ["n95-ffp2-respirator.png"],
    "img-mvrr66sh-fc1f9b48.png": ["disposable-isolation-gown.png"],
    "img-mvrr7l2c-dde36e59.png": ["bouffant-cap-shoe-cover.png"],
    "img-mvrr7pg7-9c00dcbe.png": ["medical-face-shield-goggles.png"],
    
    # Gloves
    "img-mvrr51xd-fb87f44c.png": ["sterile-latex-surgical-gloves.png"],
    "img-mvrr4xt1-3561f373.png": ["nitrile-examination-gloves.png"],
    "img-mvrr8129-081e6816.png": ["gynecology-long-gloves.png"],
    
    # Wound Care
    "img-mvrr55o6-5a2b8042.png": ["gauze-swabs-lap-sponge.png"],
    "img-mvrr5k1n-75a7d242.png": ["zinc-oxide-adhesive-tape.png"],
    "img-mvrr6pak-32c8eadc.png": ["non-woven-island-dressing.png"],
    "img-mvrr6ypu-b3f6881c.png": ["elastic-compression-bandage.png"],
    "img-mvrr89zz-5cf6e791.png": ["paraffin-gauze-dressing.png"],
}

for src_name, dst_names in image_mapping.items():
    src_path = os.path.join(media_dir, src_name)
    if os.path.exists(src_path):
        for dst_name in dst_names:
            dst_path = os.path.join(target_img_dir, dst_name)
            shutil.copy2(src_path, dst_path)
            print(f"Copied {src_name} -> {dst_name}")
    else:
        print(f"WARNING: {src_path} does not exist!")

print("All new image assets successfully synced to public/assets/images/")
