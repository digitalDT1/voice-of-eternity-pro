import { useEffect } from "react";
import { Award, BookOpen, Users, Heart, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pastorPhoto from "@/assets/pastor-photo.jpg";

const About = () => {
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

  const milestones = [
    {
      year: "2019",
      title: "Voice of Eternity Launch",
      description: "Started the podcast with a vision to reach hearts globally with biblical truth and practical wisdom."
    },
    {
      year: "2020",
      title: "Community Growth",
      description: "Reached 10,000 monthly listeners and established a strong online community during challenging times."
    },
    {
      year: "2021",
      title: "Ministry Expansion",
      description: "Launched youth mentorship programs and began speaking at conferences nationwide."
    },
    {
      year: "2022",
      title: "Global Impact",
      description: "Podcast reached listeners in over 25 countries, translating key episodes into multiple languages."
    },
    {
      year: "2023",
      title: "Books & Resources",
      description: "Published first book 'Walking in Purpose' and launched comprehensive study guides."
    },
    {
      year: "2024",
      title: "50,000 Listeners",
      description: "Celebrated reaching 50,000+ monthly listeners and 150+ transformative episodes."
    }
  ];

  const achievements = [
    { icon: Award, title: "Master of Divinity", description: "Seminary Graduate with honors" },
    { icon: BookOpen, title: "Published Author", description: "3 books on spiritual growth" },
    { icon: Users, title: "Community Leader", description: "15+ years in ministry" },
    { icon: Heart, title: "Mentor & Coach", description: "Guided 500+ individuals" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in">
              <div className="relative">
                <img 
                  src={pastorPhoto} 
                  alt="Pastor David Johnson" 
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary p-4 rounded-xl text-white">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years Ministry</div>
                </div>
              </div>
            </div>
            
            <div className="scroll-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Pastor & Podcast Host</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gradient">
                Pastor David Johnson
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Called to inspire and equip believers to live purposefully in God's plan. With over 15 years in ministry and a heart for authentic discipleship, Pastor David brings biblical wisdom to life through engaging messages that transform hearts and minds.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Atlanta, Georgia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Est. 2019</span>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
                "My mission is to help every believer discover their divine purpose and walk confidently in God's calling for their life."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Vision & Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Committed to spreading hope, building faith, and empowering believers to live out their God-given purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elegant p-8 scroll-fade-in card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a global community of believers who are deeply rooted in biblical truth, passionate about their faith, and actively living out their divine purpose in their everyday lives, making a positive impact in their communities and beyond.
              </p>
            </Card>

            <Card className="card-elegant p-8 scroll-fade-in card-hover">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through the Voice of Eternity podcast and ministry, we provide practical, biblical teaching that equips believers to grow spiritually, overcome life's challenges, and discover their unique calling while building meaningful relationships with God and others.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-accent/50">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Achievements & Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-elegant p-6 text-center scroll-fade-in card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Ministry Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of God's faithfulness and the growth of Voice of Eternity ministry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-0.5"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`card-elegant p-6 ml-8 md:ml-0 scroll-fade-in card-hover ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className={`inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-serif font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;