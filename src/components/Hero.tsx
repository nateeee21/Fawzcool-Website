import { ArrowRight, Star, Shield, Clock, Bolt, CloudLightning } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '../assets/hero-hvac.jpg';
import fawzcoolLogo from '../assets/fawzcool-logo.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-bg text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">Trusted by 5000+ clients across Nigeria</span>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={fawzcoolLogo} 
                alt="Fawzcool Logo" 
                className="h-16 w-16 object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-3xl lg:text-5xl font-bold tracking-wider text-white">
                  FAWZCOOL
                </h1>
                <p className="text-sm lg:text-base text-white/90">
                  Air Condition | Ventilation | Power Solution
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-brand-orange">Professional</span> HVAC
              <span className="block text-white">Solutions You Can Trust</span>
            </h2>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Fawzcool Ltd delivers reliable air conditioning and ventilation services across Nigeria. 
              From residential to industrial solutions, we provide expert installation, maintenance, 
              retaining, and emergency repairs with certified technicians.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-hero group">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline-hero">
                Get Free Quote
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-sm">Licensed & Insured</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-sm">24/7 Service</div>
              </div>
              <div className="text-center">
                <CloudLightning className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-sm">Reliable Power</div>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Professional HVAC technician installing air conditioning system"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
};

export default Hero;