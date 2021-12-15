const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            900: '#243544',
            400: '#547DA0',
            50: '#A1B9CE',
          },
          red: {
            900: '#E62B4A',
            700: '#8D1125',
            500: '#C21733',
            400: '#F291A2',
            50: '#FDEDEF',
          },
          cream: '#FDFAF6',
        }
      }
    },
    // colors: {
    //   white: '#FDFAF6',
    // },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif]
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
