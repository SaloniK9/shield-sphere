import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-glow" />
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-32 h-32 rounded-full bg-primary blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
            <Mail className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Stay{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Protected
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Get the latest cybersecurity insights, ShieldSphere updates, and exclusive early access 
          to new features delivered directly to your inbox.
        </motion.p>

        {/* Newsletter Form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-background/50 border-border focus:border-primary transition-colors duration-200 pr-12"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
              
              <Button
                type="submit"
                className="w-full btn-hero group"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-3 p-6 rounded-lg bg-primary/10 border border-primary/30"
            >
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">
                Thank you for subscribing!
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Privacy Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground mt-4"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Security Updates',
              description: 'Latest threat intelligence and protection updates',
            },
            {
              title: 'Product News',
              description: 'New features and ShieldSphere developments',
            },
            {
              title: 'Expert Tips',
              description: 'Cybersecurity best practices and guides',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-background/30 border border-border/50 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;