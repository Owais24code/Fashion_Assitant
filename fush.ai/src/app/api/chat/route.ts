import { OpenAI } from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemMessage = {
    role: "system",
    content: `You are a knowledgeable fashion advisor. Your expertise includes:
    - Current fashion trends
    - Brand recommendations
    - Style matching
    - Outfit coordination
    - Price ranges and budgeting
    
    When making recommendations:
    1. Always suggest specific brands and products
    2. Include price ranges
    3. Consider the user's style preferences
    4. Provide practical styling tips
    5. Focus on currently available items
    
    Keep responses concise but informative. Format prices in USD.`,
  };

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [systemMessage, ...messages],
    temperature: 0.7,
    max_tokens: 500,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
