import { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Newsletter Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 md:p-16 rounded-3xl text-center scroll-animate">
            {/* Icon */}
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail className="h-10 w-10 text-accent" />
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Subscribe to the Newsletter
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest immigration updates, success stories, and exclusive resources 
              delivered directly to your inbox. Join 10,000+ immigrants staying informed.
            </p>

            {/* Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 px-4 rounded-lg border border-border bg-background"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="h-12 px-6 group hover-lift"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto mb-8">
                <div className="flex items-center justify-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Successfully subscribed!</span>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Weekly Updates</h4>
                  <p className="text-sm text-muted-foreground">Immigration news and policy changes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Success Stories</h4>
                  <p className="text-sm text-muted-foreground">Real immigrant experiences and tips</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Exclusive Resources</h4>
                  <p className="text-sm text-muted-foreground">Tools and guides for subscribers only</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <span>📧 No spam, ever</span>
                <span>•</span>
                <span>🔒 Your email is safe</span>
                <span>•</span>
                <span>✨ Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center scroll-animate">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to start your immigration journey?
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Join TIN today and connect with a community that understands your journey. 
              Get access to verified information, planning tools, and expert support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                Join TIN Community
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Download Mobile App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}