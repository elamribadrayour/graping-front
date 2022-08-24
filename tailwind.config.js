/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background" : "bg-gradient-to-r from-gray-700 via-gray-900 to-black"
      }
    },
  },
  plugins: [],
}