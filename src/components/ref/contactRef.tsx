"use client"

import { useRefs } from "../providers/refProvider"


export default function ContactRef () {
    const { contactRef } = useRefs()

    return (
        <div id="cRef" ref={contactRef}>

        </div>
    )
}