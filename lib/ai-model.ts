import { createDeepInfra } from "@ai-sdk/deepinfra";
import { createOpenAI } from "@ai-sdk/openai";

export const openai = createOpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai2 = createOpenAI({
  baseURL: "https://models.github.ai/inference",
  apiKey: process.env.OPENAI_API_KEY_2,
});

export const llama = createDeepInfra({
  baseURL: "https://models.github.ai/inference",
  apiKey: process.env.LLAMA_API_KEY,
});

export const openAIModel = openai("text-embedding-3-large");
export const openAIModel2 = openai2("openai/gpt-4.1-nano");
export const llamaModel = llama("meta/Llama-4-Scout-17B-16E-Instruct");
