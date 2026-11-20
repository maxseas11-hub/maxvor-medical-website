import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './locales/en';
import { fr } from './locales/fr';
import { getSiteData, fetchServerSiteData } from '../data/siteStore';
import { FEATURED_PRODUCTS } from '../data/products';
import { FEATURED_PRODUCTS_FR } from '../data/productsFr';
import { BLOG_ARTICLES } from '../data/articles';
import { BLOG_ARTICLES_FR } from '../data/articlesFr';

const translations = {
  en,
  fr
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [siteData, setSiteData] = useState(() => getSiteData());

  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('maxvor_lang');
      if (saved === 'fr' || saved === 'en') return saved;
      // Auto-detect browser language if French
      const navLang = navigator.language || navigator.userLanguage || '';
      if (navLang.toLowerCase().startsWith('fr')) return 'fr';
      return 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang) => {
    if (newLang !== 'en' && newLang !== 'fr') return;
    setLangState(newLang);
    try {
      localStorage.setItem('maxvor_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore localstorage errors
    }
  };

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  // Initial fetch from Windows Server IIS backend
  useEffect(() => {
    fetchServerSiteData().then(data => {
      if (data) setSiteData(data);
    });
  }, []);

  // Subscribe to CMS store updates in real-time
  useEffect(() => {
    const handleDataUpdate = (e) => {
      if (e.detail) {
        setSiteData(e.detail);
      } else {
        setSiteData(getSiteData());
      }
    };

    window.addEventListener('maxvor_site_data_updated', handleDataUpdate);
    return () => window.removeEventListener('maxvor_site_data_updated', handleDataUpdate);
  }, []);

  const t = (key, fallback = '') => {
    const currentDict = translations[lang] || translations.en;
    if (currentDict && currentDict[key]) {
      return currentDict[key];
    }
    const enDict = translations.en;
    if (enDict && enDict[key]) {
      return enDict[key];
    }
    return fallback || key;
  };

  const categories = lang === 'fr' ? (siteData.categoriesFr || []) : (siteData.categoriesEn || []);
  const products = (lang === 'fr' ? (siteData.productsFr || []) : (siteData.productsEn || [])).filter(p => p.isActive !== false);
  const articles = (lang === 'fr' ? (siteData.articlesFr || []) : (siteData.articlesEn || [])).filter(a => a.isPublished !== false);
  const navigation = siteData.navigation || [];
  const pageContent = siteData.pageContent || {};
  const seo = siteData.seo || {};

  const keywordTags = [
    { id: '1', label: lang === 'fr' ? 'Sonde Échographie Android' : 'Handheld Ultrasound Android' },
    { id: '2', label: lang === 'fr' ? 'Bande Cohésive Sans Latex' : 'Latex Free Cohesive Bandage' },
    { id: '3', label: lang === 'fr' ? 'Procédure Échographie POCUS' : 'POCUS Clinical SOP' },
    { id: '4', label: lang === 'fr' ? 'Certificat ISO 13485' : 'ISO 13485 Medical Device' },
    { id: '5', label: lang === 'fr' ? 'Cryothérapie Sportive' : 'Cryotherapy Cold Compression' },
    { id: '6', label: lang === 'fr' ? 'Doppler Couleur USB-C' : 'Color Doppler USB-C Probe' },
  ];

  const getProductById = (id) => {
    if (!id) return null;
    const cleanId = String(id).toLowerCase().trim().replace(/^\/products\//, '').replace(/\/$/, '');
    const allProds = [
      ...(siteData.productsEn || []),
      ...(siteData.productsFr || []),
      ...FEATURED_PRODUCTS,
      ...FEATURED_PRODUCTS_FR
    ];

    return allProds.find(p => 
      p && (
        p.id === id || 
        p.slug === id || 
        p.id === cleanId ||
        p.slug === cleanId ||
        p.id?.toLowerCase() === cleanId || 
        p.slug?.toLowerCase() === cleanId || 
        p.model?.toLowerCase() === cleanId
      )
    ) || null;
  };

  const getCategoryById = (id) => {
    const allCatsEn = siteData.categoriesEn || [];
    const allCatsFr = siteData.categoriesFr || [];
    return categories.find(c => c.id === id) || 
           allCatsEn.find(c => c.id === id) || 
           allCatsFr.find(c => c.id === id);
  };

  const getArticleById = (id) => {
    if (!id) return null;
    const cleanId = String(id).toLowerCase().trim().replace(/^\/blog\//, '').replace(/\/$/, '');
    const allArts = [
      ...(siteData.articlesEn || []),
      ...(siteData.articlesFr || []),
      ...BLOG_ARTICLES,
      ...BLOG_ARTICLES_FR
    ];

    return allArts.find(a => 
      a && (
        a.id === id || 
        a.slug === id || 
        a.id === cleanId ||
        a.slug === cleanId ||
        a.id?.toLowerCase() === cleanId || 
        a.slug?.toLowerCase() === cleanId
      )
    ) || null;
  };

  return (
    <LanguageContext.Provider value={{
      lang,
      setLang,
      t,
      categories,
      products,
      articles,
      navigation,
      pageContent,
      seo,
      keywordTags,
      siteData,
      getProductById,
      getCategoryById,
      getArticleById
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
