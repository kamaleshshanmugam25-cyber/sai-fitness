import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Tag,
  ExternalLink,
  Plus,
  Check,
  Truck,
  Sparkles,
  Lock
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { PRODUCTS } from '../../data/products';
import { formatCurrency } from '../../utils/formatters';
import { generateCartWhatsAppUrl } from '../../utils/whatsapp';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PREMIUM_EASING } from '../../utils/motion';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    removeFromCart,
    updateQuantity,
    addToCart,
    subtotal,
    discount,
    shipping,
    total,
    cartCount,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Automatically close cart drawer when user is on checkout or confirmation page
  useEffect(() => {
    if (location.pathname === '/checkout' || location.pathname.startsWith('/order-confirmation')) {
      setIsCartDrawerOpen(false);
    }
  }, [location.pathname, setIsCartDrawerOpen]);

  const freeShippingThreshold = BRAND_CONFIG.features.freeShippingThreshold;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discount));
  const freeShippingProgress = Math.min(100, (((subtotal - discount)) / freeShippingThreshold) * 100);

  // Recommended add-ons from inventory
  const recommendedAddOns = PRODUCTS.filter((p) =>
    ['sai-fitness-pro-stainless-shaker', 'mb-hi-protein-bar-30g', 'muscleblaze-creamp-creatine'].includes(p.id)
  );

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;

    const result = applyCoupon(couponCode);
    if (!result.success) {
      setCouponError(result.message);
    } else {
      setCouponError('');
      setCouponCode('');
    }
  };

  const handleCheckoutClick = () => {
    setIsCartDrawerOpen(false);
    navigate('/checkout');
  };

  const handleWhatsAppOrder = () => {
    const url = generateCartWhatsAppUrl(cart, subtotal, shipping, discount, total);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddRecommended = (p: typeof PRODUCTS[0]) => {
    addToCart(p, p.flavors[0]?.name || 'Standard', p.weights[0], 1);
  };

  return (
    <AnimatePresence>
      {isCartDrawerOpen && (
        <>
          {/* Backdrop with Smooth Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: PREMIUM_EASING }}
            onClick={() => setIsCartDrawerOpen(false)}
            className="fixed inset-0 bg-[#252525]/60 backdrop-blur-sm z-50 transition-opacity"
          />

          {/* Drawer panel with 350ms cubic-bezier transition */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: PREMIUM_EASING }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#FFFFFF] border-l border-[#EAE6DC] z-50 flex flex-col shadow-2xl text-left"
          >
            {/* Header with Luxury Brand Accent */}
            <div className="p-4 sm:p-5 border-b border-[#EAE6DC] flex items-center justify-between bg-[#FFFDF5]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFF4D6] border border-[#EDDA5E]/70 flex items-center justify-center text-[#252525] shadow-2xs">
                  <ShoppingBag className="w-4 h-4 text-[#F4BE38]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-heading font-black text-base sm:text-lg text-[#252525] tracking-tight uppercase">
                      MY SHOPPING BAG
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF4D6] border border-[#EDDA5E] text-[10px] font-mono font-bold text-[#252525]">
                      {cartCount} {cartCount === 1 ? 'ITEM' : 'ITEMS'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#858585] block">
                    Authentic Verified Stock
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsCartDrawerOpen(false)}
                className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#EAE6DC] hover:bg-[#F4BE38] hover:text-[#252525] text-[#858585] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs"
                aria-label="Close cart drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="px-5 py-3 bg-[#FFF4D6] border-b border-[#EAE6DC]">
              {amountNeededForFreeShipping > 0 ? (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#858585] flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#252525]" />
                      <span>
                        Add <strong className="text-[#252525] font-extrabold">{formatCurrency(amountNeededForFreeShipping)}</strong> for <strong>FREE Delivery</strong>
                      </span>
                    </span>
                    <span className="text-[#252525] font-mono font-bold text-[11px]">{Math.round(freeShippingProgress)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#EAE6DC] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${freeShippingProgress}%` }}
                      transition={{ duration: 0.5, ease: PREMIUM_EASING }}
                      className="h-full bg-[#F4BE38] rounded-full"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold bg-emerald-50/80 p-2 rounded-xl border border-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span>YOU UNLOCKED FREE INDIA-WIDE DELIVERY!</span>
                </div>
              )}
            </div>

            {/* Cart Items List & Quick Recommendations */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF4D6] border border-[#EDDA5E] flex items-center justify-center text-[#252525] shadow-sm">
                    <ShoppingBag className="w-8 h-8 text-[#F4BE38]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-black text-lg text-[#252525]">Your bag is empty</h3>
                    <p className="text-xs text-[#858585] max-w-xs leading-relaxed">
                      Discover authentic whey protein, creatine, and pre-workout formulas with genuine batch codes.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartDrawerOpen(false);
                      navigate('/shop');
                    }}
                    className="px-6 py-3 rounded-full bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 hover:-translate-y-0.5"
                  >
                    EXPLORE ALL PRODUCTS
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items List with Smooth Layout Transitions */}
                  <div className="space-y-3">
                    <AnimatePresence initial={false}>
                      {cart.map((item) => (
                        <motion.div
                          key={item.cartKey}
                          layout
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            x: 30,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            transition: { duration: 0.25, ease: PREMIUM_EASING }
                          }}
                          className="p-3.5 rounded-2xl bg-[#FFFDF5] border border-[#EAE6DC] hover:border-[#F4BE38]/60 transition-all duration-200 shadow-2xs flex gap-3.5 overflow-hidden group"
                        >
                          {/* Product Thumbnail */}
                          <div className="w-20 h-20 rounded-xl bg-[#FFFFFF] border border-[#EAE6DC] p-1.5 shrink-0 flex items-center justify-center shadow-2xs overflow-hidden">
                            <img
                              src={item.product.images[0] || '/images/products/placeholder-supplement.svg'}
                              alt={item.product.name}
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.onerror = null;
                                target.src = '/images/products/placeholder-supplement.svg';
                              }}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-1">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F4BE38] block truncate">
                                  {item.product.brand}
                                </span>
                                <button
                                  onClick={() => removeFromCart(item.cartKey)}
                                  className="text-[#858585] hover:text-red-500 p-1 rounded-md transition-colors active:scale-90"
                                  title="Remove item"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <Link
                                to={`/product/${item.product.slug}`}
                                onClick={() => setIsCartDrawerOpen(false)}
                                className="font-heading font-bold text-xs sm:text-sm text-[#252525] hover:text-[#F4BE38] transition-colors line-clamp-2 leading-snug"
                              >
                                {item.product.name}
                              </Link>

                              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                                <span className="px-2 py-0.5 rounded-md bg-[#FFFFFF] border border-[#EAE6DC] text-[10px] font-mono text-[#252525]">
                                  {item.selectedFlavor}
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-[#FFFFFF] border border-[#EAE6DC] text-[10px] font-mono text-[#252525]">
                                  {item.selectedWeight.label}
                                </span>
                              </div>
                            </div>

                            {/* Quantity Stepper & Price Breakdown */}
                            <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#EAE6DC]/60">
                              {/* Modern Stepper */}
                              <div className="flex items-center border border-[#EAE6DC] rounded-xl bg-[#FFFFFF] shadow-2xs">
                                <button
                                  onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                                  className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#252525] hover:bg-[#FFF4D6] rounded-l-xl transition-colors active:scale-90"
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <AnimatePresence mode="popLayout">
                                  <motion.span
                                    key={item.quantity}
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.7, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="w-7 text-center text-xs font-bold text-[#252525] font-mono inline-block"
                                  >
                                    {item.quantity}
                                  </motion.span>
                                </AnimatePresence>
                                <button
                                  onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                                  className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#252525] hover:bg-[#FFF4D6] rounded-r-xl transition-colors active:scale-90"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>

                              {/* Price Calculation */}
                              <div className="text-right">
                                <div className="flex items-baseline gap-1.5 justify-end">
                                  <span className="font-heading font-extrabold text-sm sm:text-base text-[#252525]">
                                    {formatCurrency(item.unitPrice * item.quantity)}
                                  </span>
                                  {item.unitMrp > item.unitPrice && (
                                    <span className="text-[10px] text-[#858585] line-through font-mono">
                                      {formatCurrency(item.unitMrp * item.quantity)}
                                    </span>
                                  )}
                                </div>
                                {item.unitMrp > item.unitPrice && (
                                  <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200/60 inline-block">
                                    Save {formatCurrency((item.unitMrp - item.unitPrice) * item.quantity)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Frequently Added Together Recommendations Strip (Solves Dead Space) */}
                  <div className="pt-3 border-t border-[#EAE6DC] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#858585] font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#F4BE38]" />
                        <span>Recommended Athlete Add-Ons</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#858585]">1-Click Add</span>
                    </div>

                    <div className="space-y-2">
                      {recommendedAddOns.map((rec) => {
                        const isInBag = cart.some((i) => i.product.id === rec.id);

                        return (
                          <div
                            key={rec.id}
                            className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#EAE6DC] hover:border-[#F4BE38]/50 flex items-center justify-between gap-3 transition-colors shadow-2xs"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-10 h-10 rounded-lg bg-[#FFFDF5] border border-[#EAE6DC] p-1 shrink-0 flex items-center justify-center overflow-hidden">
                                <img
                                  src={rec.images[0]}
                                  alt={rec.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-heading font-bold text-xs text-[#252525] truncate">
                                  {rec.name}
                                </h4>
                                <span className="font-mono font-extrabold text-xs text-[#252525]">
                                  {formatCurrency(rec.sellingPrice)}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleAddRecommended(rec)}
                              disabled={isInBag}
                              className={`px-3 py-1.5 rounded-full text-[11px] font-heading font-bold tracking-wider transition-all duration-180 flex items-center gap-1 shrink-0 ${
                                isInBag
                                  ? 'bg-[#EAE6DC] text-[#858585] cursor-default'
                                  : 'bg-[#FFF4D6] hover:bg-[#F4BE38] text-[#252525] border border-[#EDDA5E] active:scale-95'
                              }`}
                            >
                              {isInBag ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span>In Bag</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3 h-3 text-[#252525]" />
                                  <span>Add</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer calculations & CTAs */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-[#EAE6DC] bg-[#FFFDF5] space-y-3.5 shadow-lg">
                {/* Coupon Code Section with 1-Click Fast Apply */}
                {!appliedCoupon ? (
                  <div className="space-y-1.5">
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#858585]" />
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Promo code (e.g. SAIFIT10)"
                          className="w-full bg-[#FFFFFF] border border-[#EAE6DC] rounded-xl pl-9 pr-3 py-2 text-xs text-[#252525] placeholder-[#858585] focus:outline-none focus:border-[#F4BE38] transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-[#252525] hover:bg-[#333333] text-xs font-heading font-bold text-[#FFFFFF] transition-all active:scale-95"
                      >
                        Apply
                      </button>
                    </form>
                    {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}

                    {/* Quick Coupon Chip */}
                    <div className="flex items-center justify-between text-[11px] pt-0.5">
                      <span className="text-[#858585]">Available offer:</span>
                      <button
                        type="button"
                        onClick={() => {
                          setCouponCode('SAIFIT10');
                          applyCoupon('SAIFIT10');
                        }}
                        className="text-[#252525] hover:text-[#F4BE38] font-mono font-bold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span className="px-1.5 py-0.5 rounded bg-[#FFF4D6] border border-[#EDDA5E]">SAIFIT10</span>
                        <span>Tap to get 10% OFF</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="font-mono font-bold text-emerald-900">{appliedCoupon.code}</span>
                      <span className="text-emerald-700 font-semibold">(-{formatCurrency(discount)} OFF)</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-[#858585] hover:text-red-500 transition-colors text-[11px] font-bold"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {/* Subtotals & Totals */}
                <div className="space-y-1.5 text-xs pt-1">
                  <div className="flex justify-between text-[#858585]">
                    <span>Item Subtotal</span>
                    <span className="text-[#252525] font-mono font-semibold">{formatCurrency(subtotal)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Coupon Discount ({appliedCoupon?.code})</span>
                      <span className="font-mono font-bold">-{formatCurrency(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#858585]">
                    <span>Estimated Shipping</span>
                    <span className="font-mono">
                      {shipping === 0 ? (
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                          FREE
                        </span>
                      ) : (
                        formatCurrency(shipping)
                      )}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#EAE6DC] flex justify-between items-baseline">
                    <div>
                      <span className="font-heading font-black text-sm text-[#252525] block">Total Amount</span>
                      <span className="text-[10px] font-mono text-[#858585]">Includes GST & All Taxes</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={total}
                        initial={{ opacity: 0.6, y: -2 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading font-black text-2xl text-[#252525]"
                      >
                        {formatCurrency(total)}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Primary & Secondary Actions */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full py-4 rounded-2xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>PROCEED TO SECURE CHECKOUT</span>
                    <ArrowRight className="w-4 h-4 text-[#252525]" />
                  </button>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF4D6]/40 border border-[#25D366] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span>ORDER VIA WHATSAPP (INSTANT ASSIST)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#25D366]" />
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="pt-2 flex items-center justify-center gap-4 text-[10px] font-mono text-[#858585] border-t border-[#EAE6DC]/60">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#F4BE38]" /> 100% Genuine
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-[#F4BE38]" /> Fast Dispatch
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#F4BE38]" /> 256-Bit SSL Safe
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
