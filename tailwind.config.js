/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rhinamic: {
          primary: '#2C5F2D',    // Forest green (primary)
          secondary: '#DDC9B4',  // Sandy beige (secondary)
          accent: '#52575D',     // Stone gray (accent)
          light: '#E8E8E8',      // Light gray
          dark: '#1E3A1F',       // Dark green
          purple: '#5D4E8E',     // Purple accent (from original brand)
          lavender: '#9C8CD4',   // Light purple for subtle accents
        }
      },
    },
  },
  plugins: [],
};
