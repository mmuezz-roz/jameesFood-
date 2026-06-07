/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#d52727",
        "strawberry-red": "#d52727",
        "cream-bg": "#fff9ea",
        "surface": "#fff9ea",
        "surface-dim": "#dfdaca",
        "surface-bright": "#fff9ea",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f9f3e3",
        "on-surface": "#1e1c12",
        "on-surface-variant": "#5c403d",
        "background": "#fff9ea",
        "mango-yellow": "#FFBA41",
        "tertiary": "#0f624f",
        "outline": "#906f6b"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2.5rem",
        "4xl": "4rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "80px",
        "container-max": "1440px",
        "section-gap": "120px"
      },
      fontFamily: {
        display: ["'Be Vietnam Pro'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
