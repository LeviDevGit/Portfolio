// eslint-disable-next-line camelcase
import { Poppins, Nunito, Space_Grotesk } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})
export const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600'] })
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500'],
})
