import json

with open('parsed_1688_summary.json', encoding='utf-8') as f:
    items = json.load(f)

print('Total items in 1688 summary:', len(items))
for idx, p in enumerate(items, start=1):
    cn = p.get('name_cn') or ''
    en = p.get('name_en') or ''
    specs = p.get('specs') or ''
    row = p.get('row')
    print(f"[{idx:3d}] Excel_Row {row:3d}: CN='{cn[:40]}' | EN='{en[:30]}'")
