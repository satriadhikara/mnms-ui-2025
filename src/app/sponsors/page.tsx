import Navbar from "@/components/Navbar";
import Contact from "@/components/sponsors/Contact";
import GlassTop from "@/components/sponsors/GlassTop";
import GlassDown from "@/components/sponsors/GlassDown";
import Star1 from "@/components/sponsors/Star1";
import Image from "next/image";

const SponsorsPage = () => {
    const sponsorLogos = [
        { src: 'logo-mind-id.png', width: 350, height: 105 },
        { src: 'logo-rgd.png', width: 85, height: 85 },
        { src: 'logo-harita-nickel.png', width: 160, height: 65 },
    ];

    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-[#050300]">
                <section className="relative w-full h-[606px]">
                    <div className="absolute top-0 left-0 w-full z-0">
                        <GlassTop />
                    </div>
                    <div className="absolute top-0 left-0 w-full z-20">
                        <Star1 />
                    </div>
                    <div className="absolute right-0 top-0 z-10">
                        <Image
                            src="/Ellipse-s-r.png"
                            alt="Sponsor Decoration"
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="absolute top-0 left-0 z-10">
                        <Image
                            src="/Ellipse-s-l.png"
                            alt="Sponsor Decoration"
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center mt-28">
                            <Image
                                src="/logo-au.png"
                                alt="Logo MnMs 2025"
                                width={500}
                                height={500}
                            />
                            <div className="flex flex-col w-[766px] text-start gap-[40px] ">
                                <div className="z-10">
                                    <h1 className="text-[75px]/[100px] font-extrabold tracking-[0.75px] text-[#F9F9F9] font-stylistic-alternates " >
                                        Introducing Our 
                                    </h1>
                                    <h1 className="bg-gradient-to-r from-[#25B8B6] to-[#DFE00D] bg-clip-text text-transparent 
                                                    font-extrabold font-stylistic-alternates
                                                    text-[103.112px]/[100px] tracking-[1.031px]" >
                                        Sponsorships!
                                    </h1>
                                </div>
                                <div className="w-[488px] h-[44px] shrink-0 z-10
                                                rounded-[48.511px] border border-[1.492px] border-transparent 
                                                bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.10)] to-[rgba(253,255,245,0)] 
                                                shadow-[0_4.474px_16.778px_rgba(0,0,0,0.35)] 
                                                backdrop-blur-[36.560386657714844px]
                                                flex items-center justify-center p-1">
                                    <p className="w-[472px] h-[29px] shrink-0 
                                                    text-[#FBFAF7] text-center
                                                    text-[24px]/[129.6%]">
                                        The 20th Metallurgy & Materials’ Week
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="relative flex flex-col items-center justify-start w-full h-[606px]">
                    <div className="flex flex-col items-center justify-start">
                        <h1 className="text-[#F9F9F9] text-center 
                                        font-extrabold italic 
                                        text-[38px]/[55px] tracking-[0.38px]">
                            Thank You to,
                        </h1>
                        <h1 className="text-[#F9F9F9] 
                                        font-extrabold
                                        text-[52.25px]/[55px] tracking-[0.523px]">
                            All Our Sponsor Partnership
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-startr items-start gap-8 w-[1102px] h-[378.775px] mt-10 p-8
                                    rounded-[46.086px] border border-[1.418px] border-transparent
                                    bg-gradient-to-r from-[rgba(253,255,245,0)] via-[rgba(253,255,245,0.10)] to-[rgba(253,255,245,0)]
                                    shadow-[0_4.25px_15.939px_rgba(0,0,0,0.35),0_4.25px_15.939px_rgba(0,0,0,0.35)]
                                    backdrop-blur-[34.73236846923828px] z-10">
                        {sponsorLogos.map((logo, index) => (
                            <div key={index} className="h-20 flex items-center justify-center">
                                <Image
                                    src={`/images/sponsors/${logo.src}`}
                                    alt={`Sponsor ${index + 1}`}
                                    width={logo.width}
                                    height={logo.height}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full z-0">
                        <GlassDown />
                    </div>
                </section>
            </div>
            <Contact />
        </>
    );
};

export default SponsorsPage;