import { useState } from "react";
import {
  Upload,
  FileText,
  Brain,
  Download,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Settings,
  Search,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

export default function Platform() {
  const [chatMessage, setChatMessage] = useState("");

  const aiRecommendations = [
    {
      id: 1,
      type: "manufacturer",
      title: "Steel Beam Recommendation",
      manufacturer: "ArcelorMittal",
      product: "W18x76 Wide Flange Beam",
      compliance: 98,
      reason:
        "Meets ASTM A992 Grade 50 specifications with superior load capacity",
    },
    {
      id: 2,
      type: "material",
      title: "Concrete Mix Design",
      manufacturer: "LafargeHolcim",
      product: "4000 PSI High-Strength Concrete",
      compliance: 95,
      reason: "Complies with ACI 318 requirements for structural concrete",
    },
    {
      id: 3,
      type: "component",
      title: "HVAC System",
      manufacturer: "Carrier",
      product: "AquaSnap 30RB Series Chiller",
      compliance: 100,
      reason: "Exceeds ASHRAE 90.1 energy efficiency standards",
    },
  ];

  const chatHistory = [
    {
      type: "ai",
      message:
        "I've analyzed the specification document. Found 23 key requirements across structural, mechanical, and electrical systems. Would you like me to start generating recommendations?",
      time: "2:34 PM",
    },
    {
      type: "user",
      message: "Yes, please focus on the structural steel requirements first.",
      time: "2:35 PM",
    },
    {
      type: "ai",
      message:
        "Based on the structural specifications, I've identified ArcelorMittal's W18x76 beam as the optimal choice. It exceeds the required 50 ksi yield strength and matches the specified dimensions perfectly.",
      time: "2:36 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Upload */}
      <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">The Platform</h1>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                AI Analysis Complete
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center">
                <Upload className="h-4 w-4 mr-2" />
                Upload Specifications
              </Button>
              <Button className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export Submittal
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Left Side - Specification File */}
          <div className="space-y-4">
            <Card className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Specification Document
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Section 05.12</Badge>
                    <Button variant="ghost" size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto">
                  <div className="space-y-4 text-sm">
                    <div className="border-l-4 border-primary pl-3">
                      <h3 className="font-semibold text-gray-900">
                        SECTION 05.12 - STRUCTURAL STEEL
                      </h3>
                      <p className="text-gray-600 mt-1">Part 1 - General</p>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                      <p className="font-medium text-gray-900">1.1 SUMMARY</p>
                      <p className="text-gray-700 mt-1">
                        Work under this section includes furnishing and
                        installation of structural steel framing including
                        wide-flange beams, columns, and connections as indicated
                        on the drawings.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded border-l-4 border-primary">
                      <p className="font-medium text-gray-900">
                        1.2 PERFORMANCE REQUIREMENTS
                      </p>
                      <ul className="text-gray-700 mt-1 space-y-1">
                        <li>• Steel shall conform to ASTM A992 Grade 50</li>
                        <li>• Minimum yield strength: 50 ksi</li>
                        <li>• Wide flange beams: W18x76 minimum</li>
                        <li>• All connections per AISC specifications</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="font-medium text-gray-900">
                        1.3 SUBMITTALS
                      </p>
                      <p className="text-gray-700">
                        Submit shop drawings, product data, and samples for each
                        type of structural steel component. Include:
                      </p>
                      <ul className="text-gray-700 space-y-1 ml-4">
                        <li>• Mill test certificates</li>
                        <li>• Welding procedures</li>
                        <li>• Connection details</li>
                        <li>• Fabrication drawings</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="font-medium text-gray-900">
                        1.4 QUALITY ASSURANCE
                      </p>
                      <p className="text-gray-700 mt-1">
                        Fabricator shall be certified by AISC and maintain
                        current certification throughout the project duration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-gray-500">Page 1 of 8</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      Previous
                    </Button>
                    <Button variant="ghost" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - AI Recommendations & Submittal */}
          <div className="space-y-4">
            {/* AI Recommendations */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-primary" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiRecommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {rec.title}
                      </h4>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm font-medium text-green-600">
                          {rec.compliance}% Match
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Manufacturer:</span>{" "}
                        {rec.manufacturer}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Product:</span>{" "}
                        {rec.product}
                      </p>
                      <p className="text-sm text-gray-700 italic">
                        {rec.reason}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <Badge
                        variant="outline"
                        className="text-primary border-primary"
                      >
                        Used Manufacturer Data
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary"
                      >
                        Add to Submittal
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Chat Interface */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 h-64 overflow-y-auto mb-4">
                  {chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          chat.type === "user"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{chat.message}</p>
                        <p
                          className={`text-xs mt-1 ${
                            chat.type === "user"
                              ? "text-blue-100"
                              : "text-gray-500"
                          }`}
                        >
                          {chat.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Ask about specifications or recommendations..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="sm" className="px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Submittal Status */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Submittal Package Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Structural Steel
                    </span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">Complete</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Concrete Materials
                    </span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">Complete</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      HVAC Equipment
                    </span>
                    <div className="flex items-center">
                      <AlertCircle className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-yellow-600">
                        In Progress
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Electrical Systems
                    </span>
                    <div className="flex items-center">
                      <AlertCircle className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">Pending</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Overall Progress
                    </span>
                    <span className="text-sm text-gray-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
