"use client"

import { useRefs } from "../providers/refProvider"
import { Button } from "../ui/button"
import { scrollIntoView } from "@/lib/utils"

export default function ContactBtn () {

    const { contactRef } = useRefs()

    return (
        <div>
            <Button className="text-xl" variant={'link'} onClick={() => scrollIntoView({ref:contactRef, start:'start'})}>
                CONTACT
            </Button>
        </div>
    )
}