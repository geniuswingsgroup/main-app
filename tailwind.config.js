/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'Navbar-responsive': '1120px', // Custom breakpoint at 1085px
      },
      colors: {
        primary: '#E4C24A', // Primary color (Blue)
        hover: '#B1911E', // Secondary color (Violet)
        text_color:'#FFFFFF',
        sub_text:'#B0B0B0',
        background_color:'#1e1e1e',


      },
      backgroundImage: {
        'primary': 'linear-gradient(to right, #C89B3C, #E4C24A, #B1911E)', // Base gradient
        'hover': 'linear-gradient(to right, #CFAA59, #DFC543, #A8891C)', // Hover gradient
        'active': 'linear-gradient(to right, #B98632, #D3B039, #9F7F1A)', // Active gradient
      },
      },
    },
  
  plugins: [
    require('flowbite/plugin')
  ]
}
