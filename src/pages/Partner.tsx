import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, CreditCard, Bitcoin, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Partner = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const presetAmounts = [
    { value: 50000, label: "₦50,000" },
    { value: 100000, label: "₦100,000" },
    { value: 250000, label: "₦250,000" },
    { value: 500000, label: "₦500,000" },
  ];

  const paymentMethods = [
    { id: "bank", icon: Building2, label: "Bank Transfer", description: "Direct bank transfer" },
    { id: "card", icon: CreditCard, label: "Card Payment", description: "Visa, Mastercard, Verve" },
    { id: "crypto", icon: Bitcoin, label: "Crypto", description: "Bitcoin, USDT, ETH" },
    { id: "wallet", icon: Wallet, label: "Mobile Wallet", description: "OPay, PalmPay, Kuda" },
  ];

  const handlePresetClick = (value: number) => {
    setAmount(value.toLocaleString());
  };

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue) {
      return parseInt(numericValue).toLocaleString();
    }
    return "";
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(formatAmount(e.target.value));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          {/* Back Button */}
          <button
            onClick={() => navigate("/support")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Support</span>
          </button>

          {/* Heading */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Partnership
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6">
              Choose Your Partnership Amount
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generous contribution helps us reach more souls and spread the gospel across the nations.
            </p>
          </div>

          {/* Amount Selection Section */}
          <div className="max-w-3xl mx-auto">
            {/* Custom Amount Input */}
            <Card className="p-8 mb-8 border-border bg-card">
              <label className="block text-sm font-medium text-muted-foreground mb-3">
                Enter Amount (₦)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-semibold text-muted-foreground">
                  ₦
                </span>
                <Input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="0"
                  className="pl-12 pr-4 py-6 text-3xl md:text-4xl font-bold text-foreground bg-background border-2 border-border focus:border-primary transition-colors h-auto"
                />
              </div>
            </Card>

            {/* Preset Amount Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {presetAmounts.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => handlePresetClick(preset.value)}
                  className={`p-4 rounded-xl border-2 font-semibold text-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
                    amount === preset.value.toLocaleString()
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Payment Methods Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                Available Payment Methods
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <Card
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      selectedMethod === method.id
                        ? "border-2 border-primary bg-primary/5 shadow-lg"
                        : "border border-border bg-card hover:border-primary/50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                          selectedMethod === method.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-foreground"
                        }`}
                      >
                        <method.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{method.label}</h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Proceed Button */}
            <div className="text-center">
              <Button
                disabled
                size="lg"
                className="w-full md:w-auto min-w-[280px] h-14 text-lg font-semibold bg-primary text-primary-foreground opacity-50 cursor-not-allowed"
              >
                Proceed to Payment
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Payment integration coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
