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
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';

export default function OemSolutions({ onOpenRfq }) {
  const { lang, t } = useLanguage();

  const oemCapabilities = [
    {
      icon: Cpu,
      title: 'Point-of-Care Ultrasound Integration',
      description: 'Pre-calibrated convex, linear, and phased array ultrasound probes supporting Android, Windows, and iOS multi-lingual software environments.'
    },
    {
      icon: Layers,
      title: 'Compliant Export Packaging & Labeling',
      description: 'Standardized printing for sterile blister packs, inner dispenser boxes, peel pouches, and multi-lingual export shipping cartons.'
    },
    {
      icon: PackageCheck,
      title: 'Validated Sterilization Integrity',
      description: 'Validated Ethylene Oxide (EO), Gamma Radiation, and Steam Autoclave sterilization processes with batch biological indicator release testing.'
    },
    {
      icon: FileCheck2,
      title: 'Regulatory & Dossier Support',
      description: 'Turnkey documentation packages including Declaration of Conformity (DoC), IEC 60601 electrical test logs, and Certificate of Origin for customs clearance.'
    }
  ];

  return (
    <section id="oem-section" className="py-16 md:py-24 bg-canvas-alt border-b border-border-soft" data-component="oem-section">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Global Sourcing Solutions"
          title="Comprehensive Medical Consumables & Diagnostic Supply"
          subtitle="Empowering medical distributors, hospital chains, and global healthcare networks with consolidated procurement, custom sterile packaging, and certified batch consistency."
        />

        {/* 4 Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {oemCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-border-soft shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary-light text-secondary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-soft">
                  <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>ISO 13485 Standardized</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sourcing Process Workflow Banner */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-elevated">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-semibold backdrop-blur-xs">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Streamlined 4-Step Supply Protocol</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              From Specification Review to Containerized Export
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We manage the entire export journey: technical validation, compliance documentation, sterile packaging verification, and containerized freight delivery with real-time tracking.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRfq()}
                className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                Request Supply Proposal
              </button>
            </div>
          </div>

          {/* Decorative background grid pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

      </div>
    </section>
  );
}
