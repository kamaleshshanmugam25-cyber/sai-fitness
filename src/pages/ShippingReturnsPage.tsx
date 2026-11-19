import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Truck, RefreshCw, ShieldAlert, PackageCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brandConfig';
import { formatCurrency } from '../utils/formatters';

export const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-[#85877F]">
          <Link to="/" className="hover:text-[#263C32] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#85877F]" />
          <span className="text-[#263C32] font-semibold">Shipping & Returns</span>
        </nav>

        <div className="space-y-2 border-b border-[#E8E4DA] pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-semibold">
            DISPATCH PROTOCOL & GUARANTEES
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252821] uppercase tracking-tight">
            SHIPPING & RETURNS POLICY
          </h1>
          <p className="text-xs text-[#85877F]">
            Transparent logistics, rapid delivery, and fair replacement guidelines across India.
          </p>
        </div>

        {/* 3 Main Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#E8E4DA] shadow-sm space-y-2">
            <Truck className="w-6 h-6 text-[#263C32]" />
            <h4 className="font-heading font-bold text-sm text-[#252821]">24h Dispatch</h4>
            <p className="text-xs text-[#85877F]">Orders placed before 2:00 PM IST dispatch same day from our Bengaluru hub.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E8E4DA] shadow-sm space-y-2">
            <PackageCheck className="w-6 h-6 text-[#263C32]" />
            <h4 className="font-heading font-bold text-sm text-[#252821]">Free Delivery Over {formatCurrency(BRAND_CONFIG.features.freeShippingThreshold)}</h4>
            <p className="text-xs text-[#85877F]">Standard nominal fee of {formatCurrency(BRAND_CONFIG.features.standardShippingFee)} for sub-threshold orders.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E8E4DA] shadow-sm space-y-2">
            <RefreshCw className="w-6 h-6 text-[#263C32]" />
            <h4 className="font-heading font-bold text-sm text-[#252821]">7-Day Replacement</h4>
            <p className="text-xs text-[#85877F]">Hassle-free replacement for transit damage or mispicked orders.</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E4DA] shadow-sm space-y-8 text-xs text-[#85877F] leading-relaxed">
          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252821]">1. Delivery Coverage & Estimated Timelines</h3>
            <p>
              We ship to 19,000+ serviceable PIN codes across India through premier courier partners (BlueDart, Delhivery, DTDC, and Express Air Cargo).
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#252821]">
              <li><strong>Metro Hubs (Bengaluru, Mumbai, Delhi-NCR, Hyderabad, Chennai, Kolkata):</strong> 2 to 3 Business Days.</li>
              <li><strong>Tier-2 & Tier-3 Cities:</strong> 3 to 5 Business Days.</li>
              <li><strong>North-East & Remote Regions:</strong> 5 to 7 Business Days.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252821]">2. Heavy-Duty Corrugated Packaging</h3>
            <p>
              Sports nutrition containers and large protein tubs are fragile when subjected to transit shocks. Every consignment from {BRAND_CONFIG.name} is packaged using heavy-duty 5-ply corrugated carton boxes, internal shock-absorbent bubble wraps, and sealed with tamper-evident security tape.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252821]">3. Returns & Replacements</h3>
            <p>
              We provide a <strong>7-Day Replacement Guarantee</strong> in the following scenarios:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#252821]">
              <li>The outer security seal or canister was found cracked or damaged during transit.</li>
              <li>An incorrect product, flavour, or weight was delivered compared to your invoice.</li>
              <li>The product received has expired or has less than 6 months shelf life remaining.</li>
            </ul>
            <div className="p-4 rounded-xl bg-[#EFEEE7] border border-[#E8E4DA] space-y-1 mt-3">
              <span className="font-heading font-bold text-[#252821] flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#D5AD65]" />
                Important Health & Hygiene Requirement:
              </span>
              <p className="text-[#85877F]">
                In accordance with FSSAI regulations and hygiene standards for consumable nutritional goods, returns or replacements cannot be accepted if the internal foil seal on the tub or pouch has already been opened or tampered with by the user.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#252821]">4. How to Initiate a Replacement</h3>
            <p>
              Simply share unboxing photographs or a short video with your Order ID to our WhatsApp Desk at <strong>{BRAND_CONFIG.whatsappDisplay}</strong> or email <strong>{BRAND_CONFIG.email}</strong>. Our dispatch team will arrange a reverse pickup within 24 hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
