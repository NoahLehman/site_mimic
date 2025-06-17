# StripeClone – Bootstrap & JavaScript Project

> **Mimicked site:** [stripe.com](https://stripe.com)

This project is a simplified recreation of the Stripe homepage, built to satisfy the **Frameworks & Intro to JS** assignment. It focuses on clean, responsive design and industry‑standard practices.

## Highlights

| Requirement                                   | Implementation |
|-----------------------------------------------|----------------|
| **Navigation bar (3+ links)**                 | Home, Products, Pricing, Contact – fully responsive via Bootstrap |
| **Home page & hero**                          | Gradient hero with headline and CTA inspired by Stripe |
| **Form**                                      | Contact form with `name`, `email`, and `message` fields |
| **Table**                                     | Pricing table comparing Starter, Growth, Enterprise plans |
| **3 Bootstrap components**                    | Cards (product features), Carousel (testimonials), Navbar |
| **Responsive design**                         | Mobile‑first layout & Bootstrap grid |
| **JavaScript functions (separate file)**      | Validation, pricing calc, dark‑mode toggle, etc. |
| **README**                                    | Comprehensive overview and setup instructions |

## File Structure

```
.
├── index.html   # Main page
├── style.css    # Custom styles
├── main.js      # Future JS functionality
└── README.md
```

## JavaScript Function Summary

| Function | Purpose |
|----------|---------|
| `validateEmail()` | Basic email format validation |
| `calculateTotal()` | Sum cart items with optional tax |
| `getRandomTestimonial()` | Returns random testimonial string |
| `toggleDarkMode()` | Toggles dark/light theme classes |
| `formatUSD()` | Formats numbers as USD currency |
