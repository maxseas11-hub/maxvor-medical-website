import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  ExternalLink, 
  Eye, 
  Calendar, 
  Clock, 
  Tag, 
  Globe2, 
  CheckCircle2, 
  Plus, 
  Edit3, 
  Trash2, 
  Save, 
  X,
  Sparkles
} from 'lucide-react';
import { getSiteData, saveSiteData } from '../../data/siteStore';

export default function ArticleManagement() {
  const [siteData, setSiteData] = useState(() => getSiteData());
  const [searchTerm, setSearchTerm] = useState('');
  const [viewLang, setViewLang] = useState('en');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  const articlesEn = siteData.articlesEn || [];
  const articlesFr = siteData.articlesFr || [];

  const articleList = viewLang === 'en' ? articlesEn : articlesFr;

  const filteredArticles = articleList.filter(a => {
    const matchesSearch = 
      a.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.slug?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.summary?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const triggerSuccess = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleDeleteArticle = (articleId) => {
    if (window.confirm('Are you sure you want to delete this article from both English and French knowledge bases?')) {
      const updated = {
        ...siteData,
        articlesEn: articlesEn.filter(a => a.id !== articleId && a.slug !== articleId),
        articlesFr: articlesFr.filter(a => a.id !== articleId && a.slug !== articleId)
      };
      setSiteData(updated);
      saveSiteData(updated);
      triggerSuccess();
    }
  };

  const handleOpenAddModal = () => {
    setIsEditing(false);
    setCurrentArticle({
      id: 'art-' + Date.now(),
      slug: 'clinical-guide-' + Math.floor(100 + Math.random() * 900),
      titleEn: '',
      titleFr: '',
      category: 'Diagnostic Ultrasound SOP',
      date: new Date().toISOString().slice(0, 10),
      readTime: '6 min read',
      summaryEn: '',
      summaryFr: '',
      contentEn: '',
      contentFr: '',
      isPublished: true
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (article) => {
    setIsEditing(true);
    const artFr = articlesFr.find(a => a.id === article.id || a.slug === article.slug) || {};
    const artEn = articlesEn.find(a => a.id === article.id || a.slug === article.slug) || article;

    setCurrentArticle({
      id: artEn.id || artEn.slug,
      slug: artEn.slug || artEn.id,
      titleEn: artEn.title || '',
      titleFr: artFr.title || artEn.title || '',
      category: artEn.category || 'Diagnostic Ultrasound SOP',
      date: artEn.date || new Date().toISOString().slice(0, 10),
      readTime: artEn.readTime || '6 min read',
      summaryEn: artEn.summary || '',
      summaryFr: artFr.summary || artEn.summary || '',
      contentEn: artEn.content || '',
      contentFr: artFr.content || artEn.content || '',
      isPublished: artEn.isPublished !== false
    });
    setIsModalOpen(true);
  };

  const handleSaveArticleModal = (e) => {
    e.preventDefault();
    if (!currentArticle) return;

    const enObj = {
      id: currentArticle.id,
      slug: currentArticle.slug,
      title: currentArticle.titleEn,
      category: currentArticle.category,
      date: currentArticle.date,
      readTime: currentArticle.readTime,
      summary: currentArticle.summaryEn,
      content: currentArticle.contentEn,
      isPublished: currentArticle.isPublished
    };

    const frObj = {
      id: currentArticle.id,
      slug: currentArticle.slug,
      title: currentArticle.titleFr || currentArticle.titleEn,
      category: currentArticle.category,
      date: currentArticle.date,
      readTime: currentArticle.readTime,
      summary: currentArticle.summaryFr || currentArticle.summaryEn,
      content: currentArticle.contentFr || currentArticle.contentEn,
      isPublished: currentArticle.isPublished
    };

    let newArtsEn, newArtsFr;
    if (isEditing) {
      newArtsEn = articlesEn.map(a => (a.id === currentArticle.id || a.slug === currentArticle.slug) ? enObj : a);
      newArtsFr = articlesFr.map(a => (a.id === currentArticle.id || a.slug === currentArticle.slug) ? frObj : a);
    } else {
      newArtsEn = [enObj, ...articlesEn];
      newArtsFr = [frObj, ...articlesFr];
    }

    const updated = {
      ...siteData,
      articlesEn: newArtsEn,
      articlesFr: newArtsFr
    };
    setSiteData(updated);
    saveSiteData(updated);
    setIsModalOpen(false);
    setCurrentArticle(null);
    triggerSuccess();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            SEO Articles & Clinical Knowledge Base
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Publish clinical SOP guides, point-of-care manuals, and hospital procurement documentation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-border-soft text-xs font-bold">
            <button
              onClick={() => setViewLang('en')}
              className={`px-3 py-1.5 rounded-lg transition-all ${viewLang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
            >
              English 🇬🇧 ({articlesEn.length})
            </button>
            <button
              onClick={() => setViewLang('fr')}
              className={`px-3 py-1.5 rounded-lg transition-all ${viewLang === 'fr' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Français 🇫🇷 ({articlesFr.length})
            </button>
          </div>

          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create Article</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-bold animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Articles repository updated successfully!</span>
        </div>
      )}

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-border-soft shadow-xs">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by article title, clinical category, summary, or slug..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-secondary focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-border-soft shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-border-soft text-muted uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Title & Route</th>
                <th className="py-3.5 px-4 font-semibold">Category</th>
                <th className="py-3.5 px-4 font-semibold">Publish Date</th>
                <th className="py-3.5 px-4 font-semibold">Read Time</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft">
              {filteredArticles.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-4 max-w-[340px]">
                    <span className="font-bold text-slate-900 block truncate">{item.title}</span>
                    <span className="text-secondary font-mono text-[11px] block truncate">/blog/{item.slug || item.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-muted" />
                      <span>{item.date}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-muted" />
                      <span>{item.readTime || '6 min'}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <a
                        href={`/blog/${item.slug || item.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-secondary transition-colors"
                        title="Read on Website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => handleOpenEditModal(item)}
                        className="p-2 rounded-lg hover:bg-teal-50 text-slate-600 hover:text-secondary transition-colors"
                        title="Edit Article"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteArticle(item.id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                        title="Delete Article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit / Create Article Modal */}
      {isModalOpen && currentArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-border-soft space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-border-soft">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {isEditing ? 'Edit Knowledge Article' : 'Create New Clinical SOP Article'}
                </h3>
                <span className="text-xs text-muted font-mono">Slug: /blog/{currentArticle.slug}</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveArticleModal} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Article Title (English 🇬🇧) *</label>
                  <input 
                    type="text" 
                    required
                    value={currentArticle.titleEn}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, titleEn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Article Title (Français 🇫🇷) *</label>
                  <input 
                    type="text" 
                    required
                    value={currentArticle.titleFr}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, titleFr: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">URL Slug *</label>
                  <input 
                    type="text" 
                    required
                    value={currentArticle.slug}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, slug: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category *</label>
                  <input 
                    type="text" 
                    required
                    value={currentArticle.category}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Read Time</label>
                  <input 
                    type="text" 
                    value={currentArticle.readTime}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, readTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              {/* Summaries */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Summary (English 🇬🇧)</label>
                  <textarea 
                    rows={3}
                    value={currentArticle.summaryEn}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, summaryEn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-slate-900 resize-none leading-relaxed"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Summary (Français 🇫🇷)</label>
                  <textarea 
                    rows={3}
                    value={currentArticle.summaryFr}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, summaryFr: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-slate-900 resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* Full Content Body */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Structured Content (English 🇬🇧)</label>
                  <textarea 
                    rows={8}
                    value={currentArticle.contentEn}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, contentEn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-slate-900 font-mono text-[11px] leading-relaxed"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Structured Content (Français 🇫🇷)</label>
                  <textarea 
                    rows={8}
                    value={currentArticle.contentFr}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, contentFr: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-slate-900 font-mono text-[11px] leading-relaxed"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border-soft">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Article</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
