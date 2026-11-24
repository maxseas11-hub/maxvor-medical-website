# 📝 MAXVOR Medical Platform — Iteration Changelog

All notable changes, product uploads, architectural refactorings, and SEO milestones for the MAXVOR Medical website are documented in this file.

---

## [v2.5.0] - 2026-11-24
### 🔄 Full 73 Products Sync, Bidirectional Persistence & Admin Version Logging
- **73 Woke Endoscopy & Consumables Catalog**: Uploaded all 33 Woke Medical endoscopy products (33 Endoscopy + 27 Ultrasound + 13 Bandage = 73 Total Products), strictly adhering to Excel titles with zero model numbers displayed on the frontend.
- **Bidirectional Merge Engine (`siteStore.js`)**: Refactored `fetchServerSiteData()` with `mergeProductsWithCode` and `mergeCategoriesWithCode`, ensuring server-side `App_Data/site_data.json` automatically merges with codebase updates and auto-persists without dropping products (fixing the 73 -> 40 rollback bug).
- **Admin Customization Protection**: Ensured user modifications in `/admin` (uploaded gallery images, status toggles, custom specs, and SEO overrides) are 100% preserved and never overwritten by future code updates.
- **Image Mirroring & Multi-Tier Fallback**: Mirrored all product assets across `/assets/images/` and `/assets/images/gspmed/`, and injected `onError` smart category image fallbacks across all frontend and admin components to eliminate broken image icons.
- **Admin Audit Logging**: Added automatic timestamp tracking (`lastUpdated`) and manual update version tracking standards.

---

## [v2.4.0] - 2026-11-20
### 🌟 Endoscopy Expansion, Layout Matrix & GitHub Continuity
- **Endoscopy Systems Upload**: Uploaded 28 Woke Medical endoscopy products (Nephroscopes, Ureteroscopes, Cystoscopes, Hysteroscopes, Fetoscopes, 4K UHD Cameras, 100W LED Light Sources, Irrigators, Guide Wires) with strictly omitted model numbers in accordance with compliance guidelines.
- **3-Column Category Grid**: Refactored the homepage `Featured Medical Product Categories` grid into a balanced 3-column wide layout (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1720px]`).
- **Category Matrix Asset Generation**: Created clean white-background 4-instrument category banners (`cat-endoscopy-matrix.png` & `cat-endoscopy-square.png`).
- **Product Reordering**: Reordered full product catalog (Ultrasound Probes first, Bandages second, Endoscopy products at the end).
- **Persistent API & LocalStorage Migration**: Added `findStoredData()` multi-version loader and enhanced `preview-server.cjs` with `/api/site-data.ashx` and `/api/upload.ashx` disk persistence to protect all `/admin` user customizations.
- **AI Handover System**: Created `AI_HANDOVER_MANUAL.md` and initialized GitHub synchronization to `maxseas11-hub/maxvor-medical-website`.

---

## [v2.3.0] - 2026-11-19
### 🔍 Sonostar Probes, SEO Clean Slugs & GSC XML Fixes
- **19 Sonostar Ultrasound Probes Upload**: Parsed official Excel specifications, mapped white-background probe images, and integrated 19 authorized models.
- **Unauthorized Models Exclusion**: Strictly excluded `CP-6CPL`, `CP-6F`, and `CP-8C` due to pending authorization.
- **Clean Clinical SEO Slugs**: Eliminated internal brand codes and model strings from URLs, ensuring clean descriptive routes.
- **Sitemap XML Parsing Repair**: Rebuilt `sitemap.xml` with standard XML tree generation, fixing premature closing tags and achieving 100% Google Search Console validity.
- **Admin Store Synchronization**: Implemented `mergeProductsWithCode` and `mergeArticlesWithCode` in `siteStore.js`.

---

## [v2.2.0] - 2026-11-17
### 📑 Blog Pagination & URL Routing Sync
- **10-Article Pagination**: Implemented clean pagination on `/blog` with bidirectional synchronization between `useSearchParams` (`?page=X`) and router parameters.
- **History Navigation**: Enabled accurate browser back/forward progress restoration without layout shifting.

---

## [v2.1.0] - 2026-11-16
### 🧭 Resources Navigation & Interactive FAQ
- **Resources Nav Menu**: Inserted `Resources` dropdown in top navigation between `Certifications` and `Blogs`.
- **Interactive Categorized FAQ**: Built categorized accordion FAQ page with real-time keyword search and bottom procurement CTA.

---

## [v2.0.0] - 2026-11-13
### 🏢 About Us Restructure & Bilingual Clinical Knowledge Base
- **About Us Page Overhaul**: De-numbered layout into cohesive corporate narrative sections.
- **7 Clinical SOP Articles**: Published comprehensive bilingual guides covering POCUS ultrasound workflows and orthopedic dressing techniques.

---

## [v1.0.0] - 2026-10-30
### 🚀 Initial Bilingual Platform Launch
- Initial React 18 + Vite SPA architecture with English & French localization.
- Pure minimalist white/gray UI theme and initial product/category setup.
- Windows Server IIS `web.config` deployment configuration.
