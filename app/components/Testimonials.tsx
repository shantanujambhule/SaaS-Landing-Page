'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './ui/Card'
import Image from 'next/image'
import Button from './ui/Button'

const TESTIMONIALS = [
  { id: 1, name: 'Priya N.', title: 'Head of Growth — Lumi', quote: 'ADmyBRAND helped us cut creative testing time by 80% — results scaled fast.', avatar: '/imges/testi-1.jpg' },
  { id: 2, name: 'Arjun K.', title: 'CMO — Vertex', quote: 'From idea to live campaign in one click. ROI improved month-over-month.', avatar: '/imges/testi-2.jpg' },
  { id: 3, name: 'Maya S.', title: 'Marketing Lead — Flux', quote: 'The automated A/B testing found winners we wouldn’t have imagined.', avatar: '/imges/testi-3.jpg' },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length)

  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">What our customers say</h2>
          <p className="text-sm text-slate/700 font-extrabold">Real teams, real ROI.</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={TESTIMONIALS[idx].id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
            >
              <Card className="p-6 flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white/6 border border-white/6">
                    <Image src={TESTIMONIALS[idx].avatar} alt={TESTIMONIALS[idx].name} width={64} height={64} />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-md md:text-lg italic">“{TESTIMONIALS[idx].quote}”</p>
                  <div className="mt-3 text-sm text-black/70">
                    <strong>{TESTIMONIALS[idx].name}</strong> — {TESTIMONIALS[idx].title}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="ghost" onClick={prev} aria-label="Previous testimonial">‹</Button>
              <Button variant="ghost" onClick={next} aria-label="Next testimonial">›</Button>
            </div>
            <div className="text-sm text-black/70">{idx + 1} / {TESTIMONIALS.length}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
