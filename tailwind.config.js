/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "3px 3px 0px 0px #60a5fa",
        customFocus: "1px 1px 0px 0px #60a5fa",
      },
    },
  },
  plugins: [],
};
