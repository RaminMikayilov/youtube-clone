/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1220px",
    },
    extend: {
      colors: {
        cBlack: "#19131C",
        cGray: "#453E3E",
      },
    },
  },
  plugins: [],
};
