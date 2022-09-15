/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        main: '#6998AB',
        main_dark: '#406882',
        main_light: '#B1D0E0',
        paragraph: '#878e99',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
