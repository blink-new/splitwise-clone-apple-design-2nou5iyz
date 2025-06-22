import React from 'react'
import { Plus } from 'lucide-react'

interface NavbarProps {
  onAddExpense: () => void
}

export default function Navbar({ onAddExpense }: NavbarProps) {
  return (
    <header className="border-b border-gray-100 px-12 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-light tracking-tight text-black">
          Dashboard
        </h1>
        <button
          onClick={onAddExpense}
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-sm font-medium rounded hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add expense
        </button>
      </div>
    </header>
  )
}