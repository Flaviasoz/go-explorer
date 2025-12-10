'use client'

import { Switch } from '@mantine/core'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { PiSunHorizonFill } from 'react-icons/pi'
import { BsMoonStarsFill } from 'react-icons/bs'

const ThemeSelector = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    Promise.resolve().then(() => {
      setMounted(true)
    })
  }, [])

  if (!mounted) return null

  return (
    <Switch
      size='md'
      color='dark.3'
      checked={isDark}
      onChange={() => setTheme(isDark ? 'light' : 'dark')}
      offLabel={<BsMoonStarsFill size={14} color='var(--mantine-color-blue-6)' />}
      onLabel={<PiSunHorizonFill size={14} color='var(--mantine-color-yellow-4)' />}
    />
  )
}

export default ThemeSelector
