module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
    },
    extend: {
      color: {
        yellow: {
          500: "#FFBD12",
          600: "#e0a409",
        },
      },
      dropShadow: {
        stroke: "0px 4px 0px #18191F",
      },
    },
  },
  plugins: [],
};
