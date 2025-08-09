import { Button } from "@/components/ui/button";
import { ArrowDown, Truck, Users, Store } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

export const HeroSection = () => {
  const scrollToApps = () => {
    document.getElementById('apps-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ITS PASS Delivery Service" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
              ITS PASS
            </h1>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Connecting Drivers, Stores, and Customers<br />
            <span className="text-secondary font-semibold">Fast. Reliable. Simple.</span>
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-3 text-white/80">
              <Truck className="w-6 h-6 text-primary" />
              <span className="font-medium">Driver App</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Store className="w-6 h-6 text-secondary" />
              <span className="font-medium">Store App</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Users className="w-6 h-6 text-primary" />
              <span className="font-medium">User App</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={scrollToApps}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 animate-pulse-glow"
            >
              Explore Our Apps
              <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};