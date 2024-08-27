"use client"

import { useRefs } from "../providers/refProvider"


export default function ProjectRef () {
    const { projectRef } = useRefs()

    return (
        <div id="pRef" className="absolute top-0 left-0 h-full w-full" ref={projectRef}>

        </div>
    )
}