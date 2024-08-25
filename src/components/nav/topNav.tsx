import AboutBtn from "../buttons/aboutBtn"
import ContactBtn from "../buttons/contactBtn"
import ProjectBtn from "../buttons/projectsBtn"



export default function TopNav () {
    return (
        <nav className="flex w-full justify-between p-6 shadow text-foreground bg-navBg">
            <div>
                
            </div>
            <div className="flex gap-4 text-xl">
                <AboutBtn></AboutBtn>
                <ProjectBtn></ProjectBtn>
                <ContactBtn></ContactBtn>
            </div>
        </nav>
    )
}