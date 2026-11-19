import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  CreditCard
} from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { CATEGORIES } from '../../data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-[#94A3B8] border-t border-[#1E293B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Top Trust Pillar Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#1E293B]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">100% Genuine Products</h4>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Authentic sourcing from authorized master importers with verifiable batch codes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">Secure Payment Modes</h4>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Instant UPI (GPay/PhonePe), Credit/Debit cards via Razorpay, and verified Cash on Delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">India-Wide Delivery</h4>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Safe, multi-layer corrugated packaging with live delivery tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0284C7] flex items-center justify-center text-[#FFFFFF]">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <span className="font-heading font-extrabold text-xl text-[#FFFFFF] tracking-tight">
                SAI <span className="text-[#38BDF8]">FITNESS</span>
              </span>
            </Link>

            <p className="text-xs leading-relaxed text-[#94A3B8] max-w-sm">
              {BRAND_CONFIG.description}
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{BRAND_CONFIG.address.street}, {BRAND_CONFIG.address.city}, {BRAND_CONFIG.address.state} - {BRAND_CONFIG.address.pincode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phone}`} className="hover:text-[#FFFFFF] transition-colors">
                  {BRAND_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-[#FFFFFF] transition-colors">
                  {BRAND_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4">
              Explore Store
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/shop" className="hover:text-[#38BDF8] transition-colors">
                  All Supplements
                </Link>
              </li>
              <li>
                <Link to="/brands" className="hover:text-[#38BDF8] transition-colors">
                  Supported Brands
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#38BDF8] transition-colors">
                  About Sai Fitness
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#38BDF8] transition-colors">
                  Contact & Store Location
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#38BDF8] transition-colors">
                  Shopping Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Help & Policies */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/shipping-returns" className="hover:text-[#38BDF8] transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#38BDF8] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#38BDF8] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38BDF8] font-bold hover:underline flex items-center gap-1"
                >
                  <span>WhatsApp Helpdesk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.</p>
            <p className="text-[11px] text-[#64748B]">
              Authorized Indian Sports Nutrition Retailer. All logos and product names are trademarks of their respective owners.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#1E293B] text-[10px] font-mono text-[#E2E8F0] border border-[#334155]">
              UPI
            </span>
            <span className="px-2.5 py-1 rounded bg-[#1E293B] text-[10px] font-mono text-[#E2E8F0] border border-[#334155]">
              Razorpay
            </span>
            <span className="px-2.5 py-1 rounded bg-[#1E293B] text-[10px] font-mono text-[#E2E8F0] border border-[#334155]">
              Visa / MC
            </span>
            <span className="px-2.5 py-1 rounded bg-[#1E293B] text-[10px] font-mono text-[#E2E8F0] border border-[#334155]">
              Cash on Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
