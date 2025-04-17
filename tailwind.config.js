/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
    './navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#EEF2FF',
          500: '#6366F1',
          600: '#4F46E5',
        },
        gray: {
          800: '#1F2937',
          900: '#111827',
        },
        mental: {
          blue: '#EFF6FF',
          indigo: '#6366F1',
          purple: '#EDE9FE',
          green: '#ECFDF5',
        },
      },
    },
  },

  plugins: [],
};
