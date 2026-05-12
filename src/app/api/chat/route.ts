import { NextResponse } from 'next/server';
import { ARVEXA_KNOWLEDGE } from '@/lib/ai-knowledge';

export async function POST(req: Request) {
  try {
    const { messages, locale } = await req.json();

    const knowledge = locale === 'tr' ? ARVEXA_KNOWLEDGE.tr : ARVEXA_KNOWLEDGE.en;

    const systemPrompt = locale === 'tr' 
      ? `Sen ArvexaLabs'ın yapay zeka asistanısın. ArvexaLabs hakkında şu bilgilere sahipsin:
         ${knowledge}
         
         Görevin kullanıcılara bu bilgiler ışığında yardımcı olmak, onları projeye başlamaya teşvik etmek ve profesyonel, yardımsever bir ton kullanmaktır.
         Eğer kullanıcı projeye başlamak isterse, onları iletişim formuna yönlendir.`
      : `You are the AI assistant of ArvexaLabs. You have the following information about ArvexaLabs:
         ${knowledge}
         
         Your task is to help users in light of this information, encourage them to start a project, and use a professional, helpful tone.
         If the user wants to start a project, guide them to the contact form.`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "nvidia/nemotron-3-super-120b-a12b:free",
        "messages": [
          { "role": "system", "content": systemPrompt },
          ...messages
        ],
        "stream": true
      })
    });

    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error("OpenRouter Error:", error);
    return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
  }
}
