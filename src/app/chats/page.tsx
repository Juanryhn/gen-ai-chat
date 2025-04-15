'use client'

import { useRef } from 'react'
import { useChat } from '@src/contexts/ChatContext'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark'
import type { ComponentProps } from 'react'

const ChatPage = () => {
  const { messages, currentAIMessage } = useChat()
  const containerRef = useRef<HTMLDivElement>(null)

  const CodeBlock: React.FC<
    ComponentProps<'code'> & { inline?: boolean; className?: string }
  > = ({ inline = false, className = '', children, ...props }) => {
    const match = /language-(\w+)/.exec(className)
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-gray-800 text-gray-100 px-1 rounded" {...props}>
        {children}
      </code>
    )
  }

  return (
    <div
      ref={containerRef}
      className="chat-container overflow-y-auto flex-1 p-4"
    >
      {messages.map(({ role, content }, i) => (
        <div
          key={i}
          className={`mb-4 whitespace-pre-wrap text-black`}
        >
          {role === 'user' ? 
          <div className="text-white p-2 rounded-lg bg-gray-600 max-w-[90%] justify-self-end">
            <Markdown components={{ code: CodeBlock }}>{content}</Markdown>
          </div>
          : 
          <Markdown components={{ code: CodeBlock }}>{content}</Markdown>
          }
        </div>
      ))}
      {currentAIMessage && (
        <div className="text-black whitespace-pre-wrap mb-4">
          <Markdown components={{ code: CodeBlock }}>
            {currentAIMessage}
          </Markdown>
          <div className="text-black text-sm mt-2 italic">
            Code is being generated…
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatPage
