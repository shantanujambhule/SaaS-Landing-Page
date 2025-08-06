'use client'

import React from 'react'

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-b from-transparent to-black/5"
    >
      <div className="max-w-3xl mx-auto">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              Get in Touch
            </h2>
            <p className="text-gray-200/90 text-sm md:text-base mt-2">
              Let’s talk about how we can work together.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
