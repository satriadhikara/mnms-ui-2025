"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

const HighlightsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  const slides = [
    {
      id: 0,
      backgroundBottom: "/PrevHighlightBG.svg",
      backgroundBottomHeight: "h-[200px] sm:h-[200px] lg:h-[750px]",
      stars: [
        { src: "/CSCStar1.png", width: 80, height: 80, className: "absolute bottom-20 left-4 sm:left-8 lg:left-15" },
        { src: "/CSCStar2.png", width: 200, height: 200, className: "absolute top-20 left-6 sm:left-12 lg:left-25" },
        { src: "/CSCStar3.png", width: 200, height: 200, className: "absolute bottom-20 right-6 sm:right-12 lg:right-25" },
        { src: "/CSCStar4.png", width: 100, height: 100, className: "absolute top-20 right-4 sm:right-10 lg:right-20" }
      ],
      highlightImage: "/PrevHighlight1.png"
    },
    {
      id: 1,
      backgroundBottom: "/PrevHighlightBG2.svg",
      backgroundBottomHeight: "h-[200px] sm:h-[200px] lg:h-[450px]",
      backgroundTop: "/PrevHighlightBG3.svg",
      backgroundTopHeight: "h-[200px] sm:h-[100px] lg:h-[350px]",
      stars: [
        { src: "/CSCStar5.png", width: 200, height: 200, className: "absolute top-20 sm:top-40 lg:top-60 left-2 sm:left-6 lg:left-10" },
        { src: "/CSCStar6.png", width: 150, height: 150, className: "absolute top-2 sm:top-4 lg:top-6 right-20 sm:right-60 lg:right-90" },
        { src: "/CSCStar7.png", width: 200, height: 200, className: "absolute bottom-0 right-0" }
      ],
      highlightImage: "/PrevHighlight2.png"
    },
    {
      id: 2,
      backgroundBottom: "/PrevHighlightBG4.svg",
      backgroundBottomHeight: "h-[200px] sm:h-[200px] lg:h-[450px]",
      backgroundTop: "/PrevHighlightBG5.svg",
      backgroundTopHeight: "h-[200px] sm:h-[100px] lg:h-[200px]",
      stars: [
        { src: "/CSCStar8.png", width: 150, height: 150, className: "absolute bottom-20 left-8 sm:left-16 lg:left-30" },
        { src: "/CSCStar9.png", width: 150, height: 150, className: "absolute top-2 sm:top-4 lg:top-6 left-20 sm:left-60 lg:left-90" },
        { src: "/CSCStar10.png", width: 250, height: 250, className: "absolute top-12 sm:top-32 lg:top-50 right-2 sm:right-6 lg:right-10" }
      ],
      highlightImage: "/PrevHighlight3.png"
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('next');
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection('');
      }, 100);
    }, 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('prev');
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection('');
      }, 100);
    }, 700);
  };

  interface Star {
    src: string;
    width: number;
    height: number;
    className: string;
  }

  interface Slide {
    id: number;
    backgroundBottom: string;
    backgroundBottomHeight: string;
    backgroundTop?: string;
    backgroundTopHeight?: string;
    stars: Star[];
    highlightImage: string;
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection('');
      }, 100);
    }, 700);
  };

  // Background Animation
  const getBackgroundTransform = () => {
    if (!isTransitioning) return 'opacity-100 scale-100';
    return 'opacity-100 scale-100';
  };

  // Star Animation
  interface GetStarTransform {
    (index: number): string;
  }

  const getStarTransform: GetStarTransform = (index) => {
    if (!isTransitioning) return 'opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0';
    
    const exitAnimations: string[] = [
      'opacity-0 scale-75 translate-x-[-100px] translate-y-[-50px] rotate-180',
      'opacity-0 scale-75 translate-x-[100px] translate-y-[50px] rotate-270',
      'opacity-0 scale-75 translate-x-[-75px] translate-y-[75px] rotate-90',
      'opacity-0 scale-75 translate-x-[75px] translate-y-[-75px] rotate-45'
    ];
    
    return exitAnimations[index % exitAnimations.length];
  };

  // Title Animation
  const getTitleTransform = () => {
    if (!isTransitioning) return 'opacity-100 translate-y-0';
    return slideDirection === 'next' 
      ? 'opacity-0 translate-y-[-50px]' 
      : 'opacity-0 translate-y-[50px]';
  };

  // Image Animation
  const getImageTransform = () => {
    if (!isTransitioning) return 'opacity-100 translate-y-0 scale-100';
    return slideDirection === 'next'
      ? 'opacity-0 translate-y-[30px] scale-95'
      : 'opacity-0 translate-y-[-30px] scale-95';
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background patterns with scroll animation */}
        <motion.div 
          className={`absolute bottom-0 left-0 w-full ${currentSlideData.backgroundBottomHeight} z-0 transition-all duration-700 ease-in-out ${getBackgroundTransform()}`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={currentSlideData.backgroundBottom}
            alt="Highlights Section Background"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        </motion.div>
        
        {currentSlideData.backgroundTop && (
          <motion.div 
            className={`absolute top-0 left-0 w-full ${currentSlideData.backgroundTopHeight} z-0 transition-all duration-700 ease-in-out ${getBackgroundTransform()}`}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src={currentSlideData.backgroundTop}
              alt="Highlights Section Background"
              fill
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </motion.div>
        )}

        {/* Stars with individual scroll and hover animations */}
        {currentSlideData.stars.map((star, index) => (
          <motion.div
            key={index}
            className={`${star.className} transition-all duration-700 ease-in-out ${getStarTransform(index)}`}
            initial={{ 
              opacity: 0, 
              scale: 0, 
              rotate: -180,
              x: index % 2 === 0 ? -100 : 100,
              y: index % 2 === 0 ? -50 : 50
            }}
            whileInView={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: 0,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4 + index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
            whileHover={{ 
              scale: 1.2,
              rotate: 180,
              transition: { duration: 0.3 }
            }}
            style={{ 
              transitionDelay: `${index * 150}ms`,
              zIndex: 5
            }}
          >
            <Image
              src={star.src}
              alt="CSC star"
              width={star.width}
              height={star.height}
              className="cursor-pointer"
            />
          </motion.div>
        ))}

        {/* Main content with scroll animation */}
        <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-6xl mx-auto px-4">
          <motion.h2 
            className={`text-[#F9F9F9] text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-8 text-center transition-all duration-700 ease-in-out ${getTitleTransform()}`}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              color: "#DFE00D",
              textShadow: "0px 0px 15px rgba(223, 224, 13, 0.8)",
              transition: { duration: 0.3 }
            }}
          >
            Previous Highlights
          </motion.h2>

          <motion.div 
            className={`transition-all duration-700 ease-in-out ${getImageTransform()}`}
            style={{ transitionDelay: '300ms' }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src={currentSlideData.highlightImage}
              alt="Previous Highlights"
              width={700}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-2xl h-auto cursor-pointer"
            />
          </motion.div>
        </div>

        {/* Navigation Arrows - Desktop (Side) with hover animations */}
        <motion.button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`hidden lg:block absolute left-4 lg:left-10 top-1/2 transform -translate-y-1/2 p-3 transition-all duration-300 z-50 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ 
            scale: 1.2,
            x: -5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`hidden lg:block absolute right-4 lg:right-10 top-1/2 transform -translate-y-1/2 p-3 transition-all duration-300 z-50 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ 
            scale: 1.2,
            x: 5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-8 h-8 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Navigation Arrows - Mobile/Tablet (Bottom) with animations */}
        <motion.div 
          className="lg:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 z-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.button
            onClick={prevSlide}
            disabled={isTransitioning}
            className={`p-2 transition-all duration-300 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            whileHover={{ 
              scale: 1.2,
              x: -3,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            disabled={isTransitioning}
            className={`p-2 transition-all duration-300 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            whileHover={{ 
              scale: 1.2,
              x: 3,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HighlightsSection;