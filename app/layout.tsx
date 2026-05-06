import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mock AI Chat',
  description: 'A Next.js chat interface backed by a mock API endpoint',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
