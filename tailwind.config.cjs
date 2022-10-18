module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F76735",
        purple: "#A33492",
        dark: "#1D1D1D",
        trans: "#00000073",
        lightDark: "#424242",
        lightWhite: "#ffffff2b",
        sWhite: "#ffffff4d",
        lightOrange: "#e7825f",
        lightPurple: "#df55ca",
        redy: "#E53434",
      },
      fontFamily: {},
      backgroundImage: {
        circle: "url('./src/assets/circle.svg')",
      },
    },
  },
  plugins: [],
}
