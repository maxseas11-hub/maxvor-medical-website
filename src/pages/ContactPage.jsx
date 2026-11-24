import React from 'react';
import { 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  CheckCircle2,
  Building2,
  Globe2,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from '../components/common/SectionHeading';
import RfqSection from '../components/rfq/RfqSection';
import { usePageSeo } from '../hooks/usePageSeo';

export default function ContactPage() {
  usePageSeo({ pageKey: 'contact' });
  const { t, lang } = useLanguage();

  const faqs = [
    {
      q: lang === 'fr' ? 'Quel est le délai pour recevoir une cotation proforma officielle ?' : 'How fast can I receive a formal quotation and pricing?',
      a: lang === 'fr' ? 'Notre équipe export analyse vos besoins dès réception et transmet une offre chiffrée détaillée (FOB / CIF) sous 12 heures ouvrées.' : 'Our international trade and regulatory team reviews inquiries upon submission and delivers formal Proforma / FOB / CIF quotation sheets within 12 business hours.'
    },
    {
      q: lang === 'fr' ? 'MAXVOR fournit-il des échantillons de validation avant commande en gros ?' : 'Can MAXVOR provide evaluation samples before bulk orders?',
      a: lang === 'fr' ? 'Oui. Nous fournissons des unités d’échantillons complètes de sondes d’échographie pour essais cliniques et validation distributeur, avec expédition par coursier express.' : 'Yes. We provide sample units of handheld ultrasound scanners for institutional testing and client validation via international express courier.'
    },
    {
      q: lang === 'fr' ? 'Proposez-vous l’intégration logicielle en français et la documentation personnalisée ?' : 'Do you offer French software integration and tailored export documentation?',
      a: lang === 'fr' ? 'Oui. Le logiciel compagnon intègre nativement le français, avec fiches de conformité multilingues et packaging conforme pour l’exportation.' : 'Yes. The companion ultrasound software natively supports English and French, complete with regulatory documentation and compliant export packaging.'
    },
    {
      q: lang === 'fr' ? 'Quels documents d’exportation et rapports de tests sont fournis ?' : 'Which documentation and test reports are provided?',
      a: lang === 'fr' ? 'Toutes nos expéditions sont accompagnées du Certificat d’Origine (CO), de la Déclaration de Conformité (DoC), des rapports d’essais de sécurité électrique IEC 60601 et des certificats de contrôle qualité par lot.' : 'All shipments are backed by factory quality management standards, CE technical documentation files, IEC 60601 electrical safety reports, and batch Certificates of Inspection.'
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen py-12 md:py-20" data-component="contact-page">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 space-y-16">
        
        {/* Page Top Heading */}
        <SectionHeading
          badge={lang === 'fr' ? 'Support Client & Commandes' : 'Direct Customer & Orders Desk'}
          title={t('contactPageTitle')}
          subtitle={t('contactPageSubtitle')}
        />

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-canvas-alt border border-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-primary">{lang === 'fr' ? 'Email Export Officiel' : 'Official Export Mail'}</h4>
            <p className="text-xs text-muted">{lang === 'fr' ? 'Communication directe avec nos responsables commerciaux internationaux.' : 'Direct communication with international trade sales managers.'}</p>
            <a href="mailto:sales@maxvor.com" className="text-xs font-bold text-secondary hover:underline block pt-1">
              sales@maxvor.com →
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-canvas-alt border border-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-primary">{lang === 'fr' ? 'Engagement Réponse 12h' : '12-Hour Quote SLA'}</h4>
            <p className="text-xs text-muted">{lang === 'fr' ? 'Traitement rapide des devis, factures proforma et estimations de fret.' : 'Rapid turnaround on complete itemized bill of materials and export estimates.'}</p>
            <span className="text-xs font-semibold text-primary block pt-1">{lang === 'fr' ? 'Réponse Garantie' : 'Guaranteed Response'}</span>
          </div>

          <div className="p-6 rounded-2xl bg-canvas-alt border border-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-primary">{lang === 'fr' ? 'Conformité & Dossiers' : 'Quality Compliance'}</h4>
            <p className="text-xs text-muted">{lang === 'fr' ? 'Dossiers complets avec rapports d’essais, directives CE et certificats d’origine.' : 'Full documentation support including factory test reports, CE directives, and export files.'}</p>
            <span className="text-xs font-semibold text-primary block pt-1">{lang === 'fr' ? 'Dossiers Bilingues' : 'Full Technical Files'}</span>
          </div>
        </div>

        {/* Embedded Interactive RFQ Form */}
        <RfqSection />

        {/* Procurement FAQ Section */}
        <div className="bg-canvas-alt rounded-3xl p-8 sm:p-12 border border-border space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> {lang === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
            </span>
            <h3 className="text-2xl font-bold text-primary">
              {lang === 'fr' ? 'Guide d’Achat & Procédure de Commande Grossiste' : 'Wholesale & Procurement Guide'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-border shadow-card space-y-2">
                <h4 className="text-sm font-bold text-primary">{faq.q}</h4>
                <p className="text-xs text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
