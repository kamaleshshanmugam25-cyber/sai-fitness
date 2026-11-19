import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { CartItem, Product, ProductVariantWeight, Coupon } from '../types';
import { BRAND_CONFIG } from '../config/brandConfig';
import { ACTIVE_COUPONS } from '../data/coupons';
import { useToast } from './ToastContext';

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    product: Product,
    selectedFlavor: string,
    selectedWeight: ProductVariantWeight,
    quantity?: number
  ) => void;
  removeFromCart: (cartKey: string) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'sai_fitness_cart';
const COUPON_STORAGE_KEY = 'sai_fitness_coupon';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(() => {
    try {
      const saved = localStorage.getItem(COUPON_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const { showToast } = useToast();

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Persist coupon
  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(appliedCoupon));
      } else {
        localStorage.removeItem(COUPON_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to save coupon to localStorage', e);
    }
  }, [appliedCoupon]);

  const addToCart = (
    product: Product,
    selectedFlavor: string,
    selectedWeight: ProductVariantWeight,
    quantity = 1
  ) => {
    const unitPrice = Math.round(product.sellingPrice * selectedWeight.priceMultiplier);
    const unitMrp = Math.round(product.mrp * selectedWeight.mrpMultiplier);
    const cartKey = `${product.id}-${selectedFlavor}-${selectedWeight.id}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.cartKey === cartKey);

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartKey,
            product,
            selectedFlavor,
            selectedWeight,
            unitPrice,
            unitMrp,
            quantity
          }
        ];
      }
    });

    showToast(`Added ${quantity} × ${product.name} (${selectedWeight.label}) to your bag.`, 'success');
    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (cartKey: string) => {
    setCart((prev) => prev.filter((item) => item.cartKey !== cartKey));
    showToast('Item removed from shopping bag.', 'info');
  };

  const updateQuantity = (cartKey: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartKey);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartKey === cartKey ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  }, [cart]);

  const discount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (subtotal < appliedCoupon.minOrderValue) return 0;

    let computed = Math.round((subtotal * appliedCoupon.discountPercentage) / 100);
    if (appliedCoupon.maxDiscount && computed > appliedCoupon.maxDiscount) {
      computed = appliedCoupon.maxDiscount;
    }
    return computed;
  }, [subtotal, appliedCoupon]);

  const shipping = useMemo(() => {
    if (cart.length === 0) return 0;
    const effectiveOrderValue = subtotal - discount;
    if (effectiveOrderValue >= BRAND_CONFIG.features.freeShippingThreshold) {
      return 0;
    }
    return BRAND_CONFIG.features.standardShippingFee;
  }, [cart.length, subtotal, discount]);

  const total = useMemo(() => {
    if (cart.length === 0) return 0;
    return Math.max(0, subtotal - discount + shipping);
  }, [cart.length, subtotal, discount, shipping]);

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    const matched = ACTIVE_COUPONS.find((c) => c.code === cleanCode);

    if (!matched) {
      return { success: false, message: 'Invalid coupon code. Try SAIFIT10' };
    }

    if (subtotal < matched.minOrderValue) {
      return {
        success: false,
        message: `This coupon requires a minimum cart value of ₹${matched.minOrderValue.toLocaleString('en-IN')}`
      };
    }

    setAppliedCoupon(matched);
    showToast(`Coupon "${cleanCode}" applied successfully!`, 'success');
    return { success: true, message: `Promo code applied! Saved ${matched.discountPercentage}%` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed from cart.', 'info');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discount,
        shipping,
        total,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        appliedCoupon,
        applyCoupon,
        removeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
