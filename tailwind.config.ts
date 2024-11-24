/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", // Verde principal (ex: para botões e destaque)
        secondary: "#FFC107", // Amarelo secundário (ex: para ícones ou alertas)
        tertiary: "#2195E8", // Azul terciário (ex: para links ou textos informativos)
        accent: "#FF5722", // Cor de destaque 1 (ex: botões de alerta)
        accentTwo: "#7E8A8C", // Cor de destaque 2 (ex: bordas ou ícones neutros)
        accentThree: "#EBEDED", // Cor de destaque 3 (ex: fundos suaves ou divisores)
        greenDark: "#2F855A", // Verde escuro (usado em ContactSection)
        grayLight: "#F9FAFB", // Cinza claro (fundo de seções)
        grayText: "#E5E7EB", // Cinza para textos secundários
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"], // Fonte principal
      },
    },
  },
  plugins: [],
};
