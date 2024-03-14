/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: "#b3c7e4",

        secondary: "#2d5292",

        accent: "#f4676a",

      
          },
          backgroundImage: {
            'hero': "url('/src/assets/banner.jpg')",
          },
      fontFamily: {
            Montserrat: ['Montserrat, sans-serif'],
          }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [],
  },
}
