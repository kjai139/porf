"use client"

import { useRefs } from "../providers/refProvider"


export default function ContactRef () {
    const { contactRef } = useRefs()

    return (
        <div id="cRef" className="absolute w-full h-full z-0" ref={contactRef}>

        </div>
    )
}