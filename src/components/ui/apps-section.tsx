import { AppCard } from "@/components/ui/app-card";
import { Truck, Store, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import appShowcase from "@/assets/app-showcase.jpg";

export const AppsSection = () => {
  const apps = [
    {
      title: "Driver App",
      description: "Empower your delivery drivers with real-time navigation, order management, and earnings tracking. Streamline deliveries with our intuitive driver interface.",
      icon: <Truck className="w-8 h-8 text-white" />,
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.itspass_driver",
      appStoreUrl: "https://apps.apple.com/us/app/its-pass-driver/id6747925658",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Store App", 
      description: "Manage your business efficiently with order processing, inventory management, and customer insights. Perfect for restaurants and retail stores.",
      icon: <Store className="w-8 h-8 text-white" />,
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.itspass_store",
      appStoreUrl: "https://apps.apple.com/us/app/its-pass-store/id6747616984",
      gradient: "from-secondary to-delivery-orange"
    },
    {
      title: "User App",
      description: "Order from your favorite stores with ease. Track deliveries in real-time, enjoy seamless payments, and discover new local businesses.",
      icon: <Users className="w-8 h-8 text-white" />,
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.csc.itspass",
      appStoreUrl: "https://apps.apple.com/jo/app/its-pass/id6747716963",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="apps-section" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Applications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three powerful applications designed to revolutionize your delivery experience. 
            Available on both iOS and Android platforms.
          </p>
        </div>

        {/* App Showcase Image */}
        <div className="mb-20 flex justify-center">
          <div className="relative max-w-4xl">
            <img 
              src={appShowcase} 
              alt="ITS PASS Mobile Applications" 
              className="w-full h-auto rounded-3xl shadow-2xl animate-float"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl" />
          </div>
        </div>
        
        {/* Apps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {apps.map((app, index) => (
            <div 
              key={app.title} 
              className="animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <AppCard {...app} />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-xl border border-border/50">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of users, drivers, and store owners who trust ITS PASS 
              for their delivery needs. Download our apps today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Download Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};