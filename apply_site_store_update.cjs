const fs = require('fs');
const path = require('path');

const siteStorePath = path.join(__dirname, 'src', 'data', 'siteStore.js');
let content = fs.readFileSync(siteStorePath, 'utf8');

// Replace mergeProductsWithCode and getSiteData
const newMergeAndGet = `// Find stored data across all storage versions to ensure user modifications are never lost
function findStoredData() {
  const keysToTry = [
    STORAGE_KEY,
    'maxvor_cms_site_data_v8',
    'maxvor_cms_site_data_v7',
    'maxvor_cms_site_data_v6',
    'maxvor_cms_site_data_v5',
    'maxvor_cms_site_data_v4',
    'maxvor_cms_site_data_v3',
    'maxvor_cms_site_data_v2',
    'maxvor_cms_site_data_v1',
    'maxvor_cms_site_data',
    'maxvor_site_data',
    'site_data'
  ];
  for (const k of keysToTry) {
    try {
      const raw = localStorage.getItem(k);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch {}
  }
  return null;
}

// Intelligently merge stored products with codebase products so newly added products are automatically synchronized
// and user-edited images/galleries from the admin panel are 100% preserved
function mergeProductsWithCode(storedList, codeList) {
  if (!Array.isArray(storedList) || storedList.length === 0) return normalizeProducts(codeList);
  const storedMap = new Map();
  storedList.forEach(p => {
    if (!p) return;
    if (p.id) storedMap.set(String(p.id).toLowerCase(), p);
    if (p.slug) storedMap.set(String(p.slug).toLowerCase(), p);
    if (p.model) storedMap.set(String(p.model).toLowerCase(), p);
    if (p.name) storedMap.set(String(p.name).toLowerCase().trim(), p);
  });

  const result = [];
  const processedKeys = new Set();

  codeList.forEach(codeItem => {
    const key = (codeItem.id || codeItem.slug || '').toLowerCase();
    const modelKey = (codeItem.model || '').toLowerCase();
    const nameKey = (codeItem.name || '').toLowerCase().trim();

    const matchedStored = (key && storedMap.get(key)) || (modelKey && storedMap.get(modelKey)) || (nameKey && storedMap.get(nameKey));

    if (matchedStored) {
      // Prioritize user-modified gallery and images
      const userGallery = Array.isArray(matchedStored.gallery) && matchedStored.gallery.length > 0 ? matchedStored.gallery : [];
      const codeGallery = Array.isArray(codeItem.gallery) && codeItem.gallery.length > 0 ? codeItem.gallery : (codeItem.image ? [codeItem.image] : []);
      
      // Combine user gallery and code gallery, keeping user-added images at the front
      const mergedGallery = Array.from(new Set([...userGallery, ...codeGallery]));

      result.push({
        ...codeItem,
        ...matchedStored,
        image: matchedStored.image || codeItem.image || mergedGallery[0],
        gallery: mergedGallery.length > 0 ? mergedGallery : [codeItem.image || '/assets/images/placeholder.svg'],
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

  // Retain any custom products added dynamically by user in admin UI
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

// Intelligently merge stored articles with codebase articles so newly added articles are automatically synchronized
function mergeArticlesWithCode(storedList, codeList) {
  if (!Array.isArray(storedList) || storedList.length === 0) return normalizeArticles(codeList);
  const storedMap = new Map();
  storedList.forEach(a => {
    if (!a) return;
    const key = a.id || a.slug;
    if (key) storedMap.set(String(key).toLowerCase(), a);
  });

  const result = [];
  const processedKeys = new Set();

  codeList.forEach(codeItem => {
    const key = (codeItem.id || codeItem.slug || '').toLowerCase();
    if (storedMap.has(key)) {
      result.push({
        ...codeItem,
        ...storedMap.get(key)
      });
    } else {
      result.push(codeItem);
    }
    if (key) processedKeys.add(key);
  });

  storedList.forEach(a => {
    if (!a) return;
    const key = (a.id || a.slug || '').toLowerCase();
    if (key && !processedKeys.has(key)) {
      result.push(a);
      processedKeys.add(key);
    }
  });

  return normalizeArticles(result);
}

// Initialize or load site store with guaranteed backwards compatibility and code synchronization
export function getSiteData() {
  try {
    const parsed = findStoredData();
    if (!parsed) {
      const initial = {
        productsEn: normalizeProducts(FEATURED_PRODUCTS),
        productsFr: normalizeProducts(FEATURED_PRODUCTS_FR),
        categoriesEn: CATEGORIES,
        categoriesFr: CATEGORIES_FR,
        articlesEn: normalizeArticles(BLOG_ARTICLES),
        articlesFr: normalizeArticles(BLOG_ARTICLES_FR),
        navigation: normalizeNavigation(DEFAULT_NAVIGATION),
        seo: DEFAULT_SEO_SETTINGS,
        pageContent: DEFAULT_PAGE_CONTENT,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }

    const merged = {
      productsEn: mergeProductsWithCode(parsed.productsEn, FEATURED_PRODUCTS),
      productsFr: mergeProductsWithCode(parsed.productsFr, FEATURED_PRODUCTS_FR),
      categoriesEn: parsed.categoriesEn || CATEGORIES,
      categoriesFr: parsed.categoriesFr || CATEGORIES_FR,
      articlesEn: mergeArticlesWithCode(parsed.articlesEn, BLOG_ARTICLES),
      articlesFr: mergeArticlesWithCode(parsed.articlesFr, BLOG_ARTICLES_FR),
      navigation: normalizeNavigation(parsed.navigation || DEFAULT_NAVIGATION),
      seo: parsed.seo || DEFAULT_SEO_SETTINGS,
      pageContent: parsed.pageContent || DEFAULT_PAGE_CONTENT,
      lastUpdated: parsed.lastUpdated || new Date().toISOString()
    };
    
    // Auto-save merged state to latest key
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch (e) {
    console.error('Failed to load site data', e);
    return {
      productsEn: normalizeProducts(FEATURED_PRODUCTS),
      productsFr: normalizeProducts(FEATURED_PRODUCTS_FR),
      categoriesEn: CATEGORIES,
      categoriesFr: CATEGORIES_FR,
      articlesEn: normalizeArticles(BLOG_ARTICLES),
      articlesFr: normalizeArticles(BLOG_ARTICLES_FR),
      navigation: normalizeNavigation(DEFAULT_NAVIGATION),
      seo: DEFAULT_SEO_SETTINGS,
      pageContent: DEFAULT_PAGE_CONTENT,
      lastUpdated: new Date().toISOString()
    };
  }
}`;

// Replace from `function mergeProductsWithCode` to end of `getSiteData`
const startIndex = content.indexOf('// Intelligently merge stored products with codebase products');
const endIndex = content.indexOf('export function saveSiteData');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.slice(0, startIndex) + newMergeAndGet + '\n\n' + content.slice(endIndex);
  fs.writeFileSync(siteStorePath, content, 'utf8');
  console.log('Successfully updated siteStore.js with deep migration and image preservation.');
} else {
  console.error('Could not find mergeProductsWithCode or saveSiteData in siteStore.js');
}
