import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  FileText, 
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Layers,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import LanguageSwitcher from '../common/LanguageSwitcher';

export default function Header({ onOpenRfq }) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();
  const { t, categories, lang, navigation } = useLanguage();

  const resourcesDropdownItems = [
    {
      id: 'dropdown-faq',
      label: lang === 'fr' ? 'FAQ (Foire Aux Questions)' : 'FAQ (Frequently Asked Questions)',
      desc: lang === 'fr' 
        ? 'Questions fréquentes sur l’approvisionnement, MOQ, échantillons et logistique' 
        : 'Common questions on B2B sourcing, MOQs, sample orders & shipping terms',
      path: '/faq',
      icon: HelpCircle,
      badge: lang === 'fr' ? 'Recommandé' : 'Popular'
    },
    {
      id: 'dropdown-blog',
      label: lang === 'fr' ? 'Blogs & Protocoles Cliniques' : 'Blogs & Clinical SOPs',
      desc: lang === 'fr'
        ? 'Guides cliniques pour échographes portables et protocoles de pansements'
        : 'Point-of-care ultrasound operating manuals and wound care clinical guides',
      path: '/blog',
      icon: FileText
    },
    {
      id: 'dropdown-cert',
      label: lang === 'fr' ? 'Qualité & Certifications' : 'Quality & Certifications',
      desc: lang === 'fr'
        ? 'Normes ISO 13485, Déclarations de Conformité CE et dossiers techniques'
        : 'ISO 13485 compliance certificates, CE DoC dossiers and test reports',
      path: '/certifications',
      icon: ShieldCheck
    }
  ];

  const navLinks = [
    { 
      id: 'nav-home', 
      label: t('navHome'), 
      path: '/' 
    },
    { 
      id: 'nav-products', 
      label: t('navProducts'), 
      path: '/products', 
      hasMegaMenu: true 
    },
    { 
      id: 'nav-certifications', 
      label: t('navCertifications'), 
      path: '/certifications' 
    },
    { 
      id: 'nav-resources', 
      label: lang === 'fr' ? 'Ressources' : 'Resources', 
      path: '/faq', 
      hasDropdown: true 
    },
    { 
      id: 'nav-blog', 
      label: 'Blogs', 
      path: '/blog' 
    },
    { 
      id: 'nav-about', 
      label: t('navAbout'), 
      path: '/about' 
    },
    { 
      id: 'nav-contact', 
      label: t('navContact'), 
      path: '/contact' 
    }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isResourcesActive = () => {
    return location.pathname.startsWith('/faq') || location.pathname.startsWith('/resources');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-border shadow-sm" data-component="site-header">
      {/* Top Notification Strip */}
      <div className="bg-canvas-alt text-slate-700 text-[11px] sm:text-xs py-2 px-4 border-b border-border-soft">
        <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 flex items-center justify-end">
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-slate-600">
            {/* Topbar Language Switcher */}
            <LanguageSwitcher variant="topbar" />

            <span className="hidden sm:inline text-slate-300">|</span>

            <a 
              href="mailto:sales@maxvor.com" 
              className="hover:text-secondary flex items-center gap-1.5 font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-secondary" />
              <span>sales@maxvor.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo: MAXVOR Vector Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/assets/logo/maxvor-logo-light.svg" 
              alt="MAXVOR" 
              className="h-10 sm:h-11 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 flex-nowrap shrink-0">
            {navLinks.map((link) => {
              // 1. Products Mega Menu Dropdown
              if (link.hasMegaMenu) {
                return (
                  <div 
                    key={link.path}
                    className="relative shrink-0"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap inline-flex items-center gap-1 transition-colors ${
                        isActive(link.path) || megaMenuOpen
                          ? 'text-secondary bg-secondary-light/40' 
                          : 'text-primary hover:text-secondary hover:bg-canvas'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Mega Menu Dropdown Panel */}
                    {megaMenuOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-[780px] bg-white rounded-2xl shadow-dropdown border border-border-soft p-6 z-50">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-soft">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                              {lang === 'fr' ? 'Équipements Médicaux & Consommables MAXVOR' : 'MAXVOR Devices & Clinical Supplies'}
                            </span>
                            <h4 className="text-base font-bold text-primary">
                              {lang === 'fr' ? 'Catégories Autorisées pour l’Exportation B2B' : 'Authorized Product Categories for B2B Export'}
                            </h4>
                          </div>
                          <Link 
                            to="/products" 
                            className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
                            onClick={() => setMegaMenuOpen(false)}
                          >
                            {lang === 'fr' ? 'Voir Tout le Catalogue' : 'View Full Catalog'} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          {categories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/products?category=${cat.id}`}
                              onClick={() => setMegaMenuOpen(false)}
                              className="group/item p-4 rounded-xl border border-transparent hover:border-border-soft hover:bg-canvas transition-all flex items-start gap-4"
                            >
                              <div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-white border border-border-soft relative flex items-center justify-center p-2">
                                <img 
                                  src={cat.squareImage || cat.image} 
                                  alt={cat.name} 
                                  className="w-full h-full object-contain group-hover/item:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="text-sm font-bold text-primary group-hover/item:text-secondary line-clamp-1 mb-1">
                                  {cat.name}
                                </h5>
                                <p className="text-xs text-muted line-clamp-2 leading-relaxed mb-2">
                                  {cat.tagline}
                                </p>
                                <span className="text-[11px] font-bold text-secondary inline-flex items-center gap-1">
                                  {lang === 'fr' ? 'Découvrir la gamme' : 'Browse Category'} <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 2. Resources Dropdown Menu (Contains FAQ, Blogs, Certifications)
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id || link.path}
                    className="relative shrink-0"
                    onMouseEnter={() => setResourcesDropdownOpen(true)}
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >
                    <Link
                      to="/faq"
                      className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap inline-flex items-center gap-1 transition-colors ${
                        isResourcesActive() || resourcesDropdownOpen
                          ? 'text-secondary bg-secondary-light/40' 
                          : 'text-primary hover:text-secondary hover:bg-canvas'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Resources Dropdown Card */}
                    {resourcesDropdownOpen && (
                      <div className="absolute left-0 top-full w-[420px] bg-white rounded-2xl shadow-dropdown border border-border-soft p-3 z-50 animate-in fade-in-50 duration-150">
                        <div className="p-2.5 pb-2 mb-1 border-b border-border-soft">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block">
                            {lang === 'fr' ? 'Ressources & Guides B2B' : 'MAXVOR Sourcing Resources'}
                          </span>
                        </div>

                        <div className="space-y-1">
                          {resourcesDropdownItems.map((item) => {
                            const Icon = item.icon;
                            const isCurrent = location.pathname.startsWith(item.path);
                            return (
                              <Link
                                key={item.id}
                                to={item.path}
                                onClick={() => setResourcesDropdownOpen(false)}
                                className={`group/res p-3 rounded-xl transition-all flex items-start gap-3.5 ${
                                  isCurrent 
                                    ? 'bg-secondary/10 border border-secondary/20' 
                                    : 'hover:bg-slate-50 border border-transparent'
                                }`}
                              >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                  isCurrent 
                                    ? 'bg-secondary text-white' 
                                    : 'bg-slate-100 text-slate-700 group-hover/res:bg-secondary/15 group-hover/res:text-secondary'
                                }`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <h5 className={`text-xs sm:text-sm font-bold leading-tight ${
                                      isCurrent ? 'text-secondary' : 'text-slate-900 group-hover/res:text-secondary'
                                    }`}>
                                      {item.label}
                                    </h5>
                                    {item.badge && (
                                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary/15 text-secondary">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 3. Regular Navigation Item
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    isActive(link.path) 
                      ? 'text-secondary bg-secondary-light/40' 
                      : 'text-primary hover:text-secondary hover:bg-canvas'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <LanguageSwitcher />

            <button
              onClick={() => onOpenRfq()}
              className="px-3.5 xl:px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t('navRequestRfq')}</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            
            <button
              onClick={() => onOpenRfq()}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-secondary text-white text-xs font-bold"
            >
              RFQ
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-primary hover:bg-canvas"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.id || link.path} className="border-b border-border-soft/60 pb-2">
                  <div 
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-primary hover:bg-canvas cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {mobileResourcesOpen && (
                    <div className="pl-4 pr-2 space-y-1 pt-1 animate-in fade-in duration-150">
                      {resourcesDropdownItems.map(item => (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${
                            location.pathname.startsWith(item.path)
                              ? 'bg-secondary/10 text-secondary font-bold'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <item.icon className="w-4 h-4 text-secondary shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold ${
                  isActive(link.path)
                    ? 'bg-secondary-light/40 text-secondary'
                    : 'text-primary hover:bg-canvas'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-border flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full py-3 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-center text-sm shadow-sm"
            >
              {t('navRequestRfq')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
