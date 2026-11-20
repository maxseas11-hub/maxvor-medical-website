import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Custom hook to dynamically apply SEO metadata to document head
 * Supports:
 * - Specific pageKey (e.g. 'home', 'products', 'certifications', 'about', 'contact', 'blog')
 * - Custom overrides (title, description, keywords, canonical, image, productData, articleData)
 */
export function usePageSeo({
  pageKey = null,
  title = null,
  description = null,
  keywords = null,
  canonical = null,
  image = null,
  productData = null,
  articleData = null,
  type = 'website'
} = {}) {
  const { siteData, lang } = useLanguage();

  useEffect(() => {
    const seo = siteData?.seo || {};
    const globalSeo = seo.global || {};
    const pagesSeo = seo.pages || {};
    const baseUrl = globalSeo.canonicalUrl || 'https://maxvor.com';

    let finalTitle = '';
    let finalDesc = '';
    let finalKeywords = '';
    let finalCanonical = '';
    let finalImage = image || '/assets/images/cat-ultrasound-square.png';

    // 1. If Product Data is provided
    if (productData) {
      if (lang === 'fr') {
        finalTitle = productData.seoTitleFr || productData.seoTitle || (productData.name ? `${productData.name} | MAXVOR` : '');
        finalDesc = productData.seoDescriptionFr || productData.seoDescription || productData.shortDesc || productData.description || '';
        finalKeywords = productData.seoKeywordsFr || productData.seoKeywords || '';
      } else {
        finalTitle = productData.seoTitleEn || productData.seoTitle || (productData.name ? `${productData.name} | MAXVOR` : '');
        finalDesc = productData.seoDescriptionEn || productData.seoDescription || productData.shortDesc || productData.description || '';
        finalKeywords = productData.seoKeywordsEn || productData.seoKeywords || '';
      }
      finalCanonical = `${baseUrl}/products/${productData.slug || productData.id}`;
      finalImage = productData.image || finalImage;
    }
    // 2. If Article Data is provided
    else if (articleData) {
      finalTitle = `${articleData.title} | MAXVOR`;
      finalDesc = articleData.excerpt || articleData.summary || articleData.seoDescription || '';
      finalKeywords = articleData.keywords || articleData.tags?.join(', ') || '';
      finalCanonical = `${baseUrl}/blog/${articleData.slug || articleData.id}`;
      finalImage = articleData.coverImage || articleData.image || finalImage;
    }
    // 3. If Page Key is provided (e.g. 'home', 'products', 'certifications', 'about', 'contact', 'blog')
    else if (pageKey && pagesSeo[pageKey]) {
      const p = pagesSeo[pageKey];
      if (lang === 'fr') {
        finalTitle = p.titleFr || p.titleEn || globalSeo.siteTitleFr || globalSeo.siteTitleEn || 'MAXVOR';
        finalDesc = p.descFr || p.descEn || globalSeo.metaDescFr || globalSeo.metaDescEn || '';
        finalKeywords = p.keywordsFr || p.keywordsEn || globalSeo.metaKeywordsFr || globalSeo.metaKeywordsEn || '';
      } else {
        finalTitle = p.titleEn || globalSeo.siteTitleEn || 'MAXVOR';
        finalDesc = p.descEn || globalSeo.metaDescEn || '';
        finalKeywords = p.keywordsEn || globalSeo.metaKeywordsEn || '';
      }
      finalCanonical = `${baseUrl}${pageKey === 'home' ? '' : '/' + pageKey}`;
    }
    // 4. Fallback to Global Defaults
    else {
      if (lang === 'fr') {
        finalTitle = globalSeo.siteTitleFr || globalSeo.siteTitleEn || 'MAXVOR';
        finalDesc = globalSeo.metaDescFr || globalSeo.metaDescEn || '';
        finalKeywords = globalSeo.metaKeywordsFr || globalSeo.metaKeywordsEn || '';
      } else {
        finalTitle = globalSeo.siteTitleEn || 'MAXVOR';
        finalDesc = globalSeo.metaDescEn || '';
        finalKeywords = globalSeo.metaKeywordsEn || '';
      }
      finalCanonical = baseUrl;
    }

    // Direct manual overrides
    if (title) finalTitle = title;
    if (description) finalDesc = description;
    if (keywords) finalKeywords = keywords;
    if (canonical) finalCanonical = canonical;

    // Apply Document Title
    if (finalTitle) {
      document.title = finalTitle;
    }

    // Helper to set or create meta tag
    const setMetaTag = (attributeName, attributeValue, contentValue) => {
      let el = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attributeName, attributeValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentValue || '');
    };

    // Apply Meta Description & Keywords
    setMetaTag('name', 'description', finalDesc);
    setMetaTag('name', 'keywords', finalKeywords);

    // Apply Robots
    if (globalSeo.robotsIndexing !== false) {
      setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    } else {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    }

    // Apply OpenGraph Tags
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDesc);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:type', productData ? 'product' : (articleData ? 'article' : type));
    setMetaTag('property', 'og:site_name', 'MAXVOR Medical');
    if (finalImage) {
      const fullImgUrl = finalImage.startsWith('http') ? finalImage : `${baseUrl}${finalImage}`;
      setMetaTag('property', 'og:image', fullImgUrl);
    }

    // Apply Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);

  }, [siteData, lang, pageKey, title, description, keywords, canonical, image, productData, articleData, type]);
}
