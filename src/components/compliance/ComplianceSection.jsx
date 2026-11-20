import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  Microscope, 
  Building2, 
  CheckCircle2, 
  ExternalLink,
  Download
} from 'lucide-react';
import { CERTIFICATIONS } from '../../data/products';
import SectionHeading from '../common/SectionHeading';

export default function ComplianceSection({ onSelectCert, onOpenRfq }) {
  const qcSteps = [
    { title: 'Acoustic Transducer Verification', desc: 'Acoustic output power and beamforming calibration tested per IEC 60601-2-37 standard.' },
    { title: 'Electrical Insulation & Safety', desc: 'Dielectric withstand, leakage current, and power surge testing per IEC 60601-1.' },
    { title: 'Phantom Diagnostic Image QC', desc: 'Standard tissue-mimicking phantom scanning to verify spatial resolution and penetration depth.' },
    { title: 'Multi-OS Software QA Testing', desc: '100% functional verification on Android phones/tablets and Windows PC software packages.' },
  ];

  return (
    <section id="compliance-section" className="py-16 md:py-24 bg-white border-b border-border-soft" data-component="compliance-section">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Quality Assurance & Compliance"
          title="Certified Medical Quality Control Infrastructure"
          subtitle="Strict adherence to global regulatory standards ensuring safe, sterile, and fully traceable medical disposables for hospital and clinical use worldwide."
        />

        {/* 4 Core Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-canvas p-6 rounded-2xl border border-border-soft shadow-card hover:border-secondary/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                    {cert.code}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary">
                  {cert.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed">
                  {cert.scope}
                </p>
                <div className="text-[11px] font-semibold text-slate-500">
                  Auditing Body: <span className="text-primary">{cert.authority}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border-soft flex items-center justify-between">
                <button
                  onClick={() => onSelectCert(cert)}
                  className="text-xs font-bold text-secondary hover:text-secondary-hover flex items-center gap-1"
                >
                  Inspect Certificate Details & Scope →
                </button>
                <button
                  onClick={() => onOpenRfq()}
                  className="text-xs font-semibold text-muted hover:text-primary"
                >
                  Request Technical Dossier
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Lab & Cleanroom Highlight Box */}
        <div className="bg-canvas-alt p-6 sm:p-8 rounded-2xl border border-border-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-light text-secondary text-xs font-bold uppercase">
                <Microscope className="w-4 h-4" />
                In-House QA Laboratory
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                100% Traceability & Strict Physical / Chemical Testing
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Our in-house analytical laboratory is equipped with gas chromatographs for ethylene oxide residual testing, bioburden filtration systems, and electronic tensile testers to guarantee zero defect delivery.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => onOpenRfq()}
                  className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-light transition-colors"
                >
                  Download Sample COA & Test Reports
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qcSteps.map((step, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-border-soft shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-secondary font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>0{i+1}. {step.title}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-6">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
