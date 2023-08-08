/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#3BCBB2",
      white: "#fff",
      grey: "#F5F7FB",
      status: "#C8FFE1",
      rgb_gray: "rgba(6, 0, 0, 0.47)",
    },
  },
  plugins: [],
};
