import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Headphones, Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(2);
  const totalSlides = 3;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev % totalSlides) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Cinematic */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center overflow-hidden"
      >
        {/* Background Image with Desaturation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: 'grayscale(70%) brightness(0.6)',
          }}
        />
        
        {/* Left to Right Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)',
          }}
        />

        {/* Hero Content - Right Aligned */}
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="w-full flex justify-end">
            <div className="max-w-xl text-right pr-4 md:pr-8 lg:pr-16">
              {/* Apostle Label with Line */}
              <div className="flex items-center justify-end gap-4 mb-8 animate-fade-in">
                <div className="h-[1px] w-16 bg-white/50"></div>
                <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-light">
                  Apostle
                </span>
              </div>

              {/* Large Name Heading */}
              <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white leading-[0.9] tracking-tight">
                  EDWIN
                </span>
                <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white leading-[0.9] tracking-tight mt-2">
                  OTEJIRI
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-8 text-sm md:text-base text-white/60 font-light tracking-wide max-w-md ml-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Proclaiming God's eternal Counsels, bringing many into the realities of Christ
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Left - Watch Live Button */}
        <div className="absolute bottom-12 left-8 md:left-16 z-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://www.youtube.com/@Apostleedwine.otejiri1757" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-white transition-colors duration-300">
              <Play className="h-5 w-5 text-white ml-1" />
            </div>
            <span className="text-xs tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
              Watch Apostle Live
            </span>
          </a>
        </div>

        {/* Bottom Right - Slide Indicator */}
        <div className="absolute bottom-12 right-8 md:right-16 z-10 flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <span className="text-sm text-white/60 font-light tracking-wider">
            {String(currentSlide).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 text-white/60" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 text-white/60" />
            </button>
          </div>
        </div>
      </section>

      {/* Podcast Highlight Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Transforming life true God's enternal Counsel
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of listeners world wild as we in ravel God's enternal counsels and explore timless biblical truth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in">
              <Card className="card-elegant p-8 card-hover">
                <div className="aspect-video bg-gradient-to-br from-primary to-primary-light rounded-lg mb-6 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Featured Episode</h3>
                <p className="text-muted-foreground mb-6">
                  "Walking in Purpose: Discovering God's Plan for Your Life" - A powerful message about finding your divine calling and living with intentionality.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Dec 15, 2024</span>
                  <Button variant="outline" className="group">
                    Listen <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>

            <div className="scroll-fade-in">
              <h3 className="text-3xl font-serif font-bold mb-6">Why Voice of Eternity?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Heart-Centered Messages</h4>
                    <p className="text-muted-foreground">Biblical truths delivered with compassion and practical application for real life.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Easy Access</h4>
                    <p className="text-muted-foreground">Available on all major platforms - Spotify, Apple Podcasts, YouTube, and more.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/episodes">
                  <Button className="btn-secondary group">
                    View All Episodes <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="scroll-fade-in">
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">150+</div>
              <div className="text-white/80">Episodes</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">50K+</div>
              <div className="text-white/80">Monthly Listeners</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">25+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">5</div>
              <div className="text-white/80">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="scroll-fade-in max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of a growing community of believers seeking deeper faith and purpose. Get notified about new episodes and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about">
                <Button className="btn-hero">
                  Learn More About Pastor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
