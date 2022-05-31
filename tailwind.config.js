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
    screens: {
      xs: "290px",
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
        100: "#ffffff",
        200: "#E6E6F2",
        300: "#B8B8CC",
        400: "#9898B3",
        500: "#3A3A4D",
        600: "#262633",
        700: "#1D1D26",
        800: "#14141A",
      },

      dark: {
        100: "#14141A",
        200: "#1D1D26",
        300: "#262633",
        400: "#3A3A4D",
        500: "#9898B3",
        600: "#B8B8CC",
        700: "#E6E6F2",
        800: "#ffffff",
      },

      "lock-cover": {
        light: "#262633",
        dark: "#12121A",
      },

      blue: {
        100: "#3B8DFF",
        200: "#5CB8E6",
        300: "#5B95E6"
      },

      pink: "#E65BE6",
      green: "#5BE672",
      yellow: "#E6E65B",
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
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
