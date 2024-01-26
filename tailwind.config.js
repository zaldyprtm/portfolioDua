/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        screens: {
          'xs': '500px',
          'sm': '640px',
        },
      },
    },
  },
  plugins: [],
}

