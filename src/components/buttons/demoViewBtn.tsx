
import { Button } from "../ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

export default function DemoViewBtns () {

    const buttonStyle = 'default'

    return (
        <div className="flex gap-4 mt-4">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                <Button className="font-semibold" variant={buttonStyle}>View demo</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Notice</AlertDialogTitle>
                    <AlertDialogDescription>
                        The demo for this is not available for some reason, please contact me for more details.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>
            

                <AlertDialog>
                <AlertDialogTrigger asChild>
                <Button className="font-semibold" variant={buttonStyle}>View code</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Notice</AlertDialogTitle>
                    <AlertDialogDescription>
                        The code for this is not available for some reason, please contact me for more details.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>
            
            
        </div>
    )
}