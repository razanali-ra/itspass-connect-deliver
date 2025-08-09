import { HeroSection } from "@/components/ui/hero-section";
import { AppsSection } from "@/components/ui/apps-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AppsSection />
      <Footer />
    </div>
  );
};

export default Index;
