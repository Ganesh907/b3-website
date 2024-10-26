
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'zoom-design': 'zoom-design 4s ease-in-out infinite',   // Animation for "design"
        'zoom-develop': 'zoom-develop 4s ease-in-out infinite', // Animation for "develop"
        'zoom-deliver': 'zoom-deliver 4s ease-in-out infinite', // Animation for "deliver"
      },
      keyframes: {
        'zoom-design': {
          '0%, 33.33%': { opacity: 1, transform: 'scale(0)' },   // Zoom in "design"
          '16.66%, 33.33%': { transform: 'scale(1)' }, // Zoom out "design"
          '33.34%, 100%': { opacity: 0, transform: 'scale(0)' }, // Hide and shrink "design"
        },
        'zoom-develop': {
          '0%, 33.33%': { opacity: 0, transform: 'scale(0)' },   // Hide and shrink "develop"
          '33.34%, 66.66%': { opacity: 1, transform: 'scale(0)' }, // Zoom in "develop"
          '50%, 66.66%': { transform: 'scale(1)' }, // Zoom out "develop"
          '66.67%, 100%': { opacity: 0, transform: 'scale(0)' }, // Hide and shrink "develop"
        },
        'zoom-deliver': {
          '0%, 66.66%': { opacity: 0, transform: 'scale(0)' },   // Hide and shrink "deliver"
          '66.67%, 100%': { opacity: 1, transform: 'scale(0)' }, // Zoom in "deliver"
          '83.33%, 100%': { transform: 'scale(1)' }, // Zoom out "deliver"
        },
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
  },
  plugins: [],
};
