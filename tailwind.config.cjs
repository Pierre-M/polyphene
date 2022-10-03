/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F77EF0",
        secondary: "#4FFFA0",
      }
    },
  },
  plugins: [],
};
