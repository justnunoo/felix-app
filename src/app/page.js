import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MissionVisionSection from "@/components/MissionVisionSection";

import RegistrationSections from "@/components/RegistrationSection";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      <MissionVisionSection />

      <RegistrationSections />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}


