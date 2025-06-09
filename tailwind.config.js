/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['border-app-border'],
  theme: {
    extend: {
      colors: {
        background: '#0B0F29',
        'background-light': '#1A1F3A',
        primary: '#bffff8',
        accent: '#A3C9B9',
        glow: '#F0E3D9',
        text: '#FFF8F5',
        'text-secondary': '#FFEFE7',
        'text-tertiary': '#FFDACC',
        glass: 'rgba(255, 255, 255, 0.05)',
        'app-border': 'rgba(255, 255, 255, 0.1)',
        'sunset-start': '#F0E3D9'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace']
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.primary"), 0 0 20px rgba(191, 255, 248, 0.3)',
        'neon-accent': '0 0 5px theme("colors.accent"), 0 0 20px rgba(163, 201, 185, 0.3)',
        'neon-glow': '0 0 5px theme("colors.glow"), 0 0 20px rgba(240, 227, 217, 0.3)',
        'button-glow': '0 0 8px theme("colors.primary/30")',
        'button-glow-accent': '0 0 8px theme("colors.accent/30")'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      }
    },
  },
  plugins: [],
}