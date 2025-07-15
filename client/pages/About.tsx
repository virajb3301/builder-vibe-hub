import { AlertTriangle, Target, Rocket } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function About() {
  const processSteps = [
    {
      number: "1",
      title: "Challenge",
      icon: AlertTriangle,
      description:
        "Every commercial construction project relies on massive (up to 1,000 page) spec files. Contractors spend on average 40 staff hours per project analyzing and preparing construction-ready submittals. At 300 jobs a year, that's an estimated $1,800,000 yearly—not to mention the cost of missed opportunities if they could take on more work.",
    },
    {
      number: "2",
      title: "Our Objective",
      icon: Target,
      description:
        "We eliminate the most tedious part of a contractor's workflow and gather the data needed to train our AI. The result? Faster, more accurate pre-construction documents and fewer errors on the job.",
    },
    {
      number: "3",
      title: "Methodology",
      icon: Rocket,
      description:
        "Start with human-in-the-loop submittal preparation to speed up the process. Use the data generated to train a proprietary model that will eventually automate the entire pre-construction and estimating workflow.",
    },
  ];

  const teamMembers = [
    {
      name: "Andre de la Cruz",
      role: "Co-Founder",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F67df0d8a6017460c9549278602205c97%2F144149e81a5841f09cec5c376f34d780?format=webp&width=800",
      description:
        "Hi,\nWe are two UChicago students studying CS with a strong focus on ML. We have been working on projects together since first year, when we met, and are passionate about making construction more straightforward. The world around us was built by people, and we want to want to empower contractors to build more by removing the tedium.",
    },
    {
      name: "Viraj Bodiwala",
      role: "Co-Founder",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F67df0d8a6017460c9549278602205c97%2Fbb7311f9070044ee8cab7f581a3d1860?format=webp&width=800",
      description:
        "Hi,\nWe are two UChicago students studying CS with a strong focus on ML. We have been working on projects together since first year, when we met, and are passionate about making construction more straightforward. The world around us was built by people, and we want to want to empower contractors to build more by removing the tedium.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Process Section */}
      <section className="py-24 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-brand-gray-600">
              Understanding the challenge and building the solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="bg-primary rounded-lg p-3 mr-4">
                        <span className="text-2xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                      <StepIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray-600 leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-brand-gray-600">
              Meet the founders building the future of construction technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-brand-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-brand-gray-600 leading-relaxed whitespace-pre-line">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-brand-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray-900 mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-brand-gray-600 leading-relaxed">
            We envision a construction industry where AI handles the tedious
            paperwork, allowing professionals to focus on what they do best:
            building the world around us. By combining human expertise with
            machine learning, we're not just improving efficiency—we're
            transforming how construction projects come to life.
          </p>
        </div>
      </section>
    </div>
  );
}
