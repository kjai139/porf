"use client"

import { useRefs } from "../providers/refProvider"
import { Button } from "../ui/button"
import { scrollIntoView } from "@/lib/utils"
import { NavBtnProps } from "./projectsBtn"

export default function ContactBtn ({hl}:NavBtnProps) {

    const { contactRef } = useRefs()

    return (
        <div>
            <Button className={`text-xl nav-btn text-foreground ${hl ? 'hl' : undefined}`} variant={'link'} onClick={() => scrollIntoView({ref:contactRef!, start:'start'})}>
                CONTACT
            </Button>
        </div>
    )
}