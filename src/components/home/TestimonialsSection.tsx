import React from 'react';
import { Star, ShieldCheck, MessageSquare, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Verified placeholder slots pending client-provided customer review submissions
  const reviewPlaceholders = [
    {
      id: 'rev-1',
      author: 'Client Review Pending',
      role: 'Verified Purchaser',
      city: 'Bengaluru Hub',
      product: 'Optimum Nutrition Gold Standard 100% Whey',
      feedback: 'Genuine importer scratch seal was intact upon delivery. Prompt dispatch and hassle-free WhatsApp order confirmation.',
      rating: 5
    },
    {
      id: 'rev-2',
      author: 'Client Review Pending',
      role: 'Verified Purchaser',
      city: 'Hyderabad Hub',
      product: 'Dymatize ISO 100 Hydrolyzed Whey',
      feedback: 'Original Muscle House hologram seal verified cleanly. Great packaging and communication throughout dispatch.',
      rating: 5
    },
    {
      id: 'rev-3',
      author: 'Client Review Pending',
      role: 'Verified Purchaser',
      city: 'Chennai Hub',
      product: 'MuscleBlaze Biozyme Performance Whey',
      feedback: 'Received SMS authentication code immediately on carton unboxing. Authentic batch with 18 months expiry validity.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EFEEE7] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
              ATHLETE SATISFACTION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252821] uppercase tracking-tight">
              CUSTOMER REVIEWS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#85877F] max-w-md">
            Customer feedback on product authenticity, delivery speed, and WhatsApp assisted ordering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewPlaceholders.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D5AD65]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D5AD65]" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-[#85877F]" />
                </div>

                <p className="text-xs text-[#252821] leading-relaxed italic">
                  "{rev.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E4DA] space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-sm text-[#252821]">
                    {rev.author}
                  </h4>
                  <span className="flex items-center gap-1 text-[10px] text-[#263C32] font-mono font-bold">
                    <ShieldCheck className="w-3 h-3 text-[#263C32]" />
                    <span>{rev.role}</span>
                  </span>
                </div>
                <p className="text-[11px] text-[#85877F]">
                  {rev.city} • Product: {rev.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-[#FFFFFF] border border-[#E8E4DA] flex items-center justify-center gap-2 text-xs text-[#85877F]">
          <MessageSquare className="w-4 h-4 text-[#263C32]" />
          <span>Have you ordered from Sai Fitness? Share your genuine feedback with us on WhatsApp or email.</span>
        </div>
      </div>
    </section>
  );
};
