import { type ClassValue, clsx } from "clsx"
import { RefObject } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface scrollIntoViewProps {
  ref:RefObject<HTMLDivElement>,
  position: 'start' | 'center' | 'end' | 'nearest'
}


export function scrollIntoView({ref, position}:scrollIntoViewProps) {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior:'smooth',
      block: position,
    })
  } else {
    console.error('REF dOES NOT EXIST')
  }
}