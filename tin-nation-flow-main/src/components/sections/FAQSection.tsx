import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is TIN and how does it help immigrants?",
    answer: "TIN (The Immigrants' Nation) is a comprehensive platform designed by immigrants for immigrants. We provide verified information, planning tools, community support, and access to vetted professionals for anyone moving between the US, Canada, and India. Our goal is to eliminate the stress, scams, and uncertainty from the immigration process."
  },
  {
    question: "Is the TIN app available for both iOS and Android?",
    answer: "Yes! The TIN app is available for download on both the App Store (iOS) and Google Play Store (Android). You can also access our web platform from any browser. All features are synchronized across devices, so you can switch seamlessly between your phone, tablet, and computer."
  },
  {
    question: "How is TIN different from other immigration platforms?",
    answer: "TIN is unique because it's built by immigrants who have experienced the journey firsthand. We focus on verified information (no fake news), vetted professionals (no scams), real community support (not just forums), and practical tools that actually help you plan and execute your move. Plus, we're completely transparent about our verification process."
  },
  {
    question: "What does TIN cost? Are there any hidden fees?",
    answer: "TIN operates on a freemium model. Basic access to our community, verified information, and planning tools is completely free. Premium features like one-on-one consultations with vetted professionals, advanced planning tools, and priority community support are available through our subscription plans. We believe in transparency - no hidden fees, ever."
  },
  {
    question: "How do you verify the professionals on your platform?",
    answer: "Every professional on TIN goes through our rigorous 5-step verification process: license verification, background checks, client reference checks, expertise assessment, and ongoing performance monitoring. We also maintain a real-time rating system based on actual client feedback from our community."
  },
  {
    question: "Can I connect with other immigrants who moved to my target country?",
    answer: "Absolutely! Our community feature connects you with immigrants based on your origin country, destination, visa type, profession, and more. You can join country-specific groups, participate in Q&A sessions, and even find local meetups. Many lifelong friendships and professional networks have started on TIN."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about TIN and how we're revolutionizing 
            the immigration experience.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl mb-4 overflow-hidden scroll-animate hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-accent" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="p-6 pt-0 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Still have questions?
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Our community is here to help. Connect with fellow immigrants and experts 
              who can answer your specific questions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover-lift">
                Ask the Community
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover-lift">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}