import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        handwritten: ["Caveat", "cursive"],
        indie: ["Indie Flower", "cursive"],
      },
    },
  },
  plugins: [typography],
};
