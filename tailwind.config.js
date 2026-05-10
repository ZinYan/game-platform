export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 15px 40px rgba(15,23,42,0.08)'
      },
      colors: {
        euron: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#4338ca',
          700: '#312e81'
        }
      }
    }
  },
  plugins: []
};
