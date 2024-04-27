/** @type {import('tailwindcss').Config} */
export default {
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
      }
    },
  },
  plugins: [],
}