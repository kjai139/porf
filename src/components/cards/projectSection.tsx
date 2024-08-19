import Image from "next/image"
import { FaProjectDiagram } from "react-icons/fa"


export default function ProjectSection () {

    
    return (
        <div className="min-h-screen w-full flex flex-col gap-20 mw">
            <div className="flex">
                <FaProjectDiagram size={40}></FaProjectDiagram>
                <h2 className="ml-2 flex items-end border-b-2">
                        Projects
                </h2>
            </div>
            <div className="flex gap-10">
                <div>
                <Image src={'/website.png'} alt="website screenshot" width={100} height={500} style={{
                    width:'auto'
                }}></Image>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold">Webtoon website</h2>
                    <span>
                        Full stack responsive web comics website without CMS - Built with Next JS, MongoDB, AWS S3, NextUI, AuthJS
                    </span>
                </div>

            </div>
            <div className="flex gap-10">
                <div>
                    <h2 className="text-2xl font-semibold">Chat Messenger App</h2>
                    <span>
                        A chat messenger app built with React, Express, Socket.io, MongoDB and raw CSS
                    </span>
                </div>
                <div className="p-4">
                <Image src={'/chatapp.png'} alt="chat app screenshot" width={500} height={500}></Image>
                </div>

            </div>
        </div>
    )
}