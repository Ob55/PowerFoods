import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ============ Golden-brown & white theme ============
        // The dark-section / heading slot ("navy") is a deep espresso brown,
        // the primary accent ("brand") is golden brown, and the bright
        // highlight ("cyanx") is a soft gold that reads on dark brown.
        // Warm neutrals.
        cream: "#faf6ee",
        sand: "#f0e6d4",
        ink: "#2a1d10",
        // CTA — warm golden amber.
        ember: {
          400: "#e6b959",
          500: "#cf9333",
          600: "#b37820",
        },
        // Dark brand slot (hero backdrops, headings, footer).
        navy: {
          DEFAULT: "#3f2a15",
          soft: "#5c4526",
          900: "#2e1c0d",
        },
        // Primary golden-brown accent.
        brand: {
          DEFAULT: "#a06a2c",
          dark: "#6f4718",
        },
        // Soft gold highlight for dark backgrounds.
        cyanx: "#e7c477",
        // Light section backgrounds (override Tailwind's blue `sky`).
        sky: {
          50: "#faf5ec",
          100: "#f3e7d1",
        },
        // Legacy scale kept on-theme (brown) for any leftover usage.
        forest: {
          50: "#faf5ec",
          100: "#f1e4cd",
          200: "#e3cba0",
          300: "#d0ac70",
          400: "#bd8f47",
          500: "#a5762f",
          600: "#875e24",
          700: "#6d4b1e",
          800: "#573c1a",
          900: "#472f14",
        },
        sap: "#a5762f",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(63, 42, 21, 0.18)",
        cta: "0 12px 30px -8px rgba(179, 120, 32, 0.5)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
