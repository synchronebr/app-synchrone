/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}", 
    "./src/components/**/*.{js,jsx,ts,tsx}", 
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
