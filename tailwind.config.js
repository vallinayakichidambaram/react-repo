/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "yellow-300": "#F27329",
        "red-500": "#F24E29",
        "blue-200": "#1F6373",
        "blue-300": "#1A5A73",
        "blue-400": "#1A5173",
        "white-100": "#E0E0E0",
      }
    }
  },
  plugins: [],
}

