/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'TASA Orbiter Display'", "'Inter'", 'sans-serif'],
        body: ["'Inter'", '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#060a1a',
          surface: 'rgba(255,255,255,0.04)',
          border: 'rgba(124,58,237,0.2)',
          text: '#f1f5f9',
          muted: '#94a3b8',
        },
        light: {
          bg: '#eef2ff',
          surface: 'rgba(255,255,255,0.04)',
          border: 'rgba(124,58,237,0.1)',
          text: '#1e1b4b',
          muted: '#64748b',
        },
      },
      keyframes: {
        'communify-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.82)' },
        },
        'communify-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'communify-pulse': 'communify-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'communify-float': 'communify-float 3s ease-in-out infinite',
        'slide-down': 'slide-down 0.22s ease',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      opacity: {
        4: '0.04',
        5: '0.05',
        7: '0.07',
        10: '0.1',
        12: '0.12',
        14: '0.14',
        15: '0.15',
        22: '0.22',
      },
    },
  },
  plugins: [],
};
