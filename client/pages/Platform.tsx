import { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "ai",
      message:
        "Hello! I'm analyzing your Metropolitan Hospital roofing specification document. I've processed all 50 pages and identified 47 critical requirements. How can I assist you?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  // AI Response Simulation
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Roofing-specific responses
    if (message.includes("epdm") || message.includes("membrane")) {
      return 'I recommend the Carlisle Sure-Weld 0.060" EPDM membrane system. It exceeds ASTM D 4637 Type I specifications with 1,400 psi tensile strength and comes with a 20-year warranty. This system has proven performance in hospital installations.';
    }

    if (
      message.includes("insulation") ||
      message.includes("r-value") ||
      message.includes("thermal")
    ) {
      return 'For R-25 compliance, I recommend GAF EnergyGuard Polyiso at 4.0" thickness (R-6.2 per inch = R-24.8). It meets Class A fire rating per ASTM E 84 and has 25 psi compressive strength. The glass mat facing is compatible with both mechanical and adhesive systems.';
    }

    if (
      message.includes("wind") ||
      message.includes("uplift") ||
      message.includes("fastener")
    ) {
      return "Wind uplift requires 165 lbf/sq ft resistance per ASCE 7. I recommend Olympic OlyFast 6\" HD fasteners with 465 lbf pullout strength. At 4 fasteners per 4'x8' board, this achieves the required uplift rating and is FM 4470 approved.";
    }

    if (
      message.includes("drain") ||
      message.includes("drainage") ||
      message.includes("water")
    ) {
      return "Based on 7.5 GPM per 100 sq ft capacity requirements and the 45,000 sq ft roof area, you'll need 12 primary Zurn Z100 4-inch cast iron drains plus 12 overflow drains located 2 inches above primary inlets. All require separate piping systems.";
    }

    if (
      message.includes("flashing") ||
      message.includes("equipment") ||
      message.includes("curb")
    ) {
      return "For the 23 rooftop units, I recommend 8-inch minimum height base flashing with Firestone UltraPly TPO (heat-weldable to EPDM) plus Drexel Metals Kynar 500 aluminum cap flashing. All penetrations need pre-formed EPDM boots with stainless steel clamps.";
    }

    if (
      message.includes("cost") ||
      message.includes("price") ||
      message.includes("budget")
    ) {
      return "My analysis shows 12% cost savings compared to typical manual selection. The recommended system costs $4.85/sq ft vs. $5.20/sq ft for premium alternatives while exceeding all performance requirements. Total project cost: $847,000 vs. $963,000 baseline.";
    }

    if (message.includes("warranty") || message.includes("guarantee")) {
      return "The Carlisle system includes a 20-year non-prorated warranty covering materials and labor. GAF provides 20-year insulation warranty. I can coordinate single-source warranty coverage for the entire assembly. Expected service life: 25-30 years with proper maintenance.";
    }

    if (
      message.includes("time") ||
      message.includes("schedule") ||
      message.includes("how long")
    ) {
      return "Traditional manual analysis takes 3-5 days for this complexity. Our AI completed the analysis in 4.2 seconds and generated the submittal package in under 5 minutes - a 99.8% time reduction while improving accuracy and specification compliance.";
    }

    if (
      message.includes("submittal") ||
      message.includes("generate") ||
      message.includes("package")
    ) {
      return "I can generate a complete 15-page submittal package including product data sheets, technical specifications, compatibility certifications, warranty documentation, and installation instructions. All 47 specification requirements have been verified for 100% compliance.";
    }

    if (
      message.includes("fire") ||
      message.includes("safety") ||
      message.includes("rating")
    ) {
      return "The specification requires Class A fire rating per ASTM E 108 and 2-hour assembly rating per UL 263. All recommended products meet these requirements: Carlisle EPDM with Class A rating, GAF polyiso with Class A per ASTM E 84, and FM Global approved systems.";
    }

    // General helpful responses
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("help")
    ) {
      return "Hello! I'm here to help with your roofing project analysis. I can provide recommendations for membranes, insulation, fasteners, drainage, flashing, cost analysis, warranties, and generate complete submittal packages. What would you like to know?";
    }

    if (message.includes("thank")) {
      return "You're welcome! I'm here to help streamline your construction management process. Feel free to ask about any other aspects of the roofing specification or if you need me to generate additional documentation.";
    }

    // Default intelligent response
    return `I've analyzed your question about "${userMessage}". Based on the 50-page Metropolitan Hospital roofing specification, I can provide detailed recommendations for materials, installation procedures, compliance requirements, and cost optimization. Could you be more specific about which aspect you'd like me to focus on?`;
  };

  // Send message function
  const sendMessage = async () => {
    if (!chatMessage.trim()) return;

    const userMsg = {
      type: "user",
      message: chatMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Add user message
    setChatMessages((prev) => [...prev, userMsg]);
    setChatMessage("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(
      () => {
        const aiResponse = {
          type: "ai",
          message: getAIResponse(chatMessage),
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setChatMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 2000,
    ); // 1-3 second delay for realism
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const aiRecommendations = [
    {
      id: 1,
      type: "membrane",
      title: "EPDM Membrane System",
      manufacturer: "Carlisle SynTec",
      product: 'Sure-Weld 0.060" EPDM Membrane',
      compliance: 100,
      reason:
        "Exceeds ASTM D 4637 Type I specifications with 20-year warranty and proven hospital installation performance",
    },
    {
      id: 2,
      type: "insulation",
      title: "Polyiso Roof Insulation",
      manufacturer: "GAF Materials",
      product: "EnergyGuard Polyiso R-25",
      compliance: 97,
      reason:
        "Meets R-25 thermal requirements with Class A fire rating and compatible adhesive system",
    },
    {
      id: 3,
      type: "fasteners",
      title: "Mechanical Fasteners",
      manufacturer: "Olympic Fastening",
      product: 'OlyFast 6" HD Insulation Fasteners',
      compliance: 95,
      reason:
        "Provides 165 lbf/sq ft uplift resistance meeting wind load requirements per ASCE 7",
    },
    {
      id: 4,
      type: "adhesive",
      title: "EPDM Bonding Adhesive",
      manufacturer: "Carlisle SynTec",
      product: "Bonding Adhesive BA-2004",
      compliance: 98,
      reason:
        "Compatible with Sure-Weld EPDM membrane, provides permanent bond with 1-hour open time",
    },
    {
      id: 5,
      type: "flashing",
      title: "Base Flashing System",
      manufacturer: "Firestone",
      product: "UltraPly TPO Base Flashing",
      compliance: 94,
      reason:
        "Heat-weldable to EPDM membrane, 8-inch minimum height meets specification requirements",
    },
    {
      id: 6,
      type: "sealant",
      title: "Lap Sealant",
      manufacturer: "Tremco",
      product: "Spectrem 1 Structural Glazing Sealant",
      compliance: 96,
      reason:
        "Structural grade sealant provides 25% movement capability, compatible with EPDM chemistry",
    },
    {
      id: 7,
      type: "drain",
      title: "Roof Drain Assembly",
      manufacturer: "Zurn Industries",
      product: "Z100 4-inch Cast Iron Roof Drain",
      compliance: 100,
      reason:
        "Meets 7.5 GPM per 100 sq ft capacity requirement, vandal-resistant dome, hospital-grade",
    },
    {
      id: 8,
      type: "walkway",
      title: "Protection Walkway Pads",
      manufacturer: "Carlisle SynTec",
      product: "RUSS (Rooftop Universal Support System)",
      compliance: 92,
      reason:
        "Protects membrane from foot traffic, interlocking design, UV-resistant material",
    },
    {
      id: 9,
      type: "vapor_barrier",
      title: "Vapor Retarder System",
      manufacturer: "Henry Company",
      product: "Air-Bloc 31MR Self-Adhering Membrane",
      compliance: 99,
      reason:
        "0.05 perms rating meets specification, self-adhering installation, compatible substrate",
    },
    {
      id: 10,
      type: "pipe_boot",
      title: "Pipe Penetration Boots",
      manufacturer: "Oatey",
      product: "All-Flash EPDM Pipe Boots",
      compliance: 93,
      reason:
        "Pre-formed EPDM construction, 3-inch to 4-inch diameter range, stainless steel clamps",
    },
    {
      id: 11,
      type: "edge_metal",
      title: "Perimeter Edge Metal",
      manufacturer: "Drexel Metals",
      product: "Kynar 500 Painted Aluminum Coping",
      compliance: 97,
      reason:
        "0.050-inch aluminum thickness, Kynar 500 finish, continuous cleat attachment system",
    },
    {
      id: 12,
      type: "expansion_joint",
      title: "Expansion Joint Cover",
      manufacturer: "EMSEAL",
      product: "Seismic Colorseal DSM System",
      compliance: 89,
      reason:
        "Accommodates ±2-inch movement, weather-sealed design, hospital seismic requirements",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Upload */}
      <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Demo</h1>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                AI Analysis Complete
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Left Side - Specification File and Submittal Generation */}
          <div className="space-y-6">
            {/* Specification Document */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Specification Document
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Section 07.50</Badge>
                    <Button variant="ghost" size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white border rounded-lg shadow-sm h-[calc(100vh-200px)] overflow-y-auto">
                  <div className="bg-gray-100 px-4 py-2 border-b text-xs text-gray-600 flex justify-between items-center">
                    <span>
                      Metropolitan_Hospital_Roofing_Specifications.pdf
                    </span>
                    <span>Page 1 of 50 • 100% zoom</span>
                  </div>
                  <div
                    className="p-8 text-sm leading-relaxed"
                    style={{ fontFamily: "serif" }}
                  >
                    <div className="text-center mb-8">
                      <h1 className="text-xl font-bold mb-2">
                        ROOFING TECHNICAL SPECIFICATIONS
                      </h1>
                      <h2 className="text-lg font-semibold mb-1">
                        Metropolitan Hospital Expansion Project
                      </h2>
                      <p className="text-gray-600">Project No: MHE-2024-007</p>
                      <p className="text-gray-600">Date: March 15, 2024</p>
                      <p className="text-gray-600 text-xs mt-2">
                        Prepared by: Henderson Roofing Consultants
                      </p>
                    </div>

                    <div className="space-y-8">
                      {/* TABLE OF CONTENTS */}
                      <div className="border-b pb-6">
                        <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">
                          TABLE OF CONTENTS
                        </h3>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>SECTION 07 50 00 - MEMBRANE ROOFING</span>
                            <span>3</span>
                          </div>
                          <div className="flex justify-between">
                            <span>
                              SECTION 07 60 00 - FLASHING AND SHEET METAL
                            </span>
                            <span>15</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SECTION 07 70 00 - ROOF SPECIALTIES</span>
                            <span>25</span>
                          </div>
                          <div className="flex justify-between">
                            <span>
                              SECTION 07 80 00 - FIRE AND SMOKE PROTECTION
                            </span>
                            <span>35</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SECTION 07 90 00 - JOINT PROTECTION</span>
                            <span>42</span>
                          </div>
                          <div className="flex justify-between">
                            <span>APPENDICES</span>
                            <span>48</span>
                          </div>
                        </div>
                      </div>

                      {/* SECTION 07 50 00 */}
                      <div>
                        <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                          SECTION 07 50 00 - MEMBRANE ROOFING
                        </h3>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold mb-3 text-base">
                              PART 1 - GENERAL
                            </h4>

                            <div className="space-y-4">
                              <div>
                                <h5 className="font-semibold text-sm">
                                  1.1 SUMMARY
                                </h5>
                                <div className="ml-4 space-y-2 text-justify">
                                  <p>A. Section includes:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                      1. Fully adhered EPDM membrane roofing
                                      system
                                    </li>
                                    <li>
                                      2. Mechanically attached EPDM membrane
                                      roofing system
                                    </li>
                                    <li>
                                      3. Ballasted EPDM membrane roofing system
                                    </li>
                                    <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                      4. TPO membrane roofing system with
                                      mechanically attached membrane
                                    </li>
                                    <li>
                                      5. Modified bitumen membrane roofing
                                      system
                                    </li>
                                    <li>
                                      6. Built-up roofing system with gravel
                                      surfacing
                                    </li>
                                    <li>
                                      7. Liquid applied membrane roofing system
                                    </li>
                                  </ul>
                                  <p>B. Related Sections:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Section 06 10 00 - Rough Carpentry:
                                      Wood blocking and nailers
                                    </li>
                                    <li>
                                      2. Section 07 21 00 - Thermal Insulation:
                                      Roof insulation systems
                                    </li>
                                    <li>
                                      3. Section 07 60 00 - Flashing and Sheet
                                      Metal: Roof flashings
                                    </li>
                                    <li>
                                      4. Section 07 70 00 - Roof Specialties:
                                      Roof accessories and specialties
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  1.2 DEFINITIONS
                                </h5>
                                <div className="ml-4 space-y-2">
                                  <p>
                                    A. EPDM: Ethylene propylene diene
                                    terpolymer, a synthetic rubber membrane.
                                  </p>
                                  <p>
                                    B. TPO: Thermoplastic polyolefin, a
                                    single-ply roofing membrane.
                                  </p>
                                  <p>
                                    C. Modified Bitumen: Asphalt modified with
                                    rubber or plastic polymers.
                                  </p>
                                  <p>
                                    D. Ballast: Aggregate or pavers used to hold
                                    down roofing membrane.
                                  </p>
                                  <p>
                                    E. Base Sheet: The bottom ply in a multi-ply
                                    membrane system.
                                  </p>
                                  <p>
                                    F. Cap Sheet: The top ply in a multi-ply
                                    membrane system.
                                  </p>
                                  <p>
                                    G. Substrate: The surface to which roofing
                                    is applied.
                                  </p>
                                  <p>
                                    H. Vapor Retarder: Material that restricts
                                    passage of water vapor.
                                  </p>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  1.3 PERFORMANCE REQUIREMENTS
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. General Performance:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Provide roofing system capable of
                                      withstanding design loads
                                    </li>
                                    <li>
                                      2. Minimum 20-year warranty from membrane
                                      manufacturer
                                    </li>
                                    <li>
                                      3. System shall be compatible with
                                      existing building structure
                                    </li>
                                    <li>
                                      4. Comply with local building codes and
                                      fire ratings
                                    </li>
                                  </ul>
                                  <p>B. Wind Uplift Resistance:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Design for wind uplift loads per ASCE 7
                                    </li>
                                    <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                      2. Minimum uplift rating: 165 lbf/sq ft
                                      (7.9 kN/sq m)
                                    </li>
                                    <li>
                                      3. Factory Mutual approved systems where
                                      indicated
                                    </li>
                                    <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                      4. Testing per ASTM D 6878 and UL 580
                                    </li>
                                  </ul>
                                  <p>C. Fire Performance:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Class A fire rating per ASTM E 108
                                    </li>
                                    <li>
                                      2. Comply with UL 263 fire resistance
                                      rating
                                    </li>
                                    <li>
                                      3. Non-combustible insulation where
                                      required by code
                                    </li>
                                  </ul>
                                  <p>D. Thermal Performance:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li className="bg-green-100 px-2 py-1 rounded border-l-4 border-green-500">
                                      1. Minimum R-value: R-25 (RSI-4.4) for
                                      climate zone 4
                                    </li>
                                    <li className="bg-green-100 px-2 py-1 rounded border-l-4 border-green-500">
                                      2. Thermal bridging mitigation per ASHRAE
                                      90.1
                                    </li>
                                    <li>
                                      3. Continuous insulation requirements
                                    </li>
                                  </ul>
                                  <p>E. Weather Resistance:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>1. UV resistance per ASTM G 154</li>
                                    <li>2. Ozone resistance per ASTM D 1149</li>
                                    <li>
                                      3. Temperature cycling resistance: -40°F
                                      to 180°F (-40°C to 82°C)
                                    </li>
                                    <li>
                                      4. Hail resistance: Class 4 per UL 2218
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  1.4 SUBMITTALS
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Product Data:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Manufacturer's product data sheets for
                                      each membrane type
                                    </li>
                                    <li>
                                      2. Insulation product data including
                                      thermal properties
                                    </li>
                                    <li>
                                      3. Adhesive and sealant product data
                                    </li>
                                    <li>
                                      4. Fastener specifications and
                                      installation data
                                    </li>
                                    <li>
                                      5. Accessory product data including
                                      flashings and trim
                                    </li>
                                  </ul>
                                  <p>B. Shop Drawings:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Roofing layout showing membrane
                                      arrangement
                                    </li>
                                    <li>
                                      2. Insulation layout and fastening
                                      patterns
                                    </li>
                                    <li>
                                      3. Flashing details and terminations
                                    </li>
                                    <li>4. Drain and scupper locations</li>
                                    <li>5. Equipment support details</li>
                                    <li>
                                      6. Expansion joint locations and details
                                    </li>
                                  </ul>
                                  <p>C. Samples:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. 12-inch by 12-inch membrane samples
                                    </li>
                                    <li>
                                      2. Seam samples showing joining methods
                                    </li>
                                    <li>3. Insulation samples with facings</li>
                                    <li>4. Flashing material samples</li>
                                  </ul>
                                  <p>D. Design Data:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Wind uplift calculations and test
                                      reports
                                    </li>
                                    <li>2. Fire rating certifications</li>
                                    <li>3. Thermal analysis calculations</li>
                                    <li>
                                      4. System compatibility certifications
                                    </li>
                                  </ul>
                                  <p>E. Quality Control:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Installer qualifications and
                                      certifications
                                    </li>
                                    <li>
                                      2. Material certificates of compliance
                                    </li>
                                    <li>3. Weather monitoring reports</li>
                                    <li>
                                      4. Installation quality control checklists
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  1.5 QUALITY ASSURANCE
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Installer Qualifications:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Authorized dealer/installer of membrane
                                      manufacturer
                                    </li>
                                    <li>
                                      2. Minimum 10 years experience with
                                      similar systems
                                    </li>
                                    <li>
                                      3. Certified by single-source manufacturer
                                    </li>
                                    <li>
                                      4. Provide list of 10 similar completed
                                      projects
                                    </li>
                                    <li>
                                      5. Maintain required licensing and
                                      insurance
                                    </li>
                                  </ul>
                                  <p>B. Source Limitations:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Single source for primary membrane
                                      materials
                                    </li>
                                    <li>
                                      2. Compatible accessory materials from
                                      approved sources
                                    </li>
                                    <li>
                                      3. Factory-fabricated accessories where
                                      possible
                                    </li>
                                  </ul>
                                  <p>C. Pre-Installation Conference:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Conduct meeting prior to roofing
                                      installation
                                    </li>
                                    <li>
                                      2. Review installation procedures and
                                      sequences
                                    </li>
                                    <li>
                                      3. Discuss weather limitations and
                                      contingencies
                                    </li>
                                    <li>4. Coordinate with other trades</li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  1.6 DELIVERY, STORAGE, AND HANDLING
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Delivery:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Deliver materials in original, unopened
                                      containers
                                    </li>
                                    <li>
                                      2. Coordinate delivery to minimize double
                                      handling
                                    </li>
                                    <li>
                                      3. Schedule delivery to match installation
                                      progress
                                    </li>
                                    <li>
                                      4. Inspect materials upon delivery for
                                      damage
                                    </li>
                                  </ul>
                                  <p>B. Storage:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Store materials in dry, ventilated area
                                    </li>
                                    <li>
                                      2. Protect from weather and temperature
                                      extremes
                                    </li>
                                    <li>
                                      3. Store membrane rolls vertically when
                                      possible
                                    </li>
                                    <li>
                                      4. Maintain storage temperatures per
                                      manufacturer's requirements
                                    </li>
                                    <li>
                                      5. First in, first out inventory rotation
                                    </li>
                                  </ul>
                                  <p>C. Handling:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Handle materials to prevent damage
                                    </li>
                                    <li>
                                      2. Use appropriate equipment for material
                                      size and weight
                                    </li>
                                    <li>
                                      3. Protect material surfaces from
                                      contamination
                                    </li>
                                    <li>
                                      4. Do not drag materials across surfaces
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  1.7 PROJECT CONDITIONS
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Weather Limitations:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Do not install during precipitation
                                    </li>
                                    <li>
                                      2. Minimum ambient temperature: 40°F (4°C)
                                    </li>
                                    <li>
                                      3. Maximum wind speed: 25 mph (40 km/h)
                                    </li>
                                    <li>
                                      4. Substrate must be dry and free of frost
                                    </li>
                                    <li>
                                      5. Monitor weather forecasts continuously
                                    </li>
                                  </ul>
                                  <p>B. Field Measurements:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Verify existing conditions before
                                      installation
                                    </li>
                                    <li>
                                      2. Check substrate for proper slopes and
                                      drainage
                                    </li>
                                    <li>
                                      3. Confirm structural adequacy for loads
                                    </li>
                                    <li>
                                      4. Identify and resolve discrepancies
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  1.8 WARRANTY
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Manufacturer's Warranty:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. 20-year non-prorated membrane warranty
                                    </li>
                                    <li>
                                      2. Coverage for material defects and
                                      premature failure
                                    </li>
                                    <li>
                                      3. Include labor and materials for repairs
                                    </li>
                                    <li>
                                      4. Transferable warranty with proper
                                      registration
                                    </li>
                                  </ul>
                                  <p>B. Installer's Warranty:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>1. 5-year workmanship warranty</li>
                                    <li>
                                      2. Coverage for installation defects
                                    </li>
                                    <li>
                                      3. Include emergency repair services
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-t pt-6 mt-8">
                            <h4 className="font-bold mb-3 text-base">
                              PART 2 - PRODUCTS
                            </h4>

                            <div className="space-y-4">
                              <div>
                                <h5 className="font-semibold text-sm">
                                  2.1 EPDM MEMBRANE SYSTEM
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. EPDM Membrane:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                      1. Manufacturer: Carlisle, Firestone, or
                                      GAF as basis of design
                                    </li>
                                    <li>
                                      2. Type: Ethylene propylene diene
                                      terpolymer (EPDM)
                                    </li>
                                    <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                      3. Thickness: 0.060 inch (1.52 mm) minimum
                                    </li>
                                    <li>
                                      4. Width: Maximum practical width to
                                      minimize seams
                                    </li>
                                    <li>
                                      5. Color: Black standard, white where
                                      indicated
                                    </li>
                                    <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                      6. Properties per ASTM D 4637, Type I
                                    </li>
                                  </ul>
                                  <p>B. EPDM Membrane Properties:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Tensile strength: 1200 psi (8.3 MPa)
                                      minimum
                                    </li>
                                    <li>
                                      2. Elongation at break: 300% minimum
                                    </li>
                                    <li>
                                      3. Tear resistance: 200 lbf/in (35 kN/m)
                                      minimum
                                    </li>
                                    <li>
                                      4. Ozone resistance: No cracking after 100
                                      hours
                                    </li>
                                    <li>
                                      5. UV resistance: Excellent per ASTM G 154
                                    </li>
                                    <li>
                                      6. Temperature range: -40°F to 180°F
                                      (-40°C to 82°C)
                                    </li>
                                  </ul>
                                  <p>C. EPDM Accessories:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Seam tape: Pressure-sensitive, 6-inch
                                      wide minimum
                                    </li>
                                    <li>
                                      2. Lap sealant: Single-component
                                      elastomeric sealant
                                    </li>
                                    <li>
                                      3. Primers: As recommended by membrane
                                      manufacturer
                                    </li>
                                    <li>
                                      4. Inside corners: Pre-molded EPDM corner
                                      units
                                    </li>
                                    <li>
                                      5. Outside corners: Pre-molded EPDM corner
                                      units
                                    </li>
                                    <li>
                                      6. Penetration boots: EPDM with stainless
                                      steel clamps
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  2.2 TPO MEMBRANE SYSTEM
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. TPO Membrane:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Manufacturer: Carlisle, GAF, or Johns
                                      Manville
                                    </li>
                                    <li>
                                      2. Type: Thermoplastic polyolefin (TPO)
                                    </li>
                                    <li>
                                      3. Thickness: 0.060 inch (1.52 mm) minimum
                                    </li>
                                    <li>4. Width: 10 feet (3 m) standard</li>
                                    <li>
                                      5. Color: White standard, gray where
                                      indicated
                                    </li>
                                    <li>6. Properties per ASTM D 6878</li>
                                  </ul>
                                  <p>B. TPO Membrane Properties:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Tensile strength: 1800 psi (12.4 MPa)
                                      minimum
                                    </li>
                                    <li>
                                      2. Elongation at break: 450% minimum
                                    </li>
                                    <li>
                                      3. Tear resistance: 300 lbf/in (53 kN/m)
                                      minimum
                                    </li>
                                    <li>
                                      4. Heat aging: Minimal property change
                                      after 28 days at 158°F
                                    </li>
                                    <li>
                                      5. UV resistance: Excellent long-term
                                      stability
                                    </li>
                                    <li>
                                      6. Chemical resistance: Excellent
                                      resistance to common chemicals
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  2.3 MODIFIED BITUMEN SYSTEM
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Base Sheet:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Type: SBS-modified bitumen base sheet
                                    </li>
                                    <li>
                                      2. Reinforcement: Non-woven polyester mat
                                    </li>
                                    <li>
                                      3. Thickness: 160 mils (4.1 mm) minimum
                                    </li>
                                    <li>4. Surfacing: Burn-off film or sand</li>
                                    <li>
                                      5. Application: Fully adhered with cold
                                      adhesive
                                    </li>
                                  </ul>
                                  <p>B. Cap Sheet:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Type: SBS-modified bitumen cap sheet
                                    </li>
                                    <li>
                                      2. Reinforcement: Fiberglass mat or
                                      polyester
                                    </li>
                                    <li>
                                      3. Thickness: 180 mils (4.6 mm) minimum
                                    </li>
                                    <li>
                                      4. Surfacing: Mineral granules or smooth
                                    </li>
                                    <li>
                                      5. Application: Torch-applied or cold
                                      adhesive
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  2.4 INSULATION MATERIALS
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Polyisocyanurate Insulation:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Type: Rigid polyisocyanurate foam
                                    </li>
                                    <li>
                                      2. Thickness: As required for R-value
                                      compliance
                                    </li>
                                    <li>
                                      3. Facings: Glass fiber mat both sides
                                    </li>
                                    <li>
                                      4. Compressive strength: 25 psi (172 kPa)
                                      minimum
                                    </li>
                                    <li>
                                      5. R-value: 6.5 per inch at 75°F mean
                                      temperature
                                    </li>
                                    <li>
                                      6. Fire rating: Class A when tested per
                                      ASTM E 84
                                    </li>
                                  </ul>
                                  <p>B. Tapered Insulation:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Factory-cut tapered polyisocyanurate
                                    </li>
                                    <li>
                                      2. Minimum thickness: 1/2 inch at thin
                                      edge
                                    </li>
                                    <li>3. Slope: 1/4 inch per foot minimum</li>
                                    <li>
                                      4. Drainage design per manufacturer's
                                      software
                                    </li>
                                  </ul>
                                  <p>C. Cover Board:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Type: High-density polyisocyanurate or
                                      gypsum
                                    </li>
                                    <li>
                                      2. Thickness: 1/2 inch (13 mm) minimum
                                    </li>
                                    <li>
                                      3. Purpose: Provide smooth substrate for
                                      membrane
                                    </li>
                                    <li>
                                      4. Compressive strength: 60 psi (414 kPa)
                                      minimum
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  2.5 VAPOR RETARDERS
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Self-Adhering Vapor Retarder:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li className="bg-purple-100 px-2 py-1 rounded border-l-4 border-purple-500">
                                      1. Type: Self-adhering modified bitumen
                                      membrane
                                    </li>
                                    <li>
                                      2. Thickness: 40 mils (1.0 mm) minimum
                                    </li>
                                    <li className="bg-purple-100 px-2 py-1 rounded border-l-4 border-purple-500">
                                      3. Permeance: 0.05 perms maximum per ASTM
                                      E 96
                                    </li>
                                    <li>
                                      4. Reinforcement: Cross-laminated
                                      polyethylene film
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  2.6 FASTENERS AND ADHESIVES
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Mechanical Fasteners:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                      1. Type: Coated steel screws with
                                      polyolefin plates
                                    </li>
                                    <li>
                                      2. Length: Penetrate structural deck
                                      minimum 3/4 inch
                                    </li>
                                    <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                      3. Pullout strength: 400 lbf minimum per
                                      FM 4470
                                    </li>
                                    <li>
                                      4. Corrosion resistance: 500-hour salt
                                      spray test
                                    </li>
                                  </ul>
                                  <p>B. Contact Adhesive:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Type: Solvent-based contact adhesive
                                    </li>
                                    <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                      2. Coverage rate: 1 gallon per 200 sq ft
                                    </li>
                                    <li>
                                      3. Open time: 30 minutes minimum at 70°F
                                    </li>
                                    <li>
                                      4. Service temperature: -40°F to 200°F
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm">
                                  2.7 ROOF DRAINS AND ACCESSORIES
                                </h5>
                                <div className="ml-4 space-y-3">
                                  <p>A. Primary Roof Drains:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li className="bg-indigo-100 px-2 py-1 rounded border-l-4 border-indigo-500">
                                      1. Type: Cast iron with clamping ring
                                    </li>
                                    <li>2. Size: 4-inch minimum diameter</li>
                                    <li className="bg-indigo-100 px-2 py-1 rounded border-l-4 border-indigo-500">
                                      3. Capacity: 7.5 GPM per 100 sq ft of roof
                                      area
                                    </li>
                                    <li>
                                      4. Dome strainer: Vandal-resistant cast
                                      iron
                                    </li>
                                  </ul>
                                  <p>B. Overflow Drains:</p>
                                  <ul className="ml-4 space-y-1">
                                    <li>
                                      1. Located 2 inches above primary drain
                                      inlet
                                    </li>
                                    <li className="bg-indigo-100 px-2 py-1 rounded border-l-4 border-indigo-500">
                                      2. Same capacity as primary drain system
                                    </li>
                                    <li>3. Separate overflow piping system</li>
                                  </ul>
                                </div>
                              </div>

                              <div className="border-t pt-6 mt-8">
                                <h4 className="font-bold mb-3 text-base">
                                  PART 3 - EXECUTION
                                </h4>

                                <div className="space-y-4">
                                  <div>
                                    <h5 className="font-semibold text-sm">
                                      3.1 EXAMINATION
                                    </h5>
                                    <div className="ml-4 space-y-3">
                                      <p>
                                        A. Examine substrates for conditions
                                        affecting performance:
                                      </p>
                                      <ul className="ml-4 space-y-1">
                                        <li className="bg-red-100 px-2 py-1 rounded border-l-4 border-red-500">
                                          1. Verify structural adequacy and
                                          proper slopes
                                        </li>
                                        <li>
                                          2. Check for smooth, clean, and dry
                                          surfaces
                                        </li>
                                        <li className="bg-red-100 px-2 py-1 rounded border-l-4 border-red-500">
                                          3. Confirm proper installation of
                                          vapor retarder
                                        </li>
                                        <li>
                                          4. Verify coordination with other
                                          building systems
                                        </li>
                                      </ul>
                                      <p>
                                        B. Proceed with installation only after
                                        unsatisfactory conditions have been
                                        corrected.
                                      </p>
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-sm">
                                      3.2 PREPARATION
                                    </h5>
                                    <div className="ml-4 space-y-3">
                                      <p>
                                        A. Clean substrate of dust, debris, and
                                        foreign matter.
                                      </p>
                                      <p>
                                        B. Complete installation of items that
                                        penetrate membrane before membrane
                                        installation.
                                      </p>
                                      <p className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                        C. Install temporary edge protection
                                        during membrane installation.
                                      </p>
                                      <p>
                                        D. Coordinate with rooftop equipment
                                        installation schedule.
                                      </p>
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-sm">
                                      3.3 INSTALLATION OF INSULATION
                                    </h5>
                                    <div className="ml-4 space-y-3">
                                      <p>
                                        A. General Installation Requirements:
                                      </p>
                                      <ul className="ml-4 space-y-1">
                                        <li>
                                          1. Install insulation in single or
                                          multiple layers
                                        </li>
                                        <li className="bg-green-100 px-2 py-1 rounded border-l-4 border-green-500">
                                          2. Stagger joints between layers
                                          minimum 6 inches
                                        </li>
                                        <li>
                                          3. Fit tightly together without gaps
                                          or voids
                                        </li>
                                        <li className="bg-green-100 px-2 py-1 rounded border-l-4 border-green-500">
                                          4. Minimum 3-inch clearance from roof
                                          drains
                                        </li>
                                      </ul>
                                      <p>B. Fastening Requirements:</p>
                                      <ul className="ml-4 space-y-1">
                                        <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                          1. Mechanically fasten first layer at
                                          4 fasteners per board
                                        </li>
                                        <li>
                                          2. Adhesively attach subsequent layers
                                        </li>
                                        <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                          3. Install fasteners minimum 2 inches
                                          from board edges
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-sm">
                                      3.4 MEMBRANE INSTALLATION
                                    </h5>
                                    <div className="ml-4 space-y-3">
                                      <p>A. EPDM Membrane Installation:</p>
                                      <ul className="ml-4 space-y-1">
                                        <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                          1. Install membrane in largest
                                          practical sizes
                                        </li>
                                        <li>
                                          2. Allow membrane to relax minimum 30
                                          minutes before adhering
                                        </li>
                                        <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                          3. Apply adhesive at manufacturer's
                                          specified coverage rate
                                        </li>
                                        <li>
                                          4. Install membrane without wrinkles
                                          or air bubbles
                                        </li>
                                        <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                          5. Seam overlap: 3 inches minimum, 6
                                          inches maximum
                                        </li>
                                      </ul>
                                      <p>B. Seaming Procedures:</p>
                                      <ul className="ml-4 space-y-1">
                                        <li>
                                          1. Clean seam area with manufacturer's
                                          cleaner
                                        </li>
                                        <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                          2. Apply primer and allow to dry
                                          completely
                                        </li>
                                        <li>
                                          3. Install seam tape with firm
                                          pressure
                                        </li>
                                        <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                          4. Apply sealant to edges of seam tape
                                        </li>
                                        <li>
                                          5. Test seams with probe after 24-hour
                                          cure time
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-sm">
                                      3.5 FLASHING INSTALLATION
                                    </h5>
                                    <div className="ml-4 space-y-3">
                                      <p>A. Base Flashing:</p>
                                      <ul className="ml-4 space-y-1">
                                        <li className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                          1. Extend minimum 8 inches onto roof
                                          surface
                                        </li>
                                        <li>
                                          2. Extend minimum 8 inches up vertical
                                          surfaces
                                        </li>
                                        <li className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                          3. Install without wrinkles or
                                          bridging
                                        </li>
                                        <li>
                                          4. Seal all terminations and
                                          penetrations
                                        </li>
                                      </ul>
                                      <p>B. Cap Flashing:</p>
                                      <ul className="ml-4 space-y-1">
                                        <li>
                                          1. Install over base flashing with
                                          proper overlap
                                        </li>
                                        <li className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                          2. Secure with concealed fasteners
                                        </li>
                                        <li>
                                          3. Seal all joints and terminations
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-sm">
                                      3.6 QUALITY CONTROL
                                    </h5>
                                    <div className="ml-4 space-y-3">
                                      <p>A. Field Quality Control:</p>
                                      <ul className="ml-4 space-y-1">
                                        <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                          1. Daily inspection of installation
                                          progress
                                        </li>
                                        <li>
                                          2. Weather monitoring and
                                          documentation
                                        </li>
                                        <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                          3. Seam testing with probe at 6-foot
                                          intervals
                                        </li>
                                        <li>
                                          4. Flood testing of completed areas
                                        </li>
                                        <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                          5. Electronic leak detection where
                                          specified
                                        </li>
                                      </ul>
                                      <p>B. Testing Requirements:</p>
                                      <ul className="ml-4 space-y-1">
                                        <li>
                                          1. All seams tested for continuity
                                        </li>
                                        <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                          2. Flood test duration: 24 hours
                                          minimum
                                        </li>
                                        <li>
                                          3. Water depth: 2 inches minimum
                                        </li>
                                        <li>
                                          4. Document test results with
                                          photographs
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-sm">
                                      3.7 PROTECTION AND CLEANING
                                    </h5>
                                    <div className="ml-4 space-y-3">
                                      <p>
                                        A. Protect installed roofing from damage
                                        during construction.
                                      </p>
                                      <p>
                                        B. Prohibit foot traffic except where
                                        necessary for construction.
                                      </p>
                                      <p>
                                        C. Install protective walkways for
                                        maintenance access.
                                      </p>
                                      <p>
                                        D. Clean membrane surface of debris and
                                        foreign materials.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="border-t pt-6 mt-8">
                                <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                                  SECTION 07 60 00 - FLASHING AND SHEET METAL
                                </h3>

                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-bold mb-2">
                                      PART 1 - GENERAL
                                    </h4>

                                    <div className="space-y-3">
                                      <div>
                                        <h5 className="font-semibold">
                                          1.1 SUMMARY
                                        </h5>
                                        <div className="ml-4 space-y-2">
                                          <p>A. Section includes:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                              1. Through-wall flashing systems
                                            </li>
                                            <li>
                                              2. Metal roof drainage systems
                                            </li>
                                            <li className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                              3. Expansion joint covers
                                            </li>
                                            <li>
                                              4. Metal copings and cap flashings
                                            </li>
                                            <li>
                                              5. Reglets and counterflashings
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div>
                                        <h5 className="font-semibold">
                                          1.2 PERFORMANCE REQUIREMENTS
                                        </h5>
                                        <div className="ml-4 space-y-2">
                                          <p>A. Structural Performance:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                              1. Wind load resistance: 150 mph
                                              basic wind speed
                                            </li>
                                            <li>
                                              2. Seismic design per ASCE 7
                                              requirements
                                            </li>
                                            <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                              3. Thermal movement accommodation
                                            </li>
                                          </ul>
                                          <p>B. Water Resistance:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li>
                                              1. Watertight construction under
                                              test pressure
                                            </li>
                                            <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                              2. Drainage capacity per local
                                              plumbing codes
                                            </li>
                                            <li>
                                              3. Compatible with building
                                              envelope systems
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-6 mt-8">
                                <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                                  SECTION 07 60 00 - FLASHING AND SHEET METAL
                                  (CONTINUED)
                                </h3>

                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-bold mb-2">
                                      PART 2 - PRODUCTS (CONTINUED)
                                    </h4>

                                    <div className="space-y-3">
                                      <div>
                                        <h5 className="font-semibold">
                                          2.3 SHEET METAL MATERIALS
                                        </h5>
                                        <div className="ml-4 space-y-2">
                                          <p>A. Aluminum Sheet:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                              1. Alloy: 3003-H14 for general
                                              applications
                                            </li>
                                            <li>
                                              2. Thickness: 0.050 inch (1.27 mm)
                                              minimum for copings
                                            </li>
                                            <li className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                              3. Finish: Kynar 500 PVDF coating,
                                              70% PVDF minimum
                                            </li>
                                            <li>
                                              4. Color: As selected from
                                              manufacturer's standard colors
                                            </li>
                                            <li>
                                              5. Warranty: 20-year finish
                                              warranty
                                            </li>
                                          </ul>
                                          <p>B. Stainless Steel Sheet:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li>
                                              1. Type: 316L stainless steel for
                                              coastal environments
                                            </li>
                                            <li className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                              2. Thickness: 0.062 inch (1.57 mm)
                                              minimum
                                            </li>
                                            <li>
                                              3. Finish: 2B mill finish or No. 4
                                              brushed
                                            </li>
                                            <li>
                                              4. Temper: Half-hard (H1/2) for
                                              forming
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div>
                                        <h5 className="font-semibold">
                                          2.4 FASTENERS AND HARDWARE
                                        </h5>
                                        <div className="ml-4 space-y-2">
                                          <p>A. Concealed Fasteners:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                              1. Type: Stainless steel screws
                                              with EPDM washers
                                            </li>
                                            <li>
                                              2. Size: #12 x 1-1/4 inch minimum
                                              length
                                            </li>
                                            <li>
                                              3. Thread: Self-drilling point for
                                              steel substrates
                                            </li>
                                            <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                              4. Corrosion resistance: 1000-hour
                                              salt spray test
                                            </li>
                                          </ul>
                                          <p>B. Cleats and Clips:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li>
                                              1. Material: Same as flashing
                                              material
                                            </li>
                                            <li>
                                              2. Thickness: 0.050 inch minimum
                                            </li>
                                            <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                              3. Spacing: 24 inches on center
                                              maximum
                                            </li>
                                            <li>
                                              4. Anchorage: Mechanical fasteners
                                              into structure
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div>
                                        <h5 className="font-semibold">
                                          2.5 SEALANTS AND GASKETS
                                        </h5>
                                        <div className="ml-4 space-y-2">
                                          <p>A. Structural Glazing Sealant:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                              1. Type: Two-component structural
                                              silicone
                                            </li>
                                            <li>2. Shore A Hardness: 35 ± 5</li>
                                            <li>
                                              3. Movement capability: ±25%
                                              minimum
                                            </li>
                                            <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                              4. UV resistance: No degradation
                                              after 2000 hours
                                            </li>
                                          </ul>
                                          <p>B. Weather Sealant:</p>
                                          <ul className="ml-4 space-y-1">
                                            <li>
                                              1. Type: Single-component
                                              polyurethane
                                            </li>
                                            <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                              2. Life expectancy: 20 years
                                              minimum
                                            </li>
                                            <li>
                                              3. Temperature range: -40°F to
                                              180°F
                                            </li>
                                            <li>
                                              4. Tooling time: 15 minutes
                                              minimum
                                            </li>
                                          </ul>
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
                                            A. Verify that substrate surfaces
                                            are clean, dry, and properly
                                            prepared.
                                          </p>
                                          <p className="bg-red-100 px-2 py-1 rounded border-l-4 border-red-500">
                                            B. Install temporary weather
                                            protection during installation.
                                          </p>
                                          <p>
                                            C. Coordinate flashing installation
                                            with membrane installation.
                                          </p>
                                          <p>
                                            D. Mark locations of concealed
                                            fasteners for future reference.
                                          </p>
                                        </div>
                                      </div>

                                      <div>
                                        <h5 className="font-semibold">
                                          3.2 INSTALLATION OF THROUGH-WALL
                                          FLASHING
                                        </h5>
                                        <div className="ml-4 space-y-2">
                                          <p>
                                            A. Install flashing in continuous
                                            lengths where possible.
                                          </p>
                                          <p className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                            B. Lap joints minimum 6 inches in
                                            direction of water flow.
                                          </p>
                                          <p>
                                            C. Seal all joints with compatible
                                            sealant.
                                          </p>
                                          <p>
                                            D. Provide end dams at terminations.
                                          </p>
                                        </div>
                                      </div>

                                      <div>
                                        <h5 className="font-semibold">
                                          3.3 METAL COPING INSTALLATION
                                        </h5>
                                        <div className="ml-4 space-y-2">
                                          <p>
                                            A. Install over continuous cleat
                                            system.
                                          </p>
                                          <p className="bg-gray-100 px-2 py-1 rounded border-l-4 border-gray-500">
                                            B. Provide thermal movement joints
                                            every 40 feet.
                                          </p>
                                          <p>
                                            C. Seal all joints with structural
                                            glazing sealant.
                                          </p>
                                          <p>
                                            D. Install drainage system at low
                                            points.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="border-t pt-6 mt-8">
                                  <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                                    SECTION 07 70 00 - ROOF SPECIALTIES
                                  </h3>

                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-bold mb-2">
                                        PART 1 - GENERAL
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            1.1 SUMMARY
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Section includes:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-purple-100 px-2 py-1 rounded border-l-4 border-purple-500">
                                                1. Roof hatches and access doors
                                              </li>
                                              <li>
                                                2. Equipment supports and curbs
                                              </li>
                                              <li className="bg-purple-100 px-2 py-1 rounded border-l-4 border-purple-500">
                                                3. Roof ventilators and exhaust
                                                fans
                                              </li>
                                              <li>
                                                4. Pipe supports and equipment
                                                rails
                                              </li>
                                              <li>
                                                5. Snow guards and edge
                                                protection
                                              </li>
                                              <li>
                                                6. Walkway systems and fall
                                                protection
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            1.2 PERFORMANCE REQUIREMENTS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Structural Performance:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                                1. Design loads per ASCE 7 for
                                                roof live loads
                                              </li>
                                              <li>
                                                2. Wind resistance: 150 mph
                                                basic wind speed
                                              </li>
                                              <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                                3. Seismic design category D
                                                requirements
                                              </li>
                                              <li>
                                                4. Snow load resistance: 40 psf
                                                ground snow load
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <h4 className="font-bold mb-2">
                                        PART 2 - PRODUCTS
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            2.1 ROOF HATCHES
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Personnel Hatches:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-indigo-100 px-2 py-1 rounded border-l-4 border-indigo-500">
                                                1. Size: 30" x 36" (762 x 914
                                                mm) minimum
                                              </li>
                                              <li>
                                                2. Material: Aluminum
                                                construction with steel frame
                                              </li>
                                              <li>
                                                3. Insulation: R-10 minimum
                                                thermal resistance
                                              </li>
                                              <li className="bg-indigo-100 px-2 py-1 rounded border-l-4 border-indigo-500">
                                                4. Hardware: Self-closing spring
                                                operators
                                              </li>
                                              <li>
                                                5. Locking: Cylinder lock with
                                                panic hardware
                                              </li>
                                              <li>
                                                6. Ladder: Aluminum ship ladder,
                                                OSHA compliant
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            2.2 EQUIPMENT SUPPORTS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Manufactured Curbs:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li>
                                                1. Material: Galvanized steel,
                                                16 gauge minimum
                                              </li>
                                              <li className="bg-green-100 px-2 py-1 rounded border-l-4 border-green-500">
                                                2. Height: 8 inches minimum
                                                above roof surface
                                              </li>
                                              <li>
                                                3. Insulation: Continuous
                                                insulation around perimeter
                                              </li>
                                              <li className="bg-green-100 px-2 py-1 rounded border-l-4 border-green-500">
                                                4. Thermal break: Non-conductive
                                                material at base
                                              </li>
                                              <li>
                                                5. Flashing: Integral flashing
                                                with EPDM membrane
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            2.3 WALKWAY SYSTEMS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Rooftop Walkways:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-teal-100 px-2 py-1 rounded border-l-4 border-teal-500">
                                                1. Material: Interlocking rubber
                                                pavers
                                              </li>
                                              <li>
                                                2. Thickness: 1/2 inch minimum
                                              </li>
                                              <li>
                                                3. Size: 24" x 24" modular units
                                              </li>
                                              <li className="bg-teal-100 px-2 py-1 rounded border-l-4 border-teal-500">
                                                4. Surface: Non-slip texture, UV
                                                resistant
                                              </li>
                                              <li>
                                                5. Installation: Ballasted
                                                system, no penetrations
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <h4 className="font-bold mb-2">
                                        PART 3 - EXECUTION
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            3.1 INSTALLATION OF ROOF HATCHES
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>
                                              A. Install hatches plumb and
                                              level.
                                            </p>
                                            <p className="bg-red-100 px-2 py-1 rounded border-l-4 border-red-500">
                                              B. Coordinate with structural
                                              framing and roof membrane.
                                            </p>
                                            <p>
                                              C. Install flashing and seal all
                                              penetrations.
                                            </p>
                                            <p>
                                              D. Test operation and adjust
                                              hardware.
                                            </p>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            3.2 EQUIPMENT SUPPORT INSTALLATION
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>
                                              A. Coordinate curb locations with
                                              equipment placement.
                                            </p>
                                            <p className="bg-green-100 px-2 py-1 rounded border-l-4 border-green-500">
                                              B. Install thermal breaks to
                                              prevent condensation.
                                            </p>
                                            <p>
                                              C. Provide vibration isolation
                                              where required.
                                            </p>
                                            <p>
                                              D. Test all connections for
                                              structural adequacy.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="border-t pt-6 mt-8">
                                  <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                                    SECTION 07 80 00 - FIRE AND SMOKE PROTECTION
                                  </h3>

                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-bold mb-2">
                                        PART 1 - GENERAL
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            1.1 SUMMARY
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Section includes:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-red-100 px-2 py-1 rounded border-l-4 border-red-500">
                                                1. Fire-rated roof assemblies
                                              </li>
                                              <li>
                                                2. Penetration fire-stopping
                                                systems
                                              </li>
                                              <li className="bg-red-100 px-2 py-1 rounded border-l-4 border-red-500">
                                                3. Smoke and fire dampers
                                              </li>
                                              <li>
                                                4. Emergency egress lighting
                                              </li>
                                              <li>
                                                5. Fire alarm interface systems
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            1.2 FIRE RESISTANCE REQUIREMENTS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Roof Assembly Rating:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-red-100 px-2 py-1 rounded border-l-4 border-red-500">
                                                1. Fire resistance: 2-hour
                                                rating minimum
                                              </li>
                                              <li>
                                                2. Testing standard: UL 263
                                                (ASTM E 119)
                                              </li>
                                              <li>
                                                3. Class A fire rating per ASTM
                                                E 108
                                              </li>
                                              <li className="bg-red-100 px-2 py-1 rounded border-l-4 border-red-500">
                                                4. FM Global approval required
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <h4 className="font-bold mb-2">
                                        PART 2 - PRODUCTS
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            2.1 FIRE-STOPPING MATERIALS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Intumescent Sealants:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                                1. Type: Single-component
                                                intumescent caulk
                                              </li>
                                              <li>
                                                2. Fire rating: 3-hour F and T
                                                rating
                                              </li>
                                              <li>
                                                3. Temperature range: -20°F to
                                                180°F
                                              </li>
                                              <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                                4. Movement capability: ±25%
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            2.2 FIRE DAMPERS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Roof Exhaust Fire Dampers:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li>
                                                1. Rating: 1.5-hour fire rating
                                                minimum
                                              </li>
                                              <li className="bg-orange-100 px-2 py-1 rounded border-l-4 border-orange-500">
                                                2. Actuator: 165°F fusible link
                                              </li>
                                              <li>
                                                3. Construction: Galvanized
                                                steel frame
                                              </li>
                                              <li>
                                                4. Leakage: Class I per UL 555
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="border-t pt-6 mt-8">
                                  <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                                    SECTION 07 90 00 - JOINT PROTECTION
                                  </h3>

                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-bold mb-2">
                                        PART 1 - GENERAL
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            1.1 SUMMARY
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Section includes:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-cyan-100 px-2 py-1 rounded border-l-4 border-cyan-500">
                                                1. Building expansion joints
                                              </li>
                                              <li>
                                                2. Control joints in roofing
                                              </li>
                                              <li>
                                                3. Seismic separation joints
                                              </li>
                                              <li className="bg-cyan-100 px-2 py-1 rounded border-l-4 border-cyan-500">
                                                4. Perimeter sealant joints
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            1.2 PERFORMANCE REQUIREMENTS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Movement Capability:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-cyan-100 px-2 py-1 rounded border-l-4 border-cyan-500">
                                                1. Thermal movement: ±2 inches
                                              </li>
                                              <li>
                                                2. Seismic movement: ±4 inches
                                              </li>
                                              <li>3. Wind sway: ±1 inch</li>
                                              <li className="bg-cyan-100 px-2 py-1 rounded border-l-4 border-cyan-500">
                                                4. Building settlement: 1/2 inch
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <h4 className="font-bold mb-2">
                                        PART 2 - PRODUCTS
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            2.1 EXPANSION JOINT SYSTEMS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>
                                              A. Structural Expansion Joints:
                                            </p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                                1. Type: Modular bridge system
                                              </li>
                                              <li>
                                                2. Movement: ±4 inches total
                                                movement
                                              </li>
                                              <li>
                                                3. Weatherproofing: EPDM
                                                compression seal
                                              </li>
                                              <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                                4. Fire rating: 2-hour assembly
                                                rating
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            2.2 CONTROL JOINT FILLERS
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Preformed Joint Fillers:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li>
                                                1. Material: Closed-cell foam
                                                rubber
                                              </li>
                                              <li className="bg-blue-100 px-2 py-1 rounded border-l-4 border-primary">
                                                2. Compression: 25% compression
                                                set maximum
                                              </li>
                                              <li>
                                                3. Temperature range: -40°F to
                                                200°F
                                              </li>
                                              <li>
                                                4. Ozone resistance: No cracking
                                                after 100 hours
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="border-t pt-6 mt-8">
                                  <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                                    QUALITY CONTROL AND TESTING
                                  </h3>

                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-bold mb-2">
                                        FIELD QUALITY CONTROL
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            Testing Requirements
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Membrane Testing:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                                1. Electronic leak detection:
                                                100% of membrane area
                                              </li>
                                              <li>
                                                2. Seam peel testing: 1 test per
                                                500 linear feet
                                              </li>
                                              <li>
                                                3. Flood testing: All roof areas
                                                for 24 hours
                                              </li>
                                              <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                                4. Core cut testing: 2 cuts per
                                                10,000 sq ft
                                              </li>
                                            </ul>
                                            <p>B. Insulation Testing:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li>
                                                1. Thermal imaging: 100% of
                                                insulated area
                                              </li>
                                              <li className="bg-yellow-100 px-2 py-1 rounded border-l-4 border-yellow-500">
                                                2. Moisture scanning: Bi-weekly
                                                during installation
                                              </li>
                                              <li>
                                                3. Fastener pullout: 1 test per
                                                1,000 fasteners
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        <div>
                                          <h5 className="font-semibold">
                                            Documentation Requirements
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Daily Reports:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li>
                                                1. Weather conditions and
                                                temperatures
                                              </li>
                                              <li className="bg-green-100 px-2 py-1 rounded border-l-4 border-green-500">
                                                2. Materials installed and
                                                quantities
                                              </li>
                                              <li>
                                                3. Quality control test results
                                              </li>
                                              <li>
                                                4. Deficiencies noted and
                                                corrected
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="border-t pt-6 mt-8">
                                  <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                                    MAINTENANCE AND WARRANTY
                                  </h3>

                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-bold mb-2">
                                        MAINTENANCE REQUIREMENTS
                                      </h4>

                                      <div className="space-y-3">
                                        <div>
                                          <h5 className="font-semibold">
                                            Routine Maintenance
                                          </h5>
                                          <div className="ml-4 space-y-2">
                                            <p>A. Monthly Inspections:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li className="bg-purple-100 px-2 py-1 rounded border-l-4 border-purple-500">
                                                1. Check drains and gutters for
                                                debris
                                              </li>
                                              <li>
                                                2. Inspect membrane for damage
                                                or wear
                                              </li>
                                              <li>
                                                3. Verify flashing integrity
                                              </li>
                                              <li className="bg-purple-100 px-2 py-1 rounded border-l-4 border-purple-500">
                                                4. Document all findings with
                                                photographs
                                              </li>
                                            </ul>
                                            <p>B. Semi-Annual Maintenance:</p>
                                            <ul className="ml-4 space-y-1">
                                              <li>
                                                1. Clean all roof drains and
                                                scuppers
                                              </li>
                                              <li className="bg-purple-100 px-2 py-1 rounded border-l-4 border-purple-500">
                                                2. Inspect and clean HVAC
                                                equipment
                                              </li>
                                              <li>3. Check walkway systems</li>
                                              <li>
                                                4. Test emergency roof access
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="border-t pt-6 mt-8">
                                  <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                                    APPENDICES
                                  </h3>

                                  <div className="space-y-4 text-xs">
                                    <div>
                                      <h4 className="font-bold mb-2">
                                        APPENDIX A - TECHNICAL DATA SHEETS
                                      </h4>
                                      <p>
                                        Complete manufacturer data sheets for
                                        all specified products...
                                      </p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold mb-2">
                                        APPENDIX B - INSTALLATION DETAILS
                                      </h4>
                                      <p>
                                        Detailed installation drawings and
                                        connection details...
                                      </p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold mb-2">
                                        APPENDIX C - WARRANTY DOCUMENTATION
                                      </h4>
                                      <p>
                                        Sample warranty forms and registration
                                        requirements...
                                      </p>
                                    </div>

                                    <div className="bg-gray-100 p-4 rounded mt-6">
                                      <p className="text-center font-bold text-gray-700">
                                        END OF SPECIFICATION DOCUMENT
                                      </p>
                                      <p className="text-center text-gray-600 mt-2">
                                        Metropolitan Hospital Expansion Project
                                        • 50 Pages Complete
                                      </p>
                                      <p className="text-center text-gray-500 text-[10px] mt-1">
                                        This document contains comprehensive
                                        roofing specifications including
                                        membrane systems, insulation, flashing,
                                        specialties, fire protection, joint
                                        protection, quality control, testing
                                        procedures, maintenance requirements,
                                        and technical appendices.
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
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-gray-500">Page 1 of 50</span>
                </div>
              </CardContent>
            </Card>

            {/* AI-Generated Submittal Document */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-primary" />
                    AI-Generated Submittal Package
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      Auto-Generated
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg shadow-sm h-[calc(50vh-100px)] overflow-y-auto">
                  <div className="bg-gray-100 px-4 py-2 border-b text-xs text-gray-600 flex justify-between items-center">
                    <span>
                      Metropolitan_Hospital_EPDM_Submittal_Package.pdf
                    </span>
                    <span>Page 1 of 15 • Auto-Generated • 100% zoom</span>
                  </div>
                  <div
                    className="p-8 text-sm leading-relaxed"
                    style={{ fontFamily: "serif" }}
                  >
                    <div className="text-center mb-8">
                      <h1 className="text-xl font-bold mb-2">
                        SUBMITTAL PACKAGE
                      </h1>
                      <h2 className="text-lg font-semibold mb-1">
                        Section 07 50 00 - Membrane Roofing
                      </h2>
                      <p className="text-gray-600">
                        Metropolitan Hospital Expansion Project
                      </p>
                      <p className="text-gray-600">Project No: MHE-2024-007</p>
                      <p className="text-gray-600 text-xs mt-2">
                        Generated by Hafestus AI •{" "}
                        {new Date().toLocaleDateString()}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                        <h3 className="font-bold text-green-900 mb-2">
                          ✓ AI COMPLIANCE VERIFICATION
                        </h3>
                        <p className="text-green-800 text-sm">
                          This submittal package has been automatically
                          generated and verified against all 47 specification
                          requirements. Compliance rate: 100%
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                          PRODUCT DATA SUBMITTALS
                        </h3>

                        <div className="space-y-6">
                          <div className="bg-blue-50 p-4 rounded">
                            <h4 className="font-bold mb-3 text-blue-900">
                              1. EPDM MEMBRANE SYSTEM
                            </h4>

                            <div className="space-y-4">
                              <div>
                                <h5 className="font-semibold text-sm mb-2">
                                  Primary Membrane - Carlisle Sure-Weld EPDM
                                </h5>
                                <div className="ml-4 space-y-2 text-xs">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p>
                                        <span className="font-medium">
                                          Manufacturer:
                                        </span>{" "}
                                        Carlisle SynTec Systems
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Product:
                                        </span>{" "}
                                        Sure-Weld 0.060" EPDM Membrane
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Color:
                                        </span>{" "}
                                        Black (Standard)
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Width:
                                        </span>{" "}
                                        50 feet (15.24 m)
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <span className="font-medium">
                                          Thickness:
                                        </span>{" "}
                                        0.060" (1.52 mm)
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Standard:
                                        </span>{" "}
                                        ASTM D 4637 Type I
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Warranty:
                                        </span>{" "}
                                        20 Year NDL
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Fire Rating:
                                        </span>{" "}
                                        Class A
                                      </p>
                                    </div>
                                  </div>
                                  <div className="bg-white p-3 rounded border">
                                    <p className="font-medium text-green-700">
                                      ✓ SPECIFICATION COMPLIANCE:
                                    </p>
                                    <ul className="mt-1 space-y-1 text-green-600">
                                      <li>
                                        • Meets ASTM D 4637 Type I requirements
                                        ✓
                                      </li>
                                      <li>
                                        • 0.060" minimum thickness requirement ✓
                                      </li>
                                      <li>
                                        • Approved manufacturer (Carlisle
                                        specified) ✓
                                      </li>
                                      <li>• 20-year warranty requirement ✓</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-sm mb-2">
                                  Technical Properties
                                </h5>
                                <div className="ml-4">
                                  <table className="w-full text-xs border-collapse border border-gray-300">
                                    <thead>
                                      <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-2 text-left">
                                          Property
                                        </th>
                                        <th className="border border-gray-300 p-2 text-left">
                                          Test Method
                                        </th>
                                        <th className="border border-gray-300 p-2 text-left">
                                          Value
                                        </th>
                                        <th className="border border-gray-300 p-2 text-left">
                                          Spec Requirement
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="border border-gray-300 p-2">
                                          Tensile Strength
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                          ASTM D 412
                                        </td>
                                        <td className="border border-gray-300 p-2 font-medium text-green-600">
                                          1,400 psi
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                          1,200 psi min
                                        </td>
                                      </tr>
                                      <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-2">
                                          Elongation at Break
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                          ASTM D 412
                                        </td>
                                        <td className="border border-gray-300 p-2 font-medium text-green-600">
                                          400%
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                          300% min
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="border border-gray-300 p-2">
                                          Tear Resistance
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                          ASTM D 624
                                        </td>
                                        <td className="border border-gray-300 p-2 font-medium text-green-600">
                                          250 lbf/in
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                          200 lbf/in min
                                        </td>
                                      </tr>
                                      <tr className="bg-gray-50">
                                        <td className="border border-gray-300 p-2">
                                          Ozone Resistance
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                          ASTM D 1149
                                        </td>
                                        <td className="border border-gray-300 p-2 font-medium text-green-600">
                                          No Cracking
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                          No Cracking
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-purple-50 p-4 rounded">
                            <h4 className="font-bold mb-3 text-purple-900">
                              2. INSULATION SYSTEM
                            </h4>

                            <div className="space-y-4">
                              <div>
                                <h5 className="font-semibold text-sm mb-2">
                                  GAF EnergyGuard Polyiso Insulation
                                </h5>
                                <div className="ml-4 space-y-2 text-xs">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p>
                                        <span className="font-medium">
                                          Manufacturer:
                                        </span>{" "}
                                        GAF Materials Corporation
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Product:
                                        </span>{" "}
                                        EnergyGuard HD Polyiso
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Thickness:
                                        </span>{" "}
                                        4.0" (R-25)
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Facing:
                                        </span>{" "}
                                        Glass Mat Both Sides
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <span className="font-medium">
                                          R-Value:
                                        </span>{" "}
                                        R-6.2 per inch @ 75°F
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Compressive Strength:
                                        </span>{" "}
                                        25 psi min
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Fire Rating:
                                        </span>{" "}
                                        Class A per ASTM E 84
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Dimensions:
                                        </span>{" "}
                                        4' x 8' (1.22m x 2.44m)
                                      </p>
                                    </div>
                                  </div>
                                  <div className="bg-white p-3 rounded border">
                                    <p className="font-medium text-green-700">
                                      ✓ THERMAL COMPLIANCE:
                                    </p>
                                    <ul className="mt-1 space-y-1 text-green-600">
                                      <li>
                                        • R-25 requirement: 4.0" @ R-6.2/inch =
                                        R-24.8 ✓
                                      </li>
                                      <li>
                                        • Class A fire rating per ASTM E 84 ✓
                                      </li>
                                      <li>• 25 psi compressive strength ✓</li>
                                      <li>
                                        • Glass mat facing compatible with
                                        adhesive ✓
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-orange-50 p-4 rounded">
                            <h4 className="font-bold mb-3 text-orange-900">
                              3. FASTENING SYSTEM
                            </h4>

                            <div className="space-y-4">
                              <div>
                                <h5 className="font-semibold text-sm mb-2">
                                  Olympic Fastening OlyFast HD Fasteners
                                </h5>
                                <div className="ml-4 space-y-2 text-xs">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p>
                                        <span className="font-medium">
                                          Manufacturer:
                                        </span>{" "}
                                        Olympic Fastening Systems
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Product:
                                        </span>{" "}
                                        OlyFast 6" HD Fasteners
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Length:
                                        </span>{" "}
                                        6.0" (152mm)
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Plate Size:
                                        </span>{" "}
                                        3" (76mm) diameter
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <span className="font-medium">
                                          Material:
                                        </span>{" "}
                                        Coated Steel
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Pullout Strength:
                                        </span>{" "}
                                        465 lbf
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Pattern:
                                        </span>{" "}
                                        4 per 4'x8' board
                                      </p>
                                      <p>
                                        <span className="font-medium">
                                          Installation:
                                        </span>{" "}
                                        Impact driver
                                      </p>
                                    </div>
                                  </div>
                                  <div className="bg-white p-3 rounded border">
                                    <p className="font-medium text-green-700">
                                      ✓ WIND UPLIFT COMPLIANCE:
                                    </p>
                                    <ul className="mt-1 space-y-1 text-green-600">
                                      <li>
                                        • 465 lbf pullout exceeds 400 lbf
                                        minimum ✓
                                      </li>
                                      <li>
                                        • 165 lbf/sq ft uplift rating achieved ✓
                                      </li>
                                      <li>• FM 4470 tested and approved ✓</li>
                                      <li>
                                        • Compatible with steel deck substrate ✓
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-50 p-4 rounded mt-6">
                            <h4 className="font-bold mb-3">
                              MANUFACTURER CERTIFICATIONS
                            </h4>
                            <div className="grid grid-cols-3 gap-4 text-xs">
                              <div className="text-center">
                                <div className="bg-white p-3 rounded border">
                                  <p className="font-medium">Carlisle SynTec</p>
                                  <p className="text-gray-600">ISO 9001:2015</p>
                                  <p className="text-green-600">✓ Certified</p>
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="bg-white p-3 rounded border">
                                  <p className="font-medium">GAF Materials</p>
                                  <p className="text-gray-600">UL Listed</p>
                                  <p className="text-green-600">✓ Certified</p>
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="bg-white p-3 rounded border">
                                  <p className="font-medium">
                                    Olympic Fastening
                                  </p>
                                  <p className="text-gray-600">FM Approved</p>
                                  <p className="text-green-600">✓ Certified</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded mt-6">
                            <h4 className="font-bold mb-3 text-blue-900">
                              AI ANALYSIS SUMMARY
                            </h4>
                            <div className="text-xs space-y-2">
                              <p>
                                <span className="font-medium">
                                  Specification Requirements Analyzed:
                                </span>{" "}
                                47 out of 47
                              </p>
                              <p>
                                <span className="font-medium">
                                  Manufacturer Products Evaluated:
                                </span>{" "}
                                156 products across 23 manufacturers
                              </p>
                              <p>
                                <span className="font-medium">
                                  Compliance Verification:
                                </span>{" "}
                                100% specification compliance achieved
                              </p>
                              <p>
                                <span className="font-medium">
                                  Cost Optimization:
                                </span>{" "}
                                12% cost savings vs. typical manual selection
                              </p>
                              <p>
                                <span className="font-medium">
                                  Performance Rating:
                                </span>{" "}
                                Exceeds all minimum requirements
                              </p>
                              <p className="text-blue-700 font-medium">
                                Generation Time: 4.2 seconds
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-gray-500">Auto-Generated</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      Previous
                    </Button>
                    <Button variant="ghost" size="sm">
                      Next
                    </Button>
                    <Button size="sm" className="ml-2">
                      <Download className="h-4 w-4 mr-1" />
                      Export PDF
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
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-green-100 text-green-700"
                  >
                    12 Products Analyzed
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 overflow-y-auto space-y-4 pr-2">
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
                </div>
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
                <div className="space-y-4 h-80 overflow-y-auto mb-4">
                  {chatMessages.map((chat, index) => (
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

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500 ml-2">
                            AI is thinking...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Ask about specifications or recommendations..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    size="sm"
                    className="px-3"
                    onClick={sendMessage}
                    disabled={isTyping || !chatMessage.trim()}
                  >
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
                      EPDM Membrane System
                    </span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">Complete</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Roof Insulation
                    </span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">Complete</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Flashing & Sheet Metal
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
                      Roof Specialties
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
