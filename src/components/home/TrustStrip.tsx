import React from 'react';
import { ShieldCheck, Truck, Lock, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: '100% Genuine',
      description: 'Sealed products directly from authorized master importers with verifiable scratch codes.'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Dispatched within 24h with tamper-evident packaging on all orders over ₹1,999.'
    },
    {
      icon: Lock,
      title: 'Secure Payment',
      description: 'UPI, credit/debit cards, and verified Cash on Delivery with full buyer protection.'
    },
    {
      icon: MapPin,
      title: 'Real Physical Store',
      description: `Visit our verified showroom in ${BRAND_CONFIG.address.city} to inspect products and seals in person.`
    }
  ];

  return (
    <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0284C7] font-bold">
            WHY SHOP WITH SAI FITNESS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm hover:border-[#BAE6FD] hover:shadow-md transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-heading font-extrabold text-sm text-[#0F172A]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
