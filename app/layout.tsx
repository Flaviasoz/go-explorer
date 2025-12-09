import React from 'react'
import '@/core/css/globals.css'
import type { Metadata } from 'next'
import { cn } from '@/core/functions/cn'
import { PageProps } from '@/core/interface/page'
import { Elms_Sans, Quicksand } from 'next/font/google'
import { ThemeProvider } from '@/core/providers/theme-provider'

const elmsSans = Elms_Sans({ variable: '--font-elms-sans', subsets: ['latin'] })
const quicksand = Quicksand({ variable: '--font-quicksand', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Go Explorer - Pacotes de Viagens e Roteiros Personalizados',
  description:
    'Descubra os melhores pacotes de viagens, guias de turismo e roteiros personalizados para sua próxima aventura. Planeje sua viagem dos sonhos com a Go Explorer.'
}

const RootLayout = ({ children }: Readonly<PageProps>) => {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body className={cn(elmsSans.variable, quicksand.variable, 'antialiased')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
