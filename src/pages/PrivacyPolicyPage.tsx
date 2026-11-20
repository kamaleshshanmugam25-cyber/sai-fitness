import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brandConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FFFDF5] min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-[#858585]">
          <Link to="/" className="hover:text-[#F4BE38] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#858585]" />
          <span className="text-[#252525] font-semibold">Privacy Policy</span>
        </nav>

        <div className="space-y-2 border-b border-[#EAE6DC] pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-semibold">
            LEGAL COMPLIANCE & DATA PRIVACY
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
            PRIVACY POLICY
          </h1>
          <p className="text-xs text-[#858585]">
            Last updated: February 2026 • Governing Law: Digital Personal Data Protection Act (DPDP Act), India
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE6DC] shadow-sm space-y-8 text-xs text-[#858585] leading-relaxed">
          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">1. Commitment to Customer Privacy</h3>
            <p>
              At {BRAND_CONFIG.name}, we treat customer data with the same high standard of integrity that we apply to our sports nutrition products. This Privacy Policy details how we collect, store, process, and safeguard the information you provide when using our e-commerce platform or contacting our WhatsApp customer advisory.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">2. Information We Collect</h3>
            <p>
              When you browse, register, or place an order through our online portal or WhatsApp commerce channel, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#252525]">
              <li>Identity & Contact details: Full legal name, delivery address, city, state, PIN code, contact phone number, and email.</li>
              <li>Transaction data: Products ordered, variant preferences, order timestamp, and payment reference numbers.</li>
              <li>Technical details: IP address, device operating system, and browser metadata strictly for fraud prevention and security logging.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">3. Payment Processing & Financial Security</h3>
            <p>
              {BRAND_CONFIG.name} does <strong>not</strong> collect, process, or store sensitive debit/credit card numbers or CVVs on our servers. All online payment operations are handled through PCI-DSS Level 1 certified payment gateways (such as Razorpay) and the NPCI Unified Payments Interface (UPI) system using end-to-end 256-bit SSL encryption.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">4. How We Use Your Information</h3>
            <p>Your data is used strictly for:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#252525]">
              <li>Processing and dispatching your supplement order to your designated Indian PIN code.</li>
              <li>Transmitting order confirmation SMS, invoice PDF downloads, and logistics live tracking updates.</li>
              <li>Providing dedicated WhatsApp assistance regarding batch authenticity or dosage timing.</li>
              <li>Sending optional newsletter updates regarding restocks and coupon codes (which can be opted out of at any time).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252525]">5. Contacting the Grievance Officer</h3>
            <p>
              In accordance with the Information Technology Act 2000 and the DPDP Act, for any privacy concerns, data rectification requests, or deletion requests, please contact our designated Grievance Officer at:
            </p>
            <div className="p-4 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] space-y-1 font-mono text-[11px] text-[#252525]">
              <p>Attn: Privacy & Grievance Desk, {BRAND_CONFIG.name}</p>
              <p>Email: {BRAND_CONFIG.email}</p>
              <p>Address: {BRAND_CONFIG.address.street}, {BRAND_CONFIG.address.city}, {BRAND_CONFIG.address.state} - {BRAND_CONFIG.address.pincode}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
