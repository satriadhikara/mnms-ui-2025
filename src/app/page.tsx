import HeroSection from "@/components/landingPage/heroSection";
import ThemeSection from "@/components/landingPage/themeSection";
import EventSection from "@/components/landingPage/eventSection";
import Contact from "@/components/about-us/Contact";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const LandingPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Image
        src="/Ellipse.png"
        alt="Hero Section Background"
        width={700}
        height={900}
        className="absolute top-0 right-0 z-10"
      />
      <HeroSection />
      <ThemeSection />
      <EventSection />
      <Contact />
    </div>
  );
};

export default LandingPage;
