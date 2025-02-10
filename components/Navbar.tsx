import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent absolute top-10 max-md:top-0  z-50 px-4 ">
      <div className="container mx-auto w-full px-20 max-md:px-5 h-20  flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image

            src="/static/logo/typography.png"
            alt="Mission ABC"
            width={64}
            height={64}

          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex md:p-5 md:py-2 rounded-xl bg-[#30302F] items-center space-x-8">
          <Link href="/work" className="text-white hover:text-gray-300">
            Work
          </Link>
          <Link href="/process" className="text-white hover:text-gray-300">
            Process
          </Link>
          <Link href="/experience" className="text-white hover:text-gray-300">
            Experience
          </Link>
          <Link href="/faq" className="text-white hover:text-gray-300">
            FAQ
          </Link>

        </div>
        <button className="font-manrope  btn bg-yellow text-black px-4 md:px-6 py-2 md:py-3 rounded-[12px] shadow-md   text-sm md:text-base">
          Start Now
        </button>

        {/* Mobile Menu Button */}
        <button className="font-manrope  btn md:hidden text-white">
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
        </button>
      </div>
    </nav>
  )
} 