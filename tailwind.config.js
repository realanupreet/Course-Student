/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}"],
 
  theme: {
    extend: {
      screens: {
        md: "768px",
      },
      colors: {
        "raw-sienna": "#CB8461",
        "slate-green": "#215D4F",
        "light-grey": "#969696",
        "edfling-green": "#45776B",
        "honey":"#CB8461"
      },

      minHeight: {
        0: "0",
        1250: "1250px",
        1000: "1000px",
        1600: "1600px",
        2200: "2200px",
        830: "830px",
        600: "600px",
      },

      spacing: {
        1000: "1000px",
        2200: "2200px",
        2400: "2400px",
        2700: "2700px",
      },
      fontFamily:{
        poppins:"'Poppins', sans-serif",
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
