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
import { toast } from "sonner"

const formSchema = z.object({
    teamName: z.string().min(2).max(50),
    teamLeaderName: z.string().min(2).max(50),
    teamMember1Name: z.string().min(2).max(50),
    teamMember2Name: z.string().min(2).max(50),
    teamMember3Name: z.string().min(2).max(50),
    university: z.string().min(2).max(50),
    major: z.string().min(2).max(50),
    email: z.email(),
    phoneNumber: z.string().min(10).max(15),
    teamPersonalDataFile: z.url(),
    scannedProofOfPayment: z.url()
})


const CSCFormPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            teamName: "",
            teamLeaderName: "",
            teamMember1Name: "",
            teamMember2Name: "",
            teamMember3Name: "",
            university: "",
            major: "",
            email: "",
            phoneNumber: "",
            teamPersonalDataFile: "",
            scannedProofOfPayment: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)

        try {
            const formData = new FormData()
            formData.append('teamName', values.teamName)
            formData.append('teamLeaderName', values.teamLeaderName)
            formData.append('teamMember1Name', values.teamMember1Name)
            formData.append('teamMember2Name', values.teamMember2Name)
            formData.append('teamMember3Name', values.teamMember3Name)
            formData.append('university', values.university)
            formData.append('major', values.major)
            formData.append('email', values.email)
            formData.append('phoneNumber', values.phoneNumber)
            formData.append('teamPersonalDataFile', values.teamPersonalDataFile)
            formData.append('scannedProofOfPayment', values.scannedProofOfPayment)

            const response = await fetch('/api/csc/register', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()

            if (response.ok) {
                toast.success("Registration submitted successfully! Thank you for registering for MnMs' Case Study Competition.")
                form.reset()
            } else {
                toast.error(result.error || "Failed to submit registration. Please try again.")
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error("An error occurred while submitting your registration. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (<>
        <div className="min-h-screen absolute top-0 left-0 w-full">
            <div className="bg-black h-full w-full absolute top-0 left-0 -z-10" />
            <Image src="/images/ccs/glass-top.png" alt="Decorative background for the CCS form page" width={1920} height={1080} className="absolute top-0 left-0 w-full -z-10" />
            <div className="flex flex-col justify-center z-10 relative mt-12 sm:mt-16 md:mt-24 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
                <div className="flex justify-center">
                    <div className="max-w-4xl w-full">
                        <h1 className="text-[#F9F9F9] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center sm:text-left">
                            Registration Form<br />
                            <span className="text-[#F9F9F9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[86px] font-extrabold underline">MnMs&rsquo; Case Study Competition</span>
                        </h1>
                        <div className="flex flex-col mt-8 sm:mt-12 md:mt-16 items-start mb-6 sm:mb-7">
                            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#25B8B6] to-[#DFE00D] bg-clip-text text-transparent [-webkit-text-stroke:0.6px_white] font-stylistic-alternates">
                                Team Information
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-[#DFE00D] mt-2">
                                Fill the form below keenly to participate in <span className="font-bold italic">Case Study Competition</span>. Forms that are not completely filled will not be accepted.
                            </p>
                        </div>



                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                                <CustomFormField
                                    control={form.control}
                                    name="teamName"
                                    label="Team Name"
                                    example="Example: Mark Jackson"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="teamLeaderName"
                                    label="Team Leader Name"
                                    example="Example: Mark Jackson, write (-) if not necessary"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="teamMember1Name"
                                    label="Team Member 1 Name"
                                    example="Example: Mark Jackson write (-) if not necessary"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="teamMember2Name"
                                    label="Team Member 2 Name"
                                    example="Example: Mark Jackson, write (-) if not necessary"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="teamMember3Name"
                                    label="Team Member 3 Name"
                                    example="Example: Mark Jackson, write (-) if not necessary"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="university"
                                    label="University"
                                    example="Example: University of Indonesia"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="major"
                                    label="Major"
                                    example="Example: Metallurgy and Materials Engineering"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="email"
                                    label="Email"
                                    example="Example: example@gmail.com"
                                    required={true}
                                    type="email"
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="phoneNumber"
                                    label="Phone Number"
                                    example="Example: 081234567890"
                                    required={true}
                                    type="tel"
                                />

                                <div className="flex flex-col mt-8 sm:mt-12 md:mt-16 items-start mb-6 sm:mb-7">
                                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#25B8B6] to-[#DFE00D] bg-clip-text text-transparent [-webkit-text-stroke:0.6px_white] font-stylistic-alternates">
                                        Team File Submission
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl text-[#DFE00D] mt-2">
                                        File that is submitted must be a link to a PDF file and must be viewable by anyone with the link.
                                    </p>
                                </div>

                                <CustomFormField
                                    control={form.control}
                                    name="teamPersonalDataFile"
                                    label="Team Personal Data File"
                                    placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
                                    example="The file submitted must contain a compiled all team member proof of posted twibbon and proof of shared poster on Instagram Story"
                                    required={true}
                                />

                                <CustomFormField
                                    control={form.control}
                                    name="scannedProofOfPayment"
                                    label="Scanned Proof of Payment"
                                    placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
                                    example=""
                                    required={true}
                                />

                                <div className="flex justify-center sm:justify-end">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="backdrop-blur-sm cursor-pointer text-white font-bold text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-full bg-white/5 border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 mt-6 sm:mt-8 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
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
            <Image src="/images/ccs/glass-bot.png" alt="Summit Bottom" width={1920} height={1080} className="absolute bottom-0 left-0 w-full -z-10 hidden sm:block" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent -z-10 sm:hidden"></div>
        </div >
    </>);
};

export default CSCFormPage;