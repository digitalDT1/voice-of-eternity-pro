import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Apostle Edwin will respond within 24-48 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "edwinteejay@gmail.com",
      description: "Send us a message anytime",
      link: "mailto:edwinteejay@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 706 097 4266",
      description: "Call during office hours",
      link: "tel:+2347060974266"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Warri, Delta State, Nigeria",
      description: "Based in Warri, Nigeria"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "24-48 Hours",
      description: "We'll get back to you soon"
    }
  ];

  const reasons = [
    {
      icon: MessageCircle,
      title: "Prayer Requests",
      description: "Share your prayer needs and let us stand with you in faith."
    },
    {
      icon: Mail,
      title: "Speaking Engagements",
      description: "Invite Apostle Edwin to speak at your event or conference."
    },
    {
      icon: Send,
      title: "General Inquiries",
      description: "Questions about the ministry, podcast, or spiritual guidance."
    }
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
                  Contact
                </span>
              </div>

              {/* Large Heading */}
              <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight">
                  GET IN
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight mt-2">
                  TOUCH
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-6 text-sm md:text-base text-white/60 font-light tracking-wide max-w-md ml-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                We'd love to hear from you. Reach out with questions, prayer requests, or just to connect.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Left - Quick Contact */}
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

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-fade-in">
              <Card className="card-elegant p-8 border-t-4 border-t-primary">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-8 bg-primary/50"></div>
                  <span className="text-xs tracking-[0.2em] uppercase text-primary/80 font-medium">Message</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-gradient mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 bg-accent/30 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 bg-accent/30 border-border/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 bg-accent/30 border-border/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your thoughts, questions, or prayer requests..."
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none bg-accent/30 border-border/50"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-hero w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="scroll-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-8 bg-primary/50"></div>
                  <span className="text-xs tracking-[0.2em] uppercase text-primary/80 font-medium">Info</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-gradient mb-8">Contact Information</h2>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-elegant p-5 card-hover">
                      {info.link ? (
                        <a href={info.link} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                            <info.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold mb-0.5">{info.title}</h3>
                            <p className="text-primary font-medium mb-0.5 hover:underline text-sm">{info.value}</p>
                            <p className="text-muted-foreground text-xs">{info.description}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                            <info.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold mb-0.5">{info.title}</h3>
                            <p className="text-primary font-medium mb-0.5 text-sm">{info.value}</p>
                            <p className="text-muted-foreground text-xs">{info.description}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>

              {/* Reasons to Contact */}
              <div className="scroll-fade-in">
                <h3 className="text-2xl font-serif font-bold mb-6">What Can We Help You With?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl border border-border/50 bg-accent/20 hover:bg-accent/40 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <reason.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{reason.title}</h4>
                        <p className="text-muted-foreground text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Hours */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 scroll-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Office Hours</h3>
              </div>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Tuesday - Friday</span>
                  <span className="font-medium text-white">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="font-medium text-white/60">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends</span>
                  <span className="font-medium text-white/60">Closed</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 scroll-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Response Promise</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                We value every message and strive to respond within 24-48 hours. For urgent prayer requests, please call our office during office hours (Tuesday - Friday, 9 AM - 3 PM). Your spiritual wellbeing matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;