/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "scrolling-infinite": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scrolling-infinite": "scrolling-infinite 20s linear infinite",
      },
      fontFamily: {
        freight: ["freight big pro"],
      },
    },
  },
  plugins: [],
};
