import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import voeLogo from "@/assets/voe-logo-transparent.png";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Episodes", href: "/episodes" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container-custom flex flex-wrap items-center justify-between text-sm gap-2">
          <div className="flex items-center gap-4">
            <a href="mailto:edwinteejay@gmail.com" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">edwinteejay@gmail.com</span>
            </a>
            <a href="tel:+2347060974266" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="h-3 w-3" />
              <span>+234 706 097 4266</span>
            </a>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-8 w-8 px-0 text-white hover:text-secondary hover:bg-white/10"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
      
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={voeLogo} 
              alt="Voice of Eternity Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div className="text-xl md:text-2xl font-serif font-bold text-gradient">
              Voice of Eternity
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground dark:text-white hover:text-secondary"
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    location.pathname === item.href ? "after:scale-x-100" : ""
                  }`}
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  {item.name}
                </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white dark:text-foreground hover:text-secondary transition-colors duration-200 rounded-lg"
              style={{ minHeight: '44px', minWidth: '44px', padding: '10px' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-background/95 backdrop-blur-md rounded-b-xl shadow-card border-b border-border">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-primary"
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};