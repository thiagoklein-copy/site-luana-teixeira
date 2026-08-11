import type { Config } from "tailwindcss";

/**
 * Color system — warm beige + aged gold, tuned for web contrast
 * (Instagram cream/gold washes out on screens; ink and surfaces are stronger here).
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
          DEFAULT: "#9C8458",
          dark: "#6B5638",
        },
        cream: "#E6DFD2",
        beige: "#F8F4EC",
        whatsapp: "#25D366",
        ink: {
          DEFAULT: "#2A271F",
          muted: "#5C574C",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 24px rgba(42, 39, 31, 0.1)",
        lift: "0 14px 40px rgba(42, 39, 31, 0.14)",
        glass: "0 10px 36px rgba(42, 39, 31, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
