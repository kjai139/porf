import { NextRequest, NextResponse } from "next/server";

export async function POST (request:NextRequest) {
    const body = await request.json()
    const token = body.token

    const secretKey = process.env.RECAPTCHA_SECRET

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                secret: secretKey as string,
                response: token
            })
        })

        if (response.ok) {
            const data = await response.json()
            if (!data.success) {
                return new NextResponse(JSON.stringify({
                    error: 'CAPTCHA verification failed'
                }), {
                    status:500
                })
            } else {
                return new NextResponse(JSON.stringify({
                    success:true
                }), {
                    status:200
                })
            }
        }

    } catch (err) {
        console.error('[verifyCaptcha Api] Error', err)
        return new NextResponse(JSON.stringify({
            error: 'CAPTCHA verification failed'
        }), {
            status: 500
        })
    }


}