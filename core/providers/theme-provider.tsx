'use client'

import type { ComponentProps } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

type ThemeProps = ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: ThemeProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
