import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsBanner from "@/components/NewsBanner";
import BioSection from "@/components/BioSection";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import ChemicalBackground from "@/components/ChemicalBackground";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ChemicalBackground />
      <Header />
      <HeroSection />
      <NewsBanner />
      <BioSection />
      <EducationSection />
      <PublicationsSection />
      <ContactSection />
    </div>
  );
}
