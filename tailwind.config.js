/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif'],
        dancingscript:['Dancing Script', 'cursive'],
      },
    },
    backgroundImage: {
      'pastel': "url('../public/pastel.svg')",
      'pastel_circular': "url('../public/pastel_circular.svg')",
    },
  },
  plugins: [],
}
