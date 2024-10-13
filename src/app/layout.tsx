import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rimecode.vercel.app'),
  title: "RimCode - Innovative Web & Mobile Solutions",
  description: "RimCode offers cutting-edge web and mobile development services, creating scalable and user-friendly applications with modern tech stacks like React, Next.js, and Flutter.",
  keywords: "web development, mobile apps, UI/UX design, React, Next.js, Flutter",
  openGraph: {
    title: "RimCode - Innovative Web & Mobile Solutions",
    description: "Cutting-edge web and mobile development services",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RimCode - Innovative Web & Mobile Solutions",
    description: "Cutting-edge web and mobile development services",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
