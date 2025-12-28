import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Sun, Moon } from "lucide-react";
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

// Pages with dark hero sections that need light text
const darkHeroPages = ["/", "/about", "/episodes", "/support", "/contact"];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Check if current page has a dark hero section
  const hasDarkHero = darkHeroPages.includes(location.pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      // Show floating nav after scrolling 300px on all pages
      setShowFloating(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Determine if we should use transparent style with light text
  const isTransparent = hasDarkHero && !scrolled;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Main Navigation - Hide when floating nav appears (desktop only) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showFloating && !isOpen
            ? "lg:opacity-0 lg:-translate-y-full lg:pointer-events-none opacity-100 translate-y-0"
            : "opacity-100 translate-y-0"
        } ${
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
                className={`w-10 h-10 md:w-12 md:h-12 ${isTransparent ? "brightness-0 invert" : ""}`}
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

            {/* Right Side - Theme Toggle, Cart & Partnership */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              {/* Theme Toggle */}
              {mounted && (
                <button 
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    isTransparent 
                      ? "text-white hover:bg-white/10" 
                      : "text-foreground hover:bg-accent"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              )}
              
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
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Theme Toggle */}
              {mounted && (
                <button 
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    isTransparent 
                      ? "text-white hover:bg-white/10" 
                      : "text-foreground hover:bg-accent"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              )}
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

      {/* Floating Navigation - Desktop only, hidden when mobile menu is open */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 hidden lg:block ${
          showFloating && !isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl shadow-2xl rounded-full px-3 py-2 border border-border">
          <div className="flex items-center gap-1">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-primary/90 transition-colors"
            >
              <img 
                src={voeLogo} 
                alt="Voice of Eternity Logo" 
                className="w-8 h-8 brightness-0 invert"
              />
            </Link>

            {/* Divider */}
            <div className="w-[1px] h-6 bg-border mx-2"></div>

            {/* Nav Items */}
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-full transition-all duration-300 ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="w-[1px] h-6 bg-border mx-2"></div>

            {/* Theme Toggle */}
            {mounted && (
              <button 
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:text-primary hover:bg-accent transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}

            {/* Cart */}
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:text-primary hover:bg-accent transition-all"
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
