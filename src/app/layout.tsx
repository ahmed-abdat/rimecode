import React from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rimecode.vercel.app/'),
  title: 'RimCode - Innovative Web & Mobile Solutions',
  description: 'Cutting-edge web and mobile development services tailored for your business needs. Expertise in React, Next.js, TypeScript, and more.',
  keywords: ['web development', 'mobile development', 'React', 'Next.js', 'TypeScript', 'UI/UX design'],
  authors: [{ name: 'RimCode' }],
  creator: 'RimCode',
  publisher: 'RimCode',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rimecode.vercel.app/',
    siteName: 'RimCode',
    title: 'RimCode - Innovative Web & Mobile Solutions',
    description: 'Cutting-edge web and mobile development services tailored for your business needs.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'RimCode OG Image' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    creator: '@your_twitter_handle',
    title: 'RimCode - Innovative Web & Mobile Solutions',
    description: 'Cutting-edge web and mobile development services',
    images: ['/logo.png'],
  },
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-full overflow-x-hidden">
            <Header />
            <main className="max-w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
