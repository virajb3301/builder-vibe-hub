import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Paperclip,
  FileText,
  Upload,
} from "lucide-react";
import { extractTextFromPDF, isValidPDF } from "../utils/pdfUtils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your AI assistant for Hafestus. I can help you with construction management questions, specification analysis, and our platform features. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI thinking
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000),
    );

    const message = userMessage.toLowerCase();

    // Construction/Hafestus specific responses
    if (message.includes("hafestus") || message.includes("platform")) {
      return "Hafestus is an AI-powered construction management platform that streamlines specification analysis and submittal generation. We help contractors reduce submittal creation time from days to minutes using advanced machine learning.";
    }

    if (message.includes("submittal") || message.includes("specification")) {
      return "Our AI analyzes construction specifications and automatically generates compliant submittal packages. The system can process up to 1,000-page spec files and cross-reference manufacturer data to identify optimal matches, ensuring 100% compliance.";
    }

    if (message.includes("demo") || message.includes("try")) {
      return "You can try our demo right here on this page! The demo shows how our AI processes specifications and generates submittals. You can also contact us to schedule a personalized demonstration of the full platform.";
    }

    if (message.includes("pricing") || message.includes("cost")) {
      return "We offer flexible pricing based on your project volume and needs. Our platform typically pays for itself by reducing the 40+ hours typically spent on submittal creation per project. Contact us to discuss pricing that works for your business.";
    }

    if (message.includes("contact") || message.includes("support")) {
      return "You can reach our team at andre@hafestus.com or use the Contact Us form on our website. We're here to help with any questions about our platform or implementation.";
    }

    if (message.includes("ai") || message.includes("machine learning")) {
      return "Our AI uses advanced machine learning models trained specifically on construction documents and industry standards. We employ human-in-the-loop validation to ensure accuracy and continuously improve our models with real project data.";
    }

    // General helpful responses
    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! I'm here to help you learn about Hafestus and how our AI can streamline your construction management workflow. What would you like to know?";
    }

    if (message.includes("help")) {
      return "I can help you with information about:\n• Hafestus platform features\n• AI-powered specification analysis\n• Submittal generation process\n• Pricing and implementation\n• Technical questions\n\nWhat interests you most?";
    }

    // Default response
    return "That's a great question! While I can provide information about Hafestus and our AI-powered construction management platform, for specific technical details I'd recommend contacting our team at andre@hafestus.com. Is there anything else about our platform I can help explain?";
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(currentMessage);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble responding right now. Please try again or contact our team directly at andre@hafestus.com.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card
      className={`fixed bottom-6 right-6 shadow-2xl border-0 z-50 transition-all duration-300 ${
        isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between py-3 px-4 bg-primary text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <h3 className="font-semibold">Hafestus AI Assistant</h3>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
          >
            {isMinimized ? (
              <Maximize2 className="h-4 w-4" />
            ) : (
              <Minimize2 className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-full p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.isUser ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div
                    className={`p-2 rounded-full ${
                      message.isUser
                        ? "bg-primary text-white"
                        : "bg-brand-gray-100 text-brand-gray-600"
                    }`}
                  >
                    {message.isUser ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.isUser
                        ? "bg-primary text-white"
                        : "bg-brand-gray-100 text-brand-gray-900"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-brand-gray-100 text-brand-gray-600">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-lg bg-brand-gray-100 text-brand-gray-900">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-brand-gray-400 rounded-full animate-bounce delay-75" />
                      <div className="w-2 h-2 bg-brand-gray-400 rounded-full animate-bounce delay-150" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <textarea
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Hafestus..."
                className="flex-1 resize-none border border-brand-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={1}
                style={{ minHeight: "40px", maxHeight: "80px" }}
              />
              <Button
                onClick={sendMessage}
                disabled={!currentMessage.trim() || isTyping}
                size="sm"
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
