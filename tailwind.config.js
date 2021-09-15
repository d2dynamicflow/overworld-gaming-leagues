module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'indigo': '#49076a',
      'lincolnGreen': '#055716',
      'darkPurple': '#271330',
      'messageGreen': '#00DD68',
      'messageRed': '#FF0046',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'indigo': '#49076a',
      'lincolnGreen': '#055716',
      'darkPurple': '#271330',
      'messageGreen': '#00DD68',
      'messageRed': '#FF0046',
    }),
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
