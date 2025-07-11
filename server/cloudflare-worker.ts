import { DemoResponse } from "@shared/api";

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url);

    // Handle API routes
    if (url.pathname.startsWith("/api/")) {
      return handleApiRoute(request, url);
    }

    // For all other routes, return null to let Cloudflare Pages serve static assets
    // This allows the React SPA routing to work properly
    return null;
  },
};

async function handleApiRoute(request: Request, url: URL): Promise<Response> {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  try {
    switch (url.pathname) {
      case "/api/ping":
        return new Response(
          JSON.stringify({ message: "Hello from Cloudflare Worker!" }),
          { status: 200, headers },
        );

      case "/api/demo":
        const response: DemoResponse = {
          message: "Hello from Cloudflare Worker",
        };
        return new Response(JSON.stringify(response), { status: 200, headers });

      default:
        return new Response(
          JSON.stringify({ error: "API endpoint not found" }),
          { status: 404, headers },
        );
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
}

// Type definitions for Cloudflare Worker environment
interface Env {
  // Add any environment variables or bindings here
}
