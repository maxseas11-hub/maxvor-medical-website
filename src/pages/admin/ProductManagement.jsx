import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Package, 
  ExternalLink, 
  Eye, 
  Plus, 
  Edit3, 
  Trash2, 
  Save, 
  CheckCircle2, 
  X, 
  Upload, 
  Sparkles,
  ToggleLeft,
  ToggleRight,
  SlidersHorizontal,
  RotateCcw,
  Images,
  Star,
  Link as LinkIcon,
  ListPlus,
  Stethoscope,
  Cpu,
  Globe2
} from 'lucide-react';
import { getSiteData, saveSiteData, uploadImageToServer, uploadMultipleImagesToServer } from '../../data/siteStore';

// Helper to convert specs object/array to [{ label, value }]
function normalizeSpecsToArray(specs) {
  if (Array.isArray(specs)) {
    return specs.map(s => typeof s === 'object' && s !== null ? { label: s.label || '', value: s.value || '' } : { label: 'Spec', value: String(s) });
  }
  if (specs && typeof specs === 'object') {
    return Object.entries(specs).map(([label, value]) => ({ label, value: String(value) }));
  }
  return [];
}

// Helper to convert array back to object
function normalizeSpecsToObject(specsArray) {
  if (!Array.isArray(specsArray)) return {};
  const obj = {};
  specsArray.forEach(item => {
    if (item && item.label && item.label.trim()) {
      obj[item.label.trim()] = item.value || '';
    }
  });
  return obj;
}

export default function ProductManagement() {
  const [siteData, setSiteData] = useState(() => getSiteData());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [viewLang, setViewLang] = useState('en');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [modalTab, setModalTab] = useState('basic'); // 'basic' | 'gallery' | 'highlights' | 'specs' | 'seo'
  const [modalLang, setModalLang] = useState('en'); // 'en' | 'fr'
  const [newImageUrlInput, setNewImageUrlInput] = useState('');
  const [uploadingImages, setUploadingImages] = useState(false);

  const productsEn = siteData.productsEn || [];
  const productsFr = siteData.productsFr || [];

  const productList = viewLang === 'en' ? productsEn : productsFr;

  const filteredProducts = productList.filter(p => {
    const matchesSearch = 
      p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.slug?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.seoKeywords?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCat = selectedCategory === 'ALL' || 
      p.category === selectedCategory || 
      p.categoryId === selectedCategory ||
      (selectedCategory === 'ultrasound-systems' && (p.category === 'point-of-care-ultrasound' || p.categoryId === 'ultrasound-systems')) ||
      (selectedCategory === 'bandages-and-wound-care' && (p.category === 'bandages-wound-care' || p.categoryId === 'bandages-and-wound-care'));

    return matchesSearch && matchesCat;
  });

  const handleToggleProductStatus = (productId) => {
    const toggleInList = (list) => list.map(p => {
      if (p.id === productId || p.slug === productId) {
        return { ...p, isActive: p.isActive === false ? true : false };
      }
      return p;
    });

    const updated = {
      ...siteData,
      productsEn: toggleInList(productsEn),
      productsFr: toggleInList(productsFr)
    };
    setSiteData(updated);
    saveSiteData(updated);
    triggerSuccess('Product status updated!');
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product from both English and French catalogs?')) {
      const updated = {
        ...siteData,
        productsEn: productsEn.filter(p => p.id !== productId && p.slug !== productId),
        productsFr: productsFr.filter(p => p.id !== productId && p.slug !== productId)
      };
      setSiteData(updated);
      saveSiteData(updated);
      triggerSuccess('Product deleted successfully!');
    }
  };

  const triggerSuccess = (msg = 'Saved successfully!') => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleOpenAddModal = () => {
    setIsEditing(false);
    setModalTab('basic');
    setModalLang('en');
    const initialImg = '/assets/images/healson-hs-up20-convex-bw.png';
    setCurrentProduct({
      id: 'prod-' + Date.now(),
      slug: 'new-medical-device-' + Math.floor(100 + Math.random() * 900),
      nameEn: '',
      nameFr: '',
      category: 'point-of-care-ultrasound',
      moq: '1 Unit',
      image: initialImg,
      gallery: [initialImg],
      shortDescEn: '',
      shortDescFr: '',
      highlightsEn: ['USB Type-C & Wireless Dual Connectivity', 'Real-Time Point-of-Care Imaging', 'Compact Ergonomic Handheld Design'],
      highlightsFr: ['Connectivité Double USB Type-C & Sans Fil', 'Imagerie Point-of-Care en Temps Réel', 'Conception Ergonomique Portable'],
      applicationsEn: ['Abdominal & Obstetrics/Gynecology', 'Emergency Medicine & Triage', 'Bedside Point-of-Care Ultrasound (POCUS)'],
      applicationsFr: ['Abdominal & Obstétrique / Gynécologie', 'Médecine d’Urgence & Triage', 'Échographie Clinique au Chevet du Patient'],
      specsEn: [
        { label: 'Frequency', value: '3.5MHz / 5.0MHz' },
        { label: 'Cine Loop', value: '64~2048 frames' },
        { label: 'Host Weight', value: '≤230g' },
        { label: 'Working Time', value: '≥4h' },
        { label: 'Material', value: 'Medical-Grade Polymer & Sealed Transducer' },
        { label: 'Sterilization & Hygiene', value: 'Alcohol Disinfection & Probe Sheaths' }
      ],
      specsFr: [
        { label: 'Fréquence', value: '3.5MHz / 5.0MHz' },
        { label: 'Boucle Ciné (Cine Loop)', value: '64~2048 images' },
        { label: 'Poids de l’Appareil', value: '≤230g' },
        { label: 'Autonomie de Travail', value: '≥4h' },
        { label: 'Matériau', value: 'Polymère de Qualité Médicale & Sonde Étanche' },
        { label: 'Stérilisation & Hygiène', value: 'Désinfection Alcoolique & Gaines de Protection' }
      ],
      seoTitleEn: '',
      seoTitleFr: '',
      seoKeywordsEn: '',
      seoKeywordsFr: '',
      seoDescriptionEn: '',
      seoDescriptionFr: '',
      isActive: true
    });
    setNewImageUrlInput('');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setIsEditing(true);
    setModalTab('basic');
    setModalLang('en');
    const prodFr = productsFr.find(p => p.id === product.id || p.slug === product.slug) || {};
    const prodEn = productsEn.find(p => p.id === product.id || p.slug === product.slug) || product;

    let galleryList = [];
    if (Array.isArray(prodEn.gallery) && prodEn.gallery.length > 0) {
      galleryList = [...prodEn.gallery];
    } else if (prodEn.image) {
      galleryList = [prodEn.image];
    }

    const hlEn = Array.isArray(prodEn.highlights) ? prodEn.highlights : (Array.isArray(prodEn.keyFeatures) ? prodEn.keyFeatures : (Array.isArray(prodEn.specialties) ? prodEn.specialties : []));
    const hlFr = Array.isArray(prodFr.highlights) ? prodFr.highlights : (Array.isArray(prodFr.keyFeatures) ? prodFr.keyFeatures : (Array.isArray(prodFr.specialties) ? prodFr.specialties : hlEn));

    const appEn = Array.isArray(prodEn.applications) ? prodEn.applications : (Array.isArray(prodEn.clinicalApplications) ? prodEn.clinicalApplications : []);
    const appFr = Array.isArray(prodFr.applications) ? prodFr.applications : (Array.isArray(prodFr.clinicalApplications) ? prodFr.clinicalApplications : appEn);

    setCurrentProduct({
      id: prodEn.id || prodEn.slug,
      slug: prodEn.slug || prodEn.id,
      nameEn: prodEn.name || '',
      nameFr: prodFr.name || prodEn.name || '',
      category: prodEn.category || 'point-of-care-ultrasound',
      moq: prodEn.moq || '1 Unit',
      image: prodEn.image || galleryList[0] || '/assets/images/healson-hs-up20-convex-bw.png',
      gallery: galleryList,
      shortDescEn: prodEn.shortDesc || prodEn.description || '',
      shortDescFr: prodFr.shortDesc || prodFr.description || '',
      highlightsEn: hlEn,
      highlightsFr: hlFr,
      applicationsEn: appEn,
      applicationsFr: appFr,
      specsEn: normalizeSpecsToArray(prodEn.detailedSpecs || prodEn.specs),
      specsFr: normalizeSpecsToArray(prodFr.detailedSpecs || prodFr.specs || prodEn.detailedSpecs || prodEn.specs),
      seoTitleEn: prodEn.seoTitle || prodEn.seoTitleEn || (prodEn.name ? `${prodEn.name} | MAXVOR` : ''),
      seoTitleFr: prodFr.seoTitle || prodFr.seoTitleFr || (prodFr.name ? `${prodFr.name} | MAXVOR` : (prodEn.name ? `${prodEn.name} | MAXVOR` : '')),
      seoKeywordsEn: prodEn.seoKeywords || prodEn.seoKeywordsEn || '',
      seoKeywordsFr: prodFr.seoKeywords || prodFr.seoKeywordsFr || '',
      seoDescriptionEn: prodEn.seoDescription || prodEn.seoDescriptionEn || '',
      seoDescriptionFr: prodFr.seoDescription || prodFr.seoDescriptionFr || '',
      isActive: prodEn.isActive !== false
    });
    setNewImageUrlInput('');
    setIsModalOpen(true);
  };

  const handleSaveProductModal = (e) => {
    e.preventDefault();
    if (!currentProduct) return;

    const finalGallery = currentProduct.gallery && currentProduct.gallery.length > 0 
      ? currentProduct.gallery 
      : (currentProduct.image ? [currentProduct.image] : []);
    
    const finalImage = currentProduct.image || finalGallery[0] || '/assets/images/healson-hs-up20-convex-bw.png';

    const enProductObj = {
      id: currentProduct.id,
      slug: currentProduct.slug,
      name: currentProduct.nameEn,
      category: currentProduct.category,
      categoryId: currentProduct.category === 'point-of-care-ultrasound' ? 'ultrasound-systems' : 'hospital-consumables',
      moq: currentProduct.moq,
      image: finalImage,
      gallery: finalGallery,
      shortDesc: currentProduct.shortDescEn,
      description: currentProduct.shortDescEn,
      highlights: currentProduct.highlightsEn.filter(h => h && h.trim()),
      keyFeatures: currentProduct.highlightsEn.filter(h => h && h.trim()),
      applications: currentProduct.applicationsEn.filter(a => a && a.trim()),
      specs: normalizeSpecsToObject(currentProduct.specsEn),
      detailedSpecs: normalizeSpecsToObject(currentProduct.specsEn),
      seoTitle: currentProduct.seoTitleEn || (currentProduct.nameEn ? `${currentProduct.nameEn} | MAXVOR` : ''),
      seoTitleEn: currentProduct.seoTitleEn || (currentProduct.nameEn ? `${currentProduct.nameEn} | MAXVOR` : ''),
      seoKeywords: currentProduct.seoKeywordsEn,
      seoKeywordsEn: currentProduct.seoKeywordsEn,
      seoDescription: currentProduct.seoDescriptionEn,
      seoDescriptionEn: currentProduct.seoDescriptionEn,
      isActive: currentProduct.isActive
    };

    const frProductObj = {
      id: currentProduct.id,
      slug: currentProduct.slug,
      name: currentProduct.nameFr || currentProduct.nameEn,
      category: currentProduct.category,
      categoryId: currentProduct.category === 'point-of-care-ultrasound' ? 'ultrasound-systems' : 'hospital-consumables',
      moq: currentProduct.moq,
      image: finalImage,
      gallery: finalGallery,
      shortDesc: currentProduct.shortDescFr || currentProduct.shortDescEn,
      description: currentProduct.shortDescFr || currentProduct.shortDescEn,
      highlights: currentProduct.highlightsFr.filter(h => h && h.trim()),
      keyFeatures: currentProduct.highlightsFr.filter(h => h && h.trim()),
      applications: currentProduct.applicationsFr.filter(a => a && a.trim()),
      specs: normalizeSpecsToObject(currentProduct.specsFr),
      detailedSpecs: normalizeSpecsToObject(currentProduct.specsFr),
      seoTitle: currentProduct.seoTitleFr || currentProduct.seoTitleEn || (currentProduct.nameFr ? `${currentProduct.nameFr} | MAXVOR` : (currentProduct.nameEn ? `${currentProduct.nameEn} | MAXVOR` : '')),
      seoTitleFr: currentProduct.seoTitleFr || currentProduct.seoTitleEn || (currentProduct.nameFr ? `${currentProduct.nameFr} | MAXVOR` : (currentProduct.nameEn ? `${currentProduct.nameEn} | MAXVOR` : '')),
      seoKeywords: currentProduct.seoKeywordsFr || currentProduct.seoKeywordsEn,
      seoKeywordsFr: currentProduct.seoKeywordsFr || currentProduct.seoKeywordsEn,
      seoDescription: currentProduct.seoDescriptionFr || currentProduct.seoDescriptionEn,
      seoDescriptionFr: currentProduct.seoDescriptionFr || currentProduct.seoDescriptionEn,
      isActive: currentProduct.isActive
    };

    let newProdsEn, newProdsFr;
    if (isEditing) {
      newProdsEn = productsEn.map(p => (p.id === currentProduct.id || p.slug === currentProduct.slug) ? enProductObj : p);
      newProdsFr = productsFr.map(p => (p.id === currentProduct.id || p.slug === currentProduct.slug) ? frProductObj : p);
    } else {
      newProdsEn = [enProductObj, ...productsEn];
      newProdsFr = [frProductObj, ...productsFr];
    }

    const updated = {
      ...siteData,
      productsEn: newProdsEn,
      productsFr: newProdsFr
    };
    setSiteData(updated);
    saveSiteData(updated);
    setIsModalOpen(false);
    setCurrentProduct(null);
    triggerSuccess('Product catalog and specifications saved successfully!');
  };

  // Multi-image batch upload handler
  const handleMultiImageUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImages(true);
    try {
      const urls = await uploadMultipleImagesToServer(files);
      if (urls && urls.length > 0) {
        setCurrentProduct(prev => {
          const currentGallery = prev.gallery || [];
          const updatedGallery = [...currentGallery, ...urls];
          return {
            ...prev,
            gallery: updatedGallery,
            image: prev.image || urls[0]
          };
        });
      }
    } catch (err) {
      console.error('Multi image upload error', err);
    } finally {
      setUploadingImages(false);
      e.target.value = '';
    }
  };

  // Add image by URL
  const handleAddImageUrl = () => {
    if (!newImageUrlInput.trim()) return;
    const url = newImageUrlInput.trim();
    setCurrentProduct(prev => {
      const currentGallery = prev.gallery || [];
      return {
        ...prev,
        gallery: [...currentGallery, url],
        image: prev.image || url
      };
    });
    setNewImageUrlInput('');
  };

  // Remove single image from gallery
  const handleRemoveGalleryImage = (indexToRemove) => {
    setCurrentProduct(prev => {
      const newGallery = (prev.gallery || []).filter((_, i) => i !== indexToRemove);
      const isRemovingMain = prev.image === prev.gallery[indexToRemove];
      return {
        ...prev,
        gallery: newGallery,
        image: isRemovingMain ? (newGallery[0] || '') : prev.image
      };
    });
  };

  // Set as primary main cover
  const handleSetMainCover = (imgUrl) => {
    setCurrentProduct(prev => ({
      ...prev,
      image: imgUrl
    }));
  };

  // --- Highlights Handlers ---
  const handleAddHighlight = (langKey) => {
    setCurrentProduct(prev => ({
      ...prev,
      [langKey]: [...(prev[langKey] || []), '']
    }));
  };

  const handleUpdateHighlight = (langKey, index, value) => {
    setCurrentProduct(prev => {
      const list = [...(prev[langKey] || [])];
      list[index] = value;
      return { ...prev, [langKey]: list };
    });
  };

  const handleRemoveHighlight = (langKey, index) => {
    setCurrentProduct(prev => {
      const list = (prev[langKey] || []).filter((_, i) => i !== index);
      return { ...prev, [langKey]: list };
    });
  };

  // --- Applications Handlers ---
  const handleAddApplication = (langKey) => {
    setCurrentProduct(prev => ({
      ...prev,
      [langKey]: [...(prev[langKey] || []), '']
    }));
  };

  const handleUpdateApplication = (langKey, index, value) => {
    setCurrentProduct(prev => {
      const list = [...(prev[langKey] || [])];
      list[index] = value;
      return { ...prev, [langKey]: list };
    });
  };

  const handleRemoveApplication = (langKey, index) => {
    setCurrentProduct(prev => {
      const list = (prev[langKey] || []).filter((_, i) => i !== index);
      return { ...prev, [langKey]: list };
    });
  };

  // --- Specs Table Handlers ---
  const handleAddSpecRow = (langKey) => {
    setCurrentProduct(prev => ({
      ...prev,
      [langKey]: [...(prev[langKey] || []), { label: '', value: '' }]
    }));
  };

  const handleUpdateSpecRow = (langKey, index, field, value) => {
    setCurrentProduct(prev => {
      const list = [...(prev[langKey] || [])];
      list[index] = { ...list[index], [field]: value };
      return { ...prev, [langKey]: list };
    });
  };

  const handleRemoveSpecRow = (langKey, index) => {
    setCurrentProduct(prev => {
      const list = (prev[langKey] || []).filter((_, i) => i !== index);
      return { ...prev, [langKey]: list };
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Catalog & Medical Device Management
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Full control over product titles, multi-image galleries, Key Technical Highlights, Clinical Applications, and Full Specifications.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-border-soft text-xs font-bold">
            <button
              onClick={() => setViewLang('en')}
              className={`px-3 py-1.5 rounded-lg transition-all ${viewLang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
            >
              English Catalog 🇬🇧 ({productsEn.length})
            </button>
            <button
              onClick={() => setViewLang('fr')}
              className={`px-3 py-1.5 rounded-lg transition-all ${viewLang === 'fr' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Catalogue Français 🇫🇷 ({productsFr.length})
            </button>
          </div>

          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-bold animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Product catalog updated and saved in real time!</span>
        </div>
      )}

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-border-soft shadow-xs flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-grow w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by product title, slug, SEO keywords, or specifications..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-secondary focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-50 border border-border-soft text-xs font-medium text-slate-800 focus:outline-none focus:border-secondary"
          >
            <option value="ALL">All Categories ({productList.length})</option>
            <option value="ultrasound-systems">Point-of-Care Ultrasound Probes</option>
            <option value="endoscopy-systems">Rigid & Flexible Endoscopy Systems</option>
            <option value="bandages-and-wound-care">Medical Bandages & Consumables</option>
          </select>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-3xl border border-border-soft shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-border-soft text-muted uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Product & Thumbnail</th>
                <th className="py-3.5 px-4 font-semibold">Category</th>
                <th className="py-3.5 px-4 font-semibold">Gallery Shots</th>
                <th className="py-3.5 px-4 font-semibold">MOQ</th>
                <th className="py-3.5 px-4 font-semibold">Status</th>
                <th className="py-3.5 px-4 font-semibold">SEO Keywords</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft">
              {filteredProducts.map((p) => {
                const isOnline = p.isActive !== false;
                const galleryCount = p.gallery?.length || (p.image ? 1 : 0);
                return (
                  <tr 
                    key={p.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-3.5 px-4 max-w-[280px]">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white border border-border-soft p-1 shrink-0 overflow-hidden flex items-center justify-center">
                          <img 
                            src={p.image || '/assets/images/placeholder.svg'} 
                            alt={p.name} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              if (p.categoryId === 'bandages-and-wound-care' || p.category === 'bandages-and-wound-care') {
                                e.target.src = '/assets/images/cat-bandages-matrix.png';
                              } else if (p.categoryId === 'endoscopy-systems' || p.category === 'endoscopy-systems') {
                                e.target.src = '/assets/images/cat-endoscopy-matrix.png';
                              } else {
                                e.target.src = '/assets/images/cat-ultrasound-matrix.png';
                              }
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <span className="font-bold text-slate-900 block truncate">{p.name}</span>
                          <span className="text-secondary font-mono text-[11px] block truncate">/products/{p.slug || p.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        {p.categoryId === 'endoscopy-systems' || p.category === 'endoscopy-systems' ? 'Endoscopy' : (p.categoryId === 'ultrasound-systems' || p.category === 'point-of-care-ultrasound' ? 'Ultrasound' : 'Wound Care')}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700">
                      <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                        <Images className="w-3 h-3 text-secondary" />
                        <span>{galleryCount} images</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {p.moq}
                    </td>
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => handleToggleProductStatus(p.id)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                          isOnline 
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100' 
                            : 'bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200'
                        }`}
                        title={isOnline ? 'Online (Visible on site)' : 'Off-shelf (Hidden from site)'}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                        <span>{isOnline ? 'Active' : 'Off-shelf'}</span>
                      </button>
                    </td>
                    <td className="py-3.5 px-4 max-w-[200px]">
                      <span className="text-[11px] text-muted truncate block">
                        {p.seoKeywords || 'N/A'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`/products/${p.slug || p.id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-secondary transition-colors"
                          title="Open Live Product Page"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleOpenEditModal(p)}
                          className="p-2 rounded-lg hover:bg-teal-50 text-slate-600 hover:text-secondary transition-colors"
                          title="Edit Full Specifications"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comprehensive Product Edit / Create Modal */}
      {isModalOpen && currentProduct && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-border-soft space-y-6 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-soft">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {isEditing ? 'Edit Product & Clinical Specifications' : 'Add New Medical Product'}
                </h3>
                <span className="text-xs text-muted font-mono">ID: {currentProduct.id}</span>
              </div>

              {/* Language Selector in Modal */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Edit Language:</span>
                <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-border-soft text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setModalLang('en')}
                    className={`px-3 py-1 rounded-lg transition-all ${modalLang === 'en' ? 'bg-secondary text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    English 🇬🇧
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalLang('fr')}
                    className={`px-3 py-1 rounded-lg transition-all ${modalLang === 'fr' ? 'bg-secondary text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Français 🇫🇷
                  </button>
                </div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Section Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto border-b border-border-soft pb-2 text-xs font-bold">
              <button
                type="button"
                onClick={() => setModalTab('basic')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${modalTab === 'basic' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <Package className="w-3.5 h-3.5" />
                <span>1. Basic Info & Copy</span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('gallery')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${modalTab === 'gallery' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <Images className="w-3.5 h-3.5" />
                <span>2. Multi-Image Gallery ({currentProduct.gallery?.length || 0})</span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('highlights')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${modalTab === 'highlights' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span>3. Highlights & Clinical Apps</span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('specs')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${modalTab === 'specs' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <Cpu className="w-3.5 h-3.5 text-teal-600" />
                <span>4. Full Specs Table ({(modalLang === 'en' ? currentProduct.specsEn : currentProduct.specsFr)?.length || 0})</span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('seo')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${modalTab === 'seo' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <Globe2 className="w-3.5 h-3.5 text-purple-600" />
                <span>5. SEO Metadata</span>
              </button>
            </div>

            <form onSubmit={handleSaveProductModal} className="space-y-5 text-xs">
              
              {/* TAB 1: Basic Info */}
              {modalTab === 'basic' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Product Title (English 🇬🇧) *</label>
                      <input 
                        type="text" 
                        required
                        value={currentProduct.nameEn}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, nameEn: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold"
                        placeholder="e.g. HS-UP20 Convex Ultrasound Probe"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Product Title (Français 🇫🇷) *</label>
                      <input 
                        type="text" 
                        required
                        value={currentProduct.nameFr}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, nameFr: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold"
                        placeholder="e.g. Sonde Échographique Convexe HS-UP20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">URL Slug (SEO URL) *</label>
                      <input 
                        type="text" 
                        required
                        value={currentProduct.slug}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, slug: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-mono text-[11px]"
                        placeholder="e.g. handheld-convex-ultrasound-probe-uprobe-2"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Category *</label>
                      <select
                        value={currentProduct.category}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-medium"
                      >
                        <option value="point-of-care-ultrasound">Point-of-Care Ultrasound</option>
                        <option value="bandages-wound-care">Bandages & Wound Care</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">MOQ (Minimum Order Quantity) *</label>
                      <input 
                        type="text" 
                        required
                        value={currentProduct.moq}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, moq: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white text-slate-900 font-bold"
                        placeholder="e.g. 1 Unit / 1 Carton"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Overview Description (English 🇬🇧)</label>
                      <textarea 
                        rows={3}
                        value={currentProduct.shortDescEn}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, shortDescEn: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 resize-none leading-relaxed"
                        placeholder="Clinical overview and export supply specifications..."
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Description Clinique (Français 🇫🇷)</label>
                      <textarea 
                        rows={3}
                        value={currentProduct.shortDescFr}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, shortDescFr: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 resize-none leading-relaxed"
                        placeholder="Présentation clinique et spécifications d'exportation..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Multi-Image Gallery */}
              {modalTab === 'gallery' && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-border-soft space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <Images className="w-4 h-4 text-secondary" />
                        <span>Product Multi-Image Gallery ({currentProduct.gallery?.length || 0} Photos)</span>
                      </span>
                      <p className="text-[11px] text-muted mt-0.5">
                        Batch upload multiple white-background photos. Click "Set Main" to choose the primary cover.
                      </p>
                    </div>

                    <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs cursor-pointer shadow-sm transition-colors shrink-0">
                      <Upload className="w-4 h-4" />
                      <span>{uploadingImages ? 'Uploading Photos...' : 'Batch Upload Images'}</span>
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={handleMultiImageUpload} 
                        disabled={uploadingImages}
                        className="hidden" 
                      />
                    </label>
                  </div>

                  {/* Gallery Thumbnails Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-1">
                    {currentProduct.gallery && currentProduct.gallery.map((imgUrl, imgIdx) => {
                      const isMain = currentProduct.image === imgUrl || (!currentProduct.image && imgIdx === 0);
                      return (
                        <div 
                          key={imgIdx} 
                          className={`relative group rounded-2xl bg-white border p-1.5 flex flex-col items-center justify-center transition-all ${
                            isMain 
                              ? 'border-secondary ring-2 ring-secondary/30 shadow-md' 
                              : 'border-border-soft hover:border-slate-300'
                          }`}
                        >
                          <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-white">
                            <img 
                              src={imgUrl || '/assets/images/placeholder.svg'} 
                              alt={`Gallery ${imgIdx}`} 
                              className="w-full h-full object-contain" 
                              onError={(e) => {
                                e.target.onerror = null;
                                if (imgUrl && imgUrl.includes('/assets/images/gspmed/')) {
                                  const fallbackName = imgUrl.split('/').pop();
                                  e.target.src = `/assets/images/${fallbackName}`;
                                } else if (imgUrl && imgUrl.startsWith('/assets/images/image')) {
                                  const fallbackName = imgUrl.split('/').pop();
                                  e.target.src = `/assets/images/gspmed/${fallbackName}`;
                                } else if (currentProduct.categoryId === 'endoscopy-systems' || currentProduct.category === 'endoscopy-systems') {
                                  e.target.src = '/assets/images/cat-endoscopy-matrix.png';
                                } else if (currentProduct.categoryId === 'ultrasound-systems' || currentProduct.category === 'point-of-care-ultrasound') {
                                  e.target.src = '/assets/images/cat-ultrasound-matrix.png';
                                } else {
                                  e.target.src = '/assets/images/cat-bandages-matrix.png';
                                }
                              }}
                            />
                          </div>

                          {isMain && (
                            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-secondary text-white text-[9px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                              <Star className="w-2.5 h-2.5 fill-current" />
                              <span>Cover</span>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-slate-900/70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-2 backdrop-blur-xs">
                            {!isMain && (
                              <button
                                type="button"
                                onClick={() => handleSetMainCover(imgUrl)}
                                className="w-full py-1 px-2 rounded-lg bg-secondary hover:bg-secondary-hover text-white text-[10px] font-bold shadow-xs cursor-pointer text-center"
                              >
                                Set Main
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleRemoveGalleryImage(imgIdx)}
                              className="w-full py-1 px-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold shadow-xs cursor-pointer flex items-center justify-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-border-soft">
                    <div className="relative flex-1">
                      <LinkIcon className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Paste image URL (e.g. /assets/images/xxx.png or external link)..."
                        value={newImageUrlInput}
                        onChange={(e) => setNewImageUrlInput(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-border-soft text-slate-900 text-xs font-mono focus:outline-none focus:border-secondary"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleAddImageUrl}
                      className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs cursor-pointer shrink-0"
                    >
                      Add to Gallery
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: Highlights & Clinical Applications */}
              {modalTab === 'highlights' && (
                <div className="space-y-6">
                  
                  {/* 1. Key Technical Highlights */}
                  <div className="p-5 rounded-2xl bg-white border border-border-soft shadow-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-border-soft">
                      <div>
                        <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-secondary" />
                          <span>Key Technical Highlights ({modalLang === 'en' ? 'English 🇬🇧' : 'Français 🇫🇷'})</span>
                        </span>
                        <p className="text-[11px] text-muted">
                          Displayed under the main title on the product detail page with green checkmarks.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddHighlight(modalLang === 'en' ? 'highlightsEn' : 'highlightsFr')}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Highlight</span>
                      </button>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {(modalLang === 'en' ? currentProduct.highlightsEn : currentProduct.highlightsFr)?.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-teal-50 text-secondary font-bold text-[11px] flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <input 
                            type="text"
                            value={item}
                            onChange={(e) => handleUpdateHighlight(modalLang === 'en' ? 'highlightsEn' : 'highlightsFr', idx, e.target.value)}
                            placeholder="e.g. Real-Time Color Doppler Ultrasound Imaging"
                            className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 text-xs focus:outline-none focus:bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveHighlight(modalLang === 'en' ? 'highlightsEn' : 'highlightsFr', idx)}
                            className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. Clinical Applications & Indications */}
                  <div className="p-5 rounded-2xl bg-white border border-border-soft shadow-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-border-soft">
                      <div>
                        <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <Stethoscope className="w-4 h-4 text-teal-600" />
                          <span>Clinical Applications & Indications ({modalLang === 'en' ? 'English 🇬🇧' : 'Français 🇫🇷'})</span>
                        </span>
                        <p className="text-[11px] text-muted">
                          Clinical departments, medical indications, and triage use cases.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddApplication(modalLang === 'en' ? 'applicationsEn' : 'applicationsFr')}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Application</span>
                      </button>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {(modalLang === 'en' ? currentProduct.applicationsEn : currentProduct.applicationsFr)?.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 font-bold text-[11px] flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <input 
                            type="text"
                            value={app}
                            onChange={(e) => handleUpdateApplication(modalLang === 'en' ? 'applicationsEn' : 'applicationsFr', idx, e.target.value)}
                            placeholder="e.g. Emergency Triage, Obstetrics & Gynecology, Mobile Field Clinics"
                            className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-border-soft text-slate-900 text-xs focus:outline-none focus:bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveApplication(modalLang === 'en' ? 'applicationsEn' : 'applicationsFr', idx)}
                            className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 4: Full Specifications Table */}
              {modalTab === 'specs' && (
                <div className="p-5 rounded-2xl bg-white border border-border-soft shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-border-soft">
                    <div>
                      <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-secondary" />
                        <span>Full Technical Specifications Table ({modalLang === 'en' ? 'English 🇬🇧' : 'Français 🇫🇷'})</span>
                      </span>
                      <p className="text-[11px] text-muted">
                        Official parameter sheet displayed in the technical dossier table on the product page.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddSpecRow(modalLang === 'en' ? 'specsEn' : 'specsFr')}
                      className="px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Parameter Row</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {(modalLang === 'en' ? currentProduct.specsEn : currentProduct.specsFr)?.map((row, idx) => (
                      <div key={idx} className="grid grid-cols-12 gap-2 items-center bg-slate-50 p-2 rounded-xl border border-border-soft">
                        <div className="col-span-4">
                          <input 
                            type="text"
                            value={row.label}
                            onChange={(e) => handleUpdateSpecRow(modalLang === 'en' ? 'specsEn' : 'specsFr', idx, 'label', e.target.value)}
                            placeholder="Parameter Name (e.g. Frequency)"
                            className="w-full px-3 py-1.5 rounded-lg bg-white border border-border-soft font-bold text-slate-800 text-xs focus:outline-none focus:border-secondary"
                          />
                        </div>
                        <div className="col-span-7">
                          <input 
                            type="text"
                            value={row.value}
                            onChange={(e) => handleUpdateSpecRow(modalLang === 'en' ? 'specsEn' : 'specsFr', idx, 'value', e.target.value)}
                            placeholder="Value / Description (e.g. 3.5MHz / 5.0MHz Electronic Convex)"
                            className="w-full px-3 py-1.5 rounded-lg bg-white border border-border-soft text-slate-900 text-xs focus:outline-none focus:border-secondary"
                          />
                        </div>
                        <div className="col-span-1 text-right">
                          <button
                            type="button"
                            onClick={() => handleRemoveSpecRow(modalLang === 'en' ? 'specsEn' : 'specsFr', idx)}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                            title="Delete Row"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: SEO Metadata */}
              {modalTab === 'seo' && (
                <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-teal-200/60 pb-3">
                    <div>
                      <span className="font-bold text-teal-950 text-sm block">Dedicated Product SEO & Search Metadata</span>
                      <p className="text-[11px] text-teal-800">Injected into document title, meta tags, and structured data for search engine ranking.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const fallbackTitleEn = currentProduct.nameEn ? `${currentProduct.nameEn} | MAXVOR` : '';
                        const fallbackTitleFr = (currentProduct.nameFr || currentProduct.nameEn) ? `${currentProduct.nameFr || currentProduct.nameEn} | MAXVOR` : '';
                        const fallbackDescEn = currentProduct.shortDescEn || (currentProduct.highlightsEn && currentProduct.highlightsEn.join('. ')) || '';
                        const fallbackDescFr = currentProduct.shortDescFr || currentProduct.shortDescEn || (currentProduct.highlightsFr && currentProduct.highlightsFr.join('. ')) || '';
                        setCurrentProduct({
                          ...currentProduct,
                          seoTitleEn: currentProduct.seoTitleEn || fallbackTitleEn,
                          seoTitleFr: currentProduct.seoTitleFr || fallbackTitleFr,
                          seoDescriptionEn: currentProduct.seoDescriptionEn || fallbackDescEn,
                          seoDescriptionFr: currentProduct.seoDescriptionFr || fallbackDescFr
                        });
                      }}
                      className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-[11px] font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Auto-Generate from Product Info</span>
                    </button>
                  </div>

                  {/* SEO Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-teal-950 text-xs">Custom SEO Title (EN 🇬🇧)</label>
                        <span className="text-[10px] text-muted">{(currentProduct.seoTitleEn || '').length} chars</span>
                      </div>
                      <input 
                        type="text" 
                        value={currentProduct.seoTitleEn || ''}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, seoTitleEn: e.target.value })}
                        placeholder={currentProduct.nameEn ? `${currentProduct.nameEn} | MAXVOR` : 'Product Title | MAXVOR'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-teal-200 text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-teal-950 text-xs">Titre SEO Personnalisé (FR 🇫🇷)</label>
                        <span className="text-[10px] text-muted">{(currentProduct.seoTitleFr || '').length} chars</span>
                      </div>
                      <input 
                        type="text" 
                        value={currentProduct.seoTitleFr || ''}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, seoTitleFr: e.target.value })}
                        placeholder={currentProduct.nameFr ? `${currentProduct.nameFr} | MAXVOR` : 'Titre Produit | MAXVOR'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-teal-200 text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                  </div>

                  {/* Focus Keywords */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-teal-950 mb-1 text-xs">Focus SEO Keywords (EN 🇬🇧)</label>
                      <input 
                        type="text" 
                        value={currentProduct.seoKeywordsEn || ''}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, seoKeywordsEn: e.target.value })}
                        placeholder="e.g. handheld ultrasound probe, convex probe, point-of-care ultrasound"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-teal-200 text-slate-900 font-mono text-[11px] focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-teal-950 mb-1 text-xs">Mots-Clés SEO Cibles (FR 🇫🇷)</label>
                      <input 
                        type="text" 
                        value={currentProduct.seoKeywordsFr || ''}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, seoKeywordsFr: e.target.value })}
                        placeholder="e.g. sonde échographique portable, sonde convexe, échographe point of care"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-teal-200 text-slate-900 font-mono text-[11px] focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                  </div>

                  {/* Meta Description */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-teal-950 text-xs">Meta Description Snippet (EN 🇬🇧)</label>
                        <span className="text-[10px] text-muted">{(currentProduct.seoDescriptionEn || '').length} chars (recom. 140-160)</span>
                      </div>
                      <textarea 
                        rows={3}
                        value={currentProduct.seoDescriptionEn || ''}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, seoDescriptionEn: e.target.value })}
                        placeholder="Concise 150-char summary for Google search results..."
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-teal-200 text-slate-900 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-teal-500/20 leading-relaxed"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-teal-950 text-xs">Description Meta Snippet (FR 🇫🇷)</label>
                        <span className="text-[10px] text-muted">{(currentProduct.seoDescriptionFr || '').length} chars (recom. 140-160)</span>
                      </div>
                      <textarea 
                        rows={3}
                        value={currentProduct.seoDescriptionFr || ''}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, seoDescriptionFr: e.target.value })}
                        placeholder="Résumé concis de 150 caractères pour les résultats Google..."
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-teal-200 text-slate-900 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-teal-500/20 leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Live Google SERP Preview Card */}
                  <div className="p-4 rounded-xl bg-white border border-teal-200/80 shadow-2xs space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                      <Globe2 className="w-3 h-3 text-teal-600" />
                      <span>Google Search Result Snippet Preview (Desktop SERP Simulation)</span>
                    </span>
                    <div className="text-[11px] text-[#202124] leading-tight">
                      <span className="text-[#202124] text-[12px] block font-mono text-[11px] text-[#4d5156]">
                        https://maxvor.com › products › <span className="font-semibold text-[#202124]">{currentProduct.slug || 'product-slug'}</span>
                      </span>
                      <h4 className="text-[#1a0dab] text-[15px] hover:underline font-medium cursor-pointer truncate pt-0.5">
                        {currentProduct.seoTitleEn || (currentProduct.nameEn ? `${currentProduct.nameEn} | MAXVOR` : 'Product Title | MAXVOR')}
                      </h4>
                      <p className="text-[#4d5156] text-[12px] line-clamp-2 leading-relaxed pt-0.5">
                        {currentProduct.seoDescriptionEn || currentProduct.shortDescEn || 'Product description snippet as it will appear in search engine listings.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Status Toggle */}
              <div className="pt-2 flex items-center justify-between border-t border-border-soft">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800 select-none">
                  <input 
                    type="checkbox" 
                    checked={currentProduct.isActive !== false}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, isActive: e.target.checked })}
                    className="rounded text-secondary focus:ring-secondary"
                  />
                  <span>Product is Active & Visible in Public Catalog</span>
                </label>

                <div className="flex items-center gap-3">
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
                    <span>Save Product Specifications</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}
