/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "1200px",
      lg: "1280px",
    },
    extend: {
      colors: {
        primary: "#3692FF",
      },
    },
  },
  plugins: [],
};
