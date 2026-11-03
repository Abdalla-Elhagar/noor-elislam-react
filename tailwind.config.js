/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c49a35',
          bright: '#d4af37',
          dark: '#8f6b18',
          deep: '#a77b17',
          light: '#fbf4e3',
          soft: '#f5e6b3',
        },
        ink: '#29251d',
        muted: '#817967',
        cream: '#faf9f6',
        line: '#e9dfc7',
        charcoal: '#292929',
      },
      boxShadow: {
        gold: '0 12px 28px rgba(143, 107, 24, 0.12)',
        nav: '0 3px 20px rgba(0, 0, 0, 0.07)',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        spin360: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'fade-in': 'fadeIn .25s ease-out',
      },
    },
  },
  plugins: [],
}
