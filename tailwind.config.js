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
        primary: "#d02525",
        "background-light": "#f8f6f6",
        "background-dark": "#170a0a",
        "card-dark": "#2a1a1a",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
}