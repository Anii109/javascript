import { NextRequest, NextResponse } from 'next/server';

function createMockAssistantReply(userMessage: string) {
  const normalized = userMessage.trim().toLowerCase();

  if (normalized.includes('hello') || normalized.includes('hi')) {
    return 'Hi there! I am your mock AI assistant. Ask me anything about this chat demo.';
  }

  if (normalized.includes('how') && normalized.includes('work')) {
    return 'This chat UI sends your message to an API route and receives a simulated assistant response. It shows how frontend/backend communication works.';
  }

  if (normalized.includes('mock') || normalized.includes('backend')) {
    return 'The backend here is a simple mock route in Next.js. Later you can replace it with a real AI service or RAG pipeline.';
  }

  return 'I received your message and I am ready to help. This is a mock response, so no real AI is involved yet.';
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const userMessage = typeof body.message === 'string' ? body.message : '';

  const assistantMessage = createMockAssistantReply(userMessage);

  await new Promise((resolve) => setTimeout(resolve, 700));

  return NextResponse.json({ reply: assistantMessage });
}
