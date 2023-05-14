module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        hubot: "Hubot Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
