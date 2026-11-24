import React from 'react';
import { 
  Users, 
  Package, 
  BookOpen, 
  Globe2, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Mail, 
  ArrowUpRight, 
  Download,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import { exportLeadsToCsv } from '../../data/adminInitialData';
import { getSiteData } from '../../data/siteStore';

export default function AdminOverview({ leads, siteData, onNavigateTab, onSelectLead }) {
  const currentSiteData = siteData || getSiteData();
  const products = currentSiteData.productsEn || [];
  const articles = currentSiteData.articlesEn || [];

  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const inProgressCount = leads.filter(l => l.status === 'In Review' || l.status === 'Replied').length;
  const contractedCount = leads.filter(l => l.status === 'Contracted').length;
  const ultrasoundCount = products.filter(p => p.category === 'point-of-care-ultrasound' || p.categoryId === 'ultrasound-systems').length;
  const consumablesCount = products.filter(p => p.category === 'bandages-wound-care' || p.categoryId === 'hospital-consumables').length;

  const recentLeads = leads.slice(0, 5);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-200">New Inquiry</span>;
      case 'In Review':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">In Review</span>;
      case 'Replied':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-100 text-teal-800 border border-teal-200">Replied</span>;
      case 'Contracted':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Contracted</span>;
      case 'Archived':
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Archived</span>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Welcome & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#0A2540] to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold border border-secondary/30">
            <Activity className="w-3.5 h-3.5" /> Live Operations & Inquiries Hub
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            MAXVOR Management Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            Real-time management for authorized ultrasound diagnostic probes, hospital consumables, buyer RFQ inquiries, and SEO content matrices.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => exportLeadsToCsv(leads)}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 border border-white/20 transition-all cursor-pointer shadow-sm"
          >
            <Download className="w-4 h-4 text-secondary" />
            <span>Export RFQs (CSV)</span>
          </button>
          <button
            onClick={() => onNavigateTab('inquiries')}
            className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Review New Leads ({newLeadsCount})</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Inquiries */}
        <div 
          onClick={() => onNavigateTab('inquiries')}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-border-soft shadow-xs hover:border-secondary/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Total RFQ Leads</span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">{leads.length}</span>
            <span className="text-xs font-bold text-secondary">({newLeadsCount} Pending)</span>
          </div>
          <p className="text-[11px] text-muted mt-1">Direct inquiries to sales@maxvor.com</p>
        </div>

        {/* Live Products */}
        <div 
          onClick={() => onNavigateTab('products')}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-border-soft shadow-xs hover:border-secondary/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Catalog Products</span>
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">{products.length}</span>
            <span className="text-xs font-bold text-slate-600">Active SKUs</span>
          </div>
          <p className="text-[11px] text-muted mt-1">{ultrasoundCount} Probes + {consumablesCount} Consumables</p>
        </div>

        {/* SEO & Knowledge Blog */}
        <div 
          onClick={() => onNavigateTab('articles')}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-border-soft shadow-xs hover:border-secondary/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted uppercase tracking-wider">SEO & Clinical SOPs</span>
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">{articles.length}</span>
            <span className="text-xs font-bold text-purple-600">Indexed Articles</span>
          </div>
          <p className="text-[11px] text-muted mt-1">Targeting African & Global Procurement</p>
        </div>

        {/* Target Export Markets */}
        <div 
          onClick={() => onNavigateTab('inquiries')}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-border-soft shadow-xs hover:border-secondary/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Active Markets</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Globe2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">12+</span>
            <span className="text-xs font-bold text-emerald-600">Countries</span>
          </div>
          <p className="text-[11px] text-muted mt-1">Cameroon, Rwanda, Kenya, France, UAE...</p>
        </div>
      </div>

      {/* Two Column Layout: Recent Inquiries + Category Demand */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Recent Inquiries (8 cols) */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-7 rounded-3xl border border-border-soft shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Recent RFQ Inquiries & Lead Pipeline
              </h3>
              <p className="text-xs text-muted">
                Direct buyer requests received from overseas clinics, distributors, and tenders
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('inquiries')}
              className="text-xs font-bold text-secondary hover:underline flex items-center gap-1"
            >
              <span>View All Leads</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border-soft text-muted uppercase tracking-wider">
                  <th className="py-3 px-2 font-semibold">Date & ID</th>
                  <th className="py-3 px-2 font-semibold">Buyer & Org</th>
                  <th className="py-3 px-2 font-semibold">Country</th>
                  <th className="py-3 px-2 font-semibold">Target Product</th>
                  <th className="py-3 px-2 font-semibold">Status</th>
                  <th className="py-3 px-2 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-soft">
                {recentLeads.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-2 font-mono text-[11px]">
                      <span className="font-bold text-slate-900 block">{item.id}</span>
                      <span className="text-muted">{item.createdAt.split(' ')[0]}</span>
                    </td>
                    <td className="py-3.5 px-2">
                      <span className="font-bold text-slate-900 block">{item.buyerName}</span>
                      <span className="text-muted truncate max-w-[140px] block">{item.companyName}</span>
                    </td>
                    <td className="py-3.5 px-2 font-medium text-slate-700">
                      {item.country}
                    </td>
                    <td className="py-3.5 px-2 max-w-[200px]">
                      <span className="font-medium text-slate-900 truncate block">{item.productName}</span>
                      <span className="text-muted text-[11px] block">{item.quantity}</span>
                    </td>
                    <td className="py-3.5 px-2">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-3.5 px-2 text-right">
                      <button
                        onClick={() => {
                          onSelectLead(item);
                          onNavigateTab('inquiries');
                        }}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-secondary transition-colors cursor-pointer"
                        title="View Details"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Category Distribution & System Health (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Category Breakdown Card */}
          <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-secondary" />
              <span>Product Line Distribution</span>
            </h3>

            <div className="space-y-3 pt-2">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Point-of-Care Ultrasound Probes</span>
                  <span className="text-secondary font-bold">8 SKUs (38%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '38%' }} />
                </div>
                <p className="text-[11px] text-muted">HS-UP20, U20C, C30C, L40C, M40C, D8C, etc. (MOQ: 1 Unit)</p>
              </div>

              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Medical Bandages & Cryotherapy</span>
                  <span className="text-teal-600 font-bold">13 SKUs (62%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: '62%' }} />
                </div>
                <p className="text-[11px] text-muted">Cohesive Bandages, Strapping, Gel Packs (MOQ: 1 Carton)</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Health Status */}
          <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>System & Gateway Status</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <span className="text-slate-600 font-medium">Inquiry Mailer API</span>
                <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">Active (sales@maxvor.com)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <span className="text-slate-600 font-medium">Sitemap & Robots.txt</span>
                <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">35 URLs Live</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <span className="text-slate-600 font-medium">Multilingual Routing</span>
                <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded text-[10px]">EN 🇬🇧 / FR 🇫🇷 Ready</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
