/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    colors: {
      'white': '#F8FAFC',
      'light-yellow': '#F5D565',
      'beige': '#F5E8D5',
      'amber': '#E9A23B',
      'light-green': '#A0ECB1',
      'bright-green': '#32D657',
      'light-pink': '#F7D4D3',
      'bright-red': '#DD524C',
      'light-gray': '#E3E8EF',
      'bright-gray': '#97A3B6',
      'bright-blue': '#3662E3',
      'light-black ': '#00000033',
    },
    fontFamily: {
      Outfit: ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

