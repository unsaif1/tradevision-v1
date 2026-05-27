// Generated — augments the CloudflareEnv interface provided by @opennextjs/cloudflare
declare global {
  interface CloudflareEnv {
    DB: D1Database;
    // AI provider selection — auto-detected from whichever key is present
    // Set AI_PROVIDER to: "anthropic" | "openai" | "openrouter" | "google" | "ollama"
    AI_PROVIDER?: string;
    // Optional model override — each provider has a sensible default
    AI_MODEL?: string;
    ANTHROPIC_API_KEY?: string;
    OPENAI_API_KEY?: string;
    OPENROUTER_API_KEY?: string;
    GOOGLE_AI_API_KEY?: string;
    OLLAMA_BASE_URL?: string;
  }
}
export {};
