/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'xs': '480px'
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
  },
};
export const plugins = [];

