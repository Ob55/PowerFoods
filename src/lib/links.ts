// Single source of truth for the affiliate checkout link.
// Change the affiliate ID in ONE place (or via .env) and every CTA updates.

export const AFFILIATE_ID = import.meta.env.VITE_AFFILIATE_ID ?? "MrAlvin55";

export const CHECKOUT_URL =
  import.meta.env.VITE_CHECKOUT_URL ??
  `https://www.checkout-ds24.com/product/557828#aff=${AFFILIATE_ID}`;

// Internal route for the post-purchase bonus.
export const BONUS_ROUTE = "/bonus";
