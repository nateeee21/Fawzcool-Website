import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "AC Installation", href: "#services" },
    { name: "AC Maintenance & Repair", href: "#services" },
    { name: "Solar Powered Solutions", href: "#services" },
    { name: "Ventilation & Heating Systems", href: "#services" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-brand-orange">Fawz</span><span className="text-white">cool</span> <span className="text-brand-purple">Ltd</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nigeria's trusted HVAC service provider. Serving individuals, businesses, schools, banks, 
              and industrial clients with professional cooling and ventilation solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-brand-purple hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-brand-orange transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-purple mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>15A Sunflower Street Alausa - Agindingbi Ikeja</p>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+234 800 FAWZ COOL</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-success flex-shrink-0" />
                <div className="text-gray-300">
                  <p>info@fawzcool.com</p>
                  <p className="text-sm text-gray-400">Response within 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © {currentYear} Fawzcool Ltd. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Licensed & Insured HVAC Contractors
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-brand-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple transition-colors">
                Warranty Information
              </a>
            </div>
          </div>
        </div>

        {/* Emergency banner */}
        <div className="mt-8 bg-gradient-to-r from-brand-purple to-brand-orange rounded-xl p-6 text-center">
          <h4 className="text-xl font-bold mb-2">24/7 Emergency HVAC Service</h4>
          <p className="text-white/90 mb-4">
            HVAC emergency? Don't worry! Fawzcool Ltd's certified technicians are available round the clock for all client types.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+234800FAWZCOOL"
              className="bg-white text-brand-purple px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Emergency Line: +234 800 FAWZ COOL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;