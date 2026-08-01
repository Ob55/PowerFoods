import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ============ Premium Nail Academy palette (per design brief) ============
        // Minimal, editorial. One luxury accent; a warm terracotta for CTAs only.
        paper: "#FFF9F7", // primary page background
        linen: "#F8F1ED", // secondary background (alternating sections)
        line: "#E7DDD8", // subtle 1px borders (used instead of heavy shadows)
        ink: "#2D2A2A", // primary text: headings, nav, buttons, labels
        graphite: "#6E6765", // secondary text: paragraphs, descriptions, metadata
        muted: "#9A918E", // muted text: dates, small labels, breadcrumbs
        accent: {
          DEFAULT: "#D4A373", // the single luxury accent (icons, dividers, badges)
          soft: "#EAD9C4",
        },
        cta: {
          DEFAULT: "#C97B63", // primary button fill
          hover: "#B66B54",
        },
        bundle: "#F2E6DF", // richer background for the flagship bundle section
      },
      fontFamily: {
        // Manrope preferred, Inter as the reading fallback.
        display: ['"Manrope"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        input: "14px",
      },
      maxWidth: {
        content: "1280px",
        reading: "760px",
      },
      boxShadow: {
        // Very subtle only — no heavy floating cards.
        soft: "0 8px 30px rgba(0,0,0,0.05)",
        card: "0 1px 2px rgba(45,42,42,0.05)",
        cta: "0 8px 24px -8px rgba(201,123,99,0.45)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
