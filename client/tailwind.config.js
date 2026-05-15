/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: '#0a0a0a',
        neonCyan: '#00f7ff',
        magenta: '#ff00ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff' },
          '100%': { boxShadow: '0 0 15px #ff00ff, 0 0 25px #ff00ff' },
        }
      }
    },
  },
  plugins: [],
}
