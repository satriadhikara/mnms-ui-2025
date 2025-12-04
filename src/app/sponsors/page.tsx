"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Contact from "@/components/sponsors/Contact";
import GlassTop from "@/components/sponsors/GlassTop";
import GlassDown from "@/components/sponsors/GlassDown";
import Star1 from "@/components/sponsors/Star1";
import Image from "next/image";

const SponsorsPage = () => {
    const sponsorLogos = [
        { src: 'sponsor.png', width: 400, height: 200 },
    ];

    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-[#050300] overflow-hidden">
                {/* Hero Section */}
                <motion.section 
                    className="relative w-full h-[500px] md:h-[606px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="absolute top-0 left-0 w-full z-0"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <GlassTop />
                    </motion.div>
                    
                    {/* Falling Stars Animation */}
                    <motion.div 
                        className="absolute top-0 left-0 w-full z-20"
                        initial={{ opacity: 0, y: -200, scale: 0.5, rotate: -180 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0, 
                            scale: 1, 
                            rotate: 0,
                        }}
                        transition={{ 
                            duration: 1.5, 
                            delay: 0.3,
                            type: "spring",
                            bounce: 0.4
                        }}
                    >
                        <Star1 />
                    </motion.div>
                    
                    <motion.div 
                        className="absolute right-0 top-0 z-10"
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Image
                            src="/Ellipse-s-r.png"
                            alt="Sponsor Decoration"
                            width={600}
                            height={600}
                            className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
                        />
                    </motion.div>
                    <motion.div 
                        className="absolute top-0 left-0 z-10"
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Image
                            src="/Ellipse-s-l.png"
                            alt="Sponsor Decoration"
                            width={600}
                            height={400}
                            className="w-[300px] h-[200px] md:w-[600px] md:h-[400px]"
                        />
                    </motion.div>
                    
                    {/* Main Content - Similar to Landing Page Layout */}
                    <motion.div 
                        className="flex flex-col md:flex-row items-center justify-center mt-16 md:mt-28 px-4 md:px-0 gap-6 md:gap-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            whileHover={{ 
                                scale: 1.05,
                                rotate: [0, 5, -5, 0],
                                transition: { duration: 0.5 }
                            }}
                        >
                            <motion.div
                                animate={{ 
                                    y: [0, -10, 0],
                                    rotate: [0, 2, -2, 0]
                                }}
                                transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src="/logo-au.png"
                                    alt="Logo MnMs 2025"
                                    width={500}
                                    height={500}
                                    className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
                                />
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            className="flex flex-col w-full max-w-[766px] text-center md:text-start gap-6 md:gap-[40px] z-10"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <div className="z-10">
                                <motion.h1 
                                    className="text-[28px] leading-[35px] md:text-[45px] md:leading-[55px] lg:text-[60px] lg:leading-[75px] xl:text-[75px] xl:leading-[100px] font-extrabold tracking-[0.5px] md:tracking-[0.75px] text-[#F9F9F9] font-stylistic-alternates"
                                    whileHover={{ 
                                        scale: 1.02,
                                        textShadow: "0px 0px 20px rgba(249, 249, 249, 0.8)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    Introducing Our 
                                </motion.h1>
                                <motion.h1 
                                    className="bg-gradient-to-r from-[#25B8B6] to-[#DFE00D] bg-clip-text text-transparent 
                                                font-extrabold font-stylistic-alternates
                                                text-[35px] leading-[40px] md:text-[55px] md:leading-[65px] lg:text-[75px] lg:leading-[85px] xl:text-[103.112px] xl:leading-[100px] tracking-[0.7px] md:tracking-[1.031px]"
                                    whileHover={{ 
                                        scale: 1.02,
                                        textShadow: "0px 0px 20px rgba(37, 184, 182, 0.5)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    Sponsorships!
                                </motion.h1>
                            </div>
                            <motion.div 
                                className="w-full max-w-[488px] h-auto md:h-[44px] shrink-0 z-10
                                            rounded-[24px] md:rounded-[48.511px] border border-[1px] md:border-[1.492px] border-transparent 
                                            bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.10)] to-[rgba(253,255,245,0)] 
                                            shadow-[0_4.474px_16.778px_rgba(0,0,0,0.35)] 
                                            backdrop-blur-[20px] md:backdrop-blur-[36.560386657714844px]
                                            flex items-center justify-center p-2 md:p-1 mx-auto md:mx-0"
                                whileHover={{ 
                                    scale: 1.02,
                                    backgroundColor: "rgba(253, 255, 245, 0.15)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.p 
                                    className="w-full h-auto md:w-[472px] md:h-[29px] shrink-0 
                                                text-[#FBFAF7] text-center
                                                text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[1.3] md:leading-[129.6%] px-2 py-1 md:py-0"
                                    whileHover={{ 
                                        color: "#FFFFFF",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    The 20th Metallurgy & Materials’ Week
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Sponsors Section */}
                <motion.section 
                    className="relative flex flex-col items-center justify-start w-full h-auto md:h-[606px] px-4 md:px-0 py-8 md:py-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="flex flex-col items-center justify-start mb-8 md:mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1 
                            className="text-[#F9F9F9] text-center 
                                        font-extrabold italic 
                                        text-[24px] leading-[35px] md:text-[30px] md:leading-[45px] lg:text-[35px] lg:leading-[50px] xl:text-[38px] xl:leading-[55px] tracking-[0.3px] md:tracking-[0.38px]"
                            whileHover={{ 
                                scale: 1.02,
                                color: "#DFE00D",
                                transition: { duration: 0.3 }
                            }}
                        >
                            Thank You to,
                        </motion.h1>
                        <motion.h1 
                            className="text-[#F9F9F9] text-center
                                        font-extrabold
                                        text-[28px] leading-[35px] md:text-[35px] md:leading-[45px] lg:text-[45px] lg:leading-[50px] xl:text-[52.25px] xl:leading-[55px] tracking-[0.4px] md:tracking-[0.523px]"
                            whileHover={{ 
                                scale: 1.02,
                                color: "#25B8B6",
                                textShadow: "0px 0px 15px rgba(37, 184, 182, 0.5)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            All Our Sponsor Partnership
                        </motion.h1>
                    </motion.div>
                    
                    <motion.div 
                        className="relative w-full max-w-[1102px] h-[300px] md:h-[378.775px]
                                    rounded-[25px] md:rounded-[46.086px] border border-[1px] md:border-[1.418px] border-transparent
                                    bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.10)] to-[rgba(253,255,245,0)]
                                    shadow-[0_4.25px_15.939px_rgba(0,0,0,0.35),0_4.25px_15.939px_rgba(0,0,0,0.35)]
                                    backdrop-blur-[20px] md:backdrop-blur-[34.73236846923828px] z-10 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ 
                            scale: 1.02,
                            backgroundColor: "rgba(253, 255, 245, 0.15)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div
                            className="w-full h-full flex items-center justify-center p-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.6,
                                ease: "easeOut" 
                            }}
                        >
                            <Image
                                src={`/${sponsorLogos[0].src}`}
                                alt="Main Sponsor"
                                width={sponsorLogos[0].width}
                                height={sponsorLogos[0].height}
                                className="object-contain w-full h-full"
                            />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="absolute bottom-0 left-0 w-full z-0"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <GlassDown />
                    </motion.div>
                </motion.section>
            </div>
            <Contact />
        </>
    );
};

export default SponsorsPage;