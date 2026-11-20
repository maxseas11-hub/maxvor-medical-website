import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Mail, 
  Package, 
  Menu as MenuIcon,
  Layers,
  FileEdit,
  Globe2,
  BookOpen, 
  Settings, 
  LogOut, 
  ExternalLink, 
  ShieldCheck, 
  Bell, 
  Search,
  ChevronRight,
  Menu,
  X,
  User,
  Activity
} from 'lucide-react';
import AdminLogin from './AdminLogin';
import AdminOverview from './AdminOverview';
import InquiryManagement from './InquiryManagement';
import ProductManagement from './ProductManagement';
import NavigationManagement from './NavigationManagement';
import PageContentManagement from './PageContentManagement';
import SeoManagement from './SeoManagement';
import ArticleManagement from './ArticleManagement';
import SystemSettings from './SystemSettings';
import { checkAdminAuth, setAdminAuth, getStoredLeads } from '../../data/adminInitialData';
import { getSiteData } from '../../data/siteStore';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [leads, setLeads] = useState([]);
  const [siteData, setSiteData] = useState(() => getSiteData());
  const [selectedLeadForInquiries, setSelectedLeadForInquiries] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsAuthenticated(checkAdminAuth());
    setLeads(getStoredLeads());
    setSiteData(getSiteData());

    const handleUpdate = (e) => {
      if (e.detail) setSiteData(e.detail);
    };
    window.addEventListener('maxvor_site_data_updated', handleUpdate);
    return () => window.removeEventListener('maxvor_site_data_updated', handleUpdate);
  }, []);

  const handleLogout = () => {
    setAdminAuth(false);
    setIsAuthenticated(false);
  };

  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const productsCount = siteData.productsEn?.length || 21;
  const articlesCount = siteData.articlesEn?.length || 21;

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => {
      setIsAuthenticated(true);
      setLeads(getStoredLeads());
      setSiteData(getSiteData());
    }} />;
  }

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, badge: null },
    { id: 'inquiries', label: 'Inquiries & Leads', icon: Mail, badge: newLeadsCount > 0 ? newLeadsCount : null },
    { id: 'products', label: 'Product Catalog', icon: Package, badge: String(productsCount) },
    { id: 'navigation', label: 'Menu & Categories', icon: Layers, badge: null },
    { id: 'pages', label: 'Page Content & Media', icon: FileEdit, badge: null },
    { id: 'seo', label: 'SEO & Sitemaps', icon: Globe2, badge: null },
    { id: 'articles', label: 'SEO Knowledge Base', icon: BookOpen, badge: String(articlesCount) },
    { id: 'settings', label: 'System Settings', icon: Settings, badge: null },
  ];

  return (
    <div className="min-h-screen bg-canvas-alt text-slate-900 font-sans flex flex-col md:flex-row">
      
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-secondary" />
          <span className="font-black text-lg tracking-tight">MAXVOR <span className="text-secondary font-light">Admin</span></span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-[#0A2540] text-slate-200 p-5 flex flex-col justify-between shrink-0 shadow-2xl transition-transform duration-300 border-r border-slate-800/80
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="space-y-6">
          {/* Brand header */}
          <div className="flex items-center justify-between px-2 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tight text-white leading-tight">MAXVOR</h1>
                <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block">Operations Hub</span>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1.5 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer
                    ${isActive 
                      ? 'bg-secondary text-white shadow-md shadow-secondary/20' 
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-secondary border border-secondary/30'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & User Profile */}
        <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <ExternalLink className="w-4 h-4 text-secondary" />
              <span>Live Website</span>
            </div>
            <span className="text-[10px] text-muted">Preview</span>
          </a>

          <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-white block truncate">Admin Operator</span>
                <span className="text-[10px] text-slate-400 block truncate">sales@maxvor.com</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Desktop Header Strip */}
        <header className="hidden md:flex items-center justify-between bg-white px-8 py-4 border-b border-border-soft sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="font-bold text-slate-900">MAXVOR Admin</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="capitalize font-medium text-secondary">
              {navItems.find(n => n.id === activeTab)?.label || 'Overview'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-border-soft font-mono">
              <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>Server Live (Port 5188)</span>
            </div>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-secondary hover:underline flex items-center gap-1"
            >
              <span>View Public Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* Dynamic Tab Body */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 max-w-[1600px] w-full mx-auto">
          {activeTab === 'overview' && (
            <AdminOverview 
              leads={leads}
              siteData={siteData}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onSelectLead={(lead) => setSelectedLeadForInquiries(lead)}
            />
          )}

          {activeTab === 'inquiries' && (
            <InquiryManagement 
              leads={leads}
              onRefreshLeads={(updated) => setLeads(updated)}
              selectedLeadFromOverview={selectedLeadForInquiries}
            />
          )}

          {activeTab === 'products' && (
            <ProductManagement />
          )}

          {activeTab === 'navigation' && (
            <NavigationManagement />
          )}

          {activeTab === 'pages' && (
            <PageContentManagement />
          )}

          {activeTab === 'seo' && (
            <SeoManagement />
          )}

          {activeTab === 'articles' && (
            <ArticleManagement />
          )}

          {activeTab === 'settings' && (
            <SystemSettings />
          )}
        </main>
      </div>

    </div>
  );
}
