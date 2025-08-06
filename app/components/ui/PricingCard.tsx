'use client'
import React from 'react'
import Card from './Card'
import Button from './Button'

export default function PricingCard({ name, price, perks, popular=false, onSelect }: 
  { name: string, price: string, perks: string[], popular?: boolean, onSelect?: ()=>void }){
  return (
    <Card className={`flex flex-col text-black/70 gap-4 ${popular ? 'ring-2 ring-brand-300 scale-[1.02]' : ''}`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="text-sm ">Billed monthly</p>
        </div>
        {popular && <span className="text-sm px-2 py-1 rounded-full bg-brand-500/20">Popular</span>}
      </div>
      <div className="text-4xl font-extrabold">{price}</div>
      <ul className="flex-1 space-y-2">
        {perks.map((p,i)=> <li key={i} className="text-sm ">• {p}</li>)}
      </ul>
      <Button onClick={onSelect}>Start Free Trial</Button>
    </Card>
  )
}
