import React from 'react';
import { Phone, ShieldCheck, Truck } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#0F172A] text-[#FFFFFF] text-xs py-2 px-4 select-none relative z-40 border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-[11px] sm:text-xs">
        {/* Left: Authenticity Guarantee */}
        <div className="hidden sm:flex items-center gap-1.5 text-[#38BDF8] font-mono tracking-wider uppercase font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% GENUINE PRODUCTS</span>
        </div>

        {/* Center: Free Delivery */}
        <div className="flex-1 flex items-center justify-center gap-2 text-center text-[#E2E8F0] font-medium">
          <Truck className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
          <span>Free delivery across India on orders over ₹1,999</span>
        </div>

        {/* Right: Direct Phone Hotline */}
        <div className="flex items-center gap-1.5">
          <a
            href={`tel:${BRAND_CONFIG.phone}`}
            className="flex items-center gap-1.5 text-[#FFFFFF] hover:text-[#38BDF8] transition-colors font-mono font-bold"
          >
            <Phone className="w-3 h-3 text-[#38BDF8]" />
            <span>Call {BRAND_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
