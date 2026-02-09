import React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Cursor from "@/components/cursor";

import { LanguageProvider } from "@/components/language-provider";
import './globals.css'

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://novaperwira.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Nova Perwira - AI & Web Developer',
    template: '%s | Nova Perwira',
  },
  description: 'Pro Portfolio of Nova Perwira, a versatile AI and web developer specializing in clear interfaces, sharp decisions, and fast execution.',
  applicationName: 'Nova Perwira Portfolio',
  authors: [{ name: 'Nova Perwira', url: baseUrl }],
  generator: 'Next.js',
  keywords: ['Nova Perwira', 'AI Developer', 'Web Developer', 'Next.js', 'React', 'Portfolio', 'Full Stack'],
  referrer: 'origin-when-cross-origin',
  creator: 'Nova Perwira',
  publisher: 'Nova Perwira',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Nova Perwira - AI & Web Developer',
    description: 'Versatile AI and web developer specializing in clear interfaces, sharp decisions, and fast execution.',
    url: baseUrl,
    siteName: 'Nova Perwira Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: 'Nova Perwira Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Perwira - AI & Web Developer',
    description: 'Versatile AI and web developer specializing in clear interfaces, sharp decisions, and fast execution.',
    creator: '@NovaPerwira', // Replace with actual handle
    images: ['/twitter-image.png'], // Ensure this image exists
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

import JsonLd from "@/components/json-ld";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <JsonLd />
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
