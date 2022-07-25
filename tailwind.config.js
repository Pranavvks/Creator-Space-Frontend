/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors:{
      //   'rainbow' : gradient(rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))
      // }
    },
  },
  plugins: [],
}
