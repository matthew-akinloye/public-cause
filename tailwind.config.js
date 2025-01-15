/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" 
  ],

  theme: {
    extend: {
      colors: {
        primary: "#FFAF3E", 
        secondary: "#1A192E", 
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],
 
  daisyui: {
    themes: [
      {
        lemonade: {
          ...require("daisyui/src/theming/themes")["lemonade"],
          primary: "#ffaf3e",
          secondary: "#1A192E", 
          accent: "#ffffff1a",
          info: "#ffffff",
        },
      },
    ],
    darkTheme: "dark",
    base: true, 
    styled: true, 
    utils: true, 
    prefix: "", 
    logs: true,
    themeRoot: ":root",
  },
};
