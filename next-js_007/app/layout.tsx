import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navegacao from './nav'
import Footer from './footer'

 




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exemplo - 7',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navegacao/>
        
        {children}
      
        <Footer />
      </body>
    </html>
  )
}
