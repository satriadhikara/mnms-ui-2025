import HeroSection from "@/components/iic/heroSection";
import ThemeSection from "@/components/iic/themeSection";
import HighlightsSection from "@/components/iic/highlightsSection";
import RoadmapSection from "@/components/iic/roadmapSection";
import Contact from "@/components/iic/Contact";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const InnovativeInfographicCompetitionPage = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <ThemeSection />
      <HighlightsSection />
      <RoadmapSection />
      <Contact />
    </div>
  );
};

export default InnovativeInfographicCompetitionPage;