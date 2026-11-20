import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product, ProductVariantWeight, ProductVariantFlavor } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';
import { generateProductWhatsAppUrl } from '../../utils/whatsapp';
import { X, ShoppingBag, MessageCircle, Star, ShieldCheck, Check } from 'lucide-react';
import { PREMIUM_EASING } from '../../utils/motion';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedFlavor, setSelectedFlavor] = useState<ProductVariantFlavor | undefined>(product?.flavors[0]);
  const [selectedWeight, setSelectedWeight] = useState<ProductVariantWeight | undefined>(product?.weights[0]);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const currentFlavor = selectedFlavor || product.flavors[0];
  const currentWeight = selectedWeight || product.weights[0];

  const unitPrice = Math.round(product.sellingPrice * currentWeight.priceMultiplier);
  const unitMrp = Math.round(product.mrp * currentWeight.mrpMultiplier);
  const savings = Math.max(0, unitMrp - unitPrice);

  const handleAddToCart = () => {
    addToCart(product, currentFlavor.name, currentWeight, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 400);
  };

  const handleWhatsAppEnquiry = () => {
    const url = generateProductWhatsAppUrl(product, currentFlavor.name, currentWeight, unitPrice);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop with Smooth Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#252525]/60 backdrop-blur-sm"
        />

        {/* Modal Dialog with Scale & Fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.28, ease: PREMIUM_EASING }}
          className="relative w-full max-w-3xl bg-[#FFFFFF] rounded-3xl border border-[#EAE6DC] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#858585] hover:text-[#252525] hover:bg-[#FFFDF5] transition-all hover:scale-110 active:scale-90"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Image */}
            <div className="space-y-3">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#FFFDF5] border border-[#EAE6DC] p-4 flex items-center justify-center">
                <img
                  src={product.images[0] || '/images/products/placeholder-supplement.svg'}
                  alt={product.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = '/images/products/placeholder-supplement.svg';
                  }}
                  className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-[#858585]">
                <ShieldCheck className="w-4 h-4 text-[#F4BE38]" />
                <span>100% Genuine Importer Seal • Batch Verifiable</span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 text-left">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#F4BE38] font-bold">
                  {product.brand}
                </span>
                <h3 className="font-title font-bold text-xl text-[#252525] leading-snug mt-0.5">
                  {product.name}
                </h3>
              </div>

              {/* Rating */}
              {product.reviewCount > 0 && (
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex text-[#F4BE38]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F4BE38]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#252525]">{product.rating}</span>
                  <span className="text-[#858585]">({product.reviewCount} reviews)</span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3 p-3.5 rounded-2xl bg-[#FFF4D6] border border-[#EAE6DC]">
                <span className="font-heading font-extrabold text-2xl text-[#252525]">
                  {formatCurrency(unitPrice)}
                </span>
                {unitMrp > unitPrice && (
                  <span className="text-sm text-[#858585] line-through font-mono">
                    {formatCurrency(unitMrp)}
                  </span>
                )}
                {savings > 0 && (
                  <span className="ml-auto px-2.5 py-0.5 rounded-full bg-[#F4BE38]/20 text-[#252525] font-mono text-[11px] font-bold">
                    Save {product.discountPercentage}%
                  </span>
                )}
              </div>

              {/* Weights */}
              <div className="space-y-1.5 text-xs">
                <span className="font-mono uppercase text-[#252525] font-semibold">Size:</span>
                <div className="flex flex-wrap gap-2">
                  {product.weights.map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-180 hover:-translate-y-0.5 active:scale-95 ${
                        currentWeight.id === w.id
                          ? 'bg-[#F4BE38] text-[#252525] border-[#F4BE38] shadow-sm font-bold'
                          : 'bg-[#FFFFFF] text-[#252525] border-[#EAE6DC] hover:border-[#F4BE38]'
                      }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavors */}
              <div className="space-y-1.5 text-xs">
                <span className="font-mono uppercase text-[#252525] font-semibold">Flavour:</span>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((f) => (
                    <button
                      key={f.id}
                      disabled={!f.inStock}
                      onClick={() => setSelectedFlavor(f)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-180 hover:-translate-y-0.5 active:scale-95 ${
                        !f.inStock
                          ? 'opacity-40 cursor-not-allowed line-through'
                          : currentFlavor.id === f.id
                          ? 'bg-[#F4BE38] text-[#252525] border-[#F4BE38] shadow-sm font-bold'
                          : 'bg-[#FFFFFF] text-[#252525] border-[#EAE6DC] hover:border-[#F4BE38]'
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#EAE6DC] rounded-xl bg-[#FFFDF5]">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-xs hover:bg-[#EAE6DC] transition-colors rounded-l-xl active:scale-90 text-[#252525]"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-semibold font-mono text-[#252525]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-xs hover:bg-[#EAE6DC] transition-colors rounded-r-xl active:scale-90 text-[#252525]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="btn-shine flex-1 py-3 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-180 hover:-translate-y-0.5 shadow-md active:scale-95"
                  >
                    {justAdded ? (
                      <>
                        <Check className="w-4 h-4 text-[#252525]" />
                        <span>ADDED TO BAG</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#252525]" />
                        <span>ADD TO BAG</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFFDF5] border border-[#25D366] text-[#252525] font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-180 hover:-translate-y-0.5 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
