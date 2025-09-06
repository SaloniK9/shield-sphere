import HeroSection from '../components/HeroSection';
import NewsletterSection from '../components/NewsletterSection';
import { AIButton } from '../components/AISidebar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewsletterSection />
      <AIButton />
    </div>
  );
};

export default Index;
