module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      paleViolet: "hsl(276, 100%, 81%)",
      moderateViolet: "hsl(276, 55%, 52%)",
      desaturatedDarkViolet: " hsl(271, 15%, 43%)",
      grayishBlue: "hsl(206, 6%, 79%)",
      veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
      darkGrayishViolet: "hsl(270, 7%, 64%)",
      lightMagenta: "hsl(293, 100%, 63%)",
      lightViolet: "hsl(264, 100%, 61%)",
      lightGrayishViolet: "hsl(270, 20%, 96%)",
      veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
      veryLightMagenta: "hsl(289, 100%, 72%)",
      veryLightGray: "#FAFAFA",
      white: "#ffffff",
      black: "#000000",
      mediumGrayishViolet: "#EDE5F4",
      lightGrayishViolet2: "#F7F5FA",
    },
    screens: {
      tablet: { max: "1000px" },
    },
    extend: {},
  },
  plugins: [require("postcss-100vh-fix")],
};
