"use client"

import { useRefs } from "../providers/refProvider"
import { Button } from "../ui/button"
import { scrollIntoView } from "@/lib/utils"
import { NavBtnProps } from "./projectsBtn"

export default function AboutBtn ({hl}:NavBtnProps) {

    const { aboutRef } = useRefs()

    return (
        <div>
            <Button  className={`nav-btn text-xl text-foreground ${hl ? 'hl' : undefined}`} variant={'link'} onClick={() => scrollIntoView({ref: aboutRef!})}>
                ABOUT
            </Button>
        </div>
    )
}