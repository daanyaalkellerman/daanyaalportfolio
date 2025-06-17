/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#222831',
        'dark-gray': '#424242',
        'soft-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
  