/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fill: ['hover'], // Ensures hover states for `fill` are generated
    },
  },
  plugins: [],
}

