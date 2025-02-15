import HeroSection from "@/components/HeroSection";
import MissionVisionSection from "@/components/MissionVisionSection";

import RegistrationSections from "@/components/RegistrationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      <MissionVisionSection />

      <RegistrationSections />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}


// Footer Component
const Footer = () => (
  <footer className="py-8 bg-gray-50 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} IntoWine Consult. All rights reserved.
    <br />
    Contact us:{" "}
    <a href="mailto:info@intowineconsult.com" className="text-indigo-600 hover:underline">
      info@intowineconsult.com
    </a>
  </footer>
);
