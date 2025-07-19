import HeroSection from "@/components/landingPage/heroSection";
import ThemeSection from "@/components/landingPage/themeSection";
import EventSection from "@/components/landingPage/eventSection";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const LandingPage = () => {
  return (
    <div className="relative">
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
      {/* Add other sections as needed */}
    </div>
  );
};

export default LandingPage;
