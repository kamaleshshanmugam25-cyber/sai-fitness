import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { generateGeneralSupportWhatsAppUrl } from '../../utils/whatsapp';
import { PREMIUM_EASING } from '../../utils/motion';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = (topic?: string) => {
    const url = generateGeneralSupportWhatsAppUrl(topic);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.45, ease: PREMIUM_EASING }}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
    >
      {/* Popover Card with Smooth AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: PREMIUM_EASING }}
            className="mb-3 w-80 sm:w-96 bg-[#FFFFFF] border border-[#EAE6DC] rounded-3xl shadow-2xl p-5 text-[#252525] text-left"
          >
            <div className="flex items-start justify-between pb-3 border-b border-[#EAE6DC]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#252525]">SAI FITNESS Advisory</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#25D366] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                    <span>Online • Certified Sports Nutritionist</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#858585] hover:text-[#252525] p-1.5 rounded-xl hover:bg-[#FFF4D6] transition-colors"
                aria-label="Close WhatsApp card"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 text-xs text-[#858585] space-y-2">
              <p>
                Have questions about authentic batch codes, stack recommendations, or want to order directly via WhatsApp?
              </p>
              <div className="p-2.5 rounded-xl bg-[#FFF4D6] border border-[#EAE6DC] flex items-center gap-2 text-[11px] text-[#252525]">
                <ShieldCheck className="w-4 h-4 text-[#F4BE38] shrink-0" />
                <span>Official WhatsApp: {BRAND_CONFIG.whatsappDisplay}</span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={() => handleOpenWhatsApp('Supplement Stack Guidance')}
                className="w-full text-left p-2.5 rounded-xl bg-[#FFF4D6]/50 hover:bg-[#FFF4D6] border border-[#EAE6DC] text-xs text-[#252525] flex items-center justify-between group transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4BE38]" />
                  <span>Recommend a Supplement Stack for My Goal</span>
                </span>
                <Send className="w-3 h-3 text-[#858585] group-hover:text-[#252525] group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => handleOpenWhatsApp('Authenticity & Batch Verification')}
                className="w-full text-left p-2.5 rounded-xl bg-[#FFF4D6]/50 hover:bg-[#FFF4D6] border border-[#EAE6DC] text-xs text-[#252525] flex items-center justify-between group transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F4BE38]" />
                  <span>Verify Importer Batch Code</span>
                </span>
                <Send className="w-3 h-3 text-[#858585] group-hover:text-[#252525] group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => handleOpenWhatsApp('General WhatsApp Order Enquiry')}
                className="btn-shine w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#FFFFFF] font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 mt-2 shadow-md hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP NOW</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button with Gentle Hover Scale & Tooltip */}
      <div className="relative group flex items-center">
        {/* Small Tooltip appearing smoothly on hover */}
        <div className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-[#333333] text-[#FFFDF5] text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] border border-[#EAE6DC]/20">
          Chat with Nutritionist
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[#333333]" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-3.5 rounded-full bg-[#25D366] text-[#FFFFFF] shadow-lg hover:shadow-xl hover:shadow-[#25D366]/25 hover:scale-108 active:scale-95 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none"
          aria-label="Open WhatsApp conversation"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
        </button>
      </div>
    </motion.div>
  );
};
