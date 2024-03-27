/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge:['./styles/**/*.css'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          orange: {
            solid: '#FF725E',
            deski: 'rgb(255, 101, 89)',
            deskibg: '#fdf3e7'
          },
          ebook: {
            yellow: '#fedc00',
            orange: '#ee4d30',
          },
          blue: {
            50: "#2D9CDB",
            100: "#2E68B8",
            200: "#191A1D",
          },

          light: "#f3f3eb",
          grey: "#455A64",
          darkgrey: "#484848",
          green: "#006D2C",
          darkGreen: "#0C4A25",
          dark: "#191A1D",
          yellow: "#FEC510",
          pure: "#EEF4EB",

          gray: {
            100: "#EEF4EB",
            200: "#CCCCCC",
            300: "#484848",
            400: "#CECECE33",
          },
        },
      },
      backgroundImage: {
        heroBg: "url('../assets/images/shared/bg-hero.svg')",
        secondaryBg: "url('../assets/images/bgImage/sircleBg.svg')",
      },
      keyframes: {
        blinkingBg: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        blinkingBg: 'blinkingBg 2s ease-in-out infinite',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
