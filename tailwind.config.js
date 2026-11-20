/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2540', // Classic Deep Navy
          deep: '#06182A',
          light: '#1E3A5F',
          hover: '#13355C',
        },
        navy: {
          900: '#06182A',
          800: '#0A2540',
          700: '#143860',
          600: '#1E4B7A',
        },
        secondary: {
          DEFAULT: '#0D9488', // Medical Teal / Fresh Mint
          hover: '#0F766E',
          light: '#CCFBF1',
        },
        accent: {
          DEFAULT: '#0EA5E9', // Medical Sky Cyan
          hover: '#0284C7',
          light: '#E0F2FE',
        },
        surface: '#FFFFFF',
        canvas: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
        },
        'on-surface': '#0F172A',
        'on-primary': '#FFFFFF',
        muted: '#64748B',
        border: {
          DEFAULT: '#E2E8F0',
          soft: '#F1F5F9',
        },
        success: {
          DEFAULT: '#10B981',
          ink: '#065F46',
          light: '#D1FAE5',
        },
        warning: '#D97706',
        danger: '#DC2626',
        focus: '#0D9488',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'dropdown': '0 12px 32px -4px rgba(15, 23, 42, 0.12)',
        'elevated': '0 20px 40px -8px rgba(10, 37, 64, 0.15)',
      },
    },
  },
  plugins: [],
}
