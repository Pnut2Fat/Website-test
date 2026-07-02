export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  stripePaymentLink: string;
  emoji: string;
}

// -----------------------------------------------------------------------
// HOW TO UPDATE:
//   1. Change price here to update what's displayed on the site.
//   2. Log into your Stripe Dashboard → Payment Links to create/update links.
//   3. Paste the new Payment Link URL into stripePaymentLink below.
//   4. To add a new product, copy one of the objects below and add it to the array.
// -----------------------------------------------------------------------

export const products: Product[] = [
  {
    id: "half-dozen",
    name: "Half Dozen",
    description: "6 farm-fresh eggs from our free-range hens. Perfect for a small household.",
    price: 4.00,
    unit: "per half dozen",
    stripePaymentLink: "#",   // TODO: paste your Stripe Payment Link here
    emoji: "🥚",
  },
  {
    id: "dozen",
    name: "One Dozen",
    description: "12 beautiful eggs, collected fresh daily. Our most popular size.",
    price: 7.00,
    unit: "per dozen",
    stripePaymentLink: "#",   // TODO: paste your Stripe Payment Link here
    emoji: "🥚",
  },
  {
    id: "two-dozen",
    name: "Two Dozen",
    description: "24 eggs — great value for families or weekly meal prep.",
    price: 13.00,
    unit: "per two dozen",
    stripePaymentLink: "#",   // TODO: paste your Stripe Payment Link here
    emoji: "🥚",
  },
];
