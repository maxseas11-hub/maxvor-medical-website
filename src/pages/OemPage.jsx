import React from 'react';
import { 
  Layers, 
  Cpu, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building2,
  PackageCheck,
  Globe2
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from '../components/common/SectionHeading';
import RfqSection from '../components/rfq/RfqSection';

export default function OemPage({ onOpenRfq }) {
  const { t, lang } = useLanguage();

  const oemMatrix = [
    {
      icon: Cpu,
      title: lang === 'fr' ? 'Configuration Matérielle & Sondes POCUS' : 'Hardware & POCUS Probe Configuration',
      desc: lang === 'fr' ? 'Sélection de sondes d’échographie convexes, linéaires et micro-convexes avec connecteurs USB-C/Type-A et compatibilité Android, Windows et iOS.' : 'Pre-configured convex, linear, and phased array ultrasound probes supporting Android, Windows, and iOS operating environments.',
      badge: lang === 'fr' ? 'Matériel Clinique' : 'Clinical Hardware'
    },
    {
      icon: Layers,
      title: lang === 'fr' ? 'Conditionnement & Packaging d’Exportation' : 'Export Packaging & Labeling',
      desc: lang === 'fr' ? 'Emballages stériles blister, boîtes distributrices individuelles et cartons de transport renforcés aux normes maritimes et aériennes.' : 'Certified sterile blister packs, multi-lingual outer dispenser boxes, and palletized reinforced export cartons.',
      badge: lang === 'fr' ? 'Emballages Certifiés' : 'Certified Packaging'
    },
    {
      icon: PackageCheck,
      title: lang === 'fr' ? 'Stérilisation Validée (EO & Autoclave)' : 'Validated Sterilization (EO & Steam)',
      desc: lang === 'fr' ? 'Procédés de stérilisation à l’oxyde d’éthylène (EO) et autoclave validés avec rapports d’indicateurs biologiques par lot.' : 'Validated Ethylene Oxide (EO) and Steam sterilization protocols with documented biological indicator releases.',
      badge: lang === 'fr' ? 'Stérilisation ISO' : 'ISO Sterilization'
    },
    {
      icon: FileCheck2,
      title: lang === 'fr' ? 'Dossiers Réglementaires & Homologation' : 'Regulatory & Dossier Support',
      desc: lang === 'fr' ? 'Dossiers techniques complets incluant Déclaration de Conformité (DoC), rapports de sécurité électrique IEC 60601 et certificats de conformité.' : 'Complete technical registration packages including Declaration of Conformity (DoC), IEC 60601 electrical test logs, and Certificate of Origin.',
      badge: lang === 'fr' ? 'Dossiers Export' : 'Export Dossiers'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: t('oemStep1Title'),
      desc: t('oemStep1Desc')
    },
    {
      step: '02',
      title: t('oemStep2Title'),
      desc: t('oemStep2Desc')
    },
    {
      step: '03',
      title: t('oemStep3Title'),
      desc: t('oemStep3Desc')
    },
    {
      step: '04',
      title: t('oemStep4Title'),
      desc: t('oemStep4Desc')
    }
  ];

  return (
    <div className="w-full bg-canvas min-h-screen py-12 md:py-20" data-component="oem-customization-page">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 space-y-16">
        
        {/* Header */}
        <SectionHeading
          badge={lang === 'fr' ? 'Solutions d’Approvisionnement Global' : 'Global Medical Sourcing Platform'}
          title={t('oemPageTitle')}
          subtitle={t('oemPageSubtitle')}
        />

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {oemMatrix.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-border-soft shadow-card hover:border-secondary/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-secondary/10 text-secondary w-fit">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted bg-slate-50 px-2.5 py-1 rounded-md border border-border-soft">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-soft">
                  <button
                    onClick={() => onOpenRfq()}
                    className="text-xs font-bold text-secondary hover:text-secondary-hover flex items-center gap-1"
                  >
                    {lang === 'fr' ? 'Demander une Cotation Officielle' : 'Inquire for Supply Terms'} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Sourcing Workflow */}
        <div className="bg-white rounded-3xl border border-border-soft p-8 sm:p-12 shadow-card space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              {lang === 'fr' ? 'Processus d’Approvisionnement' : 'Structured Project Execution'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">
              {lang === 'fr' ? 'De l’Échantillon Pilote à la Livraison Globale' : 'From Spec Review to Global Batch Delivery'}
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              {lang === 'fr' ? 'Un cadre d’approvisionnement rigoureux garantissant le respect de vos délais et la conformité technique.' : 'A disciplined 4-stage procurement and supply cycle ensuring zero spec deviation, verifiable QA data, and on-time shipment.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((s, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-canvas border border-border-soft space-y-3 relative group hover:border-secondary/40 transition-colors"
              >
                <div className="text-2xl font-black text-secondary font-mono">
                  {s.step}
                </div>
                <h4 className="font-bold text-base text-primary">
                  {s.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom RFQ Section */}
        <RfqSection onOpenRfq={onOpenRfq} />

      </div>
    </div>
  );
}
