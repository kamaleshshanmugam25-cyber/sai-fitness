import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  CreditCard
} from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { CATEGORIES } from '../../data/categories';
import { PREMIUM_EASING } from '../../utils/motion';

const CURRENT_YEAR = new Date().getFullYear();

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-[#FFFDF5]/80 border-t border-[#252525] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Top Trust Pillar Bar with Staggered Viewport Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#252525]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
            }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-[#252525]/70 border border-[#252525] hover:border-[#F4BE38]/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-[#252525] border border-[#F4BE38]/30 flex items-center justify-center text-[#F4BE38] shrink-0 transition-transform duration-200 hover:scale-105">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">100% Genuine Products</h4>
              <p className="text-xs text-[#858585] mt-0.5">
                Authentic sourcing from authorized master importers with verifiable batch codes.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
            }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-[#252525]/70 border border-[#252525] hover:border-[#F4BE38]/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-[#252525] border border-[#F4BE38]/30 flex items-center justify-center text-[#F4BE38] shrink-0 transition-transform duration-200 hover:scale-105">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">Secure Payment Modes</h4>
              <p className="text-xs text-[#858585] mt-0.5">
                Instant UPI (GPay/PhonePe), Credit/Debit cards via Razorpay, and verified Cash on Delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
            }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-[#252525]/70 border border-[#252525] hover:border-[#F4BE38]/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-[#252525] border border-[#F4BE38]/30 flex items-center justify-center text-[#F4BE38] shrink-0 transition-transform duration-200 hover:scale-105">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">India-Wide Delivery</h4>
              <p className="text-xs text-[#858585] mt-0.5">
                Safe, multi-layer corrugated packaging with live delivery tracking.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Footer Links Columns with Staggered Column Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12"
        >
          {/* Column 1: Brand Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
            }}
            className="lg:col-span-2 space-y-4"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Sai Fitness Official Logo"
                  className="w-full h-full object-contain rounded-full shadow-md group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 ring-2 ring-[#F4BE38]/60 bg-[#252525]"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-xl text-[#FFFFFF] tracking-tight group-hover:text-[#F4BE38] transition-colors">
                  SAI <span className="text-[#F4BE38]">FITNESS</span>
                </span>
                <span className="text-[10px] font-mono text-[#F4BE38] font-bold tracking-wider">
                  WE SHAPE U • TRICHY
                </span>
              </div>
            </Link>

            <div className="inline-block px-3 py-1 rounded-full bg-[#252525] border border-[#F4BE38]/40 text-[#F4BE38] font-mono text-xs font-bold">
              {BRAND_CONFIG.tagline}
            </div>

            <p className="text-xs leading-relaxed text-[#858585] max-w-sm">
              {BRAND_CONFIG.description}
            </p>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#F4BE38] font-bold">⭐ {BRAND_CONFIG.googleRating}</span>
              <span className="text-[#FFFFFF] font-medium">Google Rating</span>
              <span className="text-[#858585]">({BRAND_CONFIG.googleReviewsDisplay} Reviews)</span>
            </div>

            <div className="space-y-2.5 text-xs pt-1">
              <div className="flex items-center gap-2.5 hover:text-[#FFFFFF] transition-colors">
                <MapPin className="w-4 h-4 text-[#F4BE38] shrink-0" />
                <span>{BRAND_CONFIG.address.street}, {BRAND_CONFIG.address.city} - {BRAND_CONFIG.address.pincode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4BE38] shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phone}`} className="hover:text-[#FFFFFF] transition-colors hover:translate-x-0.5 inline-block">
                  {BRAND_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#F4BE38] shrink-0" />
                <a
                  href={BRAND_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors hover:translate-x-0.5 inline-block text-[#FFFDF5]/90"
                >
                  {BRAND_CONFIG.instagramHandle} (Instagram)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4BE38] shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-[#FFFFFF] transition-colors hover:translate-x-0.5 inline-block">
                  {BRAND_CONFIG.email}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={BRAND_CONFIG.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F4BE38] hover:text-[#EDDA5E] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View on Google Maps (Trichy)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Categories */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
            }}
          >
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Quick Navigation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
            }}
          >
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4">
              Explore Store
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/shop" className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors">
                  All Supplements
                </Link>
              </li>
              <li>
                <Link to="/brands" className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors">
                  Supported Brands
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors">
                  About Sai Fitness
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors">
                  Contact & Store Location
                </Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors">
                  Shopping Bag
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Customer Help & Policies */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASING } }
            }}
          >
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/shipping-returns" className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link-animated text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4BE38] font-bold hover:text-[#EDDA5E] flex items-center gap-1 group"
                >
                  <span>WhatsApp Helpdesk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright & Payment Icons with Micro-Interactions */}
        <div className="pt-8 border-t border-[#252525] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[#FFFDF5]">© {CURRENT_YEAR} {BRAND_CONFIG.name}. All rights reserved.</p>
            <p className="text-[11px] text-[#858585]">
              Authorized Indian Sports Nutrition Retailer. All logos and product names are trademarks of their respective owners.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {['UPI', 'Razorpay', 'Visa / MC', 'Cash on Delivery'].map((label, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#252525] text-[10px] font-mono text-[#FFFDF5] border border-[#333333] hover:border-[#F4BE38]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
