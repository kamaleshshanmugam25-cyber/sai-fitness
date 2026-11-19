import React from 'react';
import { Layers, ShoppingBag, Search, Headphones, MessageCircle } from 'lucide-react';

export const WhyChooseSai: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Multiple Supplement Brands',
      desc: 'Browse leading international and Indian brands in one place, with guaranteed importer authenticity seals on every tub.'
    },
    {
      icon: ShoppingBag,
      title: 'Convenient Shopping',
      desc: 'Streamlined online checkout, instant UPI integration, and flexible Cash on Delivery with transparent order tracking.'
    },
    {
      icon: Search,
      title: 'Easy Product Discovery',
      desc: 'Intuitive filtering by fitness goals, brands, weights, and price ranges to find the right fuel for your training split.'
    },
    {
      icon: Headphones,
      title: 'Customer Assistance',
      desc: 'Dedicated customer care to resolve product questions, check batch dates, and ensure seamless delivery to your doorstep.'
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Support',
      desc: 'Connect with certified sports nutritionists on WhatsApp for personalized product recommendations and assisted orders.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8F6F0] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
            THE SAI FITNESS EXPERIENCE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252821] uppercase tracking-tight">
            WHY CHOOSE SAI FITNESS
          </h2>
          <p className="text-xs sm:text-sm text-[#85877F] leading-relaxed">
            We are dedicated to providing sports enthusiasts with authentic multi-brand nutrition, clear product specifications, and trusted customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm hover:border-[#263C32]/40 transition-all duration-300 space-y-3.5 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] flex items-center justify-center text-[#263C32]">
                  <Icon className="w-6 h-6 text-[#263C32]" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#252821] leading-snug">
                  {pt.title}
                </h3>
                <p className="text-xs text-[#85877F] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
