import { Link } from "react-router-dom";
import { Zap, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const navigation = {
    product: [
      { name: "Features", href: "/features" },
      { name: "How it Works", href: "/how-it-works" },
      { name: "Pricing", href: "/pricing" },
      { name: "Security", href: "/security" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "API", href: "/api" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const social = [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
  ];

  return (
    <footer className="bg-brand-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F67df0d8a6017460c9549278602205c97%2F2adb5974514344c081f34879ffd5d897?format=webp&width=800"
                alt="Hafestus Logo"
                className="h-14 w-auto"
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
                <span className="text-xl font-bold">Hafestus</span>
              </div>
            </div>
            <p className="text-brand-gray-300 text-base max-w-xs">
              Streamlining construction management with AI-powered specification
              analysis and submittal generation.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-brand-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Product
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-brand-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-brand-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-brand-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-brand-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-gray-700 pt-8">
          <p className="text-base text-brand-gray-400 xl:text-center">
            &copy; 2024 Hafestus, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
