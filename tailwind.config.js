/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandLight: "#fbfaf8",
        brandGold: "#ecab24",
        brandDark: "#1a2529",
      },
    },
  },
  plugins: [],
}
