import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f7f1",
          100: "#dbecdd",
          200: "#b9d9be",
          300: "#8dbe96",
          400: "#5c9d68",
          500: "#3d8049",
          600: "#2c6538",
          700: "#24512f",
          800: "#1f4128",
          900: "#1a3622",
        },
        sap: "#507d2a",
        ember: {
          400: "#ff9d3c",
          500: "#f97316",
          600: "#e05e0b",
        },
        cream: "#f7f4ee",
        sand: "#efe8db",
        ink: "#1c2620",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(28, 38, 32, 0.18)",
        cta: "0 12px 30px -8px rgba(224, 94, 11, 0.5)",
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
