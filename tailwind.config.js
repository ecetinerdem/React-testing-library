/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'emre-500': '#243c5a',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
