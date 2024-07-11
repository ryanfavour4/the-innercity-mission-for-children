import type { Config } from 'tailwindcss'
import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#000000',
        dark: '#000000',
        white: '#FFFFFF',
        light: '#FFFFFF',
        'grey-white': '#f4f3f1',
        primary: '#0080DE',
        secondary: '#E6F4F1',
        complementary: '#404756',
        greytext: '#525560',
        error: '#D92D20',
        warning: '#FDB022',
        success: '#054F31',
        info: '#0E36FF',
      },
      translate: ['group-hover', 'hover'] as unknown as ResolvableTo<KeyValuePair<string, string>>,
    },
  },
  plugins: [],
}
export default config
