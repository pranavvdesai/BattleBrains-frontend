module.exports = {
  mode: "jit",
  content: [
    "index.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./store/**/*.{js,ts}",
    "./static/**/*.{js,ts}",
    "./nuxt.config.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        transparent: "transparent",

        white: "#FFFFFF",
        black: "#000000",

        light: {
          100: "#E6E8F2",
          200: "#B8BBCC",
          300: "#4C4C66",
          400: "#262633",
        },

        dark: {
          100: "#262633",
          200: "#14141A",
          300: "#3A3A4D",
          400: "#9898B3",
          500: "#CFCFE6",
        },

        "lock-cover": {
          light: "#262633",
          dark: "#12121A",
        },

        blue: {
          normal: "#5B95E6",
          sky: "#5CB8E6",
        },

        pink: "#E65BE6",
        green: "#5BE672",
        yellow: "#E6E65B",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        200: "53.125rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
