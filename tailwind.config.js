/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,hbs}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'chatura-gray': '#A09287',
        'fabulous-grape': '#6D344F',
        'evergreen-fog': '#95978A',
        'homburg-gray': '#666D69',
        'mineral-gray': '#515763',
        'pure-white': '#EDECE6',
        'reddened-earth': '#9C6E63',
        'shiitake': '#C8BCAB',
        'silvermist': '#B0B8B2',
        'skyline-steel': '#C6BFB3'
      }
    },
    fontFamily: {
      'body': ['Rubik', 'sans-serif'],
      'header': ['Monoton', 'cursive']
    }
  },
  plugins: [],
}
