/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { 50: '#eef4ed', 100: '#dce8da', 500: '#477653', 600: '#356342', 700: '#284c34', 800: '#1e3928' },
        ochre: { 100: '#f9edcf', 400: '#d3a447', 500: '#bc8730' },
        clay: { 100: '#f7e5df', 400: '#d77f62', 500: '#bd6048' },
        paper: '#faf8f2'
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { card: '0 12px 35px rgba(40, 58, 42, .08)' }
    }
  },
  plugins: []
};
