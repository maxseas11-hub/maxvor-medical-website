export const FAQ_CATEGORIES = [
  {
    id: 'sourcing-ordering',
    nameEn: 'Product Sourcing & Ordering',
    nameFr: 'Sourcing & Commandes Produits',
    descEn: 'Consolidated multi-category shipments, MOQ terms, and sample evaluation orders.',
    descFr: 'Expéditions multi-catégories consolidées, MOQ et commandes d’évaluation d’échantillons.',
    icon: 'Boxes'
  },
  {
    id: 'compliance-regulatory',
    nameEn: 'Regulatory & Certifications',
    nameFr: 'Conformité & Certifications',
    descEn: 'ISO 13485 standards, Declaration of Conformity (DoC), and tender registration dossiers.',
    descFr: 'Normes ISO 13485, Déclaration de Conformité (DoC) et dossiers d’appels d’offres.',
    icon: 'ShieldCheck'
  },
  {
    id: 'shipping-logistics',
    nameEn: 'Shipping, Freight & Customs',
    nameFr: 'Expédition, Fret & Douanes',
    descEn: 'Containerized ocean freight, air express, CIF/FOB terms, and transit packaging.',
    descFr: 'Fret maritime conteneurisé, fret aérien express, incoterms CIF/FOB et emballages.',
    icon: 'Truck'
  },
  {
    id: 'pricing-terms',
    nameEn: 'Pricing & Commercial Terms',
    nameFr: 'Tarification & Modalités B2B',
    descEn: 'Tiered wholesale discounts, proforma validity, and international payment options.',
    descFr: 'Remises quantitatives de gros, validité des proformas et modes de paiement.',
    icon: 'DollarSign'
  },
  {
    id: 'technical-support',
    nameEn: 'Technical Support & SOPs',
    nameFr: 'Support Technique & Garanties',
    descEn: 'Operating SOP manuals, driver installation for ultrasound, and product warranties.',
    descFr: 'Manuels et SOPs d’utilisation, pilotes pour échographes et politique de garantie.',
    icon: 'Stethoscope'
  }
];

export const FAQ_ITEMS = [
  // 1. Sourcing & Ordering
  {
    id: 'faq-1',
    categoryId: 'sourcing-ordering',
    questionEn: 'Can I combine multiple medical equipment and consumable categories into a single consolidated shipment?',
    questionFr: 'Puis-je regrouper plusieurs catégories d’équipements et de consommables dans une seule expédition ?',
    answerEn: 'Yes, absolutely. One of MAXVOR’s core advantages is multi-category supply consolidation. Overseas distributors and hospital procurement teams can combine point-of-care ultrasound diagnostic probes, medical cohesive bandages, rigid strapping tapes, kinesiology tapes, and emergency cold therapy supplies into a single consolidated purchase order. This streamlines logistics, unifies customs documentation, and significantly reduces international freight overhead.',
    answerFr: 'Oui, absolument. L’un des atouts majeurs de MAXVOR est la consolidation multi-catégories. Les distributeurs et hôpitaux peuvent combiner des sondes d’échographie de diagnostic, des bandes cohésives auto-adhérentes, des tapes de strapping rigides, des bandes de kinésiologie et des compresses froides dans une commande d’achat unique avec un dédouanement et une documentation unifiés.',
    popular: true
  },
  {
    id: 'faq-2',
    categoryId: 'sourcing-ordering',
    questionEn: 'What are the Minimum Order Quantities (MOQ) for diagnostic devices versus clinical consumables?',
    questionFr: 'Quelles sont les quantités minimales de commande (MOQ) pour les appareils de diagnostic et les consommables ?',
    answerEn: 'To support both pilot institutional trials and commercial distribution, our MOQ policy is tailored by product type: for point-of-care ultrasound diagnostic systems and electronic devices, the MOQ starts at just 1 Unit. For medical bandages, strapping tapes, and clinical consumables, our standard MOQ is 1 Carton per specification (e.g. 12 to 48 rolls depending on tape width).',
    answerFr: 'Pour faciliter les essais cliniques et la distribution commerciale, nos MOQ sont adaptées par catégorie : pour les sondes et systèmes d’échographie diagnostique, le MOQ commence dès 1 Unité. Pour les bandes cohésives, tapes de strapping et consommables médicaux, le MOQ standard est de 1 Carton par référence (ex. 12 à 48 rouleaux selon la largeur).',
    popular: true
  },
  {
    id: 'faq-3',
    categoryId: 'sourcing-ordering',
    questionEn: 'Can I place a sample evaluation order before committing to a bulk container procurement?',
    questionFr: 'Puis-je commander des échantillons pour évaluation clinique avant une commande conteneurisée ?',
    answerEn: 'Yes. We encourage healthcare distributors and clinical procurement committees to order evaluation samples or trial units. Diagnostic ultrasound probes can be shipped via express courier (DHL/FedEx) within 3–5 business days for doctor evaluation. Consumable sample packs (cohesive bandages, K-tape, strapping) are also available upon inquiry.',
    answerFr: 'Oui. Nous encourageons les distributeurs et comités médicaux à tester des unités d’évaluation. Les sondes d’échographie peuvent être expédiées par courrier express (DHL/FedEx) sous 3 à 5 jours ouvrés. Des kits d’échantillons pour les consommables de pansement sont également disponibles sur simple demande.',
    popular: false
  },
  {
    id: 'faq-4',
    categoryId: 'sourcing-ordering',
    questionEn: 'How do I submit an official RFQ and how quickly will I receive a formal Proforma Invoice?',
    questionFr: 'Comment soumettre une demande de devis (RFQ) et quel est le délai de réception d’une facture proforma ?',
    answerEn: 'You can submit an inquiry directly through our online RFQ modal or by emailing sales@maxvor.com with your target items, quantities, and destination port. Our export desk reviews all submissions and issues an official bilingual Proforma Invoice with itemized FOB/CIF pricing, packing specifications, and lead times within 12 business hours.',
    answerFr: 'Vous pouvez soumettre votre demande via notre formulaire de devis en ligne ou par e-mail à sales@maxvor.com en précisant les références, quantités et port de destination. Notre service export examine votre dossier et émet une facture proforma bilingue chiffrée en FOB/CIF sous 12 heures ouvrées.',
    popular: true
  },
  {
    id: 'faq-5',
    categoryId: 'sourcing-ordering',
    questionEn: 'Are medical products fully inspected and lot-tested prior to international container dispatch?',
    questionFr: 'Les produits médicaux sont-ils inspectés et testés par lot avant l’expédition internationale ?',
    answerEn: 'Yes. Every production batch undergoes strict quality control and visual lot inspection prior to export packaging. Electronic ultrasound transducers undergo continuous acoustic beam calibration and IPX7 immersion testing, while clinical consumables are verified for tensile elasticity, sterile packaging integrity, and adhesive shear strength.',
    answerFr: 'Oui. Chaque lot de fabrication fait l’objet d’un contrôle qualité rigoureux avant conditionnement. Les transducteurs d’échographie subissent un calibrage acoustique et un test d’étanchéité IPX7, tandis que les consommables sont contrôlés en élasticité, intégrité d’emballage et force d’adhérence.',
    popular: false
  },

  // 2. Regulatory & Certifications
  {
    id: 'faq-6',
    categoryId: 'compliance-regulatory',
    questionEn: 'What quality certifications and compliance documentation accompany MAXVOR products?',
    questionFr: 'Quelles certifications de qualité et documents de conformité accompagnent les produits MAXVOR ?',
    answerEn: 'All products supplied through MAXVOR comply with internationally recognized healthcare manufacturing standards. Our partner production facilities operate under ISO 13485:2016 quality management systems. Equipment and consumables carry official CE Declarations of Conformity (DoC), IEC 60601-1 electrical safety test reports, and RoHS compliance certificates.',
    answerFr: 'Tous les produits distribués par MAXVOR respectent les normes internationales de fabrication médicale. Nos unités de production partenaires sont certifiées ISO 13485:2016. Les équipements et consommables disposent de Déclarations de Conformité CE (DoC), de rapports de sécurité électrique IEC 60601-1 et de certificats RoHS.',
    popular: true
  },
  {
    id: 'faq-7',
    categoryId: 'compliance-regulatory',
    questionEn: 'Do you provide complete technical registration dossiers for local Ministry of Health approvals?',
    questionFr: 'Fournissez-vous des dossiers techniques complets pour l’enregistrement auprès des Ministères de la Santé ?',
    answerEn: 'Yes. We actively assist overseas buyers with local medical device registration requirements (e.g. PPB in Kenya, TMDA in Tanzania, DPML in Cameroon, Rwanda FDA, etc.). We provide authorized technical files, manufacturer Letter of Authorization (LoA), Device Master Records, risk management reports, and free-sale certificates.',
    answerFr: 'Oui. Nous assistons activement nos acheteurs pour l’enregistrement local auprès des autorités sanitaires (PPB au Kenya, TMDA en Tanzanie, DPML au Cameroun, Rwanda FDA, etc.). Nous fournissons les dossiers techniques complets, lettres d’autorisation de distribution, rapports de gestion des risques et certificats de vente libre.',
    popular: false
  },
  {
    id: 'faq-8',
    categoryId: 'compliance-regulatory',
    questionEn: 'Can you provide Certificate of Origin (CO) and Certificate of Analysis (COA) for customs clearance?',
    questionFr: 'Pouvez-vous fournir un Certificat d’Origine (CO) et un Certificat d’Analyse (COA) pour le dédouanement ?',
    answerEn: 'Yes. Standard export document packages include an official Chamber of Commerce Certificate of Origin (CO / Form F / Form E), Certificate of Analysis (COA) for lot tracking, verified Packing Lists, Commercial Invoices, and original Ocean Bills of Lading (B/L) or Air Waybills (AWB).',
    answerFr: 'Oui. Les dossiers standards d’exportation incluent le Certificat d’Origine officiel (CO / Form E / Form F), le Certificat d’Analyse (COA) par lot, la liste de colisage détaillée, la facture commerciale et les connaissements maritimes (B/L) ou lettres de transport aérien (AWB).',
    popular: false
  },

  // 3. Shipping, Freight & Customs
  {
    id: 'faq-9',
    categoryId: 'shipping-logistics',
    questionEn: 'Which countries and geographical regions does MAXVOR ship to?',
    questionFr: 'Vers quels pays et régions géographiques MAXVOR expédie-t-il ses produits ?',
    answerEn: 'We deliver globally to healthcare distributors, hospitals, and clinic networks. Our primary export corridors include East, West, and Central Africa (Kenya, Tanzania, Cameroon, Côte d’Ivoire, Senegal, Rwanda, DRC, Ghana), Southeast Asia, the Middle East, Latin America, and Europe.',
    answerFr: 'Nous livrons dans le monde entier aux distributeurs de santé, hôpitaux et réseaux de cliniques. Nos principaux corridors d’exportation comprennent l’Afrique de l’Est, de l’Ouest et Centrale (Kenya, Tanzanie, Cameroun, Côte d’Ivoire, Sénégal, Rwanda, RDC, Ghana), l’Asie du Sud-Est, le Moyen-Orient et l’Europe.',
    popular: true
  },
  {
    id: 'faq-10',
    categoryId: 'shipping-logistics',
    questionEn: 'What international commercial trade terms (Incoterms) do you support?',
    questionFr: 'Quels incoterms commerciaux internationaux prenez-vous en charge ?',
    answerEn: 'We support standard Incoterms 2020: FOB (Free on Board at major China seaports including Shanghai, Ningbo, Shenzhen, Guangzhou), CIF (Cost, Insurance & Freight to your destination seaport), CFR (Cost & Freight), and EXW (Ex Works). Air freight is coordinated via CPT or DAP directly to your international airport.',
    answerFr: 'Nous prenons en charge les Incoterms 2020 standards : FOB (ports de Shanghai, Ningbo, Shenzhen, Guangzhou), CIF (Coût, Assurance et Fret jusqu’à votre port de destination), CFR et EXW. Les expéditions aériennes sont organisées en CPT ou DAP directement vers votre aéroport international.',
    popular: false
  },
  {
    id: 'faq-11',
    categoryId: 'shipping-logistics',
    questionEn: 'What are the typical lead times and delivery turnaround periods?',
    questionFr: 'Quels sont les délais de fabrication et de livraison habituels ?',
    answerEn: 'Standard in-stock diagnostic probes and core consumable specifications dispatch within 3–7 business days. Custom configurations or full 20ft/40ft container consignments typically require 15–25 business days for manufacturing, inspection, and vessel booking. Transit time ranges from 4–7 days for air express and 25–40 days for ocean freight depending on destination port.',
    answerFr: 'Les sondes de diagnostic en stock et consommables standards sont expédiés sous 3 à 7 jours ouvrés. Les commandes de conteneurs complets de 20 ou 40 pieds nécessitent généralement 15 à 25 jours pour la production et l’empotage. Les délais d’acheminement sont de 4 à 7 jours par avion et de 25 à 40 jours par voie maritime selon la destination.',
    popular: false
  },
  {
    id: 'faq-12',
    categoryId: 'shipping-logistics',
    questionEn: 'How are sensitive electronic medical devices and sterile consumables packaged for export transit?',
    questionFr: 'Comment les appareils électroniques sensibles et consommables sont-ils emballés pour le transport ?',
    answerEn: 'All products are packaged to withstand long-haul international shipping. Ultrasound probes are encased in shock-absorbing custom aluminum alloy cases and multi-layer EVA foam inserts. Consumables are vacuum-sealed in moisture-proof polybags and packed into reinforced 5-ply corrugated export master cartons with palletized shrink-wrapping.',
    answerFr: 'Tous les produits sont conditionnés pour résister aux transports longue distance. Les sondes d’échographie sont protégées dans des valises en aluminium avec mousse EVA thermoformée. Les consommables sont emballés sous film étanche dans des cartons d’exportation renforcés à double cannelure et palettisés.',
    popular: false
  },

  // 4. Pricing & Commercial Terms
  {
    id: 'faq-13',
    categoryId: 'pricing-terms',
    questionEn: 'What international payment methods and commercial terms are accepted?',
    questionFr: 'Quels modes de paiement et modalités commerciales sont acceptés ?',
    answerEn: 'We accept international Bank Telegraphic Transfer (T/T), with standard terms of 30% advance deposit upon Proforma confirmation and 70% balance prior to shipment (or against Bill of Lading copy). For high-volume institutional tenders, irrevocable Documentary Letters of Credit (L/C at sight) from prime international banks can be accommodated.',
    answerFr: 'Nous acceptons les virements bancaires internationaux (T/T), avec un acompte standard de 30 % à la confirmation de la proforma et le solde de 70 % avant expédition (ou contre copie du B/L). Pour les appels d’offres institutionnels majeurs, les Lettres de Crédit irrévocables (L/C à vue) sont acceptées.',
    popular: true
  },
  {
    id: 'faq-14',
    categoryId: 'pricing-terms',
    questionEn: 'Do you offer tiered pricing discounts for bulk hospital supply contracts and distributors?',
    questionFr: 'Proposez-vous des remises tarifaires dégressives pour les commandes groupées et distributeurs ?',
    answerEn: 'Yes. We provide transparent volume-tiered pricing schedules. As order volumes scale to master-case, multi-pallet, or container loads, unit prices decrease significantly. Contact our B2B export desk for customized tender price matrices.',
    answerFr: 'Oui. Nous proposons des grilles tarifaires dégressives selon le volume. Les prix unitaires sont optimisés pour les commandes par palettes ou conteneurs complets. Contactez notre service export pour obtenir une matrice de prix adaptée à votre marché.',
    popular: false
  },
  {
    id: 'faq-15',
    categoryId: 'pricing-terms',
    questionEn: 'How long is a formal proforma quote valid?',
    questionFr: 'Quelle est la durée de validité d’une facture proforma officielle ?',
    answerEn: 'Standard Proforma Invoices issued by MAXVOR are valid for 30 calendar days. Due to international raw material index variations and sea freight rate fluctuations, freight quotes can be refreshed upon final container booking.',
    answerFr: 'Les factures proforma standards émises par MAXVOR sont valables 30 jours calendaires. En raison des fluctuations des taux de fret maritime et des matières premières, la ligne de transport peut être réactualisée lors du booking final.',
    popular: false
  },

  // 5. Technical Support & SOPs
  {
    id: 'faq-16',
    categoryId: 'technical-support',
    questionEn: 'What technical support, driver software, and user manuals are provided for ultrasound systems?',
    questionFr: 'Quels supports techniques, pilotes logiciels et manuels d’utilisation fournissez-vous pour les échographes ?',
    answerEn: 'Each ultrasound device includes comprehensive multilingual user manuals (English and French), quick-start scanning guides, and USB Type-C companion applications for Windows PC/tablets and Android smartphones. Our online knowledge base (Blogs section) provides in-depth clinical SOPs covering patient preparation, acoustic gel application, and 8-segment TGC gain calibration.',
    answerFr: 'Chaque échographe portable est accompagné d’un manuel d’utilisation multilingue (anglais et français), d’un guide de démarrage rapide et des applications logicielles pour PC/tablettes Windows et smartphones Android. Notre section Blogs propose également des guides cliniques détaillés (SOPs, réglages TGC, désinfection).',
    popular: true
  },
  {
    id: 'faq-17',
    categoryId: 'technical-support',
    questionEn: 'What is the standard warranty period for diagnostic devices?',
    questionFr: 'Quelle est la durée de garantie standard sur les appareils de diagnostic ?',
    answerEn: 'MAXVOR handheld ultrasound probes and diagnostic equipment come with a standard 12-Month Manufacturer Warranty covering electronic defects, transducer beamformer malfunctions, and manufacturing flaws under normal clinical operating conditions.',
    answerFr: 'Les sondes d’échographie portables et équipements de diagnostic MAXVOR bénéficient d’une garantie fabricant standard de 12 mois couvrant les composants électroniques et défauts de fabrication dans des conditions normales d’utilisation.',
    popular: false
  },
  {
    id: 'faq-18',
    categoryId: 'technical-support',
    questionEn: 'What is the standard procedure if goods arrive damaged or defective?',
    questionFr: 'Quelle est la procédure en cas d’avarie de transport ou de produit défectueux à l’arrivée ?',
    answerEn: 'All international shipments are covered under comprehensive marine transit cargo insurance when booked under CIF terms. In the rare event of transit damage, clients notify our support desk within 7 days of customs receipt with photographic evidence. We immediately coordinate insurance claims and dispatch replacement units or credit vouchers.',
    answerFr: 'Toutes les expéditions maritimes et aériennes en CIF sont couvertes par une assurance transport tous risques. En cas d’avarie, le client signale le dommage sous 7 jours avec photos justificatives. Nous organisons immédiatement le remplacement des unités ou l’émission d’un avoir commercial.',
    popular: false
  }
];
