module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5865f2",
        secondary: "#3ba55d",
        success: "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)",
        tertiary: "#18191c",
        danger: "hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
    },
  },
  plugins: [],
};
