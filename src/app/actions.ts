'use server'
const nodemailer = require('nodemailer')
import { ContactFormType } from "@/components/forms/mailerForm"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import { headers } from "next/headers"
const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN
})

const ratelimit = new Ratelimit({
    redis: redis,
    limiter:Ratelimit.slidingWindow(1, '60s')
})

export async function sendEmail(values:ContactFormType) {
    

        try {
            console.log('Sa values -', values)

        const ip = headers().get('x-forwarded-for')
        if (!ip) {
            throw new Error('Ip missing')
        }
        const { success, reset, limit, remaining } = await ratelimit.limit(ip)
        if (!success) {
            throw new Error('Error: Exceeded message limit. Please wait a minute before trying again.')
        } else {
            console.log('IP from SA - ', ip)
            console.log('REMAINING:', remaining, 'LIMIT', limit)
            

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: process.env.nodeGmailEmail,
                    pass: process.env.nodeGmailPw
                },
            })


            const mailOptions = {
                from: process.env.nodeGmailEmail,
                to: process.env.nodeGmailEmail,
                subject: `New message from portf website - from ${values.senderName}, ${values.senderEmail}`,
                text: values.senderMessage,
            }
                const info = await transporter.sendMail(mailOptions)
                console.log('Email sent: ', info)
                return 'success'
        }} catch (err) {
            console.log(err)
            throw new Error('A server error has occured')
        }
    
    


    

    
}