"use client"

import Image from "next/image";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Form } from "@/components/ui/form"
import { CustomFormField } from "@/components/forms/CustomFormField"
import { Footer } from "@/components/Footer"
import { toast } from "sonner"
import { motion } from 'framer-motion';
import AnimatedButton from "@/components/AnimatedButton"

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
    abstractTimeFile: z.url(),
    teamWorkOriginalitySheetFile: z.url(),
    scannedProofOfPayment: z.url()
})


const IICFormPage = () => {
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
            abstractTimeFile: "",
            teamWorkOriginalitySheetFile: "",
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
            formData.append('abstractTimeFile', values.abstractTimeFile)
            formData.append('teamWorkOriginalitySheetFile', values.teamWorkOriginalitySheetFile)
            formData.append('scannedProofOfPayment', values.scannedProofOfPayment)

            const response = await fetch('/api/iic/register', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()

            if (response.ok) {
                toast.success("Registration submitted successfully! Thank you for registering for MnMs' Innovative Infographic Competition.")
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
        <motion.div
            className="min-h-screen absolute top-0 left-0 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="bg-black h-full w-full absolute top-0 left-0 -z-10" />
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Image
                    src="/images/ccs/glass-top.png"
                    alt="CCS Glass Top Banner"
                    width={1920}
                    height={1080}
                    className="absolute top-0 left-0 w-full -z-10"
                />
            </motion.div>
            <motion.div
                className="flex flex-col justify-center z-10 relative mt-12 sm:mt-16 md:mt-24 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <div className="flex justify-center">
                    <div className="max-w-4xl w-full">
                        <motion.h1
                            className="text-[#F9F9F9] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center sm:text-left"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.02,
                                textShadow: "0px 0px 20px rgba(249, 249, 249, 0.8)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            {"Registration Form".split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5 + index * 0.1,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        color: "#DFE00D",
                                        transition: { duration: 0.2 }
                                    }}
                                    className="inline-block mr-2 lg:mr-3 cursor-pointer"
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <br />
                            <motion.span
                                className="text-[#F9F9F9] text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold underline"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                                whileHover={{
                                    color: "#DFE00D",
                                    textShadow: "0px 0px 15px rgba(223, 224, 13, 0.8)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Innovative Infographic Competition
                            </motion.span>
                        </motion.h1>
                        <motion.div
                            className="flex flex-col mt-8 sm:mt-12 md:mt-16 items-start mb-6 sm:mb-7"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                        >
                            <motion.h2
                                className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#25B8B6] to-[#DFE00D] bg-clip-text text-transparent [-webkit-text-stroke:0.6px_white] font-stylistic-alternates"
                                whileHover={{
                                    scale: 1.05,
                                    filter: "brightness(1.2)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Team Information
                            </motion.h2>
                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-[#DFE00D] mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                whileHover={{
                                    color: "#FFFFFF",
                                    textShadow: "0px 0px 10px rgba(223, 224, 13, 0.6)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                Fill the form below keenly to participate in <span className="font-bold italic">Innovative Infographic Competition</span>. Forms that are not completely filled will not be accepted.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                        >
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                                    <CustomFormField
                                        control={form.control}
                                        name="teamName"
                                        label="Team Name"
                                        example="Example: Mark Jackson"
                                        required={true}
                                        index={0}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="teamLeaderName"
                                        label="Team Leader Name"
                                        example="Example: Mark Jackson, write (-) if not necessary"
                                        required={true}
                                        index={1}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="teamMember1Name"
                                        label="Team Member 1 Name"
                                        example="Example: Mark Jackson write (-) if not necessary"
                                        required={true}
                                        index={2}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="teamMember2Name"
                                        label="Team Member 2 Name"
                                        example="Example: Mark Jackson, write (-) if not necessary"
                                        required={true}
                                        index={3}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="teamMember3Name"
                                        label="Team Member 3 Name"
                                        example="Example: Mark Jackson, write (-) if not necessary"
                                        required={true}
                                        index={4}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="university"
                                        label="University"
                                        example="Example: University of Indonesia"
                                        required={true}
                                        index={5}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="major"
                                        label="Major (Team Leader Representative)"
                                        example="Example: Metallurgy and Materials Engineering"
                                        required={true}
                                        index={6}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="email"
                                        label="Email (Team Leader Representative)"
                                        example="Example: example@gmail.com"
                                        required={true}
                                        type="email"
                                        index={7}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="phoneNumber"
                                        label="Phone Number (Team Leader Representative)"
                                        example="Example: 081234567890"
                                        required={true}
                                        type="tel"
                                        index={8}
                                    />

                                    <motion.div
                                        className="flex flex-col mt-8 sm:mt-12 md:mt-16 items-start mb-6 sm:mb-7"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
                                    >
                                        <motion.h2
                                            className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#25B8B6] to-[#DFE00D] bg-clip-text text-transparent [-webkit-text-stroke:0.6px_white] font-stylistic-alternates"
                                            whileHover={{
                                                scale: 1.05,
                                                filter: "brightness(1.2)",
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            Team File Submission
                                        </motion.h2>
                                        <motion.p
                                            className="text-base sm:text-lg md:text-xl text-[#DFE00D] mt-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.6, delay: 2.4 }}
                                            whileHover={{
                                                color: "#FFFFFF",
                                                textShadow: "0px 0px 10px rgba(223, 224, 13, 0.6)",
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            File that is submitted must be a link to a PDF file and must be viewable by anyone with the link.
                                        </motion.p>
                                    </motion.div>

                                    <CustomFormField
                                        control={form.control}
                                        name="teamPersonalDataFile"
                                        label="Team Personal Data File"
                                        placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
                                        example="The file submitted must contain a compiled all team member proof of posted twibbon and proof of shared poster on Instagram Story"
                                        required={true}
                                        index={9}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="abstractTimeFile"
                                        label="Abstract Time File"
                                        placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
                                        example="Upload abstract timeline file here"
                                        required={true}
                                        index={10}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="teamWorkOriginalitySheetFile"
                                        label="Team Work Originality Sheet File"
                                        placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
                                        example="Upload work originality sheet here"
                                        required={true}
                                        index={11}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="scannedProofOfPayment"
                                        label="Scanned Proof of Payment"
                                        placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
                                        example="Upload scanned proof of payment here"
                                        required={true}
                                        index={12}
                                    />

                                    <motion.div
                                        className="flex justify-center sm:justify-end"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 2.8, ease: "easeOut" }}
                                    >
                                        <AnimatedButton
                                            type="submit"
                                            disabled={isSubmitting}
                                            label={isSubmitting ? 'Submitting...' : 'Submit'}
                                            className="backdrop-blur-sm text-white font-bold text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-full bg-white/5 border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 mt-6 sm:mt-8 w-full sm:w-auto"
                                        />
                                    </motion.div>
                                </form>
                            </Form>
                        </motion.div>
                    </div>
                </div >
            </motion.div >
            <Footer />
        </motion.div>
    </>)
}

export default IICFormPage;