'use server'
const nodemailer = require('nodemailer')
import { ContactFormType } from "@/components/forms/mailerForm"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import { headers } from "next/headers"
import { google } from 'googleapis'


const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN
})

const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(1, '60s')
})

const CLIENT_ID = process.env.GMAIL_CLIENT_ID
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const USER_EMAIL = process.env.nodeGmailEmail

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
)

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

export async function sendEmail(values: ContactFormType) {


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

            const { token } = await oAuth2Client.getAccessToken()
            console.log('[SendEmail] Token received:', token)
            const transporter = nodemailer.createTransport({
                service:'gmail',
                auth: {
                    type: 'OAuth2',
                    user: USER_EMAIL,
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: token

                },
            })


            const mailOptions = {
                from: USER_EMAIL,
                to: USER_EMAIL,
                subject: `New message from portf website - from ${values.senderName}, ${values.senderEmail}`,
                text: values.senderMessage,
            }
            const info = await transporter.sendMail(mailOptions)
            console.log('Email sent: ', info)
            return 'success'
        }
    } catch (err) {
        console.error('[SendMail] Error:', err)
        throw new Error('A server error has occured')
    }







}