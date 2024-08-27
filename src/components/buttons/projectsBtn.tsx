"use client"

import { useRefs } from "../providers/refProvider"
import { Button } from "../ui/button"
import { scrollIntoView } from "@/lib/utils"

export interface NavBtnProps {
    hl?: boolean
}

export default function ProjectBtn ({hl}:NavBtnProps) {

    const { projectRef } = useRefs()

    return (
        <div>
            <Button className={`nav-btn text-xl text-foreground ${hl ? 'hl' : undefined}`} variant={'link'} onClick={() => scrollIntoView({ref:projectRef!, start:'start'})}>
                PROJECTS
            </Button>
        </div>
    )
}