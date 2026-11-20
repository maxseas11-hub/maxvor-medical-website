# -*- coding: utf-8 -*-
import zipfile, xml.etree.ElementTree as ET, re, json, os, shutil

xlsx_path = r"C:\Users\C\Desktop\Product_Catalog_Template_20_Parameters.xlsx"
out_img_dir = r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\public\assets\images"

# 1. Extract embedded images
with zipfile.ZipFile(xlsx_path) as z:
    for item in z.namelist():
        if item.startswith('xl/media/') and not item.endswith('/'):
            fname = os.path.basename(item)
            target = os.path.join(out_img_dir, fname)
            with open(target, 'wb') as f:
                f.write(z.read(item))
            print(f"Extracted {item} -> {target} ({os.path.getsize(target)} bytes)")

# 2. Parse full sheet
def parse_full_xlsx(path):
    with zipfile.ZipFile(path) as z:
        ss_tree = ET.fromstring(z.read('xl/sharedStrings.xml')) if 'xl/sharedStrings.xml' in z.namelist() else None
        shared_strings = []
        if ss_tree is not None:
            for si in ss_tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
                t = ''.join([node.text for node in si.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t') if node.text])
                shared_strings.append(t)
        
        sheet_tree = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
        rows_dict = {}
        for r in sheet_tree.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
            row_idx = int(r.get('r'))
            rows_dict[row_idx] = {}
            for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
                ref = c.get('r')
                col_letters = re.match(r'([A-Z]+)', ref).group(1)
                t = c.get('t')
                v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
                val = v.text if v is not None else ''
                if t == 's' and val:
                    val = shared_strings[int(val)]
                rows_dict[row_idx][col_letters] = val
        return rows_dict

rows = parse_full_xlsx(xlsx_path)

# Let's identify the 8 products
products = []
current_prod = None

for r_idx in sorted(rows.keys()):
    if r_idx in [1, 2]:
        continue
    row = rows[r_idx]
    brand = row.get('A', '').strip()
    img_formula = row.get('B', '').strip()
    name = row.get('C', '').strip()
    model = row.get('D', '').strip()
    specialty = row.get('E', '').strip()
    param_k = row.get('F', '').strip()
    param_v = row.get('G', '').strip()
    app = row.get('H', '').strip()
    compat = row.get('I', '').strip()
    remarks = row.get('J', '').strip()
    
    if name or model or brand:
        if current_prod:
            products.append(current_prod)
        current_prod = {
            'index': len(products) + 1,
            'start_row': r_idx,
            'brand': brand,
            'img_formula': img_formula,
            'name': name,
            'model': model,
            'specialty': specialty,
            'clinical_applications': app,
            'compatible_device': compat,
            'remarks': remarks,
            'parameters': []
        }
    
    if current_prod and param_k:
        current_prod['parameters'].append({'label': param_k, 'value': param_v})

if current_prod:
    products.append(current_prod)

print(f"Total parsed products: {len(products)}")
for p in products:
    print(f"\nProduct #{p['index']} (Row {p['start_row']}):")
    print(f"  Brand: {p['brand']}")
    print(f"  Name: {p['name']}")
    print(f"  Model: {p['model']}")
    print(f"  Specialty: {p['specialty']}")
    print(f"  Applications: {p['clinical_applications']}")
    print(f"  Compatible: {p['compatible_device']}")
    print(f"  Parameters count: {len(p['parameters'])}")
    for param in p['parameters'][:4]:
        print(f"    - {param['label']}: {param['value']}")

with open('parsed_8_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)
