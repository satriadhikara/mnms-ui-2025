"use client";

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Star3 from './Star3';
import GlassDownIIF from './GlassDown';

const HighlightsSection = () => {
  return (
    <motion.section 
      className="relative h-[700px] md:h-[592px] flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Star Component */}
      <motion.div 
        className="absolute top-0 left-0 w-full"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Star3 />
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        className="text-white text-[32px]/[36px] md:text-[57.48px]/[56.33px] font-[700] text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ 
          scale: 1.05,
          color: "#DFE00D",
          transition: { duration: 0.3 }
        }}
      >
        Previous Highlights
      </motion.h1>

      {/* Carousel */}
      <motion.div
        className="mt-10 z-10 px-4 md:px-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Carousel className="">
          <CarouselContent className="flex w-full md:w-[680px] h-[250px] md:h-[416px] gap-4 mx-auto">
            <CarouselItem className="w-full md:w-[680px] h-[250px] md:h-[416px] flex rounded-[20px] md:rounded-[30px] items-center justify-center">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/highlight1.png"
                  alt="Highlight 1"
                  width={680}
                  height={416}
                  className="object-fill object-center rounded-[20px] md:rounded-[30px] w-full h-full"
                />
              </motion.div>
            </CarouselItem>
            <CarouselItem className="w-full md:w-[680px] h-[250px] md:h-[416px] flex rounded-[20px] md:rounded-[30px] items-center justify-center">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/highlight2.png"
                  alt="Highlight 2"
                  width={680}
                  height={416}
                  className="object-fill object-center rounded-[20px] md:rounded-[30px] w-full h-full"
                />
              </motion.div>
            </CarouselItem>
            <CarouselItem className="w-full md:w-[680px] h-[250px] md:h-[416px] flex rounded-[20px] md:rounded-[30px] items-center justify-center">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/highlight3.png"
                  alt="Highlight 3"
                  width={680}
                  height={416}
                  className="object-fill object-center rounded-[20px] md:rounded-[30px] w-full h-full"
                />
              </motion.div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-76" />
          <CarouselNext className="hidden md:flex -right-76" />
        </Carousel>
      </motion.div>

      {/* Bottom Background */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <GlassDownIIF />
      </motion.div>
    </motion.section>
  );
};

export default HighlightsSection;