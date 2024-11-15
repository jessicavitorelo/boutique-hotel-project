/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'display': ['Oswald', 'serif'],
    },
    extend: {
      colors: { 
        cream: '#F4EFE6',
        storm: '#686867',
        green: '#5E6C5B',
        white: '#FEFCF6',
        sky: '#D6E0E2',

      }
    },
  },
  plugins: [],
}
