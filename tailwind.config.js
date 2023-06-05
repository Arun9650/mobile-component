/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3xl': "0px -2px 7px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [],
}