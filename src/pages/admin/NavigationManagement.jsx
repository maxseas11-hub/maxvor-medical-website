import React, { useState } from 'react';
import { 
  Menu, 
  Layers, 
  Plus, 
  ArrowUp, 
  ArrowDown, 
  Eye, 
  EyeOff, 
  Edit3, 
  Trash2, 
  Save, 
  CheckCircle2, 
  X, 
  SlidersHorizontal,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { getSiteData, saveSiteData, DEFAULT_NAVIGATION } from '../../data/siteStore';

export default function NavigationManagement() {
  const [siteData, setSiteData] = useState(() => getSiteData());
  const [activeSubTab, setActiveSubTab] = useState('menu'); // 'menu' | 'categories'
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Menu item modal
  const [editingMenuItem, setEditingMenuItem] = useState(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  // Category item modal
  const [editingCategory, setEditingCategory] = useState(null);
  const [isCatModalOpen, setIsCatModalOpen] = useState(false);

  const navigation = siteData.navigation || DEFAULT_NAVIGATION;
  const categoriesEn = siteData.categoriesEn || [];
  const categoriesFr = siteData.categoriesFr || [];

  const handleSaveMenu = (updatedNav) => {
    const updated = {
      ...siteData,
      navigation: updatedNav
    };
    setSiteData(updated);
    saveSiteData(updated);
    triggerSuccess();
  };

  const handleSaveCategories = (updatedCatsEn, updatedCatsFr) => {
    const updated = {
      ...siteData,
      categoriesEn: updatedCatsEn,
      categoriesFr: updatedCatsFr
    };
    setSiteData(updated);
    saveSiteData(updated);
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  // Move Menu item up/down
  const moveMenuItem = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= navigation.length) return;
    const newNav = [...navigation];
    const temp = newNav[index];
    newNav[index] = newNav[targetIndex];
    newNav[targetIndex] = temp;
    handleSaveMenu(newNav);
  };

  // Toggle Menu item visibility
  const toggleMenuVisibility = (id) => {
    const newNav = navigation.map(item => {
      if (item.id === id) {
        return { ...item, isVisible: item.isVisible === false ? true : false };
      }
      return item;
    });
    handleSaveMenu(newNav);
  };

  // Delete Menu item
  const deleteMenuItem = (id) => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      const newNav = navigation.filter(item => item.id !== id);
      handleSaveMenu(newNav);
    }
  };

  // Save/Create Menu item form
  const handleSaveMenuModal = (e) => {
    e.preventDefault();
    if (editingMenuItem.id) {
      // Edit existing
      const newNav = navigation.map(item => item.id === editingMenuItem.id ? editingMenuItem : item);
      handleSaveMenu(newNav);
    } else {
      // Add new
      const newItem = {
        ...editingMenuItem,
        id: 'nav-' + Date.now(),
        isVisible: true
      };
      handleSaveMenu([...navigation, newItem]);
    }
    setIsMenuModalOpen(false);
    setEditingMenuItem(null);
  };

  // Move Category up/down
  const moveCategory = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= categoriesEn.length) return;
    const newCatsEn = [...categoriesEn];
    const tempEn = newCatsEn[index];
    newCatsEn[index] = newCatsEn[targetIndex];
    newCatsEn[targetIndex] = tempEn;

    const newCatsFr = [...categoriesFr];
    if (newCatsFr.length > targetIndex) {
      const tempFr = newCatsFr[index];
      newCatsFr[index] = newCatsFr[targetIndex];
      newCatsFr[targetIndex] = tempFr;
    }

    handleSaveCategories(newCatsEn, newCatsFr);
  };

  // Delete Category
  const deleteCategory = (id) => {
    if (window.confirm('Are you sure you want to delete this category? Products in this category will remain in the catalog.')) {
      const newCatsEn = categoriesEn.filter(c => c.id !== id);
      const newCatsFr = categoriesFr.filter(c => c.id !== id);
      handleSaveCategories(newCatsEn, newCatsFr);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Navigation Menu & Category Matrix Manager
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Add, edit, reorder top header navigation links and manage homepage product category cards.
          </p>
        </div>

        <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-border-soft text-xs font-bold">
          <button
            onClick={() => setActiveSubTab('menu')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${activeSubTab === 'menu' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <Menu className="w-4 h-4 text-secondary" />
            <span>Top Header Menu ({navigation.length})</span>
          </button>
          <button
            onClick={() => setActiveSubTab('categories')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${activeSubTab === 'categories' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <Layers className="w-4 h-4 text-teal-600" />
            <span>Category Matrices ({categoriesEn.length})</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-bold animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Navigation layout updated and saved in real time!</span>
        </div>
      )}

      {/* 1. Top Header Menu Tab */}
      {activeSubTab === 'menu' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Header Navigation Items (Order: Left to Right)
            </span>
            <button
              onClick={() => {
                setEditingMenuItem({ labelEn: '', labelFr: '', path: '/', isVisible: true, hasMegaMenu: false });
                setIsMenuModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Menu Item</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-border-soft shadow-xs overflow-hidden divide-y divide-border-soft">
            {navigation.map((item, index) => (
              <div key={item.id || index} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex flex-col gap-1 shrink-0">
                    <button
                      onClick={() => moveMenuItem(index, -1)}
                      disabled={index === 0}
                      className="p-1 rounded hover:bg-slate-200 text-slate-500 disabled:opacity-30 cursor-pointer"
                      title="Move Up (Left in Navbar)"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => moveMenuItem(index, 1)}
                      disabled={index === navigation.length - 1}
                      className="p-1 rounded hover:bg-slate-200 text-slate-500 disabled:opacity-30 cursor-pointer"
                      title="Move Down (Right in Navbar)"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 shrink-0">
                    {index + 1}
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{item.labelEn}</span>
                      <span className="text-slate-400">/</span>
                      <span className="text-slate-600 text-sm font-medium">{item.labelFr || item.labelEn}</span>
                      {item.hasMegaMenu && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">Mega Menu</span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-secondary block truncate">Path: {item.path}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleMenuVisibility(item.id)}
                    className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      item.isVisible !== false 
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100' 
                        : 'bg-slate-100 text-slate-500 border-slate-300 hover:bg-slate-200'
                    }`}
                    title={item.isVisible !== false ? 'Visible on Website' : 'Hidden from Website'}
                  >
                    {item.isVisible !== false ? <Eye className="w-3.5 h-3.5 text-emerald-600" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{item.isVisible !== false ? 'Visible' : 'Hidden'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setEditingMenuItem({ ...item });
                      setIsMenuModalOpen(true);
                    }}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                    title="Edit Item"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => deleteMenuItem(item.id)}
                    className="p-2 rounded-xl hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                    title="Delete Item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Category Matrices Tab */}
      {activeSubTab === 'categories' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Homepage Category Matrices & Product Groupings
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoriesEn.map((cat, index) => {
              const catFr = categoriesFr.find(c => c.id === cat.id) || {};
              return (
                <div key={cat.id || index} className="bg-white p-6 rounded-3xl border border-border-soft shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-teal-50 text-secondary font-bold text-xs flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="font-bold text-sm text-slate-900">{cat.name}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => moveCategory(index, -1)}
                        disabled={index === 0}
                        className="p-1.5 rounded hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                        title="Move Up"
                      >
                        <ArrowUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => moveCategory(index, 1)}
                        disabled={index === categoriesEn.length - 1}
                        className="p-1.5 rounded hover:bg-slate-100 text-slate-500 disabled:opacity-30"
                        title="Move Down"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Image Previews */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2 rounded-xl bg-slate-50 border border-border-soft space-y-1">
                      <span className="text-[10px] font-bold text-muted uppercase block">Homepage Banner</span>
                      <div className="h-20 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden border border-border-soft">
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-border-soft space-y-1">
                      <span className="text-[10px] font-bold text-muted uppercase block">Dropdown Square</span>
                      <div className="h-20 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden border border-border-soft">
                        <img src={cat.squareImage || cat.image} alt={cat.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="text-xs space-y-1">
                    <span className="font-semibold text-slate-700 block">Slogan / Tagline (EN):</span>
                    <p className="text-slate-600 bg-slate-50 p-2.5 rounded-xl text-[11px] leading-relaxed">{cat.tagline}</p>
                  </div>

                  {/* Subcategories */}
                  <div className="text-xs space-y-1">
                    <span className="font-semibold text-slate-700 block">Sub-Categories ({cat.subcategories?.length || 0}):</span>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {cat.subcategories?.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span className="truncate">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Menu Edit/Add Modal */}
      {isMenuModalOpen && editingMenuItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-border-soft space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border-soft">
              <h3 className="text-lg font-bold text-slate-900">
                {editingMenuItem.id ? 'Edit Navigation Item' : 'Add New Navigation Link'}
              </h3>
              <button 
                onClick={() => setIsMenuModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveMenuModal} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">English Label (🇬🇧) *</label>
                <input 
                  type="text" 
                  required
                  value={editingMenuItem.labelEn}
                  onChange={(e) => setEditingMenuItem({ ...editingMenuItem, labelEn: e.target.value })}
                  placeholder="e.g. Products / About Us"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">French Label (🇫🇷) *</label>
                <input 
                  type="text" 
                  required
                  value={editingMenuItem.labelFr}
                  onChange={(e) => setEditingMenuItem({ ...editingMenuItem, labelFr: e.target.value })}
                  placeholder="e.g. Produits / À Propos"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Route Path (URL) *</label>
                <input 
                  type="text" 
                  required
                  value={editingMenuItem.path}
                  onChange={(e) => setEditingMenuItem({ ...editingMenuItem, path: e.target.value })}
                  placeholder="e.g. /products or /contact"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-mono"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold select-none">
                  <input 
                    type="checkbox" 
                    checked={editingMenuItem.hasMegaMenu}
                    onChange={(e) => setEditingMenuItem({ ...editingMenuItem, hasMegaMenu: e.target.checked })}
                    className="rounded text-secondary focus:ring-secondary"
                  />
                  <span>Enable Products Mega Menu Dropdown</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border-soft">
                <button
                  type="button"
                  onClick={() => setIsMenuModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold"
                >
                  Save Menu Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
