"use client"

import Image from "next/image";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { CustomFormField } from "@/components/forms/CustomFormField"
import { Footer } from "@/components/Footer"

const formSchema = z.object({
    fullName: z.string().min(2).max(50),
    university: z.string().min(2).max(50),
    email: z.email(),
    phoneNumber: z.string().min(10).max(15),
    lineId: z.string().min(2).max(50),
    studentCardLink: z.string().url().optional().or(z.literal(""))
})


const SummitFormPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")
    const [isError, setIsError] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            university: "",
            email: "",
            phoneNumber: "",
            lineId: "",
            studentCardLink: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        setSubmitMessage("")
        setIsError(false)

        try {
            const formData = new FormData()
            formData.append('fullName', values.fullName)
            formData.append('university', values.university)
            formData.append('email', values.email)
            formData.append('phoneNumber', values.phoneNumber)
            formData.append('lineId', values.lineId)

            if (values.studentCardLink) {
                formData.append('studentCardLink', values.studentCardLink)
            }

            const response = await fetch('/api/summit/register', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()

            if (response.ok) {
                setSubmitMessage("Registration submitted successfully! Thank you for registering for MnMs' Summit 2025.")
                setIsError(false)
                form.reset()
            } else {
                setSubmitMessage(result.error || "Failed to submit registration. Please try again.")
                setIsError(true)
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitMessage("An error occurred while submitting your registration. Please try again.")
            setIsError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (<>
        <div className="min-h-screen absolute top-0 left-0 w-full">
            <div className="bg-black h-full w-full absolute top-0 left-0 -z-10" />
            <Image src="/images/summit/glass-top.png" alt="Summit Top" width={1920} height={1080} className="absolute top-0 left-0 w-full -z-10" />
            <div className="flex flex-col justify-center z-10 relative mt-12 sm:mt-16 md:mt-24 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
                <div className="flex justify-center">
                    <div className="max-w-4xl w-full">
                        <h1 className="text-[#F9F9F9] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center sm:text-left">
                            Registration Form<br />
                            <span className="text-[#F9F9F9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[86px] font-extrabold underline">MnMs&rsquo; Summit 2025</span>
                        </h1>
                        <div className="flex flex-col mt-8 sm:mt-12 md:mt-16 items-start mb-8 sm:mb-10 md:mb-14">
                            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#25B8B6] to-[#DFE00D] bg-clip-text text-transparent [-webkit-text-stroke:0.6px_white] font-stylistic-alternates">
                                Participant Information
                            </h2>
                            <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#DFE00D] mt-2">
                                MnMs&#39; Summit Fee: Free
                            </p>
                        </div>

                        {/* Success/Error Message */}
                        {submitMessage && (
                            <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${isError ? 'bg-red-900/20 border border-red-500/50 text-red-200' : 'bg-green-900/20 border border-green-500/50 text-green-200'}`}>
                                {submitMessage}
                            </div>
                        )}

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                                <CustomFormField
                                    control={form.control}
                                    name="fullName"
                                    label="Full Name"
                                    example="Example: Mark Jackson"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="university"
                                    label="University/Institution"
                                    example="Example: Universitas Indonesia, write (-) if not necessary"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="email"
                                    label="Email"
                                    example="Example: example@gmail.com"
                                    type="email"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="phoneNumber"
                                    label="Mobile Phone"
                                    example="Example: 081234567890"
                                    type="tel"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="lineId"
                                    label="Line ID"
                                    example="Example: Write (-) if not necessary"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="studentCardLink"
                                    label="Student Card Drive Link (if you are a student)"
                                    placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
                                    example=""
                                    required={false}
                                />
                                <div className="flex justify-center sm:justify-end">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="backdrop-blur-sm text-white font-bold text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-full bg-white/5 border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 mt-6 sm:mt-8 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div >
            </div >
            <Footer />
            <Image src="/images/summit/glass-bot.png" alt="Summit Bottom" width={1920} height={1080} className="absolute bottom-0 left-0 w-full -z-10 hidden sm:block" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent -z-10 sm:hidden"></div>
        </div >
    </>);
};

export default SummitFormPage;