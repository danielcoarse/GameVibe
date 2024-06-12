/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight: {
        calc: 'calc(100vh - 160px)',
      },
    },
  },
  daisyui: {
    themes: ['sunset'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
