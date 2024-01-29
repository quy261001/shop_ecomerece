import type { Config } from 'tailwindcss';
import colors from './src/common/themes/baseTheme';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif'],
        serif: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors,
      borderColor: {
        DEFAULT: '#E6E8EC',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
export default config;
