'use client'
import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'

export default function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }){
  return (
    <motion.div whileHover={{ y: -6 }} className="w-full">
      <Card className="h-full  ">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/6">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm mt-1 text-black/60 ">{desc}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
