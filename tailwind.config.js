/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    
  
  theme: {
    extend: {
      colors: {
        'rect-purple': '#A18AFF',  
        'rect-light-purple': '#CA8BFE',  
        'rect-blue': '#3FD4F4',     
        'rect-pink': '#FD99AF',     
        'rect-gray': '#717082',  
        'rect-yellow': '#FAC608',
        'rect-white': '#f1f5f9',
        'rect-dark-purple': '#701a75'
      },
    },
  },
  plugins: [],
}

