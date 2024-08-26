"use client"
import { useMediaQuery } from "@/hooks/mediaQueries"
import AboutBtn from "../buttons/aboutBtn"
import ContactBtn from "../buttons/contactBtn"
import ProjectBtn from "../buttons/projectsBtn"
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose } from "../ui/drawer"
import { useRef, useState } from "react"
import { Button } from "../ui/button"
import { useRefs } from "../providers/refProvider"
import { scrollIntoView } from "@/lib/utils"

export default function TopNav () {
    const { aboutRef, projectRef, contactRef } = useRefs()
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const iconSize = 30
    const navDelay = 500
    

    return (
        <nav className="flex w-full justify-between p-6 shadow text-foreground bg-navBg z-50 top-0 sticky">
            <div>
                {
                    !isDesktop ? 
                    <Drawer direction="right">
                        <DrawerTrigger title="hamburger menu" aria-description="hamburger menu">
                            <RxHamburgerMenu size={iconSize}></RxHamburgerMenu>
                        </DrawerTrigger>
                        <DrawerContent aria-description="Navigation menu" title="Navigation menu" className="top-0 max-w-[260px] right-0 h-full m-0 w-screen">
                        <DrawerHeader>
                        <DrawerTitle>Navigation Menu</DrawerTitle>
                        <DrawerDescription>Where do you want to go?</DrawerDescription>
                        </DrawerHeader>
                            <ul className="flex flex-col justify-center items-center">
                                <li>
                                    <DrawerClose asChild>
                                    <Button className="text-xl text-foreground nav-btn" variant={'link'} onClick={ () => {
                                        setTimeout(() => {
                                            scrollIntoView({ ref: aboutRef });
                                          }, navDelay); // Delay (in milliseconds)
                                    }}>
                                        ABOUT
                                    </Button>
                                    </DrawerClose>
                                
                                </li>
                                <li>
                                <DrawerClose asChild>
                                    <Button className="text-xl text-foreground nav-btn" variant={'link'} onClick={ () => {
                                        setTimeout(() => {
                                            scrollIntoView({ ref: projectRef, start:'start' });
                                          }, navDelay); // Delay (in milliseconds)
                                    }}>
                                        PROJECTS
                                    </Button>
                                    </DrawerClose>
                                </li>
                                <li>
                                <DrawerClose asChild>
                                    <Button className="text-xl text-foreground nav-btn" variant={'link'} onClick={ () => {
                                        setTimeout(() => {
                                            scrollIntoView({ ref: contactRef, start: 'start' });
                                          }, navDelay); // Delay (in milliseconds)
                                    }}>
                                        CONTACT
                                    </Button>
                                    </DrawerClose>
                                </li>
                            </ul>
                        </DrawerContent>
                    </Drawer>
                     : null

                }
                
            </div>
           { isDesktop ? <div className="flex gap-4 text-xl">
                <AboutBtn></AboutBtn>
                <ProjectBtn></ProjectBtn>
                <ContactBtn></ContactBtn>
            </div> : null }
        </nav>
    )
}