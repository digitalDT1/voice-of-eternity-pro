import { useEffect, useState } from "react";
import { Award, BookOpen, Users, Heart, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="scroll-fade-in">
              <div className="relative">
                <img
                  src={apostleEdwinPhoto}
                  alt="Apostle Edwin E. Otejiri"
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary p-4 rounded-xl text-white">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years Ministry</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="scroll-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Apostle & Voice of Eternity Founder
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gradient">
                Apostle Edwin E. Otejiri
              </h1>

              {/* Biography */}
              <div className="body-large text-muted-foreground mb-8 leading-relaxed space-y-4">
                {/* Always visible intro */}
                <p>
                  <strong>APOSTLE EDWIN E. OTEJIRI</strong> is a seasoned Bible teacher with a
                  distinct apostolic calling upon his life. Entirely devoted to God and His kingdom,
                  He has given himself wholly to the advancement of the gospel and the raising of
                  Believers who are walking in the realities of all that are available in Christ,
                  becoming Kingdom functionaries in every sphere of Life and fulfilling destiny with
                  the Spirit of excellence.
                </p>

                {/* Hidden unless expanded */}
                {expanded && (
                  <>
                    <p>
                      Currently serving as the Set Man of Bethel Apostolic Christian Fellowship,
                      based in Warri, Delta State, his ministry is marked by:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li>› Expository teaching of God's Word</li>
                      <li>› Apostolic unction</li>
                      <li>› Prophetic utterances</li>
                      <li>› Baptism of the Holy Spirit</li>
                      <li>› Healing</li>
                      <li>› Revival and lots more.</li>
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

              {/* Toggle Button */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-primary font-medium hover:underline mb-6"
              >
                {expanded ? "Read Less ▲" : "Read More ▼"}
              </button>

              {/* Extra Info */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Warri, Delta State</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Est. 2019</span>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
                "My vow is to serve my generation with the life and proofs of the gospel, proclaiming
                God's eternal counsels with many infallible proofs."
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
              Committed to spreading hope, building faith, and empowering believers to live out
              their God-given purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elegant p-8 scroll-fade-in card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a global community of believers who are deeply rooted in biblical truth,
                passionate about their walk with God, Consecraterd to the Lord  Jesus, and are postiviely affecting thier 
                territries and colonizing for God. These will be men and women that will walk in the realities and fullness of all that are 
                availaible in Christ, balanced on every areas of life as crystalized in the scriptures, as we passionately anticipate 
                the coming of the Lord Jesus Christ.
              </p>
            </Card>

            <Card className="card-elegant p-8 scroll-fade-in card-hover">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reaching out to unsaved Souls, Discipling the saved, so that they can come into the realities of Christ
                and become all that God have ordained for them to be..We engage in these through the intrumentality of the the word of God
                intercessions, and discipleship. 
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
              <Card
                key={index}
                className="card-elegant p-6 text-center scroll-fade-in card-hover"
              >
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
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card
                      className={`card-elegant p-6 ml-8 md:ml-0 scroll-fade-in card-hover ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div
                        className={`inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3`}
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
