import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Plus, 
  Minus, 
  FileText, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';

export default function HomeFaq({ onOpenRfq }) {
  const { lang, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: lang === 'fr' 
        ? 'Puis-je commander des produits de différentes catégories dans une seule expédition ?' 
        : 'Can I combine multiple product categories into a single consolidated shipment?',
      a: lang === 'fr'
        ? 'Oui, absolument. L’un des principaux avantages de MAXVOR est notre capacité à regrouper des sondes d’échographie diagnostiques, des bandages cohésifs, des bandes de kinésiologie et d’autres consommables cliniques dans une seule commande avec un dédouanement et une documentation consolidés.'
        : 'Yes, absolutely. One of MAXVOR’s primary strengths is multi-category supply consolidation. You can combine point-of-care ultrasound diagnostic probes, medical cohesive bandages, kinesiology tapes, and emergency consumables into a single procurement order with unified export documentation.'
    },
    {
      q: lang === 'fr'
        ? 'Quelles sont les quantités minimales de commande (MOQ) applicables ?'
        : 'What are the Minimum Order Quantities (MOQ) for equipment and consumables?',
      a: lang === 'fr'
        ? 'Pour les sondes d’échographie diagnostiques et les dispositifs médicaux, le MOQ commence à partir de 1 unité (permettant les tests cliniques et commandes initiales). Pour les consommables de soins et pansements, le MOQ standard est de 1 carton par modèle.'
        : 'For point-of-care ultrasound diagnostic devices and equipment, our MOQ starts from 1 Unit (facilitating pilot evaluation and clinic trials). For medical bandages and consumables, our standard MOQ is 1 Carton per specification.'
    },
    {
      q: lang === 'fr'
        ? 'Quels documents d’exportation et de conformité fournissez-vous pour les appels d’offres ?'
        : 'What export and regulatory documents are provided for tender registration?',
      a: lang === 'fr'
        ? 'Nous fournissons des dossiers d’exportation complets comprenant le Certificat d’Origine (CO), la Déclaration de Conformité (DoC), les rapports de sécurité électrique IEC 60601, les fiches techniques multilingues (anglais / français) et les factures proforma officielles.'
        : 'We provide complete export documentation packages including Certificate of Origin (CO), Declaration of Conformity (DoC), IEC 60601 electrical safety reports, bilingual specification sheets (English/French), and formal Proforma Invoices.'
    },
    {
      q: lang === 'fr'
        ? 'Quel est le délai de réponse pour l’obtention d’un devis officiel (RFQ) ?'
        : 'How fast can I receive a formal Proforma / Quotation sheet?',
      a: lang === 'fr'
        ? 'Notre équipe commerciale export examine chaque demande dès réception et s’engage à transmettre une cotation chiffrée détaillée sous 12 heures ouvrées, avec les fiches techniques associées.'
        : 'Our international trade and sourcing desk reviews submissions upon receipt and delivers comprehensive quotation sheets (FOB/CIF) and product technical brochures within 12 business hours.'
    },
    {
      q: lang === 'fr'
        ? 'Livrez-vous les marchés hospitaliers en Afrique et à l’international ?'
        : 'Do you deliver to healthcare markets across Africa and internationally?',
      a: lang === 'fr'
        ? 'Oui. Nous expédions régulièrement par fret maritime conteneurisé ou fret aérien express vers le Cameroun, la Côte d’Ivoire, le Sénégal, la RDC, le Rwanda, le Kenya, la Tanzanie et de nombreux autres pays.'
        : 'Yes. We regularly coordinate containerized ocean freight and international air express shipments to healthcare distributors and hospitals across East, West, and Central Africa as well as international destinations.'
    }
  ];

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-canvas border-b border-border-soft" data-component="home-faq">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Header */}
        <SectionHeading
          badge={lang === 'fr' ? 'Foire Aux Questions' : 'Frequently Asked Questions'}
          title={lang === 'fr' ? 'Questions Fréquentes sur l’Approvisionnement' : 'Common Sourcing & Procurement Questions'}
          subtitle={lang === 'fr' ? 'Tout ce que vous devez savoir sur notre modèle de fourniture, les volumes de commande, les délais et la documentation export.' : 'Key details regarding our multi-category sourcing model, order quantities, delivery turnaround, and export documentation.'}
        />

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-border-soft shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-transform shrink-0 ${isOpen ? 'bg-secondary text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-border-soft/60">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Tip */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            {lang === 'fr' ? 'Vous avez une question spécifique sur un appel d’offres ou un produit ?' : 'Have a specific question about an upcoming tender or product requirement?'}{' '}
            <button
              onClick={() => onOpenRfq()}
              className="text-secondary font-bold underline hover:text-secondary-hover ml-1 inline-flex items-center gap-1"
            >
              <span>{lang === 'fr' ? 'Contactez Notre Équipe' : 'Contact Our Sourcing Team'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
