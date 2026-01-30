import { NextResponse } from "next/server";
import { buildAIPrompt } from "@/utils/aiPrompt";

export async function POST(req) {
  try {
    const { client, mealPlan } = await req.json();

    console.log("=== AI INSIGHT REQUEST ===");
    console.log("Client:", JSON.stringify(client, null, 2));
    console.log("MealPlan:", JSON.stringify(mealPlan, null, 2));

    const prompt = buildAIPrompt(client, mealPlan);
    console.log("Generated Prompt:", prompt);

    // Check if API key exists
    if (!process.env.GROQ_API_KEY) {
      console.error("❌ GROQ_API_KEY is not set in environment variables");
      return NextResponse.json(
        { insight: "API key not configured. Please set GROQ_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    console.log("Making request to Groq API...");
    
    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: "You are an internal nutrition plan reviewer." },
            { role: "user", content: prompt }
          ],
          temperature: 0.3
        })
      }
    );

    console.log("Groq Response Status:", groqRes.status);

    if (!groqRes.ok) {
      const errorText = await groqRes.text();
      console.error("❌ GROQ API ERROR:", errorText);
      return NextResponse.json(
        { insight: `API Error: ${groqRes.status} - ${errorText.substring(0, 100)}` },
        { status: 500 }
      );
    }

    const groqData = await groqRes.json();
    console.log("✅ RAW GROQ RESPONSE:", JSON.stringify(groqData, null, 2));

    const text = groqData?.choices?.[0]?.message?.content;

    if (!text || text.trim().length === 0) {
      console.warn("⚠️ Empty response from Groq API");
      return NextResponse.json({
        insight: "Plan appears acceptable. Manual review advised."
      });
    }

    console.log("✅ Generated Insight:", text);

    return NextResponse.json({
      insight: text.trim()
    });

  } catch (error) {
    console.error("❌ GROQ ERROR:", error);
    console.error("Error details:", error.message);
    console.error("Stack:", error.stack);
    
    return NextResponse.json(
      { insight: `AI analysis failed: ${error.message}` },
      { status: 500 }
    );
  }
}