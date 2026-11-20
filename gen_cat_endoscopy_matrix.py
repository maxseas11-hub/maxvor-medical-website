import os
from PIL import Image

# Create 1200x480 matrix image for endoscopy
bg_matrix = Image.new('RGBA', (1200, 480), (255, 255, 255, 255))

# Pick 4 representative endoscopy images:
# 1. Visual puncture mini nephroscope
# 2. Reusable digital flexible ureteroscope
# 3. Sheath-free rigid cystoscope / nephroscope
# 4. HD LED cold light source / 4K camera
img1_path = 'public/assets/images/endoscopy/visual-puncture-mini-nephroscope.png'
img2_path = 'public/assets/images/endoscopy/single-use-flexible-ureteroscope.png'
img3_path = 'public/assets/images/endoscopy/usp-12-rigid-digital-uretero-renoscope.png'
img4_path = 'public/assets/images/endoscopy/hd-led-cold-light-source.png'

images = [img1_path, img2_path, img3_path, img4_path]
slot_width = 1200 // len(images)

for i, p in enumerate(images):
    if os.path.exists(p):
        im = Image.open(p).convert('RGBA')
        # resize maintaining aspect ratio within slot (260x380)
        im.thumbnail((260, 380), Image.Resampling.LANCZOS)
        # paste centered in slot
        x = i * slot_width + (slot_width - im.width) // 2
        y = (480 - im.height) // 2
        bg_matrix.paste(im, (x, y), im)

bg_matrix.convert('RGB').save('public/assets/images/cat-endoscopy-matrix.png', 'PNG')
print('Created cat-endoscopy-matrix.png')

# Create 600x600 square image
bg_square = Image.new('RGBA', (600, 600), (255, 255, 255, 255))
if os.path.exists(img1_path):
    im_sq = Image.open(img1_path).convert('RGBA')
    im_sq.thumbnail((520, 520), Image.Resampling.LANCZOS)
    x = (600 - im_sq.width) // 2
    y = (600 - im_sq.height) // 2
    bg_square.paste(im_sq, (x, y), im_sq)
bg_square.convert('RGB').save('public/assets/images/cat-endoscopy-square.png', 'PNG')
print('Created cat-endoscopy-square.png')
