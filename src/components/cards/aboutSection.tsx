
import { DiNodejs } from "react-icons/di";
import { FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaReact, FaUser } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiAmazons3, SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import WithAnimation from "../animations/withAnimation";
import AboutRef from "../ref/aboutRef";



export default function AboutSection () {
    const iconSizes = 40

    const skills = [
        {
            image:<IoLogoJavascript size={iconSizes}></IoLogoJavascript>,
            name:'Javascript'
        },
        {
            image:<DiNodejs size={iconSizes}></DiNodejs>,
            name:'Node.js'
        },
        {
            image:<RiNextjsFill size={iconSizes}></RiNextjsFill>,
            name:'Next.js'
        },
        {
            image:<SiTypescript size={iconSizes}></SiTypescript>,
            name:'Typescript'
        },
        {
            image: <FaHtml5 size={iconSizes}></FaHtml5>,
            name:'HTML'
        },
        {
            image:<FaCss3Alt size={iconSizes}></FaCss3Alt>,
            name:'CSS'
        },
        {
            image:<TbBrandMongodb size={iconSizes}></TbBrandMongodb>,
            name:'MongoDB'
        },
        {
            image:<SiAmazons3 size={iconSizes}></SiAmazons3>,
            name:'Amazon S3'
        },
        {
            image:<SiExpress size={iconSizes}></SiExpress>,
            name:'Express.js'
        },
        {
            image:<FaGitAlt size={iconSizes}></FaGitAlt>,
            name:'Git'
        },
        {
            image:<FaReact size={iconSizes}></FaReact>,
            name:'React.js'
        },
        {
            image:<FaDocker size={iconSizes}></FaDocker>,
            name:'Docker'
        }
    ]
  

    return (
        <div className="relative w-full flex mw items-center justify-center min-h-[75vh]">
            <AboutRef />
            <div>
            <div className="flex flex-col gap-8 overflow-hidden sm:flex-row">
            
            <WithAnimation classnames={`flex flex-col flex-1 gap-6`} animationName={'active'}>
                <div className="flex flex-col flex-1 gap-6 l-slide">
                <div className="flex p-2 items-center">
                    <FaUser size={40}></FaUser>
                    <h2 className="ml-2 flex items-end border-b-2 lg:text-5xl">
                        About me
                    </h2>
                </div>
                <div className="text-lg">
                    <p>
                    I am a passionate and self-driven web developer with a strong focus on JavaScript. Over the past few years, I've honed my skills in creating dynamic, scalable, and responsive websites and applications, leveraging react-based frameworks like Next.js to deliver high-quality, user-friendly experiences.
                    </p>
                </div>
                </div>
            
            </WithAnimation>
            <WithAnimation classnames={`flex-1`} animationName={'active'}>
                <div className="ff flex-1">
                <div className="grid grid-cols-3 gap-4 gc">
                    {
                        skills.map((node, idx) => {
                            return (
                                <div key={`sk-${idx}`}>
                                    {node.image}
                                    <span className="text-sm sm:text-md">{node.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                </div>

            
            </WithAnimation>
            </div>
            </div>
            
        </div>
    )
}