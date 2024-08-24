"use client"
import { createContext, LegacyRef, RefObject, useContext, useRef } from "react";


type SectionRefs = {
    aboutRef:RefObject<HTMLDivElement>,
    projectRef:RefObject<HTMLElement>,
    contactRef:RefObject<HTMLElement>
}

type RefContextType = Partial<SectionRefs>

const RefContext = createContext<RefContextType>({})

export default function RefProvider ({children}:{
    children: React.ReactNode
}) {
    const sectionRefs = {
        aboutRef: useRef(null),
        projectRef: useRef(null),
        contactRef: useRef(null)
    }

    return (
        <RefContext.Provider value={sectionRefs}>
            {children}
        </RefContext.Provider>
    )
}

export const useRefs = () => {
    const context = useContext(RefContext)
    if (!context) {
        throw new Error('useContext must be used within RefProvider')
    }
    return context
}