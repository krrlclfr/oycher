/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'light-white': '#FAF7F0',
        'light-blue': '#CDFCF6',
        'light-violet': '#BCCEF8',
        'light-violet2': '#98A8F8',
        'dark-green': '#2C3333',
        'dark-blue': '#395B64'
      }
    },
    
  },
  plugins: [],
}
