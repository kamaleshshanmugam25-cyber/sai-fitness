import { BRAND_CONFIG } from '../config/brandConfig';
import type { CartItem, Product, ProductVariantWeight } from '../types';
import { formatCurrency } from './formatters';

export function getCleanWhatsAppNumber(): string {
  // Strips non-digit characters for standard wa.me API link
  return BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
}

/**
 * Generates WhatsApp enquiry link for a single product with chosen variant
 */
export function generateProductWhatsAppUrl(
  product: Product,
  flavorName: string,
  weight: ProductVariantWeight,
  price: number
): string {
  const phone = getCleanWhatsAppNumber();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://saifitness.in/product/${product.slug}`;
  
  const message = [
    `*SAI FITNESS — PRODUCT ENQUIRY*`,
    `Hello Sai Fitness Team, I am interested in purchasing this authentic supplement:`,
    ``,
    `*Product:* ${product.name}`,
    `*Brand:* ${product.brand}`,
    `*Flavour:* ${flavorName}`,
    `*Size / Weight:* ${weight.label}`,
    `*Price:* ${formatCurrency(price)}`,
    `*Product Link:* ${currentUrl}`,
    ``,
    `Please confirm stock availability, batch code authenticity, and delivery time to my location.`
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates WhatsApp order enquiry link for all items in the shopping cart
 */
export function generateCartWhatsAppUrl(
  items: CartItem[],
  subtotal: number,
  shipping: number,
  discount: number,
  total: number
): string {
  const phone = getCleanWhatsAppNumber();
  
  const itemLines = items.map((item, index) => {
    return `${index + 1}. *${item.product.name}*\n   • Flavour: ${item.selectedFlavor}\n   • Size: ${item.selectedWeight.label}\n   • Qty: ${item.quantity} × ${formatCurrency(item.unitPrice)} = ${formatCurrency(item.unitPrice * item.quantity)}`;
  }).join('\n\n');

  const message = [
    `*SAI FITNESS — CART ORDER ENQUIRY*`,
    `Hello Sai Fitness Team, I would like to place an assisted order for the following items:`,
    ``,
    itemLines,
    ``,
    `--------------------------`,
    `*Subtotal:* ${formatCurrency(subtotal)}`,
    discount > 0 ? `*Discount Applied:* -${formatCurrency(discount)}` : null,
    `*Shipping:* ${shipping === 0 ? 'FREE Express Delivery' : formatCurrency(shipping)}`,
    `*Estimated Total:* ${formatCurrency(total)}`,
    `--------------------------`,
    ``,
    `*(Note: This is an order enquiry. Please share UPI / payment details and estimated dispatch date.)*`
  ].filter(Boolean).join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates direct general support / nutrition guidance enquiry
 */
export function generateGeneralSupportWhatsAppUrl(subject?: string): string {
  const phone = getCleanWhatsAppNumber();
  const intro = subject
    ? `Hello Sai Fitness Team, I have an enquiry regarding: ${subject}`
    : `Hello Sai Fitness Team, I need assistance with supplement recommendations and authentic sports nutrition for my fitness goal.`;
  
  const message = [
    `*SAI FITNESS — CUSTOMER CARE & CONSULTATION*`,
    intro,
    ``,
    `Looking forward to your guidance.`
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
