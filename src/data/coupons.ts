import type { Coupon } from '../types';

export const ACTIVE_COUPONS: Coupon[] = [
  {
    code: 'SAIFIT10',
    discountPercentage: 10,
    maxDiscount: 500,
    minOrderValue: 1499,
    description: '10% OFF on all orders over ₹1,499 (Max ₹500)'
  },
  {
    code: 'PROSTACK15',
    discountPercentage: 15,
    maxDiscount: 1000,
    minOrderValue: 4999,
    description: '15% OFF on stack bundles over ₹4,999 (Max ₹1,000)'
  },
  {
    code: 'FIRST5',
    discountPercentage: 5,
    maxDiscount: 250,
    minOrderValue: 999,
    description: 'Flat 5% OFF on your order (Min order ₹999)'
  }
];
