// Single source of truth for the affiliate checkout link.
// Change the affiliate ID in ONE place (or via .env) and every CTA updates.

export const AFFILIATE_ID = import.meta.env.VITE_AFFILIATE_ID ?? "MrAlvin55";

export const CHECKOUT_URL =
  import.meta.env.VITE_CHECKOUT_URL ??
  `https://www.checkout-ds24.com/product/557828#aff=${AFFILIATE_ID}`;

// Internal route for the post-purchase bonus.
export const BONUS_ROUTE = "/bonus";

// Hero demonstration videos live in Google Drive (IDs in products.ts). They only
// embed if the files are shared publicly ("Anyone with the link — Viewer").
// The IDs supplied so far are not public (they 404 / require sign-in), so the
// embeds are disabled and the media area shows a poster/placeholder instead of a
// broken "file does not exist" frame. Flip this to true (or set
// VITE_HERO_VIDEOS_ENABLED=true) once the client shares the videos.
export const HERO_VIDEOS_ENABLED =
  (import.meta.env.VITE_HERO_VIDEOS_ENABLED ?? "false") === "true";
