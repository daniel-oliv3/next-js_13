import './globals.css'
import type { Metadata } from 'next'
import Nav from "./components/Nav"

import Footer from "./components/Footer"


export const metadata: Metadata = {
  title: 'Exemplo - 20',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {/* barra de navegação */}
        <Nav />


        {children}


        {/* barra de navegação */}
        <Footer />
      </body>
    </html>
  )
}
