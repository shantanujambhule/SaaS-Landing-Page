'use client'
import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative mt-16 px-6 md:px-12 py-10 backdrop-blur-md bg-white/10 rounded-t-3xl border-t border-white/20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-white drop-shadow-lg">ADmyBRAND AI Suite</h2>
          <p className="text-sm text-gray-200/90">
            AI-powered tools to plan, create, and optimize campaigns — built for growth teams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white drop-shadow-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200/90">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-white drop-shadow-lg">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ADmyBRAND on Twitter"
              title="Twitter — ADmyBRAND"
              className="hover:text-blue-400 flex items-center"
            >
              <FaTwitter aria-hidden="true" />
              <span className="sr-only">Twitter</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ADmyBRAND on LinkedIn"
              title="LinkedIn — ADmyBRAND"
              className="hover:text-blue-300 flex items-center"
            >
              <FaLinkedin aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ADmyBRAND GitHub repository"
              title="GitHub — ADmyBRAND"
              className="hover:text-gray-300 flex items-center"
            >
              <FaGithub aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/60">
        © {new Date().getFullYear()} ADmyBRAND. All rights reserved.
      </div>
    </footer>
  )
}
