/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#9EE86F',
      },
      fontFamily : {
        'Almarai' : ['Almarai', 'sans-serif'],
        'baca'  : ['Bacasime Antique', 'serif'],
    
      }
    },
  },
  plugins: [],
}