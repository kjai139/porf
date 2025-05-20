import Image from "next/image"
import { FaProjectDiagram } from "react-icons/fa"
import ProjectRef from "../ref/projectRef"
import { Button } from "../ui/button"
import DemoViewBtns from "../buttons/demoViewBtn"


export default function ProjectSection() {

    const buttonStyle = 'default'

    return (
        <div className="relative w-full flex flex-col gap-16 mw">
            <ProjectRef></ProjectRef>
            <div className="flex ah ml-4 items-center">

                <FaProjectDiagram size={40}></FaProjectDiagram>
                <h2 className="ml-2 flex items-end border-b-2 lg:text-5xl">
                    Projects
                </h2>

            </div>
            <div className="flex gap-10 flex-col-reverse sm:flex-row">

                <div className="flex flex-1">
                    <article>
                        <Image className="shift-u" src={'/fsmobile.png'} alt="website fullscreen screenshot" width={300} height={800}>
                        </Image>

                    </article>
                    <article>
                        <Image className="tilt-l shadow" src={'/website.png'} alt="website screenshot" width={100} height={500} style={{
                            width: 'auto'
                        }}></Image>
                    </article>
                </div>
                <div className="flex-1 p-4 flex flex-col">
                    <div className="proj-t gap-4 flex flex-col">
                        <h2 className="text-2xl font-semibold">Web comics website</h2>
                        <span className="text-lg">
                            A fully scalable and mobile responsive web comics website with a custom CMS - Built with Next JS, MongoDB, AWS S3, NextUI, AuthJS
                        </span>
                        <DemoViewBtns></DemoViewBtns>
                    </div>
                </div>

            </div>
            <div className="flex gap-10 flex-col sm:flex-row mt-4 p-sec">
                <div className="flex-1 p-4 flex flex-col">
                    <div className="flex gap-4 flex-col proj-t">
                        <h2 className="text-2xl font-semibold">Instant web messenger</h2>
                        <span className="text-lg">
                            A chat messenger app that allows users to communicate in real time - Built with React, Express, Socket.io, MongoDB, JWT, and vanilla CSS
                        </span>
                        <DemoViewBtns></DemoViewBtns>
                    </div>
                </div>
                <div className="flex flex-1">
                <article className="p-4">
                    <Image src={'/chatapp.png'} alt="chat app screenshot" width={500} height={500}></Image>
                </article>
                </div>

            </div>
            <div className="flex gap-10 flex-col-reverse sm:flex-row mt-4 p-sec">
                <div className="flex flex-1">
                <article>
                    <Image src={'/meteor.png'} alt="website screenshot" width={500} height={500} style={{
                        minWidth: '200px',
                        height: 'auto'
                    }}></Image>
                </article>
                </div>
                <div className="flex-1 p-4 flex flex-col">
                <div className="proj-t gap-4 flex flex-col">
                    <h2 className="text-2xl font-semibold">AI Translation Web App</h2>
                    <span className="text-lg">
                        A translation tool built with Next JS, AuthJS, Lambda & SQS S3, payment with Stripe, Tailwind CSS and Shadcn
                    </span>
                    <DemoViewBtns></DemoViewBtns>
                </div>
                </div>
            </div>
        </div>
    )
}