import { useState } from 'react';
import { Menu, X, Home, Users, FileText, HelpCircle, Mail, ChevronRight, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const navigationItems = [
  { id: 'hero', label: 'Welcome', icon: Home },
  { id: 'features', label: 'Features', icon: Users },
  { id: 'benefits', label: 'Benefits', icon: FileText },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'newsletter', label: 'Newsletter', icon: Mail },
];

export function Sidebar({ activeSection, onSectionClick }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    onSectionClick(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Navigation Menu */}
      <aside className={`
        fixed left-6 top-1/2 -translate-y-1/2 z-40
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="glass-card rounded-2xl p-6 w-64">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-accent-foreground font-bold text-lg">T</span>
            </div>
            <h1 className="font-bold text-xl gradient-text">TIN</h1>
            <p className="text-sm text-muted-foreground">The Immigrants' Nation</p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left
                        transition-all duration-200 group hover-lift
                        ${isActive 
                          ? 'bg-accent text-accent-foreground shadow-lg' 
                          : 'hover:bg-secondary/50 text-muted-foreground hover:text-foreground'
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1 font-medium text-sm">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Authentication Section */}
          <div className="space-y-3">
            <Button 
              variant="default" 
              size="sm"
              className="w-full justify-center hover-lift"
              onClick={() => {/* Handle signup */}}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="w-full justify-center hover-lift"
              onClick={() => {/* Handle login */}}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Log In
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}