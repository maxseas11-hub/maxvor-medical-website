// Comprehensive Dynamic Site Store for MAXVOR CMS
// Supports Reactive Editing, Multilingual Products, Categories, Navigation, Page Content, and SEO Sitemaps

import { FEATURED_PRODUCTS } from './products';
import { FEATURED_PRODUCTS_FR } from './productsFr';
import { CATEGORIES } from './categories';
import { CATEGORIES_FR } from './categoriesFr';
import { BLOG_ARTICLES, SEO_KEYWORD_TAGS } from './articles';
import { BLOG_ARTICLES_FR, SEO_KEYWORD_TAGS_FR } from './articlesFr';
import { en } from '../i18n/locales/en';
import { fr } from '../i18n/locales/fr';

const STORAGE_KEY = 'maxvor_cms_site_data_v8';

export const DEFAULT_NAVIGATION = [
  { id: 'nav-home', labelEn: 'Home', labelFr: 'Accueil', path: '/', isVisible: true, hasMegaMenu: false },
  { id: 'nav-products', labelEn: 'Products', labelFr: 'Produits', path: '/products', isVisible: true, hasMegaMenu: true },
  { id: 'nav-certifications', labelEn: 'Certifications', labelFr: 'Certifications', path: '/certifications', isVisible: true, hasMegaMenu: false },
  { 
    id: 'nav-resources', 
    labelEn: 'Resources', 
    labelFr: 'Ressources', 
    path: '/faq', 
    isVisible: true, 
    hasDropdown: true,
    dropdownItems: [
      {
        id: 'dropdown-faq',
        labelEn: 'FAQ (Frequently Asked Questions)',
        labelFr: 'FAQ (Foire Aux Questions)',
        descEn: 'Common questions on B2B sourcing, MOQs, sample orders & shipping',
        descFr: 'Questions fréquentes sur l’approvisionnement, MOQ, échantillons et logistique',
        path: '/faq',
        icon: 'HelpCircle'
      },
      {
        id: 'dropdown-blog',
        labelEn: 'Clinical Articles & SOPs',
        labelFr: 'Articles Cliniques & Protocoles',
        descEn: 'Point-of-care ultrasound operating manuals and clinical dressing guides',
        descFr: 'Guides cliniques pour échographes portables et protocoles de pansements',
        path: '/blog',
        icon: 'FileText'
      },
      {
        id: 'dropdown-cert',
        labelEn: 'Quality & Certifications',
        labelFr: 'Qualité & Certifications',
        descEn: 'ISO 13485 standards, CE Declarations of Conformity and compliance files',
        descFr: 'Normes ISO 13485, Déclarations de Conformité CE et dossiers techniques',
        path: '/certifications',
        icon: 'ShieldCheck'
      }
    ]
  },
  { id: 'nav-blog', labelEn: 'Blogs', labelFr: 'Blogs', path: '/blog', isVisible: true, hasMegaMenu: false },
  { id: 'nav-about', labelEn: 'About Us', labelFr: 'À Propos', path: '/about', isVisible: true, hasMegaMenu: false },
  { id: 'nav-contact', labelEn: 'Contact', labelFr: 'Contact', path: '/contact', isVisible: true, hasMegaMenu: false },
];

export const DEFAULT_SEO_SETTINGS = {
  global: {
    siteTitleEn: 'MAXVOR | Authorized Medical Equipment & Diagnostic Systems Hub',
    siteTitleFr: 'MAXVOR | Équipements Médicaux Autorisés & Systèmes de Diagnostic',
    metaDescEn: 'Authorized export hub for handheld point-of-care ultrasound diagnostic probes, medical cohesive bandages, and emergency hospital consumables with ISO 13485 standards.',
    metaDescFr: 'Hub d’exportation autorisé pour sondes d’échographie portables de diagnostic, bandages cohésifs médicaux et consommables hospitaliers selon normes ISO 13485.',
    metaKeywordsEn: 'MAXVOR, point-of-care ultrasound, handheld ultrasound probe, convex probe, linear probe, cohesive elastic bandage, kinesiology tape, hospital medical supplies, B2B healthcare procurement',
    metaKeywordsFr: 'MAXVOR, échographe portable, sonde échographique portable, sonde convexe, sonde linéaire, bande cohésive, bande kinésiologie, consommables hospitaliers, appel d offres médical',
    canonicalUrl: 'https://maxvor.com',
    robotsIndexing: true
  },
  pages: {
    home: {
      name: 'Homepage (/)',
      titleEn: 'MAXVOR | B2B Medical Equipment & Diagnostic Systems Hub',
      titleFr: 'MAXVOR | Hub B2B d’Équipements Médicaux & Systèmes de Diagnostic',
      descEn: 'Empowering overseas healthcare distributors, hospital tenders, and clinic networks with authentic point-of-care ultrasound and hospital consumables.',
      descFr: 'Approvisionnement B2B pour distributeurs médicaux, appels d’offres et cliniques avec sondes d’échographie et consommables hospitaliers.',
      keywordsEn: 'MAXVOR, medical equipment exporter, point of care ultrasound, hospital consumables wholesale, medical device supplier, ultrasound probe distributor',
      keywordsFr: 'MAXVOR, exportateur équipement médical, échographie point of care, grossiste consommables hospitaliers, fournisseur matériel médical'
    },
    products: {
      name: 'Products Catalog (/products)',
      titleEn: 'Authorized Medical Products Catalog | MAXVOR',
      titleFr: 'Catalogue des Produits Médicaux Autorisés | MAXVOR',
      descEn: 'Browse 21 authorized point-of-care ultrasound diagnostic systems, cohesive bandages, and emergency clinical supplies with transparent MOQs.',
      descFr: 'Consultez 21 systèmes d’échographie portables autorisés, bandages cohésifs et consommables cliniques avec quantités minimales transparentes.',
      keywordsEn: 'medical catalog, ultrasound probe catalog, cohesive bandages wholesale, kinesiology tape manufacturer, hospital consumables list',
      keywordsFr: 'catalogue médical, catalogue sondes échographie, bandages cohésifs gros, fabricant bandes kinésiologie, consommables hôpital'
    },
    certifications: {
      name: 'Quality & Regulatory Compliance (/certifications)',
      titleEn: 'Regulatory & Quality Compliance | ISO 13485 & CE | MAXVOR',
      titleFr: 'Conformité Réglementaire & Qualité | ISO 13485 & CE | MAXVOR',
      descEn: 'Full export documentation packages including Declaration of Conformity (DoC), ISO 13485 quality systems, and technical dossiers.',
      descFr: 'Dossiers complets d’exportation comprenant Déclaration de Conformité (DoC), système de gestion ISO 13485 et dossiers techniques.',
      keywordsEn: 'medical device compliance, ISO 13485 certification, CE DoC documentation, hospital tender compliance, export technical dossier',
      keywordsFr: 'conformité dispositifs médicaux, certification ISO 13485, documentation CE DoC, conformité appels d offres, dossier technique export'
    },
    about: {
      name: 'About MAXVOR (/about)',
      titleEn: 'About MAXVOR | Integrated Medical Supply Chain & Diagnostic Hub',
      titleFr: 'À Propos de MAXVOR | Chaîne d’Approvisionnement Médical Intégrée',
      descEn: 'Learn about MAXVOR’s mission to supply reliable, standardized diagnostic devices and clinical consumables to global healthcare providers.',
      descFr: 'Découvrez la mission de MAXVOR : fournir des dispositifs de diagnostic fiables et consommables cliniques aux professionnels de santé.',
      keywordsEn: 'about MAXVOR, medical supply chain company, hospital procurement partner, medical export hub, global healthcare supply',
      keywordsFr: 'à propos de MAXVOR, entreprise approvisionnement médical, partenaire achats hospitaliers, hub export médical'
    },
    contact: {
      name: 'Contact & RFQ (/contact)',
      titleEn: 'Contact B2B Export Desk | Request Quotation | MAXVOR',
      titleFr: 'Contacter le Service Export B2B | Demande de Devis | MAXVOR',
      descEn: 'Connect with MAXVOR global procurement specialists for official proforma invoices, CIF port quotations, and catalog requests.',
      descFr: 'Contactez les spécialistes MAXVOR pour factures proforma, cotations CIF portuaires et demandes de catalogues officiels.',
      keywordsEn: 'contact MAXVOR, medical RFQ quotation, proforma invoice request, medical distributor inquiry, hospital tender support',
      keywordsFr: 'contact MAXVOR, devis médical RFQ, demande facture proforma, demande distributeur médical, assistance appel d offres'
    },
    blog: {
      name: 'Clinical Knowledge & SOPs (/blog)',
      titleEn: 'Clinical Articles & Procurement Guides | MAXVOR Knowledge Base',
      titleFr: 'Articles Cliniques & Guides d’Approvisionnement | MAXVOR',
      descEn: 'In-depth clinical SOPs, point-of-care ultrasound operating manuals, and B2B hospital procurement insights.',
      descFr: 'SOPs cliniques approfondies, manuels d’utilisation pour échographie portable et guides d’approvisionnement hospitalier.',
      keywordsEn: 'ultrasound clinical SOP, POCUS manual, medical procurement guide, cohesive bandage application, clinical case studies',
      keywordsFr: 'SOP clinique échographie, manuel POCUS, guide achats médicaux, application bandage cohésif, études de cas cliniques'
    },
    faq: {
      name: 'FAQ & Resources (/faq)',
      titleEn: 'Frequently Asked Questions (FAQ) | B2B Medical Sourcing | MAXVOR',
      titleFr: 'Foire Aux Questions (FAQ) | Approvisionnement Médical B2B | MAXVOR',
      descEn: 'Find clear answers regarding MAXVOR multi-category medical supplies, MOQs, sample orders, ISO 13485 compliance, and international shipping.',
      descFr: 'Consultez les réponses sur le sourcing médical MAXVOR, les quantités minimales (MOQ), les échantillons, la conformité ISO 13485 et la logistique.',
      keywordsEn: 'medical FAQ, medical supplies procurement FAQ, ultrasound MOQ, cohesive bandage wholesale questions, hospital tender documentation',
      keywordsFr: 'FAQ matériel médical, questions approvisionnement médical, MOQ échographe, achat bandage cohésif, dossier appel d offres'
    }
  }
};

export const DEFAULT_PAGE_CONTENT = {
  hero: {
    badgeEn: 'Authorized Medical Equipment & Diagnostic Systems Hub',
    badgeFr: 'Hub d’Équipements Médicaux & Systèmes de Diagnostic Autorisés',
    titleEn: 'Professional Point-of-Care Ultrasound & Clinical Supplies',
    titleFr: 'Systèmes d’Échographie Portables & Fournitures Cliniques',
    subtitleEn: 'Streamlining B2B procurement for overseas healthcare distributors, hospital tenders, and clinic networks with direct source pricing, export documentation, and reliable fulfillment.',
    subtitleFr: 'Optimisation de l’approvisionnement B2B pour les distributeurs de santé, appels d’offres hospitaliers et réseaux de cliniques avec prix directs d’usine et dossiers complets.',
    feature1En: 'Factory Direct B2B Wholesale Pricing',
    feature1Fr: 'Tarification Grossiste Directe d’Usine',
    feature2En: 'ISO Standard Manufacturing Quality',
    feature2Fr: 'Gestion de la Qualité selon Norme ISO 13485',
    feature3En: 'Comprehensive Export Documentation Support',
    feature3Fr: 'Support Complet pour la Documentation Réglementaire & Export',
    feature4En: 'Full Lot Inspection & Global Dispatch',
    feature4Fr: 'Dossiers d’Exportation & Inspection par Lot',
    cleanroomImage: '/assets/images/hero-cleanroom.png'
  },
  contact: {
    email: 'sales@maxvor.com',
    hoursEn: 'Monday - Saturday, 8:00 AM - 10:00 PM (UTC+8)',
    hoursFr: 'Du lundi au samedi, 8h00 - 22h00 (UTC+8)',
    responseRate: '< 12 Hours'
  }
};

// Normalize products ensuring id, slug, category, gallery, and SEO fields are consistently populated
function normalizeProducts(list) {
  if (!Array.isArray(list)) return [];
  return list.map(p => {
    let gallery = Array.isArray(p.gallery) && p.gallery.length > 0 ? p.gallery : (p.image ? [p.image] : []);
    return {
      ...p,
      id: p.id || p.slug,
      slug: p.slug || p.id,
      category: p.category || (p.categoryId === 'ultrasound-systems' ? 'point-of-care-ultrasound' : 'bandages-wound-care'),
      image: p.image || gallery[0] || '/assets/images/healson-hs-up20-convex-bw.png',
      gallery: gallery,
      seoTitle: p.seoTitle || p.seoTitleEn || (p.name ? `${p.name} | MAXVOR` : ''),
      seoKeywords: p.seoKeywords || p.seoKeywordsEn || '',
      seoDescription: p.seoDescription || p.seoDescriptionEn || p.shortDesc || '',
      isActive: p.isActive !== false
    };
  });
}

// Normalize navigation ensuring proper ordering and presence of Resources & FAQ
function normalizeNavigation(list) {
  if (!Array.isArray(list) || list.length === 0) return DEFAULT_NAVIGATION;
  let nav = [...list];
  const hasResources = nav.some(item => item.id === 'nav-resources' || item.path === '/faq' || item.path === '/resources');
  
  if (!hasResources) {
    const resourcesItem = DEFAULT_NAVIGATION.find(item => item.id === 'nav-resources') || {
      id: 'nav-resources',
      labelEn: 'Resources',
      labelFr: 'Ressources',
      path: '/faq',
      isVisible: true,
      hasDropdown: true
    };
    const certIdx = nav.findIndex(item => item.path === '/certifications' || item.id === 'nav-certifications');
    if (certIdx !== -1) {
      nav.splice(certIdx + 1, 0, resourcesItem);
    } else {
      const blogIdx = nav.findIndex(item => item.path === '/blog' || item.id === 'nav-blog');
      if (blogIdx !== -1) {
        nav.splice(blogIdx, 0, resourcesItem);
      } else {
        nav.push(resourcesItem);
      }
    }
  }

  // Ensure Blogs is renamed from Clinical Articles if any old label exists
  return nav.map(item => {
    if (item.path === '/blog' || item.id === 'nav-blog') {
      return { ...item, labelEn: 'Blogs', labelFr: 'Blogs' };
    }
    return item;
  });
}

// Normalize articles ensuring id, slug, and publish status
function normalizeArticles(list) {
  if (!Array.isArray(list)) return [];
  return list.map(a => ({
    ...a,
    id: a.id || a.slug,
    slug: a.slug || a.id,
    isPublished: a.isPublished !== false
  }));
}

// Find stored data across all storage versions to ensure user modifications are never lost
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
}

export function saveSiteData(data) {
  try {
    const updated = {
      ...data,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Dispatch a custom event so other components update reactively in real time
    window.dispatchEvent(new CustomEvent('maxvor_site_data_updated', { detail: updated }));

    // Asynchronously synchronize and persist to the Windows Server IIS backend
    try {
      fetch('/api/site-data.ashx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(updated)
      }).catch(err => {
        // Silently handle offline/local mock mode
        console.warn('Server sync skipped in offline/preview mode:', err.message);
      });
    } catch {}

    return updated;
  } catch (e) {
    console.error('Failed to save site data', e);
    return data;
  }
}

// Fetch live server-persisted database from IIS backend on app start
export async function fetchServerSiteData() {
  try {
    const res = await fetch('/api/site-data.ashx');
    if (res.ok) {
      const serverData = await res.json();
      if (serverData && serverData.productsEn && Array.isArray(serverData.productsEn)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(serverData));
        window.dispatchEvent(new CustomEvent('maxvor_site_data_updated', { detail: serverData }));
        return serverData;
      }
    }
  } catch (e) {
    // Normal in offline/local mock preview
  }
  return getSiteData();
}

// Upload image file directly to server's /assets/uploads/ directory
export async function uploadImageToServer(file) {
  if (!file) return null;
  
  try {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload.ashx', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.url) {
        return json.url;
      }
    }
  } catch (e) {
    console.warn('Server upload endpoint unreachable, falling back to base64 DataURL');
  }

  // Fallback to local Base64 DataURL
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
}

// Upload multiple image files to server's /assets/uploads/ directory
export async function uploadMultipleImagesToServer(files) {
  if (!files || files.length === 0) return [];
  
  const fileArray = Array.from(files);
  const uploadedUrls = [];

  for (let i = 0; i < fileArray.length; i++) {
    const url = await uploadImageToServer(fileArray[i]);
    if (url) uploadedUrls.push(url);
  }

  return uploadedUrls;
}

export function resetSiteDataToDefault() {
  const defaultData = {
    productsEn: FEATURED_PRODUCTS,
    productsFr: FEATURED_PRODUCTS_FR,
    categoriesEn: CATEGORIES,
    categoriesFr: CATEGORIES_FR,
    articlesEn: BLOG_ARTICLES,
    articlesFr: BLOG_ARTICLES_FR,
    navigation: DEFAULT_NAVIGATION,
    seo: DEFAULT_SEO_SETTINGS,
    pageContent: DEFAULT_PAGE_CONTENT,
    lastUpdated: new Date().toISOString()
  };
  return saveSiteData(defaultData);
}

// Generate dynamic sitemap.xml
export function generateSitemapXml(siteData = null) {
  const data = siteData || getSiteData();
  const domain = data.seo?.global?.canonicalUrl || 'https://maxvor.com';
  const today = new Date().toISOString().slice(0, 10);

  const staticUrls = [
    { loc: `${domain}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${domain}/products`, priority: '0.9', changefreq: 'daily' },
    { loc: `${domain}/faq`, priority: '0.85', changefreq: 'weekly' },
    { loc: `${domain}/blog`, priority: '0.9', changefreq: 'daily' },
    { loc: `${domain}/certifications`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${domain}/about`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${domain}/contact`, priority: '0.8', changefreq: 'monthly' },
  ];

  const productUrls = (data.productsEn || [])
    .filter(p => p.isActive !== false)
    .map(p => ({
      loc: `${domain}/products/${p.slug || p.id}`,
      priority: '0.85',
      changefreq: 'weekly'
    }));

  const articleUrls = (data.articlesEn || [])
    .filter(a => a.isPublished !== false)
    .map(a => ({
      loc: `${domain}/blog/${a.slug || a.id}`,
      priority: '0.75',
      changefreq: 'monthly'
    }));

  const allUrls = [...staticUrls, ...productUrls, ...articleUrls];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  allUrls.forEach(u => {
    xml += `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>\n`;
  });
  xml += '</urlset>';

  return xml;
}

// Generate dynamic robots.txt
export function generateRobotsTxt(siteData = null) {
  const data = siteData || getSiteData();
  const domain = data.seo?.global?.canonicalUrl || 'https://maxvor.com';
  return `# robots.txt for MAXVOR Medical Export Portal
User-agent: *
Disallow: /admin
Disallow: /api/
Allow: /
Allow: /products
Allow: /faq
Allow: /blog
Allow: /certifications
Allow: /about
Allow: /contact

Sitemap: ${domain}/sitemap.xml
`;
}
