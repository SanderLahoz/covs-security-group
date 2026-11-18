import type { Config } from "tailwindcss";

/**
 * OBS: tailwind.config blev ikke inkluderet i den oprindelige Next.js-mappe
 * (kun app/, lib/ og components/). Paletten og animationerne nedenfor er
 * udledt af klasserne (brand-*, cream-*, navy-*, animate-fade-up, animate-float)
 * og farverne i illustrationerne. Erstat med jeres originale tailwind.config,
 * hvis I har den – bare husk at `content` peger på .vue-filer.
 */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        // Varme creme-toner
        cream: {
          50: "#fffcf8",
          100: "#fdf6ee",
          200: "#fbebdd",
          300: "#ebd5bf",
        },
        // Mørk marineblå til tekst
        navy: {
          900: "#16233a",
          700: "#34435a",
          500: "#5b6b80",
          400: "#7d8b9e",
        },
        // Én rolig mørkegrøn accent
        brand: {
          100: "#e3f1ea",
          400: "#2e8a6b",
          500: "#1e6b52",
          600: "#175742",
        },
        // Kun til illustrationer
        coral: {
          400: "#f2a07b",
          500: "#e9826a",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
