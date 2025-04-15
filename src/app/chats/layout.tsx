import ChatForm from '@src/components/shared/ChatForm'
import Header from '@src/components/shared/Header'
import Sidebar from '@src/components/shared/Sidebar'
import { ChatProvider } from '@src/contexts/ChatContext'
import React, { ReactNode } from 'react'


const MainLayout = ({ children }: { children: ReactNode }) => (
  <ChatProvider>
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex flex-col flex-1 mb-4">
      <Header />
      <main className="flex-1 overflow-y-auto p-6 space-y-4">{children}</main>
      <ChatForm />
    </div>
  </div>
  </ChatProvider>
)

export default MainLayout
