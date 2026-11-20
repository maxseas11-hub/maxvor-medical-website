import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, Package, Tag, ArrowRight } from 'lucide-react';

export default function ProductQuickViewModal({ isOpen, onClose, product, onOpenRfq }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-elevated border border-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-border-soft flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Technical Specifications Overview
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-muted hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Top Info */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-48 h-48 rounded-2xl bg-slate-50 overflow-hidden shrink-0 border border-border-soft flex items-center justify-center p-2">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                {product.categoryName}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted pt-1">
                <span>MOQ: <strong className="text-slate-900 font-bold">500 Units</strong></span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {product.certifications.map((c, i) => (
                  <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Full Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Package className="w-4 h-4 text-secondary" />
              Full Technical Specifications & Packaging
            </h4>
            <div className="bg-canvas-alt rounded-2xl border border-border p-4 divide-y divide-border-soft text-xs">
              {product.specs.map((spec, sIdx) => (
                <div key={sIdx} className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-700">
                  <span className="text-muted font-medium sm:w-1/3">{spec.label}</span>
                  <span className="font-semibold text-slate-900 sm:w-2/3 sm:text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-border-soft flex items-center justify-between gap-4">
          <div className="text-xs text-muted hidden sm:block">
            Direct factory pricing & fast response within 12 hours
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-border text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRfq(product);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              Request Quote for this Item
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
