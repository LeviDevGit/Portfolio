import type { Metadata } from 'next'
import '../_styles/globals.css'
import { poppins } from '../_styles/fonts'

export const metadata: Metadata = {
  title: 'Levi Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`mt-10 flex justify-center bg-neon-white antialiased ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  )
}
