import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Tag, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight, 
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  FileText, 
  ShieldCheck, 
  Filter,
  Wrench,
  HelpCircle,
  FileCode2
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageSeo } from '../hooks/usePageSeo';

const ITEMS_PER_PAGE = 10;

export default function BlogPage({ onOpenRfq }) {
  usePageSeo({ pageKey: 'blog' });
  const [searchParams, setSearchParams] = useSearchParams();
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const articleListRef = useRef(null);
  const { t, articles = [], keywordTags = [], lang } = useLanguage();

  // Read initial states from URL params/query
  const urlPage = parseInt(pageNumber || searchParams.get('page') || '1', 10);
  const urlCategory = searchParams.get('category') || 'all';
  const urlKeyword = searchParams.get('keyword') || 'all';
  const urlQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedKeyword, setSelectedKeyword] = useState(urlKeyword);
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [currentPage, setCurrentPage] = useState(isNaN(urlPage) || urlPage < 1 ? 1 : urlPage);

  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Tous les Articles' : 'All Articles' },
    { id: 'User Manuals & Operating SOPs', label: lang === 'fr' ? '📖 Manuels & Procédures SOP' : '📖 User Manuals & Operating SOPs' },
    { id: 'Procurement & Buying Guides', label: lang === 'fr' ? '🏷️ Guides d’Achat & Appels d’Offres' : '🏷️ Procurement & Buying Guides' },
    { id: 'Clinical Applications & Triage', label: lang === 'fr' ? '🩺 Applications Cliniques & Urgences' : '🩺 Clinical Triage & Applications' },
    { id: 'Regulatory & Import Compliance', label: lang === 'fr' ? '📑 Réglementation & Douanes' : '📑 Export & Import Compliance' },
  ];

  // Defensive Filter articles
  const safeArticles = Array.isArray(articles) ? articles : [];
  const safeKeywordTags = Array.isArray(keywordTags) ? keywordTags : [];

  const filteredArticles = safeArticles.filter(article => {
    if (!article) return false;
    const matchCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    const pKw = String(article.primaryKeyword || '').toLowerCase();
    const sKws = Array.isArray(article.secondaryKeywords) ? article.secondaryKeywords : [];
    const aTitle = String(article.title || '').toLowerCase();
    const aSummary = String(article.summary || article.excerpt || '').toLowerCase();
    const query = String(searchQuery || '').trim().toLowerCase();
    const targetKw = String(selectedKeyword || '').toLowerCase();

    const matchKeyword = selectedKeyword === 'all' || 
      pKw.includes(targetKw) ||
      sKws.some(k => String(k || '').toLowerCase().includes(targetKw));

    const matchSearch = query === '' ||
      aTitle.includes(query) ||
      aSummary.includes(query) ||
      pKw.includes(query) ||
      sKws.some(k => String(k || '').toLowerCase().includes(query));

    return matchCategory && matchKeyword && matchSearch;
  });

  // Pagination calculations
  const totalArticles = filteredArticles.length;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalArticles);
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  // Sync state with URL params when URL changes externally (e.g. Back/Forward)
  useEffect(() => {
    const p = parseInt(pageNumber || searchParams.get('page') || '1', 10);
    const cat = searchParams.get('category') || 'all';
    const kw = searchParams.get('keyword') || 'all';
    const q = searchParams.get('q') || '';

    if (!isNaN(p) && p !== currentPage) {
      setCurrentPage(Math.min(Math.max(p, 1), totalPages));
    }
    if (cat !== selectedCategory) setSelectedCategory(cat);
    if (kw !== selectedKeyword) setSelectedKeyword(kw);
    if (q !== searchQuery) setSearchQuery(q);
  }, [searchParams, pageNumber, totalPages]);

  // Helper function to update URL query parameters seamlessly
  const updateUrl = (page, cat = selectedCategory, kw = selectedKeyword, q = searchQuery) => {
    const params = new URLSearchParams();
    if (cat && cat !== 'all') params.set('category', cat);
    if (kw && kw !== 'all') params.set('keyword', kw);
    if (q && q.trim()) params.set('q', q.trim());
    if (page > 1) {
      params.set('page', String(page));
    }
    setSearchParams(params);
  };

  // Handle page change with URL update and smooth scroll
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== safeCurrentPage) {
      setCurrentPage(newPage);
      updateUrl(newPage, selectedCategory, selectedKeyword, searchQuery);
      if (articleListRef.current) {
        articleListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    }
  };

  // Handle filter changes (resets to page 1)
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setSelectedKeyword('all');
    setCurrentPage(1);
    updateUrl(1, catId, 'all', searchQuery);
  };

  const handleKeywordChange = (kwLabel) => {
    const nextKw = selectedKeyword === kwLabel ? 'all' : kwLabel;
    setSelectedKeyword(nextKw);
    setCurrentPage(1);
    updateUrl(1, selectedCategory, nextKw, searchQuery);
  };

  const handleSearchChange = (newQ) => {
    setSearchQuery(newQ);
    setCurrentPage(1);
    updateUrl(1, selectedCategory, selectedKeyword, newQ);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedKeyword('all');
    setSearchQuery('');
    setCurrentPage(1);
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="w-full bg-canvas min-h-screen py-10 md:py-16" data-component="blog-journal-page">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors">{t('navHome')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/blog" className="hover:text-primary transition-colors">{t('navBlog')}</Link>
          {safeCurrentPage > 1 && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-secondary font-bold">
                {lang === 'fr' ? `Page ${safeCurrentPage}` : `Page ${safeCurrentPage}`}
              </span>
            </>
          )}
        </div>

        {/* Editorial Journal Header */}
        <div className="border-b border-border-soft pb-10 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
            {lang === 'fr' ? 'JOURNAL CLINIQUE, SOURCING & SOP MAXVOR' : 'MAXVOR CLINICAL, SOURCING & OPERATING MANUALS'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl">
            {t('blogPageTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 max-w-3xl leading-relaxed">
            {t('blogPageSubtitle')}
          </p>

          {/* Quick Category Navigation Bar */}
          <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-600 border-border-soft hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Buyer Intent Keyword Matrix */}
        <div className="bg-white rounded-2xl border border-border-soft p-5 sm:p-6 shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={lang === 'fr' ? 'Rechercher un manuel d’utilisation, guide d’achat, mot-clé ou procédure SOP...' : 'Search operating manual, buying guides, clinical SOPs, or keywords...'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-800 placeholder:text-muted focus:outline-hidden focus:border-secondary transition-colors"
              />
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-2 shrink-0 text-xs text-muted">
              <span>
                {lang === 'fr' ? (
                  <>Affichage de <strong className="text-slate-900">{totalArticles > 0 ? startIndex + 1 : 0}–{endIndex}</strong> sur <strong className="text-slate-900">{totalArticles}</strong> articles</>
                ) : (
                  <>Showing <strong className="text-slate-900">{totalArticles > 0 ? startIndex + 1 : 0}–{endIndex}</strong> of <strong className="text-slate-900">{totalArticles}</strong> articles</>
                )}
              </span>
              {(selectedCategory !== 'all' || selectedKeyword !== 'all' || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="text-secondary font-bold hover:underline ml-2"
                >
                  {t('resetFilters')}
                </button>
              )}
            </div>
          </div>

          {/* Sourcing Search Intent Tags */}
          <div className="pt-2 border-t border-border-soft flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 mr-1">
              <TrendingUp className="w-3.5 h-3.5 text-secondary" />
              {t('blogSearchTagsTitle')}
            </span>
            {safeKeywordTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleKeywordChange(tag.label)}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                  selectedKeyword === tag.label
                    ? 'bg-secondary text-white border-secondary'
                    : 'bg-slate-50 text-slate-600 border-border-soft hover:border-slate-300'
                }`}
              >
                #{tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Anchor Ref for Scroll Navigation */}
        <div ref={articleListRef} className="scroll-mt-6" />

        {/* Numbered Bowei-Inspired Journal Grid (10 items per page) */}
        {paginatedArticles.length > 0 ? (
          <div className="space-y-6">
            {paginatedArticles.map((article, idx) => {
              const globalIndex = startIndex + idx + 1;
              const articleIndex = String(globalIndex).padStart(2, '0');
              const isManualSop = article.category === 'User Manuals & Operating SOPs';

              return (
                <article 
                  key={article.id || article.slug || idx}
                  className={`bg-white rounded-2xl border p-6 sm:p-8 hover:border-slate-400 transition-all shadow-xs group ${
                    isManualSop ? 'border-secondary/40 ring-1 ring-secondary/20' : 'border-border-soft'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left Column: Numbering & Date */}
                    <div className="lg:col-span-2 space-y-1">
                      <span className="text-3xl sm:text-4xl font-mono font-black text-slate-200 group-hover:text-secondary transition-colors block">
                        #{articleIndex}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
                        {article.date || article.publishDate || '2026-11'}
                      </span>
                      <span className="text-[11px] text-muted block">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Middle Column: Core Content & SEO Intent Keyword */}
                    <div className="lg:col-span-8 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${
                          isManualSop ? 'bg-secondary/10 text-secondary' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {article.category}
                        </span>
                        {article.primaryKeyword && (
                          <span className="text-[11px] font-semibold text-secondary">
                            Target Keyword: {article.primaryKeyword}
                          </span>
                        )}
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors leading-snug">
                        <Link to={`/blog/${article.slug || article.id}`}>
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {article.summary || article.excerpt}
                      </p>

                      {/* Secondary Search Terms Cloud */}
                      {Array.isArray(article.secondaryKeywords) && article.secondaryKeywords.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {article.secondaryKeywords.map((kw, kIdx) => (
                            <span key={kIdx} className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                              {kw}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Column: CTA */}
                    <div className="lg:col-span-2 flex lg:flex-col justify-end lg:items-end gap-3 pt-4 lg:pt-0">
                      <Link
                        to={`/blog/${article.slug || article.id}`}
                        className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-secondary text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                      >
                        {lang === 'fr' ? 'Lire l’Article' : 'Read Article'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-border-soft space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">
              {lang === 'fr' ? 'Aucun article ne correspond à votre recherche' : 'No articles match your search criteria'}
            </h3>
            <p className="text-xs text-muted max-w-md mx-auto">
              {lang === 'fr' ? 'Essayez de réinitialiser vos filtres ou d’utiliser des mots-clés plus larges.' : 'Try resetting your category filters or searching with broader medical keywords.'}
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-secondary transition-colors"
            >
              {t('resetFilters')}
            </button>
          </div>
        )}

        {/* Clean Numerical & Arrow Pagination Bar (10 Articles Per Page with Route Sync) */}
        {totalPages > 1 && (
          <div className="mt-12 bg-white rounded-2xl border border-border-soft p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Status text */}
            <div className="text-xs text-slate-500 order-2 sm:order-1">
              {lang === 'fr' ? (
                <>Page <strong className="text-slate-900">{safeCurrentPage}</strong> sur <strong className="text-slate-900">{totalPages}</strong> ({totalArticles} articles au total)</>
              ) : (
                <>Page <strong className="text-slate-900">{safeCurrentPage}</strong> of <strong className="text-slate-900">{totalPages}</strong> ({totalArticles} total articles)</>
              )}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1.5 order-1 sm:order-2">
              
              {/* Previous Page Button */}
              <button
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage <= 1}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1 ${
                  safeCurrentPage <= 1
                    ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                    : 'bg-white text-slate-700 border-border-soft hover:bg-slate-50 hover:border-slate-300'
                }`}
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{lang === 'fr' ? 'Précédent' : 'Previous'}</span>
              </button>

              {/* Page Number Buttons with dynamic link styling */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold border transition-all flex items-center justify-center ${
                    safeCurrentPage === pageNum
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-700 border-border-soft hover:border-slate-300 hover:bg-slate-50'
                  }`}
                  title={`Go to Page ${pageNum}`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Page Button */}
              <button
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage >= totalPages}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1 ${
                  safeCurrentPage >= totalPages
                    ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                    : 'bg-white text-slate-700 border-border-soft hover:bg-slate-50 hover:border-slate-300'
                }`}
                title="Next Page"
              >
                <span className="hidden sm:inline">{lang === 'fr' ? 'Suivant' : 'Next'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        )}

        {/* Bottom RFQ Sourcing Banner */}
        <div className="mt-14 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              {lang === 'fr' ? 'Guides Médicaux & Commandes' : 'Medical Guides & Orders'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              {lang === 'fr' ? 'Besoin d’un Cahier des Charges Spécifique pour Votre Hôpital ?' : 'Need Technical Specifications for an Upcoming Healthcare Tender?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              {lang === 'fr' ? 'Contactez nos ingénieurs cliniques pour obtenir les dossiers d’enregistrement et grilles tarifaires usine.' : 'Our clinical engineering desk provides comprehensive tender compliance matrices, parameter cross-references, and direct factory quotation dossiers.'}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenRfq()}
              className="px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {t('heroCtaQuote')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
