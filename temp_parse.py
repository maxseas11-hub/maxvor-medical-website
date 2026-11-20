import zipfile, xml.etree.ElementTree as ET, re, json

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

rows1 = parse_full_xlsx(r'C:\Users\C\Desktop\1688找的医疗耗材.xlsx')

prods = []
for r_idx in sorted(rows1.keys()):
    if r_idx == 1: continue
    row = rows1[r_idx]
    link = row.get('F', '')
    name_cn = row.get('J', '')
    name_en = row.get('I', '')
    specs = row.get('O', '')
    features = row.get('R', '')
    app = row.get('S', '')
    mat = row.get('T', '')
    reg = row.get('E', '') or row.get('D', '') or row.get('Q', '')
    cat = row.get('B', '')
    subcat = row.get('C', '')
    
    if name_cn or link:
        prods.append({
            'row': r_idx,
            'cat': cat,
            'subcat': subcat,
            'name_cn': name_cn,
            'name_en': name_en,
            'link': link[:60] if link else '',
            'specs': specs,
            'features': features,
            'app': app,
            'mat': mat,
            'reg': reg
        })

print(f'Total items with name or link in 1688: {len(prods)}')
with open('parsed_1688_summary.json', 'w', encoding='utf-8') as f:
    json.dump(prods, f, ensure_ascii=False, indent=2)

for p in prods[:70]:
    print(f"Row {p['row']:3d}: CN='{p['name_cn'][:35]}' | EN='{p['name_en'][:30]}' | Cat='{p['cat']}'")
