import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CertificationsPage from './pages/CertificationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import RfqModal from './components/modals/RfqModal';
import CertModal from './components/modals/CertModal';
import ProductQuickViewModal from './components/modals/ProductQuickViewModal';
import ScrollToTop from './components/common/ScrollToTop';
import FloatingContactWidget from './components/common/FloatingContactWidget';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Mail, FileText } from 'lucide-react';

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqProduct, setRfqProduct] = useState(null);
  const [rfqCategory, setRfqCategory] = useState(null);

  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const [quickViewModalOpen, setQuickViewModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleOpenRfq = (product = null, categoryId = null) => {
    setRfqProduct(product);
    setRfqCategory(categoryId);
    setRfqModalOpen(true);
  };

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setQuickViewModalOpen(true);
  };

  const handleSelectCert = (cert) => {
    setSelectedCert(cert);
    setCertModalOpen(true);
  };

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-on-surface font-sans selection:bg-secondary-light selection:text-secondary">
      
      {/* Site Header */}
      <Header 
        onOpenRfq={handleOpenRfq} 
      />

      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenRfq={handleOpenRfq} 
                onSelectCert={handleSelectCert}
                onQuickView={handleQuickView}
              />
            } 
          />
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                onOpenRfq={handleOpenRfq} 
                onQuickView={handleQuickView}
              />
            } 
          />
          <Route 
            path="/products/:productId" 
            element={
              <ProductDetailPage 
                onOpenRfq={handleOpenRfq} 
                onQuickView={handleQuickView}
              />
            } 
          />
          <Route 
            path="/certifications" 
            element={
              <CertificationsPage 
                onSelectCert={handleSelectCert} 
                onOpenRfq={handleOpenRfq} 
              />
            } 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenRfq={handleOpenRfq} />} 
          />
          <Route 
            path="/faq" 
            element={<FaqPage onOpenRfq={handleOpenRfq} />} 
          />
          <Route 
            path="/resources/faq" 
            element={<FaqPage onOpenRfq={handleOpenRfq} />} 
          />
          <Route 
            path="/resources" 
            element={<Navigate to="/faq" replace />} 
          />
          <Route 
            path="/oem" 
            element={<Navigate to="/products" replace />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route 
            path="/blog" 
            element={<BlogPage onOpenRfq={handleOpenRfq} />} 
          />
          <Route 
            path="/blog/page/:pageNumber" 
            element={<BlogPage onOpenRfq={handleOpenRfq} />} 
          />
          <Route 
            path="/news" 
            element={<BlogPage onOpenRfq={handleOpenRfq} />} 
          />
          <Route 
            path="/blog/:articleId" 
            element={<BlogDetailPage onOpenRfq={handleOpenRfq} />} 
          />
          <Route 
            path="/news/:articleId" 
            element={<BlogDetailPage onOpenRfq={handleOpenRfq} />} 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Site Footer */}
      <Footer onOpenRfq={handleOpenRfq} />

      {/* Persistent Floating Contact & WhatsApp / Email Quick Action Hub */}
      <FloatingContactWidget onOpenRfq={handleOpenRfq} />

      {/* Interactive Modals */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        initialProduct={rfqProduct}
        initialCategory={rfqCategory}
      />

      <CertModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        selectedCert={selectedCert}
      />

      <ProductQuickViewModal
        isOpen={quickViewModalOpen}
        onClose={() => setQuickViewModalOpen(false)}
        product={quickViewProduct}
        onOpenRfq={handleOpenRfq}
      />

    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}
