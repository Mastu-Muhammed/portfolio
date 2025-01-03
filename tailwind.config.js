/** @type {import('tailwindcss').Config} */
module.exports = {
 // content: ["./dist/*.html"],
   content:'./src/**/*.{html,js}',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
    },
      fill: ['hover'], // Ensures hover states for `fill` are generated
      fontSize: {
        sm: ['0.875rem', '1.25rem'], // Small size
        lg: ['1.125rem', '1.75rem'], // Large size
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

