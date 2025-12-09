'use client'

import { useTheme } from 'next-themes'
import { cn } from '@/core/functions/cn'
import { useEffect, useState } from 'react'

export function SeletorTema() {
  const { theme, setTheme } = useTheme()
  const [montado, definirMontado] = useState(false)

  useEffect(() => {
    Promise.resolve().then(() => {
      definirMontado(true)
    })
  }, [])

  if (!montado) return null

  return (
    <div className='flex items-center gap-2 p-2 rounded-lg bg-background/50 border border-foreground/10'>
      <button
        onClick={() => setTheme('light')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
          theme === 'light' ? 'bg-foreground text-background' : 'hover:bg-foreground'
        )}
        aria-label='Tema claro'
      >
        ☀️ Claro
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
          theme === 'dark' ? 'bg-foreground text-background' : 'hover:bg-foreground/10'
        )}
        aria-label='Tema escuro'
      >
        🌙 Escuro
      </button>
      <button
        onClick={() => setTheme('system')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
          theme === 'system' ? 'bg-foreground text-background' : 'hover:bg-foreground/10'
        )}
        aria-label='Tema do sistema'
      >
        💻 Sistema
      </button>
    </div>
  )
}
