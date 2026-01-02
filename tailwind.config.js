/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#6BC4B2",
        softbg: "#F5F7F6",
        textdark: "#2F3A3A",
      },
    },
  },
  plugins: [],
};
