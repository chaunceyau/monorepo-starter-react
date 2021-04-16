module.exports = {
  purge: [
    // TODO: do we need both of next 2 lines?
    './src/**/*.{js,jsx,ts,tsx}',
    './apps/src/client-starter/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
