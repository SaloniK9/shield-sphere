import { Shield, Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Website', icon: ExternalLink, href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ShieldSphere
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where Innovation Meets Security. Advanced cybersecurity solutions for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Home
              </a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                About
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-200 group"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 ShieldSphere. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;