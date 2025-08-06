import './globals.css'
import { Oswald } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oswald',
})

export const metadata = {
  title: 'ADmyBRAND AI Suite',
  description: 'AI-Powered Marketing Supercharged',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  )
}
