import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          navy: "#102A63",
          navyDark: "#0A1D45",
          navyLight: "#163884",
          deepBlue: "#123B82",
          gold: "#F4C62E",
          goldLight: "#FDE68A",
          goldDark: "#D4A31C",
          bgLight: "#F6F7FA",
          bgMuted: "#ECEEF4",
          textDark: "#101828",
          textMuted: "#475569",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Manrope", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "site": "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
