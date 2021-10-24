module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "logo": "Alfa Slab One",
      "sans": "Fira Sans",
      "serif": "Source Serif Pro",
      "mono": "IBM Plex Mono"
    },
    extend: {
      typography: {
        "sm": {
          css: {
            fontFamily: "Source Serif Pro",
            h1: {
              fontFamily: "Fira Sans",
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
