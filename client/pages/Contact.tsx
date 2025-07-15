import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const mailtoLink = `mailto:andre@hafestus.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `From: ${formData.email}\n\n${formData.message}`,
    )}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Show success message
    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-brand-gray-50 py-12 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 rounded-2xl p-4">
              <Mail className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-brand-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-brand-gray-600">
            Get in touch with our team. We'd love to hear from you.
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-brand-gray-600">
                  Your email client should have opened. If not, please contact
                  us directly at andre@hafestus.com
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-brand-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Tell us more about your project or question..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg py-4"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-brand-gray-600">
            You can also reach us directly at{" "}
            <a
              href="mailto:andre@hafestus.com"
              className="text-primary hover:underline font-medium"
            >
              andre@hafestus.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
