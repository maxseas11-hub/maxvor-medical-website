import os
import re

root_dir = r'C:\Users\C\AccioWork\2026-10-12-14-38-37-562-ddc1d861\medisupply-hub'

# 1. Update Categories.jsx: remove "CE & ISO" badge
cat_path = os.path.join(root_dir, 'src', 'components', 'categories', 'Categories.jsx')
with open(cat_path, 'r', encoding='utf-8') as f:
    cat_content = f.read()

# Replace <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">CE & ISO</span> with nothing or clean space
cat_content = re.sub(r'<span className="text-emerald-700 bg-emerald-50 px-2 py-0\.5 rounded font-medium">\s*CE & ISO\s*</span>', '', cat_content)
with open(cat_path, 'w', encoding='utf-8') as f:
    f.write(cat_content)
print('Removed CE & ISO from Categories.jsx')

# 2. Update ProductsPage.jsx: remove "CE & ISO Certified" badge
prod_page_path = os.path.join(root_dir, 'src', 'pages', 'ProductsPage.jsx')
with open(prod_page_path, 'r', encoding='utf-8') as f:
    prod_content = f.read()

prod_content = re.sub(r'<span className="text-\[11px\] font-bold text-emerald-700 bg-emerald-50 px-2 py-0\.5 rounded">\s*CE & ISO Certified\s*</span>', '', prod_content)
with open(prod_page_path, 'w', encoding='utf-8') as f:
    f.write(prod_content)
print('Removed CE & ISO from ProductsPage.jsx')

# 3. Update all components with widescreen fluid container: max-w-[1840px] and px-4 sm:px-8 lg:px-14 xl:px-20
for dirpath, _, filenames in os.walk(os.path.join(root_dir, 'src')):
    for fn in filenames:
        if fn.endswith(('.jsx', '.js')):
            fp = os.path.join(dirpath, fn)
            with open(fp, 'r', encoding='utf-8') as f:
                c = f.read()
            
            orig = c
            # Replace various max-w constraints with wide-screen max-w-[1840px]
            c = c.replace('max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12', 'w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20')
            c = c.replace('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', 'w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20')
            c = c.replace('max-w-[1536px] mx-auto', 'w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20')
            c = c.replace('max-w-7xl mx-auto', 'w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20')
            
            if c != orig:
                with open(fp, 'w', encoding='utf-8') as f:
                    f.write(c)
                print(f'Expanded container in {fn}')
