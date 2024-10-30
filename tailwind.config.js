/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ajout de la police Roboto
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
