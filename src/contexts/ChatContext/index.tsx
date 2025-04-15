'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Message = { id: string; role: 'user' | 'ai'; content: string }

interface ChatContextType {
  messages: Message[]
  currentAIMessage: string
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  setCurrentAIMessage: React.Dispatch<React.SetStateAction<string>>
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentAIMessage, setCurrentAIMessage] = useState('')

  return (
    <ChatContext.Provider value={{ messages, setMessages, currentAIMessage, setCurrentAIMessage }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = (): ChatContextType => {
  const ctx = useContext(ChatContext)
  console.log('context', ctx)
  if (!ctx) throw new Error('useChat must be used within ChatProvider')
  return ctx
}
