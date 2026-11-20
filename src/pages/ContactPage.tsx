import React, { useState } from 'react';
import { BRAND_CONFIG } from '../config/brandConfig';
import { generateGeneralSupportWhatsAppUrl } from '../utils/whatsapp';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_EASING } from '../utils/motion';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Supplement Recommendation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const url = generateGeneralSupportWhatsAppUrl(form.subject || 'General Enquiry');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-16 bg-[#FFFDF5] min-h-screen text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header with Fade-Up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASING }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          {/* Official Emblem */}
          <div className="w-20 h-20 mx-auto rounded-full bg-[#252525] p-1 border-2 border-[#F4BE38] shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="/images/logo.png"
              alt="Sai Fitness Official Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
              GET IN TOUCH
            </span>
            <span className="text-[#858585]">•</span>
            <span className="font-mono text-xs text-[#252525] font-bold px-2.5 py-0.5 rounded-full bg-[#FFF4D6]">
              WE SHAPE U • YOU 🆚 YOU
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252525] uppercase tracking-tight">
            CONTACT & NUTRITION ADVISORY
          </h1>
          <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
            Reach our trainers and sports nutritionists for gym memberships, personal bodybuilding coaching, weight-loss programs, and genuine batch code authentication in Tiruchirappalli.
          </p>
        </motion.div>

        {/* 2-Column: Left Contact Details + Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & WhatsApp Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASING }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Cards */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DC]">
                <h3 className="font-heading font-bold text-lg text-[#252525]">
                  Store & Hub Location
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-[#FFF4D6] text-[#252525] font-mono text-[10px] font-bold">
                  TRICHY, TN
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] flex items-center justify-center text-[#252525] shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-[#F4BE38] group-hover:text-[#252525] transition-all duration-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252525]">{BRAND_CONFIG.address.hub}</h4>
                    <p className="text-[#858585] mt-0.5 leading-relaxed">
                      {BRAND_CONFIG.address.street}, {BRAND_CONFIG.address.city}, {BRAND_CONFIG.address.state} - {BRAND_CONFIG.address.pincode}, {BRAND_CONFIG.address.country}
                    </p>
                    <p className="text-[11px] text-[#F4BE38] font-medium mt-1">
                      Landmark: {BRAND_CONFIG.address.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] flex items-center justify-center text-[#252525] shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-[#F4BE38] group-hover:text-[#252525] transition-all duration-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252525]">Direct Phone Support</h4>
                    <a href={`tel:${BRAND_CONFIG.phone}`} className="text-[#252525] font-mono font-bold hover:underline inline-block hover:translate-x-0.5 transition-transform">
                      {BRAND_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] flex items-center justify-center text-[#252525] shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-[#F4BE38] group-hover:text-[#252525] transition-all duration-200">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252525]">Official Instagram</h4>
                    <a
                      href={BRAND_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#252525] font-mono font-bold hover:underline inline-block hover:translate-x-0.5 transition-transform"
                    >
                      {BRAND_CONFIG.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] flex items-center justify-center text-[#252525] shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-[#F4BE38] group-hover:text-[#252525] transition-all duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252525]">Customer Support Email</h4>
                    <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[#858585] hover:text-[#252525] inline-block hover:translate-x-0.5 transition-transform">
                      {BRAND_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] flex items-center justify-center text-[#252525] shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-[#F4BE38] group-hover:text-[#252525] transition-all duration-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252525]">Operational Hours</h4>
                    <p className="text-[#858585] mt-0.5 leading-relaxed">
                      {BRAND_CONFIG.businessHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Rating Badge */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFDF5] border border-[#EAE6DC]">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#F4BE38] text-[#F4BE38]" />
                  <span className="font-heading font-bold text-sm text-[#252525]">{BRAND_CONFIG.googleRating} Google Rating</span>
                </div>
                <span className="font-mono text-xs text-[#858585]">({BRAND_CONFIG.googleReviewsDisplay} Reviews)</span>
              </div>

              {/* View on Google Maps Link Button */}
              <a
                href={BRAND_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine w-full py-2.5 px-4 rounded-xl bg-[#FFF4D6] hover:bg-[#F4BE38] border border-[#EAE6DC] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-[#252525]" />
                <span>View On Google Maps (1,586 Reviews)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#252525]" />
              </a>
            </div>

            {/* Instant WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-[#333333] border border-[#252525] text-[#FFFDF5] space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#FFFDF5]">WhatsApp Support Desk</h4>
                  <p className="text-xs text-[#F4BE38]">Typical response: under 5 minutes</p>
                </div>
              </div>

              <p className="text-xs text-[#FFFDF5]/80 leading-relaxed">
                Connect directly with our team to verify batch scratch codes, ask questions regarding whey isolate mixability, or place an assisted order.
              </p>

              <button
                onClick={handleOpenWhatsApp}
                className="btn-shine w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP: {BRAND_CONFIG.whatsappDisplay}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASING }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#F4BE38] font-bold">
                  SEND AN INQUIRY
                </span>
                <h3 className="font-heading font-bold text-xl text-[#252525]">
                  Direct Message to Our Advisory Desk
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: PREMIUM_EASING }}
                    className="p-8 rounded-2xl bg-[#FFF4D6] border border-[#EDDA5E] text-center space-y-3"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#F4BE38] mx-auto" />
                    <h4 className="font-heading font-bold text-lg text-[#252525]">Message Received!</h4>
                    <p className="text-xs text-[#858585] max-w-sm mx-auto">
                      Thank you, {form.name}. Our team will review your enquiry and respond to {form.email} within 4 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'Supplement Recommendation',
                          message: ''
                        });
                      }}
                      className="btn-shine mt-2 px-6 py-2.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] text-xs font-bold hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Your Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Rahul Verma"
                          className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Email Address *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Contact Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98945 58995"
                          className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Topic of Inquiry</label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full bg-[#FFFDF5] text-[#252525] px-3 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:bg-white focus:outline-none transition-colors"
                        >
                          <option value="Supplement Recommendation">Supplement Stack Advice</option>
                          <option value="Batch Code Verification">Batch Code & Authenticity</option>
                          <option value="Gym Membership / Training">Gym Membership & Training</option>
                          <option value="Order Tracking">Existing Order Status</option>
                          <option value="Bulk Order">Gym / Bulk Inquiry</option>
                          <option value="Other">Other Enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Your Message *</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your training goal, target body weight, order question, or gym inquiry..."
                        className="w-full bg-[#FFFDF5] text-[#252525] p-4 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:bg-white focus:outline-none resize-none transition-colors"
                      />
                    </div>

                    {error && <p className="text-xs text-red-500">{error}</p>}

                    <button
                      type="submit"
                      className="btn-shine w-full py-4 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 shadow-md group"
                    >
                      <Send className="w-4 h-4 text-[#252525] group-hover:translate-x-1 transition-transform" />
                      <span>SEND MESSAGE TO NUTRITION DESK</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Trichy Branches Directory */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: PREMIUM_EASING }}
          className="space-y-6 pt-6"
        >
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
              PHYSICAL LOCATIONS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#252525] uppercase tracking-tight">
              SAI FITNESS TRICHY BRANCHES
            </h2>
            <p className="text-xs sm:text-sm text-[#858585]">
              Unisex AC Fitness Center, Personal Training & Authentic Sports Supplement Store in Tiruchirappalli
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRAND_CONFIG.branches.map((branch, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-5 shadow-sm hover:border-[#F4BE38] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DC]">
                  <div>
                    <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#F4BE38]">
                      {branch.area}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#252525]">
                      {branch.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FFF4D6] text-[#252525] font-mono text-[10px] font-bold">
                    TRICHY
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3 text-[#858585]">
                    <MapPin className="w-4 h-4 text-[#F4BE38] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#252525] font-mono font-bold">
                    <Phone className="w-4 h-4 text-[#F4BE38] shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:underline">
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-[#858585]">
                    <Clock className="w-4 h-4 text-[#F4BE38] shrink-0" />
                    <span>{branch.hours}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {branch.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#FFFDF5] border border-[#EAE6DC] text-[11px] text-[#252525] font-medium"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                <a
                  href={BRAND_CONFIG.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine mt-3 w-full py-2.5 rounded-xl bg-[#FFF4D6] hover:bg-[#F4BE38] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};