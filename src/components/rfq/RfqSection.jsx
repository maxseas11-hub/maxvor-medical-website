import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  Phone, 
  Building2, 
  Globe, 
  UploadCloud,
  HelpCircle,
  Loader2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';

export default function RfqSection() {
  const { t, categories, lang } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    country: '',
    orderType: 'Not Specified (Flexible)',
    selectedCategories: ['ultrasound-convex-color', 'ultrasound-linear-color'],
    requiredCertifications: ['CE Directive', 'ISO 13485'],
    specRequirements: '',
    isCustomOem: false
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inquiryId, setInquiryId] = useState('');

  const certOptions = ['CE Directive', 'ISO 13485', 'IEC 60601 Safety', 'Other'];

  const handleCategoryToggle = (id) => {
    setFormData(prev => {
      const exists = prev.selectedCategories.includes(id);
      if (exists) {
        if (prev.selectedCategories.length === 1) return prev;
        return { ...prev, selectedCategories: prev.selectedCategories.filter(c => c !== id) };
      } else {
        return { ...prev, selectedCategories: [...prev.selectedCategories, id] };
      }
    });
  };

  const handleCertToggle = (cert) => {
    setFormData(prev => {
      const exists = prev.requiredCertifications.includes(cert);
      if (exists) {
        return { ...prev, requiredCertifications: prev.requiredCertifications.filter(c => c !== cert) };
      } else {
        return { ...prev, requiredCertifications: [...prev.requiredCertifications, cert] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const newInquiryId = 'RFQ-' + new Date().getFullYear() + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + Math.floor(1000 + Math.random() * 9000);
    setInquiryId(newInquiryId);

    const payload = {
      Inquiry_ID: newInquiryId,
      Buyer_Name: formData.fullName,
      Buyer_Email: formData.workEmail,
      Buyer_Phone: formData.phone || 'N/A',
      Company_Name: formData.company || 'N/A',
      Country: formData.country,
      Estimated_Volume: formData.orderType,
      Interested_Categories: formData.selectedCategories.join(', '),
      Required_Certifications: formData.requiredCertifications.length > 0 ? formData.requiredCertifications.join(', ') : 'None Specified',
      Packaging_Requirement: formData.isCustomOem ? 'Custom Export Packaging & Labeling' : 'Standard Export Supply',
      Specific_Requirements: formData.specRequirements || 'Standard catalog request'
    };

    try {
      const localRes = await fetch('/api/send-rfq.ashx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const result = await localRes.json().catch(() => ({ success: false, error: 'Network response error' }));
      if (localRes.ok && result && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result?.error || result?.message || 'SMTP Connection Error');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Server connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="rfq-section" 
      className="py-12 md:py-20 bg-canvas rounded-3xl border border-border-soft p-6 sm:p-12 shadow-card"
      data-component="rfq-interactive-section"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary px-3.5 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
            {lang === 'fr' ? 'SUPPORT AUX ACHATS' : 'PURCHASING SUPPORT'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {lang === 'fr' ? 'Vous Recherchez des Produits Médicaux Spécifiques ?' : 'Looking for Specific Medical Products?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'fr' 
              ? 'Que vous recherchiez un produit, une marque ou un modèle particulier, MAXVOR est là pour vous aider. Dites-nous ce dont vous avez besoin. Nous assurons l’assistance au sourcing, les demandes techniques et les cotations pour achats unitaires ou commandes groupées.'
              : 'Whether you\'re looking for a particular product, brand, or model, MAXVOR is here to help. Tell us what you need. We provide product inquiries, sourcing assistance, and quotations for individual purchases and larger orders.'}
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-border-soft shadow-xs space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {lang === 'fr' ? 'Demande de Cotation Enregistrée avec Succès !' : 'RFQ Inquiry Successfully Submitted!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              {t('formSuccessMsg')}
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-border-soft text-xs text-slate-700 max-w-sm mx-auto space-y-1">
              <div>{lang === 'fr' ? 'Numéro de Référence :' : 'Tracking ID:'} <strong className="text-slate-900 font-mono">{inquiryId}</strong></div>
              <div>{lang === 'fr' ? 'Email Destinataire :' : 'Confirmation:'} <strong>{formData.workEmail}</strong></div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  workEmail: '',
                  phone: '',
                  company: '',
                  country: '',
                  orderType: 'Not Specified (Flexible)',
                  selectedCategories: ['ultrasound-convex-color'],
                  requiredCertifications: ['CE Directive', 'ISO 13485'],
                  specRequirements: '',
                  isCustomOem: false
                });
              }}
              className="px-6 py-2.5 rounded-xl bg-secondary text-white text-xs font-bold"
            >
              {lang === 'fr' ? 'Soumettre une Autre Demande' : 'Submit Another RFQ'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-border-soft shadow-xs space-y-6">
            
            {errorMessage && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                <span>{errorMessage} (Note: Offline / Local mode recorded)</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {t('formFullName')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Dr. Jean Dupont / David Mutua"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-900 focus:outline-hidden focus:border-secondary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {t('formEmail')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="e.g. procurement@hospital.org"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-900 focus:outline-hidden focus:border-secondary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {t('formCompany')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Hospital / Distributor Name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-900 focus:outline-hidden focus:border-secondary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {t('formCountry')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. Cameroon, Kenya, Tanzania, Rwanda"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-900 focus:outline-hidden focus:border-secondary"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                {lang === 'fr' ? 'Catégories d’Équipements Sélectionnées :' : 'Selected Equipment Lines:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {categories.map((cat) => {
                  const isSelected = formData.selectedCategories.includes(cat.id);
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => handleCategoryToggle(cat.id)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? 'bg-secondary/10 border-secondary text-secondary'
                          : 'bg-slate-50 border-border-soft text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate pr-1">{cat.shortName}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                {t('formMessage')}
              </label>
              <textarea
                rows={3}
                required
                value={formData.specRequirements}
                onChange={(e) => setFormData({ ...formData, specRequirements: e.target.value })}
                placeholder={lang === 'fr' ? 'Détaillez vos besoins : modèles de sondes, quantités prévues, pays de destination, exigences d’appels d’offres...' : 'Detail your required probe models, estimated order volume, delivery destination, or tender registration criteria...'}
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-900 focus:outline-hidden focus:border-secondary"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t('formSubmitting')}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t('formSubmitBtn')}</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
