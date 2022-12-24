/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,hbs}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black-magic': '#313131',
        'carnelian': '#5B3D3D',
        'chatura-gray': '#A09287',
        'fabulous-grape': '#401F2E',
        'evergreen-fog': '#95978A',
        'homburg-gray': '#666D69',
        'mineral-gray': '#343840',
        'mount-etna': '#303C40',
        'kestrel-white': '#E2D6C6',
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
