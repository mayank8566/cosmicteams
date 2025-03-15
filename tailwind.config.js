/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#080b14',
        'space-darker': '#050810',
        'space-blue': '#1f2b55',
        'space-indigo': '#614b8f',
        'space-purple': '#9154dc',
        'space-cyan': '#16bde4',
        'space-pink': '#EC4899',
        'space-gold': '#f7b928',
        'neon-blue': '#00b3ff',
        'neon-purple': '#b300ff',
        'neon-green': '#00ff44',
        'neon-red': '#ff003c',
        'neon-yellow': '#ffce00',
      },
      fontFamily: {
        'space': ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        'float-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'gradient-x': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'twinkle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.8)' },
        },
        'neon-pulse': {
          '0%': { boxShadow: '0 0 5px 0 rgba(0, 179, 255, 0.4), 0 0 8px 0 rgba(0, 179, 255, 0.2)' },
          '50%': { boxShadow: '0 0 10px 2px rgba(0, 179, 255, 0.6), 0 0 15px 5px rgba(0, 179, 255, 0.3)' },
          '100%': { boxShadow: '0 0 5px 0 rgba(0, 179, 255, 0.4), 0 0 8px 0 rgba(0, 179, 255, 0.2)' },
        },
        'neon-breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.03)', opacity: 0.8 },
        },
        'neon-flicker': {
          '0%, 9%, 11%, 19%, 21%, 69%, 71%, 100%': { opacity: 1 },
          '10%, 20%, 70%': { opacity: 0.6 },
        },
        'neon-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
        'float-left-right': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'cyber-scan': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
      animation: {
        'float-up': 'float-up 3s ease-in-out infinite',
        'float-up-delay': 'float-up 3s ease-in-out 1.5s infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 10s ease infinite alternate',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'twinkle-delay-1': 'twinkle 2s ease-in-out 0.5s infinite',
        'twinkle-delay-2': 'twinkle 2s ease-in-out 1s infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'neon-breathe': 'neon-breathe 4s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 5s linear infinite',
        'neon-rotate': 'neon-rotate 10s linear infinite',
        'float-down': 'float-down 3s ease-in-out infinite',
        'float-left-right': 'float-left-right 3s ease-in-out infinite',
        'cyber-scan': 'cyber-scan 3s linear infinite',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      boxShadow: {
        'neon-blue': '0 0 5px 0 rgba(0, 179, 255, 0.7), 0 0 10px 0 rgba(0, 179, 255, 0.5)',
        'neon-purple': '0 0 5px 0 rgba(179, 0, 255, 0.7), 0 0 10px 0 rgba(179, 0, 255, 0.5)',
        'neon-green': '0 0 5px 0 rgba(0, 255, 68, 0.7), 0 0 10px 0 rgba(0, 255, 68, 0.5)',
        'neon-red': '0 0 5px 0 rgba(255, 0, 60, 0.7), 0 0 10px 0 rgba(255, 0, 60, 0.5)',
        'neon-yellow': '0 0 5px 0 rgba(255, 206, 0, 0.7), 0 0 10px 0 rgba(255, 206, 0, 0.5)',
        'gold-glow': '0 0 5px 2px rgba(255, 215, 0, 0.7), 0 0 12px 4px rgba(255, 215, 0, 0.4)',
        'silver-glow': '0 0 5px 2px rgba(192, 192, 192, 0.7), 0 0 12px 4px rgba(192, 192, 192, 0.4)',
        'bronze-glow': '0 0 5px 2px rgba(205, 127, 50, 0.7), 0 0 12px 4px rgba(205, 127, 50, 0.4)',
      },
      borderWidth: {
        '3': '3px',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.25)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.25)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.25)',
        'glow-cyan': '0 0 5px #16bde4, 0 0 10px rgba(22, 189, 228, 0.5)',
        'glow-purple': '0 0 5px #9154dc, 0 0 10px rgba(145, 84, 220, 0.5)',
        'glow-gold': '0 0 5px #f7b928, 0 0 10px rgba(247, 185, 40, 0.5)',
        'gold-glow-text': '0 0 5px rgba(255, 215, 0, 0.7), 0 0 10px rgba(255, 215, 0, 0.5)',
        'silver-glow-text': '0 0 5px rgba(192, 192, 192, 0.7), 0 0 10px rgba(192, 192, 192, 0.5)',
        'bronze-glow-text': '0 0 5px rgba(205, 127, 50, 0.7), 0 0 10px rgba(205, 127, 50, 0.5)',
      },
    },
  },
  plugins: [],
}