"use client"

import { useRefs } from "../providers/refProvider"


export default function ContactRef () {
    const { contactRef } = useRefs()

    return (
        <div id="cRef" className="absolute w-full h-full" ref={contactRef}>

        </div>
    )
}