/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tab': { 'raw': '(min-width: 1224px)' },
      },
      colors: {
        "main-blue": "#353353",
        "stroke-blue": "#4A4865",
        "dim-blue": "#9593BC",
        "highlight-font": "#FF4D61",
        white: "#FFFFFF",
      },
      fontFamily: {
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
      },
      gridTemplateRows: {
        '1x2': 'grid-template-columns: 1fr 4fr',
      }
    },
  },
  plugins: [],
}

