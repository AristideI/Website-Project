/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./sections/*.html"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '800px'},

      'sm': {'max': '639px'},
    },
    extend: {
      colors :{
        "primary-green": "#8acc50",
        "main-blue": "#0D2E4A",
        "gr-blue": "#001240",
        "gr-green": "#456f49",
      },
      spacing: {
        padd: '7%',
       }
    },
  },
  plugins: [],
}

