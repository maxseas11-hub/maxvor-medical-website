import React from 'react';
import { 
  Layers, 
  Building2, 
  Boxes, 
  Headphones, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe2,
  FileCheck
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';

export default function WhyMaxvor({ onOpenRfq }) {
  const { lang, t } = useLanguage();

  const pillars = [
    {
      num: '01',
      icon: Layers,
      title: lang === 'fr' ? 'Approvisionnement Multi-Catégories' : 'Multi-Category Sourcing',
      desc: lang === 'fr' 
        ? 'Accédez à une sélection diversifiée de consommables et d’équipements médicaux auprès d’un interlocuteur unique.'
        : 'Access a diverse range of medical consumables and equipment through one sourcing partner.',
      features: [
        lang === 'fr' ? 'Consommables & Équipements regroupés' : 'Consolidated consumables & hardware',
        lang === 'fr' ? 'Gestion simplifiée des fournisseurs' : 'Simplified supplier coordination',
        lang === 'fr' ? 'Commandes mixtes optimisées' : 'Optimized multi-item shipments'
      ]
    },
    {
      num: '02',
      icon: Building2,
      title: lang === 'fr' ? 'Réseau de Fabricants de Confiance' : 'Trusted Supplier Network',
      desc: lang === 'fr'
        ? 'Connectez-vous avec des fabricants rigoureusement sélectionnés et des marques médicales établies sur différentes catégories de produits.'
        : 'Connect with selected manufacturers and established medical brands across different product categories.',
      features: [
        lang === 'fr' ? 'Marques autorisées (SonoStar, Healson, GSPMED...)' : 'Authorized brands (SonoStar, Healson, GSPMED...)',
        lang === 'fr' ? 'Qualité et conformité vérifiées' : 'Verified compliance & quality records',
        lang === 'fr' ? 'Approvisionnement direct et fiable' : 'Dependable product access channels'
      ]
    },
    {
      num: '03',
      icon: Boxes,
      title: lang === 'fr' ? 'Solutions de Vente en Gros Flexibles' : 'Flexible Wholesale Solutions',
      desc: lang === 'fr'
        ? 'Découvrez des options d’achat adaptées aux unités individuelles, aux petites quantités et aux commandes groupées en conteneurs.'
        : 'Explore purchasing options for individual units, small quantities, and bulk orders.',
      features: [
        lang === 'fr' ? 'MOQ accessible dès 1 unité / 1 carton' : 'Low MOQ from 1 unit / 1 carton',
        lang === 'fr' ? 'Grilles tarifaires de gros transparentes' : 'Competitive wholesale volume pricing',
        lang === 'fr' ? 'Adapté aux cliniques et appels d’offres' : 'Tailored for clinics & tender bids'
      ]
    },
    {
      num: '04',
      icon: Headphones,
      title: lang === 'fr' ? 'Achat Flexible & Support Client' : 'Flexible Purchasing & Customer Support',
      desc: lang === 'fr'
        ? 'Bénéficiez d’une assistance réactive pour vos demandes de cotation, spécifications techniques et formalités d’exportation.'
        : 'Get responsive assistance with product inquiries and purchasing arrangements.',
      features: [
        lang === 'fr' ? 'Réponse aux devis sous 12 heures' : 'Quote turnaround within 12 business hours',
        lang === 'fr' ? 'Support aux dossiers export (CO, DoC)' : 'Export paperwork support (CO, DoC, Packlist)',
        lang === 'fr' ? 'Accompagnement multilingue dédié' : 'Dedicated multilingual account management'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-canvas-alt border-b border-border-soft" data-component="why-maxvor">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Header */}
        <SectionHeading
          badge={lang === 'fr' ? 'Avantages de Collaboration' : 'Why MAXVOR'}
          title={lang === 'fr' ? 'Pourquoi Choisir MAXVOR pour Vos Achats Médicaux' : 'Why Choose MAXVOR as Your Medical Sourcing Partner'}
          subtitle={lang === 'fr' ? 'Simplifier l’approvisionnement médical international grâce à l’efficacité logistique, la diversité des catalogues et la fiabilité des partenariats.' : 'Making international healthcare procurement more efficient through multi-category consolidation, dependable supplier coordination, and responsive service.'}
        />

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-border-soft shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-black font-mono text-slate-300 group-hover:text-secondary/50 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-secondary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-soft space-y-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
