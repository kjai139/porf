import SwiftText from "../animations/swiftTxt"


export default function HeroSection () {
    
    return (
        <div>
            <div className="flex flex-col h-screen w-full justify-center items-center gap-2">
                <div className="text-5xl flex">
                    <SwiftText baseDelay={0} size="text-5xl" text="Hello,"></SwiftText>
                    <SwiftText baseDelay={1} size="text-5xl" text="I'm Simon"></SwiftText>

                </div>
                <SwiftText baseDelay={2} size="text-5xl" text="I'm a full stack web developer"></SwiftText>
            </div>
        </div>
    )
}