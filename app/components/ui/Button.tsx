'use client'

import React from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'ghost' | 'neutral'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children?: React.ReactNode
  className?: string
}

/**
 * Plain, strongly-typed Button component using CSS transitions instead of framer-motion.
 * This avoids TypeScript/Framer Motion prop conflicts and ESLint `no-explicit-any` warnings.
 */
export default function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 active:scale-[0.985]'

  const variants: Record<Variant, string> = {
    primary: 'bg-white text-black shadow hover:shadow-lg',
    ghost: 'bg-transparent border border-white/10 text-white hover:bg-white/6',
    neutral: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  }

  return (
    <button
      {...rest}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </button>
  )
}
