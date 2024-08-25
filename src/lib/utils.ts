import { type ClassValue, clsx } from "clsx"
import { RefObject } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface scrollIntoViewProps {
  ref:RefObject<HTMLDivElement>,
  start?: 'start' | 'center' | 'end' | 'nearest'
}


export function scrollIntoView({ref, start}:scrollIntoViewProps) {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior:'smooth',
      block: start ? start : 'center',
    })
  } else {
    console.error('REF dOES NOT EXIST')
  }
}