/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#D0021B',
        accent: '#F5A623',
        neutral: '#9B9B9B',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}