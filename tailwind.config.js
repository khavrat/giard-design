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
      "6xl": "56px",
    },
    colors: {
      brand: "#1B5B31",
      secondBrand: "#65A30D",
      primaryBg: "#F5F0EC",
      secondaryBg: "#DCC1AB",
      modalBg: "#FFFFFF",
      hoverBg: "#F7FEE7",
      transparent: "transparent",
      textColor: "#111111",
    },

    extend: {
      keyframes: {
        swing: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(5deg)" },
        },
        displace: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-90deg)" },
          "40%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        flip: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(90deg)" },
          "40%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
