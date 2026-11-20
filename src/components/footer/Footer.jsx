import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Globe, 
  Download, 
  FileText, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer({ onOpenRfq }) {
  const { t, categories, lang } = useLanguage();

  return (
    <footer className="bg-canvas-alt text-slate-600 border-t border-border" data-component="site-footer">
      
      {/* Upper Main Footer Grid */}
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Company Bio & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/logo/maxvor-logo-light.svg" 
                alt="MAXVOR" 
                className="h-11 w-auto"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              {t('footerDesc')}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>{lang === 'fr' ? 'Conformité d’Exportation & Dossiers Techniques' : 'Export Quality Compliance & Technical Documentation'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>{lang === 'fr' ? 'Gestion de la Qualité selon Norme ISO 13485' : 'ISO Standard Factory Quality Management'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>{lang === 'fr' ? 'Inspection Fonctionnelle et Diagnostique 100% Avant Expédition' : '100% Pre-Shipment Functional & Diagnostic Inspection'}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => onOpenRfq()}
                className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold transition-all shadow-sm"
              >
                {t('heroCtaQuote')}
              </button>
              <a
                href="mailto:sales@maxvor.com"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-border text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                sales@maxvor.com
              </a>
            </div>
          </div>

          {/* Col 3: Category Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {lang === 'fr' ? 'Catégories d’Équipements' : 'Medical Product Lines'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.id}`}
                    className="hover:text-secondary transition-colors block truncate"
                  >
                    {cat.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Additional Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link to="/products" className="hover:text-secondary transition-colors">
                  {t('navProducts')}
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-secondary transition-colors">
                  {t('navCertifications')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-secondary transition-colors">
                  {lang === 'fr' ? 'Foire Aux Questions (FAQ)' : 'Frequently Asked Questions (FAQ)'}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-secondary transition-colors">
                  {t('navBlog')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  {t('navAbout')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  {t('navContact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t('footerContactUs')}
            </h4>
            
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>{t('location')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="mailto:sales@maxvor.com" className="hover:text-secondary">sales@maxvor.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary shrink-0" />
                <span>www.maxvor.com</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-1">
                {lang === 'fr' ? 'Horaires du Service Export :' : 'Global Export Desk Hours:'}
              </span>
              <p className="text-xs text-slate-500">
                {lang === 'fr' ? 'Du lundi au samedi, 8h00 - 22h00 (UTC+8)' : 'Monday - Saturday, 8:00 AM - 10:00 PM (UTC+8)'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-canvas border-t border-border-soft py-6">
        <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            <p>{t('footerCopyright')}</p>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/certifications" className="hover:text-primary transition-colors">
              {lang === 'fr' ? 'Conformité & Normes' : 'Compliance & Standards'}
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              {lang === 'fr' ? 'À Propos' : 'About Us'}
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              {lang === 'fr' ? 'Assistance B2B' : 'B2B Support'}
            </Link>
            <Link to="/admin" className="text-slate-400 hover:text-secondary font-mono text-[11px] transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
