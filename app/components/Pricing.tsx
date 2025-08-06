'use client'

import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Card from './ui/Card'
import Button from './ui/Button'

type Tier = {
  id: string
  name: string
  base: number
  perks: string[]
  popular?: boolean
}

const TIERS: Tier[] = [
  { id: 'starter', name: 'Starter', base: 29, perks: ['AI creatives', '1 workspace', 'Basic analytics'] },
  { id: 'growth', name: 'Growth', base: 99, perks: ['Everything in Starter', 'Audience insights', 'A/B automation'], popular: true },
  { id: 'enterprise', name: 'Enterprise', base: 0, perks: ['Custom SLAs', 'Dedicated success', 'Advanced integrations'] },
]

// simple pricing calc: seat fee + base + ad-fee
function simpleCalc(base: number, seats: number, adSpend: number) {
  const seatFee = seats * 12
  const adFee = Math.round(adSpend * 0.02) // 2% handling/analysis
  return base === 0 ? 'Contact' : `$${base + seatFee + adFee}`
}

export default function Pricing() {
  const [seats, setSeats] = useState(3)
  const [adSpend, setAdSpend] = useState(2000)

  const estimate = useMemo(() => simpleCalc(99, seats, adSpend), [seats, adSpend])

  return (
    <section
      id="pricing"
      className="relative z-30 py-12 md:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 id="pricing-heading" className="text-2xl md:text-3xl text-glow font-semibold">Simple, predictable pricing</h2>
          <p className="text-sm md:text-base font-extrabold text-slate-700/80 mt-2">
            Scale with plans that grow with you. Start free — upgrade when you’re ready.
          </p>
        </div>

        {/* Glass wrapper for the whole pricing area */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-white/8 backdrop-blur-md border border-white/10 shadow-xl p-6 md:p-10">
          {/* Cards grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            {TIERS.map((t) => {
              const cardWrapperClasses =
                'rounded-2xl bg-white/12 backdrop-blur-sm border border-white/8 shadow-md p-6 flex flex-col justify-between min-h-[220px]'

              return (
                <motion.div
                  key={t.id}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className={cardWrapperClasses}
                >
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold">{t.name}</h3>
                        {t.popular ? (
                          <span className="text-xs px-2 py-1 rounded-full bg-white/16 font-medium">Popular</span>
                        ) : null}
                      </div>
                      <div className="text-2xl font-extrabold mt-2">{t.base === 0 ? 'Custom' : `$${t.base}/mo`}</div>
                    </div>

                    <ul className="text-sm space-y-2 mb-6">
                      {t.perks.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-white/80" aria-hidden />
                          <span className="text-slate-700/90">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => (window.location.href = `/signup?plan=${t.id}`)}
                      className="w-full rounded-lg py-2 px-4 bg-white/16 hover:bg-white/22 text-sm font-medium border border-white/10"
                      aria-label={`Select ${t.name} plan`}
                    >
                      {t.base === 0 ? 'Contact Sales' : 'Start Free Trial'}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Interactive calculator - make it glass too */}
          <Card className="p-6 rounded-2xl bg-white/6 backdrop-blur-sm border border-white/8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold">Estimate your monthly cost</h3>
                <p className="text-sm text-slate-700/80">Adjust seats and ad spend to preview a tailored estimate.</p>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-sm block mb-1">Team seats: <span className="font-medium">{seats}</span></label>
                    <input
                      aria-label="Seats"
                      type="range"
                      min={1}
                      max={50}
                      value={seats}
                      onChange={(e) => setSeats(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm block mb-1">Monthly ad spend: <span className="font-medium">${adSpend}</span></label>
                    <input
                      aria-label="Ad spend"
                      type="range"
                      min={0}
                      max={20000}
                      step={100}
                      value={adSpend}
                      onChange={(e) => setAdSpend(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-64 text-slate-800/90">
                <div className="text-sm font-extrabold">Estimated</div>
                <div className="text-3xl font-extrabold mt-1">{estimate}</div>
                <div className="mt-4">
                  <Button className="text-blue-700 font-extrabold" onClick={() => (window.location.href = `/signup?estimate=${encodeURIComponent(String(estimate))}`)}>
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
