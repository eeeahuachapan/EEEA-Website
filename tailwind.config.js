import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '3/10': '32%',
      },
      colors: {

        primary: "#b3c7e4",

        secondary: "#2d5292",

        accent: "#f4676a",
        accent_hover: "#e76163",
        accent_active: "#c15153",

      
          },
          backgroundImage: {
            'hero': "url('/assets/banner.webp')",
            'shapes':'url(/assets/Pattern.webp)',
          },
      fontFamily: {
            Montserrat: ['Montserrat, sans-serif'],
          }
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [],
  },
}
