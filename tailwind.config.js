/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e2ff',
          300: '#adc2ff',
          400: '#85a2ff',
          500: '#5c82ff',
          600: '#006CFF',  // Intercom primary blue
          700: '#0055cc',
          800: '#003d99',
          900: '#002466',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        ui: {
          background: '#ffffff',
          card: '#f8fafc',
          highlight: '#f1f5f9',
          border: '#e2e8f0',
          muted: '#64748b',
          divider: '#e2e8f0',
        },
        status: {
          online: '#22c55e',
          busy: '#f59e0b',
          offline: '#94a3b8',
        },
      },
      boxShadow: {
        'floating': '0 2px 4px rgba(0,0,0,0.1), 0 12px 28px rgba(0,0,0,0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'slide-up': 'slideUp 0.2s ease-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};