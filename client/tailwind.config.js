/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    ],
  theme: {
    extend: {
      colors:{
        primary:"#30D5C8",
      }
    },
  },
  plugins: [],
}

