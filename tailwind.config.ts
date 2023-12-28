import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/hero.webp')",
      },
      colors: {
        cream: {
          50: "#fdfcfc",
          100: "#f9f7f6",
          200: "#f4efed",
          300: "#f0e9e7",
          400: "#ece4e1",
          500: "#d4cdcb",
          600: "#a5a09e",
          700: "#767271",
          800: "#5e5b5a",
          900: "#474443",
          1000: "#2f2e2d",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
