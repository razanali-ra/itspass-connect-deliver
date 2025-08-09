import { Truck, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-glow text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold">ITS PASS</h3>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
              Revolutionizing delivery services by connecting drivers, stores, and customers 
              through innovative mobile applications.
            </p>
            <div className="flex flex-col gap-3 text-white/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Serving Communities Worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>support@itspass.com</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Apps */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Apps</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Driver App</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Store App</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">User App</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">
            © 2024 ITS PASS. All rights reserved. | Built with ❤️ for better delivery experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};