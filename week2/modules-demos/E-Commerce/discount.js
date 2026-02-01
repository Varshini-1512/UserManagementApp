// Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
  // 1. Check if coupon exists
  // 2. Check minimum amount requirement
  // 3. Check category requirement (if any)
  // Return { valid: true/false, message: '...' }
}

export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  // Return discount amount
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  // 1. Validate coupon
  // 2. If valid, calculate discount
  // 3. Return final amount and discount details
  // Return { 
  //   originalTotal: ..., 
  //   discount: ..., 
  //   finalTotal: ...,
  //   message: '...'
  // }
}