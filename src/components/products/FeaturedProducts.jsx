import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import ProductCard from './ProductCard';
import SectionHeading from '../common/SectionHeading';

export default function FeaturedProducts({ onOpenRfq, onQuickView }) {
  const [activeTab, setActiveTab] = useState('all');
  const { products, lang } = useLanguage();

  const tabs = [
    { id: 'all', label: lang === 'fr' ? 'Tous les Produits Autorisés' : 'All Authorized Products' },
    { id: 'ultrasound-systems', label: lang === 'fr' ? 'Échographie POCUS' : 'Ultrasound Systems' },
    { id: 'bandages-and-wound-care', label: lang === 'fr' ? 'Bandages & Cryothérapie' : 'Bandages & Wound Care' },
  ];

  const filtered = products.filter(p => {
    if (activeTab === 'all') return true;
    return p.categoryId === activeTab;
  });

  return (
    <section className="py-16 md:py-24 bg-white border-b border-border-soft" data-component="featured-products">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Header */}
        <SectionHeading
          badge={lang === 'fr' ? 'Catalogue de Produits Autorisés' : 'Authorized Product Portfolio'}
          title={lang === 'fr' ? 'Équipements Médicaux & Consommables de Soins' : 'Medical Equipment & Clinical Care Supplies'}
          subtitle={lang === 'fr' ? 'Dispositifs de diagnostic par échographie portable et consommables hospitaliers de traumatologie et de soins des plaies pour l’exportation directe.' : 'Authorized point-of-care diagnostic ultrasound systems, hospital-grade compression bandages, and emergency wound care consumables for direct global delivery.'}
        />

        {/* Tabs Filter Bar */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                activeTab === tab.id
                  ? 'bg-secondary text-white border-secondary shadow-sm'
                  : 'bg-canvas text-muted border-border-soft hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 8).map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onOpenRfq={onOpenRfq}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            <span>{lang === 'fr' ? 'Voir Tout le Catalogue (21 Produits)' : 'Explore Full Catalog (21 Products)'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
