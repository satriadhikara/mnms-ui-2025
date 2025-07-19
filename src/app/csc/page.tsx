import HeroSection from "@/components/mnmsCSC/heroSection";
import ThemeSection from "@/components/mnmsCSC/themeSection";
import HighlightSection from "@/components/mnmsCSC/highlightsSection";
import RoadMapSection from "@/components/mnmsCSC/roadmapSection";
import Contact from "@/components/about-us/Contact";

import Navbar from "@/components/Navbar";

const CaseStudyCompetitionPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ThemeSection />
      <HighlightSection />
      <RoadMapSection />
      <Contact />
    </div>
  );
};

export default CaseStudyCompetitionPage;
