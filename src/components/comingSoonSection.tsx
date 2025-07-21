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
      <div className='relative z-20 flex flex-col items-center justify-between w-full pb-2 px-4 sm:px-6 md:px-8 lg:px-20 max-w-[1400px] mx-auto'>
          <motion.h1 
            className="text-[#DFE00D] text-[28px] xs:text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[120px] font-bold font-stylistic-alternates leading-tight mb-4 md:mb-6"
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
            {"Coming Soon".split(" ").map((word, index) => (
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

          <motion.div 
            className="w-full flex justify-center"
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
              onClick={() => router.back()}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent p-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-full h-full rounded-full bg-black"></div>
              </div>
              
              {/* Animated background on hover */}
              <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              
              <span className="relative z-10 transition-colors duration-300">Back</span>
            </motion.button>
          </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;