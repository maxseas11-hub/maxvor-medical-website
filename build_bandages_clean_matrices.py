import os
from PIL import Image

assets_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\images"
gsp_dir = os.path.join(assets_dir, "gspmed")

# 1. Bandages Wide Matrix (1200 x 480) with 4 Clean Balanced Products
def build_bandages_wide_4():
    canvas = Image.new("RGBA", (1200, 480), (255, 255, 255, 255))
    items = [
        os.path.join(gsp_dir, "image1.png"),   # Cohesive bandage pyramid
        os.path.join(gsp_dir, "image8.png"),   # Elastic adhesive cotton tape
        os.path.join(gsp_dir, "image9.png"),   # Instant cold compression wrap
        os.path.join(gsp_dir, "image11.png")   # Hot & cold therapy gel pack
    ]
    # 4 evenly spaced columns
    slots = [
        (50, 240),
        (340, 240),
        (630, 240),
        (920, 240)
    ]
    for idx, p_path in enumerate(items):
        if os.path.exists(p_path):
            img = Image.open(p_path).convert("RGBA")
            max_w, max_h = slots[idx][1], 380
            img.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)
            y = (480 - img.height) // 2
            x = slots[idx][0] + (max_w - img.width) // 2
            canvas.paste(img, (x, y), img)
            
    out_path = os.path.join(assets_dir, "cat-bandages-matrix.png")
    canvas.convert("RGB").save(out_path, "PNG")
    print(f"Generated {out_path}")

# 2. Bandages Square Matrix (600 x 600) for Header Dropdown
def build_bandages_square_4():
    canvas = Image.new("RGBA", (600, 600), (255, 255, 255, 255))
    items = [
        (os.path.join(gsp_dir, "image1.png"), (20, 20, 260, 260)),
        (os.path.join(gsp_dir, "image8.png"), (320, 20, 260, 260)),
        (os.path.join(gsp_dir, "image9.png"), (20, 320, 260, 260)),
        (os.path.join(gsp_dir, "image11.png"), (320, 320, 260, 260))
    ]
    for p_path, (box_x, box_y, box_w, box_h) in items:
        if os.path.exists(p_path):
            img = Image.open(p_path).convert("RGBA")
            img.thumbnail((box_w, box_h), Image.Resampling.LANCZOS)
            x = box_x + (box_w - img.width) // 2
            y = box_y + (box_h - img.height) // 2
            canvas.paste(img, (x, y), img)
            
    out_path = os.path.join(assets_dir, "cat-bandages-square.png")
    canvas.convert("RGB").save(out_path, "PNG")
    print(f"Generated {out_path}")

build_bandages_wide_4()
build_bandages_square_4()
