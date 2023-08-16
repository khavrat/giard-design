module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "36px",
        lg: "89px",
      },
    },
    fontFamily: {
      sans: ["Inter", "Arial", "sans-serif"],
      heading: ["Montserrat", "Helvetica", "sans-serif"],
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      xl: "28px",
      "4xl": "40px",
      "5xl": "48px",
      "6xl": "60px",
    },
    colors: {
      brand: "#1B5B31",
      secondBrand: "#65A30D",
      secondaryBg: "#DCC1AB",
      modalBg: "#FFFFFF",
      hoverBg: "#F7FEE7",
    },
    extend: {},
  },
  plugins: [],
};
