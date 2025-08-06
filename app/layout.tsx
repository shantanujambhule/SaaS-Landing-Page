// app/layout.tsx
import './globals.css'
import type { ReactNode } from 'react'
import { Oswald } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-oswald',
})

export const metadata = {
  title: 'ADmyBRAND AI Suite',
  description: 'AI-Powered Marketing Supercharged',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // apply the font class and a utility background class
    <html lang="en" className={`${oswald.className} bg-slate-50 antialiased`}>
      <head />
      <body className="min-h-screen text-slate-900">
        {children}
      </body>
    </html>
  )
}
