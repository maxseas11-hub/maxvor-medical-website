import zipfile
import os
import pypdf
import json

# 1. Extract zip to public/assets/images/endoscopy
zip_path = 'woke_images.zip'
target_dir = os.path.join('public', 'assets', 'images', 'endoscopy')
os.makedirs(target_dir, exist_ok=True)

with zipfile.ZipFile(zip_path, 'r') as z:
    for member in z.infolist():
        filename = member.filename
        try:
            filename = member.filename.encode('cp437').decode('gbk')
        except:
            pass
        
        parts = filename.split('/')
        if len(parts) > 1 and parts[-1]:
            clean_name = parts[-1]
            target_path = os.path.join(target_dir, clean_name)
            with open(target_path, 'wb') as outfile:
                outfile.write(z.read(member.filename))
            print(f"Extracted: {clean_name}")

print("\n--- Reading PDF Pages ---")
pdf_path = 'woke_catalog.pdf'
reader = pypdf.PdfReader(pdf_path)
pages_data = []
for i, page in enumerate(reader.pages):
    text = page.extract_text() or ''
    pages_data.append({
        'page': i + 1,
        'text': text
    })

with open('pdf_parsed_all.json', 'w', encoding='utf-8') as f:
    json.dump(pages_data, f, ensure_ascii=False, indent=2)

print(f"Successfully parsed {len(pages_data)} pages from PDF and saved to pdf_parsed_all.json")
