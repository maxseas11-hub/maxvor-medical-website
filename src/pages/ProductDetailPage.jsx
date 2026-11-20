import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Package, 
  ChevronRight, 
  ChevronLeft,
  Sparkles, 
  ArrowLeft,
  Award,
  Layers,
  Clock,
  HelpCircle,
  Tag
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProductCard from '../components/products/ProductCard';
import { usePageSeo } from '../hooks/usePageSeo';

export default function ProductDetailPage({ onOpenRfq, onQuickView }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { t, getProductById, getCategoryById, products, lang } = useLanguage();

  const product = getProductById(productId);

  // Dynamic SEO Meta Tag Injection
  usePageSeo({ productData: product });

  // Normalize image gallery: handle product.gallery, product.images, or fallback to [product.image]
  const productImages = React.useMemo(() => {
    if (!product) return [];
    if (Array.isArray(product.gallery) && product.gallery.length > 0) {
      return [product.image, ...product.gallery.filter(g => g !== product.image)];
    }
    if (Array.isArray(product.images) && product.images.length > 0) {
      return product.images;
    }
    return product.image ? [product.image] : [];
  }, [product]);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="w-full bg-canvas min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Package className="w-16 h-16 text-muted mx-auto" />
          <h2 className="text-2xl font-bold text-slate-900">{t('noProductsFound')}</h2>
          <p className="text-sm text-muted">
            {lang === 'fr' ? 'L’équipement médical demandé n’est pas disponible dans le catalogue actuel.' : 'The requested medical product could not be located in our current catalog.'}
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToProducts')}
          </Link>
        </div>
      </div>
    );
  }

  const categoryObj = getCategoryById(product.categoryId);
  const relatedProducts = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 3);

  // Normalize highlights / key features
  const highlightsList = Array.isArray(product.highlights) && product.highlights.length > 0
    ? product.highlights
    : Array.isArray(product.keyFeatures) && product.keyFeatures.length > 0
    ? product.keyFeatures
    : Array.isArray(product.specialties) && product.specialties.length > 0
    ? product.specialties
    : [];

  // Normalize clinical applications
  const applicationsList = Array.isArray(product.applications) && product.applications.length > 0
    ? product.applications
    : Array.isArray(product.clinicalApplications) && product.clinicalApplications.length > 0
    ? product.clinicalApplications
    : [];

  // Normalize full specs into [{ label, value }]
  const specsList = React.useMemo(() => {
    let list = [];
    if (Array.isArray(product.specs)) {
      list = product.specs;
    } else if (product.detailedSpecs && typeof product.detailedSpecs === 'object') {
      list = Object.entries(product.detailedSpecs).map(([label, value]) => ({ label, value }));
    } else if (product.specs && typeof product.specs === 'object') {
      list = Object.entries(product.specs).map(([label, value]) => ({ label, value }));
    }
    return list.filter(s => s && s.label && !/medical\s*device\s*class|classe\s*dispositif/i.test(s.label));
  }, [product]);

  return (
    <div className="w-full bg-canvas min-h-screen py-10 md:py-16" data-component="product-detail-page">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center flex-wrap gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-primary transition-colors">{t('navHome')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-primary transition-colors">{t('navProducts')}</Link>
          {categoryObj && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to={`/products?category=${categoryObj.id}`} className="hover:text-secondary transition-colors font-medium">
                {categoryObj.shortName || categoryObj.name}
              </Link>
            </>
          )}
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Top Product Hero Block */}
        <div className="bg-white rounded-3xl border border-border shadow-card p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Product Showcase & Multi-Image Gallery */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Active Image Display */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-border-soft overflow-hidden group flex items-center justify-center p-4">
              <img 
                src={productImages[selectedImageIndex] || product.image || '/assets/images/placeholder.svg'} 
                alt={`${product.name} - View ${selectedImageIndex + 1}`} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/placeholder.svg';
                }}
              />
              
              {product.isBestSeller && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-amber-500 text-white shadow-sm">
                    HIGH DEMAND
                  </span>
                </div>
              )}

              {/* Prev / Next navigation arrows when multiple images exist */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  
                  {/* Image Counter Tag */}
                  <span className="absolute bottom-3 right-3 text-[11px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-xs">
                    {selectedImageIndex + 1} / {productImages.length}
                  </span>
                </>
              )}
            </div>

            {/* Thumbnail Navigation Bar (when multiple images exist) */}
            {productImages.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-0.5">
                {productImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl bg-white border-2 overflow-hidden shrink-0 p-1 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-secondary shadow-sm ring-2 ring-secondary/20'
                        : 'border-border-soft hover:border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={imgUrl || '/assets/images/placeholder.svg'} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-contain" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/images/placeholder.svg';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Customization & MOQ Badges */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-canvas-alt border border-border-soft space-y-1">
                <span className="text-muted block font-semibold text-[11px] uppercase tracking-wider">{t('productMoqLabel')}</span>
                <span className="text-sm font-extrabold text-slate-900">{product.moq || '500 Units'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200/60 space-y-1">
                <span className="text-teal-800 block font-semibold text-[11px] uppercase tracking-wider">{lang === 'fr' ? 'Disponibilité' : 'Availability'}</span>
                <span className="text-xs font-bold text-teal-900 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  {lang === 'fr' ? 'Prêt pour l’Export' : 'Direct Export Ready'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Purchasing Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  {product.categoryName}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.shortDesc || (lang === 'fr' ? 'Conforme aux systèmes de gestion de la qualité des dispositifs médicaux. Conçu pour une fiabilité clinique élevée et l’exportation directe.' : 'Manufactured in compliance with international medical device quality systems. Engineered for high performance, consistent clinical safety, and direct export supply.')}
              </p>

              {/* Key Highlights */}
              {highlightsList.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                    {t('keyHighlightsTitle')} :
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {highlightsList.map((spec, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications */}
              {applicationsList.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                    {lang === 'fr' ? 'Champs d’Application Cliniques :' : 'Clinical Applications & Indications:'}
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {applicationsList.map((app, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5"></div>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-border-soft flex items-center">
              <button
                onClick={() => onOpenRfq(product)}
                className="w-full sm:w-auto min-w-[240px] px-8 py-4 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <FileText className="w-4 h-4" />
                {t('productInquiryBtn')}
              </button>
            </div>

          </div>

        </div>

        {/* Technical Specifications Full Table */}
        {specsList.length > 0 && (
          <div className="bg-white rounded-3xl border border-border shadow-card p-6 sm:p-10 space-y-6">
            <div className="border-b border-border-soft pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                {lang === 'fr' ? 'Dossier Paramétrique Complet' : 'Official Parameter Sheet'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {t('techSpecsTitle')}
              </h2>
              <p className="text-xs text-muted mt-1">
                {lang === 'fr' ? 'Spécifications techniques, matériaux et conditionnement pour l’exportation hospitalière.' : 'Technical parameters, material composition, packaging, and clinical specifications.'}
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border-soft">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-border-soft text-slate-600 font-bold">
                  <tr>
                    <th className="p-3.5 sm:p-4 w-1/3">{t('specParameter')}</th>
                    <th className="p-3.5 sm:p-4">{t('specValue')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-soft">
                  {specsList.map((s, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-700 bg-slate-50/30">
                        {s.label}
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-900 whitespace-pre-line font-medium">
                        {s.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  {lang === 'fr' ? 'Gamme Complémentaire' : 'Complementary Line'}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'fr' ? 'Produits Associés de la Même Catégorie' : 'Related Products in Same Category'}
                </h3>
              </div>
              <Link 
                to={`/products?category=${product.categoryId}`}
                className="text-xs font-bold text-secondary hover:underline flex items-center gap-1"
              >
                {lang === 'fr' ? 'Voir Tout' : 'View All'} <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onOpenRfq={onOpenRfq} 
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
