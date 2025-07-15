import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F67df0d8a6017460c9549278602205c97%2F11d5890310554b5580f6995fa335c2ec?format=webp&width=800"
              alt="Hafestus Logo"
              className="h-14 w-auto"
            />
          </div>
          <p className="text-brand-gray-300 text-base text-center max-w-md">
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
          <div className="border-t border-brand-gray-700 pt-8 w-full">
            <p className="text-base text-brand-gray-400 text-center">
              &copy; 2025 Hafestus, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
