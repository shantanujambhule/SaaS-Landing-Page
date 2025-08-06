'use client'
import React from 'react'

export default function Card({ children, className = '' }: React.PropsWithChildren<{ className?: string }>){
  return (
    <div className={`text-black/70 rounded-2xl p-6 bg-white/6 backdrop-blur-xs border border-white/6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
