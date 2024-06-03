/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./components/assets/background.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  variants: {
    extend: {
      display: ['focus-group'],
    },
  },
};
