import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronRight,
  Search, 
  Boxes, 
  ShieldCheck, 
  Truck, 
  DollarSign, 
  Stethoscope, 
  FileText, 
  Mail, 
  ArrowRight, 
  Sparkles,
  Layers,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageSeo } from '../hooks/usePageSeo';
import SectionHeading from '../components/common/SectionHeading';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '../data/faqs';

const ICON_MAP = {
  Boxes: Boxes,
  ShieldCheck: ShieldCheck,
  Truck: Truck,
  DollarSign: DollarSign,
  Stethoscope: Stethoscope
};

export default function FaqPage({ onOpenRfq }) {
  usePageSeo({ pageKey: 'faq' });
  const { lang, t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState('all');
  const [openIds, setOpenIds] = useState(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle single accordion item
  const toggleFaq = (id) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Expand all in current view
  const expandAll = () => {
    setOpenIds(filteredFaqs.map(f => f.id));
  };

  // Collapse all in current view
  const collapseAll = () => {
    setOpenIds([]);
  };

  // Filtered FAQs based on active category and search
  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.categoryId === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const qText = (lang === 'fr' ? item.questionFr : item.questionEn).toLowerCase();
      const aText = (lang === 'fr' ? item.answerFr : item.answerEn).toLowerCase();
      const query = searchQuery.toLowerCase().trim();

      return qText.includes(query) || aText.includes(query);
    });
  }, [activeCategory, searchQuery, lang]);

  // Compute question counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: FAQ_ITEMS.length };
    FAQ_CATEGORIES.forEach(cat => {
      counts[cat.id] = FAQ_ITEMS.filter(f => f.categoryId === cat.id).length;
    });
    return counts;
  }, []);

  return (
    <div className="w-full bg-canvas min-h-screen py-10 md:py-16" data-component="faq-page">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-primary transition-colors">{t('navHome')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-400">{lang === 'fr' ? 'Ressources' : 'Resources'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-bold">{lang === 'fr' ? 'Foire Aux Questions' : 'Frequently Asked Questions (FAQ)'}</span>
        </div>

        {/* Page Top Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold text-secondary">
            <HelpCircle className="w-4 h-4 text-secondary" />
            <span>{lang === 'fr' ? 'Base de Connaissances & FAQ' : 'Knowledge Base & FAQ Hub'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {lang === 'fr' ? 'Foire Aux Questions (FAQ)' : 'Frequently Asked Questions (FAQ)'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === 'fr'
              ? 'Retrouvez toutes les réponses essentielles concernant l’approvisionnement médical consolidé, les quantités minimales (MOQ), la documentation réglementaire, la logistique internationale et nos conditions commerciales.'
              : 'Find clear answers regarding multi-category medical supply consolidation, MOQ thresholds, regulatory export documentation, international container logistics, and commercial procurement terms.'}
          </p>

          {/* Quick Search Input */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'fr' ? 'Rechercher une question ou un mot-clé (ex: MOQ, CIF, ISO, échographe)...' : 'Search questions by keyword (e.g. MOQ, CIF, ISO, ultrasound, samples)...'}
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-border-soft shadow-xs text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Navigation Tabs (Interactive Classification) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {lang === 'fr' ? 'Filtrer par Catégorie :' : 'Browse by Category:'}
            </span>
            <div className="flex items-center gap-3 text-xs">
              <button 
                onClick={expandAll}
                className="text-secondary hover:underline font-semibold"
              >
                {lang === 'fr' ? 'Tout Déplier' : 'Expand All'}
              </button>
              <span className="text-slate-300">|</span>
              <button 
                onClick={collapseAll}
                className="text-slate-500 hover:underline font-semibold"
              >
                {lang === 'fr' ? 'Tout Replier' : 'Collapse All'}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none flex-nowrap md:flex-wrap">
            {/* All Questions Tab */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-secondary text-white shadow-sm ring-2 ring-secondary/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-border-soft'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Toutes les Questions' : 'All Questions'}</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {categoryCounts.all}
              </span>
            </button>

            {/* Individual Category Tabs */}
            {FAQ_CATEGORIES.map(cat => {
              const Icon = ICON_MAP[cat.icon] || HelpCircle;
              const isSelected = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? 'bg-secondary text-white shadow-sm ring-2 ring-secondary/20'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-border-soft'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{lang === 'fr' ? cat.nameFr : cat.nameEn}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area: Category Details Banner & Accordion List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Active Category Overview / Help Box (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-4 space-y-6 sticky top-28">
            <div className="bg-white rounded-3xl border border-border-soft p-6 shadow-card space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block">
                  {lang === 'fr' ? 'Navigation Thématique' : 'Category Summary'}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {activeCategory === 'all'
                    ? (lang === 'fr' ? 'Toutes les Rubriques' : 'Comprehensive Sourcing FAQ')
                    : (lang === 'fr' 
                        ? FAQ_CATEGORIES.find(c => c.id === activeCategory)?.nameFr 
                        : FAQ_CATEGORIES.find(c => c.id === activeCategory)?.nameEn)}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeCategory === 'all'
                    ? (lang === 'fr' 
                        ? 'Explorez l’ensemble de nos questions fréquentes ou utilisez les filtres par catégorie pour cibler votre besoin.' 
                        : 'Explore our complete list of B2B procurement questions or filter by specific category above to narrow your inquiry.')
                    : (lang === 'fr'
                        ? FAQ_CATEGORIES.find(c => c.id === activeCategory)?.descFr
                        : FAQ_CATEGORIES.find(c => c.id === activeCategory)?.descEn)}
                </p>
              </div>

              <div className="pt-4 border-t border-border-soft space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'fr' ? 'Réponses validées par nos experts export' : 'Verified by MAXVOR Trade Compliance Desk'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'fr' ? 'Devis chiffré sous 12h ouvrées' : 'Proforma quotes issued < 12 Business Hours'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'fr' ? 'Documentation bilingue Anglais/Français' : 'Bilingual English/French Technical Dossiers'}</span>
                </div>
              </div>
            </div>

            {/* Quick Sourcing Help Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white space-y-4 shadow-card">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-secondary-light">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? 'Service Export Dédié' : 'Dedicated B2B Desk'}</span>
              </div>
              <h4 className="text-base font-bold leading-snug">
                {lang === 'fr' ? 'Besoin d’un Devis Express pour Appel d’Offres ?' : 'Preparing a Hospital Tender or Wholesale Order?'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'fr' 
                  ? 'Transmettez-nous votre cahier des charges et recevez une proposition chiffrée avec fiches techniques.' 
                  : 'Submit your specification sheet to receive competitive tiered wholesale pricing and full compliance documentation.'}
              </p>
              <button
                onClick={() => onOpenRfq()}
                className="w-full py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t('navRequestRfq')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion Questions & Answers */}
          <div className="lg:col-span-8 space-y-4">
            
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-3xl border border-border-soft p-12 text-center space-y-4">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">
                  {lang === 'fr' ? 'Aucune question trouvée' : 'No matching questions found'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {lang === 'fr'
                    ? 'Aucun résultat ne correspond à votre recherche. Essayez d’autres mots-clés ou contactez notre équipe.'
                    : 'We could not find any questions matching your query. Try searching with different keywords or contact our support team.'}
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="px-4 py-2 rounded-xl bg-secondary text-white text-xs font-bold hover:bg-secondary-hover transition-colors"
                >
                  {lang === 'fr' ? 'Réinitialiser la recherche' : 'Reset Search Filters'}
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIds.includes(faq.id);
                const categoryObj = FAQ_CATEGORIES.find(c => c.id === faq.categoryId);
                const categoryLabel = lang === 'fr' ? categoryObj?.nameFr : categoryObj?.nameEn;

                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-border-soft shadow-xs overflow-hidden transition-all duration-200 hover:border-secondary/40"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="space-y-1.5 pr-2">
                        {categoryLabel && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                            {categoryLabel}
                          </span>
                        )}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {lang === 'fr' ? faq.questionFr : faq.questionEn}
                        </h3>
                      </div>

                      <div className={`p-2 rounded-full transition-transform shrink-0 mt-1 ${
                        isOpen 
                          ? 'bg-secondary text-white rotate-180' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-border-soft/60 animate-in fade-in-50 duration-200">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4">
                          {lang === 'fr' ? faq.answerFr : faq.answerEn}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}

          </div>

        </div>

        {/* Mandatory Bottom CTA Card (Specified in User Query) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 md:p-14 text-white text-center space-y-6 shadow-card border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-xs font-bold text-secondary-light">
            <HelpCircle className="w-4 h-4 text-secondary-light" />
            <span>{lang === 'fr' ? 'Assistance Directe' : 'Direct Support'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            {lang === 'fr' ? 'Vous Avez Encore des Questions ?' : 'Still Have Questions?'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'fr'
              ? 'Vous ne trouvez pas l’information que vous recherchez ? Contactez notre équipe pour toute question relative au sourcing de produits, aux commandes de gros et aux appels d’offres.'
              : "Can't find the information you're looking for? Contact our team for assistance with product sourcing, wholesale orders, and procurement inquiries."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-secondary" />
              <span>{lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}</span>
            </Link>

            <button
              onClick={() => onOpenRfq()}
              className="px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs sm:text-sm transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Demander un Devis' : 'Request a Quote'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
