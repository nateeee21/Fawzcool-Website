import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      location: "Lagos",
      role: "Homeowner",
      rating: 5,
      text: "Excellent service! The team installed our new AC system professionally and efficiently. The cooling performance is outstanding, and their customer service is top-notch.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatima Al-Hassan",
      location: "Abuja",
      role: "Business Owner",
      rating: 5,
      text: "Fawzcool Ltd handles all our office HVAC needs. Their maintenance service is reliable, and they respond quickly to any issues. Highly recommended for commercial properties.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332b1a8?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Chukwudi Okoro",
      location: "Port Harcourt",
      role: "Hotel Manager",
      rating: 5,
      text: "We've been using their services for our hotel for 3 years. Professional, punctual, and their 24/7 emergency service has saved us many times during peak season.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Amina Ibrahim",
      location: "Kano",
      role: "Homeowner",
      rating: 5,
      text: "Outstanding repair service! My AC broke down during the hottest day of the year, and they had a technician at my house within 2 hours. Fixed it perfectly!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emeka Nwosu",
      location: "Lagos",
      role: "Restaurant Owner",
      rating: 5,
      text: "Their ventilation system installation transformed our restaurant kitchen. The air quality is much better, and our staff are more comfortable. Great job!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Kemi Adebisi",
      location: "Ibadan",
      role: "School Administrator",
      rating: 5,
      text: "They installed AC systems in our school during the holidays. The work was completed on time, within budget, and the classrooms are now perfectly comfortable.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 cool-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            What Our <span className="text-brand-purple">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individuals to large corporations, hear what our satisfied clients across Nigeria 
            have to say about Fawzcool Ltd's professional HVAC services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary mb-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;