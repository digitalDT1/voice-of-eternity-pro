import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Building2, CreditCard, Bitcoin, Smartphone, Copy, Check } from "lucide-react";
import { SiVisa, SiMastercard, SiPaypal, SiStripe, SiApplepay, SiGooglepay } from "react-icons/si";

const Partner = () => {
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const presetAmounts = [
    { label: "₦50,000", value: "50000" },
    { label: "₦100,000", value: "100000" },
    { label: "₦250,000", value: "250000" },
    { label: "₦500,000", value: "500000" },
  ];

  const paymentMethods = [
    {
      id: "bank",
      name: "Bank Transfer",
      description: "Direct bank transfer",
      icon: Building2,
      available: true,
    },
    {
      id: "card",
      name: "Card Payment",
      description: "Visa, Mastercard, Verve",
      icon: CreditCard,
      available: true,
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      description: "Bitcoin, USDT, ETH",
      icon: Bitcoin,
      available: true,
    },
    {
      id: "mobile",
      name: "Mobile Money",
      description: "PayPal, Apple Pay, Google Pay",
      icon: Smartphone,
      available: true,
    },
  ];

  // Payment icons data with teardrop shapes
  const paymentIcons = [
    { Icon: SiMastercard, color: "bg-[#EB001B]", label: "Mastercard", shape: "teardrop-lg" },
    { Icon: SiVisa, color: "bg-[#1A1F71]", label: "Visa", shape: "pill" },
    { Icon: SiPaypal, color: "bg-[#003087]", label: "PayPal", shape: "teardrop-md" },
    { Icon: SiStripe, color: "bg-[#635BFF]", label: "Stripe", shape: "rounded" },
    { Icon: Bitcoin, color: "bg-[#F7931A]", label: "Crypto", shape: "circle" },
    { Icon: SiGooglepay, color: "bg-[#4285F4]", label: "Google Pay", shape: "teardrop-sm" },
    { Icon: SiApplepay, color: "bg-foreground", label: "Apple Pay", shape: "rounded-sm" },
  ];

  const bankDetails = {
    bankName: "First Bank of Nigeria",
    accountName: "Voice of Eden Ministry",
    accountNumber: "3012345678",
  };

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePresetClick = (value: string) => {
    setAmount(value);
  };

  const formatAmount = (value: string) => {
    const num = parseInt(value);
    if (isNaN(num)) return "";
    return new Intl.NumberFormat("en-NG").format(num);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Payment Icons */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                Partnership
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6">
                Partner<br />With Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Your generous support enables us to continue spreading hope, faith, and biblical truth to hearts around the world.
              </p>
            </div>

            {/* Right - Payment Icons in Teardrop/Blob Shapes */}
            <div className="relative h-[320px] md:h-[380px] flex items-center justify-center">
              <div className="relative w-[320px] md:w-[380px] h-[320px] md:h-[380px]">
                {/* Mastercard - Large teardrop (top-left) */}
                <div 
                  className="absolute top-[5%] left-[0%] w-24 h-28 md:w-28 md:h-32 bg-[#EB001B] flex items-center justify-center shadow-lg animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ 
                    borderRadius: '50% 50% 50% 0%',
                    animationDelay: '0s' 
                  }}
                >
                  <SiMastercard className="w-12 h-12 md:w-14 md:h-14 text-white" />
                </div>

                {/* Visa - Pill shape (top-center) */}
                <div 
                  className="absolute top-[0%] left-[35%] px-5 py-3 bg-[#1A1F71] rounded-full flex items-center shadow-lg animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ animationDelay: '0.3s' }}
                >
                  <SiVisa className="w-12 h-8 text-white" />
                </div>

                {/* PayPal - Teardrop (top-right) */}
                <div 
                  className="absolute top-[8%] right-[0%] w-20 h-24 md:w-24 md:h-28 bg-[#003087] flex items-center justify-center shadow-lg animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ 
                    borderRadius: '50% 50% 0% 50%',
                    animationDelay: '0.6s' 
                  }}
                >
                  <SiPaypal className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>

                {/* Stripe - Wide pill (middle) */}
                <div 
                  className="absolute top-[40%] left-[25%] px-6 py-4 bg-[#635BFF] rounded-full flex items-center shadow-lg animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ animationDelay: '0.9s' }}
                >
                  <SiStripe className="w-16 h-8 text-white" />
                </div>

                {/* Crypto (Bitcoin) - Circle (bottom-left) */}
                <div 
                  className="absolute bottom-[15%] left-[5%] w-14 h-14 md:w-16 md:h-16 bg-[#F7931A] rounded-full flex items-center justify-center shadow-lg animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ animationDelay: '1.2s' }}
                >
                  <Bitcoin className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Google Pay - Small teardrop (bottom-center) */}
                <div 
                  className="absolute bottom-[5%] left-[35%] w-16 h-20 md:w-18 md:h-22 bg-[#4285F4] flex items-center justify-center shadow-lg animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ 
                    borderRadius: '50% 50% 50% 0%',
                    animationDelay: '1.5s' 
                  }}
                >
                  <SiGooglepay className="w-10 h-10 text-white" />
                </div>

                {/* Apple Pay - Rounded square (bottom-right) */}
                <div 
                  className="absolute bottom-[20%] right-[10%] w-14 h-14 md:w-16 md:h-16 bg-foreground rounded-2xl flex items-center justify-center shadow-lg animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ animationDelay: '1.8s' }}
                >
                  <SiApplepay className="w-10 h-10 text-background" />
                </div>

                {/* Verve-style decorative (middle-right) */}
                <div 
                  className="absolute top-[55%] right-[0%] px-4 py-2 bg-[#00425F] rounded-xl flex items-center justify-center shadow-lg animate-float cursor-pointer hover:scale-110 transition-transform"
                  style={{ animationDelay: '0.4s' }}
                >
                  <span className="text-white font-bold text-sm">VERVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amount Selection Section */}
      <section className="py-16 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-4">
                Choose Your Partnership Amount
              </h2>
              <p className="text-muted-foreground">
                Select a preset amount or enter a custom amount below
              </p>
            </div>

            {/* Preset Amount Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {presetAmounts.map((preset) => (
                <Button
                  key={preset.value}
                  variant={amount === preset.value ? "default" : "outline"}
                  className={`h-16 text-lg font-semibold transition-all duration-300 ${
                    amount === preset.value 
                      ? "bg-primary text-primary-foreground scale-105 shadow-lg" 
                      : "hover:bg-primary/10 hover:border-primary hover:scale-105"
                  }`}
                  onClick={() => handlePresetClick(preset.value)}
                >
                  {preset.label}
                </Button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <Card className="p-6 bg-card border">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Custom Amount (NGN)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-muted-foreground">
                  ₦
                </span>
                <Input
                  type="text"
                  placeholder="Enter amount"
                  value={formatAmount(amount)}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, "").replace(/\D/g, "");
                    setAmount(value);
                  }}
                  className="pl-10 h-14 text-xl font-semibold"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-4">
                Available Payment Methods
              </h2>
              <p className="text-muted-foreground">
                Choose your preferred payment method
              </p>
            </div>

            {/* Payment Method Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  className="p-6 bg-card border cursor-pointer hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              ))}
            </div>

            {/* Proceed Button */}
            <div className="text-center">
              <Button 
                size="lg" 
                disabled
                className="px-12 py-6 text-lg font-semibold opacity-50 cursor-not-allowed"
              >
                Proceed to Payment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Payment processing coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-16 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-4">
                Manual Bank Transfer
              </h2>
              <p className="text-muted-foreground">
                You can also send your partnership directly via bank transfer
              </p>
            </div>

            <Card className="p-8 bg-card border">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">Bank Name</span>
                  <span className="font-semibold text-lg">{bankDetails.bankName}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">Account Name</span>
                  <span className="font-semibold text-lg">{bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Account Number</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-xl font-mono">{bankDetails.accountNumber}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyAccountNumber}
                      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  After making your transfer, please send proof of payment to{" "}
                  <a href="mailto:edwinteejay@gmail.com" className="text-primary hover:underline font-medium">
                    edwinteejay@gmail.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
