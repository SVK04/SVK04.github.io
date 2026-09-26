import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [forms],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', '"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        'fade-in-up': 'fade-in-up 0.4s ease forwards',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
      },
      screens: {
        xs: '480px',
      },
      colors: {
        /* Semantic tokens */
        accent: 'rgba(var(--color-accent), <alpha-value>)',
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
      boxShadow: {
        'accent-glow': '0 0 28px rgba(6, 182, 212, 0.18)',
        'accent-glow-sm': '0 0 14px rgba(6, 182, 212, 0.12)',
        'card-elevated': '0 4px 20px -2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
};
