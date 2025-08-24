import { Lightbulb, Wrench, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Verified Information',
    description: 'Access curated, up-to-date immigration information verified by our expert community.',
    highlight: 'Always Accurate'
  },
  {
    icon: Wrench,
    title: 'Planning Tools',
    description: 'Comprehensive tools to plan your immigration journey with timelines and checklists.',
    highlight: 'Step-by-Step'
  },
  {
    icon: Users,
    title: 'Global Community',
    description: 'Connect with fellow immigrants who have walked the same path across 50+ countries.',
    highlight: '10K+ Members'
  },
  {
    icon: CheckCircle,
    title: 'Vetted Professionals',
    description: 'Find trusted immigration lawyers, consultants, and service providers in your area.',
    highlight: '100% Verified'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <span className="text-accent text-sm font-medium">Built By Immigrants</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Everything You Need
            <br />
            <span className="text-foreground">To Move Forward</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            TIN provides comprehensive immigration support built on real experiences and community wisdom.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={feature.title}
                className="glass-card p-8 rounded-2xl hover-lift group scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-accent">{feature.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-1 bg-gradient-to-r from-accent to-primary-blue rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of immigrants who trust TIN for their journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover-lift">
                Join Community
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover-lift">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}