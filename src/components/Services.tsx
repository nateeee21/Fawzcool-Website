import { Wrench, Settings,Thermometer, CheckCircle, ArrowRight, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import acServiceImage from '@/assets/ac-service.jpg';

const Services = () => {
  const services = [
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Installation of AC & Ventilation Systems",
      description: "Expert installation of residential and commercial air conditioning systems. We work with top brands and energy-efficient units to ensure optimal performance and longevity.",
      features: ["Free site assessment", "Energy-efficient units", "Professional installation", "3-year warranty", "Post-installation support"],
      details: "Our certified technicians handle complete AC installations from small residential units to large commercial systems."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "AC Maintenance & Retaining",
      description: "Comprehensive maintenance and retaining services to keep your air conditioning systems running at peak efficiency and extend their lifespan.",
      features: ["Scheduled maintenance", "System cleaning", "Filter replacement", "Performance optimization", "Preventive checks"],
      details: "Regular maintenance prevents costly breakdowns and ensures your AC system operates efficiently year-round."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "AC Repair & Fixing",
      description: "24/7 emergency repair and fixing services for all air conditioning brands and models. Quick diagnosis and reliable solutions.",
      features: ["24/7 emergency service", "All brands supported", "Quick diagnosis", "Genuine parts only", "Same-day repairs"],
      details: "Our experienced technicians can fix any AC issue, from minor repairs to major component replacements."
    },
    {
      icon: <SunIcon className="h-8 w-8" />,
      title: "Deploying Solar Powered Solutions",
      description: "Providing reliable and eco-friendly solar energy systems that reduce costs, cut carbon emissions, and ensure uninterrupted power for homes, businesses, and industries.",
      features: ["Eco-Friendly", "Industrial grade systems", "High Efficiency Panel", "Smart Integration", "Energy-efficient solutions"],
      details: "Our expert technicians design and deploy reliable solar systems tailored to your needs."
    }
  ];

  return (
    <section id="services" className="py-20 cool-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-brand-purple">Professional</span> <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fawzcool Ltd provides comprehensive air conditioning, ventilation & Solar-Powered solutions. 
            Expert installation, maintenance, retaining, and repair services across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-brand-purple to-brand-orange text-white">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-muted-foreground mb-3">{service.description}</p>
                  <p className="text-sm text-brand-purple font-medium">{service.details}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Button variant="outline" className="group-hover:bg-brand-purple group-hover:text-white transition-all border-brand-purple text-brand-purple">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-brand-purple to-brand-orange rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Need Emergency HVAC Service?</h3>
          <p className="text-xl mb-8 text-white/90">
            Fawzcool Ltd's certified technicians are available 24/7 for emergency repairs across Lagos, Abuja, and major Nigerian cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-purple hover:bg-gray-100 font-semibold">
              Call Emergency Line
            </Button>
            <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-purple font-semibold">
              Schedule Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;