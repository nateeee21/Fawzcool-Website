import { Users, Award, MapPin, Clock } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "5000+", label: "Happy Clients", color: "text-brand-purple" },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: "Years Experience", color: "text-brand-orange" },
    { icon: <MapPin className="h-8 w-8" />, number: "25+", label: "Cities Served", color: "text-primary" },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Emergency Service", color: "text-success" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              About <span className="text-brand-purple">Fawz</span><span className="text-brand-orange">cool</span> Ltd
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For 15+ years, Fawzcool Ltd has delivered professional HVAC services across Nigeria. 
              Energy-efficient cooling and ventilation for homes, businesses, and industrial facilities.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Certified technicians combining international best practices with local expertise.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-accent">
                  <div className={`${stat.color} mb-3 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image and values */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-large mb-8">
                <img
                  src={teamPhoto}
                  alt="Fawzcool Ltd professional HVAC team"
                  className="w-full h-[400px] object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Expert Team</h3>
                <p className="text-white/90">Certified HVAC professionals</p>
              </div>
            </div>

            {/* Our values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-brand-purple/5">
                <div className="w-2 h-2 rounded-full bg-brand-purple mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality First</h4>
                  <p className="text-muted-foreground">Premium equipment and highest service standards.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-brand-orange/5">
                <div className="w-2 h-2 rounded-full bg-brand-orange mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Client Satisfaction</h4>
                  <p className="text-muted-foreground">Your comfort is our priority with personalized solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-success/5">
                <div className="w-2 h-2 rounded-full bg-success mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Reliable Service</h4>
                  <p className="text-muted-foreground">24/7 availability with prompt response times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;