/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-30': "url('assets/bg_hero_30.png')",
        'hero-25': "url('assets/bg_hero_25.png')",
      }
    },
  },
  plugins: [],
}
