/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f8',
          100: '#d5dcee',
          200: '#aab9dd',
          300: '#7f96cc',
          400: '#5473bb',
          500: '#3a5aaa',
          600: '#2d4788',
          700: '#1B2F5E',  // primary navy
          800: '#162549',
          900: '#101b35',
        },
        gold: {
          50: '#fdf8ef',
          100: '#f8edcf',
          200: '#f1db9f',
          300: '#e9c56f',
          400: '#C4974A',  // primary gold
          500: '#b8893a',
          600: '#9c722e',
          700: '#7f5b22',
          800: '#624416',
          900: '#452d0a',
        },
        cream: '#FAF8F5',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem,   5vw, 3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': '5rem',
        'section-lg': '8rem',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
