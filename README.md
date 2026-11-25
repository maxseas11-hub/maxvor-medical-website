# MAXVOR Medical Export Platform (迈沃医疗独立站)

[![React](https://img.shields.io/badge/React-18.x-61dafb.svg?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38b2ac.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/Language-EN%20%7C%20FR-blue.svg?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg?style=flat-square)](#)

> **Official Brand Website & Medical Equipment Catalog for MAXVOR Medical.**
> Providing authentic handheld point-of-care ultrasound diagnostic systems, endoscopy towers, and premium medical consumables with ISO 13485 quality standards for healthcare facilities, clinicians, and global healthcare networks.

---

## 📌 Project Overview

- **Brand**: MAXVOR Medical (`sales@maxvor.com`)
- **Core Market**: Global Hospital Procurement & Healthcare Distribution (Special focus on African emerging markets, Middle East, Southeast Asia, Latin America, and Europe)
- **Live Preview URL (Local)**: `http://localhost:5188/`
- **CMS Admin Console**: `http://localhost:5188/admin`
- **Production Server**: Windows Server IIS with URL Rewrite rules (`web.config`)

---

## 🏗️ System Architecture & Features

1. **3 Core Medical Categories Matrix (73 Active SKUs)**:
   - **Point-of-Care Ultrasound Diagnostic Systems** (27 probes: Convex, Linear, Micro-Convex, Phased Array, Dual-Head, 4D Volume)
   - **Medical Bandages, Tapes & Cold Therapy Consumables** (13 products: Cohesive Bandages, Kinesiology Tapes, Cryotherapy Wraps, Ice Sprays)
   - **Minimally Invasive Endoscopy Systems & Surgical Instruments** (33 products: Nephroscopes, Ureteroscopes, Cystoscopes, Hysteroscopes, Fetoscopes, 4K UHD Cameras, 100W LED Light Sources, Irrigators, Guide Wires)
2. **Dynamic Bilingual Localization (EN / FR)**:
   - Complete multi-language routing with synchronized product catalogs, category definitions, FAQ entries, and clinical SOP blogs.
3. **Enterprise CMS Operations Hub (`/admin`)**:
   - Visual dashboard for RFQ inquiries management, CSV exports, dynamic navigation configuration, and real-time product catalog editing.
   - Intelligent bidirectional data synchronization merging code updates with custom administrative changes.
4. **Search Engine & Generative Engine Optimization (SEO / GEO)**:
   - 100% compliant XML Sitemap (`public/sitemap.xml`) indexing 129 standard URLs.
   - Comprehensive JSON-LD structured data (`MedicalDevice`, `Organization`, `FAQPage`).
5. **Anti-Cache & Reliable Production Deployment**:
   - Standardized PowerShell deployment with 100% database & uploads protection.
   - Built-in `Cache-Control: no-cache, no-store, must-revalidate` across HTML & IIS configurations.

---

## 📂 Directory Structure

```text
medisupply-hub/
├── public/                     # Static public assets
│   ├── api/                    # Local persistent API storage (site-data.json)
│   ├── assets/                 # High-resolution white-background images
│   │   ├── images/
│   │   │   ├── endoscopy/      # 28 Woke Endoscopy scopes & equipment assets
│   │   │   ├── gspmed/         # Hospital bandages & cryotherapy assets
│   │   │   └── ...             # Probe assets & category matrix banners
│   ├── robots.txt              # Search engine crawler indexing directives
│   ├── sitemap.xml             # 124-URL compliant XML sitemap
│   └── web.config              # IIS SPA URL rewrite configuration
├── src/
│   ├── components/             # Reusable UI components (Navbar, Footer, Modals)
│   ├── data/                   # Master data models & store
│   │   ├── products.js         # English product database (68 SKUs)
│   │   ├── productsFr.js       # French product database (68 SKUs)
│   │   ├── categories.js       # Category definitions (EN)
│   │   ├── categoriesFr.js     # Category definitions (FR)
│   │   ├── articles.js         # Clinical SOP knowledge base (EN)
│   │   ├── articlesFr.js       # Clinical SOP knowledge base (FR)
│   │   └── siteStore.js        # Dynamic persistence & merge store
│   ├── i18n/                   # Multilingual locale dictionaries
│   ├── pages/                  # Route views (Home, Products, Admin, Blog, FAQ)
│   └── App.jsx                 # Root router & layout wrapper
├── AI_HANDOVER_MANUAL.md       # Full AI memory & operational handover manual
├── CHANGELOG.md                # Iteration history from Day 0 to latest build
└── package.json
```

---

## ⚡ Quick Start & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Run local preview server with persistent API backend
node preview-server.cjs
```

---

## 🤖 Instructions for AI Agents & Continuity

If you are an AI assistant taking over this repository:
1. Please read **[`AI_HANDOVER_MANUAL.md`](./AI_HANDOVER_MANUAL.md)** for detailed business rules, MOQ policies, model omission guidelines, and data structure schemas.
2. Please check **[`CHANGELOG.md`](./CHANGELOG.md)** for recent milestone changes and verification records.
