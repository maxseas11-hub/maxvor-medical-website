import React from 'react';
import { X, ShieldCheck, Award, FileCheck2, Download, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/products';

export default function CertModal({ isOpen, onClose, selectedCert = null }) {
  if (!isOpen) return null;

  const currentCert = selectedCert || CERTIFICATIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-elevated border border-border-soft overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{currentCert.code}</h3>
              <p className="text-xs text-slate-300">{currentCert.title}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="p-4 rounded-xl bg-canvas border border-border-soft space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">Auditing Notified Body</span>
              <span className="text-xs font-bold text-primary">{currentCert.authority}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">Compliance Status</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                <FileCheck2 className="w-3.5 h-3.5" />
                {currentCert.status}
              </span>
            </div>
            <div className="border-t border-border-soft pt-3">
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1">Scope of Clearance</span>
              <p className="text-sm text-primary leading-relaxed">{currentCert.scope}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Technical Documentation Available:</h4>
            <ul className="space-y-2 text-xs text-muted">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Full Technical Dossier (Declaration of Conformity - DoC)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Certificate of Analysis (COA) per production batch
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Biocompatibility Test Reports (ISO 10993) & Sterilization Validation (ISO 11135)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Free Sale Certificate (FSC) issued by Health Authority
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border-soft">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-border text-xs font-semibold text-muted hover:bg-canvas transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                alert('Official certificate copies & technical dossier will be attached with your RFQ quotation.');
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold flex items-center gap-2 hover:bg-primary-light transition-colors"
            >
              <Download className="w-4 h-4" />
              Request Certified Copies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
