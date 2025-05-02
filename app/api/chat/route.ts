import { generateText, streamText } from "ai";

import { openAIModel2 } from "@/lib/ai-model";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openAIModel2,
    messages,
  });

  console.log(result.text);

  return result.toDataStreamResponse();
}
