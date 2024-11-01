/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Principal
        secondary: "#FFC107", // Secundária
        tertiary: "#2195E8", //Terciária
        accent: "#FF5722", // Cor de destaque
        accentTwo: "#7E8A8C", // Cor de destaque
        accentThree: "#EBEDED", // Cor de destaque
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"], // Fonte
      },
    },
  },
  plugins: [],
};
