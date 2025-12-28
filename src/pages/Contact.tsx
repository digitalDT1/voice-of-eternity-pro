import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Pastor David will respond within 24-48 hours.",
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
      description: "Invite Pastor David to speak at your event or conference."
    },
    {
      icon: Send,
      title: "General Inquiries",
      description: "Questions about the ministry, podcast, or spiritual guidance."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center scroll-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have questions, prayer requests, or just want to connect, don't hesitate to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-fade-in">
              <Card className="card-elegant p-8">
                <h2 className="text-3xl font-serif font-bold text-gradient mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your thoughts, questions, or prayer requests..."
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
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
            <div className="space-y-6">
              <div className="scroll-fade-in">
                <h2 className="text-3xl font-serif font-bold text-gradient mb-6">Contact Information</h2>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-elegant p-6 card-hover">
                      {info.link ? (
                        <a href={info.link} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                            <p className="text-primary font-medium mb-1 hover:underline">{info.value}</p>
                            <p className="text-muted-foreground text-sm">{info.description}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                            <p className="text-primary font-medium mb-1">{info.value}</p>
                            <p className="text-muted-foreground text-sm">{info.description}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>

              {/* Reasons to Contact */}
              <div className="scroll-fade-in">
                <h3 className="text-2xl font-serif font-bold mb-4">What Can We Help You With?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
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

      {/* Ministry Hours & Response */}
      <section className="py-16 bg-accent/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elegant p-8 scroll-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Office Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Tuesday - Friday</span>
                  <span className="font-medium">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </Card>

            <Card className="card-elegant p-8 scroll-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Response Promise</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We value every message and strive to respond within 24-48 hours. For urgent prayer requests, please call our office during office hours (Tuesday - Friday, 9 AM - 3 PM). Your spiritual wellbeing matters to us.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;