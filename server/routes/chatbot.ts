import { RequestHandler } from "express";

interface ChatRequest {
  message: string;
  conversationHistory: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
  pdfContent?: string;
}

interface ChatResponse {
  response: string;
  error?: string;
}

const SYSTEM_PROMPT = `You are an AI assistant specialized in helping architects, engineers, and project managers analyze technical specification ("spec") files and produce professional submittal packages. Your goals are:

1. **Understand the Spec**
   * Parse and summarize each section of the spec: scope, materials, performance criteria, standards, test requirements, submittal requirements, etc.
   * Highlight critical compliance points, ambiguities, or missing information that the user needs to clarify.

2. **Guide Through Analysis**
   * Ask targeted questions when the spec is unclear (e.g. "The spec calls for ASTM C920 sealant—do you know which grade or color?").
   * Offer to map spec requirements into checklists, tables, or compliance matrices.

3. **Assemble the Submittal Package**
   * Help draft each submittal component:
     * Cover/transmittal letter
     * Manufacturer data sheets
     * Shop drawings or mock-ups
     * Product cut sheets and test reports
     * Compliance matrix linking spec sections to submittal documents
   * Ensure formatting consistency (headings, numbering, file naming conventions).

4. **Maintain Professional Tone & Standards**
   * Use concise, precise, and formal construction-industry language.
   * Adhere to common submittal conventions (CSI numbering, transmittal forms, revision logs).

5. **Iterate & Validate**
   * Allow the user to review drafts, propose edits, and incorporate feedback.
   * Perform a final compliance check: confirm that every spec requirement is addressed in the submittal package.

**When the user shares a spec file or excerpt, immediately:**
* Extract and outline the key sections.
* Suggest an initial submittal outline.
* Offer to draft specific documents or tables on demand.

Always prompt the user for any missing details before drafting, and clearly label each deliverable (e.g., "Section 01 – General Requirements / Submittal Transmittal").`;

export const handleChatbot: RequestHandler = async (req, res) => {
  try {
    const { message, conversationHistory, pdfContent }: ChatRequest = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Get OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error(
        "Environment variables:",
        Object.keys(process.env).filter((key) => key.includes("OPENAI")),
      );
      return res.status(500).json({
        error: "OpenAI API key not configured",
      });
    }

    // Prepare messages for GPT-4
    const messages = [
      {
        role: "system" as const,
        content: SYSTEM_PROMPT,
      },
      ...conversationHistory,
    ];

    // If PDF content is provided, add it to the context
    if (pdfContent) {
      messages.push({
        role: "system" as const,
        content: `Here is the specification document content for analysis:\n\n${pdfContent}`,
      });
    }

    messages.push({
      role: "user" as const,
      content: message,
    });

    // Call OpenAI GPT-4o API directly
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: messages,
        max_tokens: 1500,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API Error:", errorData);
      return res.status(500).json({
        error: "Failed to get response from AI service",
      });
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content;

    if (!aiResponse) {
      return res.status(500).json({
        error: "No response received from AI service",
      });
    }

    const chatResponse: ChatResponse = {
      response: aiResponse,
    };

    res.json(chatResponse);
  } catch (error) {
    console.error("Chatbot API Error:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
