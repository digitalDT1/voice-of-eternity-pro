import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, Headphones, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import voeLogo from "@/assets/voe-logo-transparent.png";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 57, 107, 0.7), rgba(34, 57, 107, 0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8 animate-scale-in">
              <img 
                src={voeLogo} 
                alt="Voice of Eternity Logo" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in">
              Voice of <span className="text-gradient bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Eternity</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 animate-slide-up max-w-3xl mx-auto">
              Proclaiming God's eternal Counsels, bringing many into the realities of Chirst and raising an army of Consecreted men. 
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
              <Button className="btn-hero group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Listen Now
              </Button>
              <Button variant="outline" className="glass text-white border-white/30 hover:bg-white/20 px-8 py-4">
                <Headphones className="mr-2 h-5 w-5" />
                Latest Episode
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Podcast Highlight Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Transforming Lives Through Faith
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of listeners worldwide as we explore timeless biblical truths and practical wisdom for everyday living.
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
              <Link to="/contact">
                <Button variant="outline" className="px-8 py-4">
                  Get In Touch
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