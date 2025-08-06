'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Image from 'next/image'
// import BackgroundVideo from './BackgroundVideo' // enable if you want the video layer

import icon1 from '@/public/imges/icon-1.png'
import icon2 from '@/public/imges/icon-2.png'
import icon3 from '@/public/imges/icon-3.png'
import icon4 from '@/public/imges/icon-4.png'

const icons = [icon1, icon2, icon3, icon4]
const phrases = [
  'Believe in coding',
  'Never give up',
  'Code consistently',
  'Rise to glory',
  'Top of the peak',
]

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const iconContainerRef = useRef<HTMLDivElement | null>(null)
  const textRefs = useRef<Array<HTMLSpanElement | null>>([])
  const placeholderRefs = useRef<Array<HTMLDivElement | null>>([])
  const duplicateIconsRef = useRef<HTMLElement[]>([])
  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    // Lenis setup (typed using InstanceType)
    const lenis = new Lenis()
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // DOM elements
    const animatedIconsContainer = iconContainerRef.current
    const iconElements: NodeListOf<HTMLElement> | null = animatedIconsContainer
      ? animatedIconsContainer.querySelectorAll<HTMLElement>('.animated-icon')
      : null

    const placeholders = placeholderRefs.current
    const textSegments = textRefs.current
    const heroHeader = headerRef.current
    const heroSection = heroRef.current

    // Randomize animation order for text segments safely
    const textAnimationOrder = textSegments.map((segment, index) => ({ segment, originalIndex: index }))
    for (let i = textAnimationOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[textAnimationOrder[i], textAnimationOrder[j]] = [textAnimationOrder[j], textAnimationOrder[i]]
    }

    const isMobile = window.innerWidth < 1000
    const headerIconSize = isMobile ? 30 : 60
    const currentIconSize =
      iconElements && iconElements.length > 0 ? iconElements[0].getBoundingClientRect().width : 1
    const exactScale = headerIconSize / Math.max(currentIconSize, 1)

    const removeDuplicates = () => {
      duplicateIconsRef.current.forEach((dup) => dup.remove())
      duplicateIconsRef.current = []
    }

    const st = ScrollTrigger.create({
      trigger: heroSection as Element,
      start: 'top top',
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress: number = self.progress

        // hide text segments initially
        textSegments.forEach((segment) => {
          if (segment) gsap.set(segment, { opacity: 0 })
        })

        if (!heroHeader || !heroSection || !animatedIconsContainer) return

        if (progress < 0.3) {
          // Phase 1
          const moveProgress = progress / 0.3
          const containerMoveY = -window.innerHeight * 0.3 * moveProgress

          if (progress < 0.15) {
            const headerProgress = progress / 0.15
            const headerMoveY = -50 * headerProgress
            const headerOpacity = 1 - headerProgress
            gsap.set(heroHeader, { y: headerMoveY, opacity: headerOpacity })
          } else {
            gsap.set(heroHeader, { y: -50, opacity: 0 })
          }

          removeDuplicates()

          gsap.set(animatedIconsContainer, { x: 0, y: containerMoveY, scale: 1, opacity: 1 })

          if (iconElements) {
            iconElements.forEach((icon, index) => {
              const staggerDelay = index * 0.1
              const iconProgress = gsap.utils.mapRange(staggerDelay, staggerDelay + 0.5, 0, 1, moveProgress)
              const clampedProgress = Math.max(0, Math.min(1, iconProgress))
              const startOffset = -containerMoveY
              const individualY = startOffset * (1 - clampedProgress)
              gsap.set(icon, { x: 0, y: individualY })
            })
          }
        } else if (progress < 0.6) {
          // Phase 2
          const scaleProgress = (progress - 0.3) / 0.3
          gsap.set(heroHeader, { y: -50, opacity: 0 })
          heroSection.style.backgroundColor = scaleProgress > 0.5 ? '#e3e3db' : ''

          const targetCenterX = window.innerWidth / 2
          const targetCenterY = window.innerHeight / 2
          const containerRect = animatedIconsContainer.getBoundingClientRect()
          const containerCenterX = containerRect.left + containerRect.width / 2
          const containerCenterY = containerRect.top + containerRect.height / 2

          const deltaX = (targetCenterX - containerCenterX) * scaleProgress
          const deltaY = (targetCenterY - containerCenterY) * scaleProgress
          const baseY = -window.innerHeight * 0.3
          const currentScale = 1 + (exactScale - 1) * scaleProgress

          gsap.set(animatedIconsContainer, {
            x: deltaX,
            y: baseY + deltaY,
            scale: currentScale,
            opacity: 1,
          })

          if (iconElements) {
            iconElements.forEach((icon) => gsap.set(icon, { x: 0, y: 0 }))
          }
        } else if (progress < 0.75) {
          // Phase 3 - create duplicates and animate to placeholders
          const moveProgress = (progress - 0.6) / 0.15
          gsap.set(heroHeader, { y: -50, opacity: 0 })
          heroSection.style.backgroundColor = '#e3e3db'

          const containerRect = animatedIconsContainer.getBoundingClientRect()
          const currentCenterX = containerRect.left + containerRect.width / 2
          const currentCenterY = containerRect.top + containerRect.height / 2
          const targetCenterX = window.innerWidth / 2
          const targetCenterY = window.innerHeight / 2
          const deltaX = targetCenterX - currentCenterX
          const deltaY = targetCenterY - currentCenterY
          const baseY = -window.innerHeight * 0.3

          gsap.set(animatedIconsContainer, { x: deltaX, y: baseY + deltaY, scale: exactScale, opacity: 0 })
          if (iconElements) iconElements.forEach((icon) => gsap.set(icon, { x: 0, y: 0 }))

          // create duplicates once
          if (duplicateIconsRef.current.length === 0 && iconElements) {
            iconElements.forEach((iconEl) => {
              const el = (iconEl.cloneNode(true) as HTMLElement)
              el.className = 'duplicate-icon'
              el.style.position = 'absolute'
              el.style.width = `${headerIconSize}px`
              el.style.height = `${headerIconSize}px`
              el.style.display = 'none'
              document.body.appendChild(el)
              duplicateIconsRef.current.push(el)
            })
          }

          duplicateIconsRef.current.forEach((duplicate, index) => {
            if (index < placeholders.length && iconElements && iconElements[index]) {
              const iconRect = iconElements[index].getBoundingClientRect()
              const startCenterX = iconRect.left + iconRect.width / 2
              const startCenterY = iconRect.top + iconRect.height / 2
              const startPageX = startCenterX + window.pageXOffset
              const startPageY = startCenterY + window.pageYOffset

              const targetRect = placeholders[index]?.getBoundingClientRect()
              if (!targetRect) return
              const targetCenterX = targetRect.left + targetRect.width / 2
              const targetCenterY = targetRect.top + targetRect.height / 2
              const targetPageX = targetCenterX + window.pageXOffset
              const targetPageY = targetCenterY + window.pageYOffset

              const moveX = targetPageX - startPageX
              const moveY = targetPageY - startPageY

              let currentX = 0
              let currentY = 0
              if (moveProgress < 0.5) {
                currentY = moveY * (moveProgress / 0.5)
              } else {
                currentX = moveX * ((moveProgress - 0.5) / 0.5)
                currentY = moveY
              }

              const finalPageX = startPageX + currentX
              const finalPageY = startPageY + currentY

              duplicate.style.left = `${finalPageX - headerIconSize / 2}px`
              duplicate.style.top = `${finalPageY - headerIconSize / 2}px`
              duplicate.style.opacity = '1'
              duplicate.style.display = 'flex'
            }
          })
        } else {
          // Final phase: reveal text and pin duplicates to placeholders
          gsap.set(heroHeader, { y: -100, opacity: 0 })
          heroSection.style.backgroundColor = '#e3e3db'
          gsap.set(animatedIconsContainer, { opacity: 0 })

          duplicateIconsRef.current.forEach((duplicate, index) => {
            const targetRect = placeholders[index]?.getBoundingClientRect()
            if (!targetRect) return
            const targetCenterX = targetRect.left + targetRect.width / 2
            const targetCenterY = targetRect.top + targetRect.height / 2
            const targetPageX = targetCenterX + window.pageXOffset
            const targetPageY = targetCenterY + window.pageYOffset

            duplicate.style.left = `${targetPageX - headerIconSize / 2}px`
            duplicate.style.top = `${targetPageY - headerIconSize / 2}px`
            duplicate.style.opacity = '1'
            duplicate.style.display = 'flex'
          })

          textAnimationOrder.forEach((item, randomIndex) => {
            const segmentStart = 0.75 + randomIndex * 0.03
            const segmentEnd = segmentStart + 0.015
            const segmentProgress = gsap.utils.mapRange(segmentStart, segmentEnd, 0, 1, progress)
            const clampedProgress = Math.max(0, Math.min(1, segmentProgress))

            if (item.segment) {
              gsap.set(item.segment, {
                opacity: clampedProgress,
                y: 20 * (1 - clampedProgress),
              })
            }
          })

          if (progress >= 0.9) {
            textSegments.forEach((segment) => {
              if (segment) gsap.set(segment, { opacity: 1, y: 0 })
            })
          }
        }
      },
    })

    // Cleanup
    return () => {
      st.kill?.()
      ScrollTrigger.getAll().forEach((s) => s.kill?.())
      removeDuplicates()
      lenis.destroy?.()
      gsap.ticker.remove(tickerCallback)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero relative w-screen h-[100svh] flex flex-col items-center justify-center overflow-hidden p-6"
    >
      {/* Uncomment and use BackgroundVideo if needed */}
      {/* <BackgroundVideo /> */}

      <div
        ref={headerRef}
        className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[60%] flex flex-col gap-8 will-change-transform"
      >
        <h1 className="text-4xl md:text-5xl font-display leading-tight inset-0 text-transparent text-stroke">
          ADmyBRAND AI Suite — Marketing, automated.
        </h1>

        <p className="text-xl md:text-2xl font-normal text-gray-800">
          Create hyper-personalized ads, landing pages and campaigns <br /> in minutes using AI-driven
          creative, audience insights, and one-click deployment.
        </p>
      </div>

      <div
        ref={iconContainerRef}
        className="animated-icons fixed h-96 w-80 bottom-4 flex items-center gap-4 z-20 will-change-transform"
      >
        {icons.map((src, i) => (
          <div key={i} className="animated-icon flex-1 aspect-square will-change-transform">
            <Image src={src} alt={`icon-${i + 1}`} className="w-2xl h-2xl object-cover" />
          </div>
        ))}
      </div>

      <h1 className="animated-text relative max-w-[1000px] text-center text-[#141414] text-[clamp(2rem,1vw,4rem)] font-extrabold leading-none">
        {phrases.map((phrase, i) => (
          <React.Fragment key={i}>
            <div
              ref={(el) => {
                // assign to placeholderRefs array; must return void
                placeholderRefs.current[i] = el ?? null
              }}
              className="placeholder-icon inline-block align-middle w-[60px] h-[60px] invisible mt-[-10px]"
            />
            <span
              ref={(el) => {
                textRefs.current[i] = el ?? null
              }}
              className="text-segment inline-block opacity-0"
            >
              {phrase}
            </span>
          </React.Fragment>
        ))}
      </h1>
    </section>
  )
}
