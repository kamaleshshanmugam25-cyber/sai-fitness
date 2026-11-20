import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_EASING } from '../../utils/motion';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email.trim())) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('sai_newsletter_subscribers') || '[]');
        if (!existing.includes(email.trim())) {
          existing.push(email.trim());
          localStorage.setItem('sai_newsletter_subscribers', JSON.stringify(existing));
        }
      } catch (err) {
        console.error(err);
      }

      setStatus('success');
      setFeedback('Thank you for subscribing to Sai Fitness Dispatch. You will receive batch restock alerts and exclusive promotional offers in your inbox.');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-b border-[#EAE6DC] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: PREMIUM_EASING }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] flex items-center justify-center text-[#252525] mx-auto shadow-sm transition-transform duration-300 hover:scale-105">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
            SAI FITNESS DISPATCH
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
            BE FIRST TO KNOW ON NEW DROPS & OFFERS
          </h2>
          <p className="text-xs sm:text-sm text-[#858585] max-w-xl mx-auto leading-relaxed">
            Get early access to authentic batch restocks, exclusive subscriber discount codes, and fitness nutrition guides.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: PREMIUM_EASING }}
              className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#F4BE38]/50 max-w-lg mx-auto flex items-center gap-3 text-left shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-[#F4BE38] shrink-0" />
              <p className="text-xs text-[#252525]">{feedback}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-lg mx-auto space-y-2"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address..."
                  className="flex-1 bg-[#FFFFFF] text-[#252525] px-4 py-3.5 rounded-xl border border-[#EAE6DC] focus:border-[#F4BE38] focus:ring-4 focus:ring-[#F4BE38]/15 focus:outline-none text-xs placeholder-[#858585] shadow-sm transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-shine px-6 py-3.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] disabled:opacity-50 text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-180 hover:-translate-y-0.5 shadow-sm active:scale-95 shrink-0 group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#252525]" />
                      <span>SUBSCRIBING...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBSCRIBE</span>
                      <ArrowRight className="w-4 h-4 text-[#252525] group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-500 text-left pl-1"
                >
                  {feedback}
                </motion.p>
              )}
              <p className="text-[11px] text-[#858585] text-left pl-1">
                Zero spam. You may unsubscribe at any time.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
