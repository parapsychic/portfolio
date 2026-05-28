/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bg: "#FFE45C",
        bgAlt: "#FFD93D",
        ink: "#0E0E10",
        ink2: "#2A2A2E",
        mute: "#5B5B62",
        paper: "#FFFFFF",
        pink: "#FF3D7F",
        blue: "#2D5BFF",
        lime: "#B5E000",
        coral: "#FF6A3D",
        sky: "#9BD6FF",
        violet: "#C8A2FF",
      },
      fontFamily: {
        sans: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        chunk: "6px 6px 0 0 #0E0E10",
        chunkSm: "4px 4px 0 0 #0E0E10",
        chunkLg: "10px 10px 0 0 #0E0E10",
      },
      animation: {
        wiggle: "wiggle 2.4s ease-in-out infinite",
        spinSlow: "spin 14s linear infinite",
        bob: "bob 5s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
