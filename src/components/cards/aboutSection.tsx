
import { DiNodejs } from "react-icons/di";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact, FaUser } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiAmazons3, SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";



export default function AboutSection () {
    const iconSizes = 40

    return (
        <div className="h-screen w-full flex px-20 py-20">
            <div className="flex gap-8">
            
            <div className="flex flex-col flex-1">
                <div className="flex p-2">
                    <FaUser size={40}></FaUser>
                    <h2 className="ml-2 text-2xl flex items-end border-b-2">
                        About me
                    </h2>
                </div>
                <div className="text-lg">
                    <p>
                    I am a passionate and driven web developer with a strong focus on JavaScript. Over the past few years, I've honed my skills in creating dynamic and responsive web applications, leveraging frameworks like React.js and Next.js to deliver high-quality, user-friendly experiences.
                    </p>
                </div>
                
            </div>

            <div className="flex-1">
                <div className="grid grid-cols-3 gap-4 gc">
                <div>
                <IoLogoJavascript size={iconSizes}></IoLogoJavascript>
                <span>JavaScript</span>
                </div>
                <div>
                <DiNodejs size={iconSizes}></DiNodejs>
                <span>Node JS</span>
                </div>
                <div>
                <RiNextjsFill size={iconSizes}></RiNextjsFill>
                <span>Next.js</span>
                </div>
                <div>
                <SiTypescript size={iconSizes}></SiTypescript>
                <span>Typescript</span>
                </div>
                <div>
                    <FaHtml5 size={iconSizes}></FaHtml5>
                    <span>Html</span>
                </div>
                <div>
                <FaCss3Alt size={iconSizes}></FaCss3Alt>
                <span>Css</span>
                </div>
                <div>
                <TbBrandMongodb size={iconSizes}></TbBrandMongodb>
                <span>MongoDB</span>
                </div>
                <div>
                <SiAmazons3 size={iconSizes}></SiAmazons3>
                <span>Amazon S3</span>
                </div>
                <div>
                <SiExpress size={iconSizes}></SiExpress>
                <span>Express JS</span>
                </div>
                <div>
                <FaGitAlt size={iconSizes}></FaGitAlt>
                <span>Git</span>
                </div>
                <div>
                <FaReact size={iconSizes}></FaReact>
                <span>React</span>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}