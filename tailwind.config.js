/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./*{html, js}`],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: [`robotoMono`, `sans-serif`],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
