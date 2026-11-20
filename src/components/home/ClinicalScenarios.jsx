import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Sparkles, 
  ArrowRight,
  PlusCircle
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function ClinicalScenarios({ onOpenRfq }) {
  const { lang, t } = useLanguage();

  const scenarios = [
    {
      id: 'pocus-emergency',
      title: lang === 'fr' ? 'Échographie d’Urgence & Triage POCUS' : 'Emergency & Bedside Point-of-Care Ultrasound (POCUS)',
      subtitle: lang === 'fr' ? 'FAST Écho, Voies Vasculaires, Cardio & Abdomen' : 'FAST Exams, Vascular Access, Cardiac & Abdominal Triage',
      desc: lang === 'fr' 
        ? 'Diagnostic immédiat au chevet du patient avec sondes sans fil ultra-légères connectées sur tablette Android ou PC, sans encombrement de chariot.'
        : 'Rapid bedside diagnostic imaging in emergency departments, ambulances, and remote triage clinics with USB-C / wireless multi-platform probes.',
      image: '/assets/images/healson-c30c-convex-color.png',
      badge: lang === 'fr' ? 'URGENCES & RÉANIMATION' : 'EMERGENCY & ICU',
      highlights: [
        lang === 'fr' ? 'Démarrage en < 5 secondes' : '< 5s Rapid Startup',
        lang === 'fr' ? 'Doppler Couleur & Pulsé' : 'Color & Pulsed Doppler',
        lang === 'fr' ? 'Étanchéité IPX7 Désinfection Facile' : 'IPX7 Waterproof Probe'
      ]
    },
    {
      id: 'surgical-wound',
      title: lang === 'fr' ? 'Bloc Opératoire & Soins de Plaies Aseptiques' : 'Operating Theater & Sterile Wound Management',
      subtitle: lang === 'fr' ? 'Bandes Cohésives Sans Latex & Pansements Hydrocolloïdes' : 'Latex-Free Cohesive Bandages & Hydrocolloid Dressings',
      desc: lang === 'fr'
        ? 'Maintien atraumatique de pansements post-opératoires, fixation de cathéters IV et compression hémostatique douce sans résidu adhésif cutané.'
        : 'Atraumatic post-operative compression dressings, IV catheter securement, and breathable orthopedic cast padding without skin maceration.',
      image: '/assets/images/elastic-compression-bandage.png',
      badge: lang === 'fr' ? 'BLOC OPÉRATOIRE & PANSEMENTS' : 'SURGICAL & ORTHO',
      highlights: [
        lang === 'fr' ? 'Sans Latex Hypoallergénique' : '100% Latex-Free & Hypoallergenic',
        lang === 'fr' ? 'Auto-Adhésif Sans Épingle' : 'Self-Adherent, No Clips Needed',
        lang === 'fr' ? 'Perméable à l’Air & Résistant à l’Eau' : 'High Air Permeability'
      ]
    },
    {
      id: 'sports-cryo',
      title: lang === 'fr' ? 'Médecine du Sport & Cryothérapie par Compression' : 'Sports Medicine & Cold Compression Therapy',
      subtitle: lang === 'fr' ? 'Bandes de Froid Instantané & Immobilisation Articulaire' : 'Instant Cooling Bandages & Joint Stabilization',
      desc: lang === 'fr'
        ? 'Soulagement rapide des entorses aiguës, réduction de l’œdème musculaire et stabilisation immédiate des articulations sans réfrigération préalable.'
        : 'Targeted RICE protocol cold compression for acute athletic sprains, muscle swelling reduction, and physical therapy recovery.',
      image: '/assets/images/zinc-oxide-adhesive-tape.png',
      badge: lang === 'fr' ? 'TRAUMATOLOGIE & SPORT' : 'SPORTS REHABILITATION',
      highlights: [
        lang === 'fr' ? 'Refroidissement Instantané 2-3h' : 'Instant Cryo Cooling 2-3h',
        lang === 'fr' ? 'Compression Élastique Contrôlée' : 'Controlled Elastic Tension',
        lang === 'fr' ? 'Usage Direct Hors Réfrigérateur' : 'No Freezing Required'
      ]
    },
    {
      id: 'lab-infusion',
      title: lang === 'fr' ? 'Prélèvements de Laboratoire & Abord Veineux' : 'Diagnostic Sampling & Safe Infusion Delivery',
      subtitle: lang === 'fr' ? 'Tubes Sous Vide & Cathéters IV Sécurisés' : 'Vacuum Blood Tubes & Safety IV Cannula Sets',
      desc: lang === 'fr'
        ? 'Prélèvements sanguins sous vide à vide calibré, micro-tubes de centrifugation et sets de perfusion stériles garantissant la sécurité biologique.'
        : 'Calibrated vacuum blood collection tubes, safety retractable lancets, and precision IV infusion sets ensuring zero cross-contamination.',
      image: '/assets/images/vacuum-blood-tubes.png',
      badge: lang === 'fr' ? 'LABORATOIRE & PERFUSION' : 'DIAGNOSTIC & INFUSION',
      highlights: [
        lang === 'fr' ? 'Stérilisation Rayons Gamma / OE' : 'Gamma / EO Gas Sterilized',
        lang === 'fr' ? 'Code Couleur Normalisé ISO' : 'ISO Standard Color Coding',
        lang === 'fr' ? 'Aiguille Silicone Ultra-Tranchante' : 'Siliconized Lancet Needle'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-canvas border-b border-border-soft" data-component="clinical-scenarios">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
              <HeartPulse className="w-4 h-4" />
              {lang === 'fr' ? 'SCÉNARIOS CLINIQUES & APPLICATIONS PAR DÉPARTEMENT' : 'DEPARTMENTAL CLINICAL SCENARIOS'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === 'fr' 
                ? 'Une Gamme Conçue pour Chaque Défi Médical Hospitalier'
                : 'Integrated Medical Solutions Across Critical Hospital Care Departments'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'fr'
                ? 'Découvrez comment nos sondes d’échographie point-of-care et nos consommables de soins répondent aux exigences précises des praticiens et des centrales d’achat.'
                : 'Explore our multi-departmental medical device matrix engineered for clinical efficacy, healthcare compliance, and international bulk procurement.'}
            </p>
          </div>

          {onOpenRfq && (
            <button
              onClick={onOpenRfq}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white text-xs font-bold hover:bg-secondary-hover transition-all shadow-md shrink-0"
            >
              {lang === 'fr' ? 'Demander un Pack Département' : 'Request Departmental Package'}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 4 Clinical Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((sc) => (
            <div 
              key={sc.id}
              className="bg-white rounded-3xl border border-border-soft p-6 shadow-card hover:border-secondary/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Department Image & Badge */}
                <div className="relative aspect-square w-full rounded-2xl bg-canvas p-4 flex items-center justify-center border border-border-soft overflow-hidden">
                  <img 
                    src={sc.image} 
                    alt={sc.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 text-white text-[9px] font-bold tracking-wider">
                      {sc.badge}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-secondary transition-colors leading-snug">
                    {sc.title}
                  </h3>
                  <p className="text-xs font-semibold text-secondary mt-1">
                    {sc.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {sc.desc}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 mt-6 border-t border-border-soft space-y-2">
                {sc.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <Sparkles className="w-3 h-3 text-secondary shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
