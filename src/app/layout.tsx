import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({subsets: ['latin'], weight: ['100','300','400','500','700','900']})

export const metadata: Metadata = {
  title: 'Best Mock Ielts Training Website',
  description: 'Best Mock Ielts Training Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
