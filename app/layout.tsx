import React from 'react'
import '@/core/css/globals.css'
import type { Metadata } from 'next'
import { Elms_Sans, Quicksand } from 'next/font/google'

const elmsSans = Elms_Sans({
  variable: '--font-elms-sans',
  subsets: ['latin']
})

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Go Explorer - Pacotes de Viagens e Roteiros Personalizados',
  description:
    'Descubra os melhores pacotes de viagens, guias de turismo e roteiros personalizados para sua próxima aventura. Planeje sua viagem dos sonhos com a Go Explorer.'
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='pt-BR'>
      <body
        className={`${elmsSans.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
