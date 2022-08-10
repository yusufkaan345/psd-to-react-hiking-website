/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'title': '  4px -4px 1.1mm #C1BDAA',
        'title2': '  4px -6px 1.1mm #0F0F0F',
       
      }
    },
  },
  plugins: [],
}