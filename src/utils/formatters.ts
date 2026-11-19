export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatNumber(val: number): string {
  return new Intl.NumberFormat('en-IN').format(val);
}

export function calculateSavings(mrp: number, sellingPrice: number): number {
  return Math.max(0, mrp - sellingPrice);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
