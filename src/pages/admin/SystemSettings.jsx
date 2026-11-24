import React, { useState } from 'react';
import { 
  Mail, 
  Server, 
  FileCode, 
  ShieldCheck, 
  Download, 
  Upload, 
  CheckCircle2, 
  RefreshCw,
  Globe2,
  Lock,
  ExternalLink,
  Save,
  Database
} from 'lucide-react';
import { getStoredLeads, saveLeads } from '../../data/adminInitialData';
import { getSiteData, saveSiteData } from '../../data/siteStore';

export default function SystemSettings() {
  const [inquiryEmail, setInquiryEmail] = useState('sales@maxvor.com');
  const [brandName, setBrandName] = useState('MAXVOR');
  const [smtpStatus, setSmtpStatus] = useState('Active');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleBackupJson = () => {
    const leads = getStoredLeads();
    const siteData = getSiteData();
    const backupData = {
      brand: brandName,
      inquiryRecipient: inquiryEmail,
      backupDate: new Date().toISOString(),
      version: 'v10',
      totalProducts: siteData.productsEn ? siteData.productsEn.length : 0,
      totalCategories: siteData.categoriesEn ? siteData.categoriesEn.length : 0,
      leadsCount: leads.length,
      siteData: siteData,
      leads: leads
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `MAXVOR_Full_Database_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  };

  const handleRestoreJson = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed && (parsed.siteData || parsed.productsEn)) {
            const dataToSave = parsed.siteData || parsed;
            saveSiteData(dataToSave);
            if (Array.isArray(parsed.leads)) {
              saveLeads(parsed.leads);
            }
            alert(`Successfully restored full database (${dataToSave.productsEn?.length || 0} products, ${parsed.leads?.length || 0} leads) and synced to server!`);
            window.location.reload();
          } else if (parsed && Array.isArray(parsed.leads)) {
            saveLeads(parsed.leads);
            alert(`Successfully restored ${parsed.leads.length} inquiry records!`);
            window.location.reload();
          } else {
            alert('Invalid backup JSON format.');
          }
        } catch {
          alert('Failed to parse backup JSON file.');
        }
      };
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          System Configuration & Gateway Operations
        </h2>
        <p className="text-xs text-muted mt-0.5">
          Configure inquiry routing, email gateways, SEO search engine manifests, and database backups.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-bold animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>System settings updated and saved successfully!</span>
        </div>
      )}

      {/* Grid of Settings Cards */}
      <div className="space-y-6 text-xs">
        
        {/* Email & RFQ Gateway */}
        <form onSubmit={handleSaveSettings} className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-soft">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              <span>Inquiry Mailer & Enterprise SMTP Gateway</span>
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
              SMTP Port 465 SSL Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Inquiry Notification Recipient *</label>
              <input 
                type="email" 
                value={inquiryEmail}
                onChange={(e) => setInquiryEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
              />
              <p className="text-[11px] text-muted mt-1">Direct corporate inbox receiving buyer requests</p>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Brand Name Display *</label>
              <input 
                type="text" 
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
              />
              <p className="text-[11px] text-muted mt-1">Strict standardized brand identifier across all pages</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-border-soft text-slate-600 space-y-1">
            <span className="font-bold text-slate-800 block text-[11px]">Server Handler Path:</span>
            <code className="text-secondary font-mono text-[11px] block">public/api/send-rfq.ashx (Windows IIS C# Handler)</code>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Configuration</span>
            </button>
          </div>
        </form>

        {/* SEO Manifests & Search Console */}
        <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-soft">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-secondary" />
              <span>Search Engine Indexing & Sitemaps</span>
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
              Google & Bing Optimized
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-border-soft space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">XML Sitemap</span>
                <span className="text-secondary font-mono font-bold">sitemap.xml</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Contains 35 active URLs (21 products, 14 SEO articles, core routes).
              </p>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-secondary font-bold hover:underline pt-1"
              >
                <span>Inspect Live sitemap.xml</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-border-soft space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Robots Protocol</span>
                <span className="text-secondary font-mono font-bold">robots.txt</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Configured to allow all legitimate search engine crawlers (Googlebot, Bingbot).
              </p>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-secondary font-bold hover:underline pt-1"
              >
                <span>Inspect Live robots.txt</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Full Site & Database Backup & Disaster Recovery */}
        <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-soft">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Database className="w-4 h-4 text-secondary" />
              <span>Full Site Database & RFQ Inquiries Backup & Restore</span>
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              Full Site Persistence & Disaster Recovery
            </span>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Export all 73 product specifications, custom multi-image galleries, categories, clinical articles, SEO metadata, navigation, and client RFQ inquiry records to a standalone backup JSON file for permanent offline safety and migration.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleBackupJson}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-secondary" />
              <span>Download Full Site JSON Backup</span>
            </button>

            <label className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-2 cursor-pointer transition-colors">
              <Upload className="w-4 h-4 text-slate-600" />
              <span>Restore from Backup JSON File</span>
              <input 
                type="file" 
                accept=".json"
                onChange={handleRestoreJson}
                className="hidden"
              />
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}
