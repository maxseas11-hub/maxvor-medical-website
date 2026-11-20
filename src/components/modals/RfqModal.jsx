import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, FileText, Building2, Mail, Phone, Globe, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { addLead } from '../../data/adminInitialData';

export default function RfqModal({ isOpen, onClose, initialProduct = null, initialCategory = null }) {
  const { t, categories, lang } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    country: '',
    quantity: 'Not Specified (Flexible)',
    selectedCategories: initialCategory ? [initialCategory] : ['ultrasound-convex-color'],
    requiredCertifications: ['CE Directive', 'ISO 13485'],
    customOem: false,
    specRequirements: initialProduct ? `Inquiring for: ${initialProduct.name || initialProduct}` : ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inquiryId, setInquiryId] = useState('');

  const certOptions = ['CE Directive', 'ISO 13485', 'IEC 60601 Safety', 'Other'];

  if (!isOpen) return null;

  const handleCategoryToggle = (catId) => {
    setFormData(prev => {
      const exists = prev.selectedCategories.includes(catId);
      if (exists) {
        if (prev.selectedCategories.length === 1) return prev;
        return { ...prev, selectedCategories: prev.selectedCategories.filter(id => id !== catId) };
      } else {
        return { ...prev, selectedCategories: [...prev.selectedCategories, catId] };
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
      Company_Name: formData.companyName || 'N/A',
      Country: formData.country,
      Estimated_Volume: formData.quantity,
      Interested_Categories: formData.selectedCategories.join(', '),
      Required_Certifications: formData.requiredCertifications.length > 0 ? formData.requiredCertifications.join(', ') : 'None Specified',
      Packaging_Requirement: formData.customOem ? 'Custom Export Packaging & Labeling' : 'Standard Export Supply',
      Specific_Requirements: formData.specRequirements || 'Standard catalog request'
    };

    const leadRecord = {
      id: newInquiryId,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
      buyerName: formData.fullName,
      companyName: formData.companyName || 'N/A',
      email: formData.workEmail,
      phone: formData.phone || 'N/A',
      country: formData.country,
      productName: initialProduct?.name || formData.selectedCategories.join(', '),
      category: formData.selectedCategories[0] || 'general',
      quantity: formData.quantity,
      requiredCertifications: formData.requiredCertifications.length > 0 ? formData.requiredCertifications.join(', ') : 'None Specified',
      message: formData.specRequirements || 'Standard catalog request',
      status: 'New',
      priority: 'High',
      notes: 'Submitted via Website RFQ Modal'
    };
    addLead(leadRecord);

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

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-border-soft overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-canvas-alt border-b border-border-soft flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-secondary/10 text-secondary">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-primary">
                {t('rfqModalTitle')}
              </h3>
              <p className="text-xs text-muted">
                {lang === 'fr' ? 'Équipe Exportation China • Réponse officielle sous 12h' : 'MAXVOR Export Desk • Direct Response within 12h'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-muted hover:text-primary hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-primary">
                {lang === 'fr' ? 'Demande de Devis Enregistrée !' : 'RFQ Inquiry Successfully Submitted!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                {t('formSuccessMsg')}
              </p>
              <div className="p-4 rounded-2xl bg-canvas border border-border-soft text-xs text-slate-700 max-w-sm mx-auto space-y-1">
                <div>{lang === 'fr' ? 'Numéro de Référence RFQ :' : 'Inquiry Tracking ID:'} <strong className="text-primary font-mono">{inquiryId}</strong></div>
                <div>{lang === 'fr' ? 'Email Destinataire :' : 'Confirmation sent to:'} <strong>{formData.workEmail}</strong></div>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-secondary text-white text-xs font-bold"
              >
                {t('closeModal')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>{errorMessage} (Note: Offline / Local mode recorded)</span>
                </div>
              )}

              {/* Personal Details */}
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-border text-xs text-primary focus:outline-hidden focus:border-secondary"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-border text-xs text-primary focus:outline-hidden focus:border-secondary"
                  />
                </div>
              </div>

              {/* Company & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {t('formCompany')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Hospital / Distributor Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-border text-xs text-primary focus:outline-hidden focus:border-secondary"
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
                    placeholder="e.g. Kenya, Cameroon, Tanzania, Rwanda"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-border text-xs text-primary focus:outline-hidden focus:border-secondary"
                  />
                </div>
              </div>

              {/* Categories of Interest */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  {lang === 'fr' ? 'Catégories d’Échographes d’Intérêt :' : 'Diagnostic Product Lines of Interest:'}
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
                            : 'bg-canvas border-border-soft text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate pr-1">{cat.shortName}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {t('formMessage')}
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.specRequirements}
                  onChange={(e) => setFormData({ ...formData, specRequirements: e.target.value })}
                  placeholder={lang === 'fr' ? 'Précisez les modèles souhaités, quantités cibles, exigences de livraison ou projet d’appel d’offres...' : 'Please specify required probe models, quantity estimates, delivery destination, or tender registration requirements...'}
                  className="w-full p-3.5 rounded-xl bg-canvas border border-border text-xs text-primary focus:outline-hidden focus:border-secondary"
                />
              </div>

              {/* Submit Button */}
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

      </div>
    </div>
  );
}
