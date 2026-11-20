import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brandConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FFFDF5] min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-[#858585]">
          <Link to="/" className="hover:text-[#F4BE38] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#858585]" />
          <span className="text-[#252525] font-semibold">Terms & Conditions</span>
        </nav>

        <div className="space-y-2 border-b border-[#EAE6DC] pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-semibold">
            LEGAL STORE AGREEMENT
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
            TERMS & CONDITIONS
          </h1>
          <p className="text-xs text-[#858585]">
            Effective Date: February 2026 • Governed by the laws of the Republic of India
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE6DC] shadow-sm space-y-8 text-xs text-[#858585] leading-relaxed">
          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">1. Introduction & Acceptance</h3>
            <p>
              Welcome to {BRAND_CONFIG.name}. By accessing our website, browsing our product catalogue, placing an order online, or transacting via our official WhatsApp channels, you acknowledge and agree to be bound by the terms, conditions, and notices herein.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">2. Product Authenticity & Manufacturer Disclaimer</h3>
            <p>
              {BRAND_CONFIG.name} operates as an authorized distributor and retailer of multi-brand sports nutrition formulations. All products are sourced through official Indian master importers with intact original importer seals.
            </p>
            <p>
              Dietary supplements, protein powders, creatines, and pre-workouts are not intended to diagnose, treat, cure, or prevent any medical disease or physiological pathology. Always consult your qualified physician or certified sports dietitian before commencing any rigorous ergogenic supplementation regimen.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">3. Pricing, Accuracy & Offers</h3>
            <p>
              All prices displayed on {BRAND_CONFIG.name} are in Indian Rupees (₹ INR) and include applicable Goods and Services Tax (GST). While we endeavor to ensure 100% price accuracy, in the event of an erroneous technical display, we reserve the right to decline or cancel affected orders prior to warehouse dispatch with full immediate refund.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">4. WhatsApp Assisted Ordering</h3>
            <p>
              Enquiries generated via our WhatsApp tool constitute a communication request. An order is deemed confirmed only once payment (UPI, Online Gateway, or authorized Cash on Delivery) has been validated by our dispatch system and assigned a unique Order ID.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">5. Jurisdiction</h3>
            <p>
              Any disputes or legal proceedings arising out of transactions on {BRAND_CONFIG.name} shall be subject to the exclusive jurisdiction of the competent courts in Tiruchirappalli, Tamil Nadu, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
