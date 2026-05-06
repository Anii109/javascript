'use client';

import { useState, useEffect, useRef } from 'react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
};

const initialMessages: Message[] = [
  {
    id: 'welcome',
    role: 'assistant',
    text: 'Welcome to the mock chat! Type a message and hit send to see how frontend and backend communicate.',
  },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSending]);

  async function sendMessage() {
    if (!input.trim()) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: input.trim(),
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: data.reply,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-error-${Date.now()}`,
          role: 'assistant',
          text: 'Sorry, the mock service failed. Check the API route and try again.',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <div className="chat-shell">
      <div className="chat-header">
        <div>
          <p className="chat-title">Mock AI Chat</p>
          <p className="chat-subtitle">A simulated assistant powered by a local Next.js API route.</p>
        </div>
      </div>

      <div className="chat-body">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message-row ${message.role === 'user' ? 'message-user' : 'message-assistant'}`}
          >
            <div className="message-bubble">
              <span>{message.text}</span>
            </div>
          </div>
        ))}
        {isSending && (
          <div className="message-row message-assistant">
            <div className="message-bubble bubble-loading">
              <span>Assistant is typing...</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a question..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          disabled={isSending}
          aria-label="Type your message"
        />
        <button type="submit" disabled={isSending || !input.trim()}>
          {isSending ? 'Sending…' : 'Send'}
        </button>
      </form>
    </div>
  );
}
