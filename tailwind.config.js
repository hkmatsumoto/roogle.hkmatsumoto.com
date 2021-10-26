module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "logo": "Alfa Slab One",
      "sans": "Iosevka Aile Web",
      "serif": "Source Serif Pro",
      "mono": "Iosevka Web"
    },
    extend: {
      typography: {
        "sm": {
          css: {
            fontFamily: "Source Serif Pro", // Using the font `docs.rs` uses.
            h1: {
              fontFamily: "Fira Sans", // Ditto
              fontSize: "1.5rem"
            },
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
