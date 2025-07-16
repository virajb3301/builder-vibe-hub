import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleDemo } from "./routes/demo";
import { handleChatbot } from "./routes/chatbot";

// Load environment variables
dotenv.config();

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Temporary route - chatbot functionality moved to Cloudflare Functions
  app.post("/api/chatbot", (req, res) => {
    res.status(503).json({
      error:
        "Chatbot functionality has been moved to Cloudflare Pages Functions",
      message:
        "Please ensure OPENAI_API_KEY is set in Cloudflare Pages environment variables",
      debug: "This endpoint is no longer served by Express in development",
    });
  });

  return app;
}
