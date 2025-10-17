import { ArrowLeft, Calendar, MapPin, Star, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Corporate Building - Owerri",
      location: "Imo, Nigeria",
      date: "August 2025",
      category: "Commercial",
      image: "/placeholder.svg",
      description: "Handled the complete HVAC rework project, which involved installation and fabrication works — including the supply and installation of refrigerant and condensate pipes.",
      status: "Completed",
      duration: "1 month",
      services: ["Installation", "Fabrication", "Ventilation"]
    },
    {
      id: 2,
      title: "University Campus Cooling System",
      location: "Lagos, Nigeria",
      date: "January 2024",
      category: "Educational",
      image: "/placeholder.svg",
      description: "Installation of energy-efficient cooling systems across multiple buildings in the university campus.",
      client: "University of Lagos",
      status: "Completed",
      duration: "4 months",
      services: ["Installation", "Energy Optimization",]
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-brand-purple transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-brand-purple">Projects</span> & <span className="text-brand-orange">Deals</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our successful HVAC projects and discover current deals for your cooling and ventilation needs.
          </p>
        </div>

        {/* Past Projects Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Badge variant="secondary" className="text-sm">
              {projects.length} Completed Projects
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-purple/20">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-brand-purple/10 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-2">🏢</div>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-brand-orange" />
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Services Provided:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <Badge key={service} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* Call to Action */}
        <section className="text-center mt-16 py-12 bg-gradient-to-r from-brand-purple/10 to-brand-orange/10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Join our satisfied clients and experience professional HVAC solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              Request Quote
            </Button>
            <Button size="lg" variant="outline">
              View All Services
            </Button>
          </div>
        </section>
      </main>

    
    </div>
  );
};

export default Projects;