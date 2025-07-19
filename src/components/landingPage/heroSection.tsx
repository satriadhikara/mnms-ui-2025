"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="bg-black bg-auto bg-center h-[100vh] flex items-center justify-center relative overflow-hidden">
      <Image
        src="/HeroSection.svg"
        alt="Hero Section Background"
        width={800}
        height={600}
        className="absolute top-0 left-0 w-full object-cover"
      />

      {/* Main Content */}
      <div className='relative z-20 flex flex-col lg:flex-row items-center justify-between w-full pb-2 px-4 sm:px-6 md:px-8 lg:px-20 max-w-[1400px] mx-auto'>
        {/* Left side - Text content */}
        <div className='flex flex-col max-w-4xl text-center lg:text-left mb-8 lg:mb-0 space-y-6'>
          <motion.h1 
            className="text-[#DFE00D] text-[28px] xs:text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[80px] font-bold font-stylistic-alternates leading-tight mb-4 md:mb-6"
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
            {"Metallurgy and Materials' Week".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                whileHover={{
                  color: "#FFFFFF",
                  transition: { duration: 0.2 }
                }}
                className="inline-block mr-2 lg:mr-3 cursor-pointer"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2 
            className="text-white text-[14px] xs:text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[21px] font-sans leading-relaxed mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            The Biggest Annual Events Held by Metallurgical and Materials<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Faculty of Engineering | University of Indonesia
          </motion.h2>

          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button 
              className="relative bg-transparent text-white px-8 sm:px-10 md:px-12 py-3 md:py-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-fit text-base md:text-lg font-semibold overflow-hidden group"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -2, 2, -2, 0],
                boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => router.push('/about-us')}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent p-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-full h-full rounded-full bg-black"></div>
              </div>
              
              {/* Animated background on hover */}
              <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              
              <span className="relative z-10 transition-colors duration-300">Learn More</span>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Right side - Logo */}
        <motion.div 
          className="flex-shrink-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -5, 5, -5, 0],
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
              src="/Logo.png"
              alt="Hero Section Background"
              width={550}
              height={550}
              className="w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;