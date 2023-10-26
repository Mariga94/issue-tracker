/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["pastel"],
  },
  theme: {
    extend: {
      colors: {
        pastel: {
          primary: "#abcdef",
          secondary: "#f0e0d0",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
