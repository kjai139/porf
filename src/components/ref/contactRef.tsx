"use client"

import { useRefs } from "../providers/refProvider"


export default function ContactRef () {
    const { contactRef } = useRefs()

    return (
        <div ref={contactRef}>

        </div>
    )
}