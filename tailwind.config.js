import defaultTheme  from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": [
        "Noto Sans KR",
        ...defaultTheme.fontFamily.sans,
      ]
    },
    extend: {},
  },
  plugins: [],
}

