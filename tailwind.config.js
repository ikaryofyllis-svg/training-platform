/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "background-light": "rgb(var(--color-background-light) / <alpha-value>)",
        "background-dark": "rgb(var(--color-background-dark) / <alpha-value>)",
        "card-dark": "rgb(var(--color-card-dark) / <alpha-value>)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
}
