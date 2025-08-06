'use client'
import React from 'react'
import Accordion from './ui/Accordian'

const FAQs = [
  { q: 'Do you offer a free trial?', a: 'Yes — we offer a 14-day free trial with no credit card required. Cancel anytime.' },
  { q: 'How does the AI generate creatives?', a: 'Our AI uses prompt templates + historical performance signals to produce multi-variant creative sets optimized for ad platforms.' },
  { q: 'Which ad platforms are supported?', a: 'We support Google Ads, Meta Ads, TikTok Ads, and can integrate with custom DSPs via API.' },
  { q: 'Do you offer enterprise SLAs?', a: 'Yes — enterprise plans include dedicated onboarding, support, and integration assistance.' },
  { q: 'Can I export reports?', a: 'Export full reports as CSV or PDF, and schedule recurring exports to your data warehouse.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-gradient-to-t from-transparent text-black/90 to-black/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl text-glow font-semibold">Frequently asked questions</h2>
          <p className="text-sm  text-slate-700/80 font-extrabold mt-2">If you don’t see your question, reach out via the contact form.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {FAQs.map((f, i) => (
            <Accordion key={i} q={f.q} a={f.a} />
          ))}
        </div>
        </div>
      
    </section>
  )
}
