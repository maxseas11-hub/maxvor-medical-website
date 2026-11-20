import os
from PIL import Image

base_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\images"
gsp_dir = os.path.join(base_dir, "gspmed")

def clean_image_bg(img_path):
    if not os.path.exists(img_path):
        print(f"Not found: {img_path}")
        return
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        # If near white / light gray (r,g,b all > 200 and low saturation)
        if r > 195 and g > 195 and b > 195 and max(r,g,b) - min(r,g,b) < 25:
            new_data.append((255, 255, 255, 255))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(img_path, "PNG")
    print(f"Cleaned {img_path}")

clean_image_bg(os.path.join(gsp_dir, "image12.png"))
clean_image_bg(os.path.join(gsp_dir, "image13.png"))
