import { generateText } from "ai";
import { google } from "@ai-sdk/google";
// import { PrismaClient } from "@pr
// isma/client";
 
export const dynamic = "force-dynamic";
 
// const prisma = new PrismaClient();
 
export async function POST(req) {
  try {
    const { topic } = await req.json();
console.log("generated content in route:", { topic});
 
 
    // Prompt for all three question types
    const finalPrompt = `
      Generate a detailed and engaging article on "${topic}". The content should be informative, well-structured, and easy to understand. The length should be around 150 words.`;
 
    const result = await generateText({
      model: google("gemini-1.5-flash"),
      prompt: finalPrompt,
    });
 
    console.log("AI Response new:", result.text);
    return new Response(JSON.stringify({
        text: result.text,
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    ));
  } catch (error) {
    console.error("Error generating quiz:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}