import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Shield, 
  CreditCard, 
  TrendingUp, 
  MessageSquare,
  Download,
  CheckCircle2,
  FileText,
  MessageCircle,
  Briefcase,
  BarChart3,
  Clock,
  DollarSign,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const BusinessListing = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const benefits = [
    {
      icon: Users,
      title: "Access a Large Market",
      description: "Connect with thousands of users actively seeking relocation help, legal services, education, housing, and more."
    },
    {
      icon: Shield,
      title: "Verified, Trusted Platform",
      description: "Showcase your services in a marketplace that prioritizes transparency, credibility, and verified identities."
    },
    {
      icon: CreditCard,
      title: "Seamless Payment & Secure Transactions",
      description: "Get paid securely through TIN's integrated payment gateway with complete peace of mind."
    },
    {
      icon: TrendingUp,
      title: "Smart Advertising Tools",
      description: "Leverage AI-driven marketing and data insights to reach your ideal audience and grow your business."
    },
    {
      icon: MessageSquare,
      title: "Community Engagement & Reviews",
      description: "Build trust through authentic customer feedback and engagement in destination-specific user groups."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Get help whenever you need it, regardless of time zones. Support available around the clock."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Sign Up & Create Your Listing",
      points: [
        "Register as a service provider by creating your account",
        "Fill in your business details and services offered",
        "Download the TIN App to manage your listing on the go"
      ],
      icon: FileText,
      hasButton: true
    },
    {
      number: "2",
      title: "Get Verified",
      points: [
        "Upload your credentials, certifications, and supporting documents",
        "Our team reviews your submission to ensure authenticity and build user trust"
      ],
      icon: Shield
    },
    {
      number: "3",
      title: "Engage & Build Visibility",
      points: [
        "Once verified, your services go live",
        "Participate in discussions, share expert insights, and grow your trust score",
        "Stay active by checking new user requests regularly to ensure timely responses"
      ],
      icon: MessageCircle
    },
    {
      number: "4",
      title: "Manage Clients & Service Proposals",
      points: [
        "Receive and respond to client enquiries directly through your workspace",
        "Keep track of communications and service requests efficiently"
      ],
      icon: Briefcase
    },
    {
      number: "5",
      title: "Grow Your Business",
      points: [
        "Send proposals and receive payments securely within the app",
        "Use TIN dashboards and insights to monitor performance and expand your reach"
      ],
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 24/7 Badge at top */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Clock className="h-5 w-5" />
          <span className="font-semibold text-sm md:text-base">24/7 Support Available - We're Here Whenever You Need Us</span>
        </div>
      </div>

      <main className="w-full">
        {/* Hero Section */}
        <section className="pt-12 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Simplifying How You Serve Customers Worldwide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join TIN, the largest global immigrant community, and become a trusted service partner helping millions move forward with confidence, clarity, and the right support — all verified and scam-free.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Now
            </Button>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Partner with TIN?</h2>
              <p className="text-lg text-muted-foreground">
                Join a trusted ecosystem supporting millions on their relocation journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Follow these simple steps to join the TIN marketplace
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden transition-all hover:shadow-lg border-2 border-primary/20"
                >
                  <CardHeader 
                    className="bg-gradient-to-r from-primary/10 to-primary/5 cursor-pointer"
                    onClick={() => toggleStep(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                        {step.number}
                      </div>
                      <div className="flex items-center gap-3 flex-1">
                        <step.icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      {expandedStep === index ? (
                        <ChevronUp className="h-6 w-6 text-primary" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-primary" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedStep === index && (
                    <CardContent className="pt-6 pb-6">
                      <ul className="space-y-3">
                        {step.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                      {step.hasButton && (
                        <div className="mt-6">
                          <Button className="w-full sm:w-auto">
                            <Download className="mr-2 h-4 w-4" />
                            Download TIN App
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
              <p className="text-xl font-semibold text-white mb-2">
                Join the trusted TIN marketplace to connect with global immigrants and grow your business as a verified service provider
              </p>
            </div>
          </div>
        </section>

        {/* Fee and Payments */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Fee and Payments</h2>
              <p className="text-lg text-muted-foreground">
                Transparent pricing with no hidden costs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Listing Fee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Enjoy a <span className="font-semibold text-foreground">free listing for the first 6 months</span> as a new service provider
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      After the complimentary period, a nominal listing fee may apply to continue featuring your services
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Any updates or changes will be communicated well in advance by your account manager to ensure full transparency
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Platform Fee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      TIN charges a service fee on successful transactions, covering secure payment processing, customer support, and access to growth tools
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      The fee is automatically deducted when you receive client payments through TIN
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      This supports partner verification, advertising, and premium visibility across the platform
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      All details on fees, payouts, and updates will always be clearly shared by your account manager
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ready to Join */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Take your business global and become part of a trusted ecosystem supporting millions on their relocation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Download TIN App
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BusinessListing;