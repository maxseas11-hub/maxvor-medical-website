import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  CheckCircle2,
  Package
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';

export default function Categories({ onOpenRfq }) {
  const { t, categories, lang } = useLanguage();

  return (
    <section 
      id="categories-section" 
      className="py-16 md:py-24 bg-canvas border-b border-border-soft" 
      data-component="categories-grid"
    >
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Header */}
        <SectionHeading
          badge={lang === 'fr' ? 'Matrice des Catégories de Produits' : 'Product Category Matrix'}
          title={t('homeCategoriesHeading')}
          subtitle={t('homeCategoriesSubheading')}
        />

        {/* Category Grid */}
        <div className={`grid grid-cols-1 ${categories.length === 2 ? 'md:grid-cols-2 max-w-5xl' : 'md:grid-cols-2 lg:grid-cols-3 max-w-[1720px]'} gap-8 mx-auto`}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-2xl border border-border-soft shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Entire Card Header & Body Clickable Navigation */}
              <Link 
                to={`/products?category=${cat.id}`}
                className="block flex-1 flex flex-col cursor-pointer"
              >
                {/* Image Container: Clean object-contain display seamlessly blending into pure white */}
                <div className="relative w-full h-52 bg-white overflow-hidden flex items-center justify-center p-4 border-b border-border-soft">
                  <img 
                    src={cat.image || '/assets/images/cat-ultrasound-matrix.png'} 
                    alt={cat.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/cat-ultrasound-matrix.png';
                    }}
                  />

                  {/* Subcategory Count Tag */}
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-slate-700 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-border-soft flex items-center gap-1 shadow-xs">
                    <Package className="w-3.5 h-3.5 text-secondary" />
                    {cat.subcategories.length} {lang === 'fr' ? 'Éléments Clés' : 'Sub-Categories'}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">
                      {cat.tagline}
                    </p>

                    {/* Subcategories visual pill list */}
                    <div className="mt-3.5 pt-3 border-t border-border-soft space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {lang === 'fr' ? 'Spécifications Incluses :' : 'Key Items Included:'}
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {cat.subcategories.slice(0, 3).map((sub, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{sub}</span>
                          </li>
                        ))}
                        {cat.subcategories.length > 3 && (
                          <li className="text-[11px] text-accent font-semibold pl-5">
                            + {cat.subcategories.length - 3} {lang === 'fr' ? 'autres caractéristiques' : 'more product specifications'}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Card Footer: Actions */}
              <div className="px-5 pb-5 pt-0">
                <div className="pt-3 border-t border-border-soft grid grid-cols-2 gap-2">
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="px-3 py-2.5 rounded-xl bg-canvas-alt hover:bg-slate-200 text-primary text-xs font-bold text-center flex items-center justify-center gap-1 transition-colors"
                  >
                    {lang === 'fr' ? 'Explorer' : 'Browse'}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenRfq(null, cat.id)}
                    className="px-3 py-2.5 rounded-xl bg-secondary/10 hover:bg-secondary text-secondary hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    {t('homeQuickQuote')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-border-soft shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              {lang === 'fr' ? 'Catalogue & Commandes Directes' : 'Official Catalog & Direct Orders'}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-primary">
              {lang === 'fr' ? 'Besoin d’une Cotation Groupée pour Votre Réseau de Soins ?' : 'Need Consolidated Hospital Procurement or Custom Specifications?'}
            </h4>
            <p className="text-xs sm:text-sm text-muted">
              {lang === 'fr' ? 'Nous préparons des offres proforma détaillées sous 12h avec fiches techniques et certificats d’origine.' : 'We provide comprehensive technical datasheets, factory test certificates, and volume FOB/CIF pricing for all categories.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenRfq()}
              className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-sm font-bold shadow-sm transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {t('homeQuickQuote')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
