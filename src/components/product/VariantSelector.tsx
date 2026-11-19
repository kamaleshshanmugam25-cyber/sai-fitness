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

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const unitPrice = Math.round(product.sellingPrice * selectedWeight.priceMultiplier);
  const unitMrp = Math.round(product.mrp * selectedWeight.mrpMultiplier);
  const savings = Math.max(0, unitMrp - unitPrice);

  const handleAddToCart = () => {
    addToCart(product, selectedFlavor.name, selectedWeight, quantity);
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
        <span className="font-mono text-xs uppercase tracking-widest text-[#D5AD65] font-extrabold">
          {product.brand}
        </span>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-700 font-bold">
            In Stock ({product.stockCount} units available)
          </span>
        </div>
      </div>

      {/* Product Title */}
      <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#252821] leading-tight">
        {product.name}
      </h1>

      {/* Pricing Header */}
      <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] shadow-sm flex items-baseline gap-4">
        <span className="font-heading font-extrabold text-3xl text-[#263C32]">
          {formatCurrency(unitPrice)}
        </span>
        {unitMrp > unitPrice && (
          <span className="text-base text-[#85877F] line-through font-mono">
            {formatCurrency(unitMrp)}
          </span>
        )}
        {savings > 0 && (
          <span className="ml-auto px-3 py-1 rounded-full bg-[#D5AD65]/15 text-xs font-mono font-bold text-[#263C32]">
            Save {formatCurrency(savings)} ({product.discountPercentage}%)
          </span>
        )}
      </div>

      {/* Short Description */}
      <p className="text-xs sm:text-sm text-[#85877F] leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Key Highlights */}
      <div className="space-y-2">
        <h4 className="text-xs font-mono uppercase tracking-wider text-[#252821] font-bold">
          Key Highlights:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {product.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-[#252821]">
              <Check className="w-3.5 h-3.5 text-[#263C32] shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weight Selector */}
      <div className="space-y-3 pt-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-mono uppercase tracking-wider text-[#252821] font-bold">
            Select Size / Weight:
          </span>
          <span className="text-[#263C32] font-bold">{selectedWeight.label}</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {product.weights.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWeight(w)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                selectedWeight.id === w.id
                  ? 'bg-[#263C32] text-[#FFFFFF] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#252821] hover:bg-[#F8F6F0] border border-[#E8E4DA]'
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
          <span className="font-mono uppercase tracking-wider text-[#252821] font-bold">
            Select Flavour:
          </span>
          <span className="text-[#263C32] font-bold">{selectedFlavor.name}</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {product.flavors.map((f) => (
            <button
              key={f.id}
              disabled={!f.inStock}
              onClick={() => setSelectedFlavor(f)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                !f.inStock
                  ? 'opacity-40 cursor-not-allowed bg-[#EFEEE7] text-[#85877F] line-through'
                  : selectedFlavor.id === f.id
                  ? 'bg-[#263C32] text-[#FFFFFF] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#252821] hover:bg-[#F8F6F0] border border-[#E8E4DA]'
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
          <span className="text-xs font-mono uppercase tracking-wider text-[#85877F]">
            Quantity:
          </span>
          <div className="flex items-center border border-[#E8E4DA] rounded-xl bg-[#FFFFFF]">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3.5 py-2 text-sm text-[#252821] hover:bg-[#F8F6F0] transition-colors rounded-l-xl"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-4 text-sm font-bold text-[#252821] font-mono">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3.5 py-2 text-sm text-[#252821] hover:bg-[#F8F6F0] transition-colors rounded-r-xl"
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
            className="w-full py-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F8F6F0] text-[#263C32] border-2 border-[#263C32] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-[#263C32]" />
            <span>ADD TO CART</span>
          </button>

          <button
            onClick={handleBuyNow}
            className="w-full py-4 rounded-xl bg-[#263C32] hover:bg-[#1C2D25] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>BUY NOW</span>
            <ArrowRight className="w-4 h-4 text-[#D5AD65]" />
          </button>
        </div>

        {/* WhatsApp Assisted Order Button */}
        <button
          onClick={handleWhatsAppEnquiry}
          className="w-full py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F8F6F0] border border-[#25D366] text-[#263C32] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>ORDER OR ENQUIRE VIA WHATSAPP (INSTANT ADVISORY)</span>
        </button>
      </div>

      {/* Trust Guarantee Strip */}
      <div className="p-4 rounded-2xl bg-[#EFEEE7] border border-[#E8E4DA] flex items-center gap-3 text-xs text-[#85877F]">
        <ShieldCheck className="w-5 h-5 text-[#263C32] shrink-0" />
        <span>
          Includes verified importer scratch authenticity code. Dispatched securely in tamper-evident carton.
        </span>
      </div>
    </div>
  );
};
