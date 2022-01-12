module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#be84fc",
        secondary: "#ffffff",
        dark: "#1a1a1a",
        light: "#2A2A2A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
