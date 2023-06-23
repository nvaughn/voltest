// register all agent files here
export * from "./customerSupportAgent";

// and register types here
export type Agent = "customerSupport";

// util function for creating trainings with proper typing
import type { CreateChatCompletionRequest } from "openai";
export default function createAgent(
  agent: (context: Record<string, any>) => Partial<CreateChatCompletionRequest>
) {
  return agent;
}
