import { MailerForm } from "../forms/mailerForm";
import { MdContactMail } from "react-icons/md";

export default function ContactSection() {

    return (
        <div className="min-h-screen w-full flex flex-col gap-20 mw">
            <div className="flex justify-center flex-col items-center">
                <div className="flex gap-4">
                <MdContactMail size={40}></MdContactMail>
                <h2 className="text-4xl underline mb-8">
                    Contact
                </h2>
                </div>
                <span className="max-w-[500px]">
                    If you have any questions or want to work together please leave your details and I'll get back to you as soon as possible.
                </span>
            </div>
            <div className="flex justify-center">
            <MailerForm></MailerForm>
            </div>
        </div>
    )
}