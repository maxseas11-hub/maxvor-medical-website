// Initial Seed Data & Storage Utilities for MAXVOR Admin Dashboard

const STORAGE_KEY = 'maxvor_rfq_leads_v1';
const AUTH_KEY = 'maxvor_admin_auth_session';

export const INITIAL_LEADS = [
  {
    id: 'RFQ-202611-8421',
    createdAt: '2026-11-05 14:32:10',
    buyerName: 'Dr. Jean-Pierre Kouamé',
    companyName: 'Clinique Internationale de Douala / Hôpital Général',
    email: 'jp.kouame@clinique-douala.cm',
    phone: '+237 677 82 91 04',
    country: 'Cameroon (Cameroun)',
    productName: 'Dual-Head Wireless Ultrasound Probe (Convex + Linear HD)',
    category: 'point-of-care-ultrasound',
    quantity: '5 Units',
    requiredCertifications: 'ISO 13485, CE Safety Directive',
    message: 'We are equipping our emergency and maternity triage departments. Please send official quotation CIF Douala Port and confirm French software user manual availability.',
    status: 'New',
    priority: 'High',
    notes: 'Followed up via sales@maxvor.com, requested proforma invoice.'
  },
  {
    id: 'RFQ-202611-7319',
    createdAt: '2026-11-04 09:15:44',
    buyerName: 'Arthur Mutabazi',
    companyName: 'Kigali Medical Supplies Ltd.',
    email: 'procurement@kigalimed.rw',
    phone: '+250 788 34 56 78',
    country: 'Rwanda',
    productName: 'Medical Self-Adherent Cohesive Elastic Bandages (Various Sizes)',
    category: 'bandages-wound-care',
    quantity: '50 Cartons (Mixed 5cm/7.5cm/10cm)',
    requiredCertifications: 'ISO 13485',
    message: 'Supplying national referral hospital tender. Need COA, sterile packaging specs, and bulk container shipping schedule.',
    status: 'Replied',
    priority: 'High',
    notes: 'Quotations sent for 50 cartons CIF Kigali via air freight.'
  },
  {
    id: 'RFQ-202611-6102',
    createdAt: '2026-11-03 16:48:22',
    buyerName: 'Dr. Marcus Vance',
    companyName: 'East Africa Diagnostic Imaging Network',
    email: 'm.vance@eadiagnostics.co.ke',
    phone: '+254 712 90 88 11',
    country: 'Kenya',
    productName: 'Handheld USB/Type-C Convex Probe HS-UP20',
    category: 'point-of-care-ultrasound',
    quantity: '10 Units',
    requiredCertifications: 'ISO 13485, IEC 60601-1',
    message: 'Evaluating probe compatibility with Android tablets for mobile clinic outreach across rural health centers.',
    status: 'In Review',
    priority: 'Medium',
    notes: 'Technical team confirmed Android app APK package sent.'
  },
  {
    id: 'RFQ-202611-5088',
    createdAt: '2026-11-02 11:20:05',
    buyerName: 'Laurent Dufour',
    companyName: 'MedEquip France S.A.S.',
    email: 'l.dufour@medequip-france.fr',
    phone: '+33 6 45 89 12 30',
    country: 'France',
    productName: 'Instant Cold Compression Bandage & Cryotherapy Wrap',
    category: 'bandages-wound-care',
    quantity: '20 Cartons',
    requiredCertifications: 'ISO 13485, CE',
    message: 'Looking for continuous supply for sports medicine clinics in Paris and Lyon. Need sample validation.',
    status: 'Contracted',
    priority: 'High',
    notes: 'Sample batch dispatched by express courier.'
  },
  {
    id: 'RFQ-202610-4491',
    createdAt: '2026-10-31 18:05:12',
    buyerName: 'Tariq Al-Mansoor',
    companyName: 'Gulf Medical Distribution Group',
    email: 't.mansoor@gulfmed-uae.com',
    phone: '+971 50 123 4567',
    country: 'United Arab Emirates (UAE)',
    productName: 'Handheld Linear Ultrasound Probe L40C-HD',
    category: 'point-of-care-ultrasound',
    quantity: '8 Units',
    requiredCertifications: 'ISO 13485, IEC 60601',
    message: 'Vascular access and MSK musculoskeletal ultrasound probe inquiries for private physiotherapy centers.',
    status: 'Replied',
    priority: 'Medium',
    notes: 'Official pricing schedule shared.'
  },
  {
    id: 'RFQ-202610-3215',
    createdAt: '2026-10-29 13:40:00',
    buyerName: 'Ebenezer Osei',
    companyName: 'Accra Health Hub Logistics',
    email: 'ebenezer@accrahealth.gh',
    phone: '+233 24 556 7890',
    country: 'Ghana',
    productName: 'Kinesiology Sports Muscle Tape & Elastic Adhesive Bandage',
    category: 'bandages-wound-care',
    quantity: '30 Cartons',
    requiredCertifications: 'ISO 13485',
    message: 'Need product catalog and FOB quotation for full carton lots.',
    status: 'Archived',
    priority: 'Low',
    notes: 'Catalog and price list delivered.'
  }
];

export function getStoredLeads() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_LEADS;
  } catch {
    return INITIAL_LEADS;
  }
}

export function saveLeads(leads) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch (e) {
    console.error('Failed to save leads to localStorage', e);
  }
}

export function addLead(newLead) {
  const current = getStoredLeads();
  const updated = [newLead, ...current];
  saveLeads(updated);
  return updated;
}

export function updateLeadStatus(id, newStatus, notes = null) {
  const current = getStoredLeads();
  const updated = current.map(item => {
    if (item.id === id) {
      return { 
        ...item, 
        status: newStatus,
        notes: notes !== null ? notes : item.notes
      };
    }
    return item;
  });
  saveLeads(updated);
  return updated;
}

export function deleteLead(id) {
  const current = getStoredLeads();
  const updated = current.filter(item => item.id !== id);
  saveLeads(updated);
  return updated;
}

export function checkAdminAuth() {
  try {
    return sessionStorage.getItem(AUTH_KEY) === 'true' || localStorage.getItem(AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setAdminAuth(isAuth, remember = false) {
  try {
    if (isAuth) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      if (remember) localStorage.setItem(AUTH_KEY, 'true');
    } else {
      sessionStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(AUTH_KEY);
    }
  } catch (e) {
    console.error(e);
  }
}

export function exportLeadsToCsv(leads) {
  const headers = ['Inquiry_ID', 'Date', 'Buyer_Name', 'Company', 'Email', 'Phone', 'Country', 'Target_Product', 'Category', 'Quantity', 'Certifications', 'Status', 'Message', 'Internal_Notes'];
  
  const rows = leads.map(l => [
    `"${l.id || ''}"`,
    `"${l.createdAt || ''}"`,
    `"${(l.buyerName || '').replace(/"/g, '""')}"`,
    `"${(l.companyName || '').replace(/"/g, '""')}"`,
    `"${l.email || ''}"`,
    `"${l.phone || ''}"`,
    `"${(l.country || '').replace(/"/g, '""')}"`,
    `"${(l.productName || '').replace(/"/g, '""')}"`,
    `"${l.category || ''}"`,
    `"${l.quantity || ''}"`,
    `"${(l.requiredCertifications || '').replace(/"/g, '""')}"`,
    `"${l.status || 'New'}"`,
    `"${(l.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
    `"${(l.notes || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `MAXVOR_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
