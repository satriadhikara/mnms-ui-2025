import Navbar from "@/components/Navbar";
import GlassTop from "@/components/company-visit/GlassTop";
import GlassTop2 from "@/components/company-visit/GlassTop2";
import BgDown from "@/components/company-visit/BgDown";
import AnimatedButton from "@/components/AnimatedButton";
import Contact from "@/components/company-visit/Contact";
import Star1 from "@/components/company-visit/Star1";
import Star2 from "@/components/company-visit/Star2";
import Star3 from "@/components/company-visit/Star3";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CompanyVisitPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-[#050300] overflow-hidden">
                {/* Hero Section */}
                <section className="w-full h-[607px] relative pt-20">
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
                        />
                    </div>

                    <div className="flex flex-row w-full h-full items-center px-[55px]">
                        <div className="flex z-20 flex-col w-3/5 gap-6">
                            <h1 className="text-[#DFE00D] font-stylistic-alternates text-[100px] font-extrabold leading-[90px] tracking-[1px]">
                                Company Visit
                                <br />
                                MnMs’ Scope
                            </h1>
                            <p className="w-[90%] text-[#F9F9F9] text-justify text-[25px] font-normal leading-[120%]">
                                MnMs’ Scope 2025 is the inaugural Company Visit initiative of The 20   Metallurgy and Materials Week. It aims to provide participants with direct exposure to the metallurgy and materials industry’s transformation toward sustainability.
                            </p>
                            <div className="w-[90%] flex flex-row justify-between">
                                {/* <AnimatedButton label="Register Here" className="z-10 h-fit" /> */}
                                <Button className="cursor-pointer z-20 w-[200px] h-[40px]  rounded-full border border-[rgba(253,255,245,0)] bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.1)] to-[rgba(253,255,245,0)] shadow-[0px_4.474px_16.778px_0px_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] text-[#FBFAF7] text-[18px]/[24px] md:text-[24px]/[31.104px] font-[800] mr-0 md:mr-[20px] hover:bg-white hover:text-black transition-all duration-300">
                                    Register Here
                                </Button>
                                <Image
                                    src="/images/company-visit/cp.png"
                                    alt="Contact Person"
                                    width={321}
                                    height={120}
                                    className="object-contain scale-[1.1]"
                                />
                            </div>
                        </div>

                        <div className="w-2/5 z-20 h-full flex flex-col items-center justify-center">
                            <div className="w-[525px] h-[306px] relative">
                                <Image
                                    src="/images/company-visit/united-tractors.png"
                                    alt="United Tractors"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center justify-between w-full gap-5 mt-5">
                                    <Image
                                        src="/images/company-visit/date.png"
                                        alt="Date"
                                        width={273}
                                        height={48}
                                        className="object-contain"
                                    />
                                    <Image
                                        src="/images/company-visit/fee.png"
                                        alt="Location"
                                        width={207}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <Image
                                    src="/images/company-visit/venue.png"
                                    alt="Location"
                                    width={418}
                                    height={50}
                                    className="object-contain mt-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full z-0">
                        <BgDown />
                    </div>
                </section>

                <section className="w-full h-[607px] relative pt-10">
                    <div className="absolute top-0 left-0 w-full z-0">
                        <GlassTop2 />
                    </div>

                    <div className="absolute top-[-120px] w-full left-0 z-10">
                        <Star2 />
                    </div>

                    <div className="flex z-20 justify-center items-center mb-16">
                        <h1 className="text-[#F9F9F9] text-center text-[84.02px] font-extrabold leading-[87.801px] tracking-[0.84px] z-10">
                            Company Profile
                        </h1>
                    </div>

                    <div className="flex flex-row w-full h-full items-center px-[55px] gap-10">
                        <div className="w-2/5 z-20 h-full flex flex-col items-center justify-start">
                            <div className="w-[485px] h-[240px] relative">
                                <Image
                                    src="/images/company-visit/united-tractors-logo.png"
                                    alt="Hero Image"
                                    fill
                                    className="object-contain scale-[2.15] translate-y-[2%]"
                                    priority
                                />
                            </div>
                            <p className="text-white z-10 text-center text-[40px] font-extrabold leading-normal tracking-[0.4px]">
                                PT. United Tractors
                            </p>
                        </div>
                        <div className="w-3/5 h-full flex flex-col items-center justify-start gap-8 z-10">
                            <p className="text-white text-[24px] font-normal leading-[120%] text-justify">
                                PT United Tractors Tbk is the leading and largest heavy equipment distributor in Indonesia, boasting a diversified business portfolio across five key segments: Construction Machinery, Mining Contracting, Mining, Construction Industry, and Energy.
                            </p>
                            <p className="text-white text-[24px] font-normal leading-[120%] text-justify">
                                The company strongly adheres to the &ldquo;Moving as One&rdquo; tagline and holds a powerful aspiration toward sustainability by 2030, committing to becoming a resilient and sustainable entity through the integrated implementation of ESG (Environmental, Social, and Governance) practices across all its operations.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full h-[607px] relative">

                    <div className="absolute top-[-200px] w-full left-0 z-20">
                        <Star3 />
                    </div>

                    <div className="flex flex-col z-30 justify-center items-center">
                        <h1 className="text-[#F9F9F9] text-center text-[50px] font-extrabold leading-[52.25px] tracking-[0.5px]">
                            Assembly point
                        </h1>
                        <div className="w-[1131px] h-[7px] flex-shrink-0 rounded-[9px] bg-[#F9F9F9] mt-5" />
                        <div className="w-[1145px] h-[252px] z-30 relative">
                            <Image
                                src="/images/company-visit/dtk-ft.png"
                                alt="Departemen Teknik Kimia FTUI"
                                fill
                                className="object-contain scale-[2.5] translate-y-[16%]"
                                priority
                            />
                        </div>
                        <div className="w-[1230px] h-[68px] z-30 mt-10 relative">
                            <Image
                                src="/images/company-visit/ap-detail.png"
                                alt="Departemen Teknik Kimia FTUI"
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-row items-center gap-10 mt-10">
                            <p className="text-[#F9F9F9] text-center text-[45px] font-extrabold leading-[47.025px] tracking-[0.45px]">
                                Facilities:
                            </p>
                            <div className="w-[152px] h-[64px] flex items-center justify-center border border-[rgba(253,255,245,0.00)] bg-[linear-gradient(90deg,rgba(253,255,245,0.00)_0%,rgba(253,255,245,0.10)_52.4%,rgba(253,255,245,0.00)_100%)] shadow-[0_4.474px_16.778px_0_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] rounded-[20px_0]">
                                <p className="text-center text-[34.65px] font-bold leading-[63.56px]
                                                bg-[linear-gradient(270deg,#DFE00D_0%,#25B8B6_100%)] bg-clip-text text-transparent
                                                [text-shadow:0_7.401px_4.934px_rgba(0,0,0,0.25)]">
                                    Meals
                                </p>
                            </div>
                            <div className="w-[371px] h-[48px] flex items-center justify-center border border-[rgba(253,255,245,0.00)] bg-[linear-gradient(90deg,rgba(253,255,245,0.00)_0%,rgba(253,255,245,0.10)_52.4%,rgba(253,255,245,0.00)_100%)] shadow-[0_4.474px_16.778px_0_rgba(0,0,0,0.35)] backdrop-blur-[36.560386657714844px] rounded-[20px_0]">
                                <p className="text-center text-[34.65px] font-bold leading-[63.56px]
                                                bg-[linear-gradient(270deg,#DFE00D_0%,#25B8B6_100%)] bg-clip-text text-transparent
                                                [text-shadow:0_7.401px_4.934px_rgba(0,0,0,0.25)]">
                                    Transportation (Bus)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 z-10">
                        <Image
                            src="/images/company-visit/ellipse-2.png"
                            alt="Ellipse Decoration"
                            width={547}
                            height={363}
                        />
                    </div>
                </section>
                <Contact />
            </div>
        </>
    );
};

export default CompanyVisitPage;