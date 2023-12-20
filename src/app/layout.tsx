import type { Metadata } from 'next'
import './globals.css'
import { clash, satoshi } from "../fonts/font"
import SmoothScroll from '@/components/SmoothScroll'
import React from "react";
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Cursor } from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Jared Villanueva Portfolio',
  description: 'Full-Stack Development Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      
      <body className={`${clash.variable} ${satoshi.variable}`}>
        <Cursor/>
        <Header/>
        <div className='px-40'><SmoothScroll>{children}</SmoothScroll></div>
        <Footer/>
      </body>
    </html>
  )
}
