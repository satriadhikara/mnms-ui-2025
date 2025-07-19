"use client";

import React from "react";
import { motion } from 'framer-motion';
import BgTopIIF from './BgTop';
import Star4 from './Star4';
import IICRoadmap from './IICRoadmap';

const RoadmapSection = () => {
  return (
    <motion.section 
      className="relative h-[1000px] md:h-[1221px] flex justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <motion.div 
        className="absolute top-0 left-0 w-full"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <BgTopIIF />
      </motion.div>

      {/* Star Component */}
      <motion.div 
        className="absolute -top-16 md:-top-32 left-0 w-full z-10"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Star4 />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="flex flex-col justify-center items-center px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Title */}
        <motion.h1 
          className="text-[#F9F9F9] text-center font-bold text-[32px]/[40px] md:text-[57.48px]/[191.693px] font-stylistic-alternates z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ 
            scale: 1.05,
            color: "#DFE00D",
            transition: { duration: 0.3 }
          }}
        >
          Competition Roadmap
        </motion.h1>

        {/* Roadmap Component */}
        <motion.div 
          className="flex justify-center items-center w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.9 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <IICRoadmap />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default RoadmapSection;