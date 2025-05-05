import { streamText } from "ai";

import { openAIModel2 } from "@/lib/ai-model";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openAIModel2,
    messages,
  });

  return result.toDataStreamResponse();
}
