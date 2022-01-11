module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#bc4749",
        secondary: "#ffffff",
        dark: "#010001",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
