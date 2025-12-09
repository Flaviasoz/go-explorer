import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

export function cn(...values: ClassValue[]) {
  return twMerge(clsx(values))
}
