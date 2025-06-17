// main.js – future interactive features (currently not connected to UI)

/**
 * Validate email format using simple regex.
 * @param {string} email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

/**
 * Calculate total price including tax & fees.
 * @param {Array<number>} prices Array of item prices
 * @param {number} taxRate Tax rate as decimal (e.g., 0.07 for 7%)
 */
export function calculateTotal(prices, taxRate = 0.0) {
  const subtotal = prices.reduce((sum, p) => sum + p, 0);
  return +(subtotal * (1 + taxRate)).toFixed(2);
}

/**
 * Return a random customer testimonial from the predefined list.
 */
export function getRandomTestimonial() {
  const testimonials = [
    "StripeClone saved us weeks of engineering time.",
    "The onboarding flow was incredibly smooth.",
    "Support is top‑notch and responsive."
  ];
  return testimonials[Math.floor(Math.random() * testimonials.length)];
}

/**
 * Toggle dark mode on the site.
 */
export function toggleDarkMode() {
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('text-white');
}

/**
 * Format number into USD currency string.
 * @param {number} amount
 * @returns {string}
 */
export function formatUSD(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// Example usage (for testing in console)
console.log('Email valid:', validateEmail('test@example.com'));
console.log('Cart total:', formatUSD(calculateTotal([19.99, 29.99], 0.06)));
console.log('Random testimonial:', getRandomTestimonial());
