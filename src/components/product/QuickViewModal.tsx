import React, { useState } from 'react';
import type { Product, ProductVariantWeight, ProductVariantFlavor } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';
import { generateProductWhatsAppUrl } from '../../utils/whatsapp';
import { X, ShoppingBag, MessageCircle, Star, ShieldCheck } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [selectedFlavor, setSelectedFlavor] = useState<ProductVariantFlavor>(product.flavors[0]);
  const [selectedWeight, setSelectedWeight] = useState<ProductVariantWeight>(product.weights[0]);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const unitPrice = Math.round(product.sellingPrice * selectedWeight.priceMultiplier);
  const unitMrp = Math.round(product.mrp * selectedWeight.mrpMultiplier);
  const savings = Math.max(0, unitMrp - unitPrice);

  const handleAddToCart = () => {
    addToCart(product, selectedFlavor.name, selectedWeight, quantity);
    onClose();
  };

  const handleWhatsAppEnquiry = () => {
    const url = generateProductWhatsAppUrl(product, selectedFlavor.name, selectedWeight, unitPrice);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#252821]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FFFFFF] rounded-2xl border border-[#E8E4DA] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#85877F] hover:text-[#252821] hover:bg-[#F8F6F0] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Image */}
          <div className="space-y-3">
            <div className="aspect-square rounded-xl overflow-hidden bg-[#F8F6F0] border border-[#E8E4DA]">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-[#85877F]">
              <ShieldCheck className="w-4 h-4 text-[#263C32]" />
              <span>100% Genuine Importer Seal • Batch Verifiable</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 text-left">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D5AD65] font-bold">
                {product.brand}
              </span>
              <h3 className="font-title font-bold text-xl text-[#252821] leading-snug mt-0.5">
                {product.name}
              </h3>
            </div>

            {/* Rating */}
            {product.reviewCount > 0 && (
              <div className="flex items-center gap-2 text-xs">
                <div className="flex text-[#D5AD65]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D5AD65]" />
                  ))}
                </div>
                <span className="font-bold text-[#252821]">{product.rating}</span>
                <span className="text-[#85877F]">({product.reviewCount} reviews)</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 p-3 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA]">
              <span className="font-heading font-extrabold text-2xl text-[#263C32]">
                {formatCurrency(unitPrice)}
              </span>
              {unitMrp > unitPrice && (
                <span className="text-sm text-[#85877F] line-through font-mono">
                  {formatCurrency(unitMrp)}
                </span>
              )}
              {savings > 0 && (
                <span className="ml-auto px-2 py-0.5 rounded bg-[#D5AD65]/15 text-[#263C32] font-mono text-[11px] font-bold">
                  Save {product.discountPercentage}%
                </span>
              )}
            </div>

            {/* Weights */}
            <div className="space-y-1.5 text-xs">
              <span className="font-mono uppercase text-[#252821] font-semibold">Size:</span>
              <div className="flex flex-wrap gap-2">
                {product.weights.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWeight(w)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                      selectedWeight.id === w.id
                        ? 'bg-[#263C32] text-[#FFFFFF] border-[#263C32]'
                        : 'bg-[#FFFFFF] text-[#252821] border-[#E8E4DA] hover:border-[#263C32]'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavors */}
            <div className="space-y-1.5 text-xs">
              <span className="font-mono uppercase text-[#252821] font-semibold">Flavour:</span>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map((f) => (
                  <button
                    key={f.id}
                    disabled={!f.inStock}
                    onClick={() => setSelectedFlavor(f)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                      !f.inStock
                        ? 'opacity-40 cursor-not-allowed line-through'
                        : selectedFlavor.id === f.id
                        ? 'bg-[#263C32] text-[#FFFFFF] border-[#263C32]'
                        : 'bg-[#FFFFFF] text-[#252821] border-[#E8E4DA] hover:border-[#263C32]'
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
                <div className="flex items-center border border-[#E8E4DA] rounded-lg bg-[#F8F6F0]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-xs hover:bg-[#E8E4DA] transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold font-mono">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-xs hover:bg-[#E8E4DA] transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-2.5 rounded-lg bg-[#263C32] hover:bg-[#1C2D25] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D5AD65]" />
                  <span>ADD TO BAG</span>
                </button>
              </div>

              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-2 rounded-lg bg-[#FFFFFF] hover:bg-[#F8F6F0] border border-[#25D366] text-[#263C32] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enquire via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
