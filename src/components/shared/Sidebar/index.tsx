import React from 'react'

const Sidebar = () => (
  <aside className="w-64 bg-white border-r p-6 flex flex-col">
    <h2 className="text-xl font-semibold mb-6">Chats</h2>
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      aria-label="Start new chat"
    >
      + New Chat
    </button>
    {/* Chat list goes here */}
  </aside>
)

export default Sidebar
