'use server'
const nodemailer = require('nodemailer')
import { ContactFormType } from "@/components/forms/mailerForm"

export async function sendEmail(values:ContactFormType) {
    console.log('Sa values -', values)

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.nodemailerEmail,
            pass: process.env.nodemailerPw
        }
    })


    const mailOptions = {
        from: process.env.nodemailerEmail,
        to: process.env.nodemailerEmail,
        subject: `New message from portf website - from ${values.senderEmail}`,
        text: values.senderMessage,
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent: ', info)
        return 'success'
    } catch (err) {
        throw new Error('A server error has occured. Please try again later.')
    }


    

    
}