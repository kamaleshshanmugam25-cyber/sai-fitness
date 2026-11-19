import React from 'react';
import { Phone, MapPin, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { Link } from 'react-router-dom';

export const ConsultationSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0F172A] text-[#FFFFFF] relative overflow-hidden">
      {/* Subtle cyan glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0284C7]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Reassurance Copy */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
              NOT SURE WHAT TO BUY?
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight leading-tight">
              Talk to us before <br />
              <span className="text-[#38BDF8]">you order.</span>
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md">
              Tell us your fitness goal and budget and we'll suggest the right supplement, check flavour stock, or assist with your bulk order. Or visit our verified showroom in Bengaluru.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  'Hi Sai Fitness, I need expert advice on choosing the right supplements for my goal.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Action Cards (Wave Nutrition Style) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {/* Card 1: Direct Call */}
            <a
              href={`tel:${BRAND_CONFIG.phone}`}
              className="p-5 rounded-2xl bg-[#1E293B] border border-[#334155] hover:border-[#38BDF8]/60 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#FFFFFF] group-hover:text-[#38BDF8] transition-colors">
                    Call {BRAND_CONFIG.phone}
                  </h4>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Product advice, dosage timing and direct order help.
                  </p>
                </div>
              </div>
              <span className="mt-4 text-[11px] font-mono font-bold text-[#38BDF8] flex items-center gap-1">
                <span>Call now</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Card 2: Physical Store Visit */}
            <Link
              to="/contact"
              className="p-5 rounded-2xl bg-[#1E293B] border border-[#334155] hover:border-[#38BDF8]/60 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#FFFFFF] group-hover:text-[#38BDF8] transition-colors">
                    Visit the Store
                  </h4>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Koramangala, Bengaluru — Touch and inspect seals in person.
                  </p>
                </div>
              </div>
              <span className="mt-4 text-[11px] font-mono font-bold text-[#38BDF8] flex items-center gap-1">
                <span>Store details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Card 3: Frictionless Order Tracking */}
            <div className="p-5 rounded-2xl bg-[#1E293B] border border-[#334155] hover:border-[#38BDF8]/60 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#FFFFFF] group-hover:text-[#38BDF8] transition-colors">
                    Track Your Order
                  </h4>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Order number and phone on WhatsApp, no complex login required.
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Sai Fitness, I want to track my order status.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[11px] font-mono font-bold text-[#38BDF8] flex items-center gap-1"
              >
                <span>Live dispatch tracking</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
