import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Wifi, Lock, Smartphone, Server, Eye, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../components/ui/collapsible';

const About = () => {
  const [openFeatures, setOpenFeatures] = useState<number[]>([0]);

  const features = [
    {
      icon: Wifi,
      title: 'Secure VPN Access',
      description: 'Advanced VPN technology with military-grade encryption',
      details: 'ShieldSphere provides secure VPN access through advanced tunneling protocols, ensuring your internet traffic remains private and encrypted. Our VPN service includes automatic kill-switch protection, DNS leak prevention, and support for multiple server locations worldwide.',
    },
    {
      icon: Server,
      title: 'Network Management',
      description: 'Comprehensive network monitoring and control',
      details: 'Monitor and manage your entire network infrastructure with real-time insights. Track device connections, bandwidth usage, and network performance. Set up custom firewall rules and access controls to protect your network perimeter.',
    },
    {
      icon: Lock,
      title: 'Privacy Protection',
      description: 'Multi-layered privacy safeguards for complete anonymity',
      details: 'Advanced privacy protection includes tracker blocking, ad filtering, malware detection, and anonymous browsing capabilities. Our system actively protects against fingerprinting and ensures your online activities remain completely private.',
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous threat detection and analysis',
      details: 'Our AI-powered monitoring system continuously scans for threats, suspicious activities, and security vulnerabilities. Get instant alerts for potential breaches and automated responses to common security threats.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Intuitive mobile app with guided tutorials',
      details: 'The ShieldSphere mobile app provides an intuitive interface for managing your security device. Features include guided setup tutorials, remote configuration, security status monitoring, and one-touch emergency protection modes.',
    },
    {
      icon: Shield,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and platforms',
      details: 'Built on Raspberry Pi, ESP-8266, ESP-32, and NodeMCU technologies, ShieldSphere seamlessly integrates with your existing IoT ecosystem. Protect smart home devices, industrial sensors, and connected appliances with enterprise-grade security.',
    },
  ];

  const toggleFeature = (index: number) => {
    setOpenFeatures(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ShieldSphere
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where Innovation Meets Security
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="feature-card max-w-4xl mx-auto mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              The Future of Cybersecurity
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              ShieldSphere is a cutting-edge portable security device designed to make cybersecurity simple, 
              accessible, and robust for everyone. Combining multiple tools into a single compact sphere, 
              ShieldSphere integrates IoT technologies—such as Raspberry Pi, ESP-8266, ESP-32, and NodeMCU—to 
              offer features like secure VPN access, network management, privacy protection, and real-time data 
              monitoring. Unlike traditional, complex security solutions, ShieldSphere provides a user-friendly 
              experience, enhanced by a mobile app with guided tutorials and secure VPN services for safer 
              online connectivity.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the comprehensive security features that make ShieldSphere 
            the ultimate cybersecurity solution for modern digital protection.
          </p>
        </motion.div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Collapsible
                open={openFeatures.includes(index)}
                onOpenChange={() => toggleFeature(index)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full p-6 h-auto feature-card hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-foreground">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      {openFeatures.includes(index) ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-6 pb-4">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 border-t border-border/50"
                  >
                    <p className="text-foreground/80 leading-relaxed">
                      {feature.details}
                    </p>
                  </motion.div>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="feature-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ShieldSphere?
              </span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the future of cybersecurity and protect your digital world with cutting-edge technology.
            </p>
            <Button className="btn-hero">
              Get Early Access
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;