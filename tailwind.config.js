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
        "hover-blue": "rgb(30 58 138)",
        "hover-light-blue": "rgb(224 242 254)",
        darkgray: "#6C6C6C",
        white: "#FFFFFF",
        gray: "#F3F2EF",
        "gray-500": "rgb(107 114 128)",

        "gray-200": "rgb(229 231 235)",
        redNotification: "#DC2626",
        inputColor: "#EEF3F8",
        // "green-700": "rgb(21 128 61)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
