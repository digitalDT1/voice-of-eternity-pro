import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Far Left */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src={voeLogo} 
              alt="Voice of Eternity Logo" 
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-xs font-light tracking-[0.2em] uppercase transition-all duration-300 ${
                    scrolled 
                      ? location.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                      : location.pathname === item.href
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Cart & Partnership */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
            <button 
              className={`transition-colors duration-300 ${
                scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/70"
              }`}
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Link to="/support">
              <Button 
                className={`text-xs font-medium tracking-[0.15em] uppercase px-6 py-2 rounded-none transition-all duration-300 ${
                  scrolled 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-white text-foreground hover:bg-white/90"
                }`}
              >
                Partnership
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-200 rounded-lg p-2 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-background/95 backdrop-blur-md rounded-b-xl shadow-lg">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`block px-4 py-3 text-sm font-light tracking-wider uppercase transition-all duration-200 ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/support" 
                className="block mx-4 mt-4"
              >
                <Button className="w-full text-xs font-medium tracking-wider uppercase">
                  Partnership
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
