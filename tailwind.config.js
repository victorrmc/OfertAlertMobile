/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Outfit-Bold', 'sans-serif'],
        'medium': ['Outfit-Medium', 'sans-serif'],
        'regular': ['Outfit-Regular', 'sans-serif']
      }
    },
  },
  plugins: [],
}

