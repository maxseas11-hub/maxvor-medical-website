import os
from PIL import Image

gsp_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\images\gspmed"
check_images = ["image1.png", "image3.png", "image8.png", "image9.png", "image10.png", "image11.png", "image14.png", "image15.png"]

for img_name in check_images:
    p = os.path.join(gsp_dir, img_name)
    if os.path.exists(p):
        img = Image.open(p)
        print(f"{img_name}: size={img.size}, mode={img.mode}")
