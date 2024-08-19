"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


const formSchema = z.object({
    senderName: z.string().min(2, {
        message: 'Name must be at least 2 characters long'
    }).max(20, {
        message: 'No more than 20 characters'
    }),
    senderEmail: z.string().email({
        message: 'Invalid Email address'
    }),
    senderMessage: z.string().min(1).max(1000, {
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

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                control={form.control}
                name="senderName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Name
                        </FormLabel>
                        <FormControl>
                            <Input placeholder="Name" {...field}></Input>
                        </FormControl>
                        <FormDescription>
                            Your name
                        </FormDescription>
                        <FormMessage></FormMessage>

                    </FormItem>
                )}
                >

                </FormField>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

function onSubmit(values:z.infer<typeof formSchema>) {
    console.log(values)
}