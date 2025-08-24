import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, Users, Globe2, Target } from 'lucide-react';

const founders = [
  {
    name: 'Rachit',
    role: 'CEO ',
    bio: 'Rachit brings years of experience in business strategy, operations and corporate finance, driving data-driven growth in industries like tech, logistics and financial services. Besides his love for video games and football, Rachit loves adventure activities for those periodic shots of adrenaline.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Pulkit',
    role: 'CTO & Co-Founder',
    bio: 'Pulkit brings over a decade of expertise in scaling operations, streamlining supply chains, and driving growth for brands like Zoomcar and Greaves Electric Mobility. A travel enthusiast and foodie, Pulkit loves exploring new destinations and savoring diverse cuisines whenever he gets the chance',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Rubaina',
    role: 'CMO',
    bio: 'Rubaina is an entrepreneur and content creator, specializing in business growth and crafting impactful content strategies. She comes with 8+ years experience in tech and marketing. A creative at heart, Rubaina yearns for bucket-list travel experiences and has a passion for creating meaningful connections with people.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
            About TIN
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We're building the world's most comprehensive immigration platform, powered by AI and driven by empathy.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Immigration shouldn't be overwhelming. We believe everyone deserves clear guidance, 
              personalized support, and access to expert knowledge when making life-changing moves 
              across borders.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TIN combines cutting-edge AI technology with human expertise to make immigration 
              processes transparent, efficient, and accessible to everyone.
            </p>
          </div>
          <div className="fade-in-up stagger-1">
            <Card className="glass-panel p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Users Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Support</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* How Users Benefit Section */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              How TIN Transforms Your Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From confusion to clarity, from stress to success - here's how we make immigration simple.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Personalized Path',
                description: 'AI analyzes your profile to create a custom immigration roadmap tailored to your goals.'
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Connect with certified immigration consultants and lawyers when you need human expertise.'
              },
              {
                icon: Globe2,
                title: 'Multi-Country Support',
                description: 'Navigate immigration laws across 25+ countries with localized insights and requirements.'
              },
              {
                icon: Smartphone,
                title: 'Mobile-First Experience',
                description: 'Manage your entire immigration journey from your phone with our intuitive mobile app.'
              }
            ].map((benefit, index) => (
              <Card key={benefit.title} className={`glass-panel glass-hover p-6 text-center space-y-4 fade-in-up stagger-${index + 1}`}>
                <div className="mx-auto p-3 bg-primary/10 rounded-xl w-fit">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Founders Section */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built by immigrants, for immigrants. Our diverse team understands your journey because we've lived it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={founder.name} className={`glass-panel glass-hover p-8 text-center space-y-6 fade-in-up stagger-${index + 1}`}>
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden bg-primary/10">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&background=3b82f6&color=fff&size=150`;
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Download App CTA */}
        <section className="text-center">
          <Card className="glass-panel p-12 glass-hover fade-in-up">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of immigrants who trust TIN to guide them through their immigration journey.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-variant text-lg px-8 py-4 h-auto">
                <Smartphone className="mr-2 h-5 w-5" />
                Download TIN App
              </Button>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default About;