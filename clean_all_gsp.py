import os
from PIL import Image

gsp_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\images\gspmed"

def ensure_pure_white_bg(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        # If near white / light gray (r,g,b all > 200 and low saturation)
        if r > 200 and g > 200 and b > 200 and max(r,g,b) - min(r,g,b) < 25:
            new_data.append((255, 255, 255, 255))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(img_path, "PNG")

for name in ["image1.png", "image3.png", "image8.png", "image9.png", "image10.png", "image11.png", "image14.png", "image15.png"]:
    ensure_pure_white_bg(os.path.join(gsp_dir, name))
    print(f"Cleaned {name}")
