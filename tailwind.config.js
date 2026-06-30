/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        cloud: '#F8FAFC',
        violet: '#6764FF',
        indigo: '#4F46E5',
      },
      fontFamily: { sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: {
        soft: '0 20px 70px rgba(70, 55, 155, .10)',
        card: '0 1px 2px rgba(15, 23, 42, .04), 0 16px 48px rgba(15, 23, 42, .06)',
      },
    },
  },
  plugins: [],
}
