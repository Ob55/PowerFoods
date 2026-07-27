export const product = {
  name: "The Encyclopedia of Power Foods",
  tagline: "Ancient food-as-medicine, decoded for the modern kitchen.",
  price: 37,
  compareAtPrice: 97,
  currency: "USD",
  pages: 375,
  guaranteeDays: 30,
  summary:
    "A 375-page practical guide to over 300 everyday 'power foods' — drawn from Traditional Chinese Medicine and modern nutrition — organized so you can match the right foods to how you actually want to feel: more energy, calmer digestion, deeper sleep, and steady, lasting vitality.",

  // The Five Elements framework used to organize foods (from the TCM system).
  fiveElements: [
    {
      element: "Wood",
      organ: "Liver & Gallbladder",
      color: "Green",
      focus: "Detox, flexibility, steady mood",
    },
    {
      element: "Fire",
      organ: "Heart & Small Intestine",
      color: "Red",
      focus: "Circulation, warmth, joy",
    },
    {
      element: "Earth",
      organ: "Spleen & Stomach",
      color: "Yellow-Orange",
      focus: "Digestion, nourishment, stable energy",
    },
    {
      element: "Metal",
      organ: "Lungs & Large Intestine",
      color: "White",
      focus: "Immunity, breath, clear skin",
    },
    {
      element: "Water",
      organ: "Kidneys & Bladder",
      color: "Black-Blue",
      focus: "Deep reserves, longevity, resilience",
    },
  ],

  whatsInside: [
    "Over 300 power foods, each with its properties, best uses, and simple ways to add it to meals",
    "The Five Elements system that matches foods to how you want to feel",
    "Color-coded food therapy — green, red, yellow, white and black-blue foods and what each supports",
    "Seasonal eating guidance so your plate changes with the year",
    "Gentle movement & breathing basics (Tai Chi, Qi Gong, mindfulness) to pair with the foods",
    "Simple, budget-friendly swaps using ingredients you can find at any grocery store",
  ],

  benefits: [
    "Wake up with steadier, all-day energy",
    "Calmer, more comfortable digestion",
    "Deeper, more restful sleep",
    "Sharper focus and less afternoon brain fog",
    "A stronger, more resilient immune system",
    "A holistic routine you can actually keep",
  ],

  // The affiliate bonus that raises perceived value and reduces refunds.
  bonus: {
    name: "The 7-Day Power Foods Quick-Start",
    blurb:
      "An exclusive companion guide — a simple 7-day plan so you know exactly which power foods to eat first, without reading all 375 pages on day one.",
    file: "/bonus/Power-Foods-QuickStart.pdf",
  },
};

export const disclaimer =
  "This website and The Encyclopedia of Power Foods are for general educational purposes only and are not medical advice. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results vary. Always consult a qualified healthcare professional before changing your diet or if you have a medical condition. As an independent affiliate, we may earn a commission on purchases made through links on this site, at no extra cost to you.";
