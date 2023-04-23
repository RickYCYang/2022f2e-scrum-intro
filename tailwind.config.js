/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFE0',
        dark: '#008D96',
        purple: '#D355FF',
        yellow: '#FFC700',
        orange: '#FF5C00',
        red: '#FF0000',
      },
      backgroundImage: {
        village: "url('/background/village.png')",
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        md: '0.75rem',
        lg: '3rem',
        full: '9999px',
        large: '12px',
      },
      boxShadow: {
        '3xl': '-1px 2px 31px -4px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
