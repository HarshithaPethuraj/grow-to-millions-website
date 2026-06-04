/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8ECF3', 100: '#C5CEDF', 200: '#9AADC9',
          300: '#6F8BB3', 400: '#4D6F9C', 500: '#2B5386',
          600: '#1C3D6B', 700: '#122A50', 800: '#0A1628', 900: '#060E1A',
        },
        // Single emerald ramp — no more hue-shift between 500 and 600
        accent: {
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
