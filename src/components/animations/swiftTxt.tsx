"use client"

import { useEffect, useRef, useState } from "react"

interface SwiftTextProps {
    txt : {
        msg:string,
        size?:string,
    }[]
}

export default function SwiftText({txt}:SwiftTextProps) {

    const [animatedWords, setAnimatedWords] = useState<any[]>([])

    /* useEffect(() => {
        const words = text.split(" ").map((word, idx) => {
            return (
                <span className={`al ${word === 'Simon' ? 'text-primary' : ''}`} key={`${idx}`}>
                    <i className="not-italic" style={{
                    animationDelay:`${(baseDelay + idx) * 0.2}s`
                }}>{word}&nbsp;</i>

                </span>
            )
        })

        setAnimatedWords(words)
    }, []) */

    return (
        <div className="flex flex-col items-center gap-4">
            {
                txt.map((line, lineIdx) => {
                    const wordsArr = line.msg.split(' ')
                    return (
                        <div className="flex" key={`line-${lineIdx}`}>
                        {
                            wordsArr.map((word, idx) => {
                                return (
                                    <span className={`al ${word === 'Simon' ? 'text-primary' : ''}`} key={`word-${idx}`}>
                                        <div style={{
                                        animationDelay:`${(wordsArr.length + idx + lineIdx) * 0.2}s`
                                    }}>
                                        <i className="not-italic">{word}&nbsp;</i>
                                        </div>

                                    </span>
                                )
                            })
                        }
                        </div>
                    )
                })
            }
            
        </div>
    )
}