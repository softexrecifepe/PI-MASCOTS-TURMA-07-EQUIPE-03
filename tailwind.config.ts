/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Principal
        secondary: "#FFC107", // Secundária
        accent: "#FF5722", // Cor de destaque
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"], // Fonte
      },
    },
  },
  plugins: [],
};
