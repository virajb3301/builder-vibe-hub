import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Platform", href: "/platform" },
    { name: "Features", href: "/features" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F67df0d8a6017460c9549278602205c97%2F11d5890310554b5580f6995fa335c2ec?format=webp&width=800"
              alt="Hafestus Logo"
              className="h-24 w-auto"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hidden items-center space-x-2">
              <div className="bg-primary rounded-lg p-1.5">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-brand-gray-900">
                Hafestus
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-brand-gray-600 hover:text-brand-gray-900 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-brand-gray-600 hover:text-brand-gray-900 font-medium transition-colors duration-200"
            >
              Sign In
            </Link>
            <Button asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-brand-gray-600 hover:text-brand-gray-900 hover:bg-brand-gray-50 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-gray-100 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-brand-gray-600 hover:text-brand-gray-900 font-medium py-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  to="/login"
                  className="block text-brand-gray-600 hover:text-brand-gray-900 font-medium py-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Button asChild className="w-full">
                  <Link
                    to="/get-started"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
