/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0A1944",
        "secondary": "#3C4F6D",
        "accent":"#A5B5C4",
        "neutral":"#D9D8DD",
        "base-200":"#F6F7F2",
      },
    },
  },
  plugins: [],
}
