module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep ocean trust and professional reliability
        primary: {
          DEFAULT: "#0369a1", // sky-700
          50: "#f0f9ff", // sky-50
          100: "#e0f2fe", // sky-100
          200: "#bae6fd", // sky-200
          300: "#7dd3fc", // sky-300
          400: "#38bdf8", // sky-400
          500: "#0ea5e9", // sky-500
          600: "#0284c7", // sky-600
          700: "#0369a1", // sky-700
          800: "#075985", // sky-800
          900: "#0c4a6e", // sky-900
        },
        // Secondary Colors - Supporting navigation elements and depth
        secondary: {
          DEFAULT: "#1e40af", // blue-700
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e3a8a", // blue-800
          900: "#1e40af", // blue-900
        },
        // Accent Colors - Critical alerts and primary actions
        accent: {
          DEFAULT: "#f97316", // orange-500
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          200: "#fed7aa", // orange-200
          300: "#fdba74", // orange-300
          400: "#fb923c", // orange-400
          500: "#f97316", // orange-500
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
        },
        // Background Colors
        background: "#f8fafc", // slate-50
        surface: "#f1f5f9", // slate-100
        // Text Colors
        "text-primary": "#0f172a", // slate-900
        "text-secondary": "#475569", // slate-600
        // Status Colors
        success: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          200: "#a7f3d0", // emerald-200
          300: "#6ee7b7", // emerald-300
          400: "#34d399", // emerald-400
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065f46", // emerald-800
          900: "#064e3b", // emerald-900
        },
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          200: "#fde68a", // amber-200
          300: "#fcd34d", // amber-300
          400: "#fbbf24", // amber-400
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
          800: "#92400e", // amber-800
          900: "#78350f", // amber-900
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
          800: "#991b1b", // red-800
          900: "#7f1d1d", // red-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'maritime-xs': ['0.75rem', { lineHeight: '1rem' }],
        'maritime-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'maritime-base': ['1rem', { lineHeight: '1.5rem' }],
        'maritime-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'maritime-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'maritime-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'maritime-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'maritime-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'underwater': '0 4px 6px -1px rgba(3, 105, 161, 0.1), 0 2px 4px -1px rgba(3, 105, 161, 0.06)',
      },
      borderColor: {
        DEFAULT: "#e2e8f0", // slate-200
        light: "#f1f5f9", // slate-100
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'maritime': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}