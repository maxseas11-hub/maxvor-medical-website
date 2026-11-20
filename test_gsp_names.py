import os
from PIL import Image

gsp_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\images\gspmed"

for idx in [1, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15]:
    p = os.path.join(gsp_dir, f"image{idx}.png")
    if os.path.exists(p):
        print(f"image{idx}.png exists")
