"use client"

import { useRefs } from "../providers/refProvider"
import { Button } from "../ui/button"
import { scrollIntoView } from "@/lib/utils"

export default function AboutBtn () {

    const { aboutRef } = useRefs()

    return (
        <div>
            <Button className="text-xl" variant={'link'} onClick={() => scrollIntoView(aboutRef)}>
                ABOUT
            </Button>
        </div>
    )
}