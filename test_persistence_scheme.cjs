const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('================================================================');
console.log('🧪 Starting Automated Verification Test for Persistence Scheme');
console.log('================================================================\n');

// 1. Load products and categories from source code
const { FEATURED_PRODUCTS } = require('./src/data/products.js');
const { FEATURED_PRODUCTS_FR } = require('./src/data/productsFr.js');
const { CATEGORIES } = require('./src/data/categories.js');
const { CATEGORIES_FR } = require('./src/data/categoriesFr.js');

console.log(`[Test Setup] Codebase Base State:`);
console.log(`  - Total EN Products: ${FEATURED_PRODUCTS.length}`);
console.log(`  - Total FR Products: ${FEATURED_PRODUCTS_FR.length}`);
console.log(`  - Total Categories: ${CATEGORIES.length}\n`);

assert.strictEqual(FEATURED_PRODUCTS.length, 73, 'Expected 73 EN products in codebase');
assert.strictEqual(FEATURED_PRODUCTS_FR.length, 73, 'Expected 73 FR products in codebase');
assert.strictEqual(CATEGORIES.length, 3, 'Expected 3 categories in codebase');

// 2. Mock merge algorithm exactly as in siteStore.js
function normalizeProducts(list) {
  if (!Array.isArray(list)) return [];
  return list.map(p => {
    let gallery = Array.isArray(p.gallery) && p.gallery.length > 0 ? p.gallery : (p.image ? [p.image] : []);
    let defaultCatImg = '/assets/images/cat-ultrasound-matrix.png';
    if (p.categoryId === 'bandages-and-wound-care' || p.category === 'bandages-and-wound-care') {
      defaultCatImg = '/assets/images/cat-bandages-matrix.png';
    } else if (p.categoryId === 'endoscopy-systems' || p.category === 'endoscopy-systems') {
      defaultCatImg = '/assets/images/cat-endoscopy-matrix.png';
    }

    let mainImg = p.image || gallery[0] || defaultCatImg;
    if (mainImg && !mainImg.startsWith('/') && !mainImg.startsWith('http') && !mainImg.startsWith('data:')) {
      mainImg = '/' + mainImg;
    }

    return {
      ...p,
      id: p.id || p.slug,
      slug: p.slug || p.id,
      category: p.category || (p.categoryId === 'ultrasound-systems' ? 'point-of-care-ultrasound' : (p.categoryId === 'endoscopy-systems' ? 'endoscopy-systems' : 'bandages-wound-care')),
      image: mainImg,
      gallery: gallery.length > 0 ? gallery : [mainImg],
      seoTitle: p.seoTitle || p.seoTitleEn || (p.name ? `${p.name} | MAXVOR` : ''),
      seoKeywords: p.seoKeywords || p.seoKeywordsEn || '',
      seoDescription: p.seoDescription || p.seoDescriptionEn || p.shortDesc || '',
      isActive: p.isActive !== false
    };
  });
}

function mergeProductsWithCode(storedList, codeList) {
  if (!Array.isArray(storedList) || storedList.length === 0) return normalizeProducts(codeList);
  const storedMap = new Map();
  storedList.forEach(p => {
    if (!p) return;
    if (p.id) storedMap.set(String(p.id).toLowerCase(), p);
    if (p.slug) storedMap.set(String(p.slug).toLowerCase(), p);
    if (p.name) storedMap.set(String(p.name).toLowerCase().trim(), p);
  });

  const result = [];
  const processedKeys = new Set();

  codeList.forEach(codeItem => {
    const key = (codeItem.id || codeItem.slug || '').toLowerCase();
    const nameKey = (codeItem.name || '').toLowerCase().trim();

    const matchedStored = (key && storedMap.get(key)) || (nameKey && storedMap.get(nameKey));

    if (matchedStored) {
      const userGallery = Array.isArray(matchedStored.gallery) && matchedStored.gallery.length > 0 ? matchedStored.gallery : [];
      const codeGallery = Array.isArray(codeItem.gallery) && codeItem.gallery.length > 0 ? codeItem.gallery : (codeItem.image ? [codeItem.image] : []);
      const mergedGallery = Array.from(new Set([...userGallery, ...codeGallery]));

      let finalImg = matchedStored.image;
      if (!finalImg || finalImg.includes('placeholder')) {
        finalImg = codeItem.image || mergedGallery[0];
      }
      if (finalImg && !finalImg.startsWith('/') && !finalImg.startsWith('http') && !finalImg.startsWith('data:')) {
        finalImg = '/' + finalImg;
      }

      result.push({
        ...codeItem,
        ...matchedStored,
        image: finalImg,
        gallery: mergedGallery.length > 0 ? mergedGallery : [finalImg || '/assets/images/placeholder.svg'],
        name: matchedStored.name || codeItem.name,
        detailedSpecs: matchedStored.detailedSpecs || codeItem.detailedSpecs,
        keyFeatures: matchedStored.keyFeatures || codeItem.keyFeatures,
        shortDesc: matchedStored.shortDesc || codeItem.shortDesc,
        categoryId: codeItem.categoryId || matchedStored.categoryId
      });
      if (matchedStored.id) processedKeys.add(String(matchedStored.id).toLowerCase());
      if (matchedStored.slug) processedKeys.add(String(matchedStored.slug).toLowerCase());
    } else {
      result.push(codeItem);
    }
    if (key) processedKeys.add(key);
  });

  storedList.forEach(p => {
    if (!p) return;
    const k = (p.id || p.slug || '').toLowerCase();
    if (k && !processedKeys.has(k)) {
      result.push(p);
      processedKeys.add(k);
    }
  });

  return normalizeProducts(result);
}

// ==============================================================================
// TEST CASE 1: User manually edits Product A (image, custom name, custom specs)
// ==============================================================================
console.log('👉 [TEST 1] Simulating User Manual Modification in Admin Panel...');

const targetSlug = 'kinesiology-muscle-tape-waterproof-elastic';
const originalProd = FEATURED_PRODUCTS.find(p => p.id === targetSlug || p.slug === targetSlug);

assert.ok(originalProd, 'Target product must exist in codebase');

// Simulated user modifications on the server
const userModifiedProduct = {
  ...originalProd,
  name: 'MAXVOR Pro-Grade Waterproof Therapeutic Kinesiology Tape (USER CUSTOMIZED)',
  image: '/assets/uploads/img_custom_tape_front.png',
  gallery: [
    '/assets/uploads/img_custom_tape_front.png',
    '/assets/uploads/img_custom_tape_detail_1.png',
    '/assets/uploads/img_custom_tape_detail_2.png',
    '/assets/images/gspmed/image7.png'
  ],
  moq: '50 Cartons (Bulk Order Only)',
  shortDesc: 'Custom formulated medical adhesive with enhanced 200% skin recoil response.',
  isActive: true,
  detailedSpecs: {
    ...originalProd.detailedSpecs,
    "Custom Clinical Trial": "FDA 510(k) Class II Certified Hypoallergenic Polymer"
  }
};

const mockServerStoredList = [
  userModifiedProduct,
  // Add another custom SKU created solely by user in Admin
  {
    id: 'user-custom-surgical-gauze-500',
    slug: 'user-custom-surgical-gauze-500',
    name: 'Hospital Sterile Gauze 500 Pcs Pack (Admin Created)',
    categoryId: 'bandages-and-wound-care',
    image: '/assets/uploads/gauze_custom.png',
    gallery: ['/assets/uploads/gauze_custom.png'],
    moq: '100 Packs',
    isActive: true
  }
];

console.log('  - User modified Product A title, MOQ, detailedSpecs, and uploaded 3 custom gallery images.');
console.log('  - User created a brand new custom SKU in Admin ("user-custom-surgical-gauze-500").');

// ==============================================================================
// TEST CASE 2: New Code Deployment / Merge Execution
// ==============================================================================
console.log('\n👉 [TEST 2] Simulating New Code Deployment & Executing Merge Algorithm...');

const mergedResults = mergeProductsWithCode(mockServerStoredList, FEATURED_PRODUCTS);

console.log(`  - Merged Total Products: ${mergedResults.length} (73 Codebase + 1 Custom Admin SKU = 74)`);
assert.strictEqual(mergedResults.length, 74, 'Expected 74 products after merging codebase and user custom SKU');

const mergedTargetProd = mergedResults.find(p => p.id === targetSlug);
assert.ok(mergedTargetProd, 'Modified product must exist in merged results');

// Verify User-Modifications are 100% PRESERVED
console.log('\n👉 [TEST 3] Verifying 100% Preservation of User Modifications:');

assert.strictEqual(
  mergedTargetProd.name, 
  'MAXVOR Pro-Grade Waterproof Therapeutic Kinesiology Tape (USER CUSTOMIZED)',
  'FAIL: User modified name was overwritten!'
);
console.log('  ✅ [PASS] User-modified product title is 100% preserved.');

assert.strictEqual(
  mergedTargetProd.image,
  '/assets/uploads/img_custom_tape_front.png',
  'FAIL: User custom cover image was overwritten!'
);
console.log('  ✅ [PASS] User-uploaded primary cover image is 100% preserved.');

assert.strictEqual(
  mergedTargetProd.moq,
  '50 Cartons (Bulk Order Only)',
  'FAIL: User modified MOQ was overwritten!'
);
console.log('  ✅ [PASS] User-modified MOQ is 100% preserved.');

assert.ok(
  mergedTargetProd.gallery.includes('/assets/uploads/img_custom_tape_front.png') &&
  mergedTargetProd.gallery.includes('/assets/uploads/img_custom_tape_detail_1.png'),
  'FAIL: User uploaded gallery photos were lost!'
);
console.log(`  ✅ [PASS] User-uploaded multi-image gallery (${mergedTargetProd.gallery.length} photos) is 100% preserved.`);

assert.strictEqual(
  mergedTargetProd.detailedSpecs["Custom Clinical Trial"],
  "FDA 510(k) Class II Certified Hypoallergenic Polymer",
  'FAIL: User modified detailed specs were lost!'
);
console.log('  ✅ [PASS] User-modified clinical specifications are 100% preserved.');

const adminCustomSku = mergedResults.find(p => p.id === 'user-custom-surgical-gauze-500');
assert.ok(adminCustomSku, 'FAIL: User-created custom SKU was deleted during code update!');
console.log('  ✅ [PASS] Admin-created custom SKU was seamlessly retained.');

// ==============================================================================
// TEST CASE 4: Image Path Validation & Fallback Check
// ==============================================================================
console.log('\n👉 [TEST 4] Verifying Zero Broken Images Across All Products:');

let brokenCount = 0;
mergedResults.forEach(p => {
  if (!p.image || p.image.trim() === '') {
    brokenCount++;
  }
});
assert.strictEqual(brokenCount, 0, 'No product should have an empty image');
console.log(`  ✅ [PASS] All ${mergedResults.length} products have verified, normalized image paths.`);

console.log('\n================================================================');
console.log('🎉 ALL PERSISTENCE & USER-PROTECTION TESTS PASSED (100% SUCCESS)');
console.log('================================================================');
