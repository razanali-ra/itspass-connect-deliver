import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Download } from "lucide-react";

interface AppCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  googlePlayUrl: string;
  appStoreUrl: string;
  gradient: string;
}

export const AppCard = ({ title, description, icon, googlePlayUrl, appStoreUrl, gradient }: AppCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-up">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      <CardContent className="p-8 relative">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 group-hover:animate-pulse-glow transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-4">
          <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button 
              variant="outline" 
              className="w-full justify-start gap-3 h-12 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Google Play Store
            </Button>
          </a>
          
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button 
              variant="outline"
              className="w-full justify-start gap-3 h-12 border-secondary/20 hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
            >
              <Smartphone className="w-5 h-5" />
              Apple App Store
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};