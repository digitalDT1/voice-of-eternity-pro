import { useEffect } from "react";
import { Heart, Gift, Users, Star, Coffee, Crown, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  const supportTiers = [
    {
      name: "Coffee Supporter",
      amount: "$5",
      frequency: "One-time",
      icon: Coffee,
      description: "Buy Pastor David a coffee and show your appreciation for the ministry.",
      benefits: ["Thank you message", "Prayer request inclusion"],
      popular: false,
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Monthly Partner",
      amount: "$15",
      frequency: "Monthly", 
      icon: Heart,
      description: "Join our monthly partnership program and help sustain the podcast ministry.",
      benefits: ["All previous benefits", "Exclusive monthly newsletter", "Early episode access"],
      popular: true,
      color: "from-primary to-primary-light"
    },
    {
      name: "Champion Supporter",
      amount: "$50",
      frequency: "Monthly",
      icon: Crown,
      description: "Become a champion supporter and help us reach even more souls with God's truth.",
      benefits: ["All previous benefits", "Quarterly video call", "Custom prayer request", "Ministry updates"],
      popular: false,
      color: "from-secondary to-secondary-light"
    }
  ];

  const impactStats = [
    { icon: Users, number: "50,000+", label: "Lives Touched Monthly" },
    { icon: Gift, number: "25+", label: "Countries Reached" },
    { icon: Star, number: "150+", label: "Episodes Created" },
    { icon: Heart, number: "1,000+", label: "Prayer Requests Answered" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center scroll-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Ministry Support</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your support enables us to continue spreading hope, faith, and biblical truth to hearts around the world. Together, we can make an eternal impact.
            </p>
            
            {/* Contact info highlighted */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground mb-8">
              <a href="mailto:edwinotejiriinvite@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-medium">edwinotejiriinvite@gmail.com</span>
              </a>
              <a href="tel:+2348108159472" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-medium">+234 810 815 9472</span>
              </a>
            </div>
          </div>
        </div>
      </section>

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

      {/* Support Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Choose Your Support Level
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every contribution, no matter the size, helps us continue this vital ministry and reach more hearts with God's love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTiers.map((tier, index) => (
              <Card key={index} className={`card-elegant p-8 scroll-fade-in relative overflow-hidden ${tier.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mb-6`}>
                  <tier.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-primary">{tier.amount}</span>
                  <span className="text-muted-foreground ml-2">/{tier.frequency.toLowerCase()}</span>
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
                
                <Button 
                  className={`w-full ${tier.popular ? 'btn-hero' : 'btn-secondary'}`}
                  size="lg"
                >
                  Support {tier.amount}
                </Button>
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
  );
};

export default Support;