"use client"

import { useRefs } from "../providers/refProvider"
import { Button } from "../ui/button"
import { scrollIntoView } from "@/lib/utils"

export default function ProjectBtn () {

    const { projectRef } = useRefs()

    return (
        <div>
            <Button className="nav-btn text-xl text-foreground" variant={'link'} onClick={() => scrollIntoView({ref:projectRef, start:'start'})}>
                PROJECTS
            </Button>
        </div>
    )
}