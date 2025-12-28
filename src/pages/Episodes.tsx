import { useEffect } from "react";
import { Headphones, Play, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Episodes = () => {
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

  const upcomingFeatures = [
    {
      icon: Play,
      title: "Deep Biblical Teaching",
      description: "Expository messages that unveil God's eternal counsels"
    },
    {
      icon: Headphones,
      title: "Audio & Video Content",
      description: "Available across all major podcast platforms"
    },
    {
      icon: Bell,
      title: "Weekly Releases",
      description: "Fresh content to strengthen your walk with God"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Desaturation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: 'grayscale(80%) brightness(0.4)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)',
          }}
        />

        {/* Hero Content - Right Aligned */}
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="w-full flex justify-end">
            <div className="max-w-2xl text-right pr-4 md:pr-8 lg:pr-16">
              {/* Label with Line */}
              <div className="flex items-center justify-end gap-4 mb-6 animate-fade-in">
                <div className="h-[1px] w-16 bg-white/50"></div>
                <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-light">
                  Episodes
                </span>
              </div>

              {/* Large Heading */}
              <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight">
                  COMING
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight mt-2">
                  SOON
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-6 text-sm md:text-base text-white/60 font-light tracking-wide max-w-md ml-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Powerful messages that will transform your life and deepen your faith
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Left - Pulsing Icon */}
        <div className="absolute bottom-8 left-8 md:left-16 z-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-pulse">
            <Headphones className="h-10 w-10 text-white" />
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/80 font-medium">Preview</span>
              <div className="h-[1px] w-12 bg-primary/50"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're working hard to bring you powerful, transformative content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="card-elegant p-8 text-center scroll-fade-in card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Content Preview Card */}
          <Card className="card-elegant p-8 md:p-12 max-w-4xl mx-auto scroll-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Episode Highlights</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Deep biblical teaching and expository messages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Practical wisdom for everyday living</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Insights into God's eternal counsels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Messages on consecration and spiritual excellence</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border-2 border-dashed border-primary/30">
                  <Bell className="h-12 w-12 text-primary" />
                </div>
                <p className="text-muted-foreground mb-6">Get notified when episodes launch</p>
                <Link to="/contact">
                  <Button className="btn-hero">
                    Subscribe for Updates
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <div className="scroll-fade-in max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Follow us on YouTube to catch the latest messages from Apostle Edwin E. Otejiri
            </p>
            <a 
              href="https://www.youtube.com/@Apostleedwine.otejiri1757" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-xl">
                <Play className="mr-2 h-5 w-5" />
                Watch on YouTube
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Episodes;