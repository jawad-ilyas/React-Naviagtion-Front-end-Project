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
        lightBorder:"#414360",
        docsPrimary: "#1B1B1D",
        docsSecondory: "#A697CE",
        docsLightBlack:" #282A36",
        docsGrey: "#474748",
        docsYellow: "#4D3800",
        docsGreen: "#193C47",
        docsWhite: "#E3E3E3",
        docsHover: "#a697ce",
        docsHeadingColor: "#6643C5"
      }
    },
  },
  plugins: [],
}