/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        futura: ["'Futura Std', sans-serif"],
        playfair: ["'Playfair Display', serif"],
      },

      colors: {
        dot: {
          p: "#1F1E1E ",
          s: "#1F1E1E",
          b: "#0398DA",
          bp: "#026a99",
          bs: "#4fb7e5",
          tp: "#666",
        },
      },
      screens: {
        xs: "100px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
