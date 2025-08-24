import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, Users, Calendar, FileText, MessageCircle, BarChart3, Shield, Zap } from 'lucide-react';

const Workspace = () => {
  const workspaceFeatures = [
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Centralized storage for all your immigration documents with smart organization and reminders.',
      benefits: ['Secure cloud storage', 'Auto-categorization', 'Deadline tracking', 'Share with advisors']
    },
    {
      icon: Calendar,
      title: 'Timeline Tracking',
      description: 'Visual timeline of your immigration process with automated updates and milestone celebrations.',
      benefits: ['Progress visualization', 'Milestone alerts', 'Deadline management', 'Success celebrations']
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with certified immigration lawyers, consultants, and fellow immigrants in your area.',
      benefits: ['Verified experts', 'Community support', 'Local connections', '24/7 availability']
    },
    {
      icon: MessageCircle,
      title: 'AI Assistant',
      description: 'Get instant answers to your immigration questions with our advanced AI-powered chatbot.',
      benefits: ['Instant responses', 'Country-specific advice', 'Document assistance', 'Process guidance']
    }
  ];

  const appBenefits = [
    {
      icon: Zap,
      title: 'Faster Processing',
      description: 'Complete your applications 3x faster with our intelligent form-filling assistance.',
      stat: '3x Faster'
    },
    {
      icon: Shield,
      title: 'Higher Success Rate',
      description: 'Increase your chances of approval with our expert-reviewed application process.',
      stat: '95% Success'
    },
    {
      icon: BarChart3,
      title: 'Money Saved',
      description: 'Save thousands on consultation fees with our comprehensive self-service tools.',
      stat: '$5K+ Saved'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
            Your Immigration Workspace
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your immigration journey in one powerful, intuitive workspace. Stay organized, connected, and ahead of every deadline.
          </p>
        </section>

        {/* Why Download Section */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Why Download the TIN App?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mobile app puts your entire immigration toolkit in your pocket, giving you the power to manage your journey anywhere, anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appBenefits.map((benefit, index) => (
              <Card key={benefit.title} className={`glass-panel glass-hover p-8 text-center space-y-6 fade-in-up stagger-${index + 1}`}>
                <div className="mx-auto p-4 bg-primary/10 rounded-2xl w-fit">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{benefit.stat}</div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Workspace Features */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Powerful Features at Your Fingertips
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed in your immigration journey, designed for maximum efficiency and ease of use.
            </p>
          </div>

          <div className="space-y-8">
            {workspaceFeatures.map((feature, index) => (
              <Card key={feature.title} className={`glass-panel glass-hover p-8 fade-in-up stagger-${index + 1}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{feature.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 p-3 bg-primary/5 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Helps Section */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              How the App Transforms Your Experience
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Before TIN</h3>
                <ul className="space-y-3">
                  {[
                    'Scattered documents across multiple platforms',
                    'Missed deadlines and important dates',
                    'Expensive consultation fees',
                    'Confusing government websites',
                    'No clear progress tracking'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8 fade-in-up stagger-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">With TIN App</h3>
                <ul className="space-y-3">
                  {[
                    'All documents organized in one secure place',
                    'Automated reminders and timeline tracking',
                    'AI-powered guidance saves thousands',
                    'Simplified, user-friendly interface',
                    'Clear progress visualization and milestones'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Showcase */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Built for Mobile-First Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access your complete immigration workspace from anywhere with our intuitive mobile app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Dashboard', description: 'Overview of your progress' },
              { title: 'Documents', description: 'Secure file management' },
              { title: 'Timeline', description: 'Track your journey' },
              { title: 'Support', description: 'Expert assistance' }
            ].map((screen, index) => (
              <Card key={screen.title} className={`glass-panel glass-hover p-6 text-center space-y-4 fade-in-up stagger-${index + 1}`}>
                <div className="mx-auto w-32 h-56 bg-gradient-to-br from-primary/20 to-primary-variant/20 rounded-2xl flex items-center justify-center border border-primary/20">
                  <div className="text-center space-y-2">
                    <Smartphone className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-xs text-muted-foreground">{screen.title}</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground">{screen.description}</p>
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
                Ready to Transform Your Immigration Journey?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of immigrants who have successfully navigated their journey with TIN. Download the app and start your organized, stress-free immigration experience today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-variant text-lg px-8 py-4 h-auto">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download TIN App
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto glass-hover border-white/20">
                  Watch Demo
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Available on iOS and Android • Free to download
              </div>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Workspace;