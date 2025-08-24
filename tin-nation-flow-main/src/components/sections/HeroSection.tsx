import { ArrowRight, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pulse-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Trusted by 10,000+ immigrants</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-hero-text">Switch Countries,</span>
            <br />
            <span className="gradient-text">With TIN</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Your trusted companion for seamless immigration between the US, Canada, and India. 
            Built by immigrants, for immigrants.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">0</div>
              <div className="text-sm text-muted-foreground">Scams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">∞</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-animate">
            <Button size="lg" className="group hover-lift">
              Join TIN Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button size="lg" variant="outline" className="group hover-lift">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>

            <Button size="lg" variant="ghost" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* AI Chatbot Bar */}
          <div className="mt-16 scroll-animate">
            <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">AI</span>
                </div>
                <div className="flex-1">
                  <div className="bg-secondary/50 rounded-xl px-4 py-3 text-left border border-border">
                    <p className="text-foreground">Ask me anything about immigration to US, Canada, or India...</p>
                  </div>
                </div>
                <Button size="sm" className="hover-lift">
                  Send
                </Button>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="text-xs text-muted-foreground">Powered by TIN AI</span>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by immigrants from</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-foreground">
              <span>🇺🇸 United States</span>
              <span>🇨🇦 Canada</span>
              <span>🇮🇳 India</span>
              <span>🌍 50+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}