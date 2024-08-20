import SwiftText from "../animations/swiftTxt"


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
            <div className="flex flex-col h-screen w-full justify-center items-center gap-2">
                <div className="text-5xl flex">
                    <SwiftText txt={txt}></SwiftText>

                </div>
                
            </div>
        </div>
    )
}