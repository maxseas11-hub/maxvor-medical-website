import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  Microscope, 
  CheckCircle2, 
  Download, 
  Building2, 
  Globe2,
  FileText
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from '../components/common/SectionHeading';
import { usePageSeo } from '../hooks/usePageSeo';

export default function CertificationsPage({ onSelectCert, onOpenRfq }) {
  usePageSeo({ pageKey: 'certifications' });
  const { t, lang } = useLanguage();

  const certificationsList = [
    {
      code: 'ISO 13485',
      title: t('isoCardTitle'),
      scope: t('isoCardDesc'),
      authority: 'Medical Devices Quality Management System (QMS)',
      status: lang === 'fr' ? 'Conforme & Audité' : 'Factory Audited',
      badgeColor: 'border-blue-200 bg-blue-50 text-blue-800'
    },
    {
      code: 'CE Directives',
      title: t('ceCardTitle'),
      scope: t('ceCardDesc'),
      authority: 'European Safety Directives (EMC / LVD / RoHS)',
      status: lang === 'fr' ? 'Dossier Technique Validé' : 'Safety Verified',
      badgeColor: 'border-emerald-200 bg-emerald-50 text-emerald-800'
    },
    {
      code: 'IEC 60601-1 / 60601-2-37',
      title: t('iecCardTitle'),
      scope: t('iecCardDesc'),
      authority: 'Medical Electrical & Acoustic Output Safety Testing',
      status: lang === 'fr' ? 'Rapports de Laboratoire' : 'Lab Tested',
      badgeColor: 'border-purple-200 bg-purple-50 text-purple-800'
    },
    {
      code: 'Customs & Tender Dossiers',
      title: t('dossierCardTitle'),
      scope: t('dossierCardDesc'),
      authority: 'Certificate of Origin (CO), DoC, COA Factory Test Reports',
      status: lang === 'fr' ? 'Prêt pour l’Afrique' : 'Export Ready',
      badgeColor: 'border-amber-200 bg-amber-50 text-amber-800'
    }
  ];

  return (
    <div className="w-full bg-canvas min-h-screen py-12 md:py-20" data-component="certifications-page">
      <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 space-y-16">
        
        {/* Header */}
        <SectionHeading
          badge={lang === 'fr' ? 'Assurance Qualité & Conformité Export' : 'Quality Assurance & Export Compliance'}
          title={t('certPageTitle')}
          subtitle={t('certPageSubtitle')}
        />

        {/* 4 Primary Compliance Documentation Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl border border-border-soft shadow-card space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                    {cert.code}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {cert.scope}
                </p>

                <div className="p-3.5 rounded-xl bg-canvas border border-border-soft text-xs space-y-1">
                  <div className="text-muted">{lang === 'fr' ? 'Périmètre / Autorité de Référence :' : 'Documentation / Authority Scope:'}</div>
                  <div className="font-bold text-primary">{cert.authority}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border-soft flex items-center justify-between">
                <button
                  onClick={() => onSelectCert && onSelectCert(cert)}
                  className="text-xs font-bold text-secondary hover:text-secondary-hover"
                >
                  {lang === 'fr' ? 'Voir Détails & Fiches →' : 'View Details & Scope →'}
                </button>
                <button
                  onClick={() => onOpenRfq()}
                  className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-light transition-colors"
                >
                  {lang === 'fr' ? 'Demander les Dossiers' : 'Request Technical Files'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Management System (QMS) Pillars */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 shadow-elevated">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {lang === 'fr' ? 'Piliers de Production' : 'Factory Quality Assurance'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-2">
              {lang === 'fr' ? 'Contrôles de Précision par Lot & Traçabilité Complète' : 'Precision Lot-by-Lot Inspection & Full Batch Traceability'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              {lang === 'fr' ? 'Chaque sonde d’échographie fait l’objet de tests diélectriques individuels, de vérification de faisceau acoustique et de calibration logicielle avant emballage.' : 'Every ultrasound transducer undergoes individual dielectric withstand tests, acoustic beam profile verification, and companion software calibration prior to packaging.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Microscope className="w-6 h-6 text-accent" />
              <h4 className="font-bold text-sm">{lang === 'fr' ? 'Test d’Émission Acoustique' : 'Acoustic Beam Testing'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{lang === 'fr' ? 'Vérification de la sensibilité du transducteur et du rapport signal/bruit.' : 'Transducer sensitivity, focal depth accuracy, and signal-to-noise ratio verification.'}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <h4 className="font-bold text-sm">{lang === 'fr' ? 'Sécurité Électrique IEC 60601' : 'Electrical Safety (IEC 60601)'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{lang === 'fr' ? 'Tests de rigidité diélectrique et de courant de fuite patient.' : 'Dielectric withstand, earth leakage, and patient auxiliary current verification.'}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Building2 className="w-6 h-6 text-accent" />
              <h4 className="font-bold text-sm">{lang === 'fr' ? 'Environnement Contrôlé' : 'Cleanroom Assembly'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{lang === 'fr' ? 'Assemblage sous environnement exempt de poussière et scellage étanche IPX7.' : 'Precision micro-circuit soldering and watertight transducer housing assembly.'}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Globe2 className="w-6 h-6 text-accent" />
              <h4 className="font-bold text-sm">{lang === 'fr' ? 'Support Export Bilingue' : 'Bilingual Export Support'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{lang === 'fr' ? 'Dossiers complets certifiés en anglais et français pour les douanes africaines.' : 'Certified English and French documentation dossiers for African import authorities.'}</p>
            </div>
          </div>
        </div>

        {/* Real Quality Testing & Verification Laboratory Photos */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-1.5">
                <Microscope className="w-4 h-4" />
                {lang === 'fr' ? 'PROCÉDURES D’ESSAIS & VÉRIFICATION VISUELLE' : 'INSPECTION & TESTING BENCHES'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'fr' ? 'Processus de Contrôle Qualité en Laboratoire' : 'Laboratory Testing & Quality Verification Workflows'}
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              100% Pre-Shipment Functional & Safety Testing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl border border-border-soft overflow-hidden shadow-card p-4 space-y-4">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden relative">
                <img 
                  src="/assets/images/cat-ultrasound-matrix.png" 
                  alt="Acoustic Beam Testing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  STEP 01
                </div>
              </div>
              <div className="space-y-1.5 px-2">
                <h4 className="font-bold text-sm text-slate-900">
                  {lang === 'fr' ? 'Étalonnage Acoustique sur Fantôme' : 'Acoustic Transducer Calibration'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'fr' 
                    ? 'Scan systématique sur fantôme de tissus pour vérifier la résolution spatiale axiale et latérale.'
                    : 'Systematic tissue-mimicking phantom scanning verifying axial and lateral spatial resolution.'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-border-soft overflow-hidden shadow-card p-4 space-y-4">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden relative">
                <img 
                  src="/assets/images/hero-cleanroom.png" 
                  alt="Cleanroom Sterile Packaging" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  STEP 02
                </div>
              </div>
              <div className="space-y-1.5 px-2">
                <h4 className="font-bold text-sm text-slate-900">
                  {lang === 'fr' ? 'Conditionnement Stérile en Salle Blanche' : 'Cleanroom Sterile Packaging'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'fr' 
                    ? 'Blister scellé sous atmosphère contrôlée de classe 100 000 avec indicateurs de stérilité.'
                    : 'Class 100,000 controlled environment blister sealing with chemical sterilization indicators.'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-border-soft overflow-hidden shadow-card p-4 space-y-4">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden relative">
                <img 
                  src="/assets/images/cat-bandages-matrix.png" 
                  alt="Mechanical Tensile Testing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  STEP 03
                </div>
              </div>
              <div className="space-y-1.5 px-2">
                <h4 className="font-bold text-sm text-slate-900">
                  {lang === 'fr' ? 'Tests Physiques & Résidus OE' : 'Tensile & EO Residual Analysis'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'fr' 
                    ? 'Contrôle dynamométrique d’élasticité et vérification chromatographique des résidus gazeux.'
                    : 'Electronic dynamometer tensile testing and chromatographic residual gas analysis per lot.'}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
