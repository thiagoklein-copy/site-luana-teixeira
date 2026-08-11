import type { Config } from "tailwindcss";

/**
 * Color system centralized here for one-place tweaking.
 * Mirrored in src/app/globals.css via @theme for Tailwind v4.
 * Palette: warm beige/parchment + aged gold/caramel (Luana Instagram identity).
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B39B72",
          dark: "#8C7354",
        },
        cream: "#E8E2D6",
        beige: "#F2EDE2",
        whatsapp: "#25D366",
        ink: {
          DEFAULT: "#3A362C",
          muted: "#7A7566",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(58, 54, 44, 0.06)",
        lift: "0 12px 40px rgba(58, 54, 44, 0.1)",
        glass: "0 8px 32px rgba(58, 54, 44, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
