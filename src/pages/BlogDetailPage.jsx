import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  ArrowRight,
  Package
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageSeo } from '../hooks/usePageSeo';

export default function BlogDetailPage({ onOpenRfq }) {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { t, getArticleById, getProductById, articles, lang } = useLanguage();

  const article = getArticleById(articleId);

  usePageSeo({ articleData: article });

  if (!article) {
    return (
      <div className="w-full bg-canvas min-h-screen py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-primary">{lang === 'fr' ? 'Article Non Trouvé' : 'Article Not Found'}</h2>
        <p className="text-muted text-sm">{lang === 'fr' ? 'Le guide clinique que vous recherchez n’est pas disponible.' : 'The clinical guide you are looking for does not exist or has been relocated.'}</p>
        <Link to="/blog" className="inline-block px-5 py-2.5 rounded-xl bg-secondary text-white font-bold text-xs">
          {t('blogBackToHub')}
        </Link>
      </div>
    );
  }

  const matchedProduct = article.matchedProductId ? getProductById(article.matchedProductId) : null;
  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div className="w-full bg-canvas min-h-screen py-10 md:py-16" data-component="blog-detail-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6 flex-wrap">
          <Link to="/" className="hover:text-primary transition-colors">{t('navHome')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/blog" className="hover:text-primary transition-colors">{t('navBlog')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-bold truncate max-w-xs sm:max-w-md">{article.title}</span>
        </div>

        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('blogBackToHub')}
          </button>
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-3xl border border-border-soft p-6 sm:p-10 shadow-card mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
            <span className="px-3 py-1 rounded-md bg-secondary-light text-secondary font-bold uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 border-t border-border-soft">
            {article.summary}
          </p>

          {/* Primary & Secondary SEO Keyword Meta Anchors */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-border-soft space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-secondary" />
              <span className="font-bold text-slate-900">{lang === 'fr' ? 'Intention de Recherche Buyer :' : 'Target Buyer Intent Search Query:'}</span>
              <span className="font-semibold text-secondary">"{article.primaryKeyword}"</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-slate-400 text-[11px]">{lang === 'fr' ? 'Termes Associés :' : 'Related Sourcing Queries:'}</span>
              {(Array.isArray(article.secondaryKeywords) ? article.secondaryKeywords : []).map((kw, idx) => (
                <span key={idx} className="bg-white border border-border-soft px-2 py-0.5 rounded text-[11px] text-slate-600">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="bg-white rounded-3xl border border-border-soft p-6 sm:p-10 shadow-card mb-8">
          <div 
            className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Footnote */}
          <div className="mt-8 pt-6 border-t border-border-soft flex items-center justify-between text-xs text-muted">
            <span>{t('blogAuthor')} <strong className="text-slate-900">{article.author}</strong></span>
            <span>{t('location')}</span>
          </div>
        </div>

        {/* Matched Product Promotion (Contextual Link) */}
        {matchedProduct && (
          <div className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-white rounded-3xl border border-secondary/30 p-6 sm:p-8 mb-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{t('blogRelatedProduct')}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-white border border-border-soft p-2 shrink-0 flex items-center justify-center">
                <img 
                  src={matchedProduct.image} 
                  alt={matchedProduct.name} 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1.5 flex-1 text-center sm:text-left">
                <h4 className="text-base font-bold text-slate-900">
                  {matchedProduct.name}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {matchedProduct.shortDesc}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-secondary">
                  <span>MOQ: {matchedProduct.moq || '1 Unit'}</span>
                  <span>•</span>
                  <span>CE & ISO Compliant</span>
                  <span>•</span>
                  <span>Direct Export Support</span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col gap-2">
                <Link
                  to={`/products/${matchedProduct.id}`}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-secondary text-white text-xs font-bold transition-colors text-center"
                >
                  {t('viewDetails')}
                </Link>
                <button
                  onClick={() => onOpenRfq(matchedProduct)}
                  className="px-4 py-2 rounded-xl bg-white border border-border text-slate-800 hover:bg-slate-50 text-xs font-bold transition-colors text-center"
                >
                  {t('homeQuickQuote')}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'fr' ? 'Articles & Guides Complémentaires' : 'Related Clinical Sourcing Guides'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.slug || rel.id}`}
                  className="p-5 rounded-2xl bg-white border border-border-soft hover:border-slate-300 transition-all shadow-xs block group space-y-2"
                >
                  <span className="text-[11px] font-bold text-secondary uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-secondary transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
