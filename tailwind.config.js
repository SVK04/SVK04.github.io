import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [forms],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
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
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        'fade-in-up': 'fade-in-up 0.4s ease forwards',
        'scan-line': 'scan-line 4s linear infinite',
      },
      screens: {
        xs: '500px',
      },
      colors: {
        /* Semantic (CSS-var driven) */
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-dim': 'rgb(var(--color-surface-dim) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',

        /* Hardcoded palette — for backward compatibility */
        'bg-light': '#f8f9fb',
        'brand-primary': '#3b82f6',

        'gray-50': 'rgb(248, 249, 251)',
        'gray-100': 'rgb(238, 239, 242)',
        'gray-200': 'rgb(223, 225, 230)',
        'gray-300': 'rgb(193, 199, 207)',
        'gray-400': 'rgb(164, 171, 184)',
        'gray-500': 'rgb(128, 136, 151)',
        'gray-600': 'rgb(102, 109, 128)',
        'gray-700': 'rgb(53, 56, 73)',
        'gray-800': 'rgb(39, 40, 53)',
        'gray-900': 'rgb(21, 22, 30)',

        'blue-50': 'rgb(239, 246, 255)',
        'blue-100': 'rgb(219, 234, 254)',
        'blue-200': 'rgb(191, 219, 254)',
        'blue-300': 'rgb(147, 197, 253)',
        'blue-400': 'rgb(96, 165, 250)',
        'blue-500': 'rgb(59, 130, 246)',
        'blue-600': 'rgb(37, 99, 235)',
        'blue-700': 'rgb(29, 78, 216)',
        'blue-800': 'rgb(30, 64, 175)',
        'blue-900': 'rgb(30, 58, 138)',

        'green-50': 'rgb(236, 253, 245)',
        'green-100': 'rgb(209, 250, 229)',
        'green-200': 'rgb(167, 243, 208)',
        'green-300': 'rgb(110, 231, 183)',
        'green-400': 'rgb(52, 211, 153)',
        'green-500': 'rgb(16, 185, 129)',
        'green-600': 'rgb(5, 150, 105)',

        'orange-300': 'rgb(253, 186, 116)',
        'orange-400': 'rgb(251, 146, 60)',
        'orange-500': 'rgb(249, 115, 22)',

        'purple-300': 'rgb(196, 181, 253)',
        'purple-400': 'rgb(167, 139, 250)',
        'purple-500': 'rgb(139, 92, 246)',

        'red-400': 'rgb(248, 113, 113)',
        'red-500': 'rgb(239, 68, 68)',
      },
      boxShadow: {
        'accent-glow': '0 0 24px rgba(59, 130, 246, 0.15)',
        'accent-glow-sm': '0 0 12px rgba(59, 130, 246, 0.10)',
      },
      borderRadius: {
        none: '0px',
        rounded10: '10px',
      },
      gridTemplateColumns: {
        'auto-fill-315': 'repeat(auto-fill, minmax(315px, 1fr))',
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fill-300': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
};
