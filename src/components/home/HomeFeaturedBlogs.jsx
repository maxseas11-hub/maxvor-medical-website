import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Tag, Sparkles, Calendar } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function HomeFeaturedBlogs() {
  const { articles = [], lang } = useLanguage();

  // Pick top 3 featured articles
  const featured = articles.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-border-soft" data-component="home-featured-blogs">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              {lang === 'fr' ? 'Connaissances Cliniques & Guides' : 'Clinical & Procurement Insights'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {lang === 'fr' ? 'Derniers Articles & Guides d’Achat' : 'Latest Articles & Sourcing SOPs'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {lang === 'fr' 
                ? 'Guides pratiques pour l’échographie clinique, comparatifs techniques de consommables et procédures d’appels d’offres.'
                : 'Practical operational guides for point-of-care ultrasound, consumable comparisons, and healthcare procurement procedures.'}
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs sm:text-sm transition-colors shrink-0"
          >
            <span>{lang === 'fr' ? 'Voir Tous les Articles' : 'Explore All Blogs'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Text-First Clean Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((art) => (
            <Link
              key={art.id}
              to={`/blog/${art.slug || art.id}`}
              className="bg-canvas rounded-3xl p-7 border border-border-soft shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Meta Header: Category Badge + Date */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[11px] font-bold border border-secondary/20">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{art.date || '2026'}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                  {art.title}
                </h3>

                {/* Article Summary */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {art.summary || art.excerpt}
                </p>
              </div>

              {/* Card Footer: Action Link */}
              <div className="pt-5 mt-6 border-t border-border-soft flex items-center justify-between text-xs font-bold text-secondary">
                <span>{lang === 'fr' ? 'Lire l’Article' : 'Read Guide'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
