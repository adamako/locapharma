/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      base: "#244065",
      success: "#99CC33",
      back: "#FAFAFA",
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
