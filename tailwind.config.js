/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sec: {
          50: "#ee9a48",
          100: "#e08d41",
        },
        pry: {
          50: "#ebf3f6",
          100: "#264d50",
        },
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        breadcrumb: "url('../images/pattern.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
