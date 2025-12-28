import { useEffect } from "react";
import { Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen pt-20">
      {/* Coming Soon Section */}
      <section className="section-padding bg-gradient-subtle min-h-[80vh] flex items-center justify-center">
        <div className="container-custom">
          <div className="text-center scroll-fade-in max-w-3xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-pulse">
              <Headphones className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6">
              Episodes Coming Soon
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're working hard to bring you powerful, transformative podcast episodes. Check back soon for inspiring messages that will strengthen your faith and guide your spiritual journey.
            </p>
            <Card className="card-elegant p-8 text-left">
              <h3 className="text-2xl font-serif font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Deep biblical teaching and expository messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Practical wisdom for everyday living</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Insights into God's eternal counsels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Messages on consecration and spiritual excellence</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Episodes;