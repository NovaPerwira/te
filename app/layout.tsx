import React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Cursor from "@/components/cursor";

import { LanguageProvider } from "@/components/language-provider";
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nova Perwira - AI & Web Developer',
  description: 'Portfolio of Nova Perwira, a versatile AI and web developer specializing in clear interfaces, sharp decisions, and fast execution.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Cursor />
      </body>
    </html>
  )
}
