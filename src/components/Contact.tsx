import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your HVAC needs.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+234 800 FAWZ COOL", "+234 708 477 8136"],
      description: "24/7 Emergency Line Available"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@fawzcool.com", "sales@fawzcool.com"],
      description: "We respond within 2 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["15A Sunflower Street Alausa - Agindingbi Ikeja Lagos"],
    
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 8AM - 6PM", "Sat: 9AM - 4PM"],
      description: "Emergency service 24/7"
    }
  ];

  const serviceAreas = [
    "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Kaduna", "Jos", "Benin City"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-brand-purple">Get In</span> <span className="text-brand-orange">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience professional HVAC services from Fawzcool Ltd? Contact us today for a free consultation 
            and customized quote. Our experts are ready to serve individuals, businesses, schools, banks, and industrial clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="p-6 rounded-xl bg-accent">
                  <div className="text-primary mb-3">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                  ))}
                  <p className="text-xs text-primary mt-2">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-gradient-to-r from-brand-purple to-brand-orange rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Service Areas</h4>
              <p className="mb-4 text-white/90">
                Fawzcool Ltd provides professional HVAC services across Nigeria's major cities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/80 mt-4">
                * Additional locations available upon request
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-accent rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+234 800 000 0000"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="installation">AC Installation</option>
                      <option value="maintenance">AC Maintenance & Retaining</option>
                      <option value="repair">AC Repair & Fixing</option>
                      <option value="ventilation">Ventilation System</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Location
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    >
                      <option value="">Select your city</option>
                      {serviceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your HVAC needs, client type (individual, business, school, bank, industrial), preferred schedule, or any specific requirements..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Send Request
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                * We'll respond within 24 hours with a detailed quote and available appointment times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;