import { useEffect, useState } from "react";
import { Play, Calendar, Clock, Search, Filter, BookOpen, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Episodes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const categories = ["All", "Faith", "Purpose", "Growth", "Relationships", "Prayer"];

  const episodes = [
    {
      id: 1,
      title: "Walking in Purpose: Discovering God's Plan for Your Life",
      description: "A powerful message about finding your divine calling and living with intentionality. Learn how to discern God's voice and step confidently into your purpose.",
      date: "December 15, 2024",
      duration: "42 min",
      category: "Purpose",
      featured: true
    },
    {
      id: 2,
      title: "The Power of Persistent Prayer",
      description: "Understanding the importance of consistency in prayer and how it transforms our relationship with God and impacts our daily lives.",
      date: "December 8, 2024",
      duration: "38 min",
      category: "Prayer"
    },
    {
      id: 3,
      title: "Building Unshakeable Faith in Uncertain Times",
      description: "How to maintain strong faith when facing life's storms and unexpected challenges. Biblical principles for standing firm in difficult seasons.",
      date: "December 1, 2024",
      duration: "45 min",
      category: "Faith"
    },
    {
      id: 4,
      title: "Relationships that Reflect Christ",
      description: "Practical wisdom for building healthy, Christ-centered relationships in marriage, friendship, and community. Love in action.",
      date: "November 24, 2024",
      duration: "40 min",
      category: "Relationships"
    },
    {
      id: 5,
      title: "The Journey of Spiritual Growth",
      description: "Understanding the process of sanctification and how God shapes us through various seasons of life. Embracing growth through trials.",
      date: "November 17, 2024",
      duration: "36 min",
      category: "Growth"
    },
    {
      id: 6,
      title: "Finding Hope in God's Promises",
      description: "Anchoring our hope in the unchanging promises of God. How biblical hope differs from wishful thinking and sustains us through difficulties.",
      date: "November 10, 2024",
      duration: "41 min",
      category: "Faith"
    },
    {
      id: 7,
      title: "Stewardship: Managing What God Has Given",
      description: "Biblical principles of stewardship covering time, talents, and treasures. Living as faithful managers of God's gifts.",
      date: "November 3, 2024",
      duration: "39 min",
      category: "Purpose"
    },
    {
      id: 8,
      title: "The Art of Forgiveness",
      description: "Understanding forgiveness from God's perspective and learning to extend grace to others as Christ has forgiven us.",
      date: "October 27, 2024",
      duration: "44 min",
      category: "Growth"
    }
  ];

  const filteredEpisodes = episodes.filter((episode) => {
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || episode.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const books = [
    {
      id: 1,
      title: "Walking in the Fullness of Christ",
      description: "A comprehensive guide to understanding and experiencing the complete work of Christ in your life.",
      price: "$19.99",
      featured: true
    },
    {
      id: 2,
      title: "The Kingdom Functionary",
      description: "Discovering your role and function in advancing God's kingdom on earth.",
      price: "$15.99",
      featured: false
    },
    {
      id: 3,
      title: "Consecration: The Path to Spiritual Excellence",
      description: "Biblical principles for living a consecrated life devoted to God's purposes.",
      price: "$17.99",
      featured: false
    },
    {
      id: 4,
      title: "Eternal Counsels",
      description: "Understanding God's timeless wisdom and applying it to modern life challenges.",
      price: "$21.99",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center scroll-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6">
              Podcast Episodes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Dive deep into transformative messages designed to strengthen your faith, clarify your purpose, and guide your spiritual journey.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search episodes..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <select
                    className="px-4 py-2 border border-input rounded-lg bg-background text-foreground"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      {filteredEpisodes.some(ep => ep.featured) && (
        <section className="py-16">
          <div className="container-custom">
            <div className="scroll-fade-in mb-8">
              <h2 className="text-3xl font-serif font-bold text-center mb-2">Featured Episode</h2>
              <p className="text-muted-foreground text-center">Don't miss our latest transformative message</p>
            </div>
            
            {filteredEpisodes.filter(ep => ep.featured).map((episode) => (
              <Card key={episode.id} className="card-elegant p-8 scroll-fade-in card-hover">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 lg:mb-0">
                      <Play className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-secondary/10 text-secondary border-secondary/20">Featured</Badge>
                      <Badge variant="outline">{episode.category}</Badge>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{episode.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{episode.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{episode.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{episode.duration}</span>
                        </div>
                      </div>
                      <Button className="btn-hero group">
                        <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Episodes */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-2">
              All Episodes ({filteredEpisodes.length})
            </h2>
            <p className="text-muted-foreground">Explore our complete library of inspiring messages</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode, index) => (
              <Card key={episode.id} className="card-elegant p-6 scroll-fade-in card-hover">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">{episode.category}</Badge>
                  {episode.featured && (
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-xs">Featured</Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-serif font-semibold mb-2 line-clamp-2">{episode.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{episode.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{episode.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{episode.duration}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Listen
                </Button>
              </Card>
            ))}
          </div>

          {filteredEpisodes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No episodes found matching your search.</p>
              <Button variant="outline" onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Books Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="scroll-fade-in text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Ministry Resources</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              Books by Apostle Edwin
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deepen your understanding of God's Word with these transformative books that explore biblical truths and practical application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <Card key={book.id} className="card-elegant p-6 scroll-fade-in card-hover">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                
                {book.featured && (
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-xs mb-2">
                    Featured
                  </Badge>
                )}
                
                <h3 className="text-lg font-serif font-semibold mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{book.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{book.price}</span>
                </div>
                
                <Button className="w-full btn-secondary group">
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Purchase Book
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Episodes;