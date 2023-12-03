/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx", 
    "./src/components/**/*.tsx", 
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          'primary': "#4b0404",
          'secondary': "#5d0808",
        },
      },
    },
  },
  plugins: [],
}

