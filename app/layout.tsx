import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextUIProvider from './NextUIProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pardy',
  description:
    'A simple web app that help you to manage your Events and RSVPs , see your guests list and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark text-foreground bg-background h-screen w-screen`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
