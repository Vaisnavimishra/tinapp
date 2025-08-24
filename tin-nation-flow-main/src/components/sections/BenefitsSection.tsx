import { Shield, Users2, Clock, Infinity } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    value: '0',
    label: 'Scams',
    description: 'Complete protection from fraudulent services',
    color: 'text-green-500'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Verified Businesses',
    description: 'Every service provider is thoroughly vetted',
    color: 'text-accent'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Community Support',
    description: 'Round-the-clock help from fellow immigrants',
    color: 'text-primary-blue'
  },
  {
    icon: Infinity,
    value: '∞',
    label: 'Resources',
    description: 'Unlimited access to immigration knowledge',
    color: 'text-purple-500'
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 rotating-gradient opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">TIN</span> = 
            <span className="text-foreground"> Peace of Mind</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience immigration without the stress, scams, or uncertainty. 
            TIN provides the security and support you deserve.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div 
                key={benefit.label}
                className="text-center scroll-animate hover-lift group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col items-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>

                  {/* Value */}
                  <div className={`text-5xl font-bold mb-2 ${benefit.color}`}>
                    {benefit.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {benefit.label}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Progress Bar Animation */}
                  <div className="w-full mt-6">
                    <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-accent to-primary-blue rounded-full transition-all duration-1000 delay-500 group-hover:w-full`}
                        style={{ width: index === 0 ? '100%' : index === 1 ? '100%' : index === 2 ? '75%' : '90%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-24 scroll-animate">
          <div className="glass-card p-12 rounded-2xl text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Trusted by Immigration Experts
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              "TIN has revolutionized how immigrants access reliable information and connect with verified professionals. 
              It's the platform I recommend to all my clients."
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold">MK</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Maria Kumar</div>
                <div className="text-sm text-muted-foreground">Immigration Attorney, 15+ years</div>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-accent rounded-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}