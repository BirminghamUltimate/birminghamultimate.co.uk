/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bu: {
          DEFAULT: "#0b0032",
          light: "#0e6ba5"
        },
        facebook: "#4267B2",
      },
      backgroundImage: {
        "instagram-gradient": "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
      }
    },
  },
  plugins: [],
}
