"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import GlassTop from "@/components/about-us/GlassTop";
import GlassTop2 from "@/components/about-us/GlassTop2";
import GlassDown from "@/components/about-us/GlassDown";
import Star1 from "@/components/about-us/Star1";
import Star2 from "@/components/about-us/Star2";
import Star3 from "@/components/about-us/Star3";
import Contact from "@/components/about-us/Contact";
import Navbar from '@/components/Navbar';

const AboutUsPage = () => {
    const glimpseImages = [
        { src: "/glimpse1.png", alt: "Event 1" },
        { src: "/glimpse2.png", alt: "Event 2" },
        { src: "/glimpse3.png", alt: "Event 3" },
        { src: "/glimpse4.png", alt: "Event 4" },
        { src: "/glimpse5.png", alt: "Event 5" },
        { src: "/glimpse6.png", alt: "Event 6" },
    ];

    // Helper to group images into arrays of 3
    const groupedImages = [];
    for (let i = 0; i < glimpseImages.length; i += 3) {
        groupedImages.push(glimpseImages.slice(i, i + 3));
    }

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleBulletClick = (idx: number) => setCurrentSlide(idx);

    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-[#050300] overflow-hidden">
                {/* Hero Section */}
                <motion.section 
                    className="relative h-[700px] md:h-[841px] flex flex-col justify-center items-center px-4 md:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="absolute top-0 left-0 w-full z-10"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <GlassTop />
                    </motion.div>
                    <motion.div 
                        className="absolute top-0 left-0 w-full z-0"
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Star1 />
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center justify-center w-full mt-16 md:mt-24 z-20"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            whileHover={{ 
                                scale: 1.05,
                                rotate: [0, 5, -5, 0],
                                transition: { duration: 0.5 }
                            }}
                        >
                            <Image
                                src="/logo-au.png"
                                alt="Logo MnMs 2025"
                                width={190}
                                height={190}
                                className="w-[120px] h-[120px] md:w-[190px] md:h-[190px]"
                            />
                        </motion.div>
                        {/* Made blue background bigger for desktop */}
                        <motion.div 
                            className="w-full max-w-3xl md:w-[1000px] md:h-[80px] bg-[#25B8B6] flex rounded-[10px] items-center justify-center mb-4 px-4 md:px-8 py-3 md:py-0 mt-4 md:mt-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0px 0px 30px rgba(37, 184, 182, 0.5)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.h1 
                                className="text-lg md:text-[38px] md:leading-[38px] text-[#F9F9F9] text-center font-extrabold md:font-[800] font-stylistic-alternates"
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                About Metallurgy and Materials Week
                            </motion.h1>
                        </motion.div>
                        <motion.div 
                            className="w-full max-w-4xl md:w-[1080px] flex items-center justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            <motion.p 
                                className="text-sm md:text-[25px] font-medium md:font-[500] text-[#F9F9F9] text-justify mt-4 md:mt-0 font-stylistic-alternates leading-relaxed px-4 md:px-0"
                                whileHover={{ 
                                    scale: 1.01,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Metallurgy and Materials Week or MnMs’ Week is the biggest annual series of events held by the Department of Metallurgical and Materials Engineering, University of Indonesia. MnMs’ is a series of events that gathers several parties, including Governments, Industries, Researchers, Students, Lecturers, and Public to discuss metallurgy and materials issues while coming up with the best suitable solutions.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Evolution Section */}
                <motion.section 
                    className="h-[600px] md:h-[740px] flex-col items-center justify-center relative px-4 md:px-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="absolute -top-20 md:-top-36 left-0 w-full z-0"
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Star2 />
                    </motion.div>
                    <motion.h1 
                        className="w-full max-w-4xl md:w-[1300px] text-2xl md:text-[57.475px] md:leading-[57.48px] text-[#DFE00D] text-center font-extrabold md:font-[800] tracking-wider md:tracking-[0.575px] mt-6 md:mt-10 mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        whileHover={{ 
                            scale: 1.02,
                            textShadow: "0px 0px 20px rgba(223, 224, 13, 0.8)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        Evolution of MnMs’ Week
                    </motion.h1>
                    <motion.div 
                        className="w-full h-auto flex items-center justify-center relative mt-6 md:mt-10 z-10 mx-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Carousel>
                            <CarouselContent className="flex w-full max-w-5xl md:w-auto gap-4 mx-auto">
                                <CarouselItem className="w-full max-w-5xl md:w-[1154px] h-[250px] md:h-[489px] p-1 md:p-[5px] flex items-center justify-center rounded-2xl md:rounded-[30px] border-2 md:border-[5px] border-[rgba(249,249,249,0)] bg-[rgba(249,249,249,0.10)] backdrop-blur-[8px] md:backdrop-blur-[50px] shadow-lg">
                                    <motion.div
                                        whileHover={{ 
                                            scale: 1.02,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <Image
                                            src="/evolution1.png"
                                            alt="Evolution 1"
                                            width={1154}
                                            height={459}
                                            className="object-cover w-full h-full rounded-xl md:rounded-[25px]"
                                        />
                                    </motion.div>
                                </CarouselItem>
                                <CarouselItem className="w-full max-w-5xl md:w-[1154px] h-[250px] md:h-[489px] p-1 md:p-[5px] flex items-center justify-center rounded-2xl md:rounded-[30px] border-2 md:border-[5px] border-[rgba(249,249,249,0)] bg-[rgba(249,249,249,0.10)] backdrop-blur-[8px] md:backdrop-blur-[50px] shadow-lg">
                                    <motion.div
                                        whileHover={{ 
                                            scale: 1.02,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <Image
                                            src="/evolution2.png"
                                            alt="Evolution 2"
                                            width={1154}
                                            height={459}
                                            className="object-cover w-full h-full rounded-xl md:rounded-[25px]"
                                        />
                                    </motion.div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex" />
                            <CarouselNext className="hidden md:flex" />
                        </Carousel>
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

                {/* Glimpse Section */}
                <motion.section 
                    className="h-[1000px] md:h-[740px] flex-col items-center justify-center relative px-4 md:px-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="absolute top-0 left-0 w-full z-0"
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Star3 />
                    </motion.div>
                    <motion.div 
                        className="absolute top-0 left-0 w-full z-0"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <GlassTop2 />
                    </motion.div>
                    <motion.h1 
                        className="relative w-full max-w-4xl md:w-[1304.026px] text-[#DFE00D] text-center font-extrabold text-2xl md:text-[71.844px] leading-tight md:leading-[71.85px] tracking-wider md:tracking-[0.718px] z-10 mt-8 md:mt-16 mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        whileHover={{ 
                            scale: 1.02,
                            textShadow: "0px 0px 20px rgba(223, 224, 13, 0.8)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        A Glimpse of <br /> Our Last Events
                    </motion.h1>
                    <motion.div 
                        className="w-full h-auto flex flex-col items-center justify-center relative mt-8 md:mt-16 z-10 mx-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        {/* Desktop: Original horizontal layout */}
                        <div className="hidden md:flex items-center justify-center w-full">
                            <motion.button
                                onClick={() =>
                                    setCurrentSlide((prev) =>
                                        prev === 0 ? groupedImages.length - 1 : prev - 1
                                    )
                                }
                                className="z-20 flex items-center justify-center w-10 h-10 text-white text-bold mr-6"
                                aria-label="Previous Slide"
                                whileHover={{ 
                                    scale: 1.2,
                                    color: "#DFE00D",
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronLeft size={48} />
                            </motion.button>

                            <div className="relative w-[1219px] h-[284.381px] overflow-hidden">
                                <motion.div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        width: `${groupedImages.length * 100}%`,
                                        transform: `translateX(-${currentSlide * (100 / groupedImages.length)}%)`,
                                    }}
                                >
                                    {groupedImages.map((group, idx) => (
                                        <div
                                            key={idx}
                                            className="flex w-[1219px] h-[284.381px] gap-4 shrink-0"
                                        >
                                            {group.map((img) => (
                                                <motion.div
                                                    key={img.src}
                                                    className="w-[387.871px] h-[284.381px] rounded-[16.732px] basis-1/3 flex items-center justify-center"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5 }}
                                                    whileHover={{ 
                                                        scale: 1.05,
                                                        transition: { duration: 0.3 }
                                                    }}
                                                >
                                                    <Image
                                                        src={img.src}
                                                        alt={img.alt}
                                                        width={387}
                                                        height={283}
                                                        className="object-fill object-center"
                                                        priority
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            <motion.button
                                onClick={() =>
                                    setCurrentSlide((prev) =>
                                        prev === groupedImages.length - 1 ? 0 : prev + 1
                                    )
                                }
                                className="z-20 flex items-center justify-center w-10 h-10 text-white text-bold ml-6"
                                aria-label="Next Slide"
                                whileHover={{ 
                                    scale: 1.2,
                                    color: "#DFE00D",
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight size={48} />
                            </motion.button>
                        </div>

                        {/* Mobile: Fixed vertical stack carousel */}
                        <div className="md:hidden w-full flex flex-col items-center">
                            <div className="flex flex-col items-center w-full mb-4">
                                <motion.button
                                    onClick={() =>
                                        setCurrentSlide((prev) =>
                                            prev === 0 ? groupedImages.length - 1 : prev - 1
                                        )
                                    }
                                    className="z-20 flex items-center justify-center w-8 h-8 text-white mb-4"
                                    aria-label="Previous Slide"
                                    whileHover={{ 
                                        scale: 1.2,
                                        color: "#DFE00D",
                                        transition: { duration: 0.3 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronLeft size={32} />
                                </motion.button>
                            </div>

                            {/* Fixed mobile carousel container */}
                            <div className="relative w-full max-w-sm h-auto overflow-hidden">
                                <motion.div
                                    className="transition-all duration-500 ease-in-out"
                                >
                                    {/* Show current group of 3 images vertically */}
                                    <div className="flex flex-col w-full gap-4">
                                        {groupedImages[currentSlide] && groupedImages[currentSlide].map((img, imgIdx) => (
                                            <motion.div
                                                key={`${currentSlide}-${imgIdx}`}
                                                className="w-full h-[200px] rounded-xl flex items-center justify-center overflow-hidden"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
                                                whileHover={{ 
                                                    scale: 1.02,
                                                    transition: { duration: 0.3 }
                                                }}
                                            >
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width={387}
                                                    height={283}
                                                    className="object-cover w-full h-full"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            <div className="flex flex-col items-center w-full mt-4">
                                <motion.button
                                    onClick={() =>
                                        setCurrentSlide((prev) =>
                                            prev === groupedImages.length - 1 ? 0 : prev + 1
                                        )
                                    }
                                    className="z-20 flex items-center justify-center w-8 h-8 text-white mt-4"
                                    aria-label="Next Slide"
                                    whileHover={{ 
                                        scale: 1.2,
                                        color: "#DFE00D",
                                        transition: { duration: 0.3 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronRight size={32} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Carousel Bullets */}
                        <motion.div 
                            className="flex justify-center mt-8 md:mt-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            {groupedImages.map((_, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => handleBulletClick(idx)}
                                    className={`w-3 h-3 md:w-5 md:h-5 mx-1 md:mx-2 rounded-full border-2 md:border-3 border-[#25B8B6] transition-all ${
                                        currentSlide === idx ? "bg-[#DFE00D]" : "bg-transparent"
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    whileHover={{ 
                                        scale: 1.2,
                                        transition: { duration: 0.3 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>

                <Contact />
            </div>
        </>
    );
};

export default AboutUsPage;