/** @type {import('tailwindcss').Config} */
export default {
  darkMode :"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#414360",
        secondary: "#585b82",
        colorText: "#f7f7ff",
        bgColor: "#B092FF",
        myBlack : "#25292e",
        black: "#242526",
        ligthPrimary: "#f7f7ff",
        ligthSecondory: "#d5d6f5",
        lightBorder:"#414360"
      }
    },
  },
  plugins: [],
}