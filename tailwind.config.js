/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inria: "'Inria Serif', serif",
        rice: "'Spicy Rice', serif", 
      }
    },
  },
  plugins: [require("daisyui")],
}

