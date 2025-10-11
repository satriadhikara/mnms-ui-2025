"use client";

import Navbar from "@/components/Navbar";
import GlassTop from "@/components/company-visit/GlassTop";
import GlassTop2 from "@/components/company-visit/GlassTop2";
import BgDown from "@/components/company-visit/BgDown";
import Contact from "@/components/company-visit/Contact";
import Star1 from "@/components/company-visit/Star1";
import Star2 from "@/components/company-visit/Star2";
import Star3 from "@/components/company-visit/Star3";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CompanyVisitPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-[#050300] overflow-hidden">
                {/* Hero Section */}
                <section className="w-full relative pt-28 pb-10 lg:pt-32 lg:pb-16 min-h-[650px] lg:min-h-[620px]">
                    <div className="absolute top-0 left-0 w-full z-0">
                        <GlassTop />
                    </div>

                    <div className="absolute top-0 w-full left-0 z-10">
                        <Star1 />
                    </div>

                    <div className="absolute top-0 left-0 z-0">
                        <Image
                            src="/images/company-visit/ellipse-1.png"
                            alt="Ellipse Decoration"
                            width={1000}
                            height={1000}
                            className="w-[900px] max-w-none opacity-60 pointer-events-none"
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row w-full h-full items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 gap-10 lg:gap-6 max-w-[1400px] mx-auto">
                        {/* Left / Text */}
                        <motion.div
                            // Text block should appear first on mobile so order-1 there, and remain first on large screens
                            className="order-1 lg:order-1 flex z-20 flex-col w-full lg:w-3/5 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }}
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } }}
                                className="text-[#DFE00D] font-stylistic-alternates font-extrabold tracking-[1px] leading-[0.95] text-[46px] xs:text-[54px] sm:text-[64px] md:text-[72px] lg:text-[78px] xl:text-[92px] 2xl:text-[100px]"
                            >
                                <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 } }}>Company Visit</motion.span>
                                <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.25 } }}>MnMs’ Scope</motion.span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.35 } }}
                                className="text-[#F9F9F9] text-justify font-normal leading-relaxed text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[25px] max-w-[700px]"
                            >
                                MnMs’ Scope 2025 is the inaugural Company Visit initiative of The 20 Metallurgy and Materials Week. It aims to provide participants with direct exposure to the metallurgy and materials industry’s transformation toward sustainability.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.45 } }}
                                className="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-6 sm:gap-10"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    >
                                    <a
                                        href="https://bit.ly/CompanyVisitMnMs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-fit"
                                    >
                                        <Button className="cursor-pointer z-10 w-[150px] md:w-[184px] h-[40px] md:h-[44px] rounded-full border-2 border-[rgba(253,255,245,0)] bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.1)] to-[rgba(253,255,245,0)] shadow-[0px_4.474px_16.778px_0px_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] text-[#FBFAF7] text-[18px]/[24px] md:text-[24px]/[31.104px] font-[800] mr-0 md:mr-[20px] hover:bg-white hover:text-black transition-all duration-300">
                                            Register Here
                                        </Button>
                                    </a>
                                </motion.div>
                                <motion.div animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-[260px] sm:w-[300px] md:w-[320px]">
                                    <Image
                                        src="/images/company-visit/cp.png"
                                        alt="Contact Person"
                                        width={321}
                                        height={120}
                                        className="object-contain w-full"
                                        priority
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right / Hero Visual */}
                        <motion.div
                            // Image block appears after text on mobile: order-2; keep second on large screens
                            className="order-2 lg:order-2 w-full lg:w-2/5 z-20 h-full flex flex-col items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }}
                        >
                            <motion.div animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="w-full max-w-[520px] aspect-[525/306] relative">
                                <Image
                                    src="/images/company-visit/united-tractors.png"
                                    alt="United Tractors"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                            <div className="flex flex-col w-full items-center">
                                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full gap-5 mt-5">
                                    <Image
                                        src="/images/company-visit/date.png"
                                        alt="Date"
                                        width={273}
                                        height={48}
                                        className="object-contain w-[230px] sm:w-[260px] md:w-[273px]"
                                    />
                                    <Image
                                        src="/images/company-visit/fee.png"
                                        alt="Location"
                                        width={207}
                                        height={60}
                                        className="object-contain w-[180px] md:w-[207px]"
                                    />
                                </div>
                                <Image
                                    src="/images/company-visit/venue.png"
                                    alt="Location"
                                    width={418}
                                    height={50}
                                    className="object-contain mt-4 w-[300px] sm:w-[360px] md:w-[400px] lg:w-[418px]"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full z-0">
                        <BgDown />
                    </div>
                </section>

                <section className="w-full relative py-20 lg:py-24">
                    <div className="absolute top-0 left-0 w-full z-0">
                        <GlassTop2 />
                    </div>

                    <div className="absolute top-[-120px] w-full left-0 z-10">
                        <Star2 />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex z-20 justify-center items-center mb-10 md:mb-16 px-6"
                    >
                        <h2 className="text-[#F9F9F9] z-20 text-center font-extrabold tracking-tight text-[42px] xs:text-[54px] sm:text-[64px] md:text-[72px] lg:text-[78px] xl:text-[84px] leading-[1.05]">
                            Company Profile
                        </h2>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row w-full items-center lg:items-start px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 gap-14 lg:gap-10 max-w-[1400px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 } }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full lg:w-2/5 z-20 flex flex-col items-center justify-start"
                        >
                            <div className="w-full max-w-[480px] aspect-[485/240] relative">
                                <Image
                                    src="/images/company-visit/united-tractors-logo.png"
                                    alt="Hero Image"
                                    fill
                                    className="object-contain scale-[1.9] sm:scale-[2.05] md:scale-[2.15] translate-y-[2%]"
                                    priority
                                />
                            </div>
                            <p className="text-white z-10 text-center text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-extrabold leading-normal tracking-[0.4px] mt-4">
                                PT. United Tractors
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.25 } }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full lg:w-3/5 flex flex-col items-center justify-start gap-6 md:gap-8 z-10"
                        >
                            <p className="text-white text-justify font-normal leading-relaxed text-base sm:text-lg md:text-xl lg:text-[22px]">
                                PT United Tractors Tbk is the leading and largest heavy equipment distributor in Indonesia, boasting a diversified business portfolio across five key segments: Construction Machinery, Mining Contracting, Mining, Construction Industry, and Energy.
                            </p>
                            <p className="text-white text-justify font-normal leading-relaxed text-base sm:text-lg md:text-xl lg:text-[22px]">
                                The company strongly adheres to the &ldquo;Moving as One&rdquo; tagline and holds a powerful aspiration toward sustainability by 2030, committing to becoming a resilient and sustainable entity through the integrated implementation of ESG (Environmental, Social, and Governance) practices across all its operations.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="w-full relative py-24 lg:py-28">

                    <div className="absolute top-[-200px] w-full left-0 z-20">
                        <Star3 />
                    </div>

                    <div className="flex flex-col z-30 justify-center items-center px-6 sm:px-10">
                        <motion.h3
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="text-[#F9F9F9] text-center font-extrabold tracking-tight text-[36px] xs:text-[44px] sm:text-[50px] leading-[1.05]"
                        >
                            Assembly Point
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 } }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full max-w-[1131px] h-[5px] rounded-[9px] bg-[#F9F9F9] mt-5"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.25 } }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full z-20 max-w-[1145px] aspect-[1145/252] relative"
                        >
                            <Image
                                src="/images/company-visit/dtk-ft.png"
                                alt="Departemen Teknik Kimia FTUI"
                                fill
                                className="object-contain translate-y-[12%] scale-[2.2] xs:scale-[2.3] sm:scale-[2.4] md:scale-[2.45] lg:scale-[2.5]"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.35 } }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full z-20 max-w-[1230px] aspect-[1230/68] relative mt-10"
                        >
                            <Image
                                src="/images/company-visit/ap-detail.png"
                                alt="Departemen Teknik Kimia FTUI"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.45 } }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-10"
                        >
                            <p className="text-[#F9F9F9] text-center font-extrabold text-[26px] sm:text-[34px] md:text-[40px] lg:text-[45px] leading-tight">
                                Facilities:
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                                <div className="px-5 h-[50px] sm:h-[56px] flex items-center justify-center border border-[rgba(253,255,245,0.00)] bg-[linear-gradient(90deg,rgba(253,255,245,0.00)_0%,rgba(253,255,245,0.10)_52.4%,rgba(253,255,245,0.00)_100%)] shadow-[0_4.474px_16.778px_0_rgba(0,0,0,0.35)] backdrop-blur-[30px] rounded-[16px_0]">
                                    <p className="text-center text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold leading-[1.4]
                                                bg-[linear-gradient(270deg,#DFE00D_0%,#25B8B6_100%)] bg-clip-text text-transparent
                                                [text-shadow:0_6px_4px_rgba(0,0,0,0.25)]">
                                        Meals
                                    </p>
                                </div>
                                <div className="px-5 h-[50px] sm:h-[56px] flex items-center justify-center border border-[rgba(253,255,245,0.00)] bg-[linear-gradient(90deg,rgba(253,255,245,0.00)_0%,rgba(253,255,245,0.10)_52.4%,rgba(253,255,245,0.00)_100%)] shadow-[0_4.474px_16.778px_0_rgba(0,0,0,0.35)] backdrop-blur-[30px] rounded-[16px_0]">
                                    <p className="text-center text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold leading-[1.4]
                                                bg-[linear-gradient(270deg,#DFE00D_0%,#25B8B6_100%)] bg-clip-text text-transparent
                                                [text-shadow:0_6px_4px_rgba(0,0,0,0.25)]">
                                        Transportation (Bus)
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute top-10 sm:top-6 md:top-4 lg:top-0 right-0 z-10 transition-all">
                        <Image
                            src="/images/company-visit/ellipse-2.png"
                            alt="Ellipse Decoration"
                            width={547}
                            height={363}
                            className="opacity-70 pointer-events-none"
                        />
                    </div>
                </section>
                <Contact />
            </div>
        </>
    );
};

export default CompanyVisitPage;