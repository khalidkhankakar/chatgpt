import { createOpenAI } from "@ai-sdk/openai";

export const openai = createOpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  // eslint-disable-next-line node/no-process-env
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai2 = createOpenAI({
  baseURL: "https://models.github.ai/inference",
  // eslint-disable-next-line node/no-process-env
  apiKey: process.env.OPENAI_API_KEY_2,
});

export const openAIModel = openai("text-embedding-3-large");
export const openAIModel2 = openai2("openai/gpt-4.1-nano");
