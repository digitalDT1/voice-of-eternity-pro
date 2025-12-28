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
  const [showFloating, setShowFloating] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      // Show floating nav after scrolling past hero (100vh)
      setShowFloating(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Determine if we should use transparent style (only on home page when not scrolled)
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-background/95 backdrop-blur-md shadow-lg"
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
                      isTransparent 
                        ? location.pathname === item.href
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                        : location.pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
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
                  isTransparent ? "text-white hover:text-white/70" : "text-foreground hover:text-primary"
                }`}
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              <Link to="/support">
                <Button 
                  className={`text-xs font-medium tracking-[0.15em] uppercase px-6 py-2 rounded-none transition-all duration-300 ${
                    isTransparent 
                      ? "bg-white text-foreground hover:bg-white/90" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
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
                  isTransparent ? "text-white" : "text-foreground"
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

      {/* Floating Navigation - Appears after scrolling past hero */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ${
          showFloating && isHomePage
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-background/90 backdrop-blur-xl shadow-2xl rounded-full px-2 py-2 border border-border/50">
          <div className="flex items-center gap-1">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <img 
                src={voeLogo} 
                alt="Voice of Eternity Logo" 
                className="w-6 h-6"
              />
            </Link>

            {/* Divider */}
            <div className="w-[1px] h-6 bg-border/50 mx-2"></div>

            {/* Nav Items */}
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-full transition-all duration-300 ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="w-[1px] h-6 bg-border/50 mx-2"></div>

            {/* Cart */}
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>

            {/* Partnership Button */}
            <Link to="/support">
              <Button 
                className="text-xs font-medium tracking-wide uppercase px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Partnership
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
