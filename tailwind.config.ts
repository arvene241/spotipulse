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
      padding: "30px",
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
      },
      fontSize: {
        h1: '3.125rem',
      },
      gridTemplateColumns: {
        'sm-grid': "repeat( auto-fit, minmax(120px, 1fr) )",
        'md-grid': "repeat( auto-fit, minmax(150px, 1fr) )",
        'lg-grid': "repeat( auto-fit, minmax(200px, 1fr) )",
      }
    },
  },
  plugins: [],
}
export default config
