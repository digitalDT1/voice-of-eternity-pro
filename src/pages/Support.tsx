import { useEffect } from "react";
import { Heart, Gift, Users, Star, Coffee, Crown, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Support = () => {
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

  const manualSupportTiers = [
    {
      name: "Coffee Supporter",
      amount: "$5",
      frequency: "One-time",
      icon: Coffee,
      description: "Buy Apostle Edwin a coffee and show your appreciation for the ministry.",
      benefits: ["Thank you message", "Prayer request inclusion"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Blessing Seed",
      amount: "$25",
      frequency: "One-time",
      icon: Gift,
      description: "Sow a one-time blessing into the ministry and help us expand our reach.",
      benefits: ["Thank you message", "Prayer coverage", "Ministry updates"],
      color: "from-primary to-primary-light"
    },
    {
      name: "Kingdom Investment",
      amount: "$100",
      frequency: "One-time",
      icon: Crown,
      description: "Make a significant investment in spreading God's eternal counsels.",
      benefits: ["Personal thank you", "Exclusive prayer coverage", "Quarterly ministry updates"],
      color: "from-secondary to-secondary-light"
    }
  ];

  const monthlySupportTiers = [
    {
      name: "Faith Partner",
      amount: "$10",
      frequency: "Monthly", 
      icon: Heart,
      description: "Become a monthly faith partner and help sustain the Voice of Eternity ministry.",
      benefits: ["Monthly newsletter", "Prayer request inclusion", "Early content access"],
      popular: false,
      color: "from-primary to-primary-light"
    },
    {
      name: "Kingdom Builder",
      amount: "$25",
      frequency: "Monthly",
      icon: Star,
      description: "Join as a Kingdom Builder and play a vital role in raising consecrated men for God.",
      benefits: ["All previous benefits", "Exclusive monthly updates", "Priority prayer requests"],
      popular: true,
      color: "from-secondary to-secondary-light"
    },
    {
      name: "Champion Partner",
      amount: "$50",
      frequency: "Monthly",
      icon: Crown,
      description: "Champion the advancement of God's eternal counsels through monthly partnership.",
      benefits: ["All previous benefits", "Quarterly video call", "Special ministry access"],
      popular: false,
      color: "from-primary to-secondary"
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
      {/* Cinematic Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: 'grayscale(70%) brightness(0.4)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)',
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
                  Partnership
                </span>
              </div>

              {/* Large Heading */}
              <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight">
                  PARTNER
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight mt-2">
                  WITH US
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-6 text-sm md:text-base text-white/60 font-light tracking-wide max-w-md ml-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Your support enables us to spread hope, faith, and biblical truth worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Left - Contact Info */}
        <div className="absolute bottom-8 left-8 md:left-16 z-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col gap-3">
            <a href="mailto:edwinteejay@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-xs tracking-wide">edwinteejay@gmail.com</span>
            </a>
            <a href="tel:+2347060974266" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-xs tracking-wide">+234 706 097 4266</span>
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-white/30"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-medium">Impact</span>
              <div className="h-[1px] w-12 bg-white/30"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Impact Together</h2>
            <p className="text-white/70">See how your support is transforming lives worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center scroll-fade-in">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-serif mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual Support Options */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/80 font-medium">One-Time</span>
              <div className="h-[1px] w-12 bg-primary/50"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Manual Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Make a one-time donation to support the Voice of Eternity ministry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {manualSupportTiers.map((tier, index) => (
              <Card key={index} className="card-elegant p-8 scroll-fade-in card-hover border-t-4 border-t-primary/50">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mb-6`}>
                  <tier.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-primary">{tier.amount}</span>
                  <span className="text-muted-foreground ml-2 text-sm">{tier.frequency}</span>
                </div>
                
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full btn-secondary" size="lg">
                  Donate {tier.amount}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Subscription Options */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/80 font-medium">Monthly</span>
              <div className="h-[1px] w-12 bg-primary/50"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Monthly Partnership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Become a monthly partner and help sustain the Voice of Eternity ministry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {monthlySupportTiers.map((tier, index) => (
              <Card key={index} className={`card-elegant p-8 scroll-fade-in relative overflow-hidden ${tier.popular ? 'ring-2 ring-secondary shadow-glow border-t-4 border-t-secondary' : 'border-t-4 border-t-primary/30'}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-primary px-4 py-1 text-xs font-bold tracking-wider">
                    POPULAR
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mb-6`}>
                  <tier.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-primary">{tier.amount}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Auto-renews monthly</p>
                
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${tier.popular ? 'btn-hero' : 'btn-secondary'}`}
                  size="lg"
                >
                  Subscribe {tier.amount}/mo
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-primary/50"></div>
                <span className="text-xs tracking-[0.3em] uppercase text-primary/80 font-medium">Why</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-gradient mb-8">
                Why Your Support Matters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">Your support helps us reach listeners in over 25 countries, translating hope across cultural and language barriers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Gift className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
                    <p className="text-muted-foreground">Funding helps us invest in better equipment, professional editing, and creating additional resources like study guides.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ministry Expansion</h3>
                    <p className="text-muted-foreground">Support enables us to launch new initiatives like youth programs, community outreach, and mentorship opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-fade-in">
              <Card className="card-elegant p-8 border-l-4 border-l-primary">
                <h3 className="text-2xl font-serif font-bold mb-6">Ministry Transparency</h3>
                <p className="text-muted-foreground mb-8">
                  We believe in complete transparency with our supporters. Here's how your donations are used:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Podcast Production</span>
                      <span className="font-bold text-primary">40%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Outreach Programs</span>
                      <span className="font-bold text-secondary">30%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Ministry Operations</span>
                      <span className="font-bold text-primary">20%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Future Growth</span>
                      <span className="font-bold text-secondary">10%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/80 font-medium">Alternative</span>
              <div className="h-[1px] w-12 bg-primary/50"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-4">
              Other Ways to Support
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not ready for financial support? There are many other meaningful ways to help our ministry grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elegant p-6 text-center scroll-fade-in card-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Share Episodes</h3>
              <p className="text-muted-foreground text-sm">Help us reach more people by sharing episodes on social media.</p>
            </Card>
            
            <Card className="card-elegant p-6 text-center scroll-fade-in card-hover">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Leave Reviews</h3>
              <p className="text-muted-foreground text-sm">Write positive reviews on podcast platforms to help others discover us.</p>
            </Card>
            
            <Card className="card-elegant p-6 text-center scroll-fade-in card-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Join Community</h3>
              <p className="text-muted-foreground text-sm">Participate in our online community and help encourage others.</p>
            </Card>
            
            <Card className="card-elegant p-6 text-center scroll-fade-in card-hover">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Volunteer</h3>
              <p className="text-muted-foreground text-sm">Offer your skills and time to help with various ministry projects.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
