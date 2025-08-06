'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
  className?: string
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <motion.button
      {...rest}
      type={rest.type || 'button'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        'px-4 py-2 rounded-lg font-semibold transition-colors',
        className
      )}
    >
      {children}
    </motion.button>
  )
}
