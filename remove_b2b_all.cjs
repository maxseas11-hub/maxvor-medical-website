const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function replaceInFile(relPath, replacements) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${relPath}`);
    return;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  let count = 0;
  for (const [search, replace] of replacements) {
    if (typeof search === 'string') {
      const parts = content.split(search);
      if (parts.length > 1) {
        count += parts.length - 1;
        content = parts.join(replace);
      }
    } else if (search instanceof RegExp) {
      const matchCount = (content.match(search) || []).length;
      if (matchCount > 0) {
        count += matchCount;
        content = content.replace(search, replace);
      }
    }
  }
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[${relPath}] Updated ${count} occurrence(s).`);
}

// 1. Locales EN
replaceInFile('src/i18n/locales/en.js', [
  ['Streamlining B2B procurement for overseas healthcare distributors, hospital tenders, and clinic networks with direct source pricing, export documentation, and reliable fulfillment.', 'Delivering certified diagnostic instruments, clinical ultrasound probes, and premium hospital consumables worldwide with direct transparent pricing and reliable fulfillment.'],
  ['Factory Direct B2B Wholesale Pricing', 'Direct Manufacturer Quality & Value'],
  ['B2B Export Infrastructure', 'Global Supply & Export Infrastructure'],
  ['Global B2B Logistics', 'Global Logistics & Supply Chain'],
  ['Authorized diagnostic instruments, point-of-care imaging probes, and clinical supplies available for B2B wholesale and global healthcare procurement.', 'Authorized diagnostic instruments, point-of-care imaging probes, and premium clinical supplies with verified specifications.'],
  ['Inquire for B2B Pricing', 'Inquire for Pricing & Details'],
  ['Request Official B2B Technical Quotation', 'Request Official Technical Quotation'],
  ['MAXVOR is a dedicated B2B medical equipment and clinical supply chain hub based in China, delivering certified diagnostic instruments and hospital supplies to overseas distributors and tenders.', 'MAXVOR is a premier medical equipment and clinical supply brand delivering certified diagnostic instruments, point-of-care ultrasound systems, and hospital consumables worldwide.'],
  [/\bB2B\b/g, 'Direct']
]);

// 2. Locales FR
replaceInFile('src/i18n/locales/fr.js', [
  ['Logistique B2B Mondiale', 'Logistique Mondiale & Expédition'],
  ['Instruments de diagnostic autorisés, sondes d’échographie portables et fournitures cliniques disponibles pour vente en gros B2B et approvisionnement hospitalier.', 'Instruments de diagnostic certifiés, sondes d’échographie portables et fournitures cliniques de haute précision.'],
  ['Demander un Tarif Grossiste B2B', 'Demander un Devis & Tarifs'],
  ['Centre de Ressources Cliniques & Connaissances B2B', 'Centre de Ressources Cliniques & Connaissances'],
  [/\bB2B\b/g, 'Direct']
]);

// 3. Components
replaceInFile('src/components/hero/Hero.jsx', [
  ['des solutions d’approvisionnement flexibles et un support B2B efficace.', 'des solutions d’équipement médical fiables et un support client réactif.'],
  ['flexible sourcing solutions, and efficient B2B supply support.', 'reliable medical equipment solutions, and dedicated customer support.']
]);

replaceInFile('src/components/products/FeaturedProducts.jsx', [
  ['l’exportation B2B.', 'l’exportation directe.'],
  ['for direct B2B export.', 'for direct global delivery.']
]);

replaceInFile('src/components/header/Header.jsx', [
  ['Common questions on B2B sourcing, MOQs, sample orders & shipping terms', 'Common questions on orders, product specs, samples & shipping terms'],
  ['Questions fréquentes sur l’approvisionnement B2B, MOQ, échantillons et livraison', 'Questions fréquentes sur les commandes, spécifications, échantillons et livraison'],
  ['Catégories Autorisées pour l’Exportation B2B', 'Catégories de Produits Médicaux Autorisées'],
  ['Authorized Product Categories for B2B Export', 'Authorized Medical Product Categories'],
  ['Ressources & Guides B2B', 'Ressources & Guides Médicaux'],
  ['MAXVOR Sourcing Resources', 'MAXVOR Medical Resources']
]);

replaceInFile('src/components/footer/Footer.jsx', [
  ["{lang === 'fr' ? 'Assistance B2B' : 'B2B Support'}", "{lang === 'fr' ? 'Support Client' : 'Customer Support'}"]
]);

replaceInFile('src/components/categories/Categories.jsx', [
  ["{lang === 'fr' ? 'Sourcing B2B & Appels d’Offres' : 'B2B Sourcing & Tender Fulfillment'}", "{lang === 'fr' ? 'Catalogue & Commandes Directes' : 'Official Catalog & Direct Orders'}"]
]);

// 4. Pages
replaceInFile('src/pages/ProductsPage.jsx', [
  ["{lang === 'fr' ? 'Catalogue de Vente en Gros B2B' : 'Wholesale Product Catalog'}", "{lang === 'fr' ? 'Catalogue Officiel des Produits' : 'Official Product Catalog'}"],
  ["{lang === 'fr' ? 'Fourniture directe B2B & Spécifications certifiées' : 'Direct B2B Factory Supply & Verified Specifications'}", "{lang === 'fr' ? 'Produits Certifiés & Spécifications Vérifiées' : 'Certified Quality & Verified Specifications'}"]
]);

replaceInFile('src/pages/ContactPage.jsx', [
  ["badge={lang === 'fr' ? 'Pôle Exportation B2B Direct' : 'Direct B2B Sourcing Desk'}", "badge={lang === 'fr' ? 'Support Client & Commandes' : 'Direct Customer & Orders Desk'}"]
]);

replaceInFile('src/pages/FaqPage.jsx', [
  ['Explore our complete list of B2B procurement questions or filter by specific category above to narrow your inquiry.', 'Explore our complete list of frequently asked questions or filter by specific category above to find exact answers.'],
  ["<span>{lang === 'fr' ? 'Service Export Dédié' : 'Dedicated B2B Desk'}</span>", "<span>{lang === 'fr' ? 'Service Client Dédié' : 'Dedicated Support Desk'}</span>"]
]);

replaceInFile('src/pages/BlogPage.jsx', [
  ["{lang === 'fr' ? 'Sourcing B2B & Appels d’Offres Médicaux' : 'B2B Sourcing & Tender Inquiries'}", "{lang === 'fr' ? 'Guides Médicaux & Commandes' : 'Medical Guides & Orders'}"]
]);

// 5. Data Files
replaceInFile('src/data/faqs.js', [
  ["nameFr: 'Tarification & Modalités B2B',", "nameFr: 'Tarification & Modalités de Commande',"],
  ["name: 'B2B Sourcing & Global Logistics',", "name: 'Ordering & Global Logistics',"],
  ["nameFr: 'Sourcing B2B & Logistique Internationale',", "nameFr: 'Commandes & Logistique Internationale',"],
  ['Contact our B2B export desk for customized tender price matrices.', 'Contact our customer support team for customized order pricing details.']
]);

replaceInFile('src/data/articles.js', [
  ['"label": "B2B Medical Equipment Procurement & Tender Guide",', '"label": "Medical Equipment Procurement & Selection Guide",'],
  ['"title": "2026 B2B Handheld Ultrasound Procurement & Tender Guide: Model Selection, Spec Matrix & Direct Factory Terms",', '"title": "2026 Handheld Ultrasound Procurement & Technical Guide: Model Selection, Spec Matrix & Clinical Features",'],
  ['"seoMetaDesc": "Comprehensive B2B buying guide for hospital procurement directors and distributors. Technical selection matrix, 16 vs 32 channel beamforming, and factory direct export terms.",', '"seoMetaDesc": "Comprehensive buying guide for clinicians and medical facilities. Technical selection matrix, 16 vs 32 channel beamforming, and direct specifications.",'],
  ['"B2B medical equipment buying guide",', '"Medical equipment buying guide",'],
  ['<h2>B2B Procurement Specifications for Healthcare Facilities</h2>', '<h2>Technical Specifications & Selection for Healthcare Facilities</h2>'],
  ['and B2B procurement specs.', 'and clinical quality specs.'],
  ['<h2>B2B Quality Benchmarks for Medical Distributors</h2>', '<h2>Quality Benchmarks for Medical Applications</h2>']
]);

replaceInFile('src/data/articlesFr.js', [
  ['"label": "Applications des Bandes Cohésives & Achat B2B",', '"label": "Applications des Bandes Cohésives & Guide d’Achat",'],
  ['"title": "Guide d’Approvisionnement et d’Appels d’Offres 2026 : Échographes Portables B2B & Grille Tarifaire Usine",', '"title": "Guide d’Approvisionnement Clinique 2026 : Échographes Portables & Caractéristiques Techniques",'],
  ['"seoTitle": "Guide d’Achat Échographes Portables B2B 2026",', '"seoTitle": "Guide d’Achat Échographes Portables 2026",'],
  ['"primaryKeyword": "Guide Achat Échographe Portable B2B",', '"primaryKeyword": "Guide Achat Échographe Portable",'],
  ['Qu’est-ce qu’une Bande Cohésive Médicale ? Propriétés Auto-Adhérentes, Matériaux & Normes d’Achat B2B', 'Qu’est-ce qu’une Bande Cohésive Médicale ? Propriétés Auto-Adhérentes, Matériaux & Normes d’Achat'],
  ['options sans latex et critères B2B.', 'options sans latex et critères de qualité.']
]);

replaceInFile('src/data/siteStore.js', [
  ['Common questions on B2B sourcing, MOQs, sample orders & shipping', 'Common questions on orders, specifications, sample requests & shipping'],
  [', B2B healthcare procurement', ', medical diagnostic supplies'],
  ['MAXVOR | B2B Medical Equipment & Diagnostic Systems Hub', 'MAXVOR | Medical Equipment & Diagnostic Systems'],
  ['MAXVOR | Hub B2B d’Équipements Médicaux & Systèmes de Diagnostic', 'MAXVOR | Équipements Médicaux & Systèmes de Diagnostic'],
  ['Approvisionnement B2B pour distributeurs médicaux, appels d’offres et cliniques avec sondes d’échographie et consommables hospitaliers.', 'Équipements médicaux de haute qualité, sondes d’échographie et consommables hospitaliers certifiés.'],
  ['Contact B2B Export Desk | Request Quotation | MAXVOR', 'Contact Us | Request Quotation | MAXVOR'],
  ['Contacter le Service Export B2B | Demande de Devis | MAXVOR', 'Contactez-Nous | Demande de Devis | MAXVOR'],
  ['and B2B hospital procurement insights.', 'and clinical hospital procurement insights.'],
  ['Frequently Asked Questions (FAQ) | B2B Medical Sourcing | MAXVOR', 'Frequently Asked Questions (FAQ) | Product Sourcing | MAXVOR'],
  ['Foire Aux Questions (FAQ) | Approvisionnement Médical B2B | MAXVOR', 'Foire Aux Questions (FAQ) | Approvisionnement Médical | MAXVOR'],
  ['Streamlining B2B procurement for overseas healthcare distributors, hospital tenders, and clinic networks with direct source pricing, export documentation, and reliable fulfillment.', 'Delivering certified diagnostic instruments, clinical ultrasound probes, and premium hospital consumables worldwide with direct transparent pricing and reliable fulfillment.'],
  ['Optimisation de l’approvisionnement B2B pour les distributeurs de santé, appels d’offres hospitaliers et réseaux de cliniques avec prix directs d’usine et dossiers complets.', 'Dispositifs médicaux de précision, sondes d’échographie et consommables de soins des plaies avec accompagnement direct et documentation certifiée.'],
  ['Factory Direct B2B Wholesale Pricing', 'Direct Manufacturer Quality & Pricing']
]);

// 6. Admin Pages
replaceInFile('src/pages/admin/AdminLogin.jsx', [
  ['B2B Global Operations & Inquiry Management Portal', 'Global Operations & Inquiry Management Portal']
]);

replaceInFile('src/pages/admin/AdminOverview.jsx', [
  ['Live B2B Operations Hub', 'Live Operations & Inquiries Hub']
]);

replaceInFile('src/pages/admin/SeoManagement.jsx', [
  ['Frequently Asked Questions (FAQ) | B2B Medical Sourcing | MAXVOR', 'Frequently Asked Questions (FAQ) | Product Sourcing | MAXVOR'],
  ['Foire Aux Questions (FAQ) | Approvisionnement Médical B2B | MAXVOR', 'Foire Aux Questions (FAQ) | Approvisionnement Médical | MAXVOR']
]);

console.log('\nAll B2B terms removed successfully!');
