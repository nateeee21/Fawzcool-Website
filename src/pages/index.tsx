import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ClientCategories from '@/components/ClientCategories';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Blog from './Blog';
import Projects from './Projects';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
         <section id="Projects">
          <Projects />
        </section>
        <Blog />
        <ClientCategories />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;