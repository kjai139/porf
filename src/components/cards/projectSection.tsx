import Image from "next/image"
import { FaProjectDiagram } from "react-icons/fa"
import ProjectRef from "../ref/projectRef"


export default function ProjectSection () {

    
    return (
        <div className="min-h-screen w-full flex flex-col gap-16 mw">
            <ProjectRef></ProjectRef>
            <div className="flex ah ml-4">
                
                <FaProjectDiagram size={40}></FaProjectDiagram>
                <h2 className="ml-2 flex items-end border-b-2 lg:text-5xl">
                        Projects
                </h2>
                
            </div>
            <div className="flex gap-10 flex-col-reverse sm:flex-row">
                <div className="flex">
                <article>
                <Image className="shift-u" src={'/fsmobile.png'} alt="website fullscreen screenshot" width={300} height={0} style={{
                    width: '300px',
                    height:'auto'
                }}>
                </Image>
                
                </article>
                <article>
                <Image className="tilt-l shadow" src={'/website.png'} alt="website screenshot" width={100} height={500} style={{
                    width:'auto'
                }}></Image>
                </article>
                </div>
                <div className="flex-1 p-4 gap-4 flex flex-col proj-t">
                    <h2 className="text-2xl font-semibold">Web comics website</h2>
                    <span className="text-lg">
                        Fully scalable and mobile responsive web comics website with a custom CMS - Built with Next JS, MongoDB, AWS S3, NextUI, AuthJS
                    </span>
                </div>

            </div>
            <div className="flex gap-10 flex-col sm:flex-row">
                <div className="flex gap-4 flex-col proj-t">
                    <h2 className="text-2xl font-semibold">Bootleg Discord</h2>
                    <span className="text-lg">
                        A chat messenger app built with React, Express, Socket.io, MongoDB, JWT, and vanilla CSS
                    </span>
                </div>
                <article className="p-4">
                <Image src={'/chatapp.png'} alt="chat app screenshot" width={500} height={500}></Image>
                </article>

            </div>
            <div className="flex gap-10 flex-col-reverse sm:flex-row">
            <article>
                <Image src={'/ecom.png'} alt="website screenshot" width={500} height={500} style={{
                    minWidth: '200px',
                    height:'auto'
                }}></Image>
                </article>
                <div className="flex-1 proj-t gap-4 flex flex-col">
                    <h2 className="text-2xl font-semibold">Coins Shop</h2>
                    <span className="text-lg">
                        An E-commerce website that sells user coins - Built with Next JS, MongoDB, AuthJs and Stripe.Js
                    </span>
                </div>
            </div>
        </div>
    )
}