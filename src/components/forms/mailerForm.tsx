"use client"

import { sendEmail } from "@/app/actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import ReCAPTCHA from 'react-google-recaptcha'


const formSchema = z.object({
    senderName: z.string().min(2, {
        message: 'Name must be at least 2 characters long'
    }).max(20, {
        message: 'No more than 20 characters'
    }),
    senderEmail: z.string().email({
        message: 'Invalid Email address'
    }),
    senderMessage: z.string().min(1, {
        message: 'Write something!'
    }).max(1000, {
        message: 'Max message length is 1000 characters'
    })
})


export function MailerForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            senderName: '',
            senderEmail: '',
            senderMessage: ''
        }
    })

    const [serverErrorMsg, setServerErrorMsg] = useState('')
    const [resultMsg, setResultMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [wasSubmitSuccess, setWasSubmitSuccess] = useState(false)
    const [token, setToken] = useState('')
    const [captchaError, setCaptchaErrorMsg] = useState('')
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
    const [showCaptcha, setShowCaptcha] = useState(false)
    const [formValues, setFormValues] = useState<any>()

    useEffect(() => {
        if (wasSubmitSuccess) {
            form.reset()
        }
    }, [wasSubmitSuccess])

    /* async function checkCaptchaInvis() {
        setToken('')
        try {
            const captcha = await recaptchaRef.current?.executeAsync()
            if (!captcha) {
                throw new Error('Captcha Failed. Please try again.')
            } else {
                setToken(captcha)
            }
            console.log('captcha token:', captcha)
            return captcha
        } catch (err) {
            console.error('[checkCaptcha] Error ', err)
            throw err
        }
    } */

    async function handleRecaptchaOnChange (token:string | null) {
        if (token) {
            setToken(token)
            try {
                const response = await fetch(`/api/verifyCaptcha`, {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token
                    })
                })
                if (response.ok) {
                    console.log('recaptcha passed', formValues)
                    setWasSubmitSuccess(false)
                    setResultMsg('')
                    setServerErrorMsg('')
                    setIsLoading(true)
                    try {
                        const response = await sendEmail(formValues)
                        if (response === 'success') {
                            setIsLoading(false)
                            setWasSubmitSuccess(true)
                            setResultMsg('Message sent.')
                            setShowCaptcha(false)
                            setToken('')

                        } else {
                            setIsLoading(false)
                            setServerErrorMsg('An unknown server error has occured.')
                            setShowCaptcha(false)
                            setToken('')
                        }
                    } catch (err: any) {
                        if (typeof err === 'string') {
                            setServerErrorMsg(err)
                        } else if (err.message) {
                            setServerErrorMsg(err.message)
                        } else {
                            setServerErrorMsg('A server error has occured.')
                        }
                        console.error(err)
                        setIsLoading(false)
                        setShowCaptcha(false)
                        setToken('')
                    }
                } else {
                    console.error('[handleREcaptchaonChange] Error:', response.json())
                    setCaptchaErrorMsg('Captcha verifcation failed.')
                    setShowCaptcha(false)
                    setToken('')
                }

            } catch (err) {
                console.error('[handlerecaptchaOnChange] error', err)
            }

        } else {
            console.log('[handlerecaptchaOnchange], Captcha Failed')
            setCaptchaErrorMsg('Captcha Failed.')
            setShowCaptcha(false)
            setToken('')

        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        setToken('')
        setCaptchaErrorMsg('')
        setFormValues(values)
        if (!token) {
            if (!showCaptcha) {
                setShowCaptcha(true)
            } else {
                setCaptchaErrorMsg('Please complete the captcha')
            }
            
        } 
        
        /* setWasSubmitSuccess(false)
        setResultMsg('')
        setServerErrorMsg('')
        setIsLoading(true)
        try {
            const response = await sendEmail(values)
            if (response === 'success') {
                setIsLoading(false)
                setWasSubmitSuccess(true)
                setResultMsg('Message sent.')
            } else {
                setIsLoading(false)
                setServerErrorMsg('An unknown server error has occured.')
            }
        } catch (err: any) {
            if (typeof err === 'string') {
                setServerErrorMsg(err)
            } else if (err.message) {
                setServerErrorMsg(err.message)
            } else {
                setServerErrorMsg('A server error has occured.')
            }
            console.error(err)
            setIsLoading(false)
        } */
        /* const result = sendEmail(values)
        console.log(result) */
    }

    return (
        <>
            <Form {...form}>
                <form className={`z-50 sm:min-w-[500px] min-w-[300px] max-w-[500px] w-full flex flex-col gap-4 px-4 py-8 bg-navBg shadow rounded`} onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="senderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input disabled={isLoading} autoComplete="off" placeholder="Enter your name here..." {...field}></Input>
                                </FormControl>
                                {/* <FormDescription>
                            Your name
                        </FormDescription> */}
                                <FormMessage></FormMessage>

                            </FormItem>
                        )}
                    >

                    </FormField>

                    <FormField
                        control={form.control}
                        name="senderEmail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input disabled={isLoading} type="email" autoComplete="off" placeholder="Enter your email here..." {...field}></Input>
                                </FormControl>

                                <FormMessage></FormMessage>

                            </FormItem>
                        )}
                    >

                    </FormField>
                    <FormField
                        control={form.control}
                        name="senderMessage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Message
                                </FormLabel>
                                <FormControl>
                                    <Textarea disabled={isLoading} maxLength={1000} className="resize-none" placeholder="Leave a message here..." {...field}></Textarea>
                                </FormControl>
                                <FormMessage></FormMessage>

                            </FormItem>
                        )}
                    >

                    </FormField>
                    <Button className={`text-foreground font-semibold`} disabled={isLoading} type="submit">{isLoading ?
                        <span className="load-ani">SENDING MESSAGE...</span> :
                        'Submit'}</Button>
                    {serverErrorMsg || resultMsg ?
                        <div className="text-center">

                            <span className="text-destructive">
                                {serverErrorMsg}
                            </span>

                            <span className="text-success">
                                {resultMsg}
                            </span>
                        </div> : null}
                        {
                            captchaError &&
                            <div className="text-center">

                            <span className="text-destructive">
                                {captchaError}
                            </span>

                           
                        </div>

                        }
                    <div className="w-full justify-center flex mt-2">
                        {
                            showCaptcha &&
                            <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSiteKey} onChange={handleRecaptchaOnChange}>
        
                            </ReCAPTCHA>
                        }
                    
                    </div>
                </form>

            </Form>

        </>
    )
}



export type ContactFormType = z.infer<typeof formSchema>