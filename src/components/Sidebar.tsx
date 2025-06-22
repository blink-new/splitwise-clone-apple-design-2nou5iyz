import React from 'react'
import { Home, Users, Settings } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', icon: Home, active: true },
  { name: 'Groups', icon: Users, active: false },
  { name: 'Settings', icon: Settings, active: false },
]

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100">
      <div className="p-8">
        <div className="text-2xl font-semibold tracking-tight text-black">
          Splitwise
        </div>
      </div>
      
      <nav className="px-6">
        {navItems.map(({ name, icon: Icon, active }) => (
          <a
            key={name}
            href="#"
            className={`flex items-center gap-3 px-3 py-3 mb-1 text-sm font-medium rounded transition-colors ${
              active
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-black hover:bg-gray-50'
            }`}
          >
            <Icon className="w-4 h-4" />
            {name}
          </a>
        ))}
      </nav>
    </aside>
  )
}