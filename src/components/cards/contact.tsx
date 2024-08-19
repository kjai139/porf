import { MailerForm } from "../forms/mailerForm";


export default function ContactSection() {

    return (
        <div className="min-h-screen w-full flex flex-col gap-20 mw">
            <div className="flex justify-center">
                <h2 className="text-4xl underline">
                    Contact
                </h2>
            </div>
            <div className="flex justify-center">
            <MailerForm></MailerForm>
            </div>
        </div>
    )
}