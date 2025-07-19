"use client";

import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const ThemeSection = () => {
  const slide = {
    id: 0,
    title1: "This Year Theme",
    title2: "With a Sub-Theme",
    mainText: "Revolutionary Technologies in Extractive Metallurgy and Mining Waste Management for a Greener Future",
    type: "main",
    background: "/ThemeCSCBG.svg",
  };

  return (
    <div className="bg-black bg-auto bg-center w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with simple fade */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[150px] sm:h-[200px] lg:h-[850px] z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={slide.background}
          alt="Theme Background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Corner Stars - simple slide in */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/CSCStar11.png"
          alt="CSC star"
          width={200}
          height={200}
          className="absolute top-20 left-10 cursor-pointer"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/CSCStar12.png"
          alt="CSC star"
          width={200}
          height={200}
          className="absolute bottom-20 right-3 cursor-pointer"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto">
        <div className="w-full flex-shrink-0 flex flex-col justify-center items-center px-4 mb-10">
          {/* Title Section - simple fade up */}
          <motion.div 
            className="flex items-center justify-center gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <Image
                src="/Star21.png"
                alt="Theme Element"
                width={80}
                height={80}
                className="cursor-pointer"
              />
            </motion.div>

            <div className="flex flex-col">
              <motion.h2 
                className="text-[#F9F9F9] text-2xl md:text-3xl lg:text-5xl font-extrabold font-sans leading-relaxed mb-4 md:mb-8 text-center underline"
                whileHover={{ 
                  color: "#DFE00D",
                  transition: { duration: 0.3 }
                }}
              >
                {slide.title1}
              </motion.h2>
            </div>

            <motion.div whileHover={{ scale: 1.2 }}>
              <Image
                src="/Star22.png"
                alt="Theme Element"
                width={80}
                height={80}
                className="cursor-pointer"
              />
            </motion.div>
          </motion.div>

          {/* Main Quote - simple fade up */}
          <motion.div 
            className="w-full mx-auto p-2 md:p-4 lg:p-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h1 
              className="text-[#DFE00D] text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-stylistic-alternates leading-tight text-center italic"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              &quot;{slide.mainText}&quot;
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Sub-Theme Section - simple fade up */}
      <div className="relative z-10 w-full mx-auto">
        <div className="w-full flex-shrink-0 flex flex-col justify-center items-center px-4">
          <motion.div 
            className="flex items-center justify-center gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col gap-0">
              <motion.h2 
                className="text-[#F9F9F9] text-xl md:text-3xl lg:text-4xl font-normal font-sans leading-relaxed mb-4 md:mb-8 text-center underline"
                whileHover={{ 
                  color: "#DFE00D",
                  transition: { duration: 0.3 }
                }}
              >
                {slide.title2}
              </motion.h2>
            </div>
          </motion.div>

          {/* Images - simple fade up */}
          <motion.div 
            className="w-full flex flex-col mx-auto p-2 md:p-4 lg:p-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <Image
                src="/CSCPhoto2.png"
                alt="Sub Theme"
                width={1200}
                height={1200}
                className="mx-auto mb-2 cursor-pointer"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Image
                src="/CSCPhoto3.png"
                alt="Sub Theme"
                width={1000}
                height={1000}
                className="mx-auto mb-2 cursor-pointer"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSection;