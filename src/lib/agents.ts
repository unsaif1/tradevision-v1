import { getCloudflareContext } from '@opennextjs/cloudflare';
import type { Claim } from './db';

export type AgentType =
  | 'intake'
  | 'coverage'
  | 'estimate'
  | 'document'
  | 'settlement'
  | 'adjuster'
  | 'storm'
  | 'status';

export interface AgentResult {
  summary: string;
  fields?: Record<string, string | number | boolean | null>;
  flags?: string[];
  recommendation?: string;
}

const AGENT_PROMPTS: Record<AgentType, (claim: Claim) => string> = {
  intake: (c) => `You are an insurance claims intake agent.
Analyze this claim and extract/validate key information.
Return JSON with: { summary, fields: { loss_type, severity, estimated_damage_range }, flags: [], recommendation }

Claim:
- Claimant: ${c.claimant_name}
- Loss Date: ${c.loss_date ?? 'unknown'}
- Loss Type: ${c.loss_type ?? 'unknown'}
- Description: ${c.loss_description ?? 'none provided'}
- Property: ${c.property_address ?? 'unknown'}`,

  coverage: (c) => `You are an insurance coverage analysis agent.
Review the claim details and assess potential coverage concerns.
Return JSON with: { summary, fields: { likely_covered: true/false, coverage_type }, flags: [], recommendation }

Claim:
- Loss Type: ${c.loss_type ?? 'unknown'}
- Description: ${c.loss_description ?? 'none'}
- Policy Number: ${c.policy_number ?? 'unknown'}
- Loss Date: ${c.loss_date ?? 'unknown'}`,

  estimate: (c) => `You are a property damage estimate review agent.
Based on the loss description, estimate a reasonable repair range.
Return JSON with: { summary, fields: { low_estimate, high_estimate, unit: "USD" }, flags: [], recommendation }

Claim:
- Loss Type: ${c.loss_type ?? 'unknown'}
- Description: ${c.loss_description ?? 'none'}
- Property: ${c.property_address ?? 'unknown'}`,

  document: (c) => `You are a claims document analysis agent.
List the documents typically required for this type of claim and flag any that are likely missing.
Return JSON with: { summary, fields: { required_docs_count }, flags: ["<doc name>: missing"], recommendation }

Claim:
- Loss Type: ${c.loss_type ?? 'unknown'}
- Status: ${c.status}`,

  settlement: (c) => `You are a claims settlement recommendation agent.
Based on the claim details, recommend a fair settlement range and strategy.
Return JSON with: { summary, fields: { recommended_low, recommended_high, unit: "USD" }, flags: [], recommendation }

Claim:
- Loss Type: ${c.loss_type ?? 'unknown'}
- Description: ${c.loss_description ?? 'none'}
- Policy: ${c.policy_number ?? 'unknown'}
- Status: ${c.status}`,

  adjuster: (c) => `You are an adjuster assignment agent.
Based on the claim type and complexity, recommend what type of adjuster should handle this claim.
Return JSON with: { summary, fields: { adjuster_type, priority_level }, flags: [], recommendation }

Claim:
- Loss Type: ${c.loss_type ?? 'unknown'}
- Loss Description: ${c.loss_description ?? 'none'}
- Current Adjuster: ${c.adjuster_name ?? 'unassigned'}`,

  storm: (c) => `You are a storm correlation agent.
Based on the loss date and property address, assess whether this claim could be storm-related.
Return JSON with: { summary, fields: { storm_likely: true/false, storm_type }, flags: [], recommendation }

Claim:
- Loss Date: ${c.loss_date ?? 'unknown'}
- Loss Type: ${c.loss_type ?? 'unknown'}
- Property: ${c.property_address ?? 'unknown'}
- Description: ${c.loss_description ?? 'none'}`,

  status: (c) => `You are a claims status tracking agent.
Review the current claim state and recommend the next action to move it forward.
Return JSON with: { summary, fields: { days_open, next_action }, flags: [], recommendation }

Claim:
- Status: ${c.status}
- Created: ${c.created_at}
- Loss Type: ${c.loss_type ?? 'unknown'}
- Adjuster: ${c.adjuster_name ?? 'unassigned'}
- Policy: ${c.policy_number ?? 'unknown'}`,
};

// ── Provider env ──────────────────────────────────────────────────────────────

interface ProviderEnv {
  AI_PROVIDER?: string;
  AI_MODEL?: string;
  ANTHROPIC_API_KEY?: string;
  OPENAI_API_KEY?: string;
  OPENROUTER_API_KEY?: string;
  GOOGLE_AI_API_KEY?: string;
  OLLAMA_BASE_URL?: string;
}

async function getEnv(): Promise<ProviderEnv> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    return env as unknown as ProviderEnv;
  } catch {
    return process.env as ProviderEnv;
  }
}

// Strip markdown code fences that some models wrap JSON in
function extractJSON(text: string): string {
  const match = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  return match ? match[1].trim() : text.trim();
}

// ── Per-provider call functions ───────────────────────────────────────────────

async function callAnthropic(prompt: string, apiKey: string, model: string): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`Anthropic ${res.status}: ${await res.text()}`);
  const data = await res.json() as { content: Array<{ text: string }> };
  return data.content[0].text;
}

async function callOpenAICompat(
  prompt: string,
  apiKey: string,
  model: string,
  baseUrl: string
): Promise<string> {
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`${baseUrl} ${res.status}: ${await res.text()}`);
  const data = await res.json() as { choices: Array<{ message: { content: string } }> };
  return data.choices[0].message.content;
}

async function callGoogle(prompt: string, apiKey: string, model: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'application/json' },
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`Google AI ${res.status}: ${await res.text()}`);
  const data = await res.json() as {
    candidates: Array<{ content: { parts: Array<{ text: string }> } }>;
  };
  return data.candidates[0].content.parts[0].text;
}

async function callOllama(prompt: string, baseUrl: string, model: string): Promise<string> {
  const res = await fetch(`${baseUrl}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      prompt,
      stream: false,
      format: 'json',
      options: { temperature: 0.2 },
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`Ollama ${res.status}`);
  const data = await res.json() as { response: string };
  return data.response;
}

// ── Main entry point ──────────────────────────────────────────────────────────

export async function runAgent(type: AgentType, claim: Claim): Promise<AgentResult> {
  const prompt = AGENT_PROMPTS[type](claim);
  const env = await getEnv();

  const provider = env.AI_PROVIDER ?? (
    env.ANTHROPIC_API_KEY   ? 'anthropic'   :
    env.OPENAI_API_KEY      ? 'openai'      :
    env.OPENROUTER_API_KEY  ? 'openrouter'  :
    env.GOOGLE_AI_API_KEY   ? 'google'      :
                              'ollama'
  );

  let raw: string;
  switch (provider) {
    case 'anthropic':
      raw = await callAnthropic(prompt, env.ANTHROPIC_API_KEY!, env.AI_MODEL ?? 'claude-haiku-4-5-20251001');
      break;
    case 'openai':
      raw = await callOpenAICompat(prompt, env.OPENAI_API_KEY!, env.AI_MODEL ?? 'gpt-4o-mini', 'https://api.openai.com/v1');
      break;
    case 'openrouter':
      raw = await callOpenAICompat(prompt, env.OPENROUTER_API_KEY!, env.AI_MODEL ?? 'openai/gpt-4o-mini', 'https://openrouter.ai/api/v1');
      break;
    case 'google':
      raw = await callGoogle(prompt, env.GOOGLE_AI_API_KEY!, env.AI_MODEL ?? 'gemini-2.0-flash');
      break;
    default:
      raw = await callOllama(prompt, env.OLLAMA_BASE_URL ?? 'http://localhost:11434', env.AI_MODEL ?? 'llama3.2');
  }

  return JSON.parse(extractJSON(raw)) as AgentResult;
}
