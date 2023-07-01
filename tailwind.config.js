/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
        laro: ["Laro", "serif"],
        press: ["'Press Start 2P'", "cursive"],
      },
    },
  },
  plugins: [],
};
