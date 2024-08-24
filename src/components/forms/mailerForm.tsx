"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { sendEmail } from "@/app/actions"
import { useEffect, useState } from "react"


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

    useEffect(() => {
        if (wasSubmitSuccess) {
            form.reset()
        }
    }, [wasSubmitSuccess])

    async function onSubmit(values:z.infer<typeof formSchema>) {
        console.log(values)
        setWasSubmitSuccess(false)
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
        } catch (err:any) {
            if (typeof err === 'string') {
                setServerErrorMsg(err)
            } else if (err.message) {
                setServerErrorMsg(err.message)
            } else {
                setServerErrorMsg('A server error has occured.')
            } 
            console.error(err)
            setIsLoading(false)
        }
        /* const result = sendEmail(values)
        console.log(result) */
    }

    return (
        <Form {...form}>
            <form className={`sm:min-w-[500px] min-w-[300px] max-w-[500px] flex flex-col gap-4 px-4 py-8 bg-navBg shadow rounded`} onSubmit={form.handleSubmit(onSubmit)}>
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
                </div> : null }
            </form>
        </Form>
    )
}



export type ContactFormType = z.infer<typeof formSchema>