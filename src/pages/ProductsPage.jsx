import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  CheckCircle2, 
  Package, 
  Sparkles,
  X
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProductCard from '../components/products/ProductCard';
import { usePageSeo } from '../hooks/usePageSeo';

export default function ProductsPage({ onOpenRfq, onQuickView }) {
  usePageSeo({ pageKey: 'products' });

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const { t, categories, products, lang } = useLanguage();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.categoryId === selectedCategory;
    const matchSearch = searchQuery.trim() === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.model && product.model.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.shortDesc && product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchCategory && matchSearch;
  });

  const activeCategoryObj = categories.find(c => c.id === selectedCategory);

  return (
    <div className="w-full bg-canvas min-h-screen py-10 md:py-16" data-component="products-catalog-page">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link to="/" className="hover:text-primary transition-colors">{t('navHome')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-bold">{t('navProducts')}</span>
          {activeCategoryObj && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-secondary font-bold">{activeCategoryObj.shortName}</span>
            </>
          )}
        </div>

        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-border-soft">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              {lang === 'fr' ? 'Catalogue de Vente en Gros B2B' : 'Wholesale Product Catalog'}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mt-1">
              {activeCategoryObj ? activeCategoryObj.name : (lang === 'fr' ? 'Catalogue Médical & Consommables Cliniques' : 'Medical Equipment & Clinical Consumables')}
            </h1>
            <p className="text-xs sm:text-sm text-muted mt-2 max-w-2xl">
              {activeCategoryObj 
                ? activeCategoryObj.tagline 
                : t('productsSubtitle')}
            </p>
          </div>

          <button
            onClick={() => onOpenRfq(null, selectedCategory !== 'all' ? selectedCategory : null)}
            className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 shadow-sm transition-all"
          >
            <FileText className="w-4 h-4" />
            {lang === 'fr' ? 'Demander une Cotation Groupée' : 'Request Bulk Line Quotation'}
          </button>
        </div>

        {/* Top Filter Bar: Horizontal Category Tabs + Search Input */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-border-soft shadow-card mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Horizontal Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-2 transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-canvas text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-border-soft'
                }`}
              >
                <span>{t('filterAllCategories')}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                  selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                }`}>
                  {products.length}
                </span>
              </button>

              {categories.map((cat) => {
                const catCount = products.filter(p => p.categoryId === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-secondary text-white shadow-sm'
                        : 'bg-canvas text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-border-soft'
                    }`}
                  >
                    <span>{cat.shortName || cat.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                    }`}>
                      {catCount}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Box & Reset Filter */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative w-full sm:w-72 lg:w-80">
                <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-canvas border border-border text-xs sm:text-sm text-primary placeholder:text-muted focus:outline-hidden focus:border-secondary transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {(selectedCategory !== 'all' || searchQuery.trim() !== '') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    handleCategoryChange('all');
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-canvas-alt hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors shrink-0"
                >
                  {t('resetFilters')}
                </button>
              )}
            </div>

          </div>

          {/* Results Count Line */}
          <div className="flex items-center justify-between text-xs text-muted pt-2 border-t border-border-soft">
            <span>
              {t('showingResults')} <strong className="text-slate-900 font-extrabold">{filteredProducts.length}</strong> {t('ofProducts')}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {lang === 'fr' ? 'Fourniture directe B2B & Spécifications certifiées' : 'Direct B2B Factory Supply & Verified Specifications'}
            </span>
          </div>
        </div>

        {/* Active Category Header Banner (when specific category selected) */}
        {activeCategoryObj && selectedCategory !== 'all' && (
          <div className="bg-white rounded-2xl p-6 border border-border-soft shadow-card mb-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-border-soft p-2.5 shrink-0 flex items-center justify-center">
              <img 
                src={activeCategoryObj.image} 
                alt={activeCategoryObj.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1.5 flex-1 text-center sm:text-left">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block">
                {activeCategoryObj.shortName}
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {activeCategoryObj.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {activeCategoryObj.tagline}
              </p>
            </div>
          </div>
        )}

        {/* Full-Width Products Grid (4 Columns) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-6 xl:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenRfq={onOpenRfq}
                onQuickView={onQuickView}
                showCategory={selectedCategory === 'all'}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-16 text-center border border-border-soft space-y-4">
            <Package className="w-14 h-14 text-muted mx-auto" />
            <h4 className="text-base font-bold text-primary">
              {t('noProductsFound')}
            </h4>
            <p className="text-xs sm:text-sm text-muted max-w-sm mx-auto">
              {lang === 'fr' ? 'Essayez de réinitialiser vos termes de recherche ou sélectionnez une autre catégorie.' : 'Try adjusting your search terms or select another category.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-secondary text-white text-xs font-bold shadow-sm"
            >
              {t('resetFilters')}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
