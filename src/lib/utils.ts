import { type ClassValue, clsx } from "clsx"
import { RefObject } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function scrollIntoView(ref:RefObject<HTMLDivElement>) {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior:'smooth',
      block:'center',
    })
  } else {
    console.error('REF dOES NOT EXIST')
  }
}