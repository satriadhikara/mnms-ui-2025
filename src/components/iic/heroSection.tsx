"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from "next/link";
import GlassTopIIF from './GlassTop';
import BgDownIIF from './BgDown';
import Star1 from './Star1';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  const iicImages = [
    "/iic1.png",
    "/iic2.png",
    "/iic3.png",
    "/iic4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % iicImages.length);
        setFade(true);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[606px] md:h-[606px] flex flex-col justify-center items-center bg-[#050300]">
      {/* Background - Top Glass */}
      <motion.div
        className="absolute top-0 left-0 w-full z-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GlassTopIIF />
      </motion.div>

      <div className="absolute top-0 left-0 w-full z-10">
        <Star1 />
      </div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col justify-center items-start w-full mt-28 md:16 z-20 px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Title */}
        <motion.h1
          className="text-[#DFE00D] text-[40px]/[45px] md:text-[100px]/[109.41px] tracking-[1] font-[800] font-bold text-start ml-[20px] md:ml-[55px] font-stylistic-alternates"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{
            scale: 1.02,
            textShadow: "0px 0px 20px rgba(223, 224, 13, 0.8)",
            transition: { duration: 0.3 }
          }}
        >
          Innovative Infographic
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          {/* Left Side Content */}
          <div>
            <motion.h1
              className="text-[#DFE00D] text-[40px]/[45px] md:text-[100px]/[109.41px] tracking-[1] font-[800] font-bold text-start ml-[20px] md:ml-[55px] font-stylistic-alternates"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{
                scale: 1.02,
                textShadow: "0px 0px 20px rgba(223, 224, 13, 0.8)",
                transition: { duration: 0.3 }
              }}
            >
              Competition
            </motion.h1>

            <motion.p
              className="w-full md:w-[663px] ml-[20px] md:ml-[55px] mt-[17.83px] text-[#F9F9F9] text-justify text-[16px]/[22px] md:text-[26.25px]/[33.6px] tracking-[0.262px] font-[400] pr-4 md:pr-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              A national-level competition for undergraduate (S1) or diploma (D3/D4) students to compete in exchanging ideas and insights regarding issues and innovations related to the theme of the event.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-start ml-[20px] md:ml-[55px] mt-[22px] gap-4 md:gap-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                
              >
                <a
                  href="https://drive.google.com/drive/folders/1eCx1RRROliIMV0iFl5HPZFW_f6mt9inj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <Button className="cursor-pointer z-10 w-[150px] md:w-[184px] h-[40px] md:h-[44px] rounded-full border border-[rgba(253,255,245,0)] bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.1)] to-[rgba(253,255,245,0)] shadow-[0px_4.474px_16.778px_0px_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] text-[#FBFAF7] text-[18px]/[24px] md:text-[24px]/[31.104px] font-[800] mr-0 md:mr-[20px] hover:bg-white hover:text-black transition-all duration-300">
                    Guidebook
                  </Button>
                </a>
              </motion.div>

              <Link href="/iic/form" passHref>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 2, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="cursor-pointer z-10 w-[150px] md:w-[184px] h-[40px] md:h-[44px] rounded-full border border-[rgba(253,255,245,0)] bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.1)] to-[rgba(253,255,245,0)] shadow-[0px_4.474px_16.778px_0px_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] text-[#FBFAF7] text-[18px]/[24px] md:text-[24px]/[31.104px] font-[800] hover:bg-white hover:text-black transition-all duration-300">
                    Register Now
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Image Container */}
          <motion.div
            className="relative w-full md:w-[607px] h-[200px] md:h-[291px] flex justify-center items-center mr-0 md:mr-[25px] border border-[#DFE00D] border-[2px] md:border-[3px] mt-6 md:mt-8 rounded-[16px] md:rounded-[24px] mx-4 md:mx-0"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            whileHover={{
              scale: 1.02,
              rotate: 1,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src={iicImages[currentImage]}
              alt={`IIC Hero Image ${currentImage + 1}`}
              width={607}
              height={291}
              className={`object-fill object-center transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            />

            {/* Contact Person Overlay */}
            <motion.div
              className="absolute bottom-0 right-0 w-[200px] md:w-[321px] h-[75px] md:h-[120px] rounded-tl-[15px] md:rounded-tl-[20px] rounded-br-[15px] md:rounded-br-[20px] rounded-tr-none rounded-bl-[0px] border border-[rgba(253,255,245,0)] bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)] shadow-[0px_4.474px_16.778px_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] p-2 md:p-3 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/cp-iic.png"
                alt="Contact Person IIC"
                width={321}
                height={120}
                className="object-fill object-center"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background - Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 w-full z-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <BgDownIIF />
      </motion.div>
    </section>
  );
};

export default HeroSection;