import React from 'react'

const groups = [
  { id: '1', name: 'Trip to NYC', members: 4, balance: 45.50 },
  { id: '2', name: 'Roommates', members: 3, balance: -30.00 },
  { id: '3', name: 'Dinner Club', members: 6, balance: 12.75 },
  { id: '4', name: 'Office Lunch', members: 8, balance: -8.25 },
]

export default function Dashboard() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h2 className="text-lg font-medium text-black mb-8">Your groups</h2>
        
        <div className="space-y-1">
          {groups.map((group) => (
            <div 
              key={group.id}
              className="flex items-center justify-between p-6 hover:bg-gray-50 border-b border-gray-50 last:border-b-0 cursor-pointer transition-colors"
            >
              <div className="flex flex-col">
                <h3 className="text-base font-medium text-black mb-1">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {group.members} members
                </p>
              </div>
              
              <div className="text-right">
                <div className={`text-base font-medium ${
                  group.balance >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {group.balance >= 0 ? '+' : ''}${group.balance.toFixed(2)}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {group.balance >= 0 ? 'you are owed' : 'you owe'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-black">Total balance</h3>
            <p className="text-sm text-gray-500 mt-1">Across all groups</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-medium text-green-600">+$20.00</div>
            <div className="text-sm text-gray-500">you are owed</div>
          </div>
        </div>
      </div>
    </div>
  )
}