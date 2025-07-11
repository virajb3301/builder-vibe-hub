import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Upload,
  FileText,
  Brain,
  CheckCircle,
  Clock,
  ArrowRight,
  Loader2,
} from "lucide-react";

const demoSteps = [
  {
    id: "upload",
    title: "Upload Specification",
    description: "Upload your project specification file",
    icon: Upload,
    duration: 2000,
  },
  {
    id: "analyze",
    title: "AI Analysis",
    description: "AI processes requirements and standards",
    icon: Brain,
    duration: 3000,
  },
  {
    id: "generate",
    title: "Generate Submittal",
    description: "Creating compliant submittal package",
    icon: FileText,
    duration: 2500,
  },
  {
    id: "complete",
    title: "Complete",
    description: "Submittal ready for review and approval",
    icon: CheckCircle,
    duration: 0,
  },
];

const sampleFiles = [
  "Electrical Specifications.pdf",
  "HVAC Requirements.docx",
  "Plumbing Standards.pdf",
];

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const startDemo = () => {
    if (!selectedFile) {
      setSelectedFile(sampleFiles[0]);
    }
    setIsRunning(true);
    setCurrentStep(0);
    setProgress(0);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setProgress(0);
    setSelectedFile(null);
  };

  useEffect(() => {
    if (!isRunning) return;

    const currentStepData = demoSteps[currentStep];
    if (!currentStepData || currentStep >= demoSteps.length - 1) return;

    const duration = currentStepData.duration;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          setCurrentStep((prevStep) => prevStep + 1);
          return 0;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentStep, isRunning]);

  const isComplete = currentStep === demoSteps.length - 1;

  return (
    <div className="bg-white rounded-xl p-6 h-96 flex flex-col">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">
          Interactive Product Demo
        </h3>
        <p className="text-brand-gray-600">
          See how Hafestus transforms your workflow
        </p>
      </div>

      {!isRunning && !isComplete ? (
        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
          <div className="w-full max-w-sm">
            <label className="block text-sm font-medium text-brand-gray-700 mb-2">
              Choose a sample specification:
            </label>
            <select
              value={selectedFile || ""}
              onChange={(e) => setSelectedFile(e.target.value)}
              className="w-full p-3 border border-brand-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select a file...</option>
              {sampleFiles.map((file) => (
                <option key={file} value={file}>
                  {file}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={startDemo}
            disabled={!selectedFile}
            className="px-8 py-3"
          >
            Start Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-4 gap-2 mb-6">
            {demoSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === currentStep;
              const isPast = index < currentStep;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary"
                      : isPast
                        ? "bg-green-50 border-2 border-green-200"
                        : "bg-brand-gray-50 border-2 border-brand-gray-200"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full mb-1 ${
                      isActive
                        ? "bg-primary text-white"
                        : isPast
                          ? "bg-green-500 text-white"
                          : "bg-brand-gray-300 text-brand-gray-600"
                    }`}
                  >
                    {isActive && index < demoSteps.length - 1 ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <StepIcon className="h-4 w-4" />
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium text-center ${
                      isActive || isPast
                        ? "text-brand-gray-900"
                        : "text-brand-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          <Card className="flex-1 border-2 border-dashed border-brand-gray-200">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center">
              {selectedFile && (
                <div className="w-full mb-4">
                  <div className="flex items-center space-x-2 text-sm text-brand-gray-600 mb-2">
                    <FileText className="h-4 w-4" />
                    <span>{selectedFile}</span>
                  </div>
                </div>
              )}

              <div className="text-center">
                <h4 className="font-semibold text-brand-gray-900 mb-2">
                  {demoSteps[currentStep].title}
                </h4>
                <p className="text-brand-gray-600 mb-4">
                  {demoSteps[currentStep].description}
                </p>

                {isRunning && currentStep < demoSteps.length - 1 && (
                  <div className="w-full max-w-xs mx-auto">
                    <div className="bg-brand-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-center text-sm text-brand-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Processing...
                    </div>
                  </div>
                )}

                {isComplete && (
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-green-700 font-medium">
                        Submittal Generated Successfully!
                      </p>
                      <p className="text-green-600 text-sm mt-1">
                        Ready for review and approval
                      </p>
                    </div>
                    <Button onClick={resetDemo} variant="outline" size="sm">
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
