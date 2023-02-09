/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#27244e",
        secondary: "#ff4f5b"
      }
    },
  },
  plugins: [],
}
