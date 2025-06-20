/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      // Modern color palette
      primary: "#0F0F23",
      secondary: "#161636",
      accent: "#6366F1",
      "accent-light": "#A5B4FC",
      "accent-dark": "#4F46E5",
      tertiary: "#1E1E3F",
      "gray-50": "#F8FAFC",
      "gray-100": "#F1F5F9",
      "gray-200": "#E2E8F0",
      "gray-300": "#CBD5E1",
      "gray-400": "#94A3B8",
      "gray-500": "#64748B",
      "gray-600": "#475569",
      "gray-700": "#334155",
      "gray-800": "#1E293B",
      "gray-900": "#0F172A",
      "white-100": "#FFFFFF",
      "white-90": "#F8FAFC",
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
    },
    boxShadow: {
      'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.5s ease-out',
      'slide-down': 'slideDown 0.5s ease-out',
      'scale-in': 'scaleIn 0.3s ease-out',
      'bounce-slow': 'bounce 2s infinite',
      'pulse-slow': 'pulse 3s infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideDown: {
        '0%': { transform: 'translateY(-20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      scaleIn: {
        '0%': { transform: 'scale(0.9)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [];
