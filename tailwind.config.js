/** @type {import('postcss').Config} */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // ← Tailwind 4 用
    autoprefixer: {},
  },
};
