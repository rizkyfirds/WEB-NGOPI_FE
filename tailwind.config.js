/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': "#2B2626"
        },
        backgroundImage:{
          'bgHome' : "url(./image/bgHome.jpg)"
        }
      },
    },
    plugins: [],
  }
  