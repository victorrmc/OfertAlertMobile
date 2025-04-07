/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        secondary: {
          default: "#0f172a",
          200: "#e2e8f0",
          300: "#cbd5e1",
          800: "#1e293b",
        }
      },
      fontFamily: {
        'title': ['Outfit-Bold', 'sans-serif'],
        'medium': ['Outfit-Medium', 'sans-serif'],
        'regular': ['Outfit-Regular', 'sans-serif']
      },
    },
  },
  plugins: [],
}

