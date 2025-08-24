import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle, Smartphone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about your immigration journey? We're here to help. Reach out to our expert team for personalized support.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card className="glass-panel p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Enter your first name" className="bg-white/5 border-white/20 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Enter your last name" className="bg-white/5 border-white/20 focus:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-white/5 border-white/20 focus:border-primary" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What can we help you with?" className="bg-white/5 border-white/20 focus:border-primary" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your immigration goals or questions..." 
                    className="bg-white/5 border-white/20 focus:border-primary min-h-[120px]" 
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-variant">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-up stagger-1">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold gradient-text">Other Ways to Reach Us</h2>
              <p className="text-muted-foreground text-lg">
                Choose the method that works best for you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MessageCircle,
                  title: 'Live Chat',
                  description: 'Chat with our AI assistant or connect with a human expert',
                  info: 'Available 24/7',
                  action: 'Start Chat'
                },
                {
                  icon: Mail,
                  title: 'Email Support',
                  description: 'Send us detailed questions and get comprehensive answers',
                  info: 'support@tinapp.io',
                  action: 'Send Email'
                },
                {
                  icon: Phone,
                  title: 'Phone Support',
                  description: 'Speak directly with our immigration experts',
                  info: '+1 (555) 123-4567',
                  action: 'Call Now'
                }
              ].map((contact, index) => (
                <Card key={contact.title} className="glass-panel glass-hover p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold">{contact.title}</h3>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                      <p className="text-sm font-medium text-primary">{contact.info}</p>
                    </div>
                    <Button variant="outline" size="sm" className="glass-hover border-white/20">
                      {contact.action}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="glass-panel p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-primary font-medium">AI Chat available 24/7</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about TIN and your immigration journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'How does TIN help with my immigration process?',
                answer: 'TIN provides personalized guidance, document management, expert connections, and AI-powered assistance throughout your entire immigration journey.'
              },
              {
                question: 'Which countries does TIN support?',
                answer: 'We currently support immigration processes for 25+ countries including the US, Canada, UK, Australia, Germany, and many more.'
              },
              {
                question: 'Is my personal information secure with TIN?',
                answer: 'Yes, we use bank-level encryption and comply with international data protection standards to keep your information completely secure.'
              },
              {
                question: 'How much does TIN cost?',
                answer: 'TIN offers a free tier with basic features. Premium plans start at $29/month for comprehensive support and expert access.'
              }
            ].map((faq, index) => (
              <Card key={index} className={`glass-panel glass-hover p-6 space-y-4 fade-in-up stagger-${index + 1}`}>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Office Location */}
        <section className="space-y-12">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Silicon Valley, we welcome visitors by appointment.
            </p>
          </div>

          <Card className="glass-panel p-8 fade-in-up">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">TIN Headquarters</h3>
                    <div className="text-muted-foreground">
                      <p>123 Innovation Drive</p>
                      <p>Palo Alto, CA 94301</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary-variant">
                  Schedule a Visit
                </Button>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-primary/20 to-primary-variant/20 rounded-2xl flex items-center justify-center border border-primary/20">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <div className="text-sm text-muted-foreground">Interactive Map</div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Download App CTA */}
        <section className="text-center">
          <Card className="glass-panel p-12 glass-hover fade-in-up">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't wait to begin your immigration journey. Download the TIN app and get started today.
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

export default Contact;