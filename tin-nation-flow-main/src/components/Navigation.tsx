import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  User,
  Share2,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Navigation Items
const navigationItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "socials", label: "Socials", icon: Share2, path: "/socials" },
  { id: "workspace", label: "Workspace", icon: Briefcase, path: "/workspace" },
  { id: "services", label: "Services", icon: Users, path: "/services" },
  {id:"Journey",label: "Journey",icon:User,path:"/Journey"},
  { id: "about", label: "About", icon: User, path: "/about" },
  { id: "contact", label: "Contact", icon: User, path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-white/90 backdrop-blur-sm shadow-lg border-primary/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed left-8 top-1/2 -translate-y-1/2 z-40
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 w-64">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-accent-foreground font-bold text-lg">T</span>
            </div>
            <h1 className="font-bold text-xl gradient-text">TIN</h1>
            <p className="text-sm text-muted-foreground">
              The Immigrants&apos; Nation
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="space-y-3">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <li
                    key={item.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-left
                        transition-all duration-300 group relative overflow-hidden
                        ${
                          isActive
                            ? "bg-accent/10 text-accent shadow-lg border border-accent/20"
                            : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                        }
                      `}
                    >
                      {/* Hover Indicator Line */}
                      <div
                        className={`
                          absolute left-0 top-1/2 -translate-y-1/2
                          w-1 bg-primary transition-all duration-300
                          ${isActive ? "h-6" : "h-0 group-hover:h-6"}
                        `}
                      />

                      {/* Connection Line */}
                      <div
                        className={`
                          absolute left-1 top-1/2 -translate-y-1/2
                          h-px bg-primary/30 transition-all duration-300 delay-75
                          ${isActive ? "w-8" : "w-0 group-hover:w-8"}
                        `}
                      />

                      <Icon className="h-4 w-4 z-10 relative" />
                      <span className="flex-1 font-medium text-sm z-10 relative">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="space-y-3">
            <Button
              variant="default"
              size="sm"
              className="w-full justify-center hover-lift"
              onClick={() => {
                /* Handle signup */
              }}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="w-full justify-center hover-lift"
              onClick={() => {
                /* Handle login */
              }}
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
