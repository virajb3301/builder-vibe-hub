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
  ];

  const chatHistory = [
    {
      type: "ai",
      message:
        "I've analyzed the 50-page roofing specification document. Found 47 key requirements across membrane systems, insulation, and flashing. The project requires EPDM membrane with R-25 insulation and Class A fire rating. Would you like me to start generating recommendations?",
      time: "2:34 PM",
    },
    {
      type: "user",
      message:
        "Yes, please focus on the EPDM membrane requirements and compatible insulation systems.",
      time: "2:35 PM",
    },
    {
      type: "ai",
      message:
        "Based on the membrane specifications, I've identified Carlisle Sure-Weld 0.060\" EPDM as the optimal choice. It exceeds ASTM D 4637 requirements and comes with a 20-year warranty. The GAF EnergyGuard Polyiso provides the required R-25 value with perfect compatibility.",
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
                                    <li>
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
                                    <li>
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
                                    <li>
                                      2. Minimum uplift rating: 165 lbf/sq ft
                                      (7.9 kN/sq m)
                                    </li>
                                    <li>
                                      3. Factory Mutual approved systems where
                                      indicated
                                    </li>
                                    <li>
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
                                    <li>
                                      1. Minimum R-value: R-25 (RSI-4.4) for
                                      climate zone 4
                                    </li>
                                    <li>
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
                                    <li>
                                      1. Manufacturer: Carlisle, Firestone, or
                                      GAF as basis of design
                                    </li>
                                    <li>
                                      2. Type: Ethylene propylene diene
                                      terpolymer (EPDM)
                                    </li>
                                    <li>
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
                                    <li>
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

                              <div className="space-y-4 mt-6 text-xs text-gray-600">
                                <p className="text-center border-t pt-4">
                                  --- PAGE BREAK ---
                                </p>
                                <p className="text-center">
                                  Continued on next page with Section 2.5 Vapor
                                  Retarders through Section 07 60 00 Flashing
                                  and Sheet Metal...
                                </p>
                                <p className="text-center">
                                  Additional content includes: Fasteners and
                                  Adhesives, Roof Drains, Equipment Supports,
                                  Installation Procedures, Quality Control,
                                  Testing Requirements, Maintenance
                                  Instructions, and detailed specifications for
                                  all roofing components totaling 50
                                  comprehensive pages.
                                </p>
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
