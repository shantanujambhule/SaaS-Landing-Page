'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Accordion({ q, a }: { q: string, a: string }){
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b text-black/70 border-white/6 py-3">
      <button onClick={()=>setOpen(s=>!s)} className="w-full flex justify-between items-center">
        <span className="text-lg font-medium">{q}</span>
        <span className="">{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-3 text-black/60">
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
