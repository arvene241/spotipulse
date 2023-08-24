import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "5rem",
      screens: {
        "2xl": "1400px",
      }
    },
    extend: {
      colors: {
        green: '#1DB954',
        offGreen: '#1ed760',
        blue: '#509bf5',
        black: '#181818',
        navBlack: '#040306',
        lightestGrey: '#b3b3b3',
        lightGrey: '#9B9B9B',
        grey: '#404040',
        darkGrey: '#282828'
      }
    },
  },
  plugins: [],
}
export default config
