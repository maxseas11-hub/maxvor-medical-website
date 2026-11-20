import React, { useState } from 'react';
import { 
  FileEdit, 
  Image, 
  Upload, 
  CheckCircle2, 
  Save, 
  Sparkles, 
  Globe2, 
  Building2, 
  Phone, 
  Mail, 
  Clock,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { getSiteData, saveSiteData, uploadImageToServer, DEFAULT_PAGE_CONTENT } from '../../data/siteStore';

export default function PageContentManagement() {
  const [siteData, setSiteData] = useState(() => getSiteData());
  const [editLang, setEditLang] = useState('en'); // 'en' | 'fr'
  const [savedSuccess, setSavedSuccess] = useState(false);

  const pageContent = siteData.pageContent || DEFAULT_PAGE_CONTENT;

  const [formData, setFormData] = useState({
    badgeEn: pageContent.hero?.badgeEn || '',
    badgeFr: pageContent.hero?.badgeFr || '',
    titleEn: pageContent.hero?.titleEn || '',
    titleFr: pageContent.hero?.titleFr || '',
    subtitleEn: pageContent.hero?.subtitleEn || '',
    subtitleFr: pageContent.hero?.subtitleFr || '',
    feature1En: pageContent.hero?.feature1En || '',
    feature1Fr: pageContent.hero?.feature1Fr || '',
    feature2En: pageContent.hero?.feature2En || '',
    feature2Fr: pageContent.hero?.feature2Fr || '',
    feature3En: pageContent.hero?.feature3En || '',
    feature3Fr: pageContent.hero?.feature3Fr || '',
    feature4En: pageContent.hero?.feature4En || '',
    feature4Fr: pageContent.hero?.feature4Fr || '',
    cleanroomImage: pageContent.hero?.cleanroomImage || '/assets/images/hero-cleanroom.png',
    email: pageContent.contact?.email || 'sales@maxvor.com',
    hoursEn: pageContent.contact?.hoursEn || '',
    hoursFr: pageContent.contact?.hoursFr || '',
    responseRate: pageContent.contact?.responseRate || '< 12 Hours'
  });

  const handleSave = (e) => {
    e.preventDefault();
    const updated = {
      ...siteData,
      pageContent: {
        hero: {
          badgeEn: formData.badgeEn,
          badgeFr: formData.badgeFr,
          titleEn: formData.titleEn,
          titleFr: formData.titleFr,
          subtitleEn: formData.subtitleEn,
          subtitleFr: formData.subtitleFr,
          feature1En: formData.feature1En,
          feature1Fr: formData.feature1Fr,
          feature2En: formData.feature2En,
          feature2Fr: formData.feature2Fr,
          feature3En: formData.feature3En,
          feature3Fr: formData.feature3Fr,
          feature4En: formData.feature4En,
          feature4Fr: formData.feature4Fr,
          cleanroomImage: formData.cleanroomImage
        },
        contact: {
          email: formData.email,
          hoursEn: formData.hoursEn,
          hoursFr: formData.hoursFr,
          responseRate: formData.responseRate
        }
      }
    };

    setSiteData(updated);
    saveSiteData(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = await uploadImageToServer(file);
      if (url) {
        setFormData(prev => ({ ...prev, cleanroomImage: url }));
      }
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Static Page Content & Visual Media Editor
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Edit homepage banner headings, core selling points, contact hours, and replace facility photos with instant preview.
          </p>
        </div>

        <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-border-soft text-xs font-bold">
          <button
            onClick={() => setEditLang('en')}
            className={`px-3 py-1.5 rounded-lg transition-all ${editLang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            English Content 🇬🇧
          </button>
          <button
            onClick={() => setEditLang('fr')}
            className={`px-3 py-1.5 rounded-lg transition-all ${editLang === 'fr' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Contenu Français 🇫🇷
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-bold animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Page content and media updated successfully in real time!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6 text-xs">
        
        {/* 1. Hero Section Content */}
        <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-soft">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>Homepage Hero Banner ({editLang === 'en' ? 'English 🇬🇧' : 'Français 🇫🇷'})</span>
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              Above the Fold Area
            </span>
          </div>

          <div className="space-y-3.5">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Top Badge Chip</label>
              <input 
                type="text" 
                value={editLang === 'en' ? formData.badgeEn : formData.badgeFr}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  [editLang === 'en' ? 'badgeEn' : 'badgeFr']: e.target.value 
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Hero Main Title (H1)</label>
              <input 
                type="text" 
                value={editLang === 'en' ? formData.titleEn : formData.titleFr}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  [editLang === 'en' ? 'titleEn' : 'titleFr']: e.target.value 
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold text-sm"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Hero Subtitle / Value Proposition</label>
              <textarea 
                rows={3}
                value={editLang === 'en' ? formData.subtitleEn : formData.subtitleFr}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  [editLang === 'en' ? 'subtitleEn' : 'subtitleFr']: e.target.value 
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 leading-relaxed resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Feature Bullet 1</label>
                <input 
                  type="text" 
                  value={editLang === 'en' ? formData.feature1En : formData.feature1Fr}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    [editLang === 'en' ? 'feature1En' : 'feature1Fr']: e.target.value 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Feature Bullet 2</label>
                <input 
                  type="text" 
                  value={editLang === 'en' ? formData.feature2En : formData.feature2Fr}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    [editLang === 'en' ? 'feature2En' : 'feature2Fr']: e.target.value 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Feature Bullet 3</label>
                <input 
                  type="text" 
                  value={editLang === 'en' ? formData.feature3En : formData.feature3Fr}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    [editLang === 'en' ? 'feature3En' : 'feature3Fr']: e.target.value 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Feature Bullet 4</label>
                <input 
                  type="text" 
                  value={editLang === 'en' ? formData.feature4En : formData.feature4Fr}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    [editLang === 'en' ? 'feature4En' : 'feature4Fr']: e.target.value 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Media & Facility Photo Upload */}
        <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-soft">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Image className="w-4 h-4 text-secondary" />
              <span>Cleanroom Facility Photo (Right Hero Card)</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-border-soft p-1 flex items-center justify-center">
              <img 
                src={formData.cleanroomImage} 
                alt="Facility Preview" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="sm:col-span-2 space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Image URL / Path</label>
                <input 
                  type="text" 
                  value={formData.cleanroomImage}
                  onChange={(e) => setFormData({ ...formData, cleanroomImage: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white font-mono text-xs"
                />
              </div>

              <div>
                <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs cursor-pointer transition-colors shadow-xs">
                  <Upload className="w-4 h-4 text-secondary" />
                  <span>Upload Local Facility Photo</span>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <span className="text-[11px] text-muted ml-3">Recommended: 800×600 px (JPG/PNG)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Global Export Desk Hours & Contact Details */}
        <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-soft">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Global Export Support Desk Information</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Working Hours (English 🇬🇧)</label>
              <input 
                type="text" 
                value={formData.hoursEn}
                onChange={(e) => setFormData({ ...formData, hoursEn: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Horaires (Français 🇫🇷)</label>
              <input 
                type="text" 
                value={formData.hoursFr}
                onChange={(e) => setFormData({ ...formData, hoursFr: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save All Content Updates</span>
          </button>
        </div>

      </form>
    </div>
  );
}
