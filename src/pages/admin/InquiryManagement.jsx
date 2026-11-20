import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Mail, 
  Phone, 
  Globe, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  Edit3, 
  X, 
  Send,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { exportLeadsToCsv, updateLeadStatus, deleteLead, addLead } from '../../data/adminInitialData';

export default function InquiryManagement({ leads, onRefreshLeads, selectedLeadFromOverview }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [selectedLead, setSelectedLead] = useState(selectedLeadFromOverview || null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Lead Form state
  const [newLeadForm, setNewLeadForm] = useState({
    buyerName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productName: '',
    category: 'point-of-care-ultrasound',
    quantity: '1 Unit',
    requiredCertifications: 'ISO 13485, CE Directive',
    message: '',
    priority: 'Medium'
  });

  const filteredLeads = leads.filter(item => {
    const matchesSearch = 
      item.buyerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    const matchesCategory = categoryFilter === 'ALL' || item.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleStatusChange = (leadId, newStatus) => {
    const updated = updateLeadStatus(leadId, newStatus);
    onRefreshLeads(updated);
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(prev => ({ ...prev, status: newStatus }));
    }
  };

  const handleDelete = (leadId) => {
    if (window.confirm(`Are you sure you want to delete inquiry ${leadId}?`)) {
      const updated = deleteLead(leadId);
      onRefreshLeads(updated);
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead(null);
      }
    }
  };

  const handleCreateManualLead = (e) => {
    e.preventDefault();
    const newId = 'RFQ-' + new Date().getFullYear() + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + Math.floor(1000 + Math.random() * 9000);
    const newRecord = {
      id: newId,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
      ...newLeadForm,
      status: 'New',
      notes: 'Manually logged inquiry lead'
    };

    const updated = addLead(newRecord);
    onRefreshLeads(updated);
    setIsAddModalOpen(false);
    setNewLeadForm({
      buyerName: '',
      companyName: '',
      email: '',
      phone: '',
      country: '',
      productName: '',
      category: 'point-of-care-ultrasound',
      quantity: '1 Unit',
      requiredCertifications: 'ISO 13485, CE Directive',
      message: '',
      priority: 'Medium'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            RFQ Buyer Inquiries & Lead Hub
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Manage inquiries, update procurement statuses, and reply directly to overseas buyers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => exportLeadsToCsv(filteredLeads)}
            className="px-4 py-2.5 rounded-xl bg-white border border-border-soft hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-secondary" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Log Manual RFQ</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-border-soft shadow-xs flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-grow w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by buyer name, company, email, country, product, RFQ ID..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-border-soft text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-secondary focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Filter className="w-3.5 h-3.5" />
            <span>Status:</span>
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-50 border border-border-soft text-xs font-medium text-slate-800 focus:outline-none focus:border-secondary"
          >
            <option value="ALL">All Statuses ({leads.length})</option>
            <option value="New">New</option>
            <option value="In Review">In Review</option>
            <option value="Replied">Replied</option>
            <option value="Contracted">Contracted</option>
            <option value="Archived">Archived</option>
          </select>

          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-50 border border-border-soft text-xs font-medium text-slate-800 focus:outline-none focus:border-secondary"
          >
            <option value="ALL">All Categories</option>
            <option value="point-of-care-ultrasound">Ultrasound Probes</option>
            <option value="bandages-wound-care">Bandages & Wound Care</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-3xl border border-border-soft shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-border-soft text-muted uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 font-semibold">RFQ ID & Date</th>
                <th className="py-3.5 px-4 font-semibold">Buyer Name & Org</th>
                <th className="py-3.5 px-4 font-semibold">Destination Country</th>
                <th className="py-3.5 px-4 font-semibold">Target Item & Qty</th>
                <th className="py-3.5 px-4 font-semibold">Status</th>
                <th className="py-3.5 px-4 font-semibold text-right">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-muted">
                    No inquiry records found matching the current search filters.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((item) => (
                  <tr 
                    key={item.id} 
                    className={`hover:bg-slate-50 transition-colors cursor-pointer ${selectedLead?.id === item.id ? 'bg-teal-50/50' : ''}`}
                    onClick={() => setSelectedLead(item)}
                  >
                    <td className="py-4 px-4 font-mono text-[11px]">
                      <span className="font-bold text-slate-900 block">{item.id}</span>
                      <span className="text-muted">{item.createdAt}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-bold text-slate-900 block">{item.buyerName}</span>
                      <span className="text-muted block">{item.companyName}</span>
                      <span className="text-secondary font-mono text-[11px] block">{item.email}</span>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-700">
                      {item.country}
                    </td>
                    <td className="py-4 px-4 max-w-[240px]">
                      <span className="font-semibold text-slate-900 block truncate">{item.productName}</span>
                      <span className="text-muted text-[11px] block">Requested: <strong className="text-slate-800">{item.quantity}</strong></span>
                    </td>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`text-xs font-bold py-1 px-2.5 rounded-lg border focus:outline-none cursor-pointer ${
                          item.status === 'New' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                          item.status === 'In Review' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                          item.status === 'Replied' ? 'bg-teal-50 text-teal-800 border-teal-200' :
                          item.status === 'Contracted' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                          'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="Replied">Replied</option>
                        <option value="Contracted">Contracted</option>
                        <option value="Archived">Archived</option>
                      </select>
                    </td>
                    <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`mailto:${item.email}?subject=MAXVOR Quotation Response (${item.id})&body=Dear ${item.buyerName},%0D%0A%0D%0AThank you for your inquiry regarding ${item.productName}. We are pleased to provide official pricing...`}
                          className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-secondary transition-colors"
                          title="Reply via Email"
                        >
                          <Mail className="w-4 h-4 text-secondary" />
                        </a>
                        <button
                          onClick={() => setSelectedLead(item)}
                          className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                          title="View Full Detail"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Drawer Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-border-soft space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-border-soft">
              <div>
                <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">{selectedLead.id}</span>
                <h3 className="text-xl font-black text-slate-900 mt-1">Inquiry Lead Specification</h3>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 space-y-1">
                <span className="text-muted block">Buyer Full Name</span>
                <span className="font-bold text-slate-900 text-sm">{selectedLead.buyerName}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 space-y-1">
                <span className="text-muted block">Organization / Hospital</span>
                <span className="font-bold text-slate-900 text-sm">{selectedLead.companyName}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 space-y-1">
                <span className="text-muted block">Email Address</span>
                <a href={`mailto:${selectedLead.email}`} className="font-bold text-secondary text-sm hover:underline flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{selectedLead.email}</span>
                </a>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 space-y-1">
                <span className="text-muted block">Phone / WhatsApp</span>
                <span className="font-bold text-slate-900 text-sm">{selectedLead.phone || 'N/A'}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 space-y-1">
                <span className="text-muted block">Country / Destination</span>
                <span className="font-bold text-slate-900 text-sm">{selectedLead.country}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 space-y-1">
                <span className="text-muted block">Target Quantity</span>
                <span className="font-bold text-slate-900 text-sm">{selectedLead.quantity}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Target Product & Requirements</span>
              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 text-xs text-slate-800 space-y-2">
                <p className="font-bold text-sm text-teal-950">{selectedLead.productName}</p>
                <p className="text-slate-700 leading-relaxed">{selectedLead.message}</p>
                <div className="pt-2 border-t border-teal-200/60 flex items-center justify-between text-[11px] text-teal-900 font-medium">
                  <span>Certifications Requested: <strong>{selectedLead.requiredCertifications}</strong></span>
                  <span>Received: {selectedLead.createdAt}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border-soft">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted font-medium">Update Status:</span>
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-border-soft text-xs font-bold focus:outline-none"
                >
                  <option value="New">New</option>
                  <option value="In Review">In Review</option>
                  <option value="Replied">Replied</option>
                  <option value="Contracted">Contracted</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              <a
                href={`mailto:${selectedLead.email}?subject=MAXVOR Quotation Response (${selectedLead.id})&body=Dear ${selectedLead.buyerName},%0D%0A%0D%0AThank you for contacting MAXVOR regarding ${selectedLead.productName}. We are glad to provide you with the official price list and technical specification sheet...`}
                className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Official Reply</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Log Manual RFQ Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-border-soft space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border-soft">
              <h3 className="text-lg font-bold text-slate-900">Log Manual Buyer Inquiry</h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateManualLead} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Buyer Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={newLeadForm.buyerName}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, buyerName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white"
                    placeholder="e.g. Dr. Samuel Nkosi"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Organization</label>
                  <input 
                    type="text" 
                    value={newLeadForm.companyName}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white"
                    placeholder="e.g. Nairobi Hospital Network"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={newLeadForm.email}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white"
                    placeholder="buyer@domain.com"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Country *</label>
                  <input 
                    type="text" 
                    required
                    value={newLeadForm.country}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, country: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white"
                    placeholder="e.g. Kenya / Rwanda"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Product *</label>
                  <input 
                    type="text" 
                    required
                    value={newLeadForm.productName}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, productName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white"
                    placeholder="e.g. Ultrasound Probe C30C"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Estimated Quantity</label>
                  <input 
                    type="text" 
                    value={newLeadForm.quantity}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, quantity: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white"
                    placeholder="e.g. 5 Units / 20 Cartons"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Inquiry Message / Notes</label>
                <textarea 
                  rows={3}
                  value={newLeadForm.message}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-border-soft focus:outline-none focus:bg-white resize-none"
                  placeholder="Details of inquiry requirements..."
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-border-soft">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
