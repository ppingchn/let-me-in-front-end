/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        blue: "#0466BF",
        darkgray: "#6C6C6C",
        white: "#FFFFFF",
        gray: "#F3F2EF",
        redNotification: "#DC2626",
        inputColor: "#EEF3F8",
      },
    },
  },
  plugins: [],
};
