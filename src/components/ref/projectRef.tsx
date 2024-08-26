"use client"

import { useRefs } from "../providers/refProvider"


export default function ProjectRef () {
    const { projectRef } = useRefs()

    return (
        <div id="pRef" ref={projectRef}>

        </div>
    )
}