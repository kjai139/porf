'use client'

import { useRefs } from "../providers/refProvider"

export default function LandingRef () {
    const { landingRef } = useRefs()

    return (
        <div id="lRef" className="absolute h-full top-0 w-full left-0" ref={landingRef}>
            
        </div>
    )
}