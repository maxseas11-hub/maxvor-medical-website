import os
from PIL import Image

gsp_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\images\gspmed"
for fname in sorted(os.listdir(gsp_dir)):
    if fname.endswith(('.png', '.jpeg', '.jpg')):
        fpath = os.path.join(gsp_dir, fname)
        img = Image.open(fpath)
        print(f"{fname}: size={img.size}, mode={img.mode}")
