"use client";
import Image from 'next/image';
import GlassTop from "./components/GlassTop";
import GlassTop2 from "./components/GlassTop2";
import GlassDown from "./components/GlassDown";
import Star1 from "./components/Star1";
import Star2 from "./components/Star2";
import Star3 from "./components/Star3";
import Contact from "./components/Contact";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { link } from 'fs';

const AboutUsPage = () => {
    const glimpseImages = [
        { src: "/glimpse1.png", alt: "Event 1" },
        { src: "/glimpse2.png", alt: "Event 2" },
        { src: "/glimpse3.png", alt: "Event 3" },
        { src: "/glimpse4.png", alt: "Event 4" },
        { src: "/glimpse5.png", alt: "Event 5" },
        { src: "/glimpse6.png", alt: "Event 6" },
    ];

    // Helper to group images into arrays of 3
    const groupedImages = [];
    for (let i = 0; i < glimpseImages.length; i += 3) {
        groupedImages.push(glimpseImages.slice(i, i + 3));
    }

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleBulletClick = (idx: number) => setCurrentSlide(idx);

    return (
        <div className="flex flex-col bg-[#050300]">
            <section className="relative h-[841px] flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full z-10">
                    <GlassTop />
                </div>
                <div className="absolute top-0 left-0 w-full z-0">
                    <Star1 />
                </div>
                <div className="flex flex-col items-center justify-center w-full mt-24 z-20">
                    <Image
                        src="/logo.png"
                        alt="Logo MnMs 2025"
                        width={190}
                        height={190}
                    />
                    <div className="w-[864px] h-[69px] bg-[#25B8B6] flex rounded-[10px] items-center justify-center mb-4">
                        <h1 className="text-[45px]/[45px] text-[#F9F9F9] text-center font-[800] font-stylistic-alternates">
                            About Metallurgy and Materials Week
                        </h1>
                    </div>
                    <div className="w-[1080px] flex items-center justify-center">
                        <p className="text-[25px] font-[500] text-[#F9F9F9] text-justify mt-4 font-stylistic-alternates">
                            Metallurgy and Materials Week or MnMs’ Week is the biggest annual series of events held by the Department of Metallurgical and Materials Engineering, University of Indonesia.  MnMs’ is a series of events that gathers several parties, including Governments, Industries, Researchers, Students, Lecturers, and Public to discuss metallurgy and materials issues while coming up with the best suitable solutions.
                        </p>
                    </div>
                </div>
            </section>
            <section className="h-[740px] flex-col items-center justify-center relative">
                <div className="absolute -top-36 left-0 w-full z-0">
                    <Star2 />
                </div>
                <h1 className="w-[1300px] text-[57.475px]/[57.48px] text-[#DFE00D] text-center font-[800] tracking-[0.575px] mt-10 mx-auto">
                    Evolution of MnMs’ Week
                </h1>
                <div className="w-full h-auto flex items-center justify-center relative mt-10 z-10 mx-auto">
                    <Carousel>
                        <CarouselContent className="flex w-[1219px] h-[506px] gap-4 mx-auto ">
                            <CarouselItem className="w-[1154px] h-[489px] p-[5px] flex items-center justify-center rounded-[30px] border-[5px] border-[rgba(249,249,249,0)] bg-[rgba(249,249,249,0.10)] backdrop-blur-[8px] shadow-[ -41.589px_0px_155.945px_rgba(0,0,0,0.2),41.589px_0px_155.945px_rgba(0,0,0,0.2),0px_41.585px_155.945px_rgba(0,0,0,0.35)]">
                                <Image
                                    src="/evolution1.png"
                                    alt="Highlight 1"
                                    width={1154}
                                    height={459}
                                    className="object-fill object-center"
                                />
                            </CarouselItem>
                            <CarouselItem className="w-[1154px] h-[489px] p-[5px] flex items-center justify-center rounded-[30px] border-[5px] border-[rgba(249,249,249,0)] bg-[rgba(249,249,249,0.10)] backdrop-blur-[50px] shadow-[ -41.589px_0px_155.945px_rgba(0,0,0,0.2),41.589px_0px_155.945px_rgba(0,0,0,0.2),0px_41.585px_155.945px_rgba(0,0,0,0.35)]">
                                <Image
                                    src="/evolution2.png"
                                    alt="Highlight 2"
                                    width={1154}
                                    height={459}
                                    className="object-fill object-center"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-0">
                    <GlassDown />
                </div>
            </section>
            <section className="h-[740px] flex-col items-center justify-center relative">
                <div className="absolute top-0 left-0 w-full z-0">
                    <Star3 />
                </div>
                <div className="absolute top-0 left-0 w-full z-0">
                    <GlassTop2 />
                </div>
                <h1 className="relative w-[1304.026px] text-[#DFE00D] text-center font-extrabold text-[71.844px] leading-[71.85px] tracking-[0.718px] z-10 mt-16 mx-auto">
                    A Glimpse of <br /> Our Last Events
                </h1>
                <div className="w-full h-auto flex flex-col items-center justify-center relative mt-16 z-10 mx-auto">
                    <div className="flex items-center justify-center w-full">
                        <button
                            onClick={() =>
                                setCurrentSlide((prev) =>
                                    prev === 0 ? groupedImages.length - 1 : prev - 1
                                )
                            }
                            className="z-20 flex items-center justify-center w-10 h-10 text-white text-bold mr-6"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft size={48} />
                        </button>
                        <div className="relative w-[1219px] h-[284.381px] overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    width: `${groupedImages.length * 100}%`,
                                    transform: `translateX(-${currentSlide * (100 / groupedImages.length)}%)`,
                                }}
                            >
                                {groupedImages.map((group, idx) => (
                                    <div
                                        key={idx}
                                        className="flex w-[1219px] h-[284.381px] gap-4 shrink-0"
                                    >
                                        {group.map((img) => (
                                            <div
                                                key={img.src}
                                                className="w-[387.871px] h-[284.381px] rounded-[16.732px] basis-1/3 flex items-center justify-center"
                                            >
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width={387}
                                                    height={283}
                                                    className="object-fill object-center"
                                                    priority
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Next Button */}
                        <button
                            onClick={() =>
                                setCurrentSlide((prev) =>
                                    prev === groupedImages.length - 1 ? 0 : prev + 1
                                )
                            }
                            className="z-20 flex items-center justify-center w-10 h-10 text-white text-bold ml-6"
                            aria-label="Next Slide"
                        >
                            <ChevronRight size={48} />
                        </button>
                    </div>
                    {/* Carousel Bullets */}
                    <div className="flex justify-center mt-16">
                        {groupedImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleBulletClick(idx)}
                                className={`w-5 h-5 mx-2 rounded-full border-3 border-[#25B8B6] transition-all ${
                                    currentSlide === idx ? "bg-[#DFE00D]" : "bg-transparent"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
};

export default AboutUsPage;