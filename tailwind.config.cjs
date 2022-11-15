/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'request-card': '#1C032B',
        'languages-ballons': '#C54735',
        'range': '#D9D9D9'     
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}