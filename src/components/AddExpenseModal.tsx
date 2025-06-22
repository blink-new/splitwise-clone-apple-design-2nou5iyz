import React from 'react'
import Button from './Button'

interface AddExpenseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddExpenseModal({ isOpen, onClose }: AddExpenseModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-xl font-semibold text-primary mb-4">Add Expense</h2>
        {/* Form fields will go here later */}
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  )
}
