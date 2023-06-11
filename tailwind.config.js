/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      googleBold: ['googleBold', 'sans']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ggreen: {
          xlight: '#E6F4EA',
          light: '#C3E6CB',
          normal: '#34A853',
          dark: '#0D652D'
        }
      },
      keyframes: {
        fullSpin: {
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation:{
        fullSpin:'fullSpin 4s linear infinite'
      }
    },
  },
  plugins: [],
}
