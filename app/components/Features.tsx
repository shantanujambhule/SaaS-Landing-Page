'use client'
import React from 'react'
import { motion } from 'framer-motion'
import FeatureCard from './ui/FeaturedCard'
import { SparklesIcon, ChartBarIcon, BoltIcon, CubeIcon, UsersIcon } from '@heroicons/react/24/outline' // optional local icon exports

const features = [
  {
    id: 'ai-creative',
    title: 'AI Creative Studio',
    desc: 'Generate headlines, ad copy and A/B-ready creatives from a single prompt — in seconds.',
    icon: <SparklesIcon />
  },
  {
    id: 'audience',
    title: 'Audience Insights',
    desc: 'Auto-segment audiences with performance signals and predicted conversions.',
    icon: <ChartBarIcon />
  },
  {
    id: 'autotest',
    title: 'Auto A/B Testing',
    desc: 'Automatic experiment generation and winner promotion based on real performance.',
    icon: <BoltIcon />
  },
  {
    id: 'deploy',
    title: '1-Click Deploy',
    desc: 'Push ad sets and landing pages directly to ad platforms and trackers.',
    icon: <CubeIcon />
  },
  {
    id: 'analytics',
    title: 'Realtime Analytics',
    desc: 'Visualize LTV, CAC and channel mix with instant insights and recommendations.',
    icon: <ChartBarIcon />
  },
  {
    id: 'team',
    title: 'Team Collaboration',
    desc: 'Roles, approvals, and shared templates so your team ships faster and stays aligned.',
    icon: <UsersIcon />
  },
]

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-gradient-to-b from-transparent to-black/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-glow ">Built for growth teams</h2>
          <p className="text-sm md:text-base font-extrabold text-slate-700 mb-8">Everything needed to plan, build, test and scale high-performing campaigns — powered by AI.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.id}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <FeatureCard  icon={f.icon} title={f.title} desc={f.desc} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
