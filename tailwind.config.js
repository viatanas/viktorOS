module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: "Satoshi",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
