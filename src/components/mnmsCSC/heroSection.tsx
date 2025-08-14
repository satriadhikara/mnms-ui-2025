"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter();

    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-[150px] sm:h-[200px] lg:h-[250px] z-0">
                <Image
                    src="/CSCBGtop.svg"
                    alt="Hero Section Background"
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[100px] lg:h-[300px] z-0">
                <Image
                    src="/CSCBGdown.svg"
                    alt="Hero Section Background"
                    fill
                    className="object-cover"
                />
            </div>

            <Image
                src="/EllipseTopCSC.png"
                alt="Hero Section Background"
                fill
                className="absolute top-0 right-0 w-full h-full object-cover z-0"
            />

            <div className="absolute bottom-2 left-0 w-[390px] h-[150px] sm:h-[200px] lg:h-[450px] z-0">
                <Image
                    src="/EllipseLeftCSC.png"
                    alt="Hero Section Background"
                    fill
                    className="absolute bottom-0 left-0"
                />
            </div>
            <Image
                src="/IconStar1.png"
                alt="Icon Star"
                width={150}
                height={150}
                className="absolute top-0 left-100"
            />

            <Image
                src="/IconStar2.png"
                alt="Icon Star"
                width={150}
                height={150}
                className="absolute bottom-15 right-140"
            />
            <Image
                src="/IconStar3.png"
                alt="Icon Star"
                width={200}
                height={200}
                className="absolute top-0 right-0"
            />
            {/* Main Content */}
            <div className="relative z-10 max-w-[1400px] w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-12">
                {/* Left Side */}
                <div className="flex-1 space-y-6">
                    <motion.h1
                        className="text-[#DFE00D] text-4xl sm:text-5xl lg:text-[80px] font-extrabold font-stylistic-alternates leading-tight text-center lg:text-left"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.05,
                            textShadow: "0px 0px 20px rgba(223, 224, 13, 0.8)",
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {"Case Study Competition".split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    color: "#FFFFFF",
                                    transition: { duration: 0.2 }
                                }}
                                className="inline-block mr-2 lg:mr-4 cursor-pointer"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        A national-level competition for undergraduate (S1) or diploma (D3/D4) students, designed to hone their skills in solving and providing innovative solutions to real-world problems.
                    </motion.p>
                    <motion.div
                        className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start pr-0 lg:pr-10 gap-6 lg:gap-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <div className="flex justify-center lg:justify-start">
                            <motion.a
                                className="relative cursor-pointer bg-transparent text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-fit text-xl lg:text-xl font-extrabold font-sans overflow-hidden group"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -2, 2, -2, 0],
                                    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                href="https://drive.google.com/file/d/1kGtzTqpqqkqS48CoQhB65cFYTX-KkBWc/view?usp=drivesdk"
                                target="_blank"
                            >
                                {/* Gradient border effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent p-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    <div className="w-full h-full rounded-full bg-black/80"></div>
                                </div>

                                {/* Animated background on hover */}
                                <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

                                {/* Ripple effect */}
                                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>

                                <span className="relative z-10 transition-colors duration-300">Guidebook</span>
                            </motion.a>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <motion.button
                                className="relative cursor-pointer bg-transparent text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-fit text-xl lg:text-xl font-extrabold font-sans overflow-hidden group"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, 2, -2, 2, 0],
                                    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => router.push('/csc/form')}
                            >
                                {/* Gradient border effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent p-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    <div className="w-full h-full rounded-full bg-black/80"></div>
                                </div>

                                {/* Animated background on hover */}
                                <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

                                {/* Ripple effect */}
                                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>

                                <span className="relative z-10 transition-colors duration-300">Registration</span>
                            </motion.button>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <motion.a
                                className="relative cursor-pointer bg-transparent text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-fit text-lg font-extrabold font-sans overflow-hidden group"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, 2, -2, 2, 0],
                                    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                href="https://drive.google.com/drive/folders/1EBsmNkaNNoVsFWv8gdUxFqFGdCfM5TfX?usp=sharing"
                                target="_blank"
                            >
                                {/* Gradient border effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent p-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    <div className="w-full h-full rounded-full bg-black/80"></div>
                                </div>

                                {/* Animated background on hover */}
                                <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

                                {/* Ripple effect */}
                                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>

                                <span className="relative z-10 transition-colors duration-300">Participant Kit</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Image with frame effect */}
                <motion.div
                    className="flex-1 flex justify-center lg:justify-end"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.3 }
                    }}
                >
                    <Image
                        src="/CSCPhoto.png"
                        alt="Summit Discussion"
                        width={460}
                        height={260}
                        className="rounded-md object-cover w-full"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;