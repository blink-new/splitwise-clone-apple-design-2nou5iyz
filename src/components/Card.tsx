import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl border border-gray-200 shadow-md',
        'transition-shadow hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
