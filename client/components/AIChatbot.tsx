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
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const [pdfContent, setPdfContent] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: conversationHistory,
          pdfContent: pdfContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get AI response");
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error calling AI:", error);
      return "I'm experiencing some technical difficulties right now. Please try again in a moment, or contact our team at andre@hafestus.com for immediate assistance with your specification analysis needs.";
    }
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
    const messageToSend = currentMessage;
    setCurrentMessage("");
    setIsTyping(true);

    // Update conversation history
    setConversationHistory((prev) => [
      ...prev,
      { role: "user", content: messageToSend },
    ]);

    try {
      const aiResponse = await generateAIResponse(messageToSend);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

      // Add AI response to conversation history
      setConversationHistory((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isValidPDF(file)) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "Please upload a PDF file. I can analyze PDF specification documents to help you create submittal packages.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    setIsTyping(true);

    try {
      const extractedText = await extractTextFromPDF(file);
      setPdfContent(extractedText);
      setUploadedFileName(file.name);

      const confirmMessage: Message = {
        id: Date.now().toString(),
        text: `📄 PDF uploaded: ${file.name}\n\nI've received your specification document. I can now help you analyze this spec and create a professional submittal package. What specific aspect would you like me to focus on first?\n\n• General specification overview\n• Compliance requirements analysis\n• Submittal document outline\n• Specific section review`,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, confirmMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "I had trouble processing your PDF file. Please try uploading again or describe your specification requirements in text form.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsTyping(false);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
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
          <div>
            <h3 className="font-semibold">Hafestus AI Assistant</h3>
            {uploadedFileName && (
              <p className="text-xs text-blue-100">📄 {uploadedFileName}</p>
            )}
          </div>
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
              <div className="flex-1 relative">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    pdfContent
                      ? "Ask about your specification..."
                      : "Upload a PDF spec or describe your requirements..."
                  }
                  className="w-full resize-none border border-brand-gray-200 rounded-lg px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={1}
                  style={{ minHeight: "40px", maxHeight: "80px" }}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={triggerFileUpload}
                  className="absolute right-1 top-1 h-8 w-8 p-0 text-brand-gray-400 hover:text-primary"
                  title="Upload PDF specification"
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
              </div>
              <Button
                onClick={sendMessage}
                disabled={!currentMessage.trim() || isTyping}
                size="sm"
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </CardContent>
      )}
    </Card>
  );
}
