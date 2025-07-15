import { Link } from "react-router-dom";
import {
  ArrowRight,
  Upload,
  Brain,
  FileText,
  Clock,
  Shield,
  Users,
  CheckCircle,
  Star,
  PlayCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import InteractiveDemo from "../components/InteractiveDemo";

export default function Index() {
  const features = [
    {
      icon: Upload,
      title: "Smart File Upload",
      description:
        "Simply upload your specification files. Our AI analyzes every page, extracting key requirements and standards.",
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced AI reviews manufacturer data and cross-references spec requirements to identify optimal matches.",
    },
    {
      icon: FileText,
      title: "Instant Submittals",
      description:
        "Generate complete, compliant submittal packages in minutes instead of hours or days.",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "25x Faster",
      description: "Reduce submittal creation time from days to minutes",
    },
    {
      icon: Shield,
      title: "100% Compliant",
      description: "AI ensures all specifications are met and documented",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless workflow for project teams and stakeholders",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Upload Specifications",
      description:
        "Drag and drop your project specification files. Our AI processes PDFs, Word docs, and more.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our intelligent system analyzes requirements, standards, and manufacturer data in real-time.",
    },
    {
      number: "03",
      title: "Generate Submittals",
      description:
        "Receive complete, professional submittal packages ready for approval and distribution.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray-900 tracking-tight">
              Streamline Construction
              <span className="block text-primary">Management with AI</span>
            </h1>
            <p className="mt-6 text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Transform your specification analysis and submittal generation
              process. Upload specs, get AI recommendations, and create
              compliant submittals in minutes.
            </p>
            <div className="mt-10 flex justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-brand-blue-100 to-brand-orange-100 rounded-2xl p-8 shadow-2xl">
              <InteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray-900">
              How Hafestus Works
            </h2>
            <p className="mt-4 text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform simplifies the entire construction
              management workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-brand-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray-900">
              Simple 3-Step Process
            </h2>
            <p className="mt-4 text-xl text-brand-gray-600">
              From specification upload to submittal delivery in minutes
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              >
                <div
                  className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center mb-6">
                    <span className="text-5xl font-bold text-primary mr-4">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-brand-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="bg-gradient-to-br from-brand-blue-100 to-brand-orange-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-brand-gray-400 mx-auto mb-2" />
                      <p className="text-brand-gray-500">
                        Step {step.number} Preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray-900">
              Why Choose Hafestus
            </h2>
            <p className="mt-4 text-xl text-brand-gray-600">
              Transform your construction project workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Transform Your Construction Workflow?
          </h2>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4"
              asChild
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
