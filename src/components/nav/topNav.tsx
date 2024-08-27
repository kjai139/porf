"use client"
import { useMediaQuery } from "@/hooks/mediaQueries"
import AboutBtn from "../buttons/aboutBtn"
import ContactBtn from "../buttons/contactBtn"
import ProjectBtn from "../buttons/projectsBtn"
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose } from "../ui/drawer"
import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"
import { useRefs } from "../providers/refProvider"
import { scrollIntoView } from "@/lib/utils"

export default function TopNav () {
    const { aboutRef, projectRef, contactRef } = useRefs()
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const iconSize = 30
    const navDelay = 500
    const [activeBtn, setActiveBtn] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveBtn(entry.target.id)
                        console.log('NEW ACTIVE', entry.target.id)
                    } else {
                        setActiveBtn('')
                    }
                })
            }, {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: 0.3,
            }
        )

        const sectionRefs = [
            aboutRef, projectRef, contactRef
        ]

        sectionRefs.forEach((ref) => {
            if (ref && ref.current) {
                observer.observe(ref.current)
            }
        })

        return () => {
            sectionRefs.forEach((ref) => {
                if (ref && ref.current) {
                    observer.unobserve(ref.current)
                }
            })
        }
    }, [])
    

    return (
        <nav className="flex w-full justify-between p-6 shadow text-foreground bg-navBg z-50 top-0 sticky">
            <div>
                {
                    !isDesktop ?
                    <div className="burger"> 
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
                                    <Button className={`text-xl text-foreground nav-btn`} variant={'link'} onClick={ () => {
                                        setTimeout(() => {
                                            scrollIntoView({ ref: aboutRef! });
                                          }, navDelay); // Delay (in milliseconds)
                                    }}>
                                        ABOUT
                                    </Button>
                                    </DrawerClose>
                                
                                </li>
                                <li>
                                <DrawerClose asChild>
                                    <Button className={`text-xl text-foreground nav-btn ${activeBtn === 'pRef' ? 'hl' : null}`} variant={'link'} onClick={ () => {
                                        setTimeout(() => {
                                            scrollIntoView({ ref: projectRef!, start:'start' });
                                          }, navDelay); // Delay (in milliseconds)
                                    }}>
                                        PROJECTS
                                    </Button>
                                    </DrawerClose>
                                </li>
                                <li>
                                <DrawerClose asChild>
                                    <Button className={`text-xl text-foreground nav-btn ${activeBtn === 'cRef' ? 'hl' : null}`} variant={'link'} onClick={ () => {
                                        setTimeout(() => {
                                            scrollIntoView({ ref: contactRef!, start: 'start' });
                                          }, navDelay); // Delay (in milliseconds)
                                    }}>
                                        CONTACT
                                    </Button>
                                    </DrawerClose>
                                </li>
                            </ul>
                        </DrawerContent>
                    </Drawer>
                    </div>
                     : null

                }
                
            </div>
           { isDesktop ? <div className="flex gap-4 text-xl">
                <AboutBtn hl={activeBtn === 'aRef' ? true : false}></AboutBtn>
                <ProjectBtn hl={activeBtn === 'pRef' ? true : false}></ProjectBtn>
                <ContactBtn hl={activeBtn === 'cRef' ? true : false}></ContactBtn>
            </div> : null }
        </nav>
    )
}