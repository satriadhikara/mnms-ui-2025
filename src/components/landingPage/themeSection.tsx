"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from 'framer-motion';

const ThemeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Presenting,",
      subtitle: "These Year Theme",
      mainText: "Empowering the Ecological Industry For Future Indonesia's Mining",
      type: "main",
      background: "/ThemeBG.svg",
      stars: [
        { src: "/Star1.png", width: 200, height: 200, className: "absolute top-0 left-0" },
        { src: "/Star3.png", width: 200, height: 200, className: "absolute bottom-4 right-10" },
        { src: "/Star4.png", width: 100, height: 100, className: "absolute bottom-60 right-0" }
      ]
    },
    {
      id: 1,
      title: "Our Theme Background",
      content: "As global demand for strategic minerals continues to rise in the era of energy transition, Indonesia faces both significant opportunities and challenges in mineral downstreaming. To realize a sustainable mining and processing industry, integrating the principles of the ecology industry has become imperative. Value-added development must also align with post-mining reclamation and integrated environmental management in accordance with regulations, in order to strengthen cross-sector synergy and build an adaptive, responsible, and sustainability-oriented industrial ecosystem for Indonesia's future.",
      type: "background",
      background: "/ThemeBG2.svg",
      stars: [
        { src: "/Star5.png", width: 100, height: 100, className: "absolute bottom-60 left-0" },
        { src: "/Star6.png", width: 100, height: 100, className: "absolute z-10 bottom-20 left-10" },
        { src: "/Star7.png", width: 100, height: 100, className: "absolute bottom-35 right-0" },
        { src: "/Star1.png", width: 200, height: 200, className: "absolute top-20 right-0" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(1);
  };

  const prevSlide = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="bg-black bg-auto bg-center h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Images with Animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {slides.map((slide, slideIndex) => (
          <Image
            key={slideIndex}
            src={slide.background}
            alt="Theme Background"
            width={200}
            height={100}
            className={`absolute -bottom-4 left-0 w-full h-[30vh] md:h-[80vh] object-cover transition-all duration-700 ease-in-out ${
              slideIndex === currentSlide 
                ? 'opacity-100 scale-100' 
                : slideIndex < currentSlide 
                  ? 'opacity-0 scale-105 -translate-x-10' 
                  : 'opacity-0 scale-95 translate-x-10'
            }`}
            style={{
              transitionDelay: slideIndex === currentSlide ? '0ms' : '100ms'
            }}
          />
        ))}
      </motion.div>
      
      {/* Star Images with Scroll and Hover Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              slideIndex === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            {slide.stars.map((star, starIndex) => (
              <motion.div
                key={`${slideIndex}-${starIndex}`}
                className={star.className}
                initial={{ 
                  opacity: 0, 
                  scale: 0.3,
                  rotate: starIndex % 2 === 0 ? -180 : 180 
                }}
                whileInView={{ 
                  opacity: slideIndex === currentSlide ? 1 : 0, 
                  scale: slideIndex === currentSlide ? 1 : 0.95,
                  rotate: 0 
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + starIndex * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 15,
                  transition: { duration: 0.3 }
                }}
                style={{
                  pointerEvents: 'auto'
                }}
              >
                <Image
                  src={star.src}
                  alt="Star"
                  width={star.width}
                  height={star.height}
                  className="cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Content Container with Slide Animation */}
      <div className="relative z-10 w-full max-w-6xl mx-auto overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className="w-full flex-shrink-0 flex flex-col justify-center items-center px-4">
            <motion.div 
              className="flex items-center justify-center gap-20 mb-8"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/Star21.png"
                alt="Theme Element"
                width={80}
                height={80}
                className="cursor-pointer"
              />
              
              <div className="flex flex-col gap-0">
                <motion.h1 
                  className="text-[#F9F9F9] text-2xl md:text-3xl lg:text-4xl font-extrabold font-sans leading-tight text-center italic"
                  whileHover={{ 
                    color: "#DFE00D",
                    transition: { duration: 0.3 }
                  }}
                >
                  {slides[0].title}
                </motion.h1>
                <motion.h2 
                  className="text-[#F9F9F9] text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans leading-relaxed mb-4 md:mb-8 text-center"
                  whileHover={{ 
                    color: "#DFE00D",
                    textShadow: "0px 0px 15px rgba(223, 224, 13, 0.8)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {slides[0].subtitle}
                </motion.h2>
              </div>
              
              <Image
                src="/Star22.png"
                alt="Theme Element"
                width={80}
                height={80}
                className="cursor-pointer"
              />
            </motion.div>

            <motion.div 
              className="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-4xl shadow-lg border border-white/20 cursor-pointer transition-all duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 20px 40px rgba(223, 224, 13, 0.2)",
                transition: { duration: 0.3 }
              }}
              onClick={nextSlide}
            >
              <motion.h1 
                className="text-[#DFE00D] text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-stylistic-alternates leading-tight text-center italic"
                whileHover={{ 
                  textShadow: "0px 0px 20px rgba(223, 224, 13, 1)",
                  transition: { duration: 0.3 }
                }}
              >
                &quot;{slides[0].mainText}&quot;
              </motion.h1>
            </motion.div>
          </div>

          {/* Slide 2 */}
          <div className="w-full flex-shrink-0 flex flex-col justify-center items-center px-4">
            <motion.div 
              className="flex flex-col justify-center items-center gap-8 md:gap-15"
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: currentSlide === 1 ? 1 : 0,
                x: currentSlide === 1 ? 0 : 100
              }}
              transition={{ duration: 0.8, delay: currentSlide === 1 ? 0.2 : 0 }}
            >
              <div className="w-full flex justify-between items-center">
                <motion.button 
                  onClick={prevSlide}
                  className="text-white transition-colors duration-300"
                  whileHover={{ 
                    color: "#DFE00D",
                    scale: 1.1,
                    x: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                    className="w-10 h-10"
                    fill="currentColor"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                  </svg>
                </motion.button>
                
                <motion.h1 
                  className="text-[#DFE00D] text-2xl md:text-3xl lg:text-6xl font-extrabold font-sans leading-tight text-center"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0px 0px 15px rgba(223, 224, 13, 0.8)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {slides[1].title}
                </motion.h1>
                
                <div className="w-16"></div>
              </div>

              <motion.div 
                className="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-4xl shadow-lg border border-white/20"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h1 
                  className="text-[#F9F9F9] text-[18px] md:text-[20px] lg:text-[22px] font-medium font-sans leading-tight text-start"
                  whileHover={{ 
                    color: "#E5E5E5",
                    transition: { duration: 0.3 }
                  }}
                >
                  {slides[1].content}
                </motion.h1>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Dots with hover animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-[#DFE00D]' : 'bg-white/50'
            }`}
            whileHover={{ 
              scale: 1.3,
              backgroundColor: currentSlide === index ? "#DFE00D" : "rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ThemeSection;