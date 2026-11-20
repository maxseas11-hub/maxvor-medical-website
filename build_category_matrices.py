import os
from PIL import Image

assets_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\images"
gsp_dir = os.path.join(assets_dir, "gspmed")

# 1. Ultrasound Wide Matrix (1200 x 480)
def build_ultrasound_wide():
    canvas = Image.new("RGBA", (1200, 480), (255, 255, 255, 255))
    probes = [
        "healson-hs-up20-convex-bw.png",
        "healson-u20c-convex-hd.png",
        "healson-c30c-convex-color.png",
        "healson-m40c-micro-convex-color.png"
    ]
    x_positions = [60, 330, 600, 870]
    for idx, p_name in enumerate(probes):
        p_path = os.path.join(assets_dir, p_name)
        if os.path.exists(p_path):
            img = Image.open(p_path).convert("RGBA")
            img.thumbnail((260, 420), Image.Resampling.LANCZOS)
            y = (480 - img.height) // 2
            x = x_positions[idx] + (260 - img.width) // 2
            canvas.paste(img, (x, y), img)
            
    out_path = os.path.join(assets_dir, "cat-ultrasound-matrix.png")
    canvas.convert("RGB").save(out_path, "PNG")
    print(f"Generated {out_path}")

# 2. Bandages Wide Matrix (1200 x 480)
def build_bandages_wide():
    canvas = Image.new("RGBA", (1200, 480), (255, 255, 255, 255))
    items = [
        os.path.join(gsp_dir, "image1.png"),
        os.path.join(gsp_dir, "image3.png"),
        os.path.join(gsp_dir, "image9.png"),
        os.path.join(gsp_dir, "image12.png"),
        os.path.join(gsp_dir, "image13.png")
    ]
    slots = [
        (30, 210),   # image1
        (260, 210),  # image3
        (490, 210),  # image9
        (720, 200),  # image12 spray
        (940, 220)   # image13 ice pack
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

# 3. Ultrasound Square (600 x 600) for Dropdown / Square Thumbnails
def build_ultrasound_square():
    canvas = Image.new("RGBA", (600, 600), (255, 255, 255, 255))
    # 2x2 grid
    probes = [
        ("healson-hs-up20-convex-bw.png", (20, 20, 260, 260)),
        ("healson-u20c-convex-hd.png", (320, 20, 260, 260)),
        ("healson-c30c-convex-color.png", (20, 320, 260, 260)),
        ("healson-m40c-micro-convex-color.png", (320, 320, 260, 260))
    ]
    for p_name, (box_x, box_y, box_w, box_h) in probes:
        p_path = os.path.join(assets_dir, p_name)
        if os.path.exists(p_path):
            img = Image.open(p_path).convert("RGBA")
            img.thumbnail((box_w, box_h), Image.Resampling.LANCZOS)
            x = box_x + (box_w - img.width) // 2
            y = box_y + (box_h - img.height) // 2
            canvas.paste(img, (x, y), img)
            
    out_path = os.path.join(assets_dir, "cat-ultrasound-square.png")
    canvas.convert("RGB").save(out_path, "PNG")
    print(f"Generated {out_path}")

# 4. Bandages Square (600 x 600) for Dropdown / Square Thumbnails
def build_bandages_square():
    canvas = Image.new("RGBA", (600, 600), (255, 255, 255, 255))
    # 2x2 grid with key bandage products
    items = [
        (os.path.join(gsp_dir, "image1.png"), (20, 20, 260, 260)),
        (os.path.join(gsp_dir, "image3.png"), (320, 20, 260, 260)),
        (os.path.join(gsp_dir, "image9.png"), (20, 320, 260, 260)),
        (os.path.join(gsp_dir, "image13.png"), (320, 320, 260, 260))
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

build_ultrasound_wide()
build_bandages_wide()
build_ultrasound_square()
build_bandages_square()
