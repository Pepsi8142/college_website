/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        index: "linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.5)), url('../img/banner.png')"
      }
    },
  },
  plugins: [],
}

