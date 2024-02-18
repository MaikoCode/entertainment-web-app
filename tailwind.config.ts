import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "salmon": "#FC4747",
        "deep-dark": "#10141E",
        "blue": "#5A698F",
        "dark-blue": "#161D2F",
        "white": "#FFFFFF",
      },
      fontFamily: {
        "outfit": ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'tablet': '580px',
        'lg': '1280px',
      },
    },
  },
  plugins: [],
}
export default config
