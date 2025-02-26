const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        bold: 700,
        heavy: 900,
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      backgroundImage: {
        'my_bg_image' : "url(..src/assets/jared_ruddy.jpg)",
      }
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: 
  [require("tailwindcss-fluid-type")],


};
