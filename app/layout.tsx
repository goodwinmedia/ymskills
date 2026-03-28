import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Topbar } from '@/components/arise/Topbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'ARISE',
  description: "Young Men's Life Development Framework",
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'ARISE' },
}

export const viewport: Viewport = {
  themeColor: '#1B3968',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} style={{ backgroundColor: '#f9f8f3' }}>
        <Topbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
