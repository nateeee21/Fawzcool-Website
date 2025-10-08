import { ArrowLeft, Calendar, User, Clock, TrendingUp, AlertTriangle, Lightbulb, ThermometerSun, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';


const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "2024 HVAC Industry Trends: Smart Systems Leading the Way",
      excerpt: "Discover how IoT integration and smart thermostats are revolutionizing the HVAC industry in Nigeria and worldwide.",
      author: "Fawzcool Technical Team",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Industry Trends",
      image: "/placeholder.svg",
      featured: true,
      tags: ["Smart HVAC", "IoT", "Technology", "2024 Trends"]
    },
    {
      id: 2,
      title: "Energy Efficiency: How to Reduce Your AC Bills by 40%",
      excerpt: "Learn practical tips and strategies to significantly reduce your air conditioning costs while maintaining optimal comfort.",
      author: "Fawzcool Technical Team", 
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Energy Saving",
      image: "/placeholder.svg",
      featured: true,
      tags: ["Energy Efficiency", "Cost Saving", "Tips", "Maintenance"]
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Common AC Mistakes That Could Damage Your Unit",
      excerpt: "Avoid these costly mistakes that many homeowners make when operating their air conditioning systems.",
      author: "Fawzcool Technical Team",
      date: "December 8, 2024", 
      readTime: "4 min read",
      category: "Do's & Don'ts",
      tags: ["Maintenance", "Common Mistakes", "AC Care"]
    },
    {
      id: 4,
      title: "The Ultimate Guide to AC Filter Maintenance",
      excerpt: "Everything you need to know about cleaning, replacing, and maintaining your air conditioning filters for optimal performance.",
      author: "Fawzcool Technical Team",
      date: "December 5, 2024",
      readTime: "6 min read", 
      category: "Maintenance Tips",
      tags: ["Filters", "DIY", "Maintenance", "Performance"]
    },
    {
      id: 5,
      title: "Choosing the Right AC Size for Your Nigerian Home",
      excerpt: "Learn how to calculate the perfect air conditioning capacity for Nigeria's climate and typical home sizes.",
      author: "Fawzcool Technical Team",
      date: "December 3, 2024",
      readTime: "5 min read",
      category: "Buying Guide", 
      tags: ["AC Selection", "BTU", "Home Sizing", "Nigeria Climate"]
    },
    {
      id: 6,
      title: "Ventilation Best Practices for Office Buildings",
      excerpt: "Essential ventilation strategies for maintaining healthy indoor air quality in commercial spaces.",
      author: "Fawzcool Technical Team",
      date: "November 30, 2024",
      readTime: "8 min read",
      category: "Commercial HVAC",
      tags: ["Ventilation", "Office", "Air Quality", "Commercial"]
    },
    {
      id: 7,
      title: "Signs Your AC Needs Professional Repair", 
      excerpt: "Recognize these warning signs early to prevent costly breakdowns and extend your AC's lifespan.",
      author: "Fawzcool Technical Team",
      date: "November 28, 2024",
      readTime: "3 min read",
      category: "Troubleshooting",
      tags: ["Repair Signs", "Troubleshooting", "Maintenance", "Professional Service"]
    },
    {
      id: 8,
      title: "Seasonal HVAC Maintenance Checklist",
      excerpt: "Stay ahead of problems with our comprehensive seasonal maintenance checklist for all HVAC systems.",
      author: "Fawzcool Technical Team", 
      date: "November 25, 2024",
      readTime: "6 min read",
      category: "Maintenance Tips",
      tags: ["Seasonal Care", "Checklist", "Preventive Maintenance", "HVAC Care"]
    }
  ];

  const categories = [
    { name: "Industry Trends", count: 12, icon: TrendingUp },
    { name: "Energy Saving", count: 8, icon: Zap },
    { name: "Do's & Don'ts", count: 15, icon: AlertTriangle },
    { name: "Maintenance Tips", count: 20, icon: Lightbulb },
    { name: "Buying Guide", count: 6, icon: ThermometerSun }
  ];

  const quickTips = [
    "Set your thermostat to 25°C for optimal energy efficiency in Nigeria's climate",
    "Clean or replace AC filters every 1-2 months during heavy usage periods", 
    "Keep vents unblocked for proper airflow and system efficiency",
    "Schedule professional maintenance twice a year for best performance",
    "Use ceiling fans to circulate air and reduce AC workload"
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
            HVAC <span className="text-brand-purple">Knowledge</span> Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest HVAC trends, maintenance tips, and industry insights from our experts.
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-brand-orange" />
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-purple/20">
                <div className="aspect-video bg-gradient-to-br from-brand-purple/10 to-brand-orange/10 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-2">📰</div>
                    <p className="text-sm">Featured Article</p>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                      {post.category}
                    </Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full btn-hero">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border hover:border-brand-purple/30">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="text-xs text-muted-foreground">{post.date}</div>
                    </div>
                    <CardTitle className="text-xl hover:text-brand-purple transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-brand-purple hover:text-brand-purple/80">
                        Read More →
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <IconComponent className="h-4 w-4 mr-2 text-brand-purple" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-to-br from-brand-purple/5 to-brand-orange/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-brand-orange" />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-brand-purple/10 to-brand-orange/10">
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest HVAC tips and industry insights delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                />
                <Button className="w-full btn-hero">
                  Subscribe
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center mt-16 py-12 bg-gradient-to-r from-brand-purple/10 to-brand-orange/10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Need Professional HVAC Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Our experts are ready to help with installation, maintenance, and repair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline">
              View Our Services
            </Button>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Blog;