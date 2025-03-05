/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.html"],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '500px' }, // Custom max-md breakpoint
      },
  
      colors: {
        grey_background: "#E8EEF3",
      },

      boxShadow: {
        'body-shadow': "13px 13px 13px #CBCED1, -8px -8px 16px #FFF",
        'logo-shadow': "6px 6px 8px #CBCED1, -6px -6px 8px #FFF",
        'text-shadow': "1px 1px 2px grey",
        'input-shadow': "inset 8px 8px 8px #CBCED1, inset -8px -8px 8px #FFF",
      },
    },
  },
  plugins: [],
}

