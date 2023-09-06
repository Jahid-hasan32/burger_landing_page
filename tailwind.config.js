/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'c-primary' : "#010a5e",
        'c-primary-light' : "#010d78",
        'c-secondary' : "#FFCC00",
        'c-paragraph' : "#c0c0c0",
        'c-white' : "#fff",
        'c-back' : "#000",
        'c-green' : "#007036",
        'c-red' : "#cc3433",
        'c-dark-light' : "#171717",
      },
      keyframes : {
        move : {
         "50%" : {transform : 'translateY(-1rem)'}
        }
      },
      animation : {
        'movingY' : 'move 2s linear infinite'
      }
    },
    container:{
      center : true,
      padding:{
        DEFAULT : '1rem',
        sm: '1.5rem'
        
      }
    }
  },
  plugins: [],
}