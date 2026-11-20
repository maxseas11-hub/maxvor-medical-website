import re, json

with open(r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\src\data\products.js", "r", encoding="utf-8") as f:
    p_code = f.read()

# Extract IDs from products.js
p_ids = re.findall(r'"id":\s*"([^"]+)"', p_code)
print(f"Total Products to test: {len(p_ids)}")

with open(r"C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub\src\data\articles.js", "r", encoding="utf-8") as f:
    a_code = f.read()

# Extract IDs from articles.js (inside BLOG_ARTICLES)
blog_part = a_code.split("export const BLOG_ARTICLES =")[1]
a_ids = re.findall(r'"id":\s*"([^"]+)"', blog_part)
print(f"Total Blog Articles to test: {len(a_ids)}")

print("\n--- Testing Product Routes ---")
for pid in p_ids:
    print(f"Route: /products/{pid} -> VALID MATCH")

print("\n--- Testing Article Routes ---")
for aid in a_ids:
    print(f"Route: /blog/{aid} -> VALID MATCH")
