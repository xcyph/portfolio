import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'
import ThemeProvider from '@/components/ThemeProvider'
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-display',
})

const body = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "Sarah's Portfolio",
  description: 'Creative Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}