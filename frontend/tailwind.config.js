export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#065F46',
          dark: '#064E3B',
          light: '#059669',
        },
        secondary: {
          DEFAULT: '#D97706',
          dark: '#B45309',
          light: '#F59E0B',
        },
      }
    },
  },
  plugins: [],
};
