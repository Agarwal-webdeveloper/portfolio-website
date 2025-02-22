/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px', // Custom breakpoint
      sm: '640px',
      md: '767px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
}