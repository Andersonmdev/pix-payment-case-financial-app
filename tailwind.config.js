const { hairlineWidth } = require('nativewind/theme');

const { COLORS } = require('./src/shared/styles/colors');
const { FONTS } = require('./src/shared/styles/fonts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
      fontFamily: {
        ...FONTS,
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [],
};
