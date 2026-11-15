import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  plugins: [forms],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-serif)', '"Instrument Serif"', 'Georgia', 'serif'],
        // No monospace face in this design: `font-mono` falls back to the sans stack.
        mono: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Hero comparison bars grow from the left edge
        'bar-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease both',
        'bar-grow': 'bar-grow 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      screens: {
        xs: '480px',
      },
      colors: {
        /* Semantic tokens */
        accent: 'rgba(var(--color-accent), <alpha-value>)',
        'accent-bright': 'rgba(var(--color-accent-bright), <alpha-value>)',
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
        tertiary: 'rgba(var(--color-tertiary), <alpha-value>)',
        background: 'rgba(var(--color-background), <alpha-value>)',
        surface: 'rgba(var(--color-surface), <alpha-value>)',
        'surface-dim': 'rgba(var(--color-surface-dim), <alpha-value>)',
        'text-primary': 'rgba(var(--color-text-primary), <alpha-value>)',
        'text-secondary': 'rgba(var(--color-text-secondary), <alpha-value>)',
        'text-muted': 'rgba(var(--color-text-muted), <alpha-value>)',
        border: 'rgba(var(--color-border), <alpha-value>)',
      },
    },
  },
};
