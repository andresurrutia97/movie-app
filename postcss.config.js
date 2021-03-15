const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('postcss-media-variables'),
    require('postcss-custom-media'),
    require('autoprefixer'),
  ],
};
