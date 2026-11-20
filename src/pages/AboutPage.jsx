import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  HeartPulse,
  Sparkles,
  PackageCheck,
  Stethoscope,
  Briefcase,
  FileCheck2,
  Headphones,
  Boxes,
  Handshake,
  Warehouse,
  Truck,
  Check
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from '../components/common/SectionHeading';
import HomeFaq from '../components/home/HomeFaq';
import { usePageSeo } from '../hooks/usePageSeo';

export default function AboutPage({ onOpenRfq }) {
  usePageSeo({ pageKey: 'about' });
  const { lang, t } = useLanguage();

  const clientTypes = [
    {
      icon: Building2,
      title: lang === 'fr' ? 'Hôpitaux & Centres Médicaux' : 'Hospitals & Medical Centers',
      desc: lang === 'fr' 
        ? 'Consolidation multi-départements de consommables de soins et équipements d’échographie diagnostique pour l’approvisionnement régulier des services hospitaliers.'
        : 'Multi-department consumable consolidation and point-of-care ultrasound diagnostic systems for ongoing institutional supply.',
      tag: lang === 'fr' ? 'Structures Hospitalières' : 'Healthcare Institutions'
    },
    {
      icon: Briefcase,
      title: lang === 'fr' ? 'Distributeurs & Grossistes Médicaux' : 'Medical Distributors & Wholesalers',
      desc: lang === 'fr'
        ? 'Tarification de gros compétitive, quantités minimales adaptées et accompagnement complet sur les dossiers de conformité pour l’enregistrement local.'
        : 'Competitive wholesale tiered pricing, accessible MOQ structures, and full export compliance documentation for local market distribution.',
      tag: lang === 'fr' ? 'Réseaux de Distribution' : 'Wholesale Partners'
    },
    {
      icon: Stethoscope,
      title: lang === 'fr' ? 'Cliniques & Cabinets Spécialisés' : 'Clinics & Specialist Practices',
      desc: lang === 'fr'
        ? 'Sondes d’échographie ultra-portables de chevet, bandes de maintien et consommables essentiels avec possibilité de commandes d’évaluation dès 1 unité.'
        : 'Pocket ultrasound diagnostic scanners and essential clinical care supplies with flexible small-batch purchasing from 1 unit.',
      tag: lang === 'fr' ? 'Pratiques Spécialisées' : 'Clinical Practices'
    },
    {
      icon: Handshake,
      title: lang === 'fr' ? 'ONG & Programmes d’Appels d’Offres' : 'NGOs, Tenders & Procurement Programs',
      desc: lang === 'fr'
        ? 'Dossiers techniques bilingues rigoureux, coordination des expéditions maritimes/aériennes conteneurisées et tarification institutionnelle transparente.'
        : 'Rigorous bilingual technical dossiers, containerized freight coordination, and transparent institutional pricing for tender bids.',
      tag: lang === 'fr' ? 'Appels d’Offres' : 'Institutional Tenders'
    }
  ];

  const sourcingCapabilities = [
    {
      icon: Layers,
      title: lang === 'fr' ? 'Approvisionnement Multi-Catégories' : 'Multi-Category Sourcing',
      desc: lang === 'fr' 
        ? 'Accès à une sélection diversifiée de produits médicaux auprès d’un fournisseur unique.'
        : 'Access to a diverse selection of medical products through one supplier.'
    },
    {
      icon: Building2,
      title: lang === 'fr' ? 'Coordination des Fournisseurs' : 'Supplier Coordination',
      desc: lang === 'fr'
        ? 'Communication fluide et coordination continue avec les fabricants et fournisseurs pertinents.'
        : 'Communication and coordination with relevant product manufacturers and suppliers.'
    },
    {
      icon: FileCheck2,
      title: lang === 'fr' ? 'Support aux Dossiers d’Exportation' : 'Export Documentation Support',
      desc: lang === 'fr'
        ? 'Assistance rigoureuse pour l’ensemble des fiches techniques, certificats et documents d’exportation.'
        : 'Assistance with applicable product certifications and export documentation.'
    },
    {
      icon: PackageCheck,
      title: lang === 'fr' ? 'Coordination des Commandes & Livraisons' : 'Order & Delivery Coordination',
      desc: lang === 'fr'
        ? 'Accompagnement continu tout au long du processus d’achat et d’exécution des commandes.'
        : 'Support throughout the purchasing and order fulfillment process.'
    }
  ];

  const commitments = [
    lang === 'fr' ? 'Établir des relations fiables et durables avec nos clients et fournisseurs.' : 'Building dependable relationships with customers and suppliers.',
    lang === 'fr' ? 'Élargir l’accès à des produits médicaux rigoureusement sélectionnés.' : 'Expanding access to carefully selected medical products.',
    lang === 'fr' ? 'Offrir des options d’approvisionnement flexibles pour répondre à chaque besoin d’achat.' : 'Providing flexible sourcing options for different purchasing needs.',
    lang === 'fr' ? 'Maintenir une communication client réactive, transparente et professionnelle.' : 'Maintaining responsive and professional customer communication.',
    lang === 'fr' ? 'Soutenir une coopération à long terme sur les marchés de santé internationaux.' : 'Supporting long-term cooperation across international healthcare markets.'
  ];

  return (
    <div className="w-full bg-white min-h-screen py-10 md:py-16" data-component="about-page">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 space-y-16 sm:space-y-20">
        
        {/* Top Company Hero Section (Text on Left, High-Definition Supplier Warehouse Image on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold text-secondary">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>{lang === 'fr' ? 'À Propos de MAXVOR' : 'About MAXVOR'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'fr' ? 'Votre Partenaire de Confiance en Fournitures & Équipements Médicaux' : 'Your Trusted Partner in Medical Supplies & Equipment'}
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                {lang === 'fr'
                  ? 'MAXVOR est un fournisseur multi-catégories de fournitures et d’équipements médicaux dédié à connecter les prestataires de santé, les distributeurs et les partenaires d’approvisionnement avec des produits fiables issus de fabricants et de marques de confiance dans le monde entier.'
                  : 'MAXVOR is a multi-category medical supplies and equipment supplier dedicated to connecting healthcare providers, distributors, and procurement partners with reliable products from trusted manufacturers and brands worldwide.'}
              </p>
              <p>
                {lang === 'fr'
                  ? 'Notre portefeuille couvre un large éventail de consommables médicaux, de dispositifs de diagnostic et de fournitures de soins cliniques. En réunissant des produits soigneusement sélectionnés auprès de multiples fournisseurs, nous aidons à simplifier les achats et à offrir des options d’approvisionnement flexibles pour les marchés de santé.'
                  : 'Our portfolio covers a broad range of medical consumables, diagnostic equipment, and clinical care supplies. By bringing together carefully selected products from multiple suppliers, we help simplify procurement and provide flexible sourcing options for healthcare markets.'}
              </p>
              <p>
                {lang === 'fr'
                  ? 'En mettant l’accent sur un sourcing fiable, des solutions de vente en gros compétitives et un service client réactif, MAXVOR vise à bâtir des partenariats durables avec ses clients en Afrique et sur les marchés internationaux.'
                  : 'With a focus on reliable product sourcing, competitive wholesale solutions, and responsive customer service, MAXVOR aims to build lasting partnerships with customers across Africa and international markets.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-canvas border border-border-soft flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">
                  {lang === 'fr' ? 'Notre Mission' : 'Our Mission'}
                </strong>
                <span>
                  {lang === 'fr' 
                    ? 'Fournir des produits et services médicaux complets, et devenir un conseiller de confiance pour nos clients.' 
                    : 'To provide comprehensive medical products and services, and become a trusted advisor to our clients.'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Image: High-Definition Supplier Warehouse & Logistics Hub */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-border-soft shadow-card group bg-canvas">
              <img 
                src="/assets/images/about-warehouse-hub.jpg" 
                alt="MAXVOR Medical Supplies & Logistics Distribution Hub" 
                className="w-full h-[380px] sm:h-[440px] md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-white shadow-xs">
                  <Warehouse className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Plateforme Logistique & Sourcing' : 'Supplier Warehousing & Logistics Hub'}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug">
                  {lang === 'fr' ? 'Approvisionnement Consolidé & Expédition Internationale' : 'Consolidated Sourcing & Global Dispatch'}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2">
                  {lang === 'fr' 
                    ? 'Gestion des stocks de fournitures médicales, vérification de conformité et coordination logistique conteneurisée.'
                    : 'Structured medical supply inventory management, quality verification, and containerized export coordination.'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* WHO WE SERVE (Clean Header without 01· prefix, 4 Client Cards) */}
        <div className="space-y-10">
          <SectionHeading
            badge={lang === 'fr' ? 'Nos Bénéficiaires' : 'WHO WE SERVE'}
            title={lang === 'fr' ? 'Nos Solutions S’Adaptent à Vos Besoins d’Achat' : 'Tailored Sourcing for Diverse Healthcare Stakeholders'}
            subtitle={lang === 'fr' ? 'Des solutions d’approvisionnement pensées pour chaque profil d’acheteur médical.' : 'Enabling seamless procurement across hospitals, distribution networks, clinics, and tender programs.'}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-border-soft shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-border-soft">
                        {c.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-secondary transition-colors leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* OUR SUPPLY NETWORK (Clean Header without 02· prefix, 2-Column with Visual Image) */}
        <div className="bg-canvas rounded-3xl p-6 sm:p-10 md:p-12 border border-border-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Copy & Brand Badges */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary block">
                {lang === 'fr' ? 'Notre Réseau' : 'OUR SUPPLY NETWORK'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {lang === 'fr' ? 'Notre Réseau de Marques & Partenaires de Chaîne d’Approvisionnement' : 'Connecting Healthcare Markets with Selected Medical Brands'}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                <p>
                  {lang === 'fr'
                    ? 'De solides relations avec les fournisseurs constituent un pilier essentiel de nos activités. MAXVOR collabore avec des fabricants et des marques médicales sélectionnés pour apporter une gamme diversifiée de produits aux marchés de santé internationaux.'
                    : 'Strong supplier relationships are an important part of our business. MAXVOR works with selected medical manufacturers and brands to bring a diverse range of products to international healthcare markets.'}
                </p>
                <p>
                  {lang === 'fr'
                    ? 'Grâce à des relations fournisseurs établies et aux accords de distribution autorisée applicables, nous visons à offrir à nos clients un accès fiable aux produits, des options d’achat en gros compétitives et un soutien coordonné à l’approvisionnement.'
                    : 'Through established supplier relationships and applicable authorized distribution arrangements, we aim to provide customers with reliable product access, competitive wholesale sourcing options, and coordinated procurement support.'}
                </p>
                <p>
                  {lang === 'fr'
                    ? 'En connectant de multiples sources de produits, nous aidons nos clients à simplifier la coordination des fournisseurs et à explorer un catalogue élargi de produits médicaux par l’intermédiaire d’un interlocuteur unique.'
                    : 'By connecting multiple product sources, we help customers simplify supplier coordination and explore a wider range of medical products through one business partner.'}
                </p>
              </div>

              {/* Brand Chips */}
              <div className="pt-4 border-t border-border-soft flex flex-wrap items-center gap-2.5 text-xs text-slate-700">
                <span className="font-bold text-slate-900">{lang === 'fr' ? 'Partenaires de Marques Autorisés :' : 'Selected Brand & Sourcing Channels:'}</span>
                <span className="px-3 py-1 bg-white rounded-lg border border-border-soft font-semibold text-slate-800 shadow-2xs">SonoStar</span>
                <span className="px-3 py-1 bg-white rounded-lg border border-border-soft font-semibold text-slate-800 shadow-2xs">Healson</span>
                <span className="px-3 py-1 bg-white rounded-lg border border-border-soft font-semibold text-slate-800 shadow-2xs">GSPMED</span>
                <span className="px-3 py-1 bg-white rounded-lg border border-border-soft font-semibold text-slate-800 shadow-2xs">Hongsheng</span>
                <span className="px-3 py-1 bg-white rounded-lg border border-border-soft font-semibold text-slate-800 shadow-2xs">Wondfo</span>
              </div>
            </div>

            {/* Right Column: Visual Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-border-soft shadow-card group bg-white">
                <img 
                  src="/assets/images/about-supply-network.jpg" 
                  alt="MAXVOR Healthcare Supply Chain & Brand Partners" 
                  className="w-full h-[280px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
                  <span className="font-bold block text-sm">
                    {lang === 'fr' ? 'Coordination des Fournisseurs' : 'Multi-Brand Coordination'}
                  </span>
                  <p className="text-slate-200 text-[11px]">
                    {lang === 'fr' ? 'Accès direct aux catalogues de marques médicales certifiées.' : 'Direct access to certified medical brand product lines.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* OUR SOURCING CAPABILITIES (Clean Header without 03· prefix, 2-Column with Visual Image) */}
        <div className="space-y-10">
          <SectionHeading
            badge={lang === 'fr' ? 'Nos Capacités' : 'OUR SOURCING CAPABILITIES'}
            title={lang === 'fr' ? 'Nos Capacités d’Approvisionnement & Services' : 'Comprehensive Sourcing & Supply Capabilities'}
            subtitle={lang === 'fr' ? 'Nous comprenons qu’un approvisionnement médical efficace dépasse la simple recherche de produits : il exige un sourcing fiable, une communication claire et des arrangements logistiques coordonnés.' : 'We understand that efficient medical procurement involves more than finding individual products. It requires reliable sourcing, clear communication, and coordinated supply arrangements.'}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 4 Sourcing Capabilities Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sourcingCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-border-soft shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="w-11 h-11 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-secondary transition-colors leading-snug">
                          {cap.title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Inspection & Packaging Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border-soft shadow-card group bg-canvas">
                <img 
                  src="/assets/images/about-sourcing-capabilities.jpg" 
                  alt="MAXVOR Medical Product Inspection & Sourcing Operations" 
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 inset-x-5 text-white space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/80 text-[10px] font-bold uppercase tracking-wider text-white">
                    <PackageCheck className="w-3 h-3" />
                    <span>{lang === 'fr' ? 'Contrôle & Expédition' : 'Quality Check & Packing'}</span>
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {lang === 'fr' ? 'Vérification Qualité et Documentation Rigoureuse' : 'Quality Verification & Order Dispatch'}
                  </h4>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    {lang === 'fr' ? 'Inspection des lots, étiquetage export et consolidation de fret international.' : 'Batch inspection, export packaging compliance, and international container consolidation.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <p className="text-xs sm:text-sm text-slate-600 italic">
              {lang === 'fr' 
                ? '« Nous visons à simplifier les activités d’approvisionnement et à aider nos partenaires à gérer leurs besoins avec une efficacité optimale. »'
                : '“We aim to simplify sourcing activities and help our partners manage their procurement needs more efficiently.”'}
            </p>
          </div>
        </div>

        {/* OUR COMMITMENT (Clean Header without 04· prefix, Closing Banner) */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-14 shadow-elevated space-y-10 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>{lang === 'fr' ? 'Notre Engagement' : 'OUR COMMITMENT'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              {lang === 'fr' ? 'Notre Engagement d’Entreprise' : 'Our Corporate Commitment to Healthcare Partners'}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {lang === 'fr'
                ? 'Chez MAXVOR, nous sommes convaincus que des partenariats d’approvisionnement fiables constituent un fondement indispensable pour soutenir la prestation de soins de santé. Nous nous engageons à :'
                : 'At MAXVOR, we believe that reliable supply partnerships make a difference in healthcare procurement. We are committed to:'}
            </p>

            {/* 5 Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {commitments.map((cmt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-snug">{cmt}</span>
                </div>
              ))}
            </div>

            {/* Action Card */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {lang === 'fr' ? 'Votre Partenaire en Fournitures Médicales. Une Connexion, Plusieurs Solutions.' : 'Your Medical Supply Partner. One Connection, Multiple Solutions.'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {lang === 'fr' ? 'Vous recherchez un partenaire d’approvisionnement fiable pour vos besoins en produits médicaux ?' : 'Looking for a reliable sourcing partner for your medical product requirements?'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <button
                  onClick={() => onOpenRfq()}
                  className="px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
                >
                  {lang === 'fr' ? 'Demander un Devis' : 'Request a Quote'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <HomeFaq onOpenRfq={onOpenRfq} />

      </div>
    </div>
  );
}
