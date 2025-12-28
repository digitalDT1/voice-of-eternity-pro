import { Heart, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import voeLogo from "@/assets/voe-logo-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Episodes", href: "/episodes" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ];

  const podcastPlatforms = [
    { name: "YouTube", href: "https://www.youtube.com/@Apostleedwine.otejiri1757", active: true },
    { name: "Spotify", href: "#", active: false },
    { name: "Apple Podcasts", href: "#", active: false },
    { name: "Google Podcasts", href: "#", active: false },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/Pst.EdwinOtejiri", icon: FaFacebookF, active: true },
    { name: "Instagram", href: "https://www.instagram.com/edwinotejiri/", icon: FaInstagram, active: true },
    { name: "YouTube", href: "https://www.youtube.com/@Apostleedwine.otejiri1757", icon: FaYoutube, active: true },
    { name: "TikTok", href: "https://www.tiktok.com/@apostle.edwin.e?_t=ZS-90kPO7qv9O6&_r=1", icon: FaTiktok, active: true },
    { name: "Telegram", href: "#", icon: FaTelegramPlane, active: false },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src={voeLogo} 
                alt="Voice of Eternity Logo" 
                className="w-10 h-10"
              />
              <div className="text-xl font-serif font-bold text-white">
                Voice of Eternity
              </div>
            </Link>
            <p className="text-white/60 mb-8 leading-relaxed text-sm">
              Proclaiming God's eternal counsels, bringing many into the realities of Christ and raising an army of consecrated men.
            </p>
            <div className="space-y-3">
              <a href="mailto:edwinteejay@gmail.com" className="flex items-center space-x-3 text-white/70 hover:text-secondary transition-colors text-sm">
                <Mail className="h-4 w-4" />
                <span>edwinteejay@gmail.com</span>
              </a>
              <a href="tel:+2347060974266" className="flex items-center space-x-3 text-white/70 hover:text-secondary transition-colors text-sm">
                <Phone className="h-4 w-4" />
                <span>+234 706 097 4266</span>
              </a>
              <div className="flex items-center space-x-3 text-white/50 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Warri, Delta State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-6 bg-white/30"></div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 font-medium">Navigation</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Podcast Platforms */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-6 bg-white/30"></div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 font-medium">Listen On</h3>
            </div>
            <ul className="space-y-3">
              {podcastPlatforms.map((platform) => (
                <li key={platform.name}>
                  {platform.active ? (
                    <a
                      href={platform.href}
                      className="text-white/70 hover:text-secondary transition-colors duration-200 flex items-center space-x-2 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{platform.name}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <div className="text-white/40 flex items-center space-x-2 text-sm">
                      <span>{platform.name}</span>
                      <span className="text-[10px] text-white/30">(Coming Soon)</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-6 bg-white/30"></div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 font-medium">Connect</h3>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social) => (
                social.active ? (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 bg-white/5 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-secondary"
                  >
                    <social.icon size={16} className="text-white" />
                  </a>
                ) : (
                  <div
                    key={social.name}
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center relative group cursor-not-allowed border border-white/5"
                  >
                    <social.icon size={16} className="text-white/30" />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-foreground text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Coming Soon
                    </div>
                  </div>
                )
              ))}
            </div>
            
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-medium mb-2 text-white text-sm">Stay Updated</h4>
              <p className="text-white/50 text-xs mb-4">
                Get notified about new episodes and exclusive content.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-secondary text-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/40 text-xs">
              © {currentYear} Voice of Eternity. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-white/40">
              <a href="#" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                Terms of Service
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-white/40 text-xs">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-secondary" />
              <span>for His glory</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;