/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      colors:{
        primary: '#60a5fa',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1440px'
      }
    },
  },
  plugins: [],
}