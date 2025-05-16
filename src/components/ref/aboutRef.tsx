"use client"

import { useRefs } from "../providers/refProvider"


export default function AboutRef () {
    const { aboutRef } = useRefs()

    return (
        <div id="aRef" className="absolute top-0 left-0" ref={aboutRef}>
            
        </div>
    )
}