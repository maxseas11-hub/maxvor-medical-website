import React from 'react';
import { 
  Building2, 
  Microscope, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Box, 
  Sparkles, 
  Award, 
  Globe2, 
  Cpu, 
  ThermometerSnowflake,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function FacilityShowcase({ onOpenRfq }) {
  const { lang, t } = useLanguage();

  const facilities = [
    {
      id: 'cleanroom',
      title: lang === 'fr' ? 'Atelier Salle Blanche ISO Classe 100 000' : 'ISO Class 100,000 Cleanroom Workshop',
      tag: lang === 'fr' ? 'PRODUCTION STÉRILE' : 'STERILE MANUFACTURING',
      desc: lang === 'fr' 
        ? 'Environnement à pression positive contrôlée, filtration HEPA 99.99%, assemblage automatisé de consommables médicaux et sondes sans contamination.'
        : 'Controlled positive-pressure environment with 99.99% HEPA filtration, automated assembly lines, and particle-free medical packaging.',
      image: '/assets/images/hero-cleanroom.png',
      specs: [
        lang === 'fr' ? 'Norme ISO 14644-1' : 'ISO 14644-1 Class 8',
        lang === 'fr' ? 'Surveillance Particulaire 24/7' : '24/7 Air Particle Monitoring',
        lang === 'fr' ? 'Lignes d’Assemblage Scellées' : 'Automated Blister Packaging'
      ]
    },
    {
      id: 'ultrasound-lab',
      title: lang === 'fr' ? 'Laboratoire Acoustique & Banc d’Essai Échographique' : 'Acoustic R&D & Probe Calibration Lab',
      tag: lang === 'fr' ? 'PRECISION DIAGNOSTIQUE' : 'ACOUSTIC CALIBRATION',
      desc: lang === 'fr'
        ? 'Bancs de test hydrophoniques et fantômes tissulaires étalonnés pour garantir la sensibilité de chaque transducteur et la résolution Doppler.'
        : 'Calibrated tissue-mimicking phantoms and hydrophone measurement benches ensuring optimal transducer sensitivity and beamforming precision.',
      image: '/assets/images/cat-ultrasound-matrix.png',
      specs: [
        lang === 'fr' ? 'Test Fantôme B-Mode & Doppler' : 'B-Mode & Color Doppler QC',
        lang === 'fr' ? 'Conformité IEC 60601-2-37' : 'IEC 60601-2-37 Standard',
        lang === 'fr' ? 'Test Multi-OS Android / Windows' : 'Android & Windows QA'
      ]
    },
    {
      id: 'qc-lab',
      title: lang === 'fr' ? 'Centre de Contrôle Qualité & Résidus OE' : 'Physical, Chemical & Sterility QC Center',
      tag: lang === 'fr' ? 'VALIDATION STÉRILITÉ' : 'STERILITY ASSURANCE',
      desc: lang === 'fr'
        ? 'Chromatographie en phase gazeuse pour résidus d’oxyde d’éthylène, dynamomètres de traction et tests d’étanchéité de barrière stérile.'
        : 'Gas chromatography for EO residual verification, digital electronic tensile testers, and dye-penetration sterile barrier seal integrity testing.',
      image: '/assets/images/cat-bandages-matrix.png',
      specs: [
        lang === 'fr' ? 'Test Résidu OE < 10µg/g' : 'EO Residual Gas < 10µg/g',
        lang === 'fr' ? 'Traction & Adhésion Élastique' : 'Tensile & Elasticity Tensometer',
        lang === 'fr' ? 'Barrière Microbiologique' : 'Dye Penetration Seal Check'
      ]
    },
    {
      id: 'logistics-hub',
      title: lang === 'fr' ? 'Hub Logistique Export & Entrepôt Climatisé' : 'Global Export Hub & Climate-Controlled Logistics',
      tag: lang === 'fr' ? 'EXPÉDITION INTERNATIONALE' : 'GLOBAL DISPATCH',
      desc: lang === 'fr'
        ? 'Palettisation standardisée pour conteneurs maritimes et expéditions aériennes rapides, stockage sous température et hygrométrie régulées.'
        : 'Standardized export palletizing for sea freight and express air freight, with temperature and humidity regulated warehouse management.',
      image: '/assets/images/cat-wound-care.png',
      specs: [
        lang === 'fr' ? 'Palettisation ISO Euro/US' : 'Export Palletizing Standards',
        lang === 'fr' ? 'Contrôle Hygrométrie < 60%' : 'Controlled Humidity Storage',
        lang === 'fr' ? 'Traçabilité Totale par Lot' : '100% Lot Number Traceability'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-border-soft" data-component="facility-showcase">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {lang === 'fr' ? 'INFRASTRUCTURE & EXCELLENCE DE FABRICATION' : 'MANUFACTURING & QUALITY INFRASTRUCTURE'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === 'fr' 
                ? 'Installations Certifiées & Contrôle Qualité de Pointe'
                : 'Certified Cleanroom Facilities & Multi-Stage Quality Verification'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'fr'
                ? 'De la chambre propre ISO classe 100 000 aux bancs d’étalonnage acoustique haute précision, découvrez nos installations industrielles dédiées à l’export médical.'
                : 'From ISO Class 100,000 cleanrooms to precision acoustic ultrasound calibration benches, inspect our verified manufacturing backbone.'}
            </p>
          </div>

          {onOpenRfq && (
            <button
              onClick={onOpenRfq}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md shrink-0"
            >
              {lang === 'fr' ? 'Demander l’Audit d’Usine' : 'Request Factory Audit Report'}
              <ArrowRight className="w-4 h-4 text-secondary" />
            </button>
          )}
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <div 
              key={fac.id}
              className="bg-canvas rounded-3xl border border-border-soft overflow-hidden shadow-card hover:border-slate-300 transition-all flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                <img 
                  src={fac.image} 
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white text-[10px] font-bold tracking-wider backdrop-blur-xs border border-white/10">
                    {fac.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-xs">
                    {fac.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {fac.desc}
                </p>

                {/* Specs Pill List */}
                <div className="pt-4 border-t border-border-soft space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    {lang === 'fr' ? 'POINTS CLÉS D’INSPECTION' : 'KEY VERIFICATION METRICS'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {fac.specs.map((sp, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-border-soft text-slate-700 text-xs font-semibold shadow-2xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
