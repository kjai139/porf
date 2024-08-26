import SwiftText from "../animations/swiftTxt"
import { Button } from "../ui/button"


export default function HeroSection () {

    const txt = [
        {
            msg: "Hello, I'm Simon"
        },
        {
            msg: "I'm a full stack web developer"
        }
    ]
    
    return (
        <div>
            <div className="flex flex-col h-screen w-full justify-center items-center gap-10">
                <div className="text-5xl">
                    <SwiftText txt={txt}></SwiftText>

                </div>
                
            </div>
        </div>
    )
}