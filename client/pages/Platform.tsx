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
              <h1 className="text-2xl font-bold text-gray-900">Platform</h1>
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
                <div className="bg-white border rounded-lg shadow-sm h-[600px] overflow-y-auto">
                  <div className="bg-gray-100 px-4 py-2 border-b text-xs text-gray-600 flex justify-between items-center">
                    <span>Downtown_Office_Building_Specifications.pdf</span>
                    <span>100% zoom</span>
                  </div>
                  <div
                    className="p-8 text-sm leading-relaxed"
                    style={{ fontFamily: "serif" }}
                  >
                    <div className="text-center mb-8">
                      <h1 className="text-xl font-bold mb-2">
                        TECHNICAL SPECIFICATIONS
                      </h1>
                      <h2 className="text-lg font-semibold mb-1">
                        Downtown Office Building Project
                      </h2>
                      <p className="text-gray-600">Project No: DOB-2024-001</p>
                      <p className="text-gray-600">Date: March 15, 2024</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                          SECTION 05.12 - STRUCTURAL STEEL
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold mb-2">PART 1 - GENERAL</h4>

                            <div className="space-y-3">
                              <div>
                                <h5 className="font-semibold">1.1 SUMMARY</h5>
                                <p className="ml-4 text-justify">
                                  Work under this section includes furnishing
                                  and installation of structural steel framing
                                  including wide-flange beams, columns, plates,
                                  and connections as indicated on the drawings
                                  and specified herein. Work includes but is not
                                  limited to structural steel members,
                                  connection hardware, welded and bolted
                                  connections, steel decking, and related
                                  accessories.
                                </p>
                              </div>

                              <div>
                                <h5 className="font-semibold">
                                  1.2 PERFORMANCE REQUIREMENTS
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. Steel members shall be designed and
                                    fabricated to support specified loads
                                    without exceeding allowable stresses.
                                  </p>
                                  <p>
                                    B. All structural steel shall conform to the
                                    following minimum requirements:
                                  </p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Wide flange beams and columns: ASTM
                                      A992 Grade 50
                                    </li>
                                    <li>
                                      2. Minimum yield strength: 50 ksi (345
                                      MPa)
                                    </li>
                                    <li>
                                      3. Minimum tensile strength: 65 ksi (448
                                      MPa)
                                    </li>
                                    <li>4. Maximum carbon content: 0.23%</li>
                                  </ul>
                                  <p>C. Structural steel members dimensions:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Primary beams: W18x76 minimum, W21x93
                                      where indicated
                                    </li>
                                    <li>2. Secondary beams: W16x31 minimum</li>
                                    <li>
                                      3. Columns: W14x120 minimum for lower
                                      floors, W14x90 for upper floors
                                    </li>
                                    <li>
                                      4. Bracing members: As indicated on
                                      structural drawings
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold">
                                  1.3 SUBMITTALS
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. Submit the following in accordance with
                                    Section 01 33 00:
                                  </p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Shop drawings showing fabrication and
                                      erection details
                                    </li>
                                    <li>
                                      2. Product data for structural steel
                                      materials and components
                                    </li>
                                    <li>
                                      3. Mill test certificates for all
                                      structural steel materials
                                    </li>
                                    <li>
                                      4. Welding procedures and welder
                                      qualifications
                                    </li>
                                    <li>
                                      5. Connection calculations and details
                                    </li>
                                    <li>
                                      6. Fabrication sequence and erection
                                      procedures
                                    </li>
                                    <li>
                                      7. Surface preparation and coating
                                      specifications
                                    </li>
                                  </ul>
                                  <p>B. Shop drawings shall include:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Complete fabrication details for all
                                      structural members
                                    </li>
                                    <li>
                                      2. Connection details including bolt
                                      patterns and weld symbols
                                    </li>
                                    <li>
                                      3. Piece marks corresponding to erection
                                      drawings
                                    </li>
                                    <li>
                                      4. Material specifications and
                                      certifications
                                    </li>
                                    <li>
                                      5. Camber requirements where applicable
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold">
                                  1.4 QUALITY ASSURANCE
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>A. Fabricator Qualifications:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Fabricator shall be certified by AISC
                                      and maintain current certification
                                    </li>
                                    <li>
                                      2. Minimum 10 years experience in similar
                                      commercial construction
                                    </li>
                                    <li>
                                      3. Provide list of completed projects of
                                      similar scope and complexity
                                    </li>
                                  </ul>
                                  <p>B. Welder Qualifications:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. All welders shall be certified in
                                      accordance with AWS D1.1
                                    </li>
                                    <li>
                                      2. Maintain current certification records
                                      on site
                                    </li>
                                    <li>
                                      3. Re-certify welders if work is
                                      interrupted for more than 6 months
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold">
                                  1.5 DELIVERY, STORAGE, AND HANDLING
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. Deliver materials in accordance with
                                    manufacturer's recommendations.
                                  </p>
                                  <p>
                                    B. Store materials off ground on platforms,
                                    skids, or other supports.
                                  </p>
                                  <p>
                                    C. Cover materials to protect from weather
                                    and construction activities.
                                  </p>
                                  <p>
                                    D. Handle materials to prevent damage and
                                    distortion.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <h4 className="font-bold mb-2">
                              PART 2 - PRODUCTS
                            </h4>

                            <div className="space-y-3">
                              <div>
                                <h5 className="font-semibold">
                                  2.1 STRUCTURAL STEEL MATERIALS
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. Wide Flange Shapes: ASTM A992/A992M Grade
                                    50.
                                  </p>
                                  <p>
                                    B. Channels and Angles: ASTM A36/A36M unless
                                    otherwise indicated.
                                  </p>
                                  <p>
                                    C. Plates: ASTM A572/A572M Grade 50 for
                                    plates over 2 inches thick.
                                  </p>
                                  <p>D. Round HSS: ASTM A500 Grade C.</p>
                                  <p>E. Rectangular HSS: ASTM A500 Grade B.</p>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold">
                                  2.2 BOLTING MATERIALS
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. High-Strength Bolts: ASTM A325 Type N
                                    (galvanized) or ASTM A490 Type N.
                                  </p>
                                  <p>
                                    B. Nuts: ASTM A563 Grade DH heavy hex nuts.
                                  </p>
                                  <p>C. Washers: ASTM F436 hardened washers.</p>
                                  <p>
                                    D. Bolt length shall provide complete thread
                                    engagement with 2-3 threads extending beyond
                                    nut.
                                  </p>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold">
                                  2.3 WELDING MATERIALS
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. Welding electrodes shall conform to AWS
                                    A5.1 for SMAW process.
                                  </p>
                                  <p>
                                    B. Flux-cored welding wire shall conform to
                                    AWS A5.20.
                                  </p>
                                  <p>
                                    C. Gas metal arc welding wire shall conform
                                    to AWS A5.18.
                                  </p>
                                  <p>
                                    D. Shielding gas for GMAW: 75% Argon, 25%
                                    CO2 minimum.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <h4 className="font-bold mb-2">
                              PART 3 - EXECUTION
                            </h4>

                            <div className="space-y-3">
                              <div>
                                <h5 className="font-semibold">
                                  3.1 PREPARATION
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. Verify field measurements before
                                    fabrication.
                                  </p>
                                  <p>
                                    B. Coordinate with other trades for proper
                                    sequencing.
                                  </p>
                                  <p>
                                    C. Obtain required permits and inspections.
                                  </p>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold">3.2 ERECTION</h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. Erect structural steel in accordance with
                                    AISC Code of Standard Practice.
                                  </p>
                                  <p>
                                    B. Maintain stability during erection
                                    process.
                                  </p>
                                  <p>
                                    C. Use temporary bracing as required for
                                    safety and stability.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
