'use client'
import React from 'react'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>){
  return (
    <input
      {...props}
      className="w-full rounded-xl px-4 py-3 bg-transparent border border-white/8 focus:ring-2 focus:ring-brand-300 placeholder:text-white/60"
    />
  )
}
