import React from 'react'

const Sidebar = () => (
  <aside className="w-64 bg-[#232946] border-r p-6 flex flex-col">
    <h2 className="text-white text-xl font-semibold mb-6">Chats</h2>
    <button
      className="bg-[#eebbc3] text-black py-2 px-4 rounded hover:bg-[#e89ca5] transition"
      aria-label="Start new chat"
    >
      + New Chat
    </button>
    {/* Chat list goes here */}
  </aside>
)

export default Sidebar
