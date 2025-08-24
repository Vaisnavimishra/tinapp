import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="w-full">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <FAQSection />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default Index;
