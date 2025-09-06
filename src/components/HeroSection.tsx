import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Shield, ArrowRight, Zap, Lock, Cpu } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for the floating particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      
      gsap.set(particles, {
        position: 'absolute',
        opacity: 0.6,
      });

      Array.from(particles).forEach((particle, index) => {
        gsap.to(particle, {
          x: () => Math.random() * window.innerWidth,
          y: () => Math.random() * window.innerHeight,
          duration: 10 + Math.random() * 20,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5,
        });

        gsap.to(particle, {
          opacity: 0.2 + Math.random() * 0.6,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }

    // Hero text animations
    const tl = gsap.timeline();
    tl.from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from('.hero-tagline', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.hero-buttons', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.3');

  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Animated Background Particles */}
      <div ref={particlesRef} className="particle-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-primary rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-primary/20"
        >
          <Shield className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 text-accent/20"
        >
          <Lock className="w-12 h-12" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-20 text-primary/30"
        >
          <Cpu className="w-14 h-14" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 right-10 text-accent/25"
        >
          <Zap className="w-10 h-10" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative p-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-effect">
              <Shield className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-glow blur-2xl opacity-40 pulse-glow" />
          </div>
        </motion.div>

        {/* Title */}
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            ShieldSphere
          </span>
        </h1>

        {/* Tagline */}
        <p className="hero-tagline text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Where Innovation Meets Security
        </p>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Experience the future of cybersecurity with our cutting-edge portable security device. 
          ShieldSphere integrates multiple protection tools into a single, elegant solution that 
          makes digital security accessible and powerful for everyone.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="btn-hero group">
            Explore Features
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          
          <Button variant="outline" className="btn-ghost">
            Learn More
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '99.9%', label: 'Security Rating' },
            { number: '24/7', label: 'Protection' },
            { number: '1000+', label: 'Threat Detection' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;