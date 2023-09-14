import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Your-Font-Name', 'sans'],
      },
      backgroundImage: {
        'blue-gradient' : 'linear-gradient(to bottom, #112044,#321E39 , #17324E)'
      },
    },
  },
  plugins: [],
}
export default config
