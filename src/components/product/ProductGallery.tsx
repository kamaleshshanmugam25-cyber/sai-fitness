import React, { useState, useRef } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_EASING } from '../../utils/motion';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const activeImage = images[selectedIndex] || images[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((e.clientX - left) / width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - top) / height) * 100));
    setMousePos({ x, y });
  };

  return (
    <div className="space-y-4 text-left">
      {/* Main Image Frame with Smooth Cursor-Tracking Zoom */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {}}
        onMouseLeave={() => {
          setIsZoomed(false);
          setMousePos({ x: 50, y: 50 });
        }}
        onClick={() => setIsZoomed(!isZoomed)}
        className="relative aspect-square rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] overflow-hidden cursor-zoom-in group shadow-sm p-6 select-none"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={`${productName} view ${selectedIndex + 1}`}
            initial={{ opacity: 0.4, scale: 0.98 }}
            animate={{ opacity: 1, scale: isZoomed ? 1.75 : 1 }}
            exit={{ opacity: 0.4, scale: 0.98 }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 0.4, ease: PREMIUM_EASING }
            }}
            style={{
              transformOrigin: isZoomed ? `${mousePos.x}% ${mousePos.y}%` : 'center center'
            }}
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = '/images/products/placeholder-supplement.svg';
            }}
            className="w-full h-full object-contain object-center rounded-2xl will-change-transform"
          />
        </AnimatePresence>

        {/* Floating Zoom Indicator Button */}
        <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#252525] backdrop-blur-md border border-[#EAE6DC] shadow-sm pointer-events-none transition-transform duration-200 group-hover:scale-105">
          {isZoomed ? (
            <ZoomOut className="w-4 h-4 text-[#252525]" />
          ) : (
            <ZoomIn className="w-4 h-4 text-[#858585] group-hover:text-[#252525]" />
          )}
        </div>

        {/* Subtle Zoom Instruction Pill */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#252525]/80 text-[#FFFDF5] text-[10px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-xs">
          {isZoomed ? 'CLICK TO RESET' : 'CLICK & HOVER TO ZOOM'}
        </div>
      </div>

      {/* Thumbnail Selector Strip with Micro-Interactions */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedIndex(idx);
                setIsZoomed(false);
              }}
              className={`relative w-20 h-20 rounded-2xl overflow-hidden bg-[#FFFFFF] border-2 transition-all duration-200 shrink-0 p-1.5 hover:scale-105 active:scale-95 ${
                selectedIndex === idx
                  ? 'border-[#F4BE38] shadow-md ring-2 ring-[#EDDA5E]/40'
                  : 'border-[#EAE6DC] hover:border-[#F4BE38]/80'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = '/images/products/placeholder-supplement.svg';
                }}
                className="w-full h-full object-contain object-center rounded-xl transition-transform duration-300 hover:scale-105"
              />
              {selectedIndex === idx && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F4BE38]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
