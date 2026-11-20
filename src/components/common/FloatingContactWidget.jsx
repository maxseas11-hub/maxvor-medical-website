import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  FileText, 
  ArrowUp, 
  Check, 
  Copy, 
  X, 
  QrCode, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Headphones
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function FloatingContactWidget({ onOpenRfq }) {
  const { lang, t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [copiedItem, setCopiedItem] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const whatsappNumber = '+86 13642828158';
  const whatsappClean = '8613642828158';
  const salesEmail = 'sales@maxvor.com';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (text, type, e) => {
    e?.stopPropagation?.();
    navigator.clipboard?.writeText?.(text);
    setCopiedItem(type);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside 
      aria-label="Quick Contact & Inquiries"
      className="fixed right-3 sm:right-6 bottom-6 z-50 flex flex-col items-end select-none"
    >
      {/* Main Floating Action Hub */}
      <div className="relative flex flex-col items-end gap-2.5">
        
        {/* Expanded Contact Dock */}
        {isExpanded ? (
          <div className="flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-right-4 duration-300">
            
            {/* 1. WhatsApp Button & Hover Card */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveTooltip('whatsapp')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {/* WhatsApp Hover Popup */}
              {activeTooltip === 'whatsapp' && (
                <div className="absolute right-14 top-1/2 -translate-y-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-emerald-100 p-4 text-slate-800 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between border-b border-emerald-50 pb-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-xs text-slate-900">WhatsApp Export Chat</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Online
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                    {lang === 'fr' 
                      ? 'Discutez directement avec notre équipe export pour devis & spécifications.'
                      : 'Chat directly with our global medical sales team for live quotes & specs.'}
                  </p>

                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 mb-3 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-800">{whatsappNumber}</span>
                    <button
                      onClick={(e) => handleCopy(whatsappNumber, 'whatsapp', e)}
                      className="p-1 rounded-md hover:bg-white text-slate-500 hover:text-emerald-600 transition-colors"
                      title="Copy Number"
                    >
                      {copiedItem === 'whatsapp' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappClean}?text=Hello%20MAXVOR%20Medical%2C%20I%20am%20interested%20in%20your%20medical%20products%20and%20would%20like%20to%20request%20specifications.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors shadow-sm shadow-emerald-500/20"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    {lang === 'fr' ? 'Ouvrir WhatsApp' : 'Start WhatsApp Chat'}
                  </a>
                </div>
              )}

              {/* WhatsApp Floating Button */}
              <a
                href={`https://wa.me/${whatsappClean}?text=Hello%20MAXVOR%20Medical%2C%20I%20am%20interested%20in%20your%20medical%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-200 group-hover:ring-4 group-hover:ring-emerald-200"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>

            {/* 2. Email Button & Hover Card */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveTooltip('email')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {/* Email Hover Popup */}
              {activeTooltip === 'email' && (
                <div className="absolute right-14 top-1/2 -translate-y-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-sky-100 p-4 text-slate-800 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between border-b border-sky-50 pb-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-xs text-slate-900">Official Sales Inquiry</span>
                    </div>
                    <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-1.5 py-0.5 rounded-full">
                      24h Response
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                    {lang === 'fr' 
                      ? 'Envoyez vos appels d’offres et listes de commande à notre adresse officielle.'
                      : 'Send tender RFQs and product inquiries directly to our export desk.'}
                  </p>

                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 mb-3 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-800">{salesEmail}</span>
                    <button
                      onClick={(e) => handleCopy(salesEmail, 'email', e)}
                      className="p-1 rounded-md hover:bg-white text-slate-500 hover:text-sky-600 transition-colors"
                      title="Copy Email"
                    >
                      {copiedItem === 'email' ? (
                        <Check className="w-3.5 h-3.5 text-sky-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <a
                    href={`mailto:${salesEmail}?subject=Medical%20Products%20Inquiry%20-%20MAXVOR`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-colors shadow-sm shadow-sky-500/20"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {lang === 'fr' ? 'Écrire un Email' : 'Send Direct Email'}
                  </a>
                </div>
              )}

              {/* Email Floating Button */}
              <a
                href={`mailto:${salesEmail}?subject=Medical%20Products%20Inquiry%20-%20MAXVOR`}
                className="w-12 h-12 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 hover:scale-105 transition-all duration-200 group-hover:ring-4 group-hover:ring-sky-200"
                aria-label="Send Email Inquiry"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* 3. Instant RFQ Quote Modal Trigger */}
            {onOpenRfq && (
              <div 
                className="relative group"
                onMouseEnter={() => setActiveTooltip('rfq')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {activeTooltip === 'rfq' && (
                  <div className="absolute right-14 top-1/2 -translate-y-1/2 w-48 bg-slate-900 text-white rounded-xl shadow-xl p-2.5 text-center text-xs font-semibold z-50">
                    {lang === 'fr' ? 'Demander un Devis RFQ Rapide' : 'Quick RFQ Quotation Form'}
                  </div>
                )}
                <button
                  onClick={onOpenRfq}
                  className="w-12 h-12 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-lg shadow-slate-900/30 hover:scale-105 transition-all duration-200 group-hover:ring-4 group-hover:ring-slate-300"
                  aria-label="Open RFQ Form"
                >
                  <FileText className="w-5 h-5 text-secondary" />
                </button>
              </div>
            )}

            {/* 4. Phone & WeChat Support Button */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveTooltip('phone')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {activeTooltip === 'phone' && (
                <div className="absolute right-14 top-1/2 -translate-y-1/2 w-56 bg-white rounded-2xl shadow-2xl border border-indigo-100 p-3.5 text-slate-800 z-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="font-bold text-xs text-slate-900">Phone & WeChat</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-800">{whatsappNumber}</span>
                    <button
                      onClick={(e) => handleCopy(whatsappNumber, 'phone', e)}
                      className="p-1 rounded-md hover:bg-white text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                      {copiedItem === 'phone' ? (
                        <Check className="w-3.5 h-3.5 text-indigo-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <a
                    href={`tel:${whatsappClean}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {lang === 'fr' ? 'Appeler Directement' : 'Call Directly'}
                  </a>
                </div>
              )}

              <button
                onClick={(e) => handleCopy(whatsappNumber, 'phone', e)}
                className="w-12 h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all duration-200 group-hover:ring-4 group-hover:ring-indigo-200"
                aria-label="Phone and WeChat"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>

          </div>
        ) : null}

        {/* Floating Dock Toggle & Collapse Button */}
        <div className="flex items-center gap-2">
          {/* Collapse/Expand Mini Switch */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 shadow-md border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105"
            title={isExpanded ? 'Minimize Contact Floating Dock' : 'Expand Contact Floating Dock'}
            aria-label="Toggle Contact Dock"
          >
            {isExpanded ? (
              <X className="w-4 h-4 text-slate-500" />
            ) : (
              <Headphones className="w-4 h-4 text-emerald-600" />
            )}
          </button>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-2xl bg-slate-800/90 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/20 hover:scale-105 transition-all duration-200 border border-slate-700/50"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>

      </div>
    </aside>
  );
}
