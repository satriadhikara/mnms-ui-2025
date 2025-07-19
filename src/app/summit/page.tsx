import HeroSection from "@/components/mnmsSummit/heroSection";
import ThemeSection from "@/components/mnmsSummit/themeSection";
import AcaraSection from "@/components/mnmsSummit/acaraSection";
import Contact from "@/components/about-us/Contact";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const SummitPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black relative overflow-hidden">
        <Image
          src="/IconStar4.png"
          alt="Icon Star"
          width={200}
          height={200}
          className="absolute top-122 left-0 lg:left-10 z-5 "
        />
        <Image
          src="/CSCStar15.png"
          alt="Icon Star"
          width={200}
          height={200}
          className="absolute bottom-250 right-0 z-50"
        />
        <Image
          src="/CSCStar17.png"
          alt="Icon Star"
          width={150}
          height={150}
          className="absolute bottom-120 left-0 z-50"
        />
        <HeroSection />
        <ThemeSection />
        <AcaraSection />
        <Contact />
      </div>
    </>
  );
};

export default SummitPage;