/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'drips-black': '#000000',
        'drips-grey': '#4A4A4A',
        'drips-gold': '#FFD700',
        'drips-white': '#FFFFFF',
        'drips-brown': '#8B4513',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
