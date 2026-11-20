import re

with open(r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\src\data\products.js", "r", encoding="utf-8") as f:
    p_content = f.read()

p_ids = re.findall(r'"id":\s*"([^"]+)"', p_content)
p_slugs = re.findall(r'"slug":\s*"([^"]+)"', p_content)

print(f"Products count: {len(p_ids)}, slugs count: {len(p_slugs)}")
for i in range(min(5, len(p_ids))):
    print(f"P[{i}]: id={p_ids[i]}, slug={p_slugs[i] if i < len(p_slugs) else 'NONE'}")

with open(r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\src\data\articles.js", "r", encoding="utf-8") as f:
    a_content = f.read()

a_ids = re.findall(r'"id":\s*"([^"]+)"', a_content)
a_slugs = re.findall(r'"slug":\s*"([^"]+)"', a_content)

print(f"Articles count: {len(a_ids)}, slugs count: {len(a_slugs)}")
for i in range(min(5, len(a_ids))):
    print(f"A[{i}]: id={a_ids[i]}, slug={a_slugs[i] if i < len(a_slugs) else 'NONE'}")
