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
import { motion } from 'framer-motion';
import AnimatedButton from "@/components/AnimatedButton"

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
                toast.success("Registration submitted successfully! Thank you for registering for MnMs' Summit 2025.")
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
                    src="/images/summit/glass-top.png"
                    alt="Summit Top"
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
                                className="text-[#F9F9F9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[86px] font-extrabold underline"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                                whileHover={{
                                    color: "#DFE00D",
                                    textShadow: "0px 0px 15px rgba(223, 224, 13, 0.8)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                MnMs&rsquo; Summit 2025
                            </motion.span>
                        </motion.h1>
                        <motion.div
                            className="flex flex-col mt-8 sm:mt-12 md:mt-16 items-start mb-8 sm:mb-10 md:mb-14"
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
                                Participant Information
                            </motion.h2>
                            <motion.p
                                className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#DFE00D] mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{
                                    color: "#FFFFFF",
                                    textShadow: "0px 0px 10px rgba(223, 224, 13, 0.6)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                MnMs&#39; Summit Fee: Free
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
                                        name="fullName"
                                        label="Full Name"
                                        example="Example: Mark Jackson"
                                        required={true}
                                        index={0}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="university"
                                        label="University/Institution"
                                        example="Example: Universitas Indonesia, write (-) if not necessary"
                                        required={true}
                                        index={1}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="email"
                                        label="Email"
                                        example="Example: example@gmail.com"
                                        type="email"
                                        required={true}
                                        index={2}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="phoneNumber"
                                        label="Mobile Phone"
                                        example="Example: 081234567890"
                                        type="tel"
                                        required={true}
                                        index={3}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="lineId"
                                        label="Line ID"
                                        example="Example: Write (-) if not necessary"
                                        required={true}
                                        index={4}
                                    />

                                    <CustomFormField
                                        control={form.control}
                                        name="studentCardLink"
                                        label="Student Card Drive Link (if you are a student)"
                                        placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
                                        example=""
                                        required={false}
                                        index={5}
                                    />
                                    <motion.div
                                        className="flex justify-center sm:justify-end"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                                    >
                                        <AnimatedButton
                                            type="submit"
                                            disabled={isSubmitting}
                                            label={isSubmitting ? 'Submitting...' : 'Submit'}
                                            className="backdrop-blur-sm text-white font-bold text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-full bg-white/5 border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 mt-6 sm:mt-8 w-full sm:w-auto group"
                                        />
                                    </motion.div>
                                </form>
                            </Form>
                        </motion.div>
                    </div>
                </div >
            </motion.div >
            <Footer />
            <Image src="/images/summit/glass-bot.png" alt="Summit Bottom" width={1920} height={1080} className="absolute bottom-0 left-0 w-full -z-10 hidden sm:block" />
        </motion.div>
    </>)
}

export default SummitFormPage;