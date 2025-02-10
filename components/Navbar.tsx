"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="absolute w-full bg-transparent top-5 max-md:top-0 z-50 px-4">
      <div className="container mx-auto w-full px-4 md:px-20 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/static/logo/typography.png"
            alt="Mission ABC"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex p-4 py-2 rounded-xl bg-[#30302F] items-center space-x-8">
          <Link href="/work" className="text-white hover:text-gray-300 transition-colors">
            Work
          </Link>
          <Link href="/process" className="text-white hover:text-gray-300 transition-colors">
            Process
          </Link>
          <Link href="/experience" className="text-white hover:text-gray-300 transition-colors">
            Experience
          </Link>
          <Link href="/faq" className="text-white hover:text-gray-300 transition-colors">
            FAQ
          </Link>
        </div>

        {/* Start Now Button */}
        <button className="bg-yellow text-black px-3 py-2 md:px-6 md:py-3 rounded-xl shadow-md text-sm md:text-base font-medium hover:bg-opacity-90 transition-all">
          Start Now
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-black bg-opacity-95 md:hidden transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              href="/work" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="/process" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link 
              href="/experience" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="/faq" 
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <button 
              className="bg-yellow text-black px-6 py-3 rounded-xl shadow-md text-lg font-medium hover:bg-opacity-90 transition-all mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 