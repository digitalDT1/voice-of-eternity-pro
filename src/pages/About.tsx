import { useEffect, useState } from "react";
import { Award, BookOpen, Users, Heart, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import apostleEdwinPhoto from "@/assets/apostle-edwin.jpg";

const About = () => {
  const [expanded, setExpanded] = useState(false);

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
      year: "2015",
      title: "Ministry Foundation",
      description:
        "Called to apostolic ministry and began teaching God's Word with deep spiritual insight and oversight."
    },
    {
      year: "2018",
      title: "Bethel Apostolic Christian Fellowship",
      description:
        "Established as Set Man of Bethel Apostolic Christian Fellowship in Warri, Delta State."
    },
    {
      year: "2019",
      title: "Voice of Eternity Launch",
      description:
        "Pioneered Voice of Eternity channel to proclaim God's eternal counsels through inspiring messages and podcasts."
    },
    {
      year: "2020",
      title: "Youth Revival Impact",
      description:
        "Ministry significantly impacted youths, teenagers, and young adults, stirring revival and passion for God."
    },
    {
      year: "2022",
      title: "Multi-City Ministry",
      description:
        "Began traveling from cities to cities and across nations with the gospel marked by many infallible proofs."
    },
    {
      year: "2024",
      title: "Global Digital Ministry",
      description:
        "Expanded Voice of Eternity to reach believers worldwide through podcasts, videos, and digital platforms."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Apostolic Calling",
      description: "Seasoned Bible teacher with distinct apostolic unction"
    },
    {
      icon: BookOpen,
      title: "Expository Teaching",
      description: "Marked by deep scriptural insight and prophetic utterances"
    },
    { icon: Users, title: "Set Man", description: "Bethel Apostolic Christian Fellowship Leader" },
    {
      icon: Heart,
      title: "Revival Minister",
      description: "Healing, baptism of Holy Spirit & youth transformation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Desaturation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${apostleEdwinPhoto})`,
            filter: 'grayscale(70%) brightness(0.5)',
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
                  About
                </span>
              </div>

              {/* Large Heading */}
              <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight">
                  THE
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tight mt-2">
                  APOSTLE
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-6 text-sm md:text-base text-white/60 font-light tracking-wide max-w-md ml-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                A vessel called to proclaim God's eternal counsels with apostolic unction
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Left Element */}
        <div className="absolute bottom-8 left-8 md:left-16 z-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-white/60" />
              <span className="text-xs tracking-[0.15em] uppercase text-white/60">Warri, Delta State</span>
            </div>
          </div>
        </div>

        {/* Bottom Right Element */}
        <div className="absolute bottom-8 right-8 md:right-16 z-10 flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-white/60" />
            <span className="text-xs tracking-[0.15em] uppercase text-white/60">Est. 2019</span>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto scroll-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                Apostle Edwin E. Otejiri
              </h2>
            </div>

            <div className="body-large text-muted-foreground leading-relaxed space-y-6">
              <p>
                <strong className="text-foreground">APOSTLE EDWIN E. OTEJIRI</strong> is a seasoned Bible teacher with a
                distinct apostolic calling upon his life. Entirely devoted to God and His kingdom,
                He has given himself wholly to the advancement of the gospel and the raising of
                Believers who are walking in the realities of all that are available in Christ,
                becoming Kingdom functionaries in every sphere of Life and fulfilling destiny with
                the Spirit of excellence.
              </p>

              {expanded && (
                <>
                  <p>
                    Currently serving as the Set Man of Bethel Apostolic Christian Fellowship,
                    based in Warri, Delta State, his ministry is marked by:
                  </p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Expository teaching of God's Word</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Apostolic unction</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Prophetic utterances</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Baptism of the Holy Spirit</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Healing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Revival and lots more</span>
                    </li>
                  </ul>
                  <p>
                    Apostle Edwin Otejiri leads with deep spiritual insight and oversight,
                    compassion, and a burden to see the reign of righteousness in his generation.
                    His vow is to serve his generation with the life and proofs of the gospel.
                  </p>
                  <p>
                    He pioneers the Voice of Eternity channel. A channel aimed at proclaiming
                    God's eternal counsels through inspiring messages, videos and podcast. Moreso,
                    His ministerial mandate and burdens are summed up in the caption "Voice of
                    Eternity"; proclaiming God's eternal counsels as he travels from cities to
                    cities and also across nations with the gospel of our Lord Jesus marked with
                    many infallible proofs.
                  </p>
                  <p>
                    Through the help of the Holy Spirit, his ministry has significantly impacted
                    youths, teenagers, and young adults and adults; stirring revival and strong
                    passion in their heart to pursue after God, live for Him and become all that
                    God has ordained for them in eternity past.
                  </p>
                  <p>
                    He is joyfully married to Mrs. Edwin Emmanuella Otejiri and together they are
                    blessed with two lovely children, Menorah and Ezra.
                  </p>
                </>
              )}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-all"
              >
                {expanded ? (
                  <>
                    Read Less
                    <ChevronLeft className="h-4 w-4 rotate-90" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </>
                )}
              </button>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground mt-12 scroll-fade-in">
              "My vow is to serve my generation with the life and proofs of the gospel, proclaiming
              God's eternal counsels with many infallible proofs."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/80 font-medium">Purpose</span>
              <div className="h-[1px] w-12 bg-primary/50"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="card-elegant p-8 scroll-fade-in card-hover border-l-4 border-l-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a global community of believers who are deeply rooted in biblical truth,
                passionate about their walk with God, Consecrated to the Lord Jesus, and are positively affecting their 
                territories and colonizing for God. These will be men and women that will walk in the realities and fullness of all that are 
                available in Christ, balanced on every areas of life as crystallized in the scriptures, as we passionately anticipate 
                the coming of the Lord Jesus Christ.
              </p>
            </Card>

            <Card className="card-elegant p-8 scroll-fade-in card-hover border-l-4 border-l-secondary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reaching out to unsaved Souls, Discipling the saved, so that they can come into the realities of Christ
                and become all that God have ordained for them to be. We engage in these through the instrumentality of the word of God,
                intercessions, and discipleship. 
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-white/30"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-medium">Ministry</span>
              <div className="h-[1px] w-12 bg-white/30"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Achievements & Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center scroll-fade-in p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{achievement.title}</h3>
                <p className="text-white/70 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary/80 font-medium">Journey</span>
              <div className="h-[1px] w-12 bg-primary/50"></div>
            </div>
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
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-0.5"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card
                      className={`card-elegant p-6 ml-8 md:ml-0 scroll-fade-in card-hover ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div
                        className={`inline-block px-4 py-1.5 bg-primary text-white rounded-full text-sm font-medium mb-3`}
                      >
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