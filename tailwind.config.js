/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ], theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1320px',
    },
    extend: {
      colors: {
        orange: {
          '900': '#FF631C',
        },
        darkblue: '#070720',
        navActive: '#99f6e4',
      },
      backgroundImage: theme => ({
        'hero-pattern': 'url("/hero.jpg")',
      }),
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
        },
      },
    },
  },
  plugins: [],
}

