import { Users, Building2, GraduationCap, Building, Factory, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ClientCategories = () => {
  const clientCategories = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Individuals",
      description: "Residential air conditioning solutions for homes and apartments. We provide personalized service with flexible scheduling and affordable maintenance plans.",
      features: ["Home AC installation", "Personal maintenance plans", "Emergency home repairs", "Energy-efficient recommendations"],
      bgColor: "bg-gradient-to-br from-primary/10 to-brand-purple/10"
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Small Businesses",
      description: "Keep your workplace comfortable and productive with our commercial AC solutions designed for small to medium enterprises.",
      features: ["Office AC systems", "Retail space cooling", "Restaurant ventilation", "Cost-effective maintenance"],
      bgColor: "bg-gradient-to-br from-brand-orange/10 to-secondary/10"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Schools & Universities",
      description: "Educational institutions require reliable climate control. We provide comprehensive HVAC solutions for optimal learning environments.",
      features: ["Classroom cooling systems", "Library climate control", "Dormitory AC solutions", "Energy-efficient designs"],
      bgColor: "bg-gradient-to-br from-success/10 to-primary/10"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Banks & Financial Institutions",
      description: "Critical environments need reliable climate control. We ensure your financial operations run smoothly with professional HVAC systems.",
      features: ["Server room cooling", "Branch office AC", "ATM climate control", "24/7 maintenance support"],
      bgColor: "bg-gradient-to-br from-brand-purple/10 to-brand-orange/10"
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Industrial & Large Companies",
      description: "Large-scale HVAC solutions for industrial facilities, corporate offices, and manufacturing plants with comprehensive maintenance programs.",
      features: ["Industrial ventilation", "Large-scale AC systems", "Preventive maintenance", "Custom HVAC design"],
      bgColor: "bg-gradient-to-br from-primary/10 to-success/10"
    }
  ];

  return (
    <section id="clients" className="py-20 cool-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-brand-purple">Our</span> <span className="text-brand-orange">Valued</span> Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individual homeowners to large corporations, Fawzcool Ltd provides tailored HVAC solutions 
            for every type of client across Nigeria's diverse business landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {clientCategories.map((category, index) => (
            <div key={index} className={`rounded-2xl p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-2 ${category.bgColor} border border-border`}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-brand-purple text-white">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {category.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full group hover:bg-primary hover:text-white transition-all">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to action for potential clients */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-medium">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-brand-purple">Ready to Join</span> <span className="text-brand-orange">Our Clients?</span>
          </h3>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Whether you're a homeowner, business owner, or facility manager, 
            we have the expertise and solutions to meet your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8">
              Get Custom Quote
            </Button>
            <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCategories;