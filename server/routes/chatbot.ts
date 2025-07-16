import { RequestHandler } from "express";

interface ChatRequest {
  prompt: string;
}

interface ChatResponse {
  content: string;
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
    const { prompt }: ChatRequest = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Get environment variables
    const accountId = process.env.ACCOUNT_ID;
    const gatewayId = process.env.GATEWAY_ID;
    const openaiApiKey = process.env.OPENAI_API_KEY;

    // Check for required environment variables with detailed debugging
    console.log("Environment variable check:", {
      hasOpenaiApiKey: !!openaiApiKey,
      openaiApiKeyLength: openaiApiKey ? openaiApiKey.length : 0,
      openaiApiKeyStart: openaiApiKey
        ? openaiApiKey.substring(0, 8) + "..."
        : "undefined",
      allEnvKeys: Object.keys(process.env).filter(
        (key) =>
          key.includes("OPENAI") ||
          key.includes("ACCOUNT") ||
          key.includes("GATEWAY"),
      ),
    });

    if (!openaiApiKey) {
      return res.status(500).json({
        error: "OPENAI_API_KEY not configured in environment variables",
        debug: "Check .env file or environment variables",
        openaiKeyExists: !!process.env.OPENAI_API_KEY,
        openaiKeyValue: process.env.OPENAI_API_KEY
          ? `${process.env.OPENAI_API_KEY.substring(0, 8)}...`
          : "undefined",
        availableEnvVars: Object.keys(process.env).filter(
          (key) =>
            key.includes("OPENAI") ||
            key.includes("ACCOUNT") ||
            key.includes("GATEWAY"),
        ),
      });
    }

    if (!accountId || !gatewayId) {
      return res.status(500).json({
        error: "AI Gateway configuration missing",
        debug: "ACCOUNT_ID or GATEWAY_ID not configured",
        availableEnvVars: Object.keys(process.env).filter(
          (key) => key.includes("ACCOUNT") || key.includes("GATEWAY"),
        ),
      });
    }

    // Prepare messages for GPT-4o
    const messages = [
      {
        role: "system" as const,
        content: SYSTEM_PROMPT,
      },
      {
        role: "user" as const,
        content: prompt,
      },
    ];

    // Call OpenAI GPT-4o via Cloudflare AI Gateway
    const gatewayUrl = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/openai/chat/completions`;

    console.log("Calling AI Gateway:", gatewayUrl);

    const response = await fetch(gatewayUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
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
      let errorData;
      const responseText = await response.text();

      try {
        errorData = JSON.parse(responseText);
      } catch (parseError) {
        errorData = {
          rawResponse: responseText,
          parseError: parseError.message,
        };
      }

      console.error("AI Gateway API Error:", {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        responseText,
        parsedError: errorData,
      });

      return res.status(500).json({
        error: "API Server Error Response",
        httpStatus: response.status,
        httpStatusText: response.statusText,
        apiResponse: errorData,
        rawResponse: responseText,
        gatewayUrl,
        debug: `AI Gateway returned ${response.status}: ${response.statusText}`,
      });
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content;

    if (!aiResponse) {
      console.error("No content in AI response:", data);
      return res.status(500).json({
        error: "No response received from AI service",
        debug: "AI response format unexpected",
        receivedData: data,
      });
    }

    const chatResponse: ChatResponse = {
      content: aiResponse,
    };

    res.json(chatResponse);
  } catch (error) {
    console.error("Chatbot API Error:", error);
    res.status(500).json({
      error: "Internal server error",
      debug: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};
