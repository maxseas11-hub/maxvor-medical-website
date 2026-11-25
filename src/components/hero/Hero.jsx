import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ShieldCheck,
  Package,
  Headphones,
  Check
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Hero({ onOpenRfq }) {
  const { lang } = useLanguage();

  const valuePills = [
    {
      icon: ShieldCheck,
      text: lang === 'fr' ? 'Produits de Haute Qualité' : 'High-Quality Products'
    },
    {
      icon: Layers,
      text: lang === 'fr' ? 'Solutions de Sourcing Flexibles' : 'Flexible Sourcing Solutions'
    },
    {
      icon: Headphones,
      text: lang === 'fr' ? 'Support Dédié & Réactif' : 'Dedicated Support'
    }
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#eef6fc] text-slate-900 border-b border-border-soft" 
      data-component="hero-section"
    >
      {/* Background Graphic: Full-Bleed Edge-to-Edge Clean Medical Assortment Backdrop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block overflow-hidden">
        <img 
          src="/assets/images/hero-banner-clean-bg.jpg" 
          alt="MAXVOR Medical Equipment & Supplies Sourcing Hub" 
          className="w-full h-full object-cover object-right"
        />
        {/* Soft Linear Gradient Mask for 100% Crisp Typography Legibility */}
        <div className="absolute inset-y-0 left-0 w-7/12 lg:w-1/2 bg-gradient-to-r from-[#eef6fc] via-[#eef6fc]/95 via-50% to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 min-h-[460px] md:min-h-[500px] lg:min-h-[560px] xl:min-h-[600px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column: Formatted Text & Interactive Action Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 z-20 max-w-2xl">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-600/20 text-xs font-bold text-teal-900 shadow-2xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>
                {lang === 'fr' ? 'Fournisseur Multi-Catégories de Matériel & Consommables Médicaux' : 'A Multi-Category Medical Supplies & Devices Supplier'}
              </span>
            </div>

            {/* H1 Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-black tracking-tight leading-[1.12] text-slate-900">
              {lang === 'fr' ? 'Votre Partenaire de Confiance en Fournitures Médicales' : 'Your Trusted Partner in Medical Supplies'}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base xl:text-lg text-slate-600 max-w-xl leading-relaxed">
              {lang === 'fr'
                ? 'Connecter les acheteurs internationaux avec des produits médicaux fiables, des solutions d’approvisionnement flexibles et un support logistique efficace.'
                : 'Connecting global buyers with reliable medical products, flexible sourcing solutions, and efficient supply support.'}
            </p>

            {/* 3 Value Props */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
              {valuePills.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-border-soft backdrop-blur-xs shadow-2xs">
                  <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                to="/products"
                className="px-6 sm:px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all hover:translate-x-0.5"
              >
                <span>{lang === 'fr' ? 'Explorer Nos Produits' : 'Explore Our Products'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenRfq()}
                className="px-5 sm:px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Demander un Devis Grossiste' : 'Request a Wholesale Quote'}</span>
              </button>
            </div>

          </div>

          {/* Mobile Fallback Clean Image */}
          <div className="md:hidden w-full mt-4">
            <div className="rounded-2xl overflow-hidden border border-border-soft shadow-card bg-white p-2">
              <img 
                src="/assets/images/hero-banner-clean-bg.jpg" 
                alt="MAXVOR Medical Supplies Portfolio" 
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
