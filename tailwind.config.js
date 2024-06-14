/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    container:{
      center: 'true',
    },
  
    extend: {

    colors: {
        primaryColor: '#010a5e',
        primaryColorAccent: "#010d78",
        secondaryColor: '#FFCC00',
        sectionTittleColor: '#fff',      
        paragColor: '#fff',
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: '#000',
        darkColorAccent: "#171717",
      },
      keyframes: {
        move1: {
          "35%": {transform: 'translateY(-1rem)'}
        },

        move2: {
        "50%": {transform: 'translateY(-1rem)'}
        },
          "loop-scroll": {
            from: {transform:'translateX(0)'},
            to:{transform:'translateX(-100%)'},
  
          },
        },

      animation: {
        'movingY1': 'move1 2s linear infinite',
        'movingY2': 'move2 1.8s linear infinite',
        'loop-scroll'  :'loop-scroll 8s linear infinite'
      },
      fontFamily:{
        mainFont: ["Oswald", "sans-serif"],
        secondFont: ["Galada", "sans-serif"],
        paragFont:['Inter','sans-serif']

      }
    },
  },
  plugins: [],
}

