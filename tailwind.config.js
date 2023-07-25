/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custome:'-9px -9px 18px rgba(238, 238, 238, 1),9px 9px 10px rgba(238, 238, 238, 1)'
      },
      borderColor: {
        custome:"rgba(255, 255, 255, 0.20)"
      }
    
    },
  },
  plugins: [],
}