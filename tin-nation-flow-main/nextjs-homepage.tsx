// Next.js Homepage Component - TIN Immigration Platform
'use client';

import { useEffect } from 'react';
import Link from "next/link";

import { ArrowRight, Globe, Users, BookOpen, Shield, Star, ChevronDown, Play, Check, Menu, X } from 'lucide-react';

// Scroll Animation Hook for Next.js
function useScrollAnimation() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((element) => observer.observe(element));

    return () => {
      animateElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
}

// Navigation Component
const Navigation = () => {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-gray-100">
        <div className="space-y-6">
          {[
            { name: 'Home', href: '/' },
            { name: 'Socials', href: '/socials' },
            { name: 'Workplace', href: '/workplace' },
            { name: 'Services', href: '/services' },
            { name: 'Profile', href: '/profile' },
            {name: 'Journey', href:'/Journey'}
          ].map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="w-1 h-0 bg-blue-600 transition-all duration-300 group-hover:h-6 rounded-full" />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-0 h-px bg-blue-600/30 transition-all duration-300 delay-75 group-hover:w-8" />
              </div>
              <span className="font-medium whitespace-nowrap">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-20 pulse-bg" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gray-100 rounded-full opacity-30 pulse-bg" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="scroll-animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">The Immigration</span>
            <br />
            <span className="text-gray-900">Network</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connecting immigrants with opportunities, resources, and communities to build successful lives in their new home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/profile"
              className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 hover-lift flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover-lift flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate">
          {[
            { number: '50K+', label: 'Active Users' },
            { number: '200+', label: 'Countries' },
            { number: '95%', label: 'Success Rate' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with immigrants and professionals worldwide through our comprehensive platform."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join local communities and find mentors who understand your immigration journey."
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access courses, guides, and resources to build skills and understand your new country."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data and documents are protected with enterprise-grade security measures."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need for Your
            <span className="gradient-text"> Immigration Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From networking to skill development, we provide comprehensive tools and resources 
            to help you succeed in your new country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 rounded-2xl hover-lift scroll-animate"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    "Connect with verified professionals and mentors",
    "Access job opportunities from trusted employers",
    "Join location-based communities and events",
    "Get personalized immigration guidance",
    "Learn essential skills for your new country",
    "Secure document management and verification"
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Choose
              <span className="gradient-text"> TIN?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We understand the challenges of immigration because we've been there. 
              Our platform is built by immigrants, for immigrants.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 hover-lift"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="scroll-animate">
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">User Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">45K+</div>
                    <div className="text-sm text-gray-600">Success Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                    <div className="text-sm text-gray-600">Countries Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Community Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join thousands of immigrants who are building successful lives with TIN. 
          Get started today and connect with your community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover-lift">
            Get Started
          </button>
        </div>
        
        <p className="text-sm text-gray-400">
          No spam. Unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

// Main Homepage Component
export default function Homepage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="w-full">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <NewsletterSection />
      </main>
    </div>
  );
}