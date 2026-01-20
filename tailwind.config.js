/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffea00', // IronCore Yellow
        'primary-gold': '#FFD700',
        'background-light': '#f9fafa',
        'background-dark': '#1a1a1a',
        'surface-light': '#F9F9F9',
        'surface-dark': '#242424',
        'card-light': '#F8FAFC',
        'card-dark': '#1E293B',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}