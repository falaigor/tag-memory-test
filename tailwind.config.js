module.exports = {
  content: ["./src/**/*.{tsx, jsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
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
