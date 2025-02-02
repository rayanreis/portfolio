import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}