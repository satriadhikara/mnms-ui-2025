"use client";

import React from "react";
import { motion } from 'framer-motion';
import GlassTopIIF2 from './GlassTop2';
import Star2 from './Star2';

const ThemeSection = () => {
  return (
    <motion.section 
      className="relative h-[800px] md:h-[592px] flex justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <motion.div 
        className="absolute top-0 left-0 w-full"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <GlassTopIIF2 />
      </motion.div>

      {/* Star Component */}
      <motion.div 
        className="absolute top-0 left-0 w-full z-0"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Star2 />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="flex flex-col justify-center items-center w-full mt-16 px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Main Title */}
        <motion.h1 
          className="text-[#F9F9F9] text-[32px]/[36px] md:text-[60px]/[52.25px] tracking-[0.6] font-[800] text-center underline underline-offset-8 decoration-solid decoration-from-font z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ 
            color: "#DFE00D",
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          This Year Theme
        </motion.h1>

        {/* Theme Quote */}
        <motion.p 
          className="w-full md:w-[1217px] text-center text-[24px]/[28px] md:text-[50px]/[55px] font-[700] text-[#DFE00D] z-10 mt-[32px] font-stylistic-alternates px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ 
            textShadow: "0px 0px 20px rgba(223, 224, 13, 1)",
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          “Ecological Approaches and Green Technologies: Key to Reducing Toxicity and Maximizing Value from Mining Tailings”
        </motion.p>

        {/* Sub-theme Title */}
        <motion.h2 
          className="text-[#F9F9F9] text-center text-[24px]/[32px] md:text-[35px]/[52.25px] font-[400] tracking-[0.35px] underline decoration-solid underline-offset-8 decoration-from-font mt-[44px] z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ 
            color: "#DFE00D",
            transition: { duration: 0.3 }
          }}
        >
          With a Sub-Theme:
        </motion.h2>

        {/* Sub-theme 1 */}
        <motion.div 
          className="flex items-center justify-center w-full md:w-[1249.402px] h-auto md:h-[53.998px] rounded-full border-solid border-[2.681px] border-[#F9F9F9] bg-[rgba(249,249,249,0.10)] mt-[30px] z-10 mx-4 md:mx-0 py-4 md:py-0 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.3 }}
          whileHover={{ 
            scale: 1.02,
            borderColor: "#DFE00D",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="w-[45px] md:w-[57px] h-[45px] md:h-[57px] rounded-full bg-[#DFE00D] absolute -left-[24px] md:-left-4 flex items-center justify-center z-10 text-[#050300] text-[20px] md:text-[25px] leading-[25px] font-[800]"
            whileHover={{ 
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            1
          </motion.div>
          <p className="w-full md:w-[1165.612px] text-[#F9F9F9] text-center font-bold text-[16px]/[24px] md:text-[26.454px]/[40.256px] pl-8 md:pl-0">
            From Waste to Resource: Upgrading Tailing Management through Ecological Approaches
          </p>
        </motion.div>

        {/* Sub-theme 2 */}
        <motion.div 
          className="flex items-center justify-center w-full md:w-[1213.093px] h-auto md:h-[53.998px] rounded-full border-solid border-[2.681px] border-[#F9F9F9] bg-[rgba(249,249,249,0.10)] mt-[30px] z-10 mx-4 md:mx-0 py-4 md:py-0 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ 
            scale: 1.02,
            borderColor: "#DFE00D",
            transition: { duration: 0.3 }
          }}
        >
          <p className="text-[#F9F9F9] text-center font-bold text-[16px]/[24px] md:text-[26.454px]/[40.256px] pr-8 md:pr-0">
            Green Mining as a Key Driver of Integrated Efficiency in Mineral Extraction & Processing
          </p>
          <motion.div 
            className="w-[45px] md:w-[57px] h-[45px] md:h-[57px] rounded-full bg-[#DFE00D] absolute -right-[24px] md:-right-7 flex items-center justify-center z-10 text-[#050300] text-[20px] md:text-[25px] leading-[25px] font-[800]"
            whileHover={{ 
              scale: 1.1,
              rotate: -360,
              transition: { duration: 0.5 }
            }}
          >
            2
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ThemeSection;