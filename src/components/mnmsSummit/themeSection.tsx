"use client";

import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const ThemeSection = () => {
  const slide = {
    id: 0,
    title: "Presenting,",
    subtitle: "MnMs' Summit Theme",
    mainText: "Carving the Future of Mining: Ecological Innovation and Strategic Policies Towards a Sustainable and Zero Emission Minerals Industry",
    type: "main",
    background: "/SummitBG3.svg",
  };

  return (
    <div className="bg-black bg-auto bg-center min-h-screen flex items-center justify-center relative overflow-hidden px-2 sm:px-4">
      {/* Background Image with fade in animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={slide.background}
          alt="Theme Background"
          width={200}
          height={100}
          className="absolute -bottom-4 left-0 w-full h-[20vh] sm:h-[30vh] md:h-[50vh] lg:h-[80vh] object-cover"
        />
      </motion.div>

      {/* Corner Stars with entrance animations */}
      <Image
        src="/CSCStar13.png"
        alt="CSC star"
        width={200}
        height={200}
        className="absolute bottom-0 left-0 cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[200px] lg:h-[200px]"
      />

      <Image
        src="/CSCStar14.png"
        alt="CSC star"
        width={150}
        height={150}
        className="absolute top-2 right-0 cursor-pointer w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-[150px] lg:h-[150px]"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-8 sm:py-12">
        <div className="w-full flex-shrink-0 flex flex-col justify-center items-center px-2 sm:px-4">
          {/* Header Section */}
          <motion.div 
            className="flex items-center justify-center gap-2 xs:gap-4 sm:gap-8 md:gap-12 lg:gap-20 mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {/* Left Star */}
            <Image
              src="/Star21.png"
              alt="Theme Element"
              width={80}
              height={80}
              className="cursor-pointer w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[80px] lg:h-[80px]"
            />

            {/* Title Section */}
            <div className="flex flex-col gap-0 flex-1">
              <motion.h1 
                className="text-[#F9F9F9] text-sm xs:text-base sm:text-lg md:text-2xl lg:text-4xl font-extrabold font-sans leading-tight text-center italic"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  color: "#DFE00D",
                  transition: { duration: 0.3 }
                }}
              >
                {slide.title.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.0 + index * 0.05,
                      ease: "easeOut" 
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.h2 
                className="text-[#F9F9F9] text-base xs:text-lg sm:text-xl md:text-3xl lg:text-5xl font-extrabold font-sans leading-relaxed mb-2 sm:mb-4 md:mb-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0px 0px 15px rgba(223, 224, 13, 0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                {slide.subtitle.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, rotateY: -90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + index * 0.1,
                      ease: "easeOut" 
                    }}
                    className="inline-block mr-1 sm:mr-2 lg:mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>

            {/* Right Star */}
            <Image
              src="/Star22.png"
              alt="Theme Element"
              width={80}
              height={80}
              className="cursor-pointer w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[80px] lg:h-[80px]"
            />
          </motion.div>

          {/* Main Quote Box */}
          <motion.div 
            className="w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-4xl shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1, 
              delay: 1.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 15px 30px rgba(223, 224, 13, 0.2)",
              borderColor: "rgba(223, 224, 13, 0.5)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.h1 
              className="text-[#DFE00D] text-sm xs:text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl font-extrabold font-stylistic-alternates leading-tight text-center italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}
              whileHover={{ 
                textShadow: "0px 0px 20px rgba(223, 224, 13, 1)",
                transition: { duration: 0.3 }
              }}
            >
              {`"${slide.mainText}"`.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2.0 + index * 0.03,
                    ease: "easeOut" 
                  }}
                  className="inline-block mr-1 sm:mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSection;