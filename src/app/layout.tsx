import type { Metadata } from 'next'
import './globals.css'
import { clash, satoshi } from "../fonts/font"
import SmoothScroll from '@/components/UI/SmoothScroll'
import React from "react";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
// import { Cursor } from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Jared Villanueva Portfolio',
  description: 'Full-Stack Developer | Specializing in Front-End Technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='bg-background-900'>
      <body className={`${clash.variable} ${satoshi.variable}`}>
        <Header/>
        <div className="mx-2 mb-12"><SmoothScroll>{children}</SmoothScroll></div>
        {/* {children} */}
        <Footer/>
      </body>
    </html>
  )
}
