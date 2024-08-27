"use client"
import { scrollIntoView } from "@/lib/utils"
import { useRefs } from "../providers/refProvider"
import { Button } from "../ui/button"
import { FaArrowDown } from "react-icons/fa"

export default function LearnMoreBtn () {

    const { aboutRef } = useRefs()

    return (
        <Button onClick={() => scrollIntoView({ref:aboutRef!})} id="v-btn" className="shadow-sm sm:text-lg text-foreground bg-primary" size={'lg'} variant={"default"}><span className="font-semibold"><span className="flex items-center gap-2">Learn More<FaArrowDown></FaArrowDown></span></span> </Button>
    )
}