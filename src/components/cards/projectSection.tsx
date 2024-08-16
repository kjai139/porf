import { FaProjectDiagram } from "react-icons/fa"


export default function ProjectSection () {
    return (
        <div className="h-screen w-full px-20 py-20">
            <div className="flex">
                <FaProjectDiagram size={40}></FaProjectDiagram>
                <h2 className="ml-2 text-2xl flex items-end border-b-2">
                        Projects
                </h2>
            </div>
        </div>
    )
}