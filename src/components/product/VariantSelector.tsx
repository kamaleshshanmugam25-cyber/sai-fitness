import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product, ProductVariantFlavor, ProductVariantWeight } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';
import { generateProductWhatsAppUrl } from '../../utils/whatsapp';
import { ShoppingBag, ArrowRight, MessageCircle, ShieldCheck, Check } from 'lucide-react';

interface VariantSelectorProps {
  product: Product;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({ product }) => {
  const [selectedFlavor, setSelectedFlavor] = useState<ProductVariantFlavor>(
    product.flavors[0]
  );
  const [selectedWeight, setSelectedWeight] = useState<ProductVariantWeight>(
    product.weights[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const unitPrice = Math.round(product.sellingPrice * selectedWeight.priceMultiplier);
  const unitMrp = Math.round(product.mrp * selectedWeight.mrpMultiplier);
  const savings = Math.max(0, unitMrp - unitPrice);

  const handleAddToCart = () => {
    addToCart(product, selectedFlavor.name, selectedWeight, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedFlavor.name, selectedWeight, quantity);
    navigate('/checkout');
  };

  const handleWhatsAppEnquiry = () => {
    const url = generateProductWhatsAppUrl(
      product,
      selectedFlavor.name,
      selectedWeight,
      unitPrice
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6 text-left">
      {/* Brand & Stock Status */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-extrabold">
          {product.brand}
        </span>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-emerald-700 font-bold">
            In Stock ({product.stockCount} units available)
          </span>
        </div>
      </div>

      {/* Product Title */}
      <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#252525] leading-tight">
        {product.name}
      </h1>

      {/* Pricing Header */}
      <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shadow-sm flex items-baseline gap-4">
        <span className="font-heading font-extrabold text-3xl text-[#252525]">
          {formatCurrency(unitPrice)}
        </span>
        {unitMrp > unitPrice && (
          <span className="text-base text-[#858585] line-through font-mono">
            {formatCurrency(unitMrp)}
          </span>
        )}
        {savings > 0 && (
          <span className="ml-auto px-3 py-1 rounded-full bg-[#FFF4D6] border border-[#EDDA5E] text-xs font-mono font-bold text-[#252525]">
            Save {formatCurrency(savings)} ({product.discountPercentage}%)
          </span>
        )}
      </div>

      {/* Short Description */}
      <p className="text-xs sm:text-sm text-[#858585] leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Key Highlights */}
      <div className="space-y-2">
        <h4 className="text-xs font-mono uppercase tracking-wider text-[#252525] font-bold">
          Key Highlights:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {product.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-[#252525]">
              <Check className="w-3.5 h-3.5 text-[#F4BE38] shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weight Selector */}
      <div className="space-y-3 pt-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-mono uppercase tracking-wider text-[#252525] font-bold">
            Select Size / Weight:
          </span>
          <span className="text-[#252525] font-bold">{selectedWeight.label}</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {product.weights.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWeight(w)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-180 hover:-translate-y-0.5 active:scale-95 ${
                selectedWeight.id === w.id
                  ? 'bg-[#F4BE38] text-[#252525] font-bold shadow-md ring-2 ring-[#EDDA5E]/40'
                  : 'bg-[#FFFFFF] text-[#252525] hover:bg-[#FFF4D6]/50 border border-[#EAE6DC] hover:border-[#F4BE38]'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flavour Selector */}
      <div className="space-y-3 pt-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-mono uppercase tracking-wider text-[#252525] font-bold">
            Select Flavour:
          </span>
          <span className="text-[#252525] font-bold">{selectedFlavor.name}</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {product.flavors.map((f) => (
            <button
              key={f.id}
              disabled={!f.inStock}
              onClick={() => setSelectedFlavor(f)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-180 hover:-translate-y-0.5 active:scale-95 ${
                !f.inStock
                  ? 'opacity-40 cursor-not-allowed bg-[#EAE6DC]/50 text-[#858585] line-through'
                  : selectedFlavor.id === f.id
                  ? 'bg-[#F4BE38] text-[#252525] font-bold shadow-md ring-2 ring-[#EDDA5E]/40'
                  : 'bg-[#FFFFFF] text-[#252525] hover:bg-[#FFF4D6]/50 border border-[#EAE6DC] hover:border-[#F4BE38]'
              }`}
            >
              {f.name}
              {!f.inStock && <span className="text-[10px] ml-1">(Sold out)</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector & Action Buttons */}
      <div className="pt-4 space-y-3">
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#858585]">
            Quantity:
          </span>
          <div className="flex items-center border border-[#EAE6DC] rounded-xl bg-[#FFFFFF]">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3.5 py-2 text-sm text-[#252525] hover:bg-[#FFF4D6]/60 transition-colors rounded-l-xl active:scale-90"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-4 text-sm font-bold text-[#252525] font-mono">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3.5 py-2 text-sm text-[#252525] hover:bg-[#FFF4D6]/60 transition-colors rounded-r-xl active:scale-90"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleAddToCart}
            className="btn-shine w-full py-4 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF4D6]/40 text-[#252525] border-2 border-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-180 hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 text-[#252525]" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#252525]" />
                <span>ADD TO CART</span>
              </>
            )}
          </button>

          <button
            onClick={handleBuyNow}
            className="btn-shine w-full py-4 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-180 hover:-translate-y-0.5 hover:shadow-lg shadow-md active:scale-95"
          >
            <span>BUY NOW</span>
            <ArrowRight className="w-4 h-4 text-[#252525]" />
          </button>
        </div>

        {/* WhatsApp Assisted Order Button */}
        <button
          onClick={handleWhatsAppEnquiry}
          className="w-full py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF4D6]/30 border border-[#25D366] text-[#252525] text-xs font-bold flex items-center justify-center gap-2 transition-all duration-180 hover:-translate-y-0.5 active:scale-95 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>ORDER OR ENQUIRE VIA WHATSAPP (INSTANT ADVISORY)</span>
        </button>
      </div>

      {/* Trust Guarantee Strip */}
      <div className="p-4 rounded-2xl bg-[#FFF4D6] border border-[#EAE6DC] flex items-center gap-3 text-xs text-[#858585]">
        <ShieldCheck className="w-5 h-5 text-[#F4BE38] shrink-0" />
        <span>
          Includes verified importer scratch authenticity code. Dispatched securely in tamper-evident carton.
        </span>
      </div>
    </div>
  );
};
