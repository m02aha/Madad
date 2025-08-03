/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.html"
  ],
  theme: {
    extend: {
      // Custom colors based on the design
      colors: {
        // Primary brand colors
        primary: {
          50: '#f8f9fc',
          100: '#e6e9f4',
          200: '#cedbe8',
          300: '#b5c7dc',
          400: '#9cb3d0',
          500: '#0c7ff2',
          600: '#0b6fd8',
          700: '#0a5fbe',
          800: '#094fa4',
          900: '#083f8a',
        },
        // Text colors
        text: {
          primary: '#0d0f1c',
          secondary: '#47569e',
          tertiary: '#49739c',
        },
        // Background colors
        background: {
          primary: '#f8f9fc',
          secondary: '#e6e9f4',
          white: '#ffffff',
        },
        // Border colors
        border: {
          light: '#e6e9f4',
          medium: '#cedbe8',
        }
      },
      // Custom font families
      fontFamily: {
        'sans': ['"Work Sans"', '"Noto Sans"', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
      // Custom font weights
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold': '700',
        'black': '900',
      },
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Custom border radius
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      // Custom shadows
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      // Custom container queries
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      // Custom aspect ratios
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
      },
      // Custom max widths
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      // Custom min heights
      minHeight: {
        'screen-75': '75vh',
        'screen-80': '80vh',
      },
      // Custom line heights
      lineHeight: {
        'tight': '1.25',
        'normal': '1.5',
        'relaxed': '1.75',
      },
      // Custom letter spacing
      letterSpacing: {
        'tight': '-0.015em',
        'normal': '0em',
        'wide': '0.015em',
        'wider': '0.025em',
      },
      // Custom transitions
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      // Custom z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Custom plugin for container queries
    function({ addUtilities }) {
      const newUtilities = {
        '.container-query': {
          'container-type': 'inline-size',
        },
        '@container (min-width: 480px)': {
          '.container-p-4': {
            'padding': '1rem',
          },
          '.container-gap-8': {
            'gap': '2rem',
          },
          '.container-text-5xl': {
            'font-size': '3rem',
          },
          '.container-font-black': {
            'font-weight': '900',
          },
          '.container-leading-tight': {
            'line-height': '1.25',
          },
          '.container-tracking-033': {
            'letter-spacing': '-0.033em',
          },
          '.container-text-base': {
            'font-size': '1rem',
          },
          '.container-font-normal': {
            'font-weight': '400',
          },
          '.container-leading-normal': {
            'line-height': '1.5',
          },
          '.container-rounded-lg': {
            'border-radius': '0.5rem',
          },
          '.container-h-12': {
            'height': '3rem',
          },
          '.container-px-5': {
            'padding-left': '1.25rem',
            'padding-right': '1.25rem',
          },
          '.container-font-bold': {
            'font-weight': '700',
          },
          '.container-tracking-015': {
            'letter-spacing': '0.015em',
          },
          '.container-px-10': {
            'padding-left': '2.5rem',
            'padding-right': '2.5rem',
          },
          '.container-py-20': {
            'padding-top': '5rem',
            'padding-bottom': '5rem',
          },
          '.container-text-4xl': {
            'font-size': '2.25rem',
          },
          '.container-flex-row': {
            'flex-direction': 'row',
          },
          '.container-justify-around': {
            'justify-content': 'space-around',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 