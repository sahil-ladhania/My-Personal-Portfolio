import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'light-blue-gradient': 'linear-gradient(180deg, #6EE7B7 0%, #3B82F6 100%)', // Light blue gradient
      },
      fontFamily: {
        custom: ['Your-Font-Name', 'sans'],
      },
    },
  },
  plugins: [],
}
export default config
