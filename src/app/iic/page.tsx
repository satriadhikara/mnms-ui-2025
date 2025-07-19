"use client";

import GlassTopIIF from "./components/GlassTop";
import BgDownIIF from "./components/BgDown";
import GlassTopIIF2 from "./components/GlassTop2";
import GlassDownIIF from "./components/GlassDown";
import BgTopIIF from "./components/BgTop";
import IICRoadmap from "./components/IICRoadmap";
import Star1 from "./components/Star1";
import Star2 from "./components/Star2";
import Star3 from "./components/Star3";
import Star4 from "./components/Star4";
import { Button } from "@/components/ui/button"
import Contact from "./components/Contact";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useState, useEffect } from "react";
import Link from "next/link";

const iicImages = [
    "/iic1.png",
    "/iic2.png",
    "/iic3.png",
    "/iic4.png",
];

const InnovativeInfographicCompetitionPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % iicImages.length);
                setFade(true);
            }, 1000); // fade out duration
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col bg-[#050300]">
            <section className="relative h-[606px] flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full z-0">
                    <GlassTopIIF />
                </div>
                <div className="absolute top-0 left-0 w-full z-10">
                    <Star1 />
                </div>
                <div className="flex flex-col justify-center items-start w-full mt-16 z-20">
                    <h1 className="text-[#DFE00D] text-[100px]/[109.41px] tracking-[1] font-[800] font-bold text-start ml-[55px] font-stylistic-alternates ">
                        Innovative Infographic
                    </h1>
                    <div className="flex flex-row justify-between items-start w-full">
                        <div>
                            <h1 className="text-[#DFE00D] text-[100px]/[109.41px] tracking-[1] font-[800] font-bold text-start ml-[55px] font-stylistic-alternates ">
                                Competition
                            </h1>
                            <p className="w-[663px] ml-[55px] mt-[17.83px] text-[#F9F9F9] text-justify text-[26.25px]/[33.6px] tracking-[0.262px] font-[400] ">
                                A national-level competition for undergraduate (S1) or diploma (D3/D4) students to compete in exchanging ideas and insights regarding issues and innovations related to the theme of the event. 
                            </p>
                            <div className="flex items-start ml-[55px] mt-[22px] ">
                                <Button className="z-10 w-[184px] h-[44px] rounded-full border border-[rgba(253,255,245,0)] bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.1)] to-[rgba(253,255,245,0)] shadow-[0px_4.474px_16.778px_0px_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] text-[#FBFAF7] text-[24px]/[31.104px] font-[800] mr-[20px]">
                                    Guidebook
                                </Button>
                                <Link href="/iic/form" passHref>
                                    <Button className="z-10 w-[184px] h-[44px] rounded-full border border-[rgba(253,255,245,0)] bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.1)] to-[rgba(253,255,245,0)] shadow-[0px_4.474px_16.778px_0px_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] text-[#FBFAF7] text-[24px]/[31.104px] font-[800]">
                                        Register Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-[607px] h-[291px] flex justify-center items-center mr-[25px] border border-[#DFE00D] border-[3px] mt-8 rounded-[24px]">
                            <Image
                                src={iicImages[currentImage]}
                                alt={`IIC Hero Image ${currentImage + 1}`}
                                width={607}
                                height={291}
                                className={`object-fill object-center transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
                            />
                            <div className="absolute bottom-15 right-7.5 w-[321px] h-[120px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[0px]
                                            border border-[rgba(253,255,245,0)]
                                            bg-[linear-gradient(90deg,rgba(253,255,245,0)_0%,rgba(253,255,245,0.1)_52.4%,rgba(253,255,245,0)_100%)]
                                            shadow-[0px_4.474px_16.778px_rgba(0,0,0,0.35)]
                                            backdrop-blur-[36.560386657714844px] p-3 z-10 ">
                                <Image
                                    src="/cp-iic.png"
                                    alt="Contact Person IIC"
                                    width={321}
                                    height={120}
                                    className="object-fill object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-0">
                    <BgDownIIF />
                </div>
            </section>
            <section className="relative h-[592px] flex justify-center items-center">
                <div className="absolute top-0 left-0 w-full">
                    <GlassTopIIF2 />
                </div>
                <div className="absolute top-0 left-0 w-full z-0">
                    <Star2 />
                </div>
                <div className="flex flex-col justify-center items-center w-full mt-16">
                    <h1 className="text-[#F9F9F9] text-[60px]/[52.25px] tracking-[0.6] font-[800] text-center underline underline-offset-8 decoration-solid decoration-from-font z-10">
                        This Year Theme
                    </h1>
                    <p className="w-[1217px] text-center text-[50px]/[55px] font-[700] text-[#DFE00D] z-10 mt-[32px] font-stylistic-alternates">
                        “Ecological Approaches and Green Technologies: Key to Reducing Toxicity and Maximizing Value from Mining Tailings”
                    </p>
                    <h2 className="text-[#F9F9F9] text-center text-[35px]/[52.25px] font-[400] tracking-[0.35px] underline decoration-solid underline-offset-8 decoration-from-font mt-[44px] z-10">
                        With a Sub-Theme:
                    </h2>
                    <div className="flex items-center justify-center w-[1249.402px] h-[53.998px] rounded-full border-solid border-[2.681px] border-[#F9F9F9] bg-[rgba(249,249,249,0.10)] mt-[30px] z-10">
                        <div className="w-[57px] h-[57px] rounded-full bg-[#DFE00D] absolute -left-4 relative flex items-center justify-center z-10 text-[#050300] text-[25px] leading-[25px] font-[800]">
                            1
                        </div>
                        <p className="w-[1165.612px] text-[#F9F9F9] text-center font-bold text-[26.454px] leading-[40.256px] ">
                            From Waste to Resource: Upgrading Tailing Management through Ecological Approaches
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-[1213.093px] h-[53.998px] rounded-full border-solid border-[2.681px] border-[#F9F9F9] bg-[rgba(249,249,249,0.10)] mt-[30px] z-10">
                        <p className="text-[#F9F9F9] text-center font-bold text-[26.454px] leading-[40.256px]">
                            Green Mining as a Key Driver of Integrated Efficiency in Mineral Extraction & Processing
                        </p>
                        <div className="w-[57px] h-[57px] rounded-full bg-[#DFE00D] absolute -right-7 relative flex items-center justify-center z-10 text-[#050300] text-[25px] leading-[25px] font-[800]">
                            2
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative h-[592px] flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full">
                    <Star3 />
                </div>
                <h1 className="text-white text-[57.48px]/[56.33px] font-[700] text-center z-10">
                    Previous Highlights
                </h1>
                <Carousel className=" mt-10 z-10">
                    <CarouselContent className="flex w-[680] h-[416px] gap-4 mx-auto">
                        <CarouselItem className="w-[60px] h-[416px] flex rounded-[30px] items-center justify-center">
                            <Image
                                src="/highlight1.png"
                                alt="Highlight 1"
                                width={680}
                                height={416}
                                className="object-fill object-center"
                            />
                        </CarouselItem>
                        <CarouselItem className="w-[680px] h-[416px] flex rounded-[30px] items-center justify-center">
                            <Image
                                src="/highlight2.png"
                                alt="Highlight 2"
                                width={680}
                                height={416}
                                className="object-fill object-center"
                            />
                        </CarouselItem>
                        <CarouselItem className="w-[680px] h-[416px] flex rounded-[30px] items-center justify-center">
                            <Image
                                src="/highlight3.png"
                                alt="Highlight 3"
                                width={680}
                                height={416}
                                className="object-fill object-center"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className=" -left-76 " />
                    <CarouselNext className=" -right-76 " />
                </Carousel>
                <div className="absolute bottom-0 left-0 w-full">
                    <GlassDownIIF />
                </div>
            </section>
            <section className="relative h-[1221px] flex justify-center items-center">
                <div className="absolute top-0 left-0 w-full">
                    <BgTopIIF />
                </div>
                <div className="absolute -top-32 left-0 w-full z-10">
                    <Star4 />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[#F9F9F9] text-center font-bold text-[57.48px] leading-[191.693px] font-stylistic-alternates z-10">
                        Competition Roadmap
                    </h1>
                    <div className="flex justify-center items-center">
                        <IICRoadmap />
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
};

export default InnovativeInfographicCompetitionPage;