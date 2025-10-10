import { Wrench, Settings, Wind, Thermometer, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import acServiceImage from '@/assets/ac-service.jpg';

const Services = () => {
  const services = [
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "AC Installation",
      description: "Expert installation of residential and commercial air conditioning systems with top brands and energy-efficient units.",
      features: ["Free assessment", "Energy-efficient", "3-year warranty"],
      details: "Complete AC installations from small residential to large commercial systems."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "AC Maintenance",
      description: "Comprehensive maintenance services to keep your AC running efficiently and extend lifespan.",
      features: ["Scheduled maintenance", "Filter replacement", "Performance optimization"],
      details: "Regular maintenance prevents costly breakdowns year-round."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "AC Repair",
      description: "24/7 emergency repair services for all AC brands. Quick diagnosis and reliable solutions.",
      features: ["24/7 emergency", "All brands", "Same-day repairs"],
      details: "Experienced technicians fix any AC issue with genuine parts."
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Ventilation Systems",
      description: "Design and installation of ventilation systems for optimal air quality in any environment.",
      features: ["Custom design", "Air quality testing", "Energy-efficient"],
      details: "Tailored ventilation for homes, offices, and industrial spaces."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 cool-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            <span className="text-brand-purple">Professional</span> HVAC <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Expert HVAC solutions for residential and commercial needs across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-brand-purple to-brand-orange text-white flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-3">{service.description}</p>
                  <p className="text-xs md:text-sm text-brand-purple font-medium">{service.details}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 md:gap-3 mb-4 md:mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-orange flex-shrink-0" />
                    <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
                <Button variant="outline" className="group-hover:bg-brand-purple group-hover:text-white transition-all border-brand-purple text-brand-purple text-sm md:text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white text-sm md:text-base">
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-brand-purple to-brand-orange rounded-xl md:rounded-2xl p-6 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Emergency Service?</h3>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-white/90">
            Available 24/7 for emergency repairs across major Nigerian cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button className="bg-white text-brand-purple hover:bg-gray-100 font-semibold text-sm md:text-base">
              Call Emergency Line
            </Button>
            <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-purple font-semibold text-sm md:text-base">
              Schedule Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;