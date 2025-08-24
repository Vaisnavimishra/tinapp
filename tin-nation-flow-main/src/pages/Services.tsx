import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, FileText, MessageCircle, CheckCircle, Clock, Shield, Star, ArrowRight, Download } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Expert Mentoring',
      description: 'Connect with verified mentors who have successfully completed their immigration journey.',
      features: [
        'One-on-one mentorship sessions',
        'Country-specific guidance',
        'Success story sharing',
        'Peer support network'
      ],
      pricing: 'Starting from $49/month'
    },
    {
      icon: FileText,
      title: 'Documentation Guidance',
      description: 'Get comprehensive support for all your immigration documents and paperwork.',
      features: [
        'Document checklist creation',
        'Template library access',
        'Real-time verification',
        'Deadline management'
      ],
      pricing: 'Starting from $29/document'
    },
    {
      icon: MessageCircle,
      title: 'Personalized Support',
      description: 'Receive tailored support based on your unique immigration goals and circumstances.',
      features: [
        '24/7 chat support',
        'Personalized roadmaps',
        'Progress tracking',
        'Expert consultations'
      ],
      pricing: 'Starting from $99/month'
    }
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Get help whenever you need it, regardless of time zones.'
    },
    {
      icon: Shield,
      title: 'Verified Experts',
      description: 'All our mentors and consultants are verified professionals.'
    },
    {
      icon: Star,
      title: 'Proven Success',
      description: '95% success rate with our comprehensive support system.'
    },
    {
      icon: CheckCircle,
      title: 'End-to-End Support',
      description: 'From planning to approval, we support your entire journey.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support to make your immigration journey smooth and successful with real, personalized services.
          </p>
        </section>

        {/* Main Services */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              How We Help You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive services are designed to simplify your immigration process at every step.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`p-8 space-y-6 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 fade-in-up stagger-${index + 1}`}>
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.pricing}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Features */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide real value with proven results and comprehensive support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (
              <Card key={feature.title} className={`p-6 text-center space-y-4 border border-primary/20 hover:shadow-lg transition-shadow fade-in-up stagger-${index + 1}`}>
                <div className="mx-auto p-3 bg-primary/10 rounded-xl w-fit">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Process */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and effective approach to immigration support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'We analyze your profile and create a personalized immigration plan tailored to your goals.'
              },
              {
                step: '02',
                title: 'Expert Assignment',
                description: 'Get matched with verified mentors and consultants who specialize in your target country.'
              },
              {
                step: '03',
                title: 'Ongoing Support',
                description: 'Receive continuous guidance and support throughout your entire immigration journey.'
              }
            ].map((process, index) => (
              <Card key={process.step} className={`p-8 text-center space-y-4 border border-primary/20 fade-in-up stagger-${index + 1}`}>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-12 bg-primary/5 border-2 border-primary/20 fade-in-up">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Download the TIN app and get access to all our services with expert support from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4 h-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Services;