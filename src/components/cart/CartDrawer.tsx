import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, ExternalLink } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { formatCurrency } from '../../utils/formatters';
import { generateCartWhatsAppUrl } from '../../utils/whatsapp';
import { Link, useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    removeFromCart,
    updateQuantity,
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

  const freeShippingThreshold = BRAND_CONFIG.features.freeShippingThreshold;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discount));
  const freeShippingProgress = Math.min(100, (((subtotal - discount)) / freeShippingThreshold) * 100);

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

  return (
    <AnimatePresence>
      {isCartDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartDrawerOpen(false)}
            className="fixed inset-0 bg-[#252821]/60 backdrop-blur-sm z-50 transition-opacity"
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#FFFFFF] border-l border-[#E8E4DA] z-50 flex flex-col shadow-2xl text-left"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#E8E4DA] flex items-center justify-between bg-[#F8F6F0]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#263C32]" />
                <h2 className="font-heading font-bold text-lg text-[#252821] tracking-tight">
                  YOUR BAG ({cartCount})
                </h2>
              </div>
              <button
                onClick={() => setIsCartDrawerOpen(false)}
                className="p-2 text-[#85877F] hover:text-[#252821] hover:bg-[#E8E4DA] rounded-lg transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="px-5 py-3.5 bg-[#EFEEE7] border-b border-[#E8E4DA]">
              {amountNeededForFreeShipping > 0 ? (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#85877F]">
                      Add <span className="text-[#263C32] font-bold">{formatCurrency(amountNeededForFreeShipping)}</span> for FREE shipping
                    </span>
                    <span className="text-[#85877F] font-mono text-[11px]">{Math.round(freeShippingProgress)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E8E4DA] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#263C32] transition-all duration-300"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-[#263C32] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#263C32]" />
                  <span>You qualify for FREE India-Wide Delivery</span>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#E8E4DA]">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F8F6F0] flex items-center justify-center text-[#85877F]">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-lg text-[#252821]">Your bag is empty</h3>
                    <p className="text-xs text-[#85877F] max-w-xs">
                      Discover authentic whey protein, creatine, and pre-workout formulas to support your training.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartDrawerOpen(false);
                      navigate('/shop');
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-[#263C32] text-[#FFFFFF] font-bold text-xs uppercase"
                  >
                    EXPLORE PRODUCTS
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartKey} className="pt-4 first:pt-0 flex gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex justify-between items-start">
                        <Link
                          to={`/product/${item.product.slug}`}
                          onClick={() => setIsCartDrawerOpen(false)}
                          className="font-title font-bold text-sm text-[#252821] hover:text-[#263C32] transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.cartKey)}
                          className="text-[#85877F] hover:text-red-500 p-1 transition-colors ml-2"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-[#85877F] space-y-0.5">
                        <p>Flavour: <span className="text-[#252821] font-medium">{item.selectedFlavor}</span></p>
                        <p>Size: <span className="text-[#252821] font-medium">{item.selectedWeight.label}</span></p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-[#E8E4DA] rounded-lg bg-[#F8F6F0]">
                          <button
                            onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                            className="px-2.5 py-1 text-xs text-[#252821] hover:bg-[#E8E4DA] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-3 text-xs font-bold text-[#252821] font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                            className="px-2.5 py-1 text-xs text-[#252821] hover:bg-[#E8E4DA] transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-heading font-extrabold text-sm text-[#263C32]">
                            {formatCurrency(item.unitPrice * item.quantity)}
                          </p>
                          {item.unitMrp > item.unitPrice && (
                            <p className="text-[11px] text-[#85877F] line-through">
                              {formatCurrency(item.unitMrp * item.quantity)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer calculations & CTAs */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-[#E8E4DA] bg-[#F8F6F0] space-y-4">
                {/* Coupon Code Section */}
                {!appliedCoupon ? (
                  <form onSubmit={handleApplyCoupon} className="space-y-1">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#85877F]" />
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Promo code (e.g. SAIFIT10)"
                          className="w-full bg-[#FFFFFF] border border-[#E8E4DA] rounded-lg pl-9 pr-3 py-2 text-xs text-[#252821] placeholder-[#85877F] focus:outline-none focus:border-[#263C32]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-3 py-2 rounded-lg bg-[#263C32] text-xs font-bold text-[#FFFFFF] hover:bg-[#1C2D25] transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}
                  </form>
                ) : (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FFFFFF] border border-[#263C32]/30 text-xs">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-[#263C32]" />
                      <span className="font-bold text-[#263C32]">{appliedCoupon.code}</span>
                      <span className="text-[#85877F]">(-{formatCurrency(discount)})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-[#85877F] hover:text-red-500 transition-colors text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {/* Subtotals & Totals */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#85877F]">
                    <span>Subtotal</span>
                    <span className="text-[#252821] font-mono font-medium">{formatCurrency(subtotal)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-[#263C32]">
                      <span>Discount ({appliedCoupon?.code})</span>
                      <span className="font-mono font-bold">-{formatCurrency(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#85877F]">
                    <span>Shipping</span>
                    <span className="font-mono">
                      {shipping === 0 ? (
                        <span className="text-[#263C32] font-bold">FREE</span>
                      ) : (
                        formatCurrency(shipping)
                      )}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#E8E4DA] flex justify-between items-baseline">
                    <span className="font-heading font-bold text-sm text-[#252821]">Total Amount</span>
                    <span className="font-heading font-extrabold text-xl text-[#263C32]">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full py-3.5 rounded-xl bg-[#263C32] hover:bg-[#1C2D25] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>PROCEED TO CHECKOUT</span>
                    <ArrowRight className="w-4 h-4 text-[#D5AD65]" />
                  </button>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-3 rounded-xl bg-[#FFFFFF] hover:bg-[#F8F6F0] border border-[#25D366] text-[#252821] font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span>ORDER VIA WHATSAPP</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#25D366]" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
