import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Gift, Users, Star, Check, ArrowRight, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const Support = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll effect for hero
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Calculate parallax and fade values based on scroll
  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const contentTranslateY = scrollY * 0.3;

  const pricingTiers = [
    {
      name: "Faith Partner",
      monthlyPrice: 10,
      annualPrice: 8,
      description: "All the basics for individuals who are just getting started with supporting the ministry.",
      features: [
        "Monthly newsletter",
        "Prayer request inclusion",
        "Early content access"
      ],
      popular: false,
      highlighted: false
    },
    {
      name: "Kingdom Builder",
      monthlyPrice: 25,
      annualPrice: 21,
      description: "Better for dedicated supporters who want to make a bigger impact.",
      features: [
        "All Faith Partner benefits",
        "Exclusive monthly updates",
        "Priority prayer requests",
        "Community access"
      ],
      popular: true,
      highlighted: true
    },
    {
      name: "Champion Partner",
      monthlyPrice: 50,
      annualPrice: 42,
      description: "Advanced partnership for those who want maximum ministry engagement.",
      features: [
        "All previous benefits",
        "Quarterly video calls",
        "Special ministry access",
        "Direct ministry updates"
      ],
      popular: false,
      highlighted: false
    }
  ];

  const impactStats = [
    { icon: Users, number: "50,000+", label: "Lives Touched Monthly" },
    { icon: Gift, number: "25+", label: "Countries Reached" },
    { icon: Star, number: "150+", label: "Episodes Created" },
    { icon: Heart, number: "1,000+", label: "Prayer Requests Answered" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Scroll Animation */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden py-32 md:py-40"
        style={{ position: 'sticky', top: 0, zIndex: 0 }}
      >
        <div 
          className="container-custom relative z-10"
          style={{
            transform: `translateY(${contentTranslateY}px)`,
            opacity: heroOpacity
          }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Ministry Support</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6">
                Partner<br />With Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                Your support enables us to continue spreading hope, faith, and biblical truth to hearts around the world. Together, we can make an eternal impact.
              </p>
              
              <Button className="btn-secondary group" size="lg">
                Start Giving
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Contact info */}
              <div className={`flex flex-col sm:flex-row items-start gap-4 text-muted-foreground mt-8 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <a href="mailto:edwinteejay@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
                  <Mail className="h-4 w-4" />
                  <span>edwinteejay@gmail.com</span>
                </a>
                <a href="tel:+2347060974266" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+234 706 097 4266</span>
                </a>
              </div>
            </div>

            {/* Right - Partner With Us Button */}
            <div className={`flex items-center justify-center transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <Button
                onClick={() => navigate("/partner")}
                size="lg"
                className="group relative px-12 py-8 h-auto text-2xl md:text-3xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  <Heart className="h-8 w-8" />
                  Partner With Us
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for scroll effect */}
      <div className="h-[30vh] bg-transparent pointer-events-none" style={{ marginTop: '-30vh' }}></div>

      {/* Content sections with relative positioning */}
      <div className="relative z-10 bg-background">

      {/* Impact Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Impact Together</h2>
            <p className="text-white/80">See how your support is transforming lives worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center scroll-fade-in">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-serif mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="section-padding">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Our Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Choose the plan that's right<br className="hidden md:block" /> for your partnership
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Start with the <span className="font-semibold">Free plan</span> to try out our platform for an unlimited period of time.{" "}
              <a href="#" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Bill Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-secondary"
              />
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Bill Annually
                </span>
                <span className="text-xs font-semibold text-secondary">Save 15%</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`scroll-fade-in relative overflow-hidden bg-card border rounded-xl ${
                  tier.highlighted ? 'border-secondary' : 'border-border'
                }`}
              >
                {/* Top Border Line */}
                <div className={`h-1 w-full ${
                  index === 0 ? 'bg-primary' : 
                  index === 1 ? 'bg-secondary' : 
                  'bg-primary'
                }`} />
                
                <div className="p-8">
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">
                      ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  {/* Tier Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-8 min-h-[48px]">
                    {tier.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? 'text-secondary' : 'text-primary'
                        }`} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      tier.highlighted 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-transparent border-2 border-border text-foreground hover:bg-accent'
                    }`}
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support Matters */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in">
              <h2 className="text-4xl font-serif font-bold text-gradient mb-6">
                Why Your Support Matters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">Your support helps us reach listeners in over 25 countries, translating hope across cultural and language barriers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Gift className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
                    <p className="text-muted-foreground">Funding helps us invest in better equipment, professional editing, and creating additional resources like study guides.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ministry Expansion</h3>
                    <p className="text-muted-foreground">Support enables us to launch new initiatives like youth programs, community outreach, and mentorship opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-fade-in">
              <Card className="card-elegant p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Ministry Transparency</h3>
                <p className="text-muted-foreground mb-6">
                  We believe in complete transparency with our supporters. Here's how your donations are used:
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Podcast Production</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Outreach Programs</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Ministry Operations</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Future Growth</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Support Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gradient mb-4">
              Other Ways to Support
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not ready for financial support? There are many other meaningful ways to help our ministry grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-elegant p-6 text-center scroll-fade-in card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Share Episodes</h3>
              <p className="text-muted-foreground text-sm">Help us reach more people by sharing episodes on social media.</p>
            </Card>
            
            <Card className="card-elegant p-6 text-center scroll-fade-in card-hover">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Leave Reviews</h3>
              <p className="text-muted-foreground text-sm">Write positive reviews on podcast platforms to help others discover us.</p>
            </Card>
            
            <Card className="card-elegant p-6 text-center scroll-fade-in card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Join Community</h3>
              <p className="text-muted-foreground text-sm">Participate in our online community and help encourage others.</p>
            </Card>
            
            <Card className="card-elegant p-6 text-center scroll-fade-in card-hover">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Volunteer</h3>
              <p className="text-muted-foreground text-sm">Offer your skills and time to help with various ministry projects.</p>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Support;
