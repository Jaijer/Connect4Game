/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPurble: "rgb(121, 69, 255)",
        darkPurble: "rgb(92, 45, 213)",
        pinky: "rgb(252, 103, 135)",
        yellowish: "rgb(255, 205, 101)",
      }
    },
  },
  plugins: [],
}

