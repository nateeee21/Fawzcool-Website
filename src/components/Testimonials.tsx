import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      location: "Lagos",
      role: "Homeowner",
      rating: 5,
      text: "Excellent service! Professional installation and outstanding cooling performance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatima Al-Hassan",
      location: "Abuja",
      role: "Business Owner",
      rating: 5,
      text: "Reliable maintenance service and quick response to any issues.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332b1a8?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Chukwudi Okoro",
      location: "Port Harcourt",
      role: "Hotel Manager",
      rating: 5,
      text: "Professional service for 3 years. Their 24/7 support is invaluable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Amina Ibrahim",
      location: "Kano",
      role: "Homeowner",
      rating: 5,
      text: "Outstanding emergency repair! Technician arrived in 2 hours and fixed it perfectly.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emeka Nwosu",
      location: "Lagos",
      role: "Restaurant Owner",
      rating: 5,
      text: "Excellent ventilation installation. Better air quality and comfort.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Kemi Adebisi",
      location: "Ibadan",
      role: "School Administrator",
      rating: 5,
      text: "Completed on time and within budget. Classrooms are perfectly comfortable now.",
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
            Hear what our satisfied clients say about our HVAC services.
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

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;