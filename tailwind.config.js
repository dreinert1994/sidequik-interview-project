module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 0 rgba(9,30,66,.25);'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
