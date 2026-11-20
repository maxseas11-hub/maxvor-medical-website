import React from 'react';
import Hero from '../components/hero/Hero';
import Categories from '../components/categories/Categories';
import FeaturedProducts from '../components/products/FeaturedProducts';
import ClinicalScenarios from '../components/home/ClinicalScenarios';
import WhyMaxvor from '../components/home/WhyMaxvor';
import HomeFeaturedBlogs from '../components/home/HomeFeaturedBlogs';
import HomeFaq from '../components/home/HomeFaq';
import RfqSection from '../components/rfq/RfqSection';
import { usePageSeo } from '../hooks/usePageSeo';

export default function HomePage({ onOpenRfq, onSelectCert, onQuickView }) {
  usePageSeo({ pageKey: 'home' });

  return (
    <div className="w-full">
      {/* 01 · Hero Banner */}
      <Hero onOpenRfq={onOpenRfq} />

      {/* 02 · Product Category Matrix */}
      <Categories onOpenRfq={onOpenRfq} />

      {/* 03 · Authorized Product Portfolio */}
      <FeaturedProducts onOpenRfq={onOpenRfq} onQuickView={onQuickView} />

      {/* 04 · Departmental Clinical Scenarios */}
      <ClinicalScenarios onOpenRfq={onOpenRfq} />

      {/* 05 · Why MAXVOR (Sourcing Efficiency & 4 Pillars) */}
      <WhyMaxvor onOpenRfq={onOpenRfq} />

      {/* 07 · Featured Blogs & Clinical SOPs */}
      <HomeFeaturedBlogs />

      {/* 08 · Frequently Asked Sourcing Questions (FAQ) */}
      <HomeFaq onOpenRfq={onOpenRfq} />

      {/* 09 · Purchasing Support (Interactive RFQ Form) */}
      <RfqSection />
    </div>
  );
}
