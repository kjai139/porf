"use client"

import { useRefs } from "../providers/refProvider"


export default function AboutRef () {
    const { aboutRef } = useRefs()

    return (
        <div id="aRef" ref={aboutRef}>

        </div>
    )
}