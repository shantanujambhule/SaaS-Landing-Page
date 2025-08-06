// components/CoverAnimator.tsx
'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CoverAnimator() {
  useEffect(() => {
    // Animate all "cover-section" elements as they enter the viewport
    const sections = gsap.utils.toArray<HTMLElement>('.cover-section')

    sections.forEach((section) => {
      // initial clip to show a thin top stripe so it looks like coming from top
      gsap.set(section, { autoAlpha: 0.98, y: 60, clipPath: 'inset(0 0 100% 0)' })

      ScrollTrigger.create({
        trigger: section,
        start: 'top 95%',    // when top of section is near bottom of viewport
        end: 'top 40%',      // end when it's higher up
        scrub: 0.6,
        onEnter: () => {
          gsap.to(section, {
            clipPath: 'inset(0% 0% 0% 0%)', // reveal fully
            y: 0,
            ease: 'power2.out',
            duration: 0.8,
          })
        },
        onLeaveBack: () => {
          // going back up -> reset
          gsap.set(section, { clipPath: 'inset(0 0 100% 0)', y: 60 })
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((s) => s.kill && s.kill())
    }
  }, [])

  return null
}
