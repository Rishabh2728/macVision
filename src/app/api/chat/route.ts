import { NextRequest, NextResponse } from "next/server";
import { getLocalMaviResponse, MAVI_SYSTEM_PROMPT } from "@/lib/maviKnowledge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, message } = body;

    const lastMessage = message || (Array.isArray(messages) && messages.length > 0
      ? messages[messages.length - 1].content || messages[messages.length - 1].text
      : "");

    if (!lastMessage || typeof lastMessage !== "string") {
      return NextResponse.json(
        { error: "Invalid message payload" },
        { status: 400 }
      );
    }

    // Check if an AI provider API key is configured (e.g. GEMINI_API_KEY or OPENAI_API_KEY)
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const openaiApiKey = process.env.OPENAI_API_KEY;

    // Real AI integration path for OpenAI
    if (openaiApiKey) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: MAVI_SYSTEM_PROMPT },
              ...(Array.isArray(messages)
                ? messages.map((m: any) => ({
                    role: m.sender === "mavi" ? "assistant" : "user",
                    content: m.text || m.content,
                  }))
                : [{ role: "user", content: lastMessage }]),
            ],
            temperature: 0.3,
            max_tokens: 300,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const aiText = data.choices?.[0]?.message?.content?.trim();
          if (aiText) {
            // Augment with quick actions based on response topic
            const localFallback = getLocalMaviResponse(lastMessage);
            return NextResponse.json({
              text: aiText,
              quickActions: localFallback.quickActions,
              links: localFallback.links,
              source: "llm-openai",
            });
          }
        }
      } catch (llmError) {
        console.warn("OpenAI API call failed, falling back to local engine:", llmError);
      }
    }

    // Real AI integration path for Google Gemini
    if (geminiApiKey) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: MAVI_SYSTEM_PROMPT }],
            },
            contents: [
              {
                role: "user",
                parts: [{ text: lastMessage }],
              },
            ],
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (aiText) {
            const localFallback = getLocalMaviResponse(lastMessage);
            return NextResponse.json({
              text: aiText,
              quickActions: localFallback.quickActions,
              links: localFallback.links,
              source: "llm-gemini",
            });
          }
        }
      } catch (llmError) {
        console.warn("Gemini API call failed, falling back to local engine:", llmError);
      }
    }

    // Default: High-fidelity local school knowledge engine
    const localResult = getLocalMaviResponse(lastMessage);
    return NextResponse.json({
      text: localResult.text,
      quickActions: localResult.quickActions,
      links: localResult.links,
      showLeadForm: localResult.showLeadForm,
      source: "local-knowledge-engine",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        text: "I apologize, but I am momentarily experiencing technical difficulties. You can contact our admissions desk directly at +91 8683 901 901.",
        quickActions: ["Contact School", "Location"],
        links: [{ label: "Contact Admissions", url: "/contact", isPrimary: true }],
      },
      { status: 500 }
    );
  }
}
