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

export async function onRequest(context) {
  // Handle CORS preflight
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (context.request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { prompt } = await context.request.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get environment variables - ensure exact variable names match dashboard
    const accountId =
      context.env.ACCOUNT_ID || "e73fa80aecaa37aa1e3fc414e3e7fcbb";
    const gatewayId = context.env.GATEWAY_ID || "hafestusopenaiapi";
    const openaiApiKey = context.env.OPENAI_API_KEY;

    // Check for required environment variables
    if (!openaiApiKey) {
      console.error("Missing environment variables:", {
        hasAccountId: !!accountId,
        hasGatewayId: !!gatewayId,
        hasOpenaiApiKey: !!openaiApiKey,
        availableKeys: Object.keys(context.env),
      });
      return new Response(
        JSON.stringify({
          error: "OPENAI_API_KEY not configured in environment variables",
          debug: "Check Cloudflare Workers dashboard environment variables",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Prepare messages for GPT-4o
    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
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
      const errorData = await response.json();
      console.error("AI Gateway API Error:", errorData);
      return new Response(
        JSON.stringify({
          error: "Failed to get response from AI service",
          details: errorData,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content;

    if (!aiResponse) {
      console.error("No content in AI response:", data);
      return new Response(
        JSON.stringify({ error: "No response received from AI service" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ content: aiResponse }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Chatbot API Error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
