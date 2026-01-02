import '@/core/css/globals.css'
import '@mantine/core/styles.css'

import type { Metadata } from 'next'
import { cn } from '@/core/functions/cn'
import { MantineProvider } from '@mantine/core'
import { PageProps } from '@/core/interface/page'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/core/providers/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Go Explorer - Pacotes de Viagens e Roteiros Personalizados',
  description:
    'Descubra os melhores pacotes de viagens, guias de turismo e roteiros personalizados para sua próxima aventura. Planeje sua viagem dos sonhos com a Go Explorer.'
}

const RootLayout = ({ children }: Readonly<PageProps>) => {
  return (
    <html lang='pt-BR' suppressHydrationWarning className={poppins.variable}>
      <body
        className={cn('antialiased font-poppins')}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        <MantineProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </MantineProvider>
      </body>
    </html>
  )
}

export default RootLayout
