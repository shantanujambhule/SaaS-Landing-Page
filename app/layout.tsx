import './globals.css'
import { Oswald } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

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
