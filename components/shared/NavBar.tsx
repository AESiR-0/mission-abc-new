"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute w-full">
      <div className="max-w-full mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/assests/images/logo.png" 
              alt="Logo" 
              width={96} 
              height={79}
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-6 lg:gap-8 bg-[rgb(70,67,61)] rounded-[12px] py-3 px-4 lg:px-6">
              <button className="text-base lg:text-lg font-normal text-white hover:text-yellow-400 transition-colors">
                Work
              </button>
              <button className="text-base lg:text-lg font-normal text-white hover:text-yellow-400 transition-colors">
                Process
              </button>
              <button className="text-base lg:text-lg font-normal text-white hover:text-yellow-400 transition-colors">
                Experience
              </button>
              <button className="text-base lg:text-lg font-normal text-white hover:text-yellow-400 transition-colors">
                FAQ
              </button>
            </div>
          </div>

          {/* Start Now Button - Desktop */}
          <div className="hidden md:block">
            <button className="px-6 py-3 bg-[rgba(241,188,64,1)] text-[rgb(20,21,19)] font-semibold rounded-[12px] hover:bg-[#ffa533] transition-colors">
              Start Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[rgb(70,67,61)] rounded-b-[12px] shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button className="block w-full text-left text-base font-normal text-white hover:text-yellow-400 transition-colors py-2">
                Work
              </button>
              <button className="block w-full text-left text-base font-normal text-white hover:text-yellow-400 transition-colors py-2">
                Process
              </button>
              <button className="block w-full text-left text-base font-normal text-white hover:text-yellow-400 transition-colors py-2">
                Experience
              </button>
              <button className="block w-full text-left text-base font-normal text-white hover:text-yellow-400 transition-colors py-2">
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;