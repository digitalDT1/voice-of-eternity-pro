import { Heart, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
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
    { name: "Spotify", href: "#" },
    { name: "Apple Podcasts", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Google Podcasts", href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src={voeLogo} 
                alt="Voice of Eternity Logo" 
                className="w-10 h-10"
              />
              <div className="text-2xl font-serif font-bold text-white">
                Voice of Eternity
              </div>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Proclaiming God's eternal counsels, bringing many into the realities of Christ and raising an army of consecrated men.
            </p>
            <div className="space-y-3">
              <a href="mailto:edwinotejiriinvite@gmail.com" className="flex items-center space-x-3 text-white hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                <span>edwinotejiriinvite@gmail.com</span>
              </a>
              <a href="tel:+2348108159472" className="flex items-center space-x-3 text-white hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+234 810 815 9472</span>
              </a>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-4 w-4" />
                <span>Warri, Delta State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-secondary transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Podcast Platforms */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Listen On</h3>
            <ul className="space-y-3">
              {podcastPlatforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{platform.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Connect With Us</h3>
            <ul className="space-y-3 mb-6">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{social.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-white">Stay Updated</h4>
              <p className="text-white/70 text-sm mb-3">
                Get notified about new episodes and exclusive content.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-secondary text-primary font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} Voice of Eternity. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-white/70 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-secondary" />
              <span>for His glory</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
