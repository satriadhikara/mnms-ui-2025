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
      <Image
        src="/SummitBG.svg"
        alt="Hero Section Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <Image
        src="/IconStar1.png"
        alt="Icon Star"
        width={150}
        height={150}
        className="absolute top-18 left-100"
      />

      <Image
        src="/IconStar2.png"
        alt="Icon Star"
        width={100}
        height={100}
        className="absolute bottom-15 right-150"
      />
      
      <Image
        src="/IconStar3.png"
        alt="Icon Star"
        width={150}
        height={150}
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
            {"MnMs' Summit".split(" ").map((word, index) => (
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
            MnMs Summit is a series of The 20th MnMs’ Week main events consisting of National Seminar and MnMs’ Dialogue.
          </motion.p>

          <motion.div 
            className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start pr-0 lg:pr-10 gap-6 lg:gap-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex justify-center lg:justify-start">
              <motion.button 
                className="relative cursor-pointer bg-transparent text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-fit text-xl lg:text-xl font-extrabold font-sans overflow-hidden group"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -2, 2, -2, 0],
                  boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => router.push('/summit/form')}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent p-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10">
                  <div className="w-full h-full rounded-full bg-black/80"></div>
                </div>

                {/* Animated background on hover */}
                <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>

                <span className="relative z-10 transition-colors duration-300">Register Here</span>
              </motion.button>
            </div>

            <motion.div 
              className="flex justify-center lg:justify-start w-full lg:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-transparent text-white px-6 sm:px-8 lg:px-5 py-3 rounded-3xl w-fit text-base lg:text-lg font-semibold group overflow-hidden max-w-sm lg:max-w-none">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent p-[2px] opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full rounded-3xl bg-black"></div>
                </div>

                {/* Contact Person title */}
                <motion.div 
                  className="relative z-10 text-center lg:text-start mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <span className="text-sm font-bold font-sans underline">Contact Person</span>
                </motion.div>
                
                {/* Contact Person inside register div */}
                <motion.div 
                  className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-4 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <motion.div 
                    className="flex flex-col text-left gap-2"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <p className="font-semibold">Risyad</p>
                    <div className='flex items-center justify-start gap-1'>
                      <Image 
                        src="/WAlogo.png"
                        alt="WALogo"
                        width={15}
                        height={15}
                        className=""
                      />
                      <p className="text-xs">: 085155115136</p>
                    </div>
                    <div className='flex items-center justify-start gap-1'>
                      <Image 
                        src="/LineLogo.png"
                        alt="LineLogo"
                        width={15}
                        height={15}
                        className=""
                      />
                      <p className="text-xs">: icad_30</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col text-left gap-2"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <p className="font-semibold">Fattiya</p>
                    <div className='flex items-center justify-start gap-1'>
                      <Image 
                        src="/WAlogo.png"
                        alt="WALogo"
                        width={15}
                        height={15}
                        className=""
                      />
                      <p className="text-xs">: 081282982718</p>
                    </div>
                    <div className='flex items-center justify-start gap-1'>
                      <Image 
                        src="/LineLogo.png"
                        alt="LineLogo"
                        width={15}
                        height={15}
                        className=""
                      />
                      <p className="text-xs">: fattiyadefa</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
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
            src="/SummitIMG.png"
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