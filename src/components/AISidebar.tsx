import { useState } from 'react';
import { Bot, Send, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AISidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AISidebar = ({ isOpen, onClose }: AISidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your ShieldSphere AI assistant. Ask me anything about cybersecurity, our products, or how we can help protect your digital world.',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Placeholder responses for different question types
  const getAIResponse = (question: string): string => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('what is shieldsphere') || lowerQ.includes('about shieldsphere')) {
      return 'ShieldSphere is a cutting-edge portable security device that integrates multiple cybersecurity tools into a single compact sphere. It combines IoT technologies like Raspberry Pi, ESP-8266, and ESP-32 to provide secure VPN access, network management, and real-time monitoring.';
    }
    
    if (lowerQ.includes('features') || lowerQ.includes('what can it do')) {
      return 'ShieldSphere offers secure VPN access, network management, privacy protection, real-time data monitoring, guided security tutorials through our mobile app, and seamless integration with your existing devices.';
    }
    
    if (lowerQ.includes('security') || lowerQ.includes('protection')) {
      return 'Our security approach includes multi-layered encryption, zero-trust network architecture, continuous threat monitoring, and automatic security updates to protect against emerging threats.';
    }
    
    if (lowerQ.includes('price') || lowerQ.includes('cost')) {
      return 'ShieldSphere is currently in development. Pricing information will be available soon. Sign up for our newsletter to be notified when pre-orders begin!';
    }
    
    return 'Thank you for your question! ShieldSphere is designed to make cybersecurity accessible and effective for everyone. Our team is working on providing comprehensive solutions for all your security needs.';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Cybersecurity Expert</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="hover:bg-muted"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about cybersecurity..."
                  className="flex-1 bg-background"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Floating AI Button Component
export const AIButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground shadow-glow hover:shadow-neon transition-all duration-300 z-30 group"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute inset-0 bg-gradient-glow rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
      </motion.button>
      
      <AISidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AISidebar;