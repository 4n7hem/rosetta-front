/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary-300": "#CF6657",
        "primary-500": "#c54735",
        "primary-800": "#A43B2C",
        "secondary-300": "#422D4E",
        "secondary-500": "#1C032B",
        "secondary-800": "#170324",
        "accent-300": "#E7A671",
        "accent-500": "#E29454",
        "accent-800": "#BC7B46",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}