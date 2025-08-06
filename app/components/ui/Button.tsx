'use client'
import React from 'react'
import { motion } from 'framer-motion'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline'
}

export default function Button({ variant='primary', children, className = '', ...props }: ButtonProps){
  const base = 'inline-flex  items-center justify-center rounded-2xl px-5 py-2 font-medium focus:outline-none focus-visible:ring-2'
  const styles = {
    primary: 'bg-brand-500 text-black/70 shadow hover:scale-[1.02] active:scale-[0.99]',
    ghost: 'bg-white/60 border border-black/60 text-black/70',
    outline: 'bg-transparent border border-white/20 text-white'
  }
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles[variant]} ${className} `}
      {...props}
    >
      {children}
    </motion.button>
  )
}
