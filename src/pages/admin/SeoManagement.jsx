import React, { useState } from 'react';
import { 
  Globe2, 
  FileCode, 
  Download, 
  Copy, 
  CheckCircle2, 
  Save, 
  ExternalLink, 
  Search, 
  Layers, 
  Bot,
  RefreshCw,
  Code,
  Sparkles,
  Package,
  Edit3,
  X,
  Tag,
  FileText,
  SlidersHorizontal,
  Check,
  Eye,
  ArrowRight
} from 'lucide-react';
import { getSiteData, saveSiteData, generateSitemapXml, generateRobotsTxt, DEFAULT_SEO_SETTINGS } from '../../data/siteStore';

export default function SeoManagement() {
  const [siteData, setSiteData] = useState(() => getSiteData());
  const [activeSubTab, setActiveSubTab] = useState('global'); // 'global' | 'pages' | 'products' | 'sitemap'
  const [editLang, setEditLang] = useState('en');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedSitemap, setCopiedSitemap] = useState(false);
  const [copiedRobots, setCopiedRobots] = useState(false);

  // Page SEO selection state
  const [selectedPageKey, setSelectedPageKey] = useState('home');

  // Product SEO search & filter state
  const [productSearchTerm, setProductSearchTerm] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('ALL');
  const [editingProductSeo, setEditingProductSeo] = useState(null); // When product SEO modal is open

  const seo = siteData.seo || DEFAULT_SEO_SETTINGS;

  const [globalSeo, setGlobalSeo] = useState({
    siteTitleEn: seo.global?.siteTitleEn || '',
    siteTitleFr: seo.global?.siteTitleFr || '',
    metaDescEn: seo.global?.metaDescEn || '',
    metaDescFr: seo.global?.metaDescFr || '',
    metaKeywordsEn: seo.global?.metaKeywordsEn || '',
    metaKeywordsFr: seo.global?.metaKeywordsFr || '',
    canonicalUrl: seo.global?.canonicalUrl || 'https://maxvor.com',
    robotsIndexing: seo.global?.robotsIndexing !== false,
    gscVerificationCode: seo.global?.gscVerificationCode || ''
  });

  const [pageSeo, setPageSeo] = useState({
    home: { 
      name: 'Home (/)', 
      titleEn: seo.pages?.home?.titleEn || '', 
      titleFr: seo.pages?.home?.titleFr || '', 
      descEn: seo.pages?.home?.descEn || '', 
      descFr: seo.pages?.home?.descFr || '',
      keywordsEn: seo.pages?.home?.keywordsEn || '',
      keywordsFr: seo.pages?.home?.keywordsFr || ''
    },
    products: { 
      name: 'Products (/products)', 
      titleEn: seo.pages?.products?.titleEn || '', 
      titleFr: seo.pages?.products?.titleFr || '', 
      descEn: seo.pages?.products?.descEn || '', 
      descFr: seo.pages?.products?.descFr || '',
      keywordsEn: seo.pages?.products?.keywordsEn || '',
      keywordsFr: seo.pages?.products?.keywordsFr || ''
    },
    certifications: { 
      name: 'Quality & Regulatory (/certifications)', 
      titleEn: seo.pages?.certifications?.titleEn || '', 
      titleFr: seo.pages?.certifications?.titleFr || '', 
      descEn: seo.pages?.certifications?.descEn || '', 
      descFr: seo.pages?.certifications?.descFr || '',
      keywordsEn: seo.pages?.certifications?.keywordsEn || '',
      keywordsFr: seo.pages?.certifications?.keywordsFr || ''
    },
    about: { 
      name: 'About Us (/about)', 
      titleEn: seo.pages?.about?.titleEn || '', 
      titleFr: seo.pages?.about?.titleFr || '', 
      descEn: seo.pages?.about?.descEn || '', 
      descFr: seo.pages?.about?.descFr || '',
      keywordsEn: seo.pages?.about?.keywordsEn || '',
      keywordsFr: seo.pages?.about?.keywordsFr || ''
    },
    contact: { 
      name: 'Contact & RFQ (/contact)', 
      titleEn: seo.pages?.contact?.titleEn || '', 
      titleFr: seo.pages?.contact?.titleFr || '', 
      descEn: seo.pages?.contact?.descEn || '', 
      descFr: seo.pages?.contact?.descFr || '',
      keywordsEn: seo.pages?.contact?.keywordsEn || '',
      keywordsFr: seo.pages?.contact?.keywordsFr || ''
    },
    faq: { 
      name: 'FAQ & Resources (/faq)', 
      titleEn: seo.pages?.faq?.titleEn || 'Frequently Asked Questions (FAQ) | Product Sourcing | MAXVOR', 
      titleFr: seo.pages?.faq?.titleFr || 'Foire Aux Questions (FAQ) | Approvisionnement Médical | MAXVOR', 
      descEn: seo.pages?.faq?.descEn || 'Find clear answers regarding MAXVOR multi-category medical supplies, MOQs, sample orders, ISO 13485 compliance, and international shipping.', 
      descFr: seo.pages?.faq?.descFr || 'Consultez les réponses sur le sourcing médical MAXVOR, les quantités minimales (MOQ), les échantillons, la conformité ISO 13485 et la logistique.',
      keywordsEn: seo.pages?.faq?.keywordsEn || 'medical FAQ, medical supplies procurement FAQ, ultrasound MOQ, cohesive bandage wholesale questions, hospital tender documentation',
      keywordsFr: seo.pages?.faq?.keywordsFr || 'FAQ matériel médical, questions approvisionnement médical, MOQ échographe, achat bandage cohésif, dossier appel d offres'
    },
    blog: { 
      name: 'Clinical Knowledge & SOPs (/blog)', 
      titleEn: seo.pages?.blog?.titleEn || '', 
      titleFr: seo.pages?.blog?.titleFr || '', 
      descEn: seo.pages?.blog?.descEn || '', 
      descFr: seo.pages?.blog?.descFr || '',
      keywordsEn: seo.pages?.blog?.keywordsEn || '',
      keywordsFr: seo.pages?.blog?.keywordsFr || ''
    }
  });

  const productsEn = siteData.productsEn || [];
  const productsFr = siteData.productsFr || [];

  const triggerSuccess = (msg = 'SEO configuration saved successfully!') => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleSaveGlobalAndPages = (e) => {
    if (e) e.preventDefault();
    const updated = {
      ...siteData,
      seo: {
        ...siteData.seo,
        global: globalSeo,
        pages: pageSeo
      }
    };
    setSiteData(updated);
    saveSiteData(updated);
    triggerSuccess('Global and Page SEO configurations saved and sitemap updated!');
  };

  // Product SEO Modal Handlers
  const handleOpenProductSeoModal = (product) => {
    const prodEn = productsEn.find(p => p.id === product.id || p.slug === product.slug) || product;
    const prodFr = productsFr.find(p => p.id === product.id || p.slug === product.slug) || prodEn;

    setEditingProductSeo({
      id: prodEn.id || prodEn.slug,
      slug: prodEn.slug || prodEn.id,
      nameEn: prodEn.name || '',
      nameFr: prodFr.name || prodEn.name || '',
      category: prodEn.category || 'point-of-care-ultrasound',
      image: prodEn.image || '/assets/images/healson-hs-up20-convex-bw.png',
      shortDescEn: prodEn.shortDesc || prodEn.description || '',
      shortDescFr: prodFr.shortDesc || prodFr.description || '',
      highlightsEn: prodEn.highlights || prodEn.keyFeatures || [],
      highlightsFr: prodFr.highlights || prodFr.keyFeatures || [],
      seoTitleEn: prodEn.seoTitle || prodEn.seoTitleEn || (prodEn.name ? `${prodEn.name} | MAXVOR` : ''),
      seoTitleFr: prodFr.seoTitle || prodFr.seoTitleFr || (prodFr.name ? `${prodFr.name} | MAXVOR` : (prodEn.name ? `${prodEn.name} | MAXVOR` : '')),
      seoKeywordsEn: prodEn.seoKeywords || prodEn.seoKeywordsEn || '',
      seoKeywordsFr: prodFr.seoKeywords || prodFr.seoKeywordsFr || '',
      seoDescriptionEn: prodEn.seoDescription || prodEn.seoDescriptionEn || prodEn.shortDesc || '',
      seoDescriptionFr: prodFr.seoDescription || prodFr.seoDescriptionFr || prodFr.shortDesc || ''
    });
  };

  const handleSaveProductSeoModal = (e) => {
    e.preventDefault();
    if (!editingProductSeo) return;

    const updateProductInList = (list, isFr = false) => {
      return list.map(p => {
        if (p.id === editingProductSeo.id || p.slug === editingProductSeo.id || p.slug === editingProductSeo.slug) {
          return {
            ...p,
            slug: editingProductSeo.slug,
            seoTitle: isFr ? (editingProductSeo.seoTitleFr || editingProductSeo.seoTitleEn) : editingProductSeo.seoTitleEn,
            seoTitleEn: editingProductSeo.seoTitleEn,
            seoTitleFr: editingProductSeo.seoTitleFr || editingProductSeo.seoTitleEn,
            seoKeywords: isFr ? (editingProductSeo.seoKeywordsFr || editingProductSeo.seoKeywordsEn) : editingProductSeo.seoKeywordsEn,
            seoKeywordsEn: editingProductSeo.seoKeywordsEn,
            seoKeywordsFr: editingProductSeo.seoKeywordsFr || editingProductSeo.seoKeywordsEn,
            seoDescription: isFr ? (editingProductSeo.seoDescriptionFr || editingProductSeo.seoDescriptionEn) : editingProductSeo.seoDescriptionEn,
            seoDescriptionEn: editingProductSeo.seoDescriptionEn,
            seoDescriptionFr: editingProductSeo.seoDescriptionFr || editingProductSeo.seoDescriptionEn
          };
        }
        return p;
      });
    };

    const newProdsEn = updateProductInList(productsEn, false);
    const newProdsFr = updateProductInList(productsFr, true);

    const updated = {
      ...siteData,
      productsEn: newProdsEn,
      productsFr: newProdsFr
    };

    setSiteData(updated);
    saveSiteData(updated);
    setEditingProductSeo(null);
    triggerSuccess(`SEO metadata for "${editingProductSeo.nameEn}" saved successfully!`);
  };

  const currentSitemapXml = generateSitemapXml(siteData);
  const currentRobotsTxt = generateRobotsTxt(siteData);

  const handleCopySitemap = () => {
    navigator.clipboard.writeText(currentSitemapXml);
    setCopiedSitemap(true);
    setTimeout(() => setCopiedSitemap(false), 2500);
  };

  const handleCopyRobots = () => {
    navigator.clipboard.writeText(currentRobotsTxt);
    setCopiedRobots(true);
    setTimeout(() => setCopiedRobots(false), 2500);
  };

  const handleDownloadSitemap = () => {
    const blob = new Blob([currentSitemapXml], { type: 'application/xml;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDownloadRobots = () => {
    const blob = new Blob([currentRobotsTxt], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'robots.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // Filtered Products for Product SEO Matrix
  const filteredProducts = productsEn.filter(p => {
    const matchesSearch = 
      p.name?.toLowerCase().includes(productSearchTerm.toLowerCase()) ||
      p.slug?.toLowerCase().includes(productSearchTerm.toLowerCase()) ||
      p.seoKeywords?.toLowerCase().includes(productSearchTerm.toLowerCase()) ||
      p.seoTitle?.toLowerCase().includes(productSearchTerm.toLowerCase());
    const matchesCat = productCategoryFilter === 'ALL' || p.category === productCategoryFilter || p.categoryId === productCategoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            SEO & GEO Customization Center
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Configure global meta tags, fine-tune individual page search snippets, customize product-level SEO metadata, and generate Google-compliant sitemaps.
          </p>
        </div>

        {/* Sub-Tab Navigation Bar */}
        <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-border-soft text-xs font-bold overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('global')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeSubTab === 'global' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Global SEO
          </button>
          <button
            onClick={() => setActiveSubTab('pages')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeSubTab === 'pages' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Page-by-Page SEO
          </button>
          <button
            onClick={() => setActiveSubTab('products')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${activeSubTab === 'products' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <Package className="w-3.5 h-3.5 text-secondary" />
            <span>Product SEO Matrix</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">{productsEn.length}</span>
          </button>
          <button
            onClick={() => setActiveSubTab('sitemap')}
            className={`px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${activeSubTab === 'sitemap' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <FileCode className="w-3.5 h-3.5 text-secondary" />
            <span>Sitemap & Robots</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-bold animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>SEO settings updated, synchronized across catalogs, and persistent to cloud!</span>
        </div>
      )}

      {/* ============================================================== */}
      {/* 1. Global SEO Tab */}
      {/* ============================================================== */}
      {activeSubTab === 'global' && (
        <form onSubmit={handleSaveGlobalAndPages} className="space-y-6 text-xs">
          <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border-soft">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-secondary" />
                  <span>Global Brand & Search Engine Meta Tags</span>
                </h3>
                <p className="text-[11px] text-muted mt-0.5">Default fallback metadata applied when page-specific tags are not defined.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditLang('en')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer ${editLang === 'en' ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  EN 🇬🇧
                </button>
                <button
                  type="button"
                  onClick={() => setEditLang('fr')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer ${editLang === 'fr' ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  FR 🇫🇷
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-slate-700">
                    Default Site Title Tag ({editLang === 'en' ? 'English' : 'Français'})
                  </label>
                  <span className="text-[10px] text-muted">
                    {(editLang === 'en' ? globalSeo.siteTitleEn : globalSeo.siteTitleFr).length} characters
                  </span>
                </div>
                <input 
                  type="text" 
                  value={editLang === 'en' ? globalSeo.siteTitleEn : globalSeo.siteTitleFr}
                  onChange={(e) => setGlobalSeo({
                    ...globalSeo,
                    [editLang === 'en' ? 'siteTitleEn' : 'siteTitleFr']: e.target.value
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-slate-700">
                    Global Meta Description ({editLang === 'en' ? 'English' : 'Français'})
                  </label>
                  <span className="text-[10px] text-muted">
                    {(editLang === 'en' ? globalSeo.metaDescEn : globalSeo.metaDescFr).length} characters (recom. 140-160)
                  </span>
                </div>
                <textarea 
                  rows={3}
                  value={editLang === 'en' ? globalSeo.metaDescEn : globalSeo.metaDescFr}
                  onChange={(e) => setGlobalSeo({
                    ...globalSeo,
                    [editLang === 'en' ? 'metaDescEn' : 'metaDescFr']: e.target.value
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 leading-relaxed resize-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Core High-Intent Keywords (Comma Separated)
                </label>
                <textarea 
                  rows={2}
                  value={editLang === 'en' ? globalSeo.metaKeywordsEn : globalSeo.metaKeywordsFr}
                  onChange={(e) => setGlobalSeo({
                    ...globalSeo,
                    [editLang === 'en' ? 'metaKeywordsEn' : 'metaKeywordsFr']: e.target.value
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-mono text-[11px] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border-soft">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Canonical Domain URL</label>
                  <input 
                    type="url" 
                    value={globalSeo.canonicalUrl}
                    onChange={(e) => setGlobalSeo({ ...globalSeo, canonicalUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Google Search Console Verification Tag (Optional)</label>
                  <input 
                    type="text" 
                    value={globalSeo.gscVerificationCode || ''}
                    onChange={(e) => setGlobalSeo({ ...globalSeo, gscVerificationCode: e.target.value })}
                    placeholder='e.g. google-site-verification code'
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-mono text-[11px]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-700 select-none">
                  <input 
                    type="checkbox" 
                    checked={globalSeo.robotsIndexing}
                    onChange={(e) => setGlobalSeo({ ...globalSeo, robotsIndexing: e.target.checked })}
                    className="rounded text-secondary focus:ring-secondary w-4 h-4 cursor-pointer"
                  />
                  <span>Allow Search Engine Crawlers to Index Website (index, follow)</span>
                </label>
              </div>
            </div>

            {/* Live Global SERP Preview Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-border-soft space-y-1.5 mt-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                <Globe2 className="w-3 h-3 text-secondary" />
                <span>Google Search Result Snippet Preview (Brand Homepage)</span>
              </span>
              <div className="text-[11px] text-[#202124] leading-tight">
                <span className="text-[#4d5156] text-[12px] block font-mono text-[11px]">
                  {globalSeo.canonicalUrl}
                </span>
                <h4 className="text-[#1a0dab] text-[15px] hover:underline font-medium cursor-pointer truncate pt-0.5">
                  {editLang === 'en' ? globalSeo.siteTitleEn : globalSeo.siteTitleFr}
                </h4>
                <p className="text-[#4d5156] text-[12px] line-clamp-2 leading-relaxed pt-0.5">
                  {editLang === 'en' ? globalSeo.metaDescEn : globalSeo.metaDescFr}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold flex items-center gap-2 shadow-md cursor-pointer transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Global SEO Settings</span>
            </button>
          </div>
        </form>
      )}

      {/* ============================================================== */}
      {/* 2. Page-by-Page SEO Tab */}
      {/* ============================================================== */}
      {activeSubTab === 'pages' && (
        <form onSubmit={handleSaveGlobalAndPages} className="space-y-6 text-xs">
          {/* Page Picker Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {Object.entries(pageSeo).map(([key, pData]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedPageKey(key)}
                className={`px-4 py-2.5 rounded-2xl font-bold text-xs whitespace-nowrap transition-all border cursor-pointer ${
                  selectedPageKey === key 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                    : 'bg-white text-slate-700 border-border-soft hover:bg-slate-50'
                }`}
              >
                {pData.name || `/${key}`}
              </button>
            ))}
          </div>

          {/* Active Page SEO Editor */}
          {pageSeo[selectedPageKey] && (
            <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-soft">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-secondary" />
                    <span>SEO Meta Snippet for {pageSeo[selectedPageKey].name}</span>
                  </h3>
                  <p className="text-[11px] text-muted">Customize the dedicated search snippet and targeted keywords for this specific route.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const def = DEFAULT_SEO_SETTINGS.pages?.[selectedPageKey];
                      if (def) {
                        setPageSeo({
                          ...pageSeo,
                          [selectedPageKey]: {
                            ...pageSeo[selectedPageKey],
                            titleEn: def.titleEn || '',
                            titleFr: def.titleFr || '',
                            descEn: def.descEn || '',
                            descFr: def.descFr || '',
                            keywordsEn: def.keywordsEn || '',
                            keywordsFr: def.keywordsFr || ''
                          }
                        });
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Restore Recommended Preset</span>
                  </button>
                </div>
              </div>

              {/* Title Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-800">Page SEO Title (EN 🇬🇧)</label>
                    <span className="text-[10px] text-muted">{(pageSeo[selectedPageKey].titleEn || '').length} chars</span>
                  </div>
                  <input 
                    type="text" 
                    value={pageSeo[selectedPageKey].titleEn || ''}
                    onChange={(e) => setPageSeo({
                      ...pageSeo,
                      [selectedPageKey]: { ...pageSeo[selectedPageKey], titleEn: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-800">Titre SEO de la Page (FR 🇫🇷)</label>
                    <span className="text-[10px] text-muted">{(pageSeo[selectedPageKey].titleFr || '').length} chars</span>
                  </div>
                  <input 
                    type="text" 
                    value={pageSeo[selectedPageKey].titleFr || ''}
                    onChange={(e) => setPageSeo({
                      ...pageSeo,
                      [selectedPageKey]: { ...pageSeo[selectedPageKey], titleFr: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold"
                  />
                </div>
              </div>

              {/* Meta Description */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-800">Meta Description (EN 🇬🇧)</label>
                    <span className="text-[10px] text-muted">{(pageSeo[selectedPageKey].descEn || '').length} chars (recom. 140-160)</span>
                  </div>
                  <textarea 
                    rows={3}
                    value={pageSeo[selectedPageKey].descEn || ''}
                    onChange={(e) => setPageSeo({
                      ...pageSeo,
                      [selectedPageKey]: { ...pageSeo[selectedPageKey], descEn: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 leading-relaxed resize-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-800">Meta Description (FR 🇫🇷)</label>
                    <span className="text-[10px] text-muted">{(pageSeo[selectedPageKey].descFr || '').length} chars (recom. 140-160)</span>
                  </div>
                  <textarea 
                    rows={3}
                    value={pageSeo[selectedPageKey].descFr || ''}
                    onChange={(e) => setPageSeo({
                      ...pageSeo,
                      [selectedPageKey]: { ...pageSeo[selectedPageKey], descFr: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 leading-relaxed resize-none"
                  />
                </div>
              </div>

              {/* Focus Keywords */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Target Keywords (EN 🇬🇧)</label>
                  <input 
                    type="text" 
                    value={pageSeo[selectedPageKey].keywordsEn || ''}
                    onChange={(e) => setPageSeo({
                      ...pageSeo,
                      [selectedPageKey]: { ...pageSeo[selectedPageKey], keywordsEn: e.target.value }
                    })}
                    placeholder="keyword1, keyword2, keyword3..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Mots-Clés Cibles (FR 🇫🇷)</label>
                  <input 
                    type="text" 
                    value={pageSeo[selectedPageKey].keywordsFr || ''}
                    onChange={(e) => setPageSeo({
                      ...pageSeo,
                      [selectedPageKey]: { ...pageSeo[selectedPageKey], keywordsFr: e.target.value }
                    })}
                    placeholder="motcle1, motcle2, motcle3..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 font-mono text-[11px]"
                  />
                </div>
              </div>

              {/* Live Search Snippet Simulation */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-border-soft space-y-1.5 mt-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                  <Globe2 className="w-3 h-3 text-secondary" />
                  <span>Google SERP Preview for /{selectedPageKey === 'home' ? '' : selectedPageKey}</span>
                </span>
                <div className="text-[11px] text-[#202124] leading-tight">
                  <span className="text-[#4d5156] text-[12px] block font-mono text-[11px]">
                    https://maxvor.com{selectedPageKey === 'home' ? '' : ` › ${selectedPageKey}`}
                  </span>
                  <h4 className="text-[#1a0dab] text-[15px] hover:underline font-medium cursor-pointer truncate pt-0.5">
                    {pageSeo[selectedPageKey].titleEn || globalSeo.siteTitleEn}
                  </h4>
                  <p className="text-[#4d5156] text-[12px] line-clamp-2 leading-relaxed pt-0.5">
                    {pageSeo[selectedPageKey].descEn || globalSeo.metaDescEn}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold flex items-center gap-2 shadow-md cursor-pointer transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Page Meta Snippets</span>
            </button>
          </div>
        </form>
      )}

      {/* ============================================================== */}
      {/* 3. Product SEO Matrix Tab */}
      {/* ============================================================== */}
      {activeSubTab === 'products' && (
        <div className="space-y-4 text-xs">
          {/* Filter & Search Bar */}
          <div className="bg-white p-4 rounded-3xl border border-border-soft shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                value={productSearchTerm}
                onChange={(e) => setProductSearchTerm(e.target.value)}
                placeholder="Search products by name, model, slug, or keywords..."
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 text-xs focus:outline-none focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={productCategoryFilter}
                onChange={(e) => setProductCategoryFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-700 text-xs font-semibold focus:outline-none"
              >
                <option value="ALL">All Categories ({productsEn.length})</option>
                <option value="point-of-care-ultrasound">Ultrasound Diagnostic Systems (8)</option>
                <option value="bandages-wound-care">Medical Bandages & Cryo (13)</option>
              </select>
            </div>
          </div>

          {/* Product SEO Table / Cards */}
          <div className="bg-white rounded-3xl border border-border-soft shadow-xs overflow-hidden">
            <div className="p-4 border-b border-border-soft flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-secondary" />
                <span className="font-bold text-slate-900 text-xs">
                  All Catalog Products ({filteredProducts.length})
                </span>
              </div>
              <span className="text-[11px] text-muted">
                Click "Edit SEO" on any product to customize its Meta Title, URL Slug, Keywords, and Search Description.
              </span>
            </div>

            <div className="divide-y divide-border-soft">
              {filteredProducts.map((product) => {
                const prodFr = productsFr.find(p => p.id === product.id || p.slug === product.slug) || product;
                const hasCustomTitle = !!product.seoTitle;
                const hasKeywords = !!product.seoKeywords;
                const hasDesc = !!product.seoDescription;

                return (
                  <div key={product.id || product.slug} className="p-4 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                      <div className="w-14 h-14 rounded-xl bg-white border border-border-soft shrink-0 p-1 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-slate-900 text-xs truncate max-w-md">
                            {product.name}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono">
                            /{product.slug || product.id}
                          </span>
                          {hasCustomTitle && (
                            <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold border border-teal-200">
                              SEO Optimized
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] text-slate-600 space-y-0.5">
                          <p className="truncate text-slate-500">
                            <strong className="text-slate-700">SEO Title:</strong> {product.seoTitle || `${product.name} | MAXVOR`}
                          </p>
                          <p className="truncate text-slate-500">
                            <strong className="text-slate-700">Keywords:</strong> {product.seoKeywords || <span className="text-amber-600 italic">Not specified (uses global)</span>}
                          </p>
                          <p className="line-clamp-1 text-slate-500">
                            <strong className="text-slate-700">Snippet:</strong> {product.seoDescription || product.shortDesc || <span className="text-amber-600 italic">Uses short description</span>}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        onClick={() => handleOpenProductSeoModal(product)}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-secondary-light" />
                        <span>Edit Product SEO</span>
                      </button>
                    </div>
                  </div>
                );
              })}

              {filteredProducts.length === 0 && (
                <div className="p-8 text-center text-muted">
                  <Package className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No products match your search criteria.</p>
                </div>
              )}
            </div>
          </div>

          {/* Product SEO Modal Drawer */}
          {editingProductSeo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border-soft shadow-2xl space-y-5 p-6 animate-scaleUp">
                <div className="flex items-center justify-between pb-3 border-b border-border-soft">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-border-soft p-1 flex items-center justify-center">
                      <img src={editingProductSeo.image} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Custom Product SEO & Search Snippet
                      </h3>
                      <p className="text-[11px] text-muted truncate max-w-sm">{editingProductSeo.nameEn}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setEditingProductSeo(null)}
                    className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSaveProductSeoModal} className="space-y-4 text-xs">
                  {/* URL Slug & Auto Generator */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-teal-50/60 border border-teal-100">
                    <div className="flex-1">
                      <label className="block font-bold text-teal-950 text-xs mb-1">Product URL Slug (Permalink)</label>
                      <input 
                        type="text" 
                        value={editingProductSeo.slug}
                        onChange={(e) => setEditingProductSeo({ ...editingProductSeo, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                        className="w-full px-3 py-1.5 rounded-xl bg-white border border-teal-200 text-slate-900 font-mono text-[11px]"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const fallbackTitleEn = `${editingProductSeo.nameEn} | MAXVOR`;
                        const fallbackTitleFr = `${editingProductSeo.nameFr || editingProductSeo.nameEn} | MAXVOR`;
                        const fallbackDescEn = editingProductSeo.shortDescEn || (editingProductSeo.highlightsEn && editingProductSeo.highlightsEn.join('. ')) || '';
                        const fallbackDescFr = editingProductSeo.shortDescFr || editingProductSeo.shortDescEn || '';
                        setEditingProductSeo({
                          ...editingProductSeo,
                          seoTitleEn: fallbackTitleEn,
                          seoTitleFr: fallbackTitleFr,
                          seoDescriptionEn: fallbackDescEn,
                          seoDescriptionFr: fallbackDescFr
                        });
                      }}
                      className="px-3 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold flex items-center gap-1.5 cursor-pointer shrink-0 self-end"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Smart Auto-Fill</span>
                    </button>
                  </div>

                  {/* SEO Title EN & FR */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-slate-800">Product SEO Title (EN 🇬🇧)</label>
                        <span className="text-[10px] text-muted">{(editingProductSeo.seoTitleEn || '').length} chars</span>
                      </div>
                      <input 
                        type="text" 
                        value={editingProductSeo.seoTitleEn || ''}
                        onChange={(e) => setEditingProductSeo({ ...editingProductSeo, seoTitleEn: e.target.value })}
                        placeholder={`${editingProductSeo.nameEn} | MAXVOR`}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-slate-900 font-semibold focus:outline-none focus:bg-white"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-slate-800">Titre SEO Produit (FR 🇫🇷)</label>
                        <span className="text-[10px] text-muted">{(editingProductSeo.seoTitleFr || '').length} chars</span>
                      </div>
                      <input 
                        type="text" 
                        value={editingProductSeo.seoTitleFr || ''}
                        onChange={(e) => setEditingProductSeo({ ...editingProductSeo, seoTitleFr: e.target.value })}
                        placeholder={`${editingProductSeo.nameFr} | MAXVOR`}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-slate-900 font-semibold focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Target Keywords EN & FR */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Focus Target Keywords (EN 🇬🇧)</label>
                      <input 
                        type="text" 
                        value={editingProductSeo.seoKeywordsEn || ''}
                        onChange={(e) => setEditingProductSeo({ ...editingProductSeo, seoKeywordsEn: e.target.value })}
                        placeholder="e.g. handheld ultrasound probe, convex transducer"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-slate-900 font-mono text-[11px] focus:outline-none focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Mots-Clés SEO Cibles (FR 🇫🇷)</label>
                      <input 
                        type="text" 
                        value={editingProductSeo.seoKeywordsFr || ''}
                        onChange={(e) => setEditingProductSeo({ ...editingProductSeo, seoKeywordsFr: e.target.value })}
                        placeholder="e.g. sonde échographique portable, sonde convexe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-slate-900 font-mono text-[11px] focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Meta Description Snippet EN & FR */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-slate-800">Meta Description Snippet (EN 🇬🇧)</label>
                        <span className="text-[10px] text-muted">{(editingProductSeo.seoDescriptionEn || '').length} chars (recom. 140-160)</span>
                      </div>
                      <textarea 
                        rows={3}
                        value={editingProductSeo.seoDescriptionEn || ''}
                        onChange={(e) => setEditingProductSeo({ ...editingProductSeo, seoDescriptionEn: e.target.value })}
                        placeholder="Concise search summary displayed under the title in Google..."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 resize-none focus:outline-none focus:bg-white leading-relaxed"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-slate-800">Description Meta Snippet (FR 🇫🇷)</label>
                        <span className="text-[10px] text-muted">{(editingProductSeo.seoDescriptionFr || '').length} chars (recom. 140-160)</span>
                      </div>
                      <textarea 
                        rows={3}
                        value={editingProductSeo.seoDescriptionFr || ''}
                        onChange={(e) => setEditingProductSeo({ ...editingProductSeo, seoDescriptionFr: e.target.value })}
                        placeholder="Résumé concis affiché sous le titre dans Google..."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 resize-none focus:outline-none focus:bg-white leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Live Google Search Card Simulation */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-border-soft space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                      <Globe2 className="w-3 h-3 text-secondary" />
                      <span>Live Google SERP Desktop Simulation for this Product</span>
                    </span>
                    <div className="text-[11px] text-[#202124] leading-tight">
                      <span className="text-[#4d5156] text-[12px] block font-mono text-[11px]">
                        https://maxvor.com › products › <span className="font-semibold text-slate-900">{editingProductSeo.slug || editingProductSeo.id}</span>
                      </span>
                      <h4 className="text-[#1a0dab] text-[15px] hover:underline font-medium cursor-pointer truncate pt-0.5">
                        {editingProductSeo.seoTitleEn || `${editingProductSeo.nameEn} | MAXVOR`}
                      </h4>
                      <p className="text-[#4d5156] text-[12px] line-clamp-2 leading-relaxed pt-0.5">
                        {editingProductSeo.seoDescriptionEn || editingProductSeo.shortDescEn || 'Product search engine description snippet.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-border-soft">
                    <button
                      type="button"
                      onClick={() => setEditingProductSeo(null)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold flex items-center gap-2 shadow-md cursor-pointer transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Product SEO</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. Sitemap & Robots Tab */}
      {/* ============================================================== */}
      {activeSubTab === 'sitemap' && (
        <div className="space-y-6 text-xs">
          <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border-soft">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-secondary" />
                  <span>Real-Time XML Sitemap Generator (sitemap.xml)</span>
                </h3>
                <p className="text-[11px] text-muted mt-0.5">
                  Automatically generated from all active pages, authorized products, and clinical articles with search priority weights.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySitemap}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedSitemap ? 'Copied XML!' : 'Copy XML'}</span>
                </button>
                <button
                  onClick={handleDownloadSitemap}
                  className="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download sitemap.xml</span>
                </button>
              </div>
            </div>

            {/* Code Box */}
            <div className="relative">
              <pre className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-[11px] max-h-72 overflow-y-auto leading-relaxed border border-slate-800">
                {currentSitemapXml}
              </pre>
            </div>
          </div>

          {/* Robots.txt Card */}
          <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border-soft">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Bot className="w-4 h-4 text-secondary" />
                <span>Robots Protocol (robots.txt)</span>
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyRobots}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedRobots ? 'Copied!' : 'Copy robots.txt'}</span>
                </button>
                <button
                  onClick={handleDownloadRobots}
                  className="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download robots.txt</span>
                </button>
              </div>
            </div>

            <pre className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-[11px] border border-slate-800">
              {currentRobotsTxt}
            </pre>
          </div>
        </div>
      )}

    </div>
  );
}
