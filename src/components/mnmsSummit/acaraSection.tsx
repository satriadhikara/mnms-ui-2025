"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AcaraSection = () => {
  return (
    <>
        {/* National Seminar Section */}
        <div className="bg-black text-white h-[95vh] flex items-center justify-center relative overflow-hidden">
            {/* Background pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                    src="/SummitBG2.svg"
                    alt="Hero Section Background"
                    fill
                    className="absolute top-[50%] left-0 w-full h-full object-cover z-0"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100, rotate: 180 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                whileHover={{ 
                    scale: 1.2,
                    rotate: 15,
                    transition: { duration: 0.3 }
                }}
            >
                <Image
                    src="/CSCStar16.png"
                    alt="Icon Star"
                    width={200}
                    height={200}
                    className="absolute bottom-15 right-150 z-50 pointer-events-none cursor-pointer"
                />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-[1400px] w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-0 py-8 sm:py-10 lg:py-12 gap-6 sm:gap-8 lg:gap-9">
                {/* Left Side */}
                <motion.div 
                    className="flex-1 space-y-2 text-center lg:text-left"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <motion.div 
                        className='flex items-center justify-start gap-4 px-2 lg:pl-5'
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div
                            whileHover={{ 
                                scale: 1.2,
                                rotate: 360,
                                transition: { duration: 0.5 }
                            }}
                        >
                            <Image
                                src="/EllipseNumb1.png"
                                alt="number one"
                                width={50}
                                height={50}
                                className="rounded-md object-cover w-9 h-9 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] cursor-pointer"
                            />
                        </motion.div>
                        <motion.h1 
                            className="text-[#F9F9F9] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold font-sans leading-tight"
                            whileHover={{ 
                                color: "#DFE00D",
                                textShadow: "0px 0px 15px rgba(223, 224, 13, 0.8)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            National Seminar
                        </motion.h1>
                    </motion.div>

                    <motion.div 
                        className='px-2 sm:px-4 lg:pl-23 space-y-4 lg:space-y-5'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <motion.p 
                            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed text-justify max-w-full sm:max-w-2xl lg:max-w-xl mx-auto lg:mx-0"
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            An event that <span className="font-bold">will feature speakers</span> who are <span className='font-bold'>experts</span> and <span className='font-bold'>experienced</span> in <span className='font-bold'>fields</span> related to the seminar topic. These speakers come from four different backgrounds: <span className='font-bold'>government, corporate practitioners, mining associations,</span> and <span className='font-bold'>students</span> who will present their innovations.
                        </motion.p>
                        
                        <motion.div 
                            className="flex justify-center lg:justify-start mt-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <Image
                                src="/InfoAcara1.png"
                                alt="Info Acara 1"
                                width={300}
                                height={300}
                                className="rounded-md object-contain w-60 h-30 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[300px] lg:h-[150px] cursor-pointer"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div 
                    className="flex-1 flex justify-center lg:justify-start mt-6 lg:mt-0"
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.3 }
                    }}
                >
                    <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mr-15 lg:mr-0">
                        <Image
                            src="/Acara1.png"
                            alt="National Seminar"
                            width={900}
                            height={700}
                            className="rounded-md object-cover w-[400px] h-[400px] lg:w-[800px] lg:h-[600px] xl:w-[900px] xl:h-[700px] cursor-pointer"
                        />
                    </div>
                </motion.div>
            </div>
        </div>

        {/* MnMs' Summit Section */}
        <div className="bg-black text-white h-[95vh] flex items-center justify-center relative overflow-hidden">
            {/* Background pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                    src="/SummitBG4.svg"
                    alt="Hero Section Background"
                    fill
                    className="absolute top-[50%] left-0 w-full h-full object-cover z-0"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100, rotate: -180 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                whileHover={{ 
                    scale: 1.2,
                    rotate: -15,
                    transition: { duration: 0.3 }
                }}
            >
                <Image
                    src="/CSCStar18.png"
                    alt="Icon Star"
                    width={200}
                    height={200}
                    className="absolute bottom-15 right-150 z-50 pointer-events-none cursor-pointer"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -100, rotate: 90 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                whileHover={{ 
                    scale: 1.15,
                    rotate: 10,
                    transition: { duration: 0.3 }
                }}
            >
                <Image
                    src="/CSCStar19.png"
                    alt="Icon Star"
                    width={200}
                    height={200}
                    className="absolute bottom-60 right-0 z-0 pointer-events-none cursor-pointer"
                />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-[1400px] w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-0 py-8 sm:py-10 lg:py-12 gap-6 sm:gap-8 lg:gap-9">
                {/* Left Side */}
                <motion.div 
                    className="flex-1 space-y-2 text-center lg:text-left"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <motion.div 
                        className='flex items-center justify-start gap-4 px-2 lg:pl-5'
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div
                            whileHover={{ 
                                scale: 1.2,
                                rotate: -360,
                                transition: { duration: 0.5 }
                            }}
                        >
                            <Image
                                src="/EllipseNumb2.png"
                                alt="number two"
                                width={50}
                                height={50}
                                className="rounded-md object-cover w-9 h-9 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] cursor-pointer"
                            />
                        </motion.div>
                        <motion.h1 
                            className="text-[#F9F9F9] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold font-sans leading-tight"
                            whileHover={{ 
                                color: "#DFE00D",
                                textShadow: "0px 0px 15px rgba(223, 224, 13, 0.8)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            MnMs’ Summit
                        </motion.h1>
                    </motion.div>

                    <motion.div 
                        className='px-2 sm:px-4 lg:pl-23 space-y-4 lg:space-y-5'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <motion.p 
                            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed text-justify max-w-full sm:max-w-2xl lg:max-w-xl mx-auto lg:mx-0"
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                           A <span className="font-bold">talk show-style discussion</span> focused on the future of Indonesia&#39;s mining industry, exploring sustainable and ecological approaches to mineral processing and mining from various perspectives, including <span className="font-bold">government, academia, industry practitioners, mining associations, and students.</span>
                        </motion.p>
                        
                        <motion.div 
                            className="flex justify-center lg:justify-start mt-5 z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <Image
                                src="/InfoAcara2.png"
                                alt="Info Acara 2"
                                width={300}
                                height={300}
                                className="rounded-md object-contain w-60 h-30 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[300px] lg:h-[150px] cursor-pointer"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div 
                    className="flex-1 flex justify-center lg:justify-start mt-6 lg:mt-0"
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    whileHover={{ 
                        scale: 1.05,
                        rotate: -2,
                        transition: { duration: 0.3 }
                    }}
                >
                    <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mr-15 lg:mr-0">
                        <Image
                            src="/Acara2.png"
                            alt="MnMs Summit"
                            width={900}
                            height={700}
                            className="rounded-md object-cover w-[400px] h-[400px] lg:w-[800px] lg:h-[600px] xl:w-[900px] xl:h-[700px] cursor-pointer"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    </>
  );
};

export default AcaraSection;