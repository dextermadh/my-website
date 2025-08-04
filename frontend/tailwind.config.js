/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      animation: {
        typewriter: "typewriter 3s steps(60, end) infinite",
      },
      keyframes: {
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [],
};
