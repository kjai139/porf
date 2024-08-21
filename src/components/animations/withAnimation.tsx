"use client"

import { useEffect, useRef } from "react"


export default function WithAnimation({children, classnames, animationName}) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('IntersectionRatio:', entry.intersectionRatio)
                console.log('Is intersecting:', entry.isIntersecting)
                console.log(ref.current)
                if (entry.isIntersecting) {
                    ref.current.children[0].classList.add(animationName)
                } else {
                    ref.current.children[0].classList.remove(animationName)
                } 
            },
            {
                threshold: 0,
                
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [animationName])

    return (
        <div ref={ref} className={classnames ? classnames: undefined}>
            {children}
        </div>
    )
}