import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-sky-400',
    'bg-rose-500',
    'bg-wild-watermelon',
    'bg-emerald-400',
    'bg-amber-500',
    'bg-gray-900',
    'bg-dark-charcoal',
    'animate-shake',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        nunito: ['var(--font-nunito)'],
        space_grotesk: ['var(--font-space-grotesk)'],
      },
      colors: {
        'neon-white': '#FBFEFD',
        flavescent: '#FBED96',
        'magic-mint': '#ABECD6',
        'mint-cream': '#EFFFFA',
        'deep-sky-blue': '#40C4FF',
        'celestial-blue': '#189FFF',
        white: '#FFFFFF',
        'eerie-black': '#121214',
        'wild-watermelon': '#FF577F',
        'dark-charcoal': '#313131',
      },
      boxShadow: {
        avatar: '0px 25px 50px -12px rgba(182, 237, 207, 0.40)',
        card: '0px 23px 30px 0px rgba(171, 236, 214, 0.20), 0px 4px 12px 0px rgba(0, 0, 0, 0.10)',
        skill:
          '5px 5px 100px rgba(227, 242, 238), -5px -5px 100px rgba(251, 255, 255)',
      },
      dropShadow: {
        modal:
          '0px 20px 25px -5px rgba(0, 0, 0, 0.02), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      screens: {
        // eslint-disable-next-line prettier/prettier
        'mobile': { 'max': '1328px' },
      },
      animation: {
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
