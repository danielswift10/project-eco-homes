/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkGrey: "#262626",
        red: "#F2380F",
        lightGrey: "#6E6E6E;",
        green: "#6E8C03",
        white: "#ffffff",
        secondary: "#FEFEFE",
        lightBlack: "#E9E9E9",
        black: "#FEFEFE",
        
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,  
        bold: 700,
      },
      boxShadow: {
        missionCard: "0px 2.82349px 31.0584px #000000",
        serviceCard: "0px 4px 10px #0000005e",
        navbar: "0px 5px 7px #0000003d",
        hero :"0px 2.82349px 31.0584px #0000001a",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "880px",
      mdXl: "1000px",
      md: "1060px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};
