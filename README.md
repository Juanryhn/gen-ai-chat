# ChatGPT-like AI Chat App

A conversational AI web application built with **Next.js** and **TypeScript**, integrating a large language model API with a modern React-based frontend.

## 🔧 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **React Context API** – global chat state
- **Gemini API** – language model integration
- **Tailwind CSS** – utility-first UI styling

## 📁 Project Structure

\`\`\`
src/
├── app/                  # App Router entry points
├── components/           # UI components
├── contexts/
│   └── ChatContext.tsx   # Message and AI state
├── lib/                  # API client utilities
├── types/                # Shared type definitions
└── styles/               # Global CSS (Tailwind)
\`\`\`

## 📌 Message Type (Centralized)

Defined in \`src/types/index.ts\`:

\`\`\`ts
export type Message = {
  id: string
  role: 'user' | 'ai'
  content: string
}
\`\`\`

Import wherever needed:

\`\`\`ts
import type { Message } from '@/types'
\`\`\`

Avoid redeclaration to maintain type integrity across modules.

## ✨ Features

- Chat interface with multi-turn conversation
- Role-tagged messages (\`user\` / \`ai\`)
- Centralized state via React Context
- Modular, type-safe architecture
- Fast, responsive UI with Tailwind

## 🚀 Getting Started

\`\`\`bash
# Install dependencies
npm install

# Run dev server
npm run dev
\`\`\`

## 🌐 Environment Variables

Create \`.env.local\`:

\`\`\`env
OPENAI_API_KEY=your_openai_api_key_here
\`\`\`

## 🧪 Development Notes

- All components follow single-file principle
- State updates use functional patterns to avoid race conditions
- Ensure \`Message\` type is imported, not redefined

## 📦 Build & Deploy

\`\`\`bash
npm run build
npm start
\`\`\`

Optimized for deployment on Vercel or similar Next.js-compatible platforms.

## 🛠️ TODO

- [ ] Add markdown rendering to AI output
- [ ] Integrate message streaming
- [ ] Improve mobile responsiveness
- [ ] Add persistent chat history

## 📄 License

MIT