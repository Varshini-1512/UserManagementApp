import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
  // 1. Get product details
  // 2. Check stock availability
  // 3. Check if product already in cart
  //    - If yes, update quantity
  //    - If no, add new item
  // 4. Return success/error message
}

export function removeFromCart(productId) {
  // Remove product from cart
}

export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating
}

export function getCartItems() {
  // Return all cart items with product details
}

export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
}

export function clearCart() {
  // Empty the cart
}