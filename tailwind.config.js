/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#07090d", panel: "#10141b", line: "#202834", electric: "#1678ff", cyan: "#26d9e8" },
      fontFamily: { sans: ["Manrope", "sans-serif"], display: ["Space Grotesk", "sans-serif"] }
    }
  },
  plugins: []
};
