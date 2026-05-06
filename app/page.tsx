import ChatWindow from '../components/ChatWindow';

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">AI Chat Mock</p>
          <h1>Talk to a mock AI assistant</h1>
          <p className="hero-copy">
            This demo shows how frontend and backend communicate in a chat app using Next.js.
            Your messages go to a local API route and a mock assistant response is returned.
          </p>
        </div>
      </section>
      <section className="chat-panel">
        <ChatWindow />
      </section>
    </main>
  );
}
