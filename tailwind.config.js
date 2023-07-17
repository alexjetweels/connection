/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nitro: {
          blue: '#2E3080',
          gray: '#F8F9FA',
          grayLight: '#d9d9d9',
          black: '#212529',
          green: '#13653F',
          orange: '#FFE1B2',
          red: '#EC1C2C',
          grayDark: '#DEE2E6',

          loc: 'rgb(214, 219, 223)',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this for conflict antd css vs tailwind!
  },
};
