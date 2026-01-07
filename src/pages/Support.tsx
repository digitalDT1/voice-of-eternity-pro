import { useEffect, useRef, useState } from "react";
import { Heart, Gift, Users, Star, ArrowRight, Mail, Phone, CreditCard, Bitcoin, Building, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SiStripe, SiVisa, SiMastercard, SiPaypal, SiApplepay, SiGooglepay } from "react-icons/si";

const Support = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [donationAmount, setDonationAmount] = useState("");

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

  // Payment method icons data
  const paymentIcons = [
    { Icon: SiStripe, color: "bg-[#635BFF]", label: "Stripe" },
    { Icon: SiVisa, color: "bg-[#1A1F71]", label: "Visa" },
    { Icon: SiMastercard, color: "bg-[#EB001B]", label: "Mastercard" },
    { Icon: SiPaypal, color: "bg-[#003087]", label: "PayPal" },
    { Icon: SiApplepay, color: "bg-foreground", label: "Apple Pay" },
    { Icon: SiGooglepay, color: "bg-[#4285F4]", label: "Google Pay" },
  ];

  const paymentMethods = [
    { id: "card", label: "Bank Card", icon: CreditCard, description: "Pay with Visa, Mastercard, or other cards" },
    { id: "crypto", label: "Cryptocurrency", icon: Bitcoin, description: "Pay with Bitcoin, Ethereum, or other crypto" },
    { id: "transfer", label: "Bank Transfer", icon: Building, description: "Direct bank transfer" },
    { id: "wallet", label: "Digital Wallet", icon: Wallet, description: "PayPal, Apple Pay, Google Pay" },
  ];

  const quickAmounts = [10, 25, 50, 100, 250, 500];

  const impactStats = [
    { icon: Users, number: "50,000+", label: "Lives Touched Monthly" },
    { icon: Gift, number: "25+", label: "Countries Reached" },
    { icon: Star, number: "150+", label: "Episodes Created" },
    { icon: Heart, number: "1,000+", label: "Prayer Requests Answered" }
  ];

  const handleDonate = () => {
    setShowPaymentOptions(true);
    setTimeout(() => {
      document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
  };

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
              
              <Button className="btn-secondary group" size="lg" onClick={handleDonate}>
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

            {/* Right - Payment Icons Floating Design */}
            <div className={`relative h-[300px] md:h-[340px] flex items-center justify-center transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <div className="relative w-[280px] md:w-[320px] h-[280px] md:h-[320px]">
                {/* Stripe */}
                <button 
                  onClick={handleDonate}
                  className="absolute top-[5%] left-[5%] w-20 h-24 md:w-24 md:h-28 bg-[#635BFF] rounded-3xl rounded-bl-[2.5rem] flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer" 
                  style={{ animationDelay: '0s' }}
                  aria-label="Pay with Stripe"
                >
                  <SiStripe className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </button>

                {/* Visa */}
                <button 
                  onClick={handleDonate}
                  className="absolute top-[2%] right-[5%] px-4 py-2 bg-[#1A1F71] rounded-full flex items-center shadow-md animate-float hover:scale-110 transition-transform cursor-pointer" 
                  style={{ animationDelay: '0.3s' }}
                  aria-label="Pay with Visa"
                >
                  <SiVisa className="w-10 h-6 text-white" />
                </button>

                {/* PayPal */}
                <button 
                  onClick={handleDonate}
                  className="absolute top-[28%] right-0 px-5 py-3 bg-[#003087] rounded-full flex items-center shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer" 
                  style={{ animationDelay: '0.6s' }}
                  aria-label="Pay with PayPal"
                >
                  <SiPaypal className="w-6 h-6 text-white" />
                </button>

                {/* Mastercard */}
                <button 
                  onClick={handleDonate}
                  className="absolute top-[50%] left-[35%] w-14 h-14 md:w-16 md:h-16 bg-[#EB001B] rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer" 
                  style={{ animationDelay: '0.9s' }}
                  aria-label="Pay with Mastercard"
                >
                  <SiMastercard className="w-8 h-8 text-white" />
                </button>

                {/* Apple Pay */}
                <button 
                  onClick={handleDonate}
                  className="absolute bottom-[18%] left-[8%] w-12 h-12 md:w-14 md:h-14 bg-foreground rounded-xl flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer" 
                  style={{ animationDelay: '1.2s' }}
                  aria-label="Pay with Apple Pay"
                >
                  <SiApplepay className="w-8 h-8 text-background" />
                </button>

                {/* Google Pay */}
                <button 
                  onClick={handleDonate}
                  className="absolute bottom-[5%] left-[40%] w-12 h-12 md:w-14 md:h-14 bg-[#4285F4] rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer" 
                  style={{ animationDelay: '1.5s' }}
                  aria-label="Pay with Google Pay"
                >
                  <SiGooglepay className="w-7 h-7 text-white" />
                </button>

                {/* Credit card decorative */}
                <div className="absolute top-[18%] left-[50%] w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <CreditCard className="w-5 h-5 text-secondary" />
                </div>

                {/* Heart decorative */}
                <div className="absolute bottom-[25%] right-[10%] w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Heart className="w-5 h-5 text-primary" />
                </div>
              </div>
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

      {/* Donate Section */}
      <section id="payment-section" className="section-padding">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Support</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Make a Donation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your generous gift helps us continue spreading the gospel and transforming lives worldwide.
            </p>
          </div>

          {/* Single Donate Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="scroll-fade-in relative overflow-hidden bg-card border border-border rounded-xl">
              {/* Top Border Line */}
              <div className="h-1 w-full bg-secondary" />
              
              <div className="p-8">
                {!showPaymentOptions ? (
                  <>
                    {/* Amount Selection */}
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-foreground mb-4">Select Amount</label>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {quickAmounts.map((amount) => (
                          <button
                            key={amount}
                            onClick={() => setDonationAmount(amount.toString())}
                            className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                              donationAmount === amount.toString()
                                ? 'border-secondary bg-secondary/10 text-secondary'
                                : 'border-border hover:border-secondary/50 text-foreground'
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          type="number"
                          placeholder="Custom amount"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          className="pl-8"
                        />
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      size="lg"
                      onClick={handleDonate}
                      disabled={!donationAmount}
                    >
                      Continue to Payment
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </>
                ) : (
                  <>
                    {/* Payment Method Selection */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <label className="block text-sm font-medium text-foreground">Select Payment Method</label>
                        <button 
                          onClick={() => setShowPaymentOptions(false)}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          ← Back
                        </button>
                      </div>
                      
                      {donationAmount && (
                        <div className="mb-6 p-4 bg-accent/30 rounded-lg text-center">
                          <span className="text-sm text-muted-foreground">Amount: </span>
                          <span className="text-2xl font-bold text-foreground">${donationAmount}</span>
                        </div>
                      )}

                      <div className="space-y-3">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.id}
                            onClick={() => handlePaymentMethodSelect(method.id)}
                            className={`w-full p-4 rounded-lg border-2 flex items-center gap-4 transition-all text-left ${
                              selectedPaymentMethod === method.id
                                ? 'border-secondary bg-secondary/10'
                                : 'border-border hover:border-secondary/50'
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              selectedPaymentMethod === method.id ? 'bg-secondary/20' : 'bg-accent'
                            }`}>
                              <method.icon className={`h-6 w-6 ${
                                selectedPaymentMethod === method.id ? 'text-secondary' : 'text-muted-foreground'
                              }`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{method.label}</h4>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Proceed Button */}
                    <Button 
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      size="lg"
                      disabled={!selectedPaymentMethod}
                    >
                      Proceed to Pay
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Giving Details Section */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Title and Description */}
            <div className="scroll-fade-in">
              <h2 className="text-4xl font-serif font-bold mb-4">
                <span className="text-foreground">Giving </span>
                <span className="text-secondary">Details</span>
              </h2>
              <p className="text-muted-foreground">
                For your giving in Cash and kinds, kindly make use of the following account details
              </p>
            </div>

            {/* Right - Bank Account Details Card */}
            <Card className="scroll-fade-in bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-8">
                {/* Account Headers */}
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Naira Account</h3>
                    <p className="text-2xl md:text-3xl font-bold text-primary mb-2">0691972149</p>
                    <p className="text-sm font-semibold text-foreground">Udechukwu Chinedu Joshua</p>
                    <p className="text-sm text-muted-foreground">Access Bank</p>
                  </div>
                  
                  <div className="text-center border-l border-border pl-8">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Dollar Account</h3>
                    <p className="text-2xl md:text-3xl font-bold text-secondary mb-2">1472460398</p>
                    <p className="text-sm font-semibold text-foreground">Udechukwu Chinedu Joshua</p>
                    <p className="text-sm text-muted-foreground">Access Bank</p>
                  </div>
                </div>

                {/* Additional Bank Details */}
                <div className="border-t border-border pt-6 text-center">
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">Swift code - </span>
                      <span className="text-muted-foreground">ABNGNGLA</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">Sort code - </span>
                      <span className="text-muted-foreground">044020703</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">Bank Address - </span>
                      <span className="text-muted-foreground">2 Ezemewi Street, Nnewi, 435101, Anambra State.</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Support Matters */}
      <section className="section-padding">
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
                    <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
                    <p className="text-muted-foreground">Every contribution helps produce high-quality episodes, reaching souls hungry for truth.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                    <p className="text-muted-foreground">Your partnership enables us to build and nurture a global community of believers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-fade-in">
              <Card className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Transparency</h3>
                <p className="text-muted-foreground mb-6">
                  We believe in complete transparency with our partners. Here's how your contributions are used:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Content Production</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Global Outreach</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Community Programs</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
};

export default Support;
