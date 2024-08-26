"use client"

import { useRefs } from "../providers/refProvider"
import { Button } from "../ui/button"
import { scrollIntoView } from "@/lib/utils"

export default function AboutBtn () {

    const { aboutRef } = useRefs()

    return (
        <div>
            <Button  className="nav-btn text-xl text-foreground" variant={'link'} onClick={() => scrollIntoView({ref: aboutRef})}>
                ABOUT
            </Button>
        </div>
    )
}