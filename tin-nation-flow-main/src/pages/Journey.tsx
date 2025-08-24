import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, CheckCircle, ArrowRight, MapPin, Calendar, FileText, Users, Download, Star } from 'lucide-react';

const Journey = () => {
  const journeySteps = [
    {
      step: '01',
      title: 'Profile Assessment',
      description: 'Complete your detailed profile to help our AI understand your unique situation.',
      features: ['Personal background analysis', 'Skills & education mapping', 'Goal setting & timeline'],
      appBenefit: 'Get personalized mentor matching based on your profile'
    },
    {
      step: '02', 
      title: 'Country Matching',
      description: 'Get matched with the best immigration destinations based on your profile.',
      features: ['AI-powered country recommendations', 'Visa eligibility assessment', 'Success probability scoring'],
      appBenefit: 'Access to professional immigration consultants for each country'
    },
    {
      step: '03',
      title: 'Document Planning',
      description: 'Receive a personalized checklist of all required documents and deadlines.',
      features: ['Custom document timeline', 'Template library access', 'Progress tracking'],
      appBenefit: 'Proper document templates and real-time verification support'
    },
    {
      step: '04',
      title: 'Application Support',
      description: 'Get step-by-step guidance through your application process.',
      features: ['Form filling assistance', 'Expert review sessions', 'Submission tracking'],
      appBenefit: 'Smooth onboarding with dedicated support team'
    }
  ];

  const appBenefits = [
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Connect with verified mentors who have successfully immigrated to your target country.'
    },
    {
      icon: FileText,
      title: 'Professional Guidance', 
      description: 'Get step-by-step guidance from licensed immigration professionals.'
    },
    {
      icon: CheckCircle,
      title: 'Document Support',
      description: 'Access proper document templates and verification to avoid rejections.'
    },
    {
      icon: Smartphone,
      title: 'Smooth Onboarding',
      description: 'Easy app onboarding with personalized dashboard and progress tracking.'
    }
  ];

  const appScreenshots = [
    {
      title: 'Dashboard Overview',
      description: 'Track your progress and next steps at a glance'
    },
    {
      title: 'Country Explorer',
      description: 'Discover immigration opportunities worldwide'
    },
    {
      title: 'Document Manager',
      description: 'Organize and track all your immigration documents'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
            Your Personalised Journey
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Every immigration story is unique. TIN creates a personalized roadmap tailored specifically to your goals, background, and circumstances.
          </p>
        </section>

        {/* Journey Steps */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              How Your Journey Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From initial assessment to successful application, we guide you through every step.
            </p>
          </div>

          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <Card key={step.step} className={`glass-panel glass-hover p-8 fade-in-up stagger-${index + 1}`}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">{step.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                  
                   <div className="lg:col-span-2 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <div className="flex items-center space-x-2">
                        <Download className="h-5 w-5 text-primary" />
                        <span className="font-medium text-primary">App Benefit:</span>
                        <span className="text-sm">{step.appBenefit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Download TIN App Section */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Why Download TIN App?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get access to real services that simplify your immigration journey with expert support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appBenefits.map((benefit, index) => (
              <Card key={benefit.title} className={`p-6 text-center space-y-4 border-2 border-primary/10 hover:border-primary/30 transition-colors fade-in-up stagger-${index + 1}`}>
                <div className="mx-auto p-3 bg-primary/10 rounded-xl w-fit">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Step-by-Step Journey in App
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our mobile app guides you through each step of your immigration process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appScreenshots.map((screenshot, index) => (
              <Card key={screenshot.title} className={`p-6 text-center space-y-6 border border-primary/20 hover:shadow-lg transition-shadow fade-in-up stagger-${index + 1}`}>
                {/* Enhanced app screenshot mockup */}
                <div className="mx-auto w-48 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex flex-col items-center justify-center border-2 border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-primary/10 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-center space-y-4 mt-4">
                    <Smartphone className="h-12 w-12 text-primary mx-auto" />
                    <div className="space-y-2 px-4">
                      <div className="text-xs font-semibold text-primary">Step {index + 1}</div>
                      <div className="h-2 bg-primary/20 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{width: `${(index + 1) * 25}%`}}></div>
                      </div>
                      <div className="text-xs text-muted-foreground">Progress tracking</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                  <div className="flex items-center justify-center space-x-1 text-xs text-primary">
                    <Star className="h-3 w-3" />
                    <span>Real-time guidance</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Information */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Why Trust TIN with Your Journey?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Global Expertise',
                description: 'Our platform covers immigration processes for 25+ countries with local expertise and up-to-date regulations.',
                stat: '25+ Countries'
              },
              {
                icon: Calendar,
                title: 'Proven Track Record',
                description: 'Over 50,000 successful immigration journeys completed with our guidance and support.',
                stat: '50K+ Success Stories'
              },
              {
                icon: FileText,
                title: 'Comprehensive Support',
                description: 'From initial assessment to final approval, we provide end-to-end support for your entire journey.',
                stat: '95% Success Rate'
              }
            ].map((info, index) => (
              <Card key={info.title} className={`glass-panel glass-hover p-8 text-center space-y-6 fade-in-up stagger-${index + 1}`}>
                <div className="mx-auto p-4 bg-primary/10 rounded-2xl w-fit">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">{info.stat}</div>
                  <h3 className="text-xl font-semibold">{info.title}</h3>
                  <p className="text-muted-foreground">{info.description}</p>
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
                Start Your Personalised Journey Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Download the TIN app and get your personalized immigration roadmap in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-variant text-lg px-8 py-4 h-auto">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download App
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto glass-hover border-white/20">
                  View Demo
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

export default Journey;