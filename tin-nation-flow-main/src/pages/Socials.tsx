import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Users, Clock, FileText, MessageCircle, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Information',
      description: 'Access curated, up-to-date immigration information verified by our expert community.',
      details: ['Real-time updates', 'Expert verification', 'Comprehensive coverage']
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with fellow immigrants who have walked the same path across 50+ countries.',
      details: ['10K+ active members', 'Peer support network', 'Success stories']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock AI and human support.',
      details: ['AI-powered assistance', 'Human expert backup', 'Instant responses']
    },
    {
      icon: FileText,
      title: 'Planning Tools',
      description: 'Comprehensive tools to plan your immigration journey with timelines and checklists.',
      details: ['Interactive timelines', 'Document checklists', 'Progress tracking']
    },
    {
      icon: MessageCircle,
      title: 'Expert Consultations',
      description: 'Connect with verified immigration professionals for personalized guidance.',
      details: ['Licensed professionals', 'One-on-one consultations', 'Affordable rates']
    },
    {
      icon: CheckCircle,
      title: 'Success Guarantee',
      description: 'Our proven process ensures the highest success rates for immigration applications.',
      details: ['95% success rate', 'Money-back guarantee', 'End-to-end support']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Powerful <span className="gradient-text">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to navigate your immigration journey with confidence and success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={feature.title} className="p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>

                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Card className="p-12 bg-muted/30 border border-border">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Ready to Experience These <span className="gradient-text">Features</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of immigrants who are already using TIN to achieve their dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8">
                  Join TIN Now
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Features;