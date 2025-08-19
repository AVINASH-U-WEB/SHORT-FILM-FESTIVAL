/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FDF8F0',
        'slate': '#3D4A55',
        'sunset': '#E67E22',
        'sky': '#3498DB',
        'gold': '#D4AF37',
        'dark-slate': '#2c363f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      keyframes: {
        // For Hero background
        'ken-burns': {
          '0%': { transform: 'scale(1.05) translate(0, 0)' },
          '100%': { transform: 'scale(1) translate(-2%, 2%)' },
        },
        // For staggered text reveal
        'fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // For hero content on load
        'focus-in': {
          '0%': { filter: 'blur(8px)', transform: 'scale(1.1)', opacity: 0 },
          '100%': { filter: 'blur(0)', transform: 'scale(1)', opacity: 1 },
        },
        // For feature icons
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        // For the clapperboard icon animation
        'clap': {
          '0%, 100%': { transform: 'rotate(0)' },
          '40%': { transform: 'rotate(-15deg)' },
          '60%': { transform: 'rotate(-15deg)' },
        },
         // For pulsing the primary CTA
         'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(230, 126, 34, 0.4)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 15px 5px rgba(230, 126, 34, 0)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 30s ease-out infinite',
        'focus-in': 'focus-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'subtle-float': 'subtle-float 5s ease-in-out infinite',
        'clap': 'clap 0.8s ease-in-out 0.5s forwards', // 0.5s delay
        'pulse-glow': 'pulse-glow 3s infinite ease-out',
      },
    },
  },
  plugins: [],
}