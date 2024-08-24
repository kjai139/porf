import AboutBtn from "../buttons/aboutBtn"



export default function TopNav () {
    return (
        <nav className="flex w-full justify-between p-6 shadow text-foreground bg-navBg">
            <div>
                
            </div>
            <div className="flex gap-4 text-xl">
                <AboutBtn></AboutBtn>
                <div>
                    PROJECTS
                </div>
                <div>
                    CONTACT
                </div>
            </div>
        </nav>
    )
}