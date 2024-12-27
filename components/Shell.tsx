'use client'
import { X } from 'lucide-react'
import { useState } from 'react'
import Nav from './Nav'
import Side from './Side'

const Shell = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen">
      <aside
        className={`fixed lg:relative ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 w-[200px] min-w-[200px] max-w-[200px] h-full lg:bg-black bg-gray-950  border-r border-default-50 z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-default-50 lg:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="p-2 rounded-md hover:bg-gray-200"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>
        </div>
        <Side />
      </aside>

      <div className="flex-1 w-full lg:w-[calc(100vw-200px)]">
        <Nav toggleSidebar={toggleSidebar} />

        <main className="h-[calc(100vh-65px)] overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export default Shell
