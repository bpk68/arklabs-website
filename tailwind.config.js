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
    `nuxt.config.{js,ts}`,
  ],
  theme: {
    extend: {
      colors: {
        text: {
          link: '#06b6d4',
        },
        brand: {
          blue: {
            900: '#243544',
            600: '#5C7D9B',
            400: '#5ce2e6',
            50: '#B7FBFD',
          },
          red: {
            900: '#E62B4A',
            700: '#8D1125',
            500: '#C21733',
            400: '#F291A2',
            50: '#FDEDEF',
          },
          purple: {
            900: '#3e3355',
            400: '#7E6E9F',
            100: '#E3D5FF',
          },
          pink: {
            900: '#9F5281',
            400: '#ff8bd2',
            100: '#F6C0E1',
          },
          yellow: {
            900: '#E8BA16',
            400: '#ffde69',
            100: '#FFEDAE',
          },
          green: {
            900: '#87BF26',
            400: '#bef264',
            100: '#E7FFBD',
          },
          cream: '#FDFAF6',
        },
      },
      typography: (theme) => ({
        brand: {
          css: [
            {
              a: {
                color: theme('colors.text.link'),
                textDecoration: 'underline',
                '&:hover': {
                  color: theme('colors.brand.blue.400'),
                },
              },
              h2: {
                color: theme('colors.brand.blue.900'),
              },
              h3: {
                color: theme('colors.brand.blue.900'),
              },
            },
          ],
        },
      }),
    },
    // colors: {
    //   white: '#FDFAF6',
    // },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      title: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
