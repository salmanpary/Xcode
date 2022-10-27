/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'bg-prm': '#041541',
      'text-prm':'#BFD1FF',
      'text-sec':'#041541'
    },
    backgroundImage: {
      'hero': "url('/bg.png')",
      
    }

  }
  },
  plugins: [],
}