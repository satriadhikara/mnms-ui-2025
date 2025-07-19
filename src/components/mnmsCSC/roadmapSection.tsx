"use client";

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

const RoadmapSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Atas with fade in */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-[150px] sm:h-[200px] lg:h-[450px] z-0"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/RoadmapBG.svg"
            alt="Theme Background"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Background Bawah with fade in */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[100px] lg:h-[300px] z-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/CSCBGdown.svg"
            alt="Hero Section Background"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Stars with individual animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.1,
            rotate: 15,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src="/CSCStar20.png"
            alt="CSCStar"
            width={500}
            height={500}
            className="absolute top-0 left-0 cursor-pointer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.15,
            rotate: -10,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src="/CSCStar22.png"
            alt="CSCStar"
            width={300}
            height={300}
            className="absolute top-20 right-0 cursor-pointer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.3 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.3,
            rotate: 180,
            transition: { duration: 0.4 }
          }}
        >
          <Image
            src="/CSCStar21.png"
            alt="CSCStar"
            width={100}
            height={100}
            className="absolute top-18 right-60 cursor-pointer"
          />
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center relative z-10 w-full">
          {/* Title with simple fade up */}
          <motion.h2 
            className="text-[#F9F9F9] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-stylistic-alternates mb-8 lg:mb-12 mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              color: "#DFE00D",
              transition: { duration: 0.3 }
            }}
          >
            Competition Roadmap
          </motion.h2>

          {/* Roadmap Image with fade and scale */}
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <div className="w-full max-w-[2200px]">
              <Image
                src="/CSCRoadmap.svg"
                alt="Competition Roadmap"
                width={2200}
                height={1800}
                className="w-full h-auto object-contain cursor-pointer"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;