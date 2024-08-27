import { MailerForm } from "../forms/mailerForm";
import { MdContactMail } from "react-icons/md";
import ContactRef from "../ref/contactRef";

export default function ContactSection() {

    return (
        <div className="relative min-h-screen w-full flex flex-col gap-20 mw">
            <ContactRef></ContactRef>
            <div className="flex justify-center flex-col sm:items-center">
                <div className="flex gap-4 mb-8 items-center">
                <MdContactMail size={40}></MdContactMail>
                <h2 className="lg:text-5xl underline">
                    Contact
                </h2>
                </div>
                <span className="max-w-[500px] text-lg">
                    If you have any questions or want to work together please leave your details and I'll get back to you as soon as possible.
                </span>
            </div>
            <div className="flex justify-center">
            <MailerForm></MailerForm>
            </div>
        </div>
    )
}