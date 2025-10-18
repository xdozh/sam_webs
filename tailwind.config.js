/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
        'soft-glow': 'softGlow 3s ease-in-out infinite',
        'float-sparkles': 'floatSparkles 6s ease-in-out infinite',
        'confetti': 'confetti 1s ease-out forwards',
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        softGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 200, 120, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 200, 120, 0.4)' },
        },
        floatSparkles: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.1' },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(255, 200, 120, 0.3)',
        'gold-glow-lg': '0 0 50px rgba(255, 200, 120, 0.5)',
      },
    },
  },
  plugins: [],
};
