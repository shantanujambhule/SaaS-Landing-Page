'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => setIsMobileMenuOpen((s) => !s)

  // close on outside click (mobile)
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return
      if (isMobileMenuOpen && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [isMobileMenuOpen])

  // helper to smoothly scroll and close menu
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el) return

    // Smooth scroll, then close mobile menu (small timeout to avoid race)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Close menu after a short delay to avoid interrupting the scroll on some browsers
    setTimeout(() => setIsMobileMenuOpen(false), 250)
  }

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-6 py-3 mx-auto max-w-[1200px] 
                 backdrop-blur-md bg-white/8 dark:bg-black/12 rounded-full shadow-md"
      // style={{ WebkitBackdropFilter: 'blur(8px)' }} // Safari fallback
    >
      {/* left: logo */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <svg
            width="36"
            height="36"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
            aria-hidden
          >
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
          </svg>

          {/* optional brand text */}
        </Link>

        {/* desktop nav links */}
        <div className="hidden md:flex items-center gap-6 ml-96">
          {['Products', 'Stories', 'Pricing', 'Docs'].map((item) => (
            <a
              key={item}
              href="#"
              className="relative overflow-hidden h-6 group text-white/95 text-sm font-medium"
            >
              <span className="block transform-gpu transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </span>
              <span className="absolute block top-full left-0 transform-gpu transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* right: actions */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => {
              // desktop contact scroll
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border border-white/25 hover:bg-white/6 px-4 py-2 rounded-full text-sm text-white/95 transition"
            aria-label="Contact"
          >
            Contact
          </button>

          <button
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition"
            aria-label="Get started"
            onClick={() => (window.location.href = '/signup')}
          >
            Get Started
          </button>
        </div>

        {/* mobile hamburger */}
        <button
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen ? true : false}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-full bg-white/6 text-white/95 hover:bg-white/10 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={isMobileMenuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        // Use visible/hidden opacity + translate for motion, and pointer-events so closed menu doesn't intercept clicks
        className={`fixed inset-x-4 top-[72px] z-40 transform-gpu rounded-xl p-5 transition-all duration-300
                    ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="backdrop-blur-3xl bg-white/60 dark:bg-black/12 rounded-xl border border-white/8 p-4 flex flex-col gap-4">
          {['Products', 'Customer Stories', 'Pricing', 'Docs'].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-white text-base font-medium py-2 px-2 rounded hover:bg-white/20 transition"
            >
              {item}
            </a>
          ))}

          <div className="flex gap-3 pt-2">
            <button
              onClick={scrollToContact}
              className="flex-1 border border-gray-100 hover:bg-white/60 px-4 py-2 rounded-full text-gray-900 text-sm transition"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                window.location.href = '/signup'
              }}
              className="flex-1 bg-white/0 text-black px-4 py-2 rounded-full text-sm font-semibold shadow transition hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
