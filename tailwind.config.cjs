/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
    
  ],
  theme: {
    extend: {
      colors: {
        'transparent' : 'rgb(0%,0%,0%)',
        
        'gray-100' : '#f2f2f2',
        'gray-200' : '#d9d9d9',
        'gray-300' : '#808080',
        'gray-400' : '#333333',
        'gray-500' : '#262626',
        'gray-600' : '#1a1a1a',
        'gray-700' : '#0d0d0d',

        "danger" : "#E25858",

        "blue" : "#4EA8DE",
        "blue-dark" : "#1E6F9F",

        "purple" : "#8284FA",
        "purple-dark" : "#5E60CE",
      },
      keyframes: {
        opacity: {
          '0%' : {opacity: .1},
          '100%' : {opacity: 1}
        },
      },
      animation: {
        'opacity' : 'opacity 500ms '
      }
    }
  },
 
  fontSize:{
    xs: 12,
    sm: 14,
    md: 16,
  },
  plugins: [],
}
